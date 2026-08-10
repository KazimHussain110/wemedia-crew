'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projects } from '../../lib/workData';

const videoFilters = ['Corporate Events', 'Real Estate', 'Exhibitions', 'Podcast & Panel Discussion'];
const photoFilters = ['Corporate Events', 'Exhibitions', 'Action Sports', 'Commercial'];

export default function Projects() {
  const [medium, setMedium] = useState<'video' | 'photography'>('video');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filters = medium === 'video' ? videoFilters : photoFilters;

  const filtered = projects.filter((p) => {
    if (p.medium !== medium) return false;
    if (!activeFilter) return true;
    return p.category === activeFilter;
  });

  function handleMediumSwitch(m: 'video' | 'photography') {
    setMedium(m);
    setActiveFilter(null);
  }

  function handleFilterClick(f: string) {
    setActiveFilter((prev) => (prev === f ? null : f));
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">

        {/* Medium Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            {(['video', 'photography'] as const).map((m) => (
              <button
                key={m}
                onClick={() => handleMediumSwitch(m)}
                className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 capitalize ${
                  medium === m ? 'bg-black text-white shadow' : 'text-gray-500 hover:text-black'
                }`}
              >
                {m === 'video' ? 'Videography' : 'Photography'}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => handleFilterClick(f)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === f ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => {
            const href =
              project.medium === 'video'
                ? `/work/videography/${project.slug}`
                : `/work/photography/${project.slug}`;

            return (
              <Link key={project.slug} href={href} className="group block">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100 mb-4">
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} — ${project.client} | WeMediaCrew`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-[#ffd731] flex items-center justify-center">
                      {project.medium === 'video' ? (
                        <svg className="w-5 h-5 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-block text-[10px] uppercase tracking-widest text-[#ffd731] font-semibold mb-1">
                      {project.category} · {project.year}
                    </span>
                    <h3 className="text-white font-bold text-lg leading-snug">{project.title}</h3>
                    <p className="text-gray-300 text-xs mt-1">{project.client}</p>
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
              </Link>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-20">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}
