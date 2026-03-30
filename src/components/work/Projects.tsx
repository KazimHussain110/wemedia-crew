'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projects } from '@/lib/workData';

const filters = ['All', 'Corporate Films', 'Event Coverage', 'Aerial', 'Social Content'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === f ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100 mb-4">
                <img
                  src={project.thumbnail}
                  alt={`${project.title} — ${project.client} | WeMediaCrew`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Play icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#ffd731] flex items-center justify-center">
                    <svg className="w-5 h-5 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
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
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-20">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}
