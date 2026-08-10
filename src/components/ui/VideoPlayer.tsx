"use client"

import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

type VideoPlayerProps = {
  src: string;
  poster?: string;
  active?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  className?: string;
};

export default function VideoPlayer({
  src,
  poster,
  active = false,
  muted = true,
  loop = true,
  playsInline = true,
  className,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const isHls = src.endsWith('.m3u8');

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;
    let cancelled = false;

    if (!active) {
      video.pause();
      video.removeAttribute('src');
      video.load();
      setReady(false);
      return () => {
        cancelled = true;
        if (hls) hls.destroy();
      };
    }

    setReady(false);

    const markReady = () => {
      if (!cancelled) setReady(true);
    };

    if (isHls) {
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
        markReady();
      } else if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, markReady);
      } else {
        video.src = src;
        markReady();
      }
    } else {
      video.src = src;
      markReady();
    }

    return () => {
      cancelled = true;
      if (hls) hls.destroy();
    };
  }, [src, active, isHls]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !ready || !active) return;

    const tryPlay = () => {
      video.muted = muted;
      const playPromise = video.play();
      if (playPromise) playPromise.catch(() => {});
    };

    video.addEventListener('loadeddata', tryPlay);
    video.addEventListener('canplay', tryPlay);
    tryPlay();

    return () => {
      video.removeEventListener('loadeddata', tryPlay);
      video.removeEventListener('canplay', tryPlay);
    };
  }, [active, ready, muted]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      className={className}
    />
  );
}
