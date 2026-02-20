'use client';

import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Plan. Shoot. Deliver.",
    category: "ANIMATION",
    year: "2025",
    image: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/project_13-1024x447.jpg",
    videoUrl: "https://player.vimeo.com/video/1088950123?background=1&loop=1&muted=1&controls=0&autoplay=0",
    href: "#"
  },
  {
    id: 2,
    title: "Bold. Clear. Cinematic.",
    category: "COMMERCIAL",
    year: "2025",
    image: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/project_12-1024x447.jpg",
    videoUrl: "https://player.vimeo.com/video/1088950819?background=1&loop=1&muted=1&controls=0&autoplay=0",
    href: "#"
  },
  {
    id: 3,
    title: "Visuals That Sell",
    category: "MOTION GRAPHICS",
    year: "2025",
    image: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/project_11-1024x447.jpg",
    videoUrl: "https://player.vimeo.com/video/1088950789?background=1&loop=1&muted=1&controls=0&autoplay=0",
    href: "#"
  },
  {
    id: 4,
    title: "Crafted for Engagement",
    category: "TRAINING",
    year: "2025",
    image: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/project_10-1024x447.jpg",
    videoUrl: "https://player.vimeo.com/video/1088950160?background=1&loop=1&muted=1&controls=0&autoplay=0",
    href: "#"
  },
  {
    id: 5,
    title: "Video with Purpose",
    category: "ANIMATION",
    year: "2025",
    image: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/project_9-1024x447.jpg",
    videoUrl: "https://player.vimeo.com/video/1088950859?background=1&loop=1&muted=1&controls=0&autoplay=0",
    href: "#"
  },
  {
    id: 6,
    title: "Narrative in Motion",
    category: "COMMERCIAL",
    year: "2025",
    image: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/project_8-1024x447.jpg",
    videoUrl: "https://player.vimeo.com/video/1088950106?background=1&loop=1&muted=1&controls=0&autoplay=0",
    href: "#"
  }
];

const categories = ["ALL PROJECTS", "ANIMATION", "COMMERCIALS", "MOTION GRAPHICS", "TRAINING", "OTHERS"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL PROJECTS");

  const filteredProjects = activeFilter === "ALL PROJECTS" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Filter Navigation */}
        <div className="flex flex-wrap mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 text-sm font-medium transition-colors rounded-full ${
                activeFilter === category
                  ? 'bg-[#ffd731] text-black'
                  : 'text-black hover:bg-[#ffd731]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id}>
              <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] mb-4 rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Dark Fade Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                {/* Bottom Info */}
                <div className="absolute bottom-4 left-9 right-10 z-10">
                  <h4 className="text-lg font-medium text-white mb-2">
                    {project.title}
                  </h4>
                  <div className="w-75 h-px bg-gray-400 mb-2"></div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-gray-300">{project.category}</span>
                      <span className="text-sm text-gray-300">{project.year}</span>
                    </div>
                    <a
                      href={project.href}
                      className="relative inline-flex items-center text-sm font-medium text-gray-500 border border-gray-500 rounded-full px-4 py-2 overflow-hidden transition-colors duration-300 hover:text-black before:absolute before:inset-0 before:bg-white before:rounded-full before:scale-0 before:transition-transform before:duration-500 hover:before:scale-100 z-10"
                    >
                      <span className="relative z-10">VIEW PROJECT</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center gap-2">
            <span className="px-3 py-2 text-sm font-medium bg-black text-white">1</span>
            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-black transition-colors">2</a>
            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-black transition-colors">Next</a>
          </nav>
        </div>
      </div>
    </section>
  );
}