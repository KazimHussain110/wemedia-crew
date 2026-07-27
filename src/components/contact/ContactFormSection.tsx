import ContactForm from '../ui/ContactForm';

export default function ContactFormSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-[38%_62%] gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-2 h-2 fill-black" viewBox="0 0 512 512"><circle cx="256" cy="256" r="256" /></svg>
              <span className="text-sm uppercase tracking-wider font-medium">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Tell us about your project.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Fill in the form and we will get back to you within 24 hours with a tailored proposal. No obligation, no pressure.
            </p>
            <div className="space-y-4">
              {[
                { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'marketing@wemediacrew.com' },
                { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', label: 'Canada: +1 437 663 9112 · Dubai WhatsApp: +971 55 321 2002' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
