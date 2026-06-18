import Link from 'next/link';
import ArrowButton from "./ui/ArrowButton";
import Badge from "./ui/Badge";
import { blogPosts } from '../lib/blogData';

export default function Blog() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2">
            <svg className="w-2 h-2 fill-black" viewBox="0 0 512 512">
              <circle cx="256" cy="256" r="256" />
            </svg>
            <span className="text-sm uppercase tracking-wider font-medium">LATEST NEWS</span>
          </div>
          <ArrowButton href="/blog" text="VIEW ALL POSTS" />
        </div>

        <div className="w-full h-px bg-gray-200 mb-12"></div>

        {/* Title & Description */}
        <div className="text-center mb-16">
          <h2 className="text-7xl md:text-8xl lg:text-9xl mb-6" style={{ fontWeight: '800 !important' }}>Blog</h2>
          <p className="text-gray-500 text-lg">
            Stay ahead with actionable insights, expert advice, and<br />practical strategies for digital success.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr_1fr] gap-6">
          {posts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <div className="mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className={`w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ${index === 0 ? 'h-[432px]' : 'h-[206px]'}`}
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">{post.date}</span>
                <Badge text={post.category.toUpperCase()} />
              </div>
              <div className="w-full h-px bg-gray-200 opacity-80 mb-4"></div>
              <h3 className="text-[28px] leading-tight" style={{ fontWeight: '700 !important' }}>
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
