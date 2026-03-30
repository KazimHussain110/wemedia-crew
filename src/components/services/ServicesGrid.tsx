import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: "Corporate Video Production",
    description: "Company profiles, brand documentaries, CEO messages, product films, recruitment videos, and investor content. Built for boardrooms and beyond.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=1000&fit=crop",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/videography.svg",
    slug: "corporate-video-production",
  },
  {
    title: "Event Videography",
    description: "Conferences, award ceremonies, gala dinners, product launches, and exhibitions. Multi-camera, same-day edits available.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=1000&fit=crop",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/playlist.svg",
    slug: "event-videography",
  },
  {
    title: "Aerial & Drone Videography",
    description: "GCAA / Transport Canada licensed operators. Cinematic overhead shots for real estate, hospitality, construction progress, and event scale.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=1000&fit=crop",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/megaphone.svg",
    slug: "aerial-drone-videography",
  },
  {
    title: "Post-Production & Editing",
    description: "Professional editing, color grading, motion graphics, animation, sound design, multilingual subtitling, and platform-specific exports.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=1000&fit=crop",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/movie-reel.svg",
    slug: "post-production-editing",
  },
  {
    title: "Social Media Video Content",
    description: "Short-form reels, behind-the-scenes clips, interview cuts, and vertical video packages optimized for LinkedIn, Instagram, YouTube Shorts, and TikTok.",
    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=800&h=1000&fit=crop",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/clapper.svg",
    slug: "",
  },
  {
    title: "Live Streaming Production",
    description: "Multi-camera live streaming for conferences, town halls, product reveals, and hybrid events. Professional switching, graphics overlay, and technical direction.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=1000&fit=crop",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/lighting.svg",
    slug: "",
  },
];

export default function ServicesGrid() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const card = (
              <div key={index} className="group relative overflow-hidden rounded aspect-[3/4] bg-[#f5f5f5] cursor-pointer">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 p-6 flex flex-col">
                  <img src={service.icon} alt="" className="w-12 h-12 mb-4 brightness-0" style={{ filter: 'brightness(0) saturate(100%) invert(87%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(88%)' }} />
                  <h4 className="text-3xl font-bold mb-3 text-black group-hover:text-white transition-colors">{service.title}</h4>
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity">{service.description}</p>
                  <div className="absolute -bottom-6 -left-6 opacity-100 group-hover:opacity-0 transition-opacity">
                    <img src={service.icon} alt="" className="w-55 h-55 brightness-0 invert" />
                  </div>
                  <div className="absolute bottom-6 right-6">
                    <span className="w-12 h-12 bg-[#ffd731] rounded-full flex items-center justify-center text-black relative overflow-hidden group/arrow">
                      <span className="absolute inset-0 bg-white scale-0 rounded-full transition-transform duration-300 group-hover/arrow:scale-100"></span>
                      <ChevronRight size={20} className="relative z-10" />
                    </span>
                  </div>
                </div>
              </div>
            );

            return service.slug
              ? <Link key={index} href={`/services/${service.slug}`}>{card}</Link>
              : <div key={index}>{card}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
