export default function AboutHero() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat">
      {/* Portrait image — mobile & tablet only */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: "url('/photos/WebsiteImages/about/about-hero-port.webp')" }}
      />
      {/* Landscape image — desktop only */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: "url('/photos/WebsiteImages/about/about-hero.webp')" }}
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative w-full px-6 sm:px-8 lg:px-12 xl:px-16 min-h-screen flex flex-col justify-end pb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
          Who We Are.
        </h1>
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          A production crew built for brands that take their story seriously — operating across Dubai, Abu Dhabi, and Toronto.
        </p>
        <div className="h-px bg-gray-600 mb-0" />
      </div>
    </section>
  );
}
