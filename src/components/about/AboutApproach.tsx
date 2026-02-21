"use client"

export default function AboutApproach() {
  return (
    <div className="bg-[#f5f5f5] py-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Heading */}
          <div className="flex items-start">
            <h3 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
              Helping your brand's voice be heard in the digital world
            </h3>
          </div>

          {/* Video Background Section */}
          <div className="relative rounded-lg overflow-hidden h-[300px] flex items-end p-8 lg:col-span-2">
            <video 
              className="absolute inset-0 w-full h-full object-cover" 
              autoPlay 
              muted 
              playsInline 
              loop
              src="https://videos.pexels.com/video-files/1437396/1437396-uhd_2560_1440_24fps.mp4"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 text-white">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 512 512">
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                </svg>
                <span className="text-xs font-semibold tracking-wider">OUR APPROACH</span>
              </div>
              <p className="text-base max-w-md">
                Our goal is to create impactful stories that get the heart of your brand and its message connected with the right audience.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Icon Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Box 1 */}
          <div className="group">
            <div className="mb-6">
              <svg className="w-20 h-20 transition-transform duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
                <path d="M80.792 55.7542L99.4839 44.9771V125.966" stroke="black" strokeMiterlimit="10"></path>
                <path d="M117.832 12.8765L47.8086 53.5697L66.1873 64.3286" stroke="black" strokeMiterlimit="10"></path>
                <path d="M117.75 67.8185V13.1144L98.9225 2.16846L10.25 53.4742V74.565L99.2611 125.837L117.75 115.256V71.5699M80.7921 55.7541L80.5693 72.9604L65.8894 64.2181L80.7921 55.7541Z" stroke="black" strokeMiterlimit="10"></path>
                <path d="M45.2837 73.5724L80.5691 93.8149V72.9604" stroke="black" strokeMiterlimit="10"></path>
                <path d="M10.25 53.4741L41.7933 71.5698" stroke="black" strokeMiterlimit="10"></path>
              </svg>
            </div>
            <div className="relative mb-4 overflow-hidden">
              <div className="h-[1px] bg-gray-300 w-full transition-transform duration-500 group-hover:translate-x-full"></div>
              <div className="h-[1px] bg-black w-full absolute top-0 left-0 -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></div>
            </div>
            <h5 className="text-xl font-semibold text-black mb-3">Creativity without limits</h5>
            <p className="text-gray-600 text-sm leading-relaxed">
              We got into this business to tell compelling stories, collaborate with great thinkers, and connect ideas with people.
            </p>
          </div>

          {/* Box 2 */}
          <div className="group">
            <div className="mb-6">
              <svg className="w-20 h-20 transition-transform duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
                <path d="M53.8729 32.5134L32.7224 44.7644L11.5718 32.5132" stroke="black" strokeMiterlimit="10"></path>
                <path d="M10.8281 49.0103V58.5298L32.7226 71.212L42.1057 65.7768" stroke="black" strokeMiterlimit="10"></path>
                <path d="M54.6167 43.8833V32.9439L32.7226 20.2617L10.8281 32.9437V45.2626" stroke="black" strokeMiterlimit="10"></path>
                <path d="M32.7227 44.7646V71.2123" stroke="black" strokeMiterlimit="10"></path>
                <path d="M85.1509 14.4172L64.0003 26.6682L42.8496 14.417" stroke="black" strokeMiterlimit="10"></path>
                <path d="M85.8943 25.7871V14.8477L63.9999 2.16553L42.1055 14.8475V25.6971" stroke="black" strokeMiterlimit="10"></path>
                <path d="M64 26.668V38.4483" stroke="black" strokeMiterlimit="10"></path>
                <path d="M85.1509 50.6997L64.0003 62.9509L42.8496 50.6997" stroke="black" strokeMiterlimit="10"></path>
                <path d="M63.9999 38.4482L42.1055 51.1302V76.7162L63.9999 89.3984L85.8943 76.7165V51.1304L63.9999 38.4482Z" stroke="black" strokeMiterlimit="10"></path>
                <path d="M64 62.9507V89.3984" stroke="black" strokeMiterlimit="10"></path>
                <path d="M116.429 32.6033L95.2781 44.8543L74.1274 32.603" stroke="black" strokeMiterlimit="10"></path>
                <path d="M85.8944 65.867L95.2777 71.3022L117.172 58.6203V33.0343L95.2777 20.3521L73.3833 33.034V43.8837" stroke="black" strokeMiterlimit="10"></path>
                <path d="M95.2778 44.8545V71.3022" stroke="black" strokeMiterlimit="10"></path>
                <path d="M42.1055 75.7658L32.7224 81.2009L11.5718 68.9497" stroke="black" strokeMiterlimit="10"></path>
                <path d="M19.9726 64.0835L10.8281 69.3805V94.9665L32.7226 107.648L42.1057 102.214" stroke="black" strokeMiterlimit="10"></path>
                <path d="M32.7227 81.2007V107.648" stroke="black" strokeMiterlimit="10"></path>
                <path d="M85.1509 87.1357L64.0003 99.387L42.8496 87.1357" stroke="black" strokeMiterlimit="10"></path>
                <path d="M51.2615 82.2632L42.1055 87.5665V113.152L63.9999 125.834L85.8943 113.152V87.5665L76.7383 82.2632" stroke="black" strokeMiterlimit="10"></path>
                <path d="M64 99.3872V125.835" stroke="black" strokeMiterlimit="10"></path>
                <path d="M116.429 69.0396L95.2779 81.2908L85.8945 75.8556" stroke="black" strokeMiterlimit="10"></path>
                <path d="M117.172 82.7385V69.4707L107.911 64.106" stroke="black" strokeMiterlimit="10"></path>
                <path d="M85.8945 102.303L95.2779 107.738L117.172 95.0562V86.4858" stroke="black" strokeMiterlimit="10"></path>
                <path d="M95.2778 81.2905V107.738" stroke="black" strokeMiterlimit="10"></path>
              </svg>
            </div>
            <div className="relative mb-4 overflow-hidden">
              <div className="h-[1px] bg-gray-300 w-full transition-transform duration-500 group-hover:translate-x-full"></div>
              <div className="h-[1px] bg-black w-full absolute top-0 left-0 -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></div>
            </div>
            <h5 className="text-xl font-semibold text-black mb-3">Authentic storytelling</h5>
            <p className="text-gray-600 text-sm leading-relaxed">
              We are a creative production company that specializes in crafting unique stories to help you better connect with your customers.
            </p>
          </div>

          {/* Box 3 */}
          <div className="group">
            <div className="mb-6">
              <svg className="w-20 h-20 transition-transform duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
                <path d="M117.495 33.1738L64.1738 64.1611L10.5049 33.1753" stroke="black" strokeMiterlimit="10"></path>
                <path d="M117.495 76.0769L80.6299 97.6319L80.5615 73.5001L96.9692 63.9243" stroke="black" strokeMiterlimit="10"></path>
                <path d="M26.7363 79.0218L26.7864 61.376L47.7876 73.5011L47.7328 92.3953" stroke="black" strokeMiterlimit="10"></path>
                <path d="M26.6646 104.276L26.7254 82.7764" stroke="black" strokeMiterlimit="10"></path>
                <path d="M71.5099 25.4062L84.9334 33.1561L64.0686 45.2815L47.7871 35.8812" stroke="black" strokeMiterlimit="10"></path>
                <path d="M47.5977 11.6006L67.755 23.2383" stroke="black" strokeMiterlimit="10"></path>
                <path d="M105.304 101.907L117.495 94.8453V76.077L96.8089 64.1209L117.495 51.945V33.1554L63.8266 2.16943L47.5978 11.6005V35.7718L26.7333 23.7258L10.5049 33.1567V94.8453L26.6647 104.276L47.7345 92.0727L47.6657 116.401L63.999 125.831L101.549 104.082" stroke="black" strokeMiterlimit="10"></path>
                <path d="M42.8928 94.8452L26.6646 104.276" stroke="black" strokeMiterlimit="10"></path>
                <path d="M64.1738 64.1611V125.831" stroke="black" strokeMiterlimit="10"></path>
              </svg>
            </div>
            <div className="relative mb-4 overflow-hidden">
              <div className="h-[1px] bg-gray-300 w-full transition-transform duration-500 group-hover:translate-x-full"></div>
              <div className="h-[1px] bg-black w-full absolute top-0 left-0 -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></div>
            </div>
            <h5 className="text-xl font-semibold text-black mb-3">Excellence in every frame</h5>
            <p className="text-gray-600 text-sm leading-relaxed">
              We don't believe in one-size-fits-all approaches. Every solution we create is carefully crafted to address your specific challenges.
            </p>
          </div>

          {/* Box 4 */}
          <div className="group">
            <div className="mb-6">
              <svg className="w-20 h-20 transition-transform duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
                <path d="M117.446 33.1616L89.5762 49.3573" stroke="black" strokeMiterlimit="10"></path>
                <path d="M38.5003 49.3575L10.4487 33.1621" stroke="black" strokeMiterlimit="10"></path>
                <path d="M105.356 101.993L117.763 94.8422L117.446 33.2505L63.7727 2.17334L10.4487 33.1906L10.2349 94.8422L63.999 125.83L101.596 104.16" stroke="black" strokeMiterlimit="10"></path>
                <path d="M38.4306 60.2421L38.4614 49.3803L63.9554 34.5649L89.5368 49.3637L89.6203 78.8044L63.9992 93.5967L38.3779 78.8044L38.4198 64.0808" stroke="black" strokeMiterlimit="10"></path>
                <path d="M38.4609 76.8381L63.9549 62.0225L89.5364 76.8215" stroke="black" strokeMiterlimit="10"></path>
                <path d="M63.9551 34.5649V62.0225" stroke="black" strokeMiterlimit="10"></path>
                <path d="M63.999 93.5967V125.83" stroke="black" strokeMiterlimit="10"></path>
              </svg>
            </div>
            <div className="relative mb-4 overflow-hidden">
              <div className="h-[1px] bg-gray-300 w-full transition-transform duration-500 group-hover:translate-x-full"></div>
              <div className="h-[1px] bg-black w-full absolute top-0 left-0 -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></div>
            </div>
            <h5 className="text-xl font-semibold text-black mb-3">Passion-driven work</h5>
            <p className="text-gray-600 text-sm leading-relaxed">
              Collaborative partnerships matter to us because it's not about being right but rather about discovering the right idea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
