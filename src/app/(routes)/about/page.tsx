import AboutHero from '../../../components/about/AboutHero';
import AboutContent from '../../../components/about/AboutContent';
import AboutStats from '../../../components/about/AboutStats';
import AboutApproach from '../../../components/about/AboutApproach';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About WeMediaCrew | Professional Videography Company | UAE & Canada',
  description: 'Meet the team behind 500+ corporate video and event videography projects across the UAE and Canada. Our story, our process, our commitment.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <AboutHero />
      <AboutContent />
      <AboutStats />
      <AboutApproach />
    </div>
  );
}
