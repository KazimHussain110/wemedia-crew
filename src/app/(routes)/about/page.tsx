import AboutHero from '@/components/about/AboutHero';
import AboutContent from '@/components/about/AboutContent';
import AboutStats from '@/components/about/AboutStats';
import AboutApproach from '@/components/about/AboutApproach';
import LifeAtFramek from '@/components/about/LifeAtFramek';
import ProjectInquiry from '@/components/about/ProjectInquiry';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <AboutHero />
      <AboutContent />
      <AboutStats />
      <AboutApproach />
      <LifeAtFramek />
      <ProjectInquiry />
    </div>
  );
}
