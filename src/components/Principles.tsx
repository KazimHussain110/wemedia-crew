export default function Principles() {
  const principles = [
    {
      title: 'Take action',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
        </svg>
      ),
      description: "Good story feels like it just happened by accident, and it's been there all along waiting to be found."
    },
    {
      title: 'Innovation',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      description: 'An international digital design studio reimagining how people connect with brands.'
    },
    {
      title: 'Be honest',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      description: "If we recognize something will not work, we'll let you know, explain why and offer alternatives."
    },
    {
      title: 'Unique projects',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3v4a2 2 0 002 2h4" />
        </svg>
      ),
      description: "We've got you covered, from commercials, animation, customer stories, branded."
    },
    {
      title: 'Experience',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      description: 'We think of our agency as an ecosystem composed of our customers, colleagues, suppliers, and ourselves.'
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
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center gap-2 mb-12">
          <svg className="w-2 h-2 fill-black" viewBox="0 0 512 512">
            <circle cx="256" cy="256" r="256" />
          </svg>
          <span className="text-sm uppercase tracking-wider font-medium">OUR PRINCIPLES</span>
        </div>

        <div className="grid lg:grid-cols-[45%_55%] gap-12 mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              Committed to turning your ideas into reality
            </h2>
            <div className="flex items-center gap-4">
              <a href="/quote" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-yellow-500 transition-colors">
                GET A QUOTE
              </a>
              <button className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.slice(0, 2).map((principle, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold">{principle.title}</h3>
                  {principle.icon}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {principles.slice(2).map((principle, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold">{principle.title}</h3>
                {principle.icon}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-6xl md:text-7xl font-bold mb-4">{stat.number}</h3>
              <p className="text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
