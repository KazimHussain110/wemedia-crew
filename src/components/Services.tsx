'use client';

import { useState } from 'react';
import ArrowButton from './ui/ArrowButton';

export default function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = [
    {
      id: '01',
      title: 'Corporate Video Production',
      description: 'Brand films, company profiles, and investor-ready content.',
      videoUrl: 'https://player.vimeo.com/video/1088965285?background=1&loop=1&muted=1&controls=0&autoplay=0',
      imageUrl: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_6-1024x576.jpg',
      link: '/services'
    },
    {
      id: '02',
      title: 'Event Videography',
      description: 'Multi-camera coverage of conferences, galas, and product launches.',
      videoUrl: 'https://player.vimeo.com/video/1088965204?background=1&loop=1&muted=1&controls=0&autoplay=0',
      imageUrl: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_3-1024x539.jpg',
      link: '/services'
    },
    {
      id: '03',
      title: 'Aerial & Drone Videography',
      description: 'Cinematic aerial perspectives for real estate, hospitality, and events.',
      videoUrl: 'https://player.vimeo.com/video/1088965267?background=1&loop=1&muted=1&controls=0&autoplay=0',
      imageUrl: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_5-1024x539.jpg',
      link: '/services'
    },
    {
      id: '04',
      title: 'Post-Production & Editing',
      description: 'Color grading, motion graphics, and multi-format delivery.',
      videoUrl: 'https://player.vimeo.com/video/1088965238?background=1&loop=1&muted=1&controls=0&autoplay=0',
      imageUrl: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_4-1024x576.jpg',
      link: '/services'
    }
  ];

  return (
    <div className="py-20 bg-gray-100">
      <div className="services-widget-head text-center mb-20 md:mb-12 relative h-40 md:h-32 overflow-hidden">
        <div className={`transition-transform duration-500 ease-out ${hoveredService ? '-translate-y-full' : 'translate-y-0'}`}>
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
              <div className="hidden md:flex absolute inset-0 flex-col justify-between p-6 transition-opacity duration-500 group-hover:opacity-0">
                <span className="text-2xl font-bold text-black">{service.id}</span>
                <h4 className="text-xl font-semibold text-black">{service.title}</h4>
              </div>
              
              {/* Expanded Content - Always visible on mobile, hover on desktop */}
              <div className="service-content absolute bottom-0 left-0 right-0 h-[340px] -translate-y-[50px] md:translate-y-full md:group-hover:-translate-y-[50px] transition-all duration-500 ease-out rounded-lg z-10 bg-white opacity-100 visible md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible">
                <div className="service-post-thumbnail relative h-2/3 overflow-hidden rounded-t-lg">
                  <div className="video-container absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 md:delay-300">
                    <iframe
                      src={service.videoUrl}
                      loading="lazy"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                      className="w-full h-full"
                    />
                  </div>
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
