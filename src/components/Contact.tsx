import ArrowButton from './ui/ArrowButton';
import IconBox from './ui/IconBox';
import ContactForm from './ui/ContactForm';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold mb-4">Contact</h1>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <a href="/" className="hover:text-[#ffd731] transition-colors">Home</a>
                <span>·</span>
                <span>Contact</span>
              </div>
            </div>
            <ArrowButton href="/projects" text="EXPLORE OUR REELS" />
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-16 max-w-3xl">
            If there is anything you would like to talk about, please feel free to contact us.
          </h3>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Location */}
            <div className="space-y-6">
              <IconBox
                icon={
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
                title="Location"
                description="401 Broadway, 24th Floor, Orchard View, London"
              />
              <ArrowButton href="#" text="Visit us" />
            </div>

            {/* Phone */}
            <div className="space-y-6">
              <IconBox
                icon={
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
                title="Phone number"
                description="+1 437 663 9112"
              />
              <ArrowButton href="tel:+14376639112" text="call us" />
            </div>

            {/* Email */}
            <div className="space-y-6">
              <IconBox
                icon={
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                title="Support email"
                description="marketing@wemediacrew.com"
              />
              <ArrowButton href="mailto:marketing@wemediacrew.com" text="email us" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Image */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">Leave a message</h2>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/ct-img.jpg"
                  alt="Contact"
                  width={530}
                  height={320}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <p className="text-gray-600 mb-8">
                Fill all information details to consult with us to get services from us
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
