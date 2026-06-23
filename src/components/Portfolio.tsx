"use client"

import ArrowButton from './ui/ArrowButton';
import { useEffect, useRef } from 'react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Seamless — Live Event Film",
      description: "Multi-camera live event coverage captured and delivered with seamless precision for a high-profile UAE production.",
      category: "Event Coverage",
      year: "2025",
      videoUrl: "https://res.cloudinary.com/ddaovfpbu/video/upload/v1782233365/Final_-_14th_may_seamless_owv17v.mp4",
      imageUrl: "https://res.cloudinary.com/ddaovfpbu/video/upload/so_0/v1782233365/Final_-_14th_may_seamless_owv17v.jpg",
      link: "/work/videography/seamless-live-event"
    },
    {
      id: 2,
      title: "Rethink — Brand Campaign",
      description: "A bold brand film built around a single idea: rethink what corporate video can be. Cinematic, purposeful, and built to convert.",
      category: "Corporate Film",
      year: "2025",
      videoUrl: "https://res.cloudinary.com/ddaovfpbu/video/upload/v1782233359/Final_version_rethink_fwxtwk.mp4",
      imageUrl: "https://res.cloudinary.com/ddaovfpbu/video/upload/so_0/v1782233359/Final_version_rethink_fwxtwk.jpg",
      link: "/work/videography/rethink-brand-campaign"
    },
    {
      id: 3,
      title: "Seamless AK — Conference Film",
      description: "Full-scale conference film produced for Seamless AK — capturing keynotes, energy, and brand moments across a packed agenda.",
      category: "Event Coverage",
      year: "2025",
      videoUrl: "https://res.cloudinary.com/ddaovfpbu/video/upload/v1782233366/seamless_AK_keor4j.mp4",
      imageUrl: "https://res.cloudinary.com/ddaovfpbu/video/upload/so_0/v1782233366/seamless_AK_keor4j.jpg",
      link: "/work/videography/seamless-ak-conference"
    },
    {
      id: 4,
      title: "WorldPay from FIS — Corporate Film",
      description: "A polished corporate production for WorldPay from FIS — communicating brand trust, global reach, and financial expertise.",
      category: "Corporate Film",
      year: "2025",
      videoUrl: "https://res.cloudinary.com/ddaovfpbu/video/upload/v1782232545/WorldPlay_from_FIS_m3cz8q.mp4",
      imageUrl: "https://res.cloudinary.com/ddaovfpbu/video/upload/so_0/v1782232545/WorldPlay_from_FIS_m3cz8q.jpg",
      link: "/work/videography/worldpay-fis-corporate"
    }
  ];

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((card) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const cardCenter = rect.top + rect.height / 2;
        const screenCenter = windowHeight / 2;
        const distance = cardCenter - screenCenter;
        const maxDistance = windowHeight / 2;
        
        // Calculate rotation based on distance from center (reduced flip angle)
        let rotation = -(distance / maxDistance) * 45;
        rotation = Math.max(-45, Math.min(45, rotation));
        
        // Calculate opacity based on position
        const opacity = 1 - Math.abs(distance) / maxDistance;
        
        const inner = card.querySelector('.flip-card-inner') as HTMLElement;
        if (inner) {
          inner.style.transform = `rotateX(${rotation}deg)`;
          inner.style.opacity = `${Math.max(0.3, opacity)}`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 bg-[#2B2B2B] relative z-10 -mt-27">
      <div className="w-[90%] mx-auto px-4">
        <div className="flex items-center justify-between mb-16 text-white">
          <div className="flex items-center gap-2">
            <svg className="w-2 h-2 fill-white" viewBox="0 0 512 512">
              <circle cx="256" cy="256" r="256" />
            </svg>
            <span className="text-sm uppercase tracking-wider">portfolio</span>
          </div>
          <ArrowButton href="/projects" text="view our work" />
        </div>

        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">The Work Speaks. We Just Press Play.</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Every project represents a real business challenge, a real client, and a real result.
          </p>
        </div>

        <div className="flex flex-col gap-8 py-20">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              ref={(el) => { cardRefs.current[index] = el; }}
              className="flip-card mx-auto w-full max-w-7xl"
              style={{ perspective: '1000px' }}
            >
              <div className="flip-card-inner" style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s ease-out, opacity 0.1s ease-out' }}>
                <div className="flip-card-front bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl relative" style={{ backfaceVisibility: 'hidden' }}>
                <div className="project-post-thumbnail relative overflow-hidden">
                  <video
                    src={project.videoUrl}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-[550px] object-cover"
                  />
                  
                  {/* Bottom Left - Title & Meta */}
                  <div className="absolute bottom-8 left-8 flex flex-col">
                    <h4 className="project-title text-5xl font-bold text-white mb-3">
                      {project.title}
                    </h4>
                    <div className="project-meta flex items-center gap-4 text-sm text-gray-300">
                      <span className="text-[#ffd731]">{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                  
                  {/* Top Right - Description & Button */}
                  <div className="absolute top-8 right-8 max-w-md text-right">
                    <div className="project-excerpt text-white mb-4">
                      {project.description}
                    </div>
                    <ArrowButton href={project.link} text="View Project" bgColor="bg-white" textColor="text-black" />
                  </div>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}