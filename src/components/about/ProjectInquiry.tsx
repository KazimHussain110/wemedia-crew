"use client"

import { useEffect, useRef, useState } from 'react';
import ArrowButton from '../ui/ArrowButton';

export default function ProjectInquiry() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Calculate how much of the section is visible
      const visibleTop = Math.max(0, -rect.top);
      const visibleBottom = Math.min(sectionHeight, windowHeight - rect.top);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const visibleRatio = visibleHeight / sectionHeight;
      
      if (visibleRatio > 0.9) {
        const progress = Math.min(1, (visibleRatio - 0.9) * 10);
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const videoScale = scrollProgress;
  const videoSize = videoScale * 500;
  const maxVideoHeight = 500 * 0.67;

  return (
    <div className="bg-white py-20" ref={sectionRef}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Button */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start overflow-hidden">
            <ArrowButton href="/projects" text="PLAY THE REEL" bgColor="bg-transparent" />
          </div>

          {/* Center Content */}
          <div className="order-1 lg:order-2 flex flex-col items-center">
            <h2 
              className="text-4xl lg:text-5xl font-bold text-black mb-6"
            >
              Have a project
            </h2>
            
            {/* Video Container */}
            <div 
              className="relative rounded-lg overflow-hidden will-change-transform"
              style={{
                width: `${videoSize}px`,
                height: `${videoSize * 0.67}px`,
                opacity: videoScale,
                marginBottom: '24px',
                transition: 'width 0.3s ease-out, height 0.3s ease-out, opacity 0.3s ease-out',
              }}
            >
              {videoSize > 0 && (
                <video 
                  className="w-full h-full object-cover" 
                  autoPlay 
                  muted 
                  playsInline 
                  loop
                  src="https://videos.pexels.com/video-files/4761706/4761706-uhd_2732_1440_25fps.mp4"
                />
              )}
            </div>
            
            <h2 
              className="text-4xl lg:text-5xl font-bold text-black"
            >
              in mind?
            </h2>
          </div>

          {/* Right Button */}
          <div className="order-3 flex justify-center lg:justify-end overflow-hidden">
            <ArrowButton href="/contact" text="CONTACT US" bgColor="bg-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}