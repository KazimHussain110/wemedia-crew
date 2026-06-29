export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          src="https://res.cloudinary.com/ddaovfpbu/video/upload/v1782747195/egypt-air-logo-removed_jjglvw.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 w-[177.77777778vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
        />
      </div>

      <div className="absolute inset-0 z-5 bg-black/40" />

      <div className="relative z-10 w-full px-6 md:px-12 py-20 min-h-screen flex flex-col justify-end items-start">
        <div className="max-w-4xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            Your Story Deserves a Crew.
          </h1>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
            Award-caliber corporate video production and event videography trusted by leading brands across the UAE and Canada. We capture what matters. You keep what lasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-semibold rounded-full text-sm hover:bg-white/90 transition-all duration-300"
            >
              Get a Free Consultation
            </a>
            <a
              href="/work"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 border border-white/50 text-white font-semibold rounded-full text-sm hover:bg-white/10 transition-all duration-300"
            >
              <span className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0">
                <svg className="w-2.5 h-2.5 text-white fill-current ml-0.5" viewBox="0 0 10 10">
                  <path d="M3 2l6 3-6 3V2z" />
                </svg>
              </span>
              Watch Our Showreel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
