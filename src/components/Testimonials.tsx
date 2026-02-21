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
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:pl-8 lg:pr-8">
        <div className="grid lg:grid-cols-[40%_55%] gap-16 items-center">
          {/* Left Side */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <svg className="w-2 h-2 fill-black" viewBox="0 0 512 512">
                <circle cx="256" cy="256" r="256" />
              </svg>
              <span className="text-sm uppercase tracking-wider font-medium">OUR PARTNERS</span>
            </div>

            <h2 className="text-7xl md:text-6xl lg:text-7xl font-bold mb-8">Clients</h2>

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
              <div className="w-14 h-14 rounded-full bg-[#ffd731] flex items-center justify-center text-2xl font-bold">
                +
              </div>
            </div>

            <p className="text-gray-500">
              More than <span className="text-black font-bold">25k+</span> happy clients
            </p>
          </div>

          {/* Right Side */}
          <div className="relative max-w-full">
            <div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight mb-8">
                "{testimonials[currentIndex].quote}"
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
          </div>
        </div>
      </div>
    </section>
  );
}
