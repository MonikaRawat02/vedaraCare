import Link from 'next/link';

const BlogRelatedArticles = ({ title, browseAllHref, articles }) => {
  return (
    <div className="mt-32 max-w-[1080px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div>
          <span className="text-[11px] font-bold text-[#D4A373] uppercase tracking-[0.2em] mb-3 block">CONTINUE READING</span>
          <h2 className="text-[32px] md:text-[40px] font-serif font-medium text-[#1A1A1A] leading-tight">{title}</h2>
        </div>
        <Link href={browseAllHref} className="text-[14px] text-[#C9A961] hover:text-[#C9A961] transition-colors border-b border-transparent hover:border-[#D4A373] pb-1">
          Browse all back pain articles →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, i) => (
          <div key={i} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-50">
            <div className="aspect-[16/10] overflow-hidden">
              <img 
                src={article.img} 
                alt={article.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            
            <div className="p-7 flex flex-col flex-1">
              <div className="mb-4">
                <span className="bg-[#E8D6A8] text-[#1A1A1A] px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider inline-block">
                  {article.category}
                </span>
              </div>

              <h3 className="text-[19px] md:text-[22px] font-serif font-medium text-[#1A1A1A] mb-3 leading-tight">
                {article.title}
              </h3>

              <div className="text-[14px] text-[#A1A1A1] mb-4 font-sans">
                {article.readingTime} · {article.author}
              </div>

              <p className="text-[15px] text-[#4A4A4A] leading-[1.6] mb-6 font-sans flex-1">
                {article.description}
              </p>

              <div className="pt-4 border-t border-gray-50 mt-auto">
                <span className="text-[14px] font-bold text-[#D4A373] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read article <span className="text-[18px]">→</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogRelatedArticles;
