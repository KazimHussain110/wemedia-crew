import ArrowButton from '../ui/ArrowButton';

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=600&fit=crop")'}}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 min-h-[550px] flex flex-col justify-end pb-8">
        <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white">About</h1>
        <div className="h-px bg-gray-400 mb-6"></div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-200">
            <a href="/" className="hover:text-[#ffd731] transition-colors">Home</a>
            <span>·</span>
            <span>About</span>
          </div>
          <ArrowButton href="/projects" text="EXPLORE OUR REELS" bgColor="bg-white" textColor="text-black" />
        </div>
      </div>
    </section>
  );
}
