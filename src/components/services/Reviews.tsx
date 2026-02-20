export default function Reviews() {
  const reviews = [
    {
      text: "The video is fantastic and has been really well received by those I've shared it with. Our friend described it as 'sensational' and said it made his day.",
      name: "Stef Matthews",
      role: "Tech Entrepreneur",
      rating: "5.0/5",
      avatar: "/avatars/stef.jpg"
    },
    {
      text: "A highly efficient, creative, committed and professional team providing an excellent end result. I would recommend every time.",
      name: "Kathryn Stark",
      role: "Chief Information",
      rating: "5.0/5",
      avatar: "/avatars/kathryn.jpg"
    },
    {
      text: "Their professionalism and creativity were outstanding. The team's keen understanding of our vision translated into a compelling narrative that was spot-on with our expectations.",
      name: "Ronald Benson",
      role: "Creative Director",
      rating: "5.0/5",
      avatar: "/avatars/ronald.jpg"
    }
  ];

  return (
    <div className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-16">
          <h2 className="text-7xl font-bold">Reviews</h2>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white" />
              <div className="w-12 h-12 rounded-full bg-gray-400 border-2 border-white" />
              <div className="w-12 h-12 rounded-full bg-gray-500 border-2 border-white" />
              <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-white" />
              <div className="w-12 h-12 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center text-xl font-bold">
                +
              </div>
            </div>
            <div className="text-gray-600">
              <div className="font-semibold">More than <span className="font-bold">25k+</span></div>
              <div className="text-sm">happy clients</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-16 flex flex-col justify-between" style={{minHeight: '500px'}}>
              <p className="text-xl font-semibold mb-8">"{review.text}"</p>
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-300" />
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold">{review.rating}</span>
                  <span className="text-red-500">★</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
