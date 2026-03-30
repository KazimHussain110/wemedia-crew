import Link from 'next/link';
import { blogPosts } from '@/lib/blogData';
import BlogList from '@/components/blog/BlogList';

export const metadata = {
  title: 'Blog | Video Production Tips & Industry Insights | WeMediaCrew',
  description: 'Expert insights on corporate video production, event videography, drone filming, and video marketing strategy. UAE and Canada focused.',
};

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-2 h-2 fill-[#ffd731]" viewBox="0 0 512 512">
              <circle cx="256" cy="256" r="256" />
            </svg>
            <span className="text-sm uppercase tracking-wider text-gray-400">WeMediaCrew Blog</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">Insights &<br />Ideas</h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Video strategy, production tips, and industry insights for brands that take their content seriously.
          </p>
        </div>
      </section>

      <BlogList posts={blogPosts} />

      {/* CTA Banner */}
      <section className="bg-[#ffd731] py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl font-black mb-2">Ready to start your next project?</h3>
            <p className="text-black/70">Talk to our team about what we can create together.</p>
          </div>
          <Link
            href="/contact"
            className="bg-black text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-gray-900 transition-colors whitespace-nowrap"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </main>
  );
}
