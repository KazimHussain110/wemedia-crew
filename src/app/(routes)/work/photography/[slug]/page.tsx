import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/workData';
import PhotoGallery from '@/components/work/PhotoGallery';

export function generateStaticParams() {
  return projects
    .filter((p) => p.medium === 'photography')
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug && p.medium === 'photography');
  if (!project) return {};
  return {
    title: `${project.title} — ${project.client} | WeMediaCrew`,
    description: project.description,
  };
}

export default async function PhotographyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug && p.medium === 'photography');
  if (!project) notFound();

  const photos = project.photos ?? [];
  const related = projects
    .filter((p) => p.medium === 'photography' && p.slug !== project.slug)
    .slice(0, 3);

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
          <p className="text-gray-400 text-sm mt-3 max-w-xl">{project.description}</p>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-[#ffd731]">
        <div className="max-w-[1000px] mx-auto px-6 py-4 flex flex-wrap gap-8">
          {[
            { label: 'Client', value: project.client },
            { label: 'Industry', value: project.industry },
            { label: 'Photos', value: `${photos.length} shots` },
            { label: 'Year', value: project.year },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-[10px] uppercase tracking-widest text-black/50 mb-0.5">{label}</p>
              <p className="font-bold text-sm">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Grid + Lightbox */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <PhotoGallery photos={photos} />
      </div>

      {/* CTA */}
      <section className="bg-black py-16">
        <div className="max-w-[1000px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-white mb-1">Book a Photography Session</h3>
            <p className="text-white/50 text-sm">Tell us about your event or brand — we'll respond within 24 hours.</p>
          </div>
          <Link
            href="/contact"
            className="bg-[#ffd731] text-black px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-yellow-400 transition-colors whitespace-nowrap"
          >
            Get in Touch →
          </Link>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <h3 className="text-2xl font-black mb-8">More Photography</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/work/photography/${r.slug}`} className="group block">
                  <div className="overflow-hidden rounded-xl aspect-[4/3] mb-3">
                    <img
                      src={r.thumbnail}
                      alt={`${r.title} | WeMediaCrew`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#ffd731] font-semibold">{r.category}</span>
                  <h4 className="font-bold mt-0.5 group-hover:text-[#ffd731] transition-colors">{r.title}</h4>
                  <p className="text-gray-500 text-sm">{r.client}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
