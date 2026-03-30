'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ArrowButton from '../ui/ArrowButton';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'The content',
    description: 'We firstly identify the final result you want to achieve, from here we spec out the project, requirements and content needed.',
    timeline: '1-2 DAYS',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
  },
  {
    number: '02',
    title: 'The strategy',
    description: 'We develop a comprehensive strategy tailored to your goals and target audience.',
    timeline: '3-5 DAYS',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop'
  },
  {
    number: '03',
    title: 'The execution',
    description: 'Our team brings the strategy to life with precision and creativity.',
    timeline: '1-2 WEEKS',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop'
  },
  {
    number: '04',
    title: 'The delivery',
    description: 'We deliver the final product and ensure everything meets your expectations.',
    timeline: '2-3 DAYS',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop'
  }
];

export default function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const [displayStep, setDisplayStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
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
    <section ref={sectionRef} className="w-full py-24 px-4 bg-gray-100">
      <div className="max-w-[1600px] mx-auto">
        <div className="max-w-4xl mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            We've been perfecting our steps for over 15 years to assure success for every single client we create for.
          </h2>
          <ArrowButton href="#" text="GET STARTED" />
        </div>

        <div className="flex gap-12 items-start">
          <div className="sticky top-24 flex flex-col pt-30 relative">
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

          <div className="flex-1">
            <div className="sticky top-24 grid grid-cols-[1.2fr_2fr] gap-0 h-[500px]">
              <div className="p-6 rounded overflow-hidden bg-white flex flex-col h-full">
                <div ref={contentRef} className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-6">{steps[displayStep].title}</h3>
                  <p className="text-gray-600 flex-1">{steps[displayStep].description}</p>
                  <div className="border-t border-gray-300 pt-4 mt-6 flex justify-between items-center">
                    <span className="text-sm font-semibold">TIMELINE</span>
                    <span className="text-sm font-semibold">{steps[displayStep].timeline}</span>
                  </div>
                </div>
              </div>

              <div className="rounded overflow-hidden">
                <img
                  ref={imageRef}
                  src={steps[displayStep].image}
                  alt={steps[displayStep].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-2">
              {steps.map((step, index) => (
                <div
                  key={index}
                  ref={(el) => { stepsRef.current[index] = el; }}
                  className="h-[500px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
