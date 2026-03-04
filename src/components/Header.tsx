'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-[60]">
        <div className="w-full px-8 py-6 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <img src="/logo.png" alt="logo" className="h-14" />
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

            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white p-2 relative z-[60]">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95">
          <nav className="flex flex-col items-center justify-center h-full gap-6">
            <Link href="/" onClick={() => setMenuOpen(false)} className={`text-white hover:text-gray-300 text-lg ${pathname === '/' ? 'text-[#ffd731]' : ''}`}>HOME</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className={`text-white hover:text-gray-300 text-lg ${pathname === '/about' ? 'text-[#ffd731]' : ''}`}>ABOUT</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} className={`text-white hover:text-gray-300 text-lg ${pathname === '/services' ? 'text-[#ffd731]' : ''}`}>SERVICES</Link>
            <Link href="/work" onClick={() => setMenuOpen(false)} className={`text-white hover:text-gray-300 text-lg ${pathname === '/work' ? 'text-[#ffd731]' : ''}`}>WORK</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className={`text-white hover:text-gray-300 text-lg ${pathname === '/contact' ? 'text-[#ffd731]' : ''}`}>CONTACT</Link>
          </nav>
        </div>
      )}
    </>
  );
}
