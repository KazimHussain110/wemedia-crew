'use client';

import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Framek's hard-working and skilled team were a pleasure to work with on our product videos. Communication was excellent from pre to post-production.",
      author: "James Moore",
      position: "Digital Marketing Manager"
    }
  ];

  const [currentIndex] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid lg:grid-cols-[35%_65%] gap-16 items-center">
          {/* Left Side */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <svg className="w-2 h-2 fill-black" viewBox="0 0 512 512">
                <circle cx="256" cy="256" r="256" />
              </svg>
              <span className="text-sm uppercase tracking-wider font-medium">OUR PARTNERS</span>
            </div>

            <h2 className="text-6xl md:text-7xl font-bold mb-8">Clients</h2>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex -space-x-3">
                <img
                  src="https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/testimonial_1.jpg"
                  alt="Client"
                  className="w-14 h-14 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/testimonial_2.jpg"
                  alt="Client"
                  className="w-14 h-14 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/testimonial_3.jpg"
                  alt="Client"
                  className="w-14 h-14 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/testimonial_4.jpg"
                  alt="Client"
                  className="w-14 h-14 rounded-full border-2 border-white object-cover"
                />
              </div>
              <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-2xl font-bold">
                +
              </div>
            </div>

            <p className="text-gray-500">
              More than <span className="text-black font-bold">25k+</span> happy clients
            </p>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="mb-12">
              <p className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">
                {testimonials[currentIndex].quote}
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold mb-1">{testimonials[currentIndex].author}</h4>
                  <p className="text-gray-500">{testimonials[currentIndex].position}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-32 h-px bg-gray-300"></div>
                  <div className="flex items-center gap-2">
                    <svg className="w-2 h-2 fill-black" viewBox="0 0 512 512">
                      <circle cx="256" cy="256" r="256" />
                    </svg>
                    <svg className="w-2 h-2 fill-gray-300" viewBox="0 0 512 512">
                      <circle cx="256" cy="256" r="256" />
                    </svg>
                    <svg className="w-2 h-2 fill-gray-300" viewBox="0 0 512 512">
                      <circle cx="256" cy="256" r="256" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <button className="absolute bottom-0 right-0 w-16 h-16 rounded-full border-2 border-yellow-400 flex items-center justify-center hover:bg-yellow-400 transition-colors group">
              <svg className="w-6 h-6 text-yellow-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
