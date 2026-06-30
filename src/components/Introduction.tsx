import ArrowButton from './ui/ArrowButton';

export default function Introduction() {
  return (
    <section className="py-20 bg-white">
      <div className="w-[80%] mx-auto px-4">
        <div className="grid lg:grid-cols-[28%_72%] gap-12 mb-16 items-start">
          <div>
            <div className="flex items-center gap-2">
              <svg className="w-2 h-2 fill-[#ffd731]" viewBox="0 0 512 512">
                <circle cx="256" cy="256" r="256" />
              </svg>
              <span className="text-sm uppercase tracking-wider">introduction</span>
            </div>
          </div>

          <div>
            <div className="pr-8 max-w-3xl">
              <p className="text-2xl md:text-3xl font-bold mb-8">
                What started as a small production outfit has grown into a full-service video and photography company. We work with multinational corporations, government entities, hospitality brands and event organizers across the UAE and Canada.
              </p>
              <ArrowButton href="/team" text="meet our team" />

              <div className="grid md:grid-cols-2 gap-8 mt-12 -ml-10 pr-5">
                <div className="flex gap-4 pt-6 border-t border-gray-300">
                  <svg className="w-8 h-8 flex-shrink-0 mt-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h5 className="text-lg font-bold mb-3 ml-4">A Team Built for This</h5>
                    <p className="text-gray-600 text-sm">
                      Cinematographers, editors, colorists, sound designers, drone operators and project managers. All sharing one obsession: making every frame count.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 pt-6 border-t border-gray-300">
                  <svg className="w-8 h-8 flex-shrink-0 mt-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h5 className="text-lg font-bold mb-3 ml-4">Two Continents, One Standard</h5>
                    <p className="text-gray-600 text-sm">
                      From trade shows in Abu Dhabi to C-suite interviews in Toronto. Every project sharpens our process. Every client raises our standard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Images — full width outside the 80% container */}
      <div className="w-[90%] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-0 relative z-20">
          <img src="/photos/Restaurant/getFlashy-1.webp" alt="Restaurant Photography" className="w-full h-64 md:h-72 object-cover rounded-lg" />
          <img src="/photos/Dubai Air Show Exibition/TAK-111_compressed.webp" alt="Dubai Air Show" className="w-full h-64 md:h-72 object-cover rounded-lg" />
          <img src="/photos/Etsalat Atlantes/DSC05451.jpg" alt="Etisalat Atlantes" className="w-full h-64 md:h-72 object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
}
