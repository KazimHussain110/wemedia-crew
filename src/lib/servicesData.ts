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
    slug: 'corporate-events',
    title: 'Corporate Events Videography',
    tagline: 'Corporate Events Captured With the Precision They Deserve.',
    keywords: 'corporate event videography Dubai, corporate event filming UAE, conference videography Toronto, awards ceremony videography Canada',
    thumbnail: '/photos/Etsalat Atlantes/TAK08856.jpg',
    cta: '/contact',
    ctaLabel: 'Get an Event Coverage Quote',
    intro: [
      'Corporate events are built on weeks of planning, high expectations, and moments that only happen once. A keynote delivered, an award handed over, a product revealed, a handshake that closes a deal. If it is not captured properly, it is gone forever.',
      'WeMediaCrew covers corporate events across the UAE and Canada — product launches, award ceremonies, conferences, gala dinners, town halls, and networking evenings. We plan a coverage strategy before we arrive, position cameras where the story will happen, and deliver polished edits that extend the value of your event far beyond the day itself.',
    ],
    sections: [
      {
        heading: 'What We Cover',
        items: [
          { title: 'Product Launches and Reveals', description: 'High-energy, multi-angle coverage designed to generate press-ready assets and social buzz.' },
          { title: 'Award Ceremonies and Galas', description: 'Discreet filming that captures the elegance, stage moments, and celebration of formal events.' },
          { title: 'Conferences and Summits', description: 'Keynote captures, panel coverage, attendee interviews, and sponsor content.' },
          { title: 'Corporate Dinners and Networking Events', description: 'Ambience-driven coverage that reflects the tone and prestige of the evening.' },
          { title: 'Town Halls and Internal Events', description: 'Executive messaging, employee engagement, and internal communications content.' },
          { title: 'Hybrid and Live-Streamed Events', description: 'Multi-camera switching, graphics, and live streaming for remote audiences.' },
        ],
      },
      {
        heading: 'Our Event Production Process',
        body: 'Every event starts with a coverage plan. We scout the venue, map the schedule, and agree on the moments that matter most. On the day, a dedicated team handles cameras, audio, and coordination so nothing is missed. Post-event, you receive polished highlights, full-length recordings, and platform-ready cuts built for your channels.',
      },
      {
        heading: 'What You Get',
        body: 'Multi-camera setup (2–4 cameras standard, scalable for larger events). Broadcast-quality audio capture for keynotes and panels. Same-day teaser edits for social media when required. Full highlight reel within 5–10 business days. Raw footage archive available on request.',
      },
    ],
  },
  {
    slug: 'real-estate',
    title: 'Real Estate Videography',
    tagline: 'Properties That Look as Good in Motion as They Do in Person.',
    keywords: 'real estate videography Dubai, property video production UAE, real estate video Toronto, aerial property filming Canada',
    thumbnail: 'https://customer-rrkunujuw15dg54t.cloudflarestream.com/61c8451ba63b74f5c36f733ac41845f8/thumbnails/thumbnail.jpg?time=1s',
    cta: '/contact',
    ctaLabel: 'Book a Property Shoot',
    intro: [
      'Most buyers start their search online, and the first impression is almost always video. A listing with a cinematic property film does more than show a space — it sells the lifestyle, the light, the flow, and the feel of walking through the front door.',
      'WeMediaCrew produces real estate videography for developers, agents, and property owners across the UAE and Canada. From architectural details and interior choreography to aerial flyovers, we present every property with a premium visual identity built to perform on portals, websites, and social media.',
    ],
    sections: [
      {
        heading: 'What We Produce',
        items: [
          { title: 'Property Tours', description: 'Immersive walkthroughs that showcase layout, finishes, and flow in a single compelling film.' },
          { title: 'Aerial Flyovers', description: 'Licensed drone coverage that captures the property, the community, and the surrounding landscape.' },
          { title: 'Architecture and Interiors', description: 'Cinematic attention to detail — materials, light, and design told through controlled camera movement.' },
          { title: 'Development and Progress Films', description: 'Milestone documentation and progress updates for projects still under construction.' },
          { title: 'Lifestyle and Amenities', description: 'Showcase the experience — pools, gyms, views, and the neighbourhood that comes with the address.' },
          { title: 'Listing and Marketing Cuts', description: 'Platform-ready edits built for portals, social media, email, and sales presentations.' },
        ],
      },
      {
        heading: 'Aerial Operations',
        body: 'All aerial footage is captured by certified pilots operating within GCAA (UAE) and Transport Canada regulatory frameworks, with full production insurance. Every deployment follows a strict safety protocol covering site risk assessment, airspace clearance, and weather monitoring.',
      },
      {
        heading: 'Delivery',
        body: 'You receive a polished master film plus vertical and square social cuts, so the same shoot works everywhere — portals, Instagram, LinkedIn, YouTube, and sales decks. Expedited delivery available for time-sensitive listings.',
      },
    ],
  },
  {
    slug: 'exhibitions',
    title: 'Exhibition & Trade Show Videography',
    tagline: 'Your Booth. Your Brand. Covered From the Floor to the Stage.',
    keywords: 'trade show videography Dubai, exhibition video production UAE, trade show coverage Toronto, exhibition film Canada',
    thumbnail: '/photos/ADNEC/HUQ_9706.webp',
    cta: '/contact',
    ctaLabel: 'Plan Exhibition Coverage',
    intro: [
      'Exhibitions are the most demanding environments in video production — huge halls, constant noise, moving crowds, and dozens of brands competing for attention. Capturing your presence inside that chaos requires speed, discipline, and an eye for the moments that matter.',
      'WeMediaCrew covers trade shows and exhibitions at venues like ADNEC Abu Dhabi, the Dubai World Trade Center, and Canada\'s major convention centres. We produce show films, booth content, exhibitor interviews, and social-ready highlights that turn your exhibition investment into reusable content.',
    ],
    sections: [
      {
        heading: 'What We Cover',
        items: [
          { title: 'Show Films', description: 'A cinematic cut of the exhibition that captures scale, energy, and the defining moments of the day.' },
          { title: 'Booth and Stand Content', description: 'Footage of your stand in action — demos, traffic, and engagement with visitors.' },
          { title: 'Exhibitor and Speaker Interviews', description: 'On-floor interviews with your team, partners, and event speakers.' },
          { title: 'Product Demonstrations', description: 'Close coverage of live demos that show your product at its best.' },
          { title: 'Keynotes and Stage Content', description: 'Stage sessions, talks, and panels captured with clean broadcast audio.' },
          { title: 'Same-Day Social Edits', description: 'Quick-turn teasers posted while the show is still running.' },
        ],
      },
      {
        heading: 'How We Work the Floor',
        body: 'Trade shows are fast and loud, so we come prepared. Camera positions are planned against the event schedule, audio is captured at the source for interviews and stages, and the crew moves with the flow of the hall without disrupting your stand or your visitors.',
      },
      {
        heading: 'What You Get',
        body: 'A full show film, individual segment edits, and a package of platform-ready clips for LinkedIn, Instagram, and your website. Raw footage is archived so you can repurpose exhibition content long after the hall closes.',
      },
    ],
  },
  {
    slug: 'sports',
    title: 'Sports Videography',
    tagline: 'The Speed, The Effort, The Glory — Captured Live.',
    keywords: 'sports videography Dubai, sports event filming UAE, sports video production Toronto, action sports filming Canada',
    thumbnail: '/photos/Cricket Event/CCA_7294.webp',
    cta: '/contact',
    ctaLabel: 'Book a Sports Shoot',
    intro: [
      'Sports are built on milliseconds — the delivery, the sprint, the reaction, the moment a match turns. The camera has to be where the action is, ready for the shot that defines the game. That is the standard we hold ourselves to on every sports project.',
      'WeMediaCrew covers tournaments, matches, and competitions across the UAE and Canada, plus action sports, athlete profiles, and event recaps. From single-day coverage to multi-day tournaments, we deliver the highlights, recaps, and social content that keep fans engaged long after the final whistle.',
    ],
    sections: [
      {
        heading: 'What We Cover',
        items: [
          { title: 'Tournaments and Matches', description: 'Multi-camera match coverage that captures gameplay, bench reactions, and the atmosphere of the day.' },
          { title: 'Action Sports', description: 'High-frame-rate captures of movement — from motorsport to board sports and beyond.' },
          { title: 'Athlete Profiles', description: 'Story-driven films on the players, coaches, and teams behind the competition.' },
          { title: 'Event Recaps and Highlights', description: 'Punchy recap edits built for social media, sponsors, and post-event promotion.' },
          { title: 'Opening and Awards Ceremonies', description: 'The pomp, the presentations, and the celebration that bookends the event.' },
          { title: 'Fan and Atmosphere Coverage', description: 'The crowd, the noise, and the energy that make live sport unforgettable.' },
        ],
      },
      {
        heading: 'Shooting for the Game',
        body: 'We position cameras where the action will actually happen and move with the play. For fast sports we use high frame rates to keep every sprint and strike crisp, and dedicated audio captures the roar of the crowd that makes the footage feel live.',
      },
      {
        heading: 'What You Get',
        body: 'A full event edit, a highlights package, and vertical and square social cuts ready for Instagram, TikTok, and YouTube. Expedited highlights available so you can post the winning moment while the trophy is still warm.',
      },
    ],
  },
  {
    slug: 'podcast-and-panel-discussion',
    title: 'Podcast & Panel Discussion Production',
    tagline: 'Conversations Worth Watching, Produced to Broadcast Standard.',
    keywords: 'podcast production Dubai, panel discussion filming UAE, podcast studio Toronto, interview videography Canada',
    thumbnail: 'https://img.youtube.com/vi/0sNP3zNfjso/maxresdefault.jpg',
    cta: '/contact',
    ctaLabel: 'Book a Podcast or Panel Shoot',
    intro: [
      'Podcasts and panel discussions are conversations first, but the ones that grow audiences are the ones that look and sound as good as they are. A professional multi-camera setup turns a simple talk into content people choose to watch.',
      'WeMediaCrew produces podcasts, panel discussions, and interview content across the UAE and Canada — from single-host studio shows to full conference panels. We handle cameras, lighting, audio, and post-production so you can focus entirely on the conversation.',
    ],
    sections: [
      {
        heading: 'What We Produce',
        items: [
          { title: 'Podcasts', description: 'Multi-camera studio setups for single-host shows, co-host formats, and guest episodes.' },
          { title: 'Panel Discussions', description: 'Broadcast-standard coverage of panels with clean audio for every speaker.' },
          { title: 'Interviews and Q&A Sessions', description: 'Polished one-on-one interviews captured with premium lighting and sound.' },
          { title: 'Keynotes and Talks', description: 'Stage talks recorded for replays, clips, and repurposing across channels.' },
          { title: 'Live Streaming', description: 'Professional multi-camera live streams with graphics, lower thirds, and switching.' },
          { title: 'Clip Packages', description: 'Social-ready clips pulled from the full conversation for maximum reach.' },
        ],
      },
      {
        heading: 'The Setup',
        body: 'Standard configurations include a multi-camera array, broadcast microphones per speaker, professional lighting designed for faces, and a control position for live switching and monitoring. We set up, break down, and deliver — you bring the conversation.',
      },
      {
        heading: 'What You Get',
        body: 'A full-length master recording, individual audio files, and a curated package of social clips. Multi-language subtitling available on request so your conversations reach audiences beyond the original language.',
      },
    ],
  },
];
