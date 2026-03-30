import ContactHero from '@/components/contact/ContactHero';
import ContactFormSection from '@/components/contact/ContactFormSection';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata = {
  title: 'Get a Quote | Contact WeMediaCrew | UAE & Canada Video Production',
  description: 'Request a free video production quote. Corporate films, event coverage, aerial filming. Offices in UAE and Canada. Response within 24 hours.',
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <ContactHero />
      <ContactFormSection />
      <ContactInfo />
    </div>
  );
}
