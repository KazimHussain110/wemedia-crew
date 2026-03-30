import Link from 'next/link';
import ArrowButton from '../ui/ArrowButton';

export default function FaqHero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1920&h=600&fit=crop")' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 min-h-[550px] flex flex-col justify-end pb-8">
        <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white">FAQ</h1>
        <div className="h-px bg-gray-400 mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-200">
            <Link href="/" className="hover:text-[#ffd731] transition-colors">Home</Link>
            <span>·</span>
            <span>FAQ</span>
          </div>
          <ArrowButton href="/contact" text="GET A FREE CONSULTATION" bgColor="bg-white" textColor="text-black" />
        </div>
      </div>
    </section>
  );
}
