'use client';

import { useState } from 'react';

const inputClass = "w-full py-4 bg-transparent border-b border-gray-300 focus:outline-none focus:border-black placeholder:text-gray-500 transition-colors text-sm";
const selectClass = "w-full py-4 bg-transparent border-b border-gray-300 focus:outline-none focus:border-black text-sm text-gray-700 appearance-none cursor-pointer";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    projectType: '',
    projectLocation: '',
    description: '',
    hearAboutUs: '',
  });

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <input type="text" placeholder="Full Name *" required value={formData.fullName} onChange={set('fullName')} className={inputClass} />
        <input type="text" placeholder="Company Name *" required value={formData.companyName} onChange={set('companyName')} className={inputClass} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <input type="email" placeholder="Email Address *" required value={formData.email} onChange={set('email')} className={inputClass} />
        <input type="tel" placeholder="Phone Number (optional)" value={formData.phone} onChange={set('phone')} className={inputClass} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative">
          <select value={formData.projectType} onChange={set('projectType')} required className={selectClass}>
            <option value="" disabled>Project Type *</option>
            <option>Corporate Video</option>
            <option>Event Coverage</option>
            <option>Aerial / Drone</option>
            <option>Post-Production</option>
            <option>Social Media Content</option>
            <option>Live Streaming</option>
            <option>Other</option>
          </select>
          <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <div className="relative">
          <select value={formData.projectLocation} onChange={set('projectLocation')} required className={selectClass}>
            <option value="" disabled>Project Location *</option>
            <option>UAE</option>
            <option>Canada</option>
            <option>Other</option>
          </select>
          <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <textarea
        placeholder="Brief Project Description (optional)"
        rows={4}
        value={formData.description}
        onChange={set('description')}
        className="w-full py-4 bg-transparent border-b border-gray-300 focus:outline-none focus:border-black resize-none placeholder:text-gray-500 transition-colors text-sm"
      />

      <div className="relative">
        <select value={formData.hearAboutUs} onChange={set('hearAboutUs')} className={selectClass}>
          <option value="" disabled>How did you hear about us?</option>
          <option>Google Search</option>
          <option>Social Media</option>
          <option>Referral</option>
          <option>Event</option>
          <option>Other</option>
        </select>
        <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Hidden UTM fields for ad attribution */}
      <input type="hidden" name="utm_source" />
      <input type="hidden" name="utm_medium" />
      <input type="hidden" name="utm_campaign" />

      <button
        type="submit"
        className="w-full bg-black text-white py-4 rounded-full font-semibold text-sm uppercase tracking-widest hover:bg-[#ffd731] hover:text-black transition-all duration-300 mt-4"
      >
        Get My Free Quote →
      </button>
    </form>
  );
}
