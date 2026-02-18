export default function Team() {
  const teamMembers = [
    {
      name: 'Kevin Hart',
      role: 'Executive Producer',
      image: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/team_1.jpg'
    },
    {
      name: 'Jenny Wilson',
      role: 'Chief Marketing',
      image: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/team_2.jpg'
    },
    {
      name: 'Floyd Miles',
      role: 'Creative Director',
      image: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/team_3.jpg'
    },
    {
      name: 'Arlene Bell',
      role: 'Executive Producer',
      image: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/team_4.jpg'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2">
            <svg className="w-2 h-2 fill-black" viewBox="0 0 512 512">
              <circle cx="256" cy="256" r="256" />
            </svg>
            <span className="text-sm uppercase tracking-wider font-medium">OUR PEOPLE</span>
          </div>
          <a href="/team" className="flex items-center gap-2 text-sm uppercase tracking-wider font-medium hover:gap-4 transition-all">
            <span>JOIN US NOW</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </a>
        </div>

        {/* Title & Description */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-bold mb-6">Team</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We're a team of highly experienced specialists and genuine collaborators.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm mb-2 opacity-90">{member.role}</p>
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
