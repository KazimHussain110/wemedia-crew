import ServicesHero from '@/components/services/ServicesHero';
import VisionSection from '@/components/VisionSection';
import ServicesGrid from '@/components/services/ServicesGrid';

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <ServicesHero />
      <div className="py-16" />
      <VisionSection />
      <ServicesGrid />
    </div>
  );
}
