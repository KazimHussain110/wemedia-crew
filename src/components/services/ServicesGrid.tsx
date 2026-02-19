const services = [
  {
    title: "Video productions",
    description: "An international digital design studio reimagining how people connect with brands.",
    video: "https://player.vimeo.com/video/1088965285?background=1&loop=1&muted=1&controls=0&autoplay=0",
    image: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_6-1024x576.jpg",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/videography.svg",
  },
  {
    title: "Digital media",
    description: "We prioritize flexibility, streamlined processes, and creative that positively impacts your business.",
    video: "https://player.vimeo.com/video/1088965204?background=1&loop=1&muted=1&controls=0&autoplay=0",
    image: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_3-1024x539.jpg",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/playlist.svg",
  },
  {
    title: "Commercial",
    description: "We are dedicated to transforming businesses by providing expert consulting services.",
    video: "https://player.vimeo.com/video/1088965267?background=1&loop=1&muted=1&controls=0&autoplay=0",
    image: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_5-1024x539.jpg",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/megaphone.svg",
  },
  {
    title: "Content creation",
    description: "We are a creative production company that specializes in crafting unique stories to help you better connect with your customers.",
    video: "https://player.vimeo.com/video/1088965238?background=1&loop=1&muted=1&controls=0&autoplay=0",
    image: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_4-1024x576.jpg",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/movie-reel.svg",
  },
  {
    title: "Creative directions",
    description: "Collaborative partnerships matter to us because it's not about being right but rather about discovering the right idea.",
    video: "https://player.vimeo.com/video/1088965175?background=1&loop=1&muted=1&controls=0&autoplay=0",
    image: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_2-1024x540.jpg",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/clapper.svg",
  },
  {
    title: "Studio rental",
    description: "We got into this business to tell compelling stories, collaborate with great thinkers, and connect ideas with people.",
    video: "https://player.vimeo.com/video/1088965150?background=1&loop=1&muted=1&controls=0&autoplay=0",
    image: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_1-1024x538.jpg",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/lighting.svg",
  },
];

export default function ServicesGrid() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity"
                  src={service.video}
                  loading="lazy"
                  allow="autoplay; fullscreen; picture-in-picture"
                />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <div className="flex items-start justify-between mb-4">
                  <img src={service.icon} alt="" className="w-12 h-12" />
                </div>
                <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-black hover:translate-x-1 transition-transform">
                  →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
