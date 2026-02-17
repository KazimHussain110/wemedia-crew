'use client';

import { useState } from 'react';

export default function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = [
    {
      id: '01',
      title: 'Video productions',
      description: 'An international digital design studio reimagining how people connect with brands.',
      videoUrl: 'https://player.vimeo.com/video/1088965285?background=1&loop=1&muted=1&controls=0&autoplay=0',
      imageUrl: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_6-1024x576.jpg',
      link: '#'
    },
    {
      id: '02',
      title: 'Digital media',
      description: 'We prioritize flexibility, streamlined processes, and creative that positively impacts your business.',
      videoUrl: 'https://player.vimeo.com/video/1088965204?background=1&loop=1&muted=1&controls=0&autoplay=0',
      imageUrl: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_3-1024x539.jpg',
      link: '#'
    },
    {
      id: '03',
      title: 'Commercial',
      description: 'We are dedicated to transforming businesses by providing expert consulting services.',
      videoUrl: 'https://player.vimeo.com/video/1088965267?background=1&loop=1&muted=1&controls=0&autoplay=0',
      imageUrl: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_5-1024x539.jpg',
      link: '#'
    },
    {
      id: '04',
      title: 'Content creation',
      description: 'We are a creative production company that specializes in crafting unique stories to help you better connect with your customers.',
      videoUrl: 'https://player.vimeo.com/video/1088965238?background=1&loop=1&muted=1&controls=0&autoplay=0',
      imageUrl: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_4-1024x576.jpg',
      link: '#'
    }
  ];

  return (
    <div className="py-20 bg-gray-100">
      <div className="services-widget-head text-center mb-12 relative h-32 overflow-hidden">
        <div className={`transition-transform duration-500 ease-out ${hoveredService ? '-translate-y-full' : 'translate-y-0'}`}>
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-lg">We offer a full range of video services tailored to businesses of all sizes, including:</p>
        </div>
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-transform duration-500 ease-out ${hoveredService ? 'translate-y-0' : 'translate-y-full'}`}>
          <h2 className="text-4xl font-bold">{hoveredService}</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 px-4 max-w-[1200px] mx-auto overflow-visible">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="service-item group cursor-pointer"
            onMouseEnter={() => setHoveredService(service.title)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="service-inner relative overflow-visible rounded-lg h-[320px] bg-white">
              {/* Initial Card */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 transition-opacity duration-500 group-hover:opacity-0">
                <span className="text-2xl font-bold text-black">{service.id}</span>
                <h4 className="text-xl font-semibold text-black">{service.title}</h4>
              </div>
              
              {/* Hover Content - Slides up from bottom */}
              <div className="service-content absolute bottom-0 left-0 right-0 h-[340px] translate-y-full group-hover:-translate-y-[50px] transition-all duration-500 ease-out rounded-lg z-10 bg-white pointer-events-none group-hover:pointer-events-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                <div className="service-post-thumbnail relative h-2/3 overflow-hidden rounded-t-lg">
                  <div className="video-container absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
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
                    <p className="text-sm line-clamp-3">{service.description}</p>
                  </div>
                  <a
                    href={service.link}
                    className="inline-flex items-center gap-1 group/btn transition-all duration-300"
                  >
                    <span className="bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300">Learn More</span>
                    <span className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black transition-all duration-300 group-hover/btn:-ml-4">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
