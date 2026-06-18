import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '../../../../lib/servicesData';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | WeMediaCrew — UAE & Canada`,
    description: service.intro[0],
    keywords: service.keywords,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main className="bg-white min-h-screen">

      {/* Hero */}
      <section className="relative bg-black text-white">
        <img
          src={service.thumbnail}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 pt-36 pb-20 min-h-[580px] flex flex-col justify-end">
          <Link href="/services" className="inline-flex items-center gap-2 text-gray-400 text-sm mb-8 hover:text-white transition-colors w-fit">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-2 h-2 fill-[#ffd731]" viewBox="0 0 512 512"><circle cx="256" cy="256" r="256" /></svg>
            <span className="text-xs uppercase tracking-widest text-gray-400">{service.title}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight max-w-4xl mb-6">
            {service.tagline}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-[1000px] mx-auto px-6 py-16">
        {service.intro.map((para, i) => (
          <p key={i} className="text-gray-700 text-lg leading-relaxed mb-5">{para}</p>
        ))}
      </section>

      {/* Sections */}
      <section className="max-w-[1000px] mx-auto px-6 pb-16 space-y-16">
        {service.sections.map((section) => (
          <div key={section.heading}>
            <h2 className="text-2xl font-black mb-8 pb-4 border-b border-gray-100">{section.heading}</h2>

            {section.items && (
              <div className="grid md:grid-cols-2 gap-6">
                {section.items.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#ffd731] flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-base mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {section.body && (
              <p className="text-gray-700 leading-relaxed">{section.body}</p>
            )}
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-[#ffd731] py-16">
        <div className="max-w-[1000px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black mb-1">Ready to get started?</h3>
            <p className="text-black/70 text-sm">Tell us about your project — we respond within 24 hours.</p>
          </div>
          <Link
            href={service.cta}
            className="bg-black text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-gray-900 transition-colors whitespace-nowrap"
          >
            {service.ctaLabel} →
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1000px] mx-auto px-6">
          <h3 className="text-2xl font-black mb-8">Other Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={s.thumbnail}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="p-5">
                  <h4 className="font-bold text-base group-hover:text-[#ffd731] transition-colors">{s.title}</h4>
                  <p className="text-gray-500 text-xs mt-1 line-clamp-2">{s.intro[0]}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
