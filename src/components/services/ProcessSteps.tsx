'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ArrowButton from '../ui/ArrowButton';

const steps = [
  {
    number: '01',
    title: 'Single-Day Shoot',
    description: 'Ideal for interviews, corporate profiles, and small events. Includes one cinematographer, professional lighting and audio, and a polished edit.',
    timeline: 'FROM AED 8,000',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
  },
  {
    number: '02',
    title: 'Multi-Day Production',
    description: 'For brand films, multi-session event coverage, and documentary-style projects. Includes full crew, multi-camera setup, and advanced post-production.',
    timeline: 'FROM AED 25,000',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop'
  },
  {
    number: '03',
    title: 'Retainer Partnerships',
    description: 'Monthly or quarterly production retainers for brands that need consistent video content. Priority scheduling, volume pricing, and a dedicated creative team.',
    timeline: 'CUSTOM PRICING',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop'
  },
];

function CarouselPackages() {
  const [active, setActive] = useState(0);
  const [display, setDisplay] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const isAnimating = useRef(false);

  const goTo = (index: number) => {
    if (isAnimating.current || index === active) return;
    isAnimating.current = true;

    const tl = gsap.timeline({
      onComplete: () => { isAnimating.current = false; }
    });

    tl.to(contentRef.current, { y: -30, opacity: 0, duration: 0.25, ease: 'power2.in' })
      .to(imageRef.current, { y: 30, opacity: 0, duration: 0.25, ease: 'power2.in' }, '<')
      .call(() => { setDisplay(index); setActive(index); })
      .set(contentRef.current, { y: 30 })
      .set(imageRef.current, { y: -30 })
      .to(contentRef.current, { y: 0, opacity: 1, duration: 0.25, ease: 'power2.out' })
      .to(imageRef.current, { y: 0, opacity: 1, duration: 0.25, ease: 'power2.out' }, '<');
  };

  const prev = () => goTo((active - 1 + steps.length) % steps.length);
  const next = () => goTo((active + 1) % steps.length);

  return (
    <div className="flex items-center gap-4">
      {/* Prev button */}
      <button
        onClick={prev}
        className="shrink-0 w-11 h-11 flex items-center justify-center rounded-full bg-black/10 border border-black/20 text-black hover:bg-black hover:text-white transition-all duration-300"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Card */}
      <div className="flex-1 grid grid-cols-[1.2fr_2fr] h-[500px]">
        <div className="p-6 rounded-l-2xl overflow-hidden bg-white flex flex-col h-full">
          <div ref={contentRef} className="flex-1 flex flex-col">
            <h3 className="text-2xl font-bold mb-6">{steps[display].title}</h3>
            <p className="text-gray-600 flex-1">{steps[display].description}</p>
            <div className="border-t border-gray-300 pt-4 mt-6 flex justify-between items-center">
              <span className="text-sm font-semibold">STARTING FROM</span>
              <span className="text-sm font-semibold">{steps[display].timeline}</span>
            </div>
          </div>
        </div>

        <div className="relative rounded-r-2xl overflow-hidden h-full">
          <img
            ref={imageRef}
            src={steps[display].image}
            alt={steps[display].title}
            className="w-full h-full object-cover"
          />
          {/* Counter */}
          <div className="absolute bottom-5 left-5 text-white/70 text-sm font-semibold">
            {String(active + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Next button */}
      <button
        onClick={next}
        className="shrink-0 w-11 h-11 flex items-center justify-center rounded-full bg-black/10 border border-black/20 text-black hover:bg-black hover:text-white transition-all duration-300"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

function MobilePackages() {
  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <div key={index} className="bg-white rounded-2xl overflow-hidden">
          <img
            src={step.image}
            alt={step.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sm font-bold bg-black text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                {step.number}
              </span>
              <h3 className="text-lg font-bold">{step.title}</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">{step.description}</p>
            <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
              <span className="text-xs font-semibold text-gray-500">STARTING FROM</span>
              <span className="text-sm font-semibold">{step.timeline}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Packages() {
  return (
    <section className="w-full py-24 bg-gray-100">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="max-w-4xl mb-12 lg:mb-16 mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Transparent Pricing. No Surprises.
          </h2>
          <p className="text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
            We offer flexible engagement models depending on your scope and budget. All packages include a dedicated project manager, pre-production planning, and revision rounds.
          </p>
          <div className="flex justify-center">
            <ArrowButton href="/contact" text="REQUEST A CUSTOM QUOTE" />
          </div>
        </div>

        {/* Mobile & tablet */}
        <div className="lg:hidden">
          <MobilePackages />
        </div>

        {/* Desktop — carousel */}
        <div className="hidden lg:block">
          <CarouselPackages />
        </div>
      </div>
    </section>
  );
}
