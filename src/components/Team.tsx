import Link from 'next/link';

export default function Team() {
  const teamMembers = [
    {
      name: 'Kevin Hart',
      role: 'Executive Producer',
      image: 'https://picsum.photos/seed/team1/400/600'
    },
    {
      name: 'Jenny Wilson',
      role: 'Chief Marketing',
      image: 'https://picsum.photos/seed/team2/400/600'
    },
    {
      name: 'Floyd Miles',
      role: 'Creative Director',
      image: 'https://picsum.photos/seed/team3/400/600'
    },
    {
      name: 'Arlene Bell',
      role: 'Executive Producer',
      image: 'https://picsum.photos/seed/team4/400/600'
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
          <Link href="/team" className="flex items-center gap-2 text-sm uppercase tracking-wider font-medium hover:gap-4 transition-all">
            <span>JOIN US NOW</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </Link>
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
              <div className="relative overflow-visible rounded-2xl aspect-[3/4]">
                <div className="relative overflow-hidden rounded-2xl h-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                    <p className="text-lg font-medium">{member.role}</p>
                  </div>
                  <div className="absolute bottom-6 left-6 text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="text-center text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
                      <p className="text-lg">{member.role}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#ffd731] rounded-full flex items-center justify-center opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
