"use client"

import ArrowButton from '../ui/ArrowButton';

export default function ProjectInquiry() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-black text-center mb-10">
          Have a project
        </h2>

        {/* Buttons flank the video on desktop, stack on mobile */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
          <div className="flex-shrink-0">
            <ArrowButton href="/projects" text="PLAY THE REEL" bgColor="bg-transparent" />
          </div>

          <div
            className="relative rounded-lg overflow-hidden w-full max-w-[800px] flex-1 min-w-0"
            style={{ aspectRatio: '16 / 9' }}
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              playsInline
              loop
              src="https://videos.pexels.com/video-files/4761706/4761706-uhd_2732_1440_25fps.mp4"
            />
          </div>

          <div className="flex-shrink-0">
            <ArrowButton href="/contact" text="CONTACT US" bgColor="bg-transparent" />
          </div>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-black text-center mt-10">
          in mind?
        </h2>
      </div>
    </div>
  );
}
