import AboutHero from '@/components/about/AboutHero';
import AboutContent from '@/components/about/AboutContent';
import AboutStats from '@/components/about/AboutStats';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <AboutHero />
      <AboutContent />
      <AboutStats />
    </div>
  );
}
