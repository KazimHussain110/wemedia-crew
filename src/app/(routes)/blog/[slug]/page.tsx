import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '../../../../lib/blogData';
import Badge from '../../../../components/ui/Badge';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

const renderContent = (raw: string) => {
  return raw
    .trim()
    .split('\n')
    .map((line) => {
      if (line.startsWith('## '))
        return `<h2 class="text-2xl font-black mt-10 mb-4">${line.slice(3)}</h2>`;
      if (line.startsWith('### '))
        return `<h3 class="text-lg font-bold mt-6 mb-2">${line.slice(4)}</h3>`;
      if (line.startsWith('---'))
        return `<hr class="my-8 border-gray-200" />`;
      if (line.startsWith('|'))
        return `<div class="overflow-x-auto my-6 rounded-lg border border-gray-200"><table class="w-full text-sm border-collapse">${
          line.split('|').filter(Boolean).map((cell) =>
            `<td class="py-2 px-4 border-b border-gray-100">${cell.trim()}</td>`
          ).join('')
        }</table></div>`;
      if (line.trim() === '') return '';
      const html = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="underline font-medium hover:text-[#ffd731] transition-colors">$1</a>');
      return `<p class="text-gray-700 leading-relaxed mb-4">${html}</p>`;
    })
    .join('\n');
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-12 bg-black text-white">
        <div className="max-w-[860px] mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 text-sm mb-8 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <Badge text={post.category.toUpperCase()} />
            <span className="text-gray-400 text-sm">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">{post.title}</h1>
          <p className="text-gray-400 text-lg leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-[1100px] mx-auto px-6 mt-10">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[420px] md:h-[520px] object-cover rounded-2xl shadow-2xl"
        />
      </div>

      {/* Article Body */}
      <article className="max-w-[860px] mx-auto px-6 py-16">
        <div dangerouslySetInnerHTML={{ __html: renderContent(post.content) }} />
      </article>

      {/* CTA */}
      <section className="bg-[#ffd731] py-16">
        <div className="max-w-[860px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black mb-1">Ready to start your next project?</h3>
            <p className="text-black/70 text-sm">Talk to our team — we respond within one business day.</p>
          </div>
          <Link
            href="/contact"
            className="bg-black text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-gray-900 transition-colors whitespace-nowrap"
          >
            Get in Touch →
          </Link>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1100px] mx-auto px-6">
            <h3 className="text-2xl font-black mb-8">More Articles</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img src={r.image} alt={r.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge text={r.category.toUpperCase()} />
                      <span className="text-xs text-gray-400">{r.date}</span>
                    </div>
                    <h4 className="font-bold text-lg leading-snug group-hover:text-[#ffd731] transition-colors">{r.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
