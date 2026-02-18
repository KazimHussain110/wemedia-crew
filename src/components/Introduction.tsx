import ArrowButton from './ui/ArrowButton';

export default function Introduction() {
  return (
    <section className="py-20 bg-white">
      <div className="w-[80%] mx-auto px-4">
        <div className="grid lg:grid-cols-[28%_72%] gap-12 mb-16 items-start">
          <div>
            <div className="flex items-center gap-2">
              <svg className="w-2 h-2 fill-yellow-400" viewBox="0 0 512 512">
                <circle cx="256" cy="256" r="256" />
              </svg>
              <span className="text-sm uppercase tracking-wider">introduction</span>
            </div>
          </div>

          <div>
            <div className="pr-8 max-w-3xl">
              <p className="text-2xl md:text-3xl font-bold mb-8">
                We're a creative video agency that helps corporations and brands
                find their voice <br />and connect with their
                target audience.
              </p>
              <ArrowButton href="/team" text="meet our team" />

              <div className="grid md:grid-cols-2 gap-8 mt-12 -ml-10 pr-5">
                <div className="flex gap-4 pt-6 border-t border-gray-300">
                  <svg className="w-8 h-8 flex-shrink-0 mt-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <div>
                    <h5 className="text-lg font-bold mb-3 ml-4">Award winning projects</h5>
                    <p className="text-gray-600 text-sm">
                      We work closely with our clients to understand their goals and expectations to deliver video content that exceeds their expectations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 pt-6 border-t border-gray-300">
                  <svg className="w-8 h-8 flex-shrink-0 mt-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  <div>
                    <h5 className="text-lg font-bold mb-3 ml-4">Best quality products</h5>
                    <p className="text-gray-600 text-sm">
                      We understand that each client has unique needs and requirements, and we work tirelessly to ensure that they are happy with the final product we create.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-none mx-auto mt-0 relative z-20 -mt-20">
          <img src="https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/h1_img-1.jpg" alt="Project 1" className="w-full h-48 md:h-64 object-cover rounded-lg" />
          <img src="https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/h1_img-3.jpg" alt="Project 2" className="w-full h-48 md:h-64 object-cover rounded-lg" />
          <img src="https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/h1_img-2.jpg" alt="Project 3" className="w-full h-48 md:h-64 object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
}
