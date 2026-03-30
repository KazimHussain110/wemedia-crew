import ContactForm from '../ui/ContactForm';
import Image from 'next/image';

export default function ContactFormSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-[40%_60%] gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Leave a message</h2>
            <div className="rounded-2xl overflow-hidden w-3/4 mt-64">
              <Image
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=530&h=320&fit=crop"
                alt="Contact"
                width={530}
                height={320}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 md:p-12">
            <p className="text-black mb-8 text-center">
              Fill all information details to consult with us to get services from us
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
