export default function Footer() {
  return (
    <footer className="bg-[#2a2a2a] text-white">
      <div className="max-w-[1400px] mx-auto px-4 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20">
          {/* Logo & Main Links */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span className="text-2xl font-bold">framek</span>
            </div>
            <nav className="space-y-3">
              <a href="/" className="block text-white font-semibold hover:text-yellow-400">HOME</a>
              <a href="/about" className="block text-white font-semibold hover:text-yellow-400">ABOUT US</a>
              <a href="/services" className="block text-white font-semibold hover:text-yellow-400">SERVICES</a>
              <a href="/projects" className="block text-white font-semibold hover:text-yellow-400">PROJECTS</a>
              <a href="/contact" className="block text-white font-semibold hover:text-yellow-400">CONTACT US</a>
            </nav>
          </div>

          {/* Product */}
          <div>
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
          <div>
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
          <div>
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
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Let's collaborate</h2>
          <div className="space-y-2 mb-8">
            <p className="text-gray-400">framek.contact@example.com</p>
            <a href="tel:+4065550120" className="text-3xl md:text-4xl font-bold block hover:text-yellow-400">+ (406) 555-0120</a>
          </div>
          <div className="flex justify-center gap-6 text-xs text-gray-500 uppercase">
            <a href="#" className="hover:text-white">FACEBOOK</a>
            <a href="#" className="hover:text-white">INSTAGRAM</a>
            <a href="#" className="hover:text-white">YOUTUBE</a>
            <a href="#" className="hover:text-white">TWITTER</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 <span className="text-yellow-400">Framek</span>. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
          <button className="w-12 h-12 rounded-full border-2 border-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
