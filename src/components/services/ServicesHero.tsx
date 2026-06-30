export default function ServicesHero() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat">
      {/* Portrait image — mobile & tablet only */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: "url('/photos/WebsiteImages/services/services-hero-port.webp')" }}
      />
      {/* Landscape image — desktop only */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: "url('/photos/WebsiteImages/services/services-hero.webp')" }}
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative w-full px-6 sm:px-8 lg:px-12 xl:px-16 min-h-screen flex flex-col justify-end pb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
          What We Provide.
        </h1>
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          Full-Service Video Production. Concept to Completion. Dubai to Toronto.
        </p>
        <div className="h-px bg-gray-600 mb-0" />
      </div>
    </section>
  );
}
