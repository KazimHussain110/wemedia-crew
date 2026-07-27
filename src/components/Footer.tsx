'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2a2a2a] text-white">
      <div className="max-w-[1400px] mx-auto px-4 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:flex md:flex-row gap-8 mb-20">
          {/* Logo - Full width on mobile */}
          <div className="col-span-2 md:w-1/5 mb-8 md:mb-0">
            <Link href="/" className="flex-shrink-0 justify-start md:justify-start flex">
              <img src="/logo.png" alt="logo" className="h-18" />
            </Link>
          </div>

          {/* Main Links */}
          <div className="md:w-1/5">
            <nav className="space-y-3">
              <Link href="/" className="block text-white font-semibold hover:text-[#ffd731]">HOME</Link>
              <Link href="/about" className="block text-white font-semibold hover:text-[#ffd731]">ABOUT US</Link>
              <Link href="/services" className="block text-white font-semibold hover:text-[#ffd731]">SERVICES</Link>
              <Link href="/projects" className="block text-white font-semibold hover:text-[#ffd731]">PROJECTS</Link>
              <Link href="/contact" className="block text-white font-semibold hover:text-[#ffd731]">CONTACT US</Link>
            </nav>
          </div>

          {/* Product */}
          <div className="md:w-1/5">
            <h3 className="text-gray-500 font-semibold mb-6 uppercase text-sm">PRODUCT</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-white">Commercial Videos</a>
              <a href="#" className="block text-gray-400 hover:text-white">Training Videos</a>
              <a href="#" className="block text-gray-400 hover:text-white">Animation</a>
              <a href="#" className="block text-gray-400 hover:text-white">Corporate Videos</a>
              <a href="#" className="block text-gray-400 hover:text-white">Motion Graphic</a>
            </nav>
          </div>

          {/* Our Services */}
          <div className="md:w-1/5">
            <h3 className="text-gray-500 font-semibold mb-6 uppercase text-sm">OUR SERVICES</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-white">Film Production</a>
              <a href="#" className="block text-gray-400 hover:text-white">Creative Direction</a>
              <a href="#" className="block text-gray-400 hover:text-white">Motion Graphic</a>
              <a href="#" className="block text-gray-400 hover:text-white">Digital Content</a>
              <a href="#" className="block text-gray-400 hover:text-white">Visual Effects</a>
            </nav>
          </div>

          {/* Pages */}
          <div className="md:w-1/5">
            <h3 className="text-gray-500 font-semibold mb-6 uppercase text-sm">PAGES</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-white">Team</a>
              <a href="#" className="block text-gray-400 hover:text-white">Testimonials</a>
              <a href="#" className="block text-gray-400 hover:text-white">FAQs</a>
              <a href="#" className="block text-gray-400 hover:text-white">Blog</a>
              <a href="#" className="block text-gray-400 hover:text-white">Careers</a>
            </nav>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-left md:text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Let's collaborate</h2>
          <div className="border-t border-gray-700 pt-8">
            <div className="space-y-2 mb-8">
              <a href="mailto:marketing@wemediacrew.com" className="text-gray-400 hover:text-white">marketing@wemediacrew.com</a>
              <a href="tel:+14376639112" className="text-3xl md:text-4xl font-bold block hover:text-[#ffd731]">+1 437 663 9112</a>
              <a href="https://wa.me/971553212002" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white block">
                Dubai WhatsApp: +971 55 321 2002
              </a>
            </div>
            <div className="flex justify-start md:justify-center gap-6 text-xs text-gray-500 uppercase">
              <a href="#" className="hover:text-white">FACEBOOK</a>
              <a href="#" className="hover:text-white">INSTAGRAM</a>
              <a href="#" className="hover:text-white">YOUTUBE</a>
              <a href="#" className="hover:text-white">TWITTER</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 <span className="text-[#ffd731]">WeMediaCrew</span>. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
