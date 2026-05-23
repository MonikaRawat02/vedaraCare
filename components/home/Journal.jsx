import React from 'react';

const defaultArticles = [
  {
    category: "AYURVEDA",
    title: "What Panchakarma actually does and what it does not",
    description: "Understanding the ancient detox protocol and separating fact from marketing claims.",
    author: "Dr. Priya Menon",
    readTime: "6 min read",
    image: "panchakarma-article"
  },
  {
    category: "WOMENS HEALTH",
    title: "PCOS in Dubai: why expat women turn to Ayurveda",
    description: "How traditional medicine addresses hormonal imbalance when Western approaches stall.",
    author: "Dr. Anjali Kumar",
    readTime: "8 min read",
    image: "pcos-article"
  },
  {
    category: "PHYSIOTHERAPY",
    title: "How long should physiotherapy take to work",
    description: "Setting realistic expectations for recovery timelines across common conditions.",
    author: "Dr. Rohit Sharma",
    readTime: "5 min read",
    image: "physio-article"
  }
];

const Journal = ({
  label = "VEDARA JOURNAL",
  title = "Reading worth your time.",
  articles = defaultArticles,
  linkText = "Explore the journal"
}) => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-4">
            <span className="text-[13px] font-sans tracking-[0.1em] text-[#C9A961] uppercase block">
              {label}
            </span>
            <h2 className="text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2]">
              {title}
            </h2>
          </div>
          <button className="text-[#C9A961] font-sans font-medium text-[15px] hover:underline mb-2">
            {linkText}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#F6F1EA] to-[#FAF8EF] rounded-2xl flex items-center justify-center text-[#A1A1A1] font-sans text-sm overflow-hidden mb-6">
                <div className="group-hover:scale-105 transition-transform duration-500 ease-out">
                  {article.image}
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="text-[14px] font-sans tracking-[0.1em] text-[#C9A961] uppercase mb-3">
                  {article.category}
                </div>
                <h4 className="text-[20px] font-serif font-medium text-[#1A1A1A] leading-snug mb-3">
                  {article.title}
                </h4>
                <p className="text-[14px] text-[#6B6B6B] font-sans leading-relaxed mb-4">
                  {article.description}
                </p>
                <div className="text-[12px] text-[#6B6B6B] font-sans flex items-center gap-1">
                  <span>{article.author}</span>
                  <span className="px-1">|</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
