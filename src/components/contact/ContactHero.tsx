import Link from 'next/link';

export default function ContactHero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=600&fit=crop")' }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 min-h-[580px] flex flex-col justify-end pb-16">
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 max-w-3xl">
          Let's Talk.
        </h1>
        <p className="text-gray-300 text-base max-w-md leading-relaxed mb-8">
          Tell us about your project — we'll respond within 24 hours with a tailored proposal.
        </p>
        <div className="h-px bg-gray-600 mb-6 max-w-3xl" />
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#ffd731] transition-colors">Home</Link>
          <span>·</span>
          <span className="text-white">Contact</span>
        </div>
      </div>
    </section>
  );
}
