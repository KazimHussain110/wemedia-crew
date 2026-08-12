export default function Clients() {
  const clients = [
    { name: 'Client 01', logo: '/company-logo/001-white.png' },
    { name: 'Client 02', logo: '/company-logo/002.png' },
    { name: 'Client 03', logo: '/company-logo/003.png' },
    { name: 'Client 04', logo: '/company-logo/004.png' },
    { name: 'Client 05', logo: '/company-logo/Hyrox.png' },
    { name: 'Client 06', logo: '/company-logo/006-white.png' },
    { name: 'Client 07', logo: '/company-logo/etisalat-white.png' },
    { name: 'Client 08', logo: '/company-logo/008.png' },
    { name: 'Client 09', logo: '/company-logo/009-white.png' },
    { name: 'Client 10', logo: '/company-logo/0010.png' },
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
              className="flex items-center justify-center h-[200px] border border-gray-200 bg-white"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-[200px] max-h-[80px] object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
