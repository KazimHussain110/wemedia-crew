import WorkHero from '../../../components/work/WorkHero';
import Projects from '../../../components/work/Projects';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work | Video Production Portfolio | WeMediaCrew',
  description: 'Browse 500+ corporate video and event videography projects. See the standard we deliver for brands across the UAE and Canada.',
};

export default function WorkPage() {
  return (
    <div className="bg-white">
      <WorkHero />
      <Projects />
    </div>
  );
}
