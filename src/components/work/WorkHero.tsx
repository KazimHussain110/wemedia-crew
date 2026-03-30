import Link from 'next/link';

export default function WorkHero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1601506521793-dc748fc80b67?w=1920&q=80")' }}
    >
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 min-h-[580px] flex flex-col justify-end pb-16">
        <div className="flex items-center gap-2 mb-6">
          <svg className="w-2 h-2 fill-[#ffd731]" viewBox="0 0 512 512"><circle cx="256" cy="256" r="256" /></svg>
          <span className="text-sm uppercase tracking-wider text-gray-300">Our Work</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 max-w-3xl">
          The Work Speaks.<br />We Just Press Play.
        </h1>
        <p className="text-gray-300 text-base max-w-xl leading-relaxed mb-8">
          Every project here represents a real business challenge, a real client, and a real result. Browse by industry or project type to see the standard we deliver.
        </p>
        <div className="h-px bg-gray-600 mb-6 max-w-3xl" />
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#ffd731] transition-colors">Home</Link>
          <span>·</span>
          <span className="text-white">Work</span>
        </div>
      </div>
    </section>
  );
}
