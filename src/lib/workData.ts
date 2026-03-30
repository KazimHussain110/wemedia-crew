export type Project = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  projectType: string;
  category: string;
  year: string;
  description: string;
  thumbnail: string;
  videoEmbed: string;
  challenge: string;
  approach: string;
  result: string;
  quote?: string;
  quoteAuthor?: string;
};

export const projects: Project[] = [
  {
    slug: 'nexora-annual-conference-dubai',
    title: 'Annual Leadership Summit',
    client: 'Nexora Group',
    industry: 'Financial Services',
    projectType: 'Event Coverage',
    category: 'Event Coverage',
    year: '2025',
    description: 'Full multi-camera coverage of a 2-day leadership summit for 800 attendees in Dubai.',
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    videoEmbed: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    challenge: 'Nexora needed broadcast-quality coverage of their flagship annual summit — including keynotes, panel discussions, and networking moments — delivered as a highlight reel within 48 hours of the closing session.',
    approach: 'We deployed a 5-camera setup across the main stage and breakout rooms, with a dedicated on-site edit suite running from day one. Our director worked from the run-of-show to anticipate key moments and ensure nothing was missed.',
    result: 'The highlight reel was delivered 6 hours after the closing keynote. It generated 120,000 LinkedIn impressions within 72 hours and was used as the primary asset for the 2026 summit registration campaign.',
    quote: 'WeMediaCrew delivered a film that made our event look like a world-class production. The same-day edit alone was worth the entire investment.',
    quoteAuthor: 'Sarah Mitchell, VP Brand & Communications, Nexora Group',
  },
  {
    slug: 'vantara-brand-film',
    title: 'Corporate Brand Film',
    client: 'Vantara Capital',
    industry: 'Private Equity',
    projectType: 'Corporate Film',
    category: 'Corporate Films',
    year: '2025',
    description: 'A cinematic brand film positioning Vantara as the partner of choice for regional growth-stage companies.',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    videoEmbed: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    challenge: 'Vantara Capital needed a brand film that communicated trust, sophistication, and regional expertise to an audience of C-suite decision-makers — without feeling like a typical finance video.',
    approach: 'We developed a narrative-led script built around real client outcomes, shot across three locations in Dubai and Abu Dhabi over two days. The grade was calibrated to feel premium but approachable.',
    result: 'The film premiered at an investor conference in DIFC and was embedded on the Vantara homepage. It contributed to a 40% increase in inbound enquiries in the quarter following launch.',
    quote: 'The team understood our brand instinctively. The final film exceeded every expectation we had going in.',
    quoteAuthor: 'Daniel Osei, CMO, Vantara Capital',
  },
  {
    slug: 'stratum-aerial-logistics',
    title: 'Facility Aerial Showcase',
    client: 'Stratum Logistics',
    industry: 'Logistics & Supply Chain',
    projectType: 'Aerial / Drone',
    category: 'Aerial',
    year: '2025',
    description: 'Aerial and ground-level production showcasing a 500,000 sq ft logistics facility in Jebel Ali.',
    thumbnail: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80',
    videoEmbed: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    challenge: 'Stratum needed to communicate the scale and operational sophistication of their new Jebel Ali facility to potential enterprise clients and investors — in a format that could be used across pitch decks, LinkedIn, and their website.',
    approach: 'We secured all necessary DCAA drone permits and planned a dawn shoot to capture the facility in optimal light. Ground-level footage of operations was intercut with aerial sequences to tell a complete story of scale and precision.',
    result: 'The video was embedded in 14 investor presentations and credited by the Stratum sales team as a key factor in closing two major logistics contracts worth a combined AED 12M.',
  },
  {
    slug: 'crestline-product-launch',
    title: 'Product Launch Campaign',
    client: 'Crestline Technologies',
    industry: 'Technology',
    projectType: 'Corporate Film',
    category: 'Corporate Films',
    year: '2025',
    description: 'A suite of launch videos for a B2B SaaS product targeting enterprise procurement teams.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    videoEmbed: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    challenge: 'Crestline needed to explain a complex procurement platform to a non-technical audience of enterprise buyers — in under 90 seconds, without losing the depth that makes the product compelling.',
    approach: 'We developed a three-video suite: a 90-second hero film, a 30-second social cut, and a 3-minute deep-dive for sales enablement. Motion graphics were used to visualise the platform without relying on screen recordings.',
    result: 'The hero film is now used in every sales pitch. The Crestline sales team reports a measurable reduction in sales cycle length and higher close rates on deals where the video was shared pre-meeting.',
    quote: 'It closes deals faster than any deck we have ever built.',
    quoteAuthor: 'Marcus Ellroy, Director of Sales Enablement, Crestline Technologies',
  },
  {
    slug: 'toronto-summit-social-content',
    title: 'Summit Social Content Series',
    client: 'TechNorth Canada',
    industry: 'Technology / Events',
    projectType: 'Social Media Content',
    category: 'Social Content',
    year: '2025',
    description: '12-piece vertical video series captured across a 3-day tech summit in Toronto for LinkedIn and Instagram.',
    thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
    videoEmbed: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    challenge: 'TechNorth needed a steady stream of high-quality social content published in real time across a 3-day summit — without disrupting speakers or attendees, and without sacrificing production quality for speed.',
    approach: 'We embedded a two-person social content team within the event, shooting vertical-first and editing on-site. Each piece was reviewed, captioned, and delivered to the marketing team within 2 hours of capture.',
    result: '12 pieces of content published across 3 days. Combined reach of 340,000 on LinkedIn. Three videos exceeded 50,000 views organically. Registration for the following year opened ahead of schedule due to demand.',
  },
  {
    slug: 'dubai-realestate-aerial',
    title: 'Luxury Development Showcase',
    client: 'Pinnacle Properties',
    industry: 'Real Estate',
    projectType: 'Aerial / Drone',
    category: 'Aerial',
    year: '2025',
    description: 'Cinematic aerial and interior production for a luxury residential development in Dubai Marina.',
    thumbnail: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    videoEmbed: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    challenge: 'Pinnacle needed a property showcase film that would stand out in a saturated Dubai real estate market — one that felt aspirational enough to justify premium pricing while remaining grounded in the actual product.',
    approach: 'We planned a golden-hour aerial shoot over Dubai Marina combined with interior walkthroughs using a cinema camera on a motorised slider. The grade was warm and filmic, deliberately avoiding the over-saturated look common in real estate video.',
    result: 'The film was used across the project microsite, paid social, and broker presentations. The development sold out 6 weeks ahead of the projected timeline. The developer has since commissioned two further projects.',
  },
];
