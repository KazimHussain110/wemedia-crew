'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/blogData';
import Badge from '@/components/ui/Badge';

const categories = [
  'All',
  'Corporate Video Tips',
  'Event Coverage Insights',
  'Video Marketing Strategy',
  'Industry Spotlights',
  'Production Behind the Scenes',
];

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const [featured, ...rest] = filtered;

  return (
    <>
      {/* Sticky Filters */}
      <section className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-black transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Posts */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        {filtered.length === 0 ? (
          <p className="text-gray-400 text-center py-24 text-lg">No articles found.</p>
        ) : (
          <>
            {featured && (
              <Link href={`/blog/${featured.slug}`} className="group block mb-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className="overflow-hidden rounded-2xl">
                    <img src={featured.image} alt={featured.title} className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge text={featured.category.toUpperCase()} />
                      <span className="text-sm text-gray-400">{featured.date}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4 group-hover:text-[#ffd731] transition-colors duration-200">
                      {featured.title}
                    </h2>
                    <p className="text-gray-500 text-base leading-relaxed mb-6">{featured.excerpt}</p>
                    <span className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider group-hover:gap-4 transition-all duration-200">
                      Read Article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            )}

            {rest.length > 0 && <div className="w-full h-px bg-gray-100 mb-16" />}

            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rest.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                    <div className="overflow-hidden rounded-2xl mb-5">
                      <img src={post.image} alt={post.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <Badge text={post.category.toUpperCase()} />
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>
                    <div className="w-full h-px bg-gray-100 mb-3" />
                    <h3 className="text-xl font-bold leading-snug group-hover:text-[#ffd731] transition-colors duration-200">{post.title}</h3>
                    <p className="text-gray-500 text-sm mt-2 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
