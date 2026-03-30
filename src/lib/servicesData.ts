export type ServiceItem = {
  slug: string;
  title: string;
  tagline: string;
  intro: string[];
  keywords: string;
  thumbnail: string;
  cta: string;
  ctaLabel: string;
  sections: { heading: string; items?: { title: string; description: string }[]; body?: string }[];
};

export const services: ServiceItem[] = [
  {
    slug: 'corporate-video-production',
    title: 'Corporate Video Production',
    tagline: 'Corporate Video That Earns Attention, Builds Credibility, and Drives Decisions.',
    keywords: 'corporate video production Dubai, corporate videography Toronto, company profile video UAE, brand film production Canada',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1400&q=80',
    cta: '/contact',
    ctaLabel: 'Book a Corporate Video Consultation',
    intro: [
      'In boardrooms, investor meetings, trade show booths, and LinkedIn feeds, your brand is being evaluated in seconds. A professionally produced corporate video is no longer optional. It is the fastest way to communicate who you are, what you do, and why it matters.',
      'WeMediaCrew produces corporate videos that are strategic, cinematic, and built for business outcomes. Whether you need a company profile film for your website, a product showcase for a trade expo, or a leadership message for internal communications, we treat every corporate project with the rigor and creativity it deserves.',
    ],
    sections: [
      {
        heading: 'What We Produce',
        items: [
          { title: 'Company Profile Films', description: 'Your brand story told with cinematic authority. Ideal for websites, investor decks, and recruitment.' },
          { title: 'Product and Service Showcases', description: 'Demonstrate value visually. Show potential clients exactly what they get.' },
          { title: 'CEO and Leadership Messages', description: 'Professionally lit, teleprompter-supported, and edited to project executive authority.' },
          { title: 'Investor and Stakeholder Videos', description: 'Data-driven visual narratives that turn complex stories into compelling pitches.' },
          { title: 'Internal Communications', description: 'Training modules, onboarding videos, town hall recordings, and change management content.' },
          { title: 'Recruitment and Employer Branding', description: 'Attract top talent by showing your culture, your team, and your mission in motion.' },
          { title: 'Testimonial and Case Study Films', description: 'Let your clients tell the story. Authentic social proof captured with professional polish.' },
        ],
      },
      {
        heading: 'Our Corporate Production Process',
        body: 'Every project follows our five-stage methodology: Discovery, Pre-Production, Production, Post-Production, and Delivery. We assign a dedicated project manager to every engagement, maintain backup equipment on every shoot, and build revision rounds into every timeline. For corporate clients, discretion and professionalism are not extras. They are the baseline.',
      },
      {
        heading: 'Equipment and Technical Capabilities',
        body: 'Cinema-grade cameras (RED, Sony FX series, Blackmagic), professional lighting packages (ARRI, Aputure), broadcast audio (Sennheiser, Rode), gimbal and slider systems, teleprompter rigs, and a mobile editing suite for on-site rough cuts when required.',
      },
    ],
  },
  {
    slug: 'event-videography',
    title: 'Event Videography',
    tagline: 'Your Event Happens Once. We Make Sure It Lives Forever.',
    keywords: 'event videography Dubai, event video coverage UAE, conference videography Toronto, corporate event filming Canada',
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&q=80',
    cta: '/contact',
    ctaLabel: 'Get an Event Coverage Quote',
    intro: [
      'Months of planning. Hundreds of attendees. Keynote speakers, networking moments, brand activations, and award presentations. Then it is over. Unless someone captured it properly.',
      'WeMediaCrew specializes in multi-camera event videography for corporate conferences, gala dinners, product launches, trade shows, award ceremonies, and private brand events across the UAE and Canada. We do not just show up and hit record. We plan coverage strategies, position cameras for maximum storytelling impact, and deliver polished edits that extend the ROI of every event far beyond the day itself.',
    ],
    sections: [
      {
        heading: 'Event Types We Cover',
        items: [
          { title: 'Corporate Conferences and Summits', description: 'Keynote captures, breakout session coverage, attendee interviews, and sponsor content.' },
          { title: 'Gala Dinners and Award Ceremonies', description: 'Discreet, unobtrusive filming that captures the elegance and energy of formal events.' },
          { title: 'Product Launches and Reveals', description: 'High-energy, multi-angle coverage designed to generate social buzz and press-ready assets.' },
          { title: 'Trade Shows and Exhibitions', description: 'Booth walkthroughs, exhibitor interviews, floor coverage, and branded highlight reels.' },
          { title: 'Hybrid and Virtual Events', description: 'Professional live streaming with graphics, lower thirds, and multi-camera switching for remote audiences.' },
        ],
      },
      {
        heading: 'What You Get',
        body: 'Multi-camera setup (2–4 cameras standard, scalable for larger events). Dedicated audio capture for keynotes and panels. Same-day teaser edits available for social media. Full highlight reel within 5–10 business days. Individual session recordings available. Raw footage archive on request.',
      },
      {
        heading: 'Why Event Organizers Trust Us',
        body: 'We understand event environments. We know how to capture a packed ballroom without blocking sightlines. We know how to mic a panel without visible cables. We know how to deliver a 90-second highlight reel to your marketing team before attendees have finished breakfast the next morning. Because we have done it hundreds of times.',
      },
    ],
  },
  {
    slug: 'aerial-drone-videography',
    title: 'Aerial & Drone Videography',
    tagline: 'The View From Above Changes Everything.',
    keywords: 'drone videography Dubai, aerial video production UAE, drone filming Toronto, aerial cinematography Canada',
    thumbnail: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1400&q=80',
    cta: '/contact',
    ctaLabel: 'Plan an Aerial Shoot',
    intro: [
      'Some stories need scale. A luxury resort, a construction milestone, a beachfront event, a sprawling industrial facility. Ground-level cameras cannot capture the full picture. That is where our licensed drone operators step in.',
      'WeMediaCrew provides cinematic aerial videography for corporate, commercial, real estate, hospitality, and event clients in the UAE and Canada. All drone operations are conducted by certified pilots carrying full production insurance, operating within GCAA (UAE) and Transport Canada regulatory frameworks.',
    ],
    sections: [
      {
        heading: 'Applications',
        items: [
          { title: 'Real Estate and Hospitality', description: 'Property flyovers, resort showcases, and development progress documentation.' },
          { title: 'Construction and Infrastructure', description: 'Milestone documentation, site progress time-lapses, and stakeholder update videos.' },
          { title: 'Events and Festivals', description: 'Crowd scale, venue grandeur, and establishing shots that set the tone for event films.' },
          { title: 'Corporate Campuses', description: 'Facility tours, brand films, and investor content with sweeping aerial perspectives.' },
          { title: 'Tourism and Destination Marketing', description: 'Cinematic aerials that sell the experience before a traveler books a flight.' },
        ],
      },
      {
        heading: 'Safety and Compliance',
        body: 'Every drone deployment follows a strict safety protocol: site risk assessment, airspace clearance, weather monitoring, and redundant equipment checks. We carry comprehensive production insurance and maintain full regulatory compliance in every jurisdiction we operate.',
      },
    ],
  },
  {
    slug: 'post-production-editing',
    title: 'Post-Production & Editing',
    tagline: 'Where Raw Footage Becomes a Finished Story.',
    keywords: 'video editing services Dubai, post-production company UAE, video editing Toronto, corporate video editing Canada',
    thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1400&q=80',
    cta: '/contact',
    ctaLabel: 'Submit Footage for a Post-Production Quote',
    intro: [
      'The shoot is only half the job. What happens in post-production determines whether your video is forgettable or unforgettable. WeMediaCrew operates a full post-production pipeline covering editing, color grading, motion graphics, animation, sound design, and multi-format delivery.',
      'Whether you shot with us or need an external editing partner for existing footage, our post-production team delivers polished, platform-ready content that meets broadcast standards and exceeds brand expectations.',
    ],
    sections: [
      {
        heading: 'Post-Production Services',
        items: [
          { title: 'Professional Editing', description: 'Narrative assembly, pacing, sequencing, and storytelling that keeps audiences watching.' },
          { title: 'Color Grading', description: 'Cinematic color correction and grading using DaVinci Resolve for a consistent, premium visual identity.' },
          { title: 'Motion Graphics and Animation', description: 'Titles, lower thirds, infographics, data visualizations, logo reveals, and animated explainers.' },
          { title: 'Sound Design and Mixing', description: 'Dialogue cleanup, ambient layering, licensed music, Foley, and final mix for broadcast or web.' },
          { title: 'Subtitling and Localization', description: 'Arabic, English, French, and additional language subtitles. SRT/VTT file delivery for web platforms.' },
          { title: 'Multi-Format Delivery', description: '4K master, broadcast specs, web-optimized, vertical social, and custom specs per your distribution plan.' },
        ],
      },
    ],
  },
];
