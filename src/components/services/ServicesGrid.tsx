import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: "Corporate Events",
    description: "Product launches, award ceremonies, conferences, gala dinners, and networking evenings. Multi-camera, same-day edits available.",
    image: "/photos/Etsalat Atlantes/TAK08856.jpg",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/videography.svg",
    slug: "corporate-events",
  },
  {
    title: "Real Estate",
    description: "Cinematic property tours, interior choreography, and licensed aerial flyovers that sell the property and the lifestyle.",
    image: "https://customer-rrkunujuw15dg54t.cloudflarestream.com/61c8451ba63b74f5c36f733ac41845f8/thumbnails/thumbnail.jpg?time=1s",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/megaphone.svg",
    slug: "real-estate",
  },
  {
    title: "Exhibitions",
    description: "Trade shows and exhibitions covered from the floor to the stage — show films, booth content, interviews, and same-day social edits.",
    image: "/photos/ADNEC/HUQ_9706.webp",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/playlist.svg",
    slug: "exhibitions",
  },
  {
    title: "Sports",
    description: "Tournaments, matches, action sports, and athlete profiles — captured at speed and delivered as highlights, recaps, and social cuts.",
    image: "/photos/Cricket Event/CCA_7294.webp",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/clapper.svg",
    slug: "sports",
  },
  {
    title: "Podcast and Panel Discussion",
    description: "Broadcast-standard podcasts, panels, interviews, and talks with multi-camera setups, clean audio, and social clip packages.",
    image: "https://img.youtube.com/vi/0sNP3zNfjso/maxresdefault.jpg",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/movie-reel.svg",
    slug: "podcast-and-panel-discussion",
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
                  className="w-full h-full object-cover opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-black/40 md:opacity-0 md:group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 p-6 flex flex-col">
                  <img src={service.icon} alt="" className="w-12 h-12 mb-4 brightness-0 md:brightness-0" style={{ filter: 'brightness(0) saturate(100%) invert(87%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(88%)' }} />
                  <h4 className="text-3xl font-bold mb-3 text-white md:text-black md:group-hover:text-white transition-colors">{service.title}</h4>
                  <p className="text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">{service.description}</p>
                  <div className="absolute -bottom-6 -left-6 opacity-0 md:opacity-100 md:group-hover:opacity-0 transition-opacity">
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
