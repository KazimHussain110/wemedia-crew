import ArrowButton from "./ui/ArrowButton";

export default function Principles() {
  const principles = [
    {
      title: 'Dual-Market Expertise',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Fully operational production teams in the UAE and Canada. No outsourcing. No timezone headaches. Local crews who understand local audiences.'
    },
    {
      title: 'Corporate-Grade Reliability',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: 'NDAs, production insurance, backup equipment protocols, and a project management process that keeps CMOs and event directors sleeping soundly.'
    },
    {
      title: 'Cinematic Quality, Commercial Speed',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      description: 'We operate at the intersection of film aesthetics and commercial efficiency. Broadcast-ready deliverables, usually within 10 business days.'
    },
    {
      title: 'Partnership',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      description: 'We do not disappear after delivery. We build long-term relationships with brands that value consistency and trust.'
    },
    {
      title: 'Craft',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      description: 'We invest in cinema-grade equipment, continuous training, and creative development because our clients deserve the best tools pointed at their stories.'
    }
  ];

  const stats = [
    { number: '25+', label: 'years in business' },
    { number: '3K+', label: 'videos created' },
    { number: '1B+', label: 'views archived for clients' },
    { number: '99%', label: 'satisfied customers' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center gap-2 mb-12">
          <svg className="w-2 h-2 fill-black" viewBox="0 0 512 512">
            <circle cx="256" cy="256" r="256" />
          </svg>
          <span className="text-sm uppercase tracking-wider font-medium">WHY BRANDS CHOOSE WEMEDIAREW</span>
        </div>

        <div className="mb-16">
          <div className="grid lg:grid-cols-[35%_65%] gap-6 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8 tracking-tight">
                Built for Brands That Cannot Afford Average.
              </h2>
              <ArrowButton href="/quote" text="GET A QUOTE" />
            </div>

            {/* First row - 2 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:mr-7 lg:-ml-8">
              {principles.slice(0, 2).map((principle, index) => (
                <div key={index} className="bg-gray-100 rounded p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold tracking-tight">{principle.title}</h3>
                    {principle.icon}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - 3 cards taking full width */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.slice(2).map((principle, index) => (
              <div key={index} className="bg-gray-100 rounded p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold tracking-tight">{principle.title}</h3>
                  {principle.icon}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <h3 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">{stat.number}</h3>
              <div className="relative mb-2">
                <div className="h-px bg-gray-300 w-full"></div>
                <div className="absolute top-0 left-0 h-px bg-black w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
              </div>
              <p className="text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
