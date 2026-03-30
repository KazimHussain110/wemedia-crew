'use client';

import { useState } from 'react';
import ArrowButton from './ArrowButton';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pl-8">
      <input
        type="text"
        placeholder="First Name"
        required
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        className="w-full py-4 bg-transparent border-b border-gray-300 focus:outline-none focus:border-black placeholder:text-[#000] placeholder:transition-opacity placeholder:duration-300 focus:placeholder:opacity-0"
      />
      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full py-4 bg-transparent border-b border-gray-300 focus:outline-none focus:border-black placeholder:text-[#000] placeholder:transition-opacity placeholder:duration-300 focus:placeholder:opacity-0"
        />
        <input
          type="tel"
          placeholder="Phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full py-4 bg-transparent border-b border-gray-300 focus:outline-none focus:border-black placeholder:text-[#000] placeholder:transition-opacity placeholder:duration-300 focus:placeholder:opacity-0"
        />
      </div>
      <textarea
        placeholder="Message"
        rows={4}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full py-4 bg-transparent border-b border-gray-300 focus:outline-none focus:border-black resize-none placeholder:text-[#000] placeholder:transition-opacity placeholder:duration-300 focus:placeholder:opacity-0"
      />
      <div className="flex justify-center">
        <ArrowButton href="#" text="Submit" />
      </div>
    </form>
  );
}
