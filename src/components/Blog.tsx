export default function Blog() {
  const posts = [
    {
      image: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/blog_1.jpg',
      date: 'May 29, 2025',
      category: 'COMPANY INSIGHTS',
      title: 'Visual Storytelling for Brands: Turning Viewers into Loyal Customers'
    },
    {
      image: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/blog_2.jpg',
      date: 'May 29, 2025',
      category: 'COMPANY INSIGHTS',
      title: 'The ROI of Story: Measuring the Impact of Emotion-Driven Content'
    },
    {
      image: 'https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/blog_3.jpg',
      date: 'May 29, 2025',
      category: 'TIPS & TRICKS',
      title: 'The Psychology Behind Great Video Ads: Design That Resonates'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2">
            <svg className="w-2 h-2 fill-black" viewBox="0 0 512 512">
              <circle cx="256" cy="256" r="256" />
            </svg>
            <span className="text-sm uppercase tracking-wider font-medium" style={{ fontWeight: '500 !important' }}>LATEST NEWS</span>
          </div>
          <a href="/blog" className="flex items-center gap-2 text-sm uppercase tracking-wider hover:gap-4 transition-all" style={{ fontWeight: '600 !important' }}>
            <span>VIEW ALL POSTS</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </a>
        </div>

        <div className="w-full h-px bg-gray-200 mb-12"></div>

        {/* Title & Description */}
        <div className="text-center mb-16">
          <h2 className="text-7xl md:text-8xl lg:text-9xl mb-6" style={{ fontWeight: '800 !important' }}>Blog</h2>
          <p className="text-gray-500 text-lg" style={{ fontWeight: '400 !important' }}>
            Stay ahead with actionable insights, expert advice, and<br />practical strategies for digital success.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr_1fr] gap-6">
          {posts.map((post, index) => (
            <a key={index} href="#" className="block group">
              <div className="mb-6">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className={`w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ${index === 0 ? 'h-[432px]' : 'h-[206px]'}`}
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600" style={{ fontWeight: '400 !important' }}>{post.date}</span>
                <span className="bg-yellow-400 text-black text-xs px-4 py-1.5 rounded-full uppercase tracking-wider" style={{ fontWeight: '600 !important' }}>
                  {post.category}
                </span>
              </div>
              <div className="w-full h-px bg-gray-200 opacity-80 mb-4"></div>
              <h3 className="text-[28px] leading-tight" style={{ fontWeight: '700 !important' }}>
                {post.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
