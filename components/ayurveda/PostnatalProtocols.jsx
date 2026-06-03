import React from 'react';

const PostnatalProtocols = ({
  bgColor = "bg-white",
  cardBg = "#FFFFFF",
  label = "SPECIFIC SITUATIONS",
  title = "",
  description = "",
  items = [],
  footerNote = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16  mx-auto">
          <p className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase mb-4">
            {label}
          </p>
          <h2 className="text-[clamp(1.75rem,2vw,2.5rem)] font-serif font-normal text-[#1A1A1A] leading-[1.2] mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-[16px] text-[#6B6B6B] font-sans leading-relaxed max-w-[800px] mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="p-8 rounded-xl border border-gray-100 flex flex-col h-full transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: cardBg }}
            >
              <h3 className="text-[18px] font-sans font-semibold text-[#1A1A1A] mb-4 leading-tight" dangerouslySetInnerHTML={{ __html: item.title }} />
              <p className="text-[14px] text-[#4A4A4A] font-sans leading-relaxed flex-grow" dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          ))}
        </div>

        {footerNote && (
          <div className="mt-16 text-center max-w-[800px] mx-auto">
            <p className="text-[13px] text-[#6B6B6B] font-sans leading-relaxed ">
              {footerNote}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PostnatalProtocols;
