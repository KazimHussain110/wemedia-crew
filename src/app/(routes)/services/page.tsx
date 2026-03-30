import ServicesHero from '@/components/services/ServicesHero';
import VisionSection from '@/components/VisionSection';
import ServicesGrid from '@/components/services/ServicesGrid';
import Packages from '@/components/services/ProcessSteps';
import Reviews from '@/components/services/Reviews';

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <ServicesHero />
      <div className="py-16" />
      <VisionSection />
      <ServicesGrid />
      <div className="bg-[#f5f5f5] flex justify-end">
        <div className="w-4/6">
          <Packages />
        </div>
      </div>
      <Reviews />
    </div>
  );
}
