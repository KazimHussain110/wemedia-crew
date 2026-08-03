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
                What began as a passion for visual storytelling has grown into a full-service photography and videography company serving clients across Canada, the UAE, and Pakistan.
                We work with corporations, real estate professionals, hospitality brands, event organizers, and private clients to create polished, high-quality content that strengthens brands, captures meaningful moments, and leaves a lasting impression.
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
                      Our team includes photographers, cinematographers, editors, drone operators, and creative professionals—all working together to deliver a seamless experience from planning to final delivery.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 pt-6 border-t border-gray-300">
                  <svg className="w-8 h-8 flex-shrink-0 mt-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h5 className="text-lg font-bold mb-3 ml-4">Global Experience, Consistent Quality</h5>
                    <p className="text-gray-600 text-sm">
                       From corporate events and campaigns in Dubai to conferences, brand shoots, and client events in Toronto, we deliver every project with creativity, professionalism, and attention to detail.
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
          <img src="/photos/Worldpay/TAKP-194.webp" alt="WorldPay from FIS Corporate Event" className="w-full h-64 md:h-72 object-cover rounded-lg" />
          <img src="/photos/ADNEC/HUQ_9706.webp" alt="ADNEC Conference Coverage" className="w-full h-64 md:h-72 object-cover rounded-lg" />
          <img src="/photos/Etsalat Atlantes/DSC05513.jpg" alt="Etisalat Atlantes Brand Event" className="w-full h-64 md:h-72 object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
}
