'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const MAX_ASSET_WAIT_MS = 10000;

function waitForWindowLoad() {
  if (document.readyState === 'complete') return Promise.resolve();

  return new Promise<void>((resolve) => {
    let done = false;
    const finish = () => {
      if (!done) {
        done = true;
        resolve();
      }
    };
    window.addEventListener('load', finish, { once: true });
    window.setTimeout(finish, MAX_ASSET_WAIT_MS);
  });
}

async function waitForVisibleAssets() {
  const images = Array.from(document.images).filter((image) => !image.complete);
  const videos = Array.from(document.querySelectorAll('video')).filter(
    (video) => video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA,
  );

  const assetPromises = [
    ...images.map(
      (image) =>
        new Promise<void>((resolve) => {
          image.addEventListener('load', () => resolve(), { once: true });
          image.addEventListener('error', () => resolve(), { once: true });
        }),
    ),
    ...videos.map(
      (video) =>
        new Promise<void>((resolve) => {
          video.addEventListener('loadeddata', () => resolve(), { once: true });
          video.addEventListener('error', () => resolve(), { once: true });
        }),
    ),
  ];

  await Promise.race([
    Promise.all(assetPromises),
    new Promise<void>((resolve) => window.setTimeout(resolve, MAX_ASSET_WAIT_MS)),
  ]);

  await document.fonts?.ready;
}

export default function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(8);
  const loadId = useRef(0);
  const firstLoad = useRef(true);

  useEffect(() => {
    const showLoader = () => {
      loadId.current += 1;
      setProgress(8);
      setVisible(true);
    };

    const handleNavigationStart = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href]');
      if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return;

      const destination = new URL(anchor.href, window.location.href);
      const current = new URL(window.location.href);

      if (
        destination.origin !== current.origin ||
        (destination.pathname === current.pathname && destination.search === current.search)
      ) {
        return;
      }

      showLoader();
    };

    // Note: the loader only starts on actual route changes (see the effect below).
    // We intentionally do NOT listen to `popstate`: back/forward navigation that
    // does not change the route (same-URL or hash-only history entries) would
    // otherwise show a loader that never completes.
    document.addEventListener('click', handleNavigationStart, true);
    return () => {
      document.removeEventListener('click', handleNavigationStart, true);
    };
  }, []);

  useEffect(() => {
    const currentLoadId = ++loadId.current;
    const startFrame = requestAnimationFrame(() => {
      setVisible(true);
      setProgress((current) => Math.max(current, 18));
    });

    const progressTimer = window.setInterval(() => {
      setProgress((current) => Math.min(90, current + Math.max(1, (90 - current) * 0.08)));
    }, 180);

    const complete = async () => {
      if (firstLoad.current) {
        await waitForWindowLoad();
        firstLoad.current = false;
      }

      await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
      await waitForVisibleAssets();

      if (currentLoadId !== loadId.current) return;

      window.clearInterval(progressTimer);
      setProgress(100);
      window.setTimeout(() => {
        if (currentLoadId === loadId.current) setVisible(false);
      }, 350);
    };

    void complete();
    return () => {
      cancelAnimationFrame(startFrame);
      window.clearInterval(progressTimer);
    };
  }, [pathname, searchParams]);

  if (!visible) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-[#2a2a2a] transition-opacity duration-300 ${
        progress >= 100 ? 'opacity-0' : 'opacity-100'
      }`}
      role="progressbar"
      aria-label="Loading page"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
    >
      <div className="w-full max-w-[340px] px-8">
        <div className="mb-7 flex items-end justify-between gap-6">
          {/* The raw preloaded asset avoids waiting for image optimization on the loading screen. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="WeMediaCrew"
            width={180}
            height={72}
            decoding="sync"
            fetchPriority="high"
            className="h-14 w-auto object-contain"
          />
          <p className="font-[family-name:var(--font-dm-sans)] text-xs tabular-nums text-white/50">
            {Math.round(progress)}%
          </p>
        </div>

        <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/15">
          <div
            className="relative h-full rounded-full bg-[#ffd731] shadow-[0_0_18px_rgba(255,215,49,0.75)] transition-[width] duration-300 ease-out"
            style={{ width: `${progress}%` }}
          >
            <span className="absolute inset-y-0 right-0 w-16 animate-pulse bg-gradient-to-r from-transparent to-white" />
          </div>
        </div>

      </div>
    </div>
  );
}
