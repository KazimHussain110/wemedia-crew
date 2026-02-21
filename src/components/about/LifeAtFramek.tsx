"use client"

import ArrowButton from '../ui/ArrowButton';

export default function LifeAtFramek() {
  return (
    <div className="bg-[#f5f5f5] py-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section - Heading Left, Description & Button Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <h3 className="text-4xl lg:text-5xl font-bold text-black">
              Life at Framek
            </h3>
          </div>
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At our studio, creativity thrives in an environment built for innovation, collaboration, and a little bit of fun.
            </p>
            <ArrowButton href="/careers" text="JOIN US NOW" bgColor="bg-white" textColor="text-black" />
          </div>
        </div>

        {/* Images Gallery - 2x2 Grid */}
        <div className="grid grid-cols-2 gap-6">
          <div className="aspect-[4/3] rounded-lg overflow-hidden">
            <img 
              src="https://demo2.wpopal.com/framek/wp-content/uploads/2025/06/about-img1.jpg" 
              alt="Team collaboration" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden">
            <img 
              src="https://demo2.wpopal.com/framek/wp-content/uploads/2025/06/about-img2.jpg" 
              alt="Office environment" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden">
            <img 
              src="https://demo2.wpopal.com/framek/wp-content/uploads/2025/06/about-img3.jpg" 
              alt="Creative workspace" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden">
            <img 
              src="https://demo2.wpopal.com/framek/wp-content/uploads/2025/06/about-img4.jpg" 
              alt="Team meeting" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}