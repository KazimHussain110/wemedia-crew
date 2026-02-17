export default function Introduction() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid lg:grid-cols-[35%_65%] gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <svg className="w-2 h-2 fill-yellow-400" viewBox="0 0 512 512">
                <circle cx="256" cy="256" r="256" />
              </svg>
              <span className="text-sm uppercase tracking-wider">introduction</span>
            </div>
          </div>

          <div className="pr-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              We're a creative video agency that helps corporations and brands find their voice<br />and connect with their target audience.
            </h3>
            <a href="/team" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider hover:gap-4 transition-all">
              <span>meet our team</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
              </svg>
            </a>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="border-l-2 border-gray-200 pl-6">
                <div className="w-12 h-12 mb-4">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeWidth="0.75" stroke="currentColor" d="M6.403 1.788c0.373 1.007 0.208 2.135-0.529 2.917s-1.854 1.011-2.881 0.697c-0.373-1.007-0.208-2.135 0.529-2.917s1.855-1.011 2.881-0.697z" />
                    <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeWidth="0.75" stroke="currentColor" d="M12 5.59l1.692 2.551 2.949 0.821-1.903 2.397 0.131 3.058-2.868-1.069-2.868 1.069 0.131-3.058-1.903-2.397 2.949-0.821 1.692-2.551z" />
                  </svg>
                </div>
                <h5 className="text-xl font-bold mb-3">Award winning projects</h5>
                <p className="text-gray-600">
                  We work closely with our clients to understand their goals and expectations to deliver video content that exceeds their expectations.
                </p>
              </div>

              <div className="border-l-2 border-gray-200 pl-6">
                <div className="w-12 h-12 mb-4">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeWidth="0.75" stroke="currentColor" d="M16.142 14.22h-11.451c-0.649 0-1.176-0.526-1.176-1.176v-7.395c0-0.649 0.526-1.176 1.176-1.176h11.451c0.649 0 1.176 0.526 1.176 1.176v7.395c0 0.649-0.526 1.176-1.176 1.176z" />
                    <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeWidth="0.75" stroke="currentColor" d="M23.297 13.74l-3.167-1.875v-5.036l3.167-1.875v8.786z" />
                  </svg>
                </div>
                <h5 className="text-xl font-bold mb-3">Best quality products</h5>
                <p className="text-gray-600">
                  We understand that each client has unique needs and requirements, and we work tirelessly to ensure that they are happy with the final product we create.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <img src="https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/h1_img-1.jpg" alt="Project 1" className="w-full h-auto rounded-lg" />
          <img src="https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/h1_img-3.jpg" alt="Project 2" className="w-full h-auto rounded-lg" />
          <img src="https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/h1_img-2.jpg" alt="Project 3" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </section>
  );
}
