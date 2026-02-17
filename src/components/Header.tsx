'use client';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="w-full px-4 py-6 flex items-center justify-between max-w-[1200px] mx-auto">
          <a href="/" className="flex-shrink-0">
            <img src="https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/logo-w.svg" alt="logo" className="h-8" />
          </a>

          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-8">
              <a href="/" className="text-white hover:text-gray-300">Demos</a>
              <a href="#" className="text-white hover:text-gray-300">Pages</a>
              <a href="#" className="text-white hover:text-gray-300">Services</a>
              <a href="#" className="text-white hover:text-gray-300">Work</a>
              <a href="#" className="text-white hover:text-gray-300">Contact</a>
            </nav>

            <button onClick={() => setMenuOpen(!menuOpen)} className="hidden lg:flex flex-col gap-1 w-10 h-10 bg-yellow-400 rounded-full items-center justify-center">
              <span className="h-0.5 bg-black w-4"></span>
              <span className="h-0.5 bg-black w-4"></span>
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
                <li><a href="/">Home One</a></li>
                <li><a href="/home-2">Home Two</a></li>
                <li><a href="/home-3">Home Three</a></li>
                <li><a href="/home-4">Home Four</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-xl mb-4">Pages</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about">About Us</a></li>
                <li><a href="/awards">Our Awards</a></li>
                <li><a href="/clients">Clients</a></li>
                <li><a href="/team">Our Team</a></li>
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
