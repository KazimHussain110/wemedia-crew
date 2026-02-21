"use client"

import { useEffect, useRef, useState } from 'react';

export default function AboutStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step1 = 0;
    let step2 = 0;
    let step3 = 0;

    const timer = setInterval(() => {
      step1++;
      step2++;
      step3++;

      setCount1(Math.min(Math.floor((3000 / steps) * step1), 3000));
      setCount2(Math.min(Math.floor((25 / steps) * step2), 25));
      setCount3(Math.min(Math.floor((80 / steps) * step3), 80));

      if (step1 >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="py-16 pl-4 pr-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1500px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-0">
        <div className="w-full lg:w-[320px] h-[350px] sm:h-[400px] lg:h-[480px] rounded-lg overflow-hidden">
          <img 
            src="https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/h2_img1.jpg" 
            alt="Video production" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="grid grid-cols-1 gap-0 lg:-ml-40">
          <div className="group cursor-pointer">
            <div className="text-7xl sm:text-8xl lg:text-[170px] font-bold text-[#ffd731] mb-4 lg:mb-6">{count1.toLocaleString()}+</div>
            <div className="relative overflow-hidden mb-4">
              <div className="h-[2px] lg:h-[1px] bg-gray-300 lg:bg-gray-200 w-full transition-transform duration-500 ease-in-out group-hover:translate-x-full"></div>
              <div className="h-[2px] lg:h-[1px] bg-black w-full absolute top-0 left-0 -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></div>
            </div>
            <h6 className="text-lg text-black mb-10 lg:mb-20">videos created</h6>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-8">
            <div className="group cursor-pointer">
              <div className="text-6xl sm:text-8xl lg:text-9xl font-bold text-black mb-4">{count2}+</div>
              <div className="relative mb-4 overflow-hidden">
                <div className="h-[2px] lg:h-[1px] bg-gray-300 lg:bg-gray-200 w-full transition-transform duration-500 ease-in-out group-hover:translate-x-full"></div>
                <div className="h-[2px] lg:h-[1px] bg-black w-full absolute top-0 left-0 -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></div>
              </div>
              <h6 className="text-base sm:text-lg text-black">years in business</h6>
            </div>
            
            <div className="group cursor-pointer">
              <div className="text-6xl sm:text-8xl lg:text-9xl font-bold text-black mb-4">{count3}+</div>
              <div className="relative mb-4 overflow-hidden">
                <div className="h-[2px] lg:h-[1px] bg-gray-300 lg:bg-gray-200 w-full transition-transform duration-500 ease-in-out group-hover:translate-x-full"></div>
                <div className="h-[2px] lg:h-[1px] bg-black w-full absolute top-0 left-0 -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></div>
              </div>
              <h6 className="text-base sm:text-lg text-black">Team members</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}