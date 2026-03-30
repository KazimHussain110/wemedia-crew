import FaqHero from '@/components/faq/FaqHero';
import FaqAccordion from '@/components/faq/FaqAccordion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | WeMediaCrew Video Production | Pricing, Process & More',
  description: 'Answers to common questions about our video production services, pricing, turnaround times, and equipment. WeMediaCrew, UAE and Canada.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What types of video production does WeMediaCrew offer?', acceptedAnswer: { '@type': 'Answer', text: 'We offer corporate video production, event videography, aerial and drone filming, post-production and editing, social media video content, and live streaming services. We serve clients across the UAE and Canada.' } },
    { '@type': 'Question', name: 'Do you work with businesses outside the UAE and Canada?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. While our primary production teams are based in the UAE and Canada, we regularly support international clients for projects in the GCC, Europe, and North America.' } },
    { '@type': 'Question', name: 'How far in advance should I book your team?', acceptedAnswer: { '@type': 'Answer', text: 'For event coverage, we recommend booking at least 2–4 weeks in advance. For larger corporate productions and multi-day shoots, 4–8 weeks gives us the time to plan properly.' } },
    { '@type': 'Question', name: 'What is your typical turnaround time?', acceptedAnswer: { '@type': 'Answer', text: 'For corporate videos, expect 10–15 business days from final shoot to delivery. Event highlight reels are typically delivered within 5–10 business days.' } },
    { '@type': 'Question', name: 'Do you provide a contract and NDA?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Every project is governed by a formal production agreement. We provide NDAs as standard for clients who require confidentiality, and we carry full production insurance.' } },
    { '@type': 'Question', name: 'How much does a corporate video cost?', acceptedAnswer: { '@type': 'Answer', text: 'A single-day corporate video shoot typically starts from AED 8,000 / CAD 3,000. Contact us for a detailed quote tailored to your project.' } },
    { '@type': 'Question', name: 'Do you offer packages or retainer deals?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer single-project packages, multi-day production bundles, and monthly/quarterly retainer agreements. Retainer clients receive priority scheduling and volume discounts.' } },
    { '@type': 'Question', name: 'What is included in a typical production package?', acceptedAnswer: { '@type': 'Answer', text: 'All packages include pre-production planning, a dedicated project manager, professional equipment, on-site crew, professional editing, licensed music, and multi-format delivery.' } },
    { '@type': 'Question', name: 'Do you charge for revisions?', acceptedAnswer: { '@type': 'Answer', text: 'Two rounds of revisions are included in all standard packages. Additional revision rounds can be accommodated at an agreed rate.' } },
    { '@type': 'Question', name: 'What equipment do you use?', acceptedAnswer: { '@type': 'Answer', text: 'We use cinema-grade camera systems (RED, Sony FX, Blackmagic), professional lighting (ARRI, Aputure), broadcast audio equipment (Sennheiser, Rode), gimbal and slider systems, and licensed commercial drones.' } },
    { '@type': 'Question', name: 'Can you provide raw footage?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Raw footage delivery is available upon request and may involve an additional fee for storage media and file transfer.' } },
    { '@type': 'Question', name: 'What formats do you deliver in?', acceptedAnswer: { '@type': 'Answer', text: 'We deliver in any format required, including 4K ProRes masters, H.264/H.265 for web, vertical formats for social media, and broadcast-standard files. SRT subtitle files are included for multilingual projects.' } },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="bg-white">
        <FaqHero />
        <FaqAccordion />
      </div>
    </>
  );
}
