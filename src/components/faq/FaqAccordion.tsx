'use client';

import { useState } from 'react';

const faqs = [
  {
    category: 'General',
    items: [
      {
        q: 'What types of video production does WeMediaCrew offer?',
        a: 'We offer corporate video production, event videography, aerial and drone filming, post-production and editing, social media video content, and live streaming services. We serve clients across the UAE and Canada.',
      },
      {
        q: 'Do you work with businesses outside the UAE and Canada?',
        a: 'Yes. While our primary production teams are based in the UAE and Canada, we regularly support international clients for projects in the GCC, Europe, and North America. Contact us to discuss your location requirements.',
      },
      {
        q: 'How far in advance should I book your team?',
        a: 'For event coverage, we recommend booking at least 2–4 weeks in advance. For larger corporate productions and multi-day shoots, 4–8 weeks gives us the time to plan properly. Rush bookings are possible depending on availability.',
      },
      {
        q: 'What is your typical turnaround time?',
        a: 'For corporate videos, expect 10–15 business days from final shoot to delivery. Event highlight reels are typically delivered within 5–10 business days. Same-day teaser edits are available for events upon request.',
      },
      {
        q: 'Do you provide a contract and NDA?',
        a: 'Absolutely. Every project is governed by a formal production agreement. We provide NDAs as standard for clients who require confidentiality, and we carry full production insurance.',
      },
    ],
  },
  {
    category: 'Pricing and Process',
    items: [
      {
        q: 'How much does a corporate video cost?',
        a: 'Pricing depends on project scope, duration, crew size, and post-production requirements. A single-day corporate video shoot typically starts from AED 8,000 / CAD 3,000. Contact us for a detailed quote tailored to your project.',
      },
      {
        q: 'Do you offer packages or retainer deals?',
        a: 'Yes. We offer single-project packages, multi-day production bundles, and monthly/quarterly retainer agreements for brands that need ongoing video content. Retainer clients receive priority scheduling and volume discounts.',
      },
      {
        q: 'What is included in a typical production package?',
        a: 'All packages include pre-production planning, a dedicated project manager, professional equipment, on-site crew, professional editing, licensed music, and multi-format delivery. Specific inclusions vary by package tier.',
      },
      {
        q: 'Do you charge for revisions?',
        a: 'Two rounds of revisions are included in all standard packages. Additional revision rounds can be accommodated at an agreed rate.',
      },
    ],
  },
  {
    category: 'Technical',
    items: [
      {
        q: 'What equipment do you use?',
        a: 'We use cinema-grade camera systems (RED, Sony FX, Blackmagic), professional lighting (ARRI, Aputure), broadcast audio equipment (Sennheiser, Rode), gimbal and slider systems, teleprompter rigs, and licensed commercial drones. Specific equipment is selected based on project requirements.',
      },
      {
        q: 'Can you provide raw footage?',
        a: 'Yes. Raw footage delivery is available upon request and may involve an additional fee for storage media and file transfer.',
      },
      {
        q: 'What formats do you deliver in?',
        a: 'We deliver in any format required, including 4K ProRes masters, H.264/H.265 for web, vertical formats for social media, and broadcast-standard files. SRT subtitle files are included for multilingual projects.',
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-6 group"
      >
        <span className="text-base md:text-lg font-medium text-gray-900 group-hover:text-black transition-colors">
          {q}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300 ${open ? 'bg-black border-black rotate-45' : 'bg-white'}`}>
          <svg className={`w-3.5 h-3.5 transition-colors ${open ? 'text-white' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-out ${open ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-500 leading-relaxed pr-14">{a}</p>
      </div>
    </div>
  );
}

export default function FaqAccordion() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-3xl mx-auto">
          {faqs.map((group) => (
            <div key={group.category} className="mb-14">
              <div className="flex items-center gap-3 mb-8">
                <svg className="w-2 h-2 fill-black flex-shrink-0" viewBox="0 0 512 512">
                  <circle cx="256" cy="256" r="256" />
                </svg>
                <h2 className="text-xs uppercase tracking-widest text-black font-medium">{group.category}</h2>
              </div>
              <div>
                {group.items.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
