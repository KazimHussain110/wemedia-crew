import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '../../../../../lib/workData';

export function generateStaticParams() {
  return projects
    .filter((p) => p.medium === 'video')
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug && p.medium === 'video');
  if (!project) return {};
  return {
    title: `${project.title} — ${project.client} | WeMediaCrew`,
    description: project.description,
  };
}

export default async function VideographyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug && p.medium === 'video');
  if (!project) notFound();

  const related = projects
    .filter((p) => p.medium === 'video' && p.slug !== project.slug)
    .slice(0, 2);

  return (
    <main className="bg-white min-h-screen">

      {/* Hero */}
      <section className="pt-32 pb-12 bg-black text-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <Link href="/work" className="inline-flex items-center gap-2 text-gray-400 text-sm mb-8 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Work
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-[#ffd731] text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              {project.projectType}
            </span>
            <span className="text-gray-400 text-sm">{project.industry}</span>
            <span className="text-gray-600 text-sm">·</span>
            <span className="text-gray-400 text-sm">{project.year}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">{project.title}</h1>
          <p className="text-gray-400 text-lg">Client: <span className="text-white font-semibold">{project.client}</span></p>
        </div>
      </section>

      {/* Thumbnail */}
      <div className="max-w-[1100px] mx-auto px-6 mt-10">
        <img
          src={project.thumbnail}
          alt={`${project.title} — ${project.client} | WeMediaCrew`}
          loading="lazy"
          className="w-full h-[420px] md:h-[520px] object-cover rounded-2xl shadow-2xl"
        />
      </div>

      {/* Case Study Body */}
      <div className="max-w-[1000px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { label: 'Client', value: project.client },
            { label: 'Industry', value: project.industry },
            { label: 'Project Type', value: project.projectType },
          ].map(({ label, value }) => (
            <div key={label} className="border-t-2 border-[#ffd731] pt-4">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">{label}</p>
              <p className="font-bold text-lg">{value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-3">The Challenge</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{project.challenge}</p>
          </div>
          <div className="w-full h-px bg-gray-100" />
          <div>
            <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-3">Our Approach</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{project.approach}</p>
          </div>
          <div className="w-full h-px bg-gray-100" />
          <div>
            <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-3">The Result</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{project.result}</p>
          </div>
        </div>

        {project.quote && (
          <blockquote className="mt-12 border-l-4 border-[#ffd731] pl-6">
            <p className="text-xl font-medium text-gray-800 leading-relaxed mb-3">"{project.quote}"</p>
            <cite className="text-sm text-gray-500 not-italic">— {project.quoteAuthor}</cite>
          </blockquote>
        )}
      </div>

      {/* Video Embed */}
      {project.videoEmbed && (
        <div className="max-w-[1000px] mx-auto px-6 pb-16">
          <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-6">Watch the Film</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-black">
            <iframe
              src={project.videoEmbed}
              title={`${project.title} — ${project.client}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-[#ffd731] py-16">
        <div className="max-w-[1000px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black mb-1">Start a Project Like This</h3>
            <p className="text-black/70 text-sm">Tell us about your brief — we'll respond within 24 hours.</p>
          </div>
          <Link
            href="/contact"
            className="bg-black text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-gray-900 transition-colors whitespace-nowrap"
          >
            Get in Touch →
          </Link>
        </div>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1100px] mx-auto px-6">
            <h3 className="text-2xl font-black mb-8">More Work</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((r) => (
                <Link key={r.slug} href={`/work/videography/${r.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={r.thumbnail}
                    alt={`${r.title} — ${r.client} | WeMediaCrew`}
                    loading="lazy"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="p-6">
                    <span className="text-[10px] uppercase tracking-widest text-[#ffd731] font-semibold">{r.category}</span>
                    <h4 className="font-bold text-lg mt-1 group-hover:text-[#ffd731] transition-colors">{r.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{r.client}</p>
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
