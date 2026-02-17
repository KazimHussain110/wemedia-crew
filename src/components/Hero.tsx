export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://player.vimeo.com/video/1088960671?muted=1&autoplay=1&loop=1&background=1&app_id=122963"
          className="absolute top-1/2 left-1/2 w-[177.77777778vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          title="Fr hero hm 1"
        />
      </div>

      <div className="relative z-10 w-full px-4 py-20 min-h-screen flex flex-col justify-between items-center max-w-[1400px] mx-auto">
        <div className="flex-1 flex flex-col justify-center items-center">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 text-center">
            a video
          </h2>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white text-center">
            agency
          </h2>
        </div>

        <div className="w-full">
          <div className="w-full h-px bg-white/20 mb-6"></div>
          <div className="flex flex-col md:flex-row gap-6 items-end justify-between">
            <div className="max-w-md">
              <p className="text-white text-lg md:text-xl leading-relaxed">
                Your story comes alive with amazing visuals wrapped up in top-notch animation video production and engaging storytelling.
              </p>
            </div>

            <a
              href="https://clutch.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group flex items-center gap-4"
            >
              <div className="flex flex-col">
                <h3 className="text-white text-sm font-medium mb-2">
                  Clutch average rating
                </h3>
                <h6 className="text-white text-xl font-bold mb-1">4.9 out of 5</h6>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
