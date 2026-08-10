'use client';

import { useState } from 'react';
import ArrowButton from './ui/ArrowButton';
import VideoPlayer from './ui/VideoPlayer';

export default function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = [
    {
      id: '01',
      title: 'Corporate Event',
      description: 'Corporate events, product launches, and conferences.',
      videoUrl: 'https://customer-rrkunujuw15dg54t.cloudflarestream.com/c4cab9e48ff43aa5191fdf8e969d9dd9/manifest/video.m3u8',
      imageUrl: '/photos/Etsalat Atlantes/DSC05620.jpg',
      link: '/services/corporate-events'
    },
    {
      id: '02',
      title: 'Exhibition',
      description: 'Trade shows and exhibitions covered from the floor to the stage.',
      imageUrl: '/photos/Dubai Air Show Exibition/TAK-357_compressed.webp',
      link: '/services/exhibitions'
    },
    {
      id: '03',
      title: 'Real Estate',
      description: 'Cinematic property tours and aerial perspectives for listings.',
      videoUrl: 'https://customer-rrkunujuw15dg54t.cloudflarestream.com/61c8451ba63b74f5c36f733ac41845f8/manifest/video.m3u8',
      imageUrl: 'https://customer-rrkunujuw15dg54t.cloudflarestream.com/61c8451ba63b74f5c36f733ac41845f8/thumbnails/thumbnail.jpg?time=1s',
      link: '/services/real-estate'
    },
    {
      id: '04',
      title: 'Sports Event',
      description: 'coverage of tournaments, matches, and competitions.',
      imageUrl: '/photos/Cricket Event/CCA_7294.webp',
      link: '/services/sports'
    }
  ];

  return (
    <div className="py-20 bg-gray-100">
      <div className="services-widget-head text-center mb-20 md:mb-12 relative h-48 md:h-40 overflow-hidden">
        <div className={`transition-transform duration-500 ease-out ${hoveredService ? '-translate-y-full' : 'translate-y-0'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="w-2 h-2 fill-black" viewBox="0 0 512 512">
              <circle cx="256" cy="256" r="256" />
            </svg>
            <span className="text-sm uppercase tracking-wider text-gray-500">what we do</span>
          </div>
          <h2 className="text-5xl md:text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-lg max-w-xl mx-auto">&ldquo;End-to-End Video Production. Two Continents. One Standard of Excellence.&rdquo;</p>
        </div>
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-transform duration-500 ease-out ${hoveredService ? 'translate-y-0' : 'translate-y-full'}`}>
          <h2 className="text-5xl md:text-4xl font-bold">{hoveredService}</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-0.5 px-4 max-w-[1200px] mx-auto overflow-visible">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="service-item group cursor-pointer"
            onMouseEnter={() => setHoveredService(service.title)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="service-inner relative overflow-visible rounded-lg h-[320px] md:h-[320px] bg-white">
              {/* Initial Card - Hidden on mobile, visible on desktop */}
              <div className="hidden md:flex absolute inset-0 flex-col justify-start p-6 transition-opacity duration-500 group-hover:opacity-0">
                <span className="text-2xl font-bold text-black mb-4">{service.id}</span>
                <h4 className="text-xl font-semibold text-black">{service.title}</h4>
              </div>
              
              {/* Expanded Content - Always visible on mobile, hover on desktop */}
              <div className="service-content absolute bottom-0 left-0 right-0 h-[340px] -translate-y-[50px] md:translate-y-full md:group-hover:-translate-y-[50px] transition-all duration-500 ease-out rounded-lg z-10 bg-white opacity-100 visible md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible">
                <div className="service-post-thumbnail relative h-2/3 overflow-hidden rounded-t-lg">
                  {service.videoUrl && (
                    <div className="video-container absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 md:delay-300">
                      <VideoPlayer
                        src={service.videoUrl}
                        poster={service.imageUrl}
                        active
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6 pb-8 bg-white h-1/3 flex flex-col justify-between gap-4">
                  <div className="service-description">
                    <p className="text-sm">{service.description}</p>
                  </div>
                  <ArrowButton href={service.link} text="Learn More" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
