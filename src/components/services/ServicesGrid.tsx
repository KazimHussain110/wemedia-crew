import { ChevronRight } from 'lucide-react';

const services = [
  {
    title: "Video productions",
    description: "An international digital design studio reimagining how people connect with brands.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=1000&fit=crop",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/videography.svg",
  },
  {
    title: "Digital media",
    description: "We prioritize flexibility, streamlined processes, and creative that positively impacts your business.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=1000&fit=crop",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/playlist.svg",
  },
  {
    title: "Commercial",
    description: "We are dedicated to transforming businesses by providing expert consulting services.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=1000&fit=crop",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/megaphone.svg",
  },
  {
    title: "Content creation",
    description: "We are a creative production company that specializes in crafting unique stories to help you better connect with your customers.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=1000&fit=crop",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/movie-reel.svg",
  },
  {
    title: "Creative directions",
    description: "Collaborative partnerships matter to us because it's not about being right but rather about discovering the right idea.",
    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=800&h=1000&fit=crop",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/clapper.svg",
  },
  {
    title: "Studio rental",
    description: "We got into this business to tell compelling stories, collaborate with great thinkers, and connect ideas with people.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=1000&fit=crop",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/lighting.svg",
  },
];

export default function ServicesGrid() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded aspect-[3/4] bg-[#f5f5f5]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 p-6 flex flex-col">
                <img src={service.icon} alt="" className="w-12 h-12 mb-4 brightness-0" style={{filter: 'brightness(0) saturate(100%) invert(87%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(88%)'}} />
                <h4 className="text-3xl font-bold mb-3 text-black group-hover:text-white transition-colors">{service.title}</h4>
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity">{service.description}</p>
                <div className="absolute -bottom-6 -left-6 opacity-100 group-hover:opacity-0 transition-opacity">
                  <img src={service.icon} alt="" className="w-55 h-55 brightness-0 invert" />
                </div>
                <div className="absolute bottom-6 right-6">
                  <span className="w-12 h-12 bg-[#ffd731] rounded-full flex items-center justify-center text-black relative overflow-hidden group/arrow cursor-pointer">
                    <span className="absolute inset-0 bg-white scale-0 rounded-full transition-transform duration-300 group-hover/arrow:scale-100"></span>
                    <ChevronRight size={20} className="relative z-10" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
