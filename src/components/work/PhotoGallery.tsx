'use client';

import { useState } from 'react';

function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={onClose}>
      <button className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl leading-none" onClick={onClose}>
        ×
      </button>
      <button
        className="absolute left-4 text-white/60 hover:text-white p-3"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <img
        src={photos[index]}
        alt=""
        className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="absolute right-4 text-white/60 hover:text-white p-3"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
        {index + 1} / {photos.length}
      </p>
    </div>
  );
}

export default function PhotoGallery({ photos }: { photos: string[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {photos.map((src, i) => (
          <div
            key={i}
            className="break-inside-avoid cursor-zoom-in overflow-hidden rounded-xl group"
            onClick={() => setLightboxIndex(i)}
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => (i! - 1 + photos.length) % photos.length)}
          onNext={() => setLightboxIndex((i) => (i! + 1) % photos.length)}
        />
      )}
    </>
  );
}
