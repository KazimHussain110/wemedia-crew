import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactFormSection from '@/components/contact/ContactFormSection';

export default function ContactPage() {
  return (
    <div className="bg-white">
      <ContactHero />
      <ContactInfo />
      <div className="px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="h-px bg-gray-300 max-w-[1400px] mx-auto"></div>
      </div>
      <ContactFormSection />
    </div>
  );
}
