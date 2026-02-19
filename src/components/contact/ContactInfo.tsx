import IconBox from '../ui/IconBox';

// Custom button component to replace ArrowButton
function CustomButton({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 px-4 py-2 text-black text-sm font-semibold hover:opacity-70 transition-opacity duration-300"
    >
      {text}
      <span>→</span>
    </a>
  );
}

export default function ContactInfo() {
  return (
    <section className="py-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-20 text-center max-w-4xl mx-auto">
          If there is anything you would like to talk about, please feel free to contact us.
        </h3>

        <div className="grid md:grid-cols-3 gap-2 divide-x divide-gray-300">
          <div className="space-y-6">
            <IconBox
              icon={
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              title="Location"
              description="401 Broadway, 24th Floor, Orchard View, London"
            />
            <CustomButton href="#" text="Visit us" />
          </div>

          <div className="space-y-6 md:pl-4">
            <IconBox
              icon={
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }
              title="Phone number"
              description="+(084) 123 - 456 88"
            />
            <CustomButton href="#" text="Call us" />
          </div>

          <div className="space-y-6 md:pl-4">
            <IconBox
              icon={
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              title="Support email"
              description="support@example.com"
            />
            <CustomButton href="#" text="Email us" />
          </div>
        </div>
      </div>
    </section>
  );
}