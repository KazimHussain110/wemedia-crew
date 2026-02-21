'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="w-full px-8 py-6 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <img src="https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/logo-w.svg" alt="logo" className="h-8" />
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-4">
              <Link href="/" className={`text-white hover:text-gray-300 text-sm relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#ffd731] after:transition-all after:duration-300 ${pathname === '/' ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}>HOME</Link>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <Link href="/about" className={`text-white hover:text-gray-300 text-sm relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#ffd731] after:transition-all after:duration-300 ${pathname === '/about' ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}>ABOUT</Link>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <Link href="/services" className={`text-white hover:text-gray-300 text-sm relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#ffd731] after:transition-all after:duration-300 ${pathname === '/services' ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}>SERVICES</Link>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <Link href="/work" className={`text-white hover:text-gray-300 text-sm relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#ffd731] after:transition-all after:duration-300 ${pathname === '/work' ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}>WORK</Link>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <Link href="/contact" className={`text-white hover:text-gray-300 text-sm relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#ffd731] after:transition-all after:duration-300 ${pathname === '/contact' ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}>CONTACT</Link>
            </nav>

            <button onClick={() => setMenuOpen(!menuOpen)} className="hidden lg:flex flex-col gap-1 w-10 h-10 bg-[#ffd731] hover:bg-ffd731 rounded-full items-center justify-center relative">
              <span className={`h-0.5 bg-black w-4 transition-all duration-300 ${menuOpen ? 'rotate-45 absolute' : ''}`}></span>
              <span className={`h-0.5 bg-black w-4 transition-all duration-300 ${menuOpen ? '-rotate-45 absolute' : ''}`}></span>
            </button>

            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white text-2xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95">
          <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl">&times;</button>
          <div className="container mx-auto px-4 py-20 grid lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-white text-xl mb-4">Demos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/">Home One</Link></li>
                <li><Link href="/home-2">Home Two</Link></li>
                <li><Link href="/home-3">Home Three</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-xl mb-4">Pages</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/awards">Our Awards</Link></li>
                <li><Link href="/clients">Clients</Link></li>
                <li><Link href="/team">Our Team</Link></li>
              </ul>
            </div>
            <div>
              <img src="https://demo2.wpopal.com/framek/wp-content/uploads/2025/06/menu_sub_img.jpg" alt="" className="w-full rounded-lg" />
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-white text-sm">email us</h4>
                  <a href="mailto:contact@example.com" className="text-white">contact@example.com</a>
                </div>
                <div>
                  <h4 className="text-white text-sm">call us</h4>
                  <a href="tel:+4065550120" className="text-white">+ (406) 555-0120</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
