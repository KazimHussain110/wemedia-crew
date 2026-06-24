import Link from 'next/link';

export default function WorkHero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1601506521793-dc748fc80b67?w=1920&q=80")' }}
    >
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative w-full px-6 sm:px-8 lg:px-12 xl:px-16 min-h-screen flex flex-col justify-end pb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
          Our Work.
        </h1>
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          Every project here represents a real business challenge, a real client, and a real result.
        </p>
        <div className="h-px bg-gray-600 mb-0" />
      </div>
    </section>
  );
}
