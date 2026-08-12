import ServicesHero from '../../../components/services/ServicesHero';
import VisionSection from '../../../components/VisionSection';
import ServicesGrid from '../../../components/services/ServicesGrid';
import Packages from '../../../components/services/ProcessSteps';
import Testimonials from '../../../components/Testimonials';

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <ServicesHero />
      <div className="py-16" />
      <VisionSection />
      <ServicesGrid />
      <div className="bg-[#f5f5f5]">
        <Packages />
      </div>
      <Testimonials />
    </div>
  );
}
