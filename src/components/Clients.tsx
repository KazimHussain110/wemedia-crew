export default function Clients() {
  const clients = [
    { name: 'Prime Video', logo: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/client_1.svg' },
    { name: 'Film', logo: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/client_2.svg' },
    { name: 'Rumble', logo: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/client_3.svg' },
    { name: 'DPG Media', logo: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/client_4.svg' },
    { name: 'Cameo', logo: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/client_5.svg' },
    { name: 'Max', logo: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/client_6.svg' },
    { name: 'Dotmedia', logo: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/client_7.svg' },
    { name: 'Blendle', logo: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/client_8.svg' },
    { name: 'Studio 45', logo: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/client_9.svg' },
    { name: 'TiVo', logo: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/client_10.svg' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <p className="text-center text-gray-500 text-2xl md:text-3xl mb-12 leading-snug" style={{ fontFamily: "'Cal Sans', sans-serif" }}>
          &ldquo;Trusted by industry leaders across the Middle East, North America, and beyond.&rdquo;
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-0">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`flex items-center justify-center h-[200px] border border-gray-200 ${
                index === 1 ? 'bg-[#fef9e6]' : 'bg-white'
              }`}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-[140px] max-h-[50px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
