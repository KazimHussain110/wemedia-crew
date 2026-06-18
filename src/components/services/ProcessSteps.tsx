'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ArrowButton from '../ui/ArrowButton';

gsap.registerPlugin(ScrollTrigger);

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

export default function Packages() {
  const [activeStep, setActiveStep] = useState(0);
  const [displayStep, setDisplayStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const triggers = stepsRef.current.map((step, index) => {
      if (!step) return null;
      
      return ScrollTrigger.create({
        trigger: step,
        start: 'center center',
        end: 'bottom center',
        onEnter: () => setActiveStep(index),
        onEnterBack: () => setActiveStep(index),
      });
    });

    return () => {
      triggers.forEach(trigger => trigger?.kill());
    };
  }, [activeStep]);

  useEffect(() => {
    if (activeStep === displayStep || isAnimating.current) return;
    
    isAnimating.current = true;
    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      }
    });
    
    tl.to(contentRef.current, { 
      y: -30, 
      opacity: 0, 
      duration: 0.25, 
      ease: 'power2.in' 
    })
    .to(imageRef.current, { 
      y: 30, 
      opacity: 0, 
      duration: 0.25, 
      ease: 'power2.in' 
    }, '<')
    .call(() => setDisplayStep(activeStep))
    .set(contentRef.current, { y: 30 })
    .set(imageRef.current, { y: -30 })
    .to(contentRef.current, { 
      y: 0, 
      opacity: 1, 
      duration: 0.25, 
      ease: 'power2.out' 
    })
    .to(imageRef.current, { 
      y: 0, 
      opacity: 1, 
      duration: 0.25, 
      ease: 'power2.out' 
    }, '<');
  }, [activeStep, displayStep]);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-gray-100">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="max-w-4xl mb-12 md:mb-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Transparent Pricing. No Surprises.
          </h2>
          <p className="text-gray-600 mb-6 md:mb-8 max-w-2xl">
            We offer flexible engagement models depending on your scope and budget. All packages include a dedicated project manager, pre-production planning, and revision rounds.
          </p>
          <ArrowButton href="/contact" text="REQUEST A CUSTOM QUOTE" />
        </div>

        <div className="flex gap-3 lg:gap-12 items-start -mx-4 px lg:mx-0 lg:px-0">
          <div className="sticky top-24 flex flex-col pt-30 relative mx-auto lg:mx-0">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <span
                  className={`text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center transition-colors z-10 ${
                    activeStep >= index ? 'bg-black text-white' : 'bg-gray-300 text-gray-600'
                  }`}>
                  {step.number}
                </span>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-6 bg-gray-300 relative overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 w-full bg-black transition-all duration-500"
                      style={{ height: activeStep > index ? '100%' : '0%' }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex-1 w-full">
            <div className="lg:sticky top-24 grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-4 lg:gap-0 h-auto lg:h-[500px]">
              <div className="p-4 md:p-6 rounded overflow-hidden bg-white flex flex-col h-auto lg:h-full min-h-[250px]">
                <div ref={contentRef} className="flex-1 flex flex-col">
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">{steps[displayStep].title}</h3>
                  <p className="text-gray-600 flex-1 text-sm md:text-base">{steps[displayStep].description}</p>
                  <div className="border-t border-gray-300 pt-3 md:pt-4 mt-4 md:mt-6 flex justify-between items-center">
                    <span className="text-sm font-semibold">STARTING FROM</span>
                    <span className="text-sm font-semibold">{steps[displayStep].timeline}</span>
                  </div>
                </div>
              </div>

              <div className="rounded overflow-hidden h-[200px] lg:h-auto">
                <img
                  ref={imageRef}
                  src={steps[displayStep].image}
                  alt={steps[displayStep].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-2 mt-6 lg:mt-0">
              {steps.map((step, index) => (
                <div
                  key={index}
                  ref={(el) => { stepsRef.current[index] = el; }}
                  className="h-[350px] lg:h-[500px]"
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
