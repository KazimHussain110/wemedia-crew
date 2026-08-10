"use client"

import { useState, useRef } from 'react';
import ArrowButton from './ui/ArrowButton';
import VideoPlayer from './ui/VideoPlayer';
import { projects } from '../lib/workData';

const photoProjects = projects.filter((p) => p.medium === 'photography' && p.showInPortfolio);
const videoProjects = projects.filter((p) => p.medium === 'video' && p.showInPortfolio);

const humanizedDescriptions: Record<string, string> = {
  'adnec-event-coverage': "Abu Dhabi's biggest exhibition hall, one crew, zero missed moments. We moved through the pavilions and came back with frames that actually tell the story.",
  'canada-action-sports': "Sweat, mud, and split-second decisions. We embedded with the Spartan Race athletes and shot the moments that make you feel the impact even in a still frame.",
  'cricket-event-photography': "Six frames. Six wickets. A tournament that crackled with intensity from the first ball. We were on the boundary, and we didn't blink.",
  'etisalat-atlantes-event': "A board meeting is only as powerful as the story told around it. We captured the executives, the sessions, and the energy that no press release can convey.",
  'dubai-air-show': "Machines that defy gravity, crowds that hold their breath. We walked the tarmac and made every frame feel as big as the sky above it.",
  'food-exhibition-dubai': "Abu Dhabi's biggest food show and every stall had a story. We chased colour, steam, and the faces of people genuinely excited about what they'd made.",
  'worldpay-corporate': "Finance doesn't have to feel cold. We found the warmth in the room — the handshakes, the candid laughs — and turned a corporate event into a genuine human story.",
  'restaurant-photography': "Good food deserves to be seen. We lit every dish and framed every corner of Emirates Palace until the photos made you hungry before you'd even read the menu.",
  'egypt-air-brand-film': "A legacy airline, a blank canvas. We built a cinematic world around the poetry of flight — and made every second feel like somewhere you want to be.",
  'seamless-live-event': "Some rooms have a pulse. This was one of them. We put four cameras in, chased the energy, and brought the whole night back to life on screen.",
  'rethink-brand-campaign': "What if your brand film didn't feel like a brand film? That was the brief. We threw out the script, kept the soul, and built something people actually watch.",
  'seamless-ak-conference': "A full-day conference, hundreds of moments, one story. We captured the keynotes, the side conversations, and the electric in-between — then made it all feel like one.",
  'worldpay-fis-corporate': "Global brand. Human story. We stripped back the corporate polish just enough to let the real people and real purpose shine through — and the client loved it.",
};

type Tab = 'photography' | 'videography';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>('photography');
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const items = activeTab === 'photography' ? photoProjects : videoProjects;
  const total = items.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const switchTab = (tab: Tab) => {
    setActiveTab(tab);
    setCurrent(0);
  };

  const getLink = (slug: string, medium: string) =>
    medium === 'photography' ? `/work/photography/${slug}` : `/work/videography/${slug}`;

  return (
    <section className="pt-20 pb-36 bg-[#2B2B2B] relative z-10 -mt-27">
      <div className="w-[90%] mx-auto px-4">

        {/* Header */}
        <div className="flex items-center justify-between mb-12 text-white">
          <div className="flex items-center gap-2">
            <svg className="w-2 h-2 fill-white" viewBox="0 0 512 512">
              <circle cx="256" cy="256" r="256" />
            </svg>
            <span className="text-sm uppercase tracking-wider">portfolio</span>
          </div>
          <ArrowButton href="/work" text="view all work" />
        </div>

        {/* Title */}
        <div className="mb-10 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">Work That Earned Its Place Here.</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real clients, real briefs, real results every project on this page was built to do a job.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-[#1a1a1a] rounded-full p-1 gap-1">
            {(['photography', 'videography'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => switchTab(tab)}
                className={`px-6 py-2 rounded-full text-sm uppercase tracking-widest font-semibold transition-all duration-300 ${
                  activeTab === tab ? 'bg-[#ffd731] text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel viewport */}
        <div
          className="relative overflow-hidden"
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const diff = touchStartX.current - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
            touchStartX.current = null;
          }}
        >
          {/* Sliding track — all cards in one row, translateX moves it */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {items.map((project, i) => {
              const desc = humanizedDescriptions[project.slug] || project.description;
              const link = getLink(project.slug, project.medium);
              const isActive = i === current;

              return (
                <div
                  key={project.slug}
                  className="w-full flex-shrink-0 rounded-2xl overflow-hidden"
                >
                  {/* Media wrapper — relative only on md+ for overlay positioning */}
                  <div className="relative">
                    {project.medium === 'video' && project.videoEmbed ? (
                      project.videoEmbed.includes('youtube.com') || project.videoEmbed.includes('youtu.be') ? (
                        isActive ? (
                          <iframe
                            src={`${project.videoEmbed}?autoplay=1&mute=1&loop=1&playlist=${project.videoEmbed.split('/').pop()}&rel=0`}
                            title={`${project.title} video`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-[240px] md:h-[520px] border-0 object-cover"
                          />
                        ) : (
                          <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="w-full h-[240px] md:h-[520px] object-cover"
                          />
                        )
                      ) : (
                        <VideoPlayer
                          src={project.videoEmbed}
                          poster={project.thumbnail}
                          active={isActive}
                          className="w-full h-[240px] md:h-[520px] object-cover"
                        />
                      )
                    ) : (
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-[240px] md:h-[520px] object-cover"
                      />
                    )}

                    {/* Gradient overlay — desktop only */}
                    <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    {/* Top-right overlay for text readability — desktop only */}
                    <div className="hidden md:block absolute inset-0 bg-gradient-to-bl from-black/60 via-transparent to-transparent" />

                    {/* Top right — description + CTA — desktop only */}
                    <div className="hidden md:block absolute top-6 right-6 max-w-sm text-right">
                      <p className="text-white/80 text-sm leading-relaxed mb-3">{desc}</p>
                      <ArrowButton href={link} text="View Project" bgColor="bg-white" textColor="text-black" />
                    </div>

                    {/* Bottom left — title + meta — desktop only */}
                    <div className="hidden md:block absolute bottom-6 left-6">
                      <h3 className="text-white text-4xl font-bold mb-2">{project.title}</h3>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-[#ffd731] font-semibold">{project.projectType}</span>
                        <span className="text-gray-400">{project.location ?? project.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Below-card content — mobile only */}
                  <div className="md:hidden bg-[#1a1a1a] px-4 py-4">
                    <h3 className="text-white text-2xl font-bold mb-1">{project.title}</h3>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-[#ffd731] font-semibold">{project.projectType}</span>
                      <span className="text-gray-400">{project.location ?? project.year}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prev arrow */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 border border-white/10 text-white hover:bg-[#ffd731] hover:text-black transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 border border-white/10 text-white hover:bg-[#ffd731] hover:text-black transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-[#ffd731]' : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>



      </div>
    </section>
  );
}
