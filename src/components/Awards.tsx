'use client';

import { useRef, useState, useEffect } from 'react';

export default function Awards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const awards = [
    {
      year: '2024',
      count: '[x2]',
      badge: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/award_1.svg',
      title: 'Top 10 Best of Mobile App Design',
      festival: 'CANNES WORLD\nFILM FESTIVAL',
      festivalYear: '2021'
    },
    {
      year: '2018',
      count: '[x1]',
      badge: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/award_2.svg',
      title: 'Best Video Agencies',
      festival: 'PRAGUE INTERNATIONAL\nFILM FESTIVAL',
      festivalYear: '2021'
    },
    {
      year: '2019',
      count: '[x3]',
      badge: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/award_1.svg',
      title: 'Most Reviewed Video Production',
      festival: 'CANNES WORLD\nFILM FESTIVAL',
      festivalYear: '2021'
    }
  ];

  const tripleAwards = [...awards, ...awards, ...awards];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const maxScroll = container.scrollWidth / 3;
      const currentScroll = container.scrollLeft;

      if (currentScroll >= maxScroll * 2) {
        container.scrollLeft = maxScroll;
      } else if (currentScroll <= 0) {
        container.scrollLeft = maxScroll;
      }
    };

    container.addEventListener('scroll', handleScroll);
    container.scrollLeft = container.scrollWidth / 3;

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollRef.current) {
        scrollRef.current.style.cursor = 'grab';
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 mb-12">
        <div className="flex items-center gap-2 mb-12">
          <svg className="w-2 h-2 fill-black" viewBox="0 0 512 512">
            <circle cx="256" cy="256" r="256" />
          </svg>
          <span className="text-sm uppercase tracking-wider font-medium">OUR ACHIEVEMENTS</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <h2 className="text-6xl md:text-8xl font-bold">Awards</h2>
          <p className="text-gray-500 text-lg lg:text-right self-end">
            Efforts to receive worthy rewards, awards & recognition help us affirm our brand.
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto cursor-grab select-none px-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {tripleAwards.map((award, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[500px] md:w-[600px] bg-white rounded-2xl p-12 pointer-events-none"
          >
            <div className="flex justify-between items-start mb-12">
              <h3 className="text-8xl font-bold text-gray-200">{award.year}</h3>
              <span className="text-sm font-bold">{award.count}</span>
            </div>

            <div className="flex justify-center mb-12">
              <div className="relative">
                <svg className="w-48 h-48" viewBox="0 0 200 200">
                  <path
                    d="M 30,100 Q 30,30 100,30 Q 170,30 170,100 Q 170,170 100,170 Q 30,170 30,100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M 20,100 L 35,85 L 35,115 Z"
                    fill="currentColor"
                  />
                  <path
                    d="M 180,100 L 165,85 L 165,115 Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-xs font-bold mb-2">WINNER</span>
                  <p className="text-sm font-bold leading-tight whitespace-pre-line">
                    {award.festival}
                  </p>
                  <span className="text-lg font-bold mt-2">{award.festivalYear}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-gray-200">
              <h4 className="text-xl font-bold max-w-[400px]">{award.title}</h4>
              <button className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <span className="text-xl">+</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
