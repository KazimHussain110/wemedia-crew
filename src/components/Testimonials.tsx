'use client';

import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: "WeMediaCrew transformed our annual conference footage into a recruitment tool that outperformed every campaign we had ever run. Their team was professional, discreet, and delivered ahead of schedule.",
    author: "Sarah Mitchell",
    title: "VP of Brand & Communications",
    company: "Nexora Group",
    headshot: "/photos/ADNEC/Tariq AK Production-109.webp",
  },
  {
    quote: "From concept to final cut, the WeMediaCrew team brought a level of creative precision we hadn't seen before. Our product launch video drove a 40% increase in qualified leads within the first month.",
    author: "Daniel Osei",
    title: "Chief Marketing Officer",
    company: "Vantara Capital",
    headshot: "/photos/Worldpay/TAKP-52.webp",
  },
  {
    quote: "We needed a partner who could handle high-stakes executive interviews with discretion and quality. WeMediaCrew exceeded every expectation — the final deliverable was broadcast-ready.",
    author: "Priya Nair",
    title: "Head of Corporate Affairs",
    company: "Stratum Logistics",
    headshot: "/photos/ADNEC/Tariq AK Production-133.webp",
  },
  {
    quote: "The team's ability to distill a complex product story into a compelling two-minute film was remarkable. Our sales team now uses it in every pitch — it closes deals faster than any deck we've built.",
    author: "Marcus Ellroy",
    title: "Director of Sales Enablement",
    company: "Crestline Technologies",
    headshot: "/photos/Worldpay/TAKP-20.webp",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [displayed, setDisplayed] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number, dir: 'next' | 'prev' = 'next') => {
    if (animating || index === current) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setDisplayed(index);
      setCurrent(index);
      setAnimating(false);
    }, 420);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % testimonials.length;
        setDirection('next');
        setAnimating(true);
        setTimeout(() => {
          setDisplayed(next);
          setAnimating(false);
        }, 420);
        return next;
      });
    }, 5000);
    return () => clearInterval(timerRef.current!);
  }, []);

  const t = testimonials[displayed];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <style>{`
        @keyframes slideInNext {
          from { opacity: 0; transform: translateX(48px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutNext {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-48px); }
        }
        @keyframes slideInPrev {
          from { opacity: 0; transform: translateX(-48px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutPrev {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(48px); }
        }
        .testimonial-enter-next { animation: slideInNext 0.42s cubic-bezier(.4,0,.2,1) forwards; }
        .testimonial-exit-next  { animation: slideOutNext 0.42s cubic-bezier(.4,0,.2,1) forwards; }
        .testimonial-enter-prev { animation: slideInPrev 0.42s cubic-bezier(.4,0,.2,1) forwards; }
        .testimonial-exit-prev  { animation: slideOutPrev 0.42s cubic-bezier(.4,0,.2,1) forwards; }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-8">
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
                {testimonials.map((item, i) => (
                  <img
                    key={i}
                    src={item.headshot}
                    alt={item.author}
                    className={`w-14 h-14 rounded-full border-2 object-cover transition-all duration-300 ${
                      i === current ? 'border-[#ffd731] scale-110 z-10' : 'border-white'
                    }`}
                    style={{ zIndex: i === current ? 10 : testimonials.length - i }}
                  />
                ))}
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
          <div className="relative min-h-[260px] flex flex-col justify-center">
            <div
              key={displayed}
              className={
                animating
                  ? direction === 'next' ? 'testimonial-exit-next' : 'testimonial-exit-prev'
                  : direction === 'next' ? 'testimonial-enter-next' : 'testimonial-enter-prev'
              }
            >
              {/* Large quote mark */}
              <svg className="w-12 h-12 fill-[#ffd731] mb-4 opacity-80" viewBox="0 0 24 24">
                <path d="M7.17 17c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94zm10 0c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94z"/>
              </svg>

              <p className="text-2xl md:text-3xl lg:text-[2rem] font-medium leading-snug mb-8 text-gray-800">
                "{t.quote}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={t.headshot}
                      alt={t.author}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-[#ffd731] ring-offset-2"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{t.author}</h4>
                    <p className="text-gray-500 text-sm">{t.title}</p>
                    <p className="text-[#ffd731] text-sm font-semibold">{t.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* Prev / Next arrows */}
                  <button
                    onClick={() => goTo((current - 1 + testimonials.length) % testimonials.length, 'prev')}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-200"
                    aria-label="Previous"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => goTo((current + 1) % testimonials.length, 'next')}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-200"
                    aria-label="Next"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Progress dots */}
              <div className="flex items-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i, i > current ? 'next' : 'prev')}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      i === current ? 'w-8 h-2 bg-black' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
