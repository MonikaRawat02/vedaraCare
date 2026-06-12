import React from 'react';
import Link from 'next/link';

const HomePhysioSingleImageSection = ({
  bgColor = "bg-white",
  label = "What to Expect",
  title = "What happens during a home physiotherapy session.",
  description = "",
  items = [],
  image = "",
  alt = "Image alt text",
  quote = "",
  footer = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.18em] font-semibold text-[#B8933F] uppercase">
            {label}
          </span>
          <h2 className="mt-3 text-[clamp(1.8rem,3.5vw,2.6rem)] text-[#1C1814] leading-tight" style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}>
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 items-start">
          <div>
            {description && (
              <p className="text-[#6B635A] leading-relaxed mb-10">
                {description}
              </p>
            )}

            <div className="space-y-8">
              {items.map((item, index) => (
                <div key={index} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-[#1E4D3A] text-white flex items-center justify-center text-xs font-medium shrink-0">
                      {index + 1}
                    </div>
                    {index < items.length - 1 && (
                      <div className="w-px flex-1 bg-[#B8933F]/30 mt-2"></div>
                    )}
                  </div>
                  <div className="pb-2">
                    <h3 className="text-[1rem] text-[#1C1814] mb-2 leading-snug" style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}>
                      {item.title}
                      {(item.link || item.href) ? (
                        <Link href={item.link || item.href} className="text-[#184c3a] hover:underline ml-1">→</Link>
                      ) : null}
                    </h3>
                    <p className="text-sm text-[#6B635A] leading-[1.75]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {quote && (
              <blockquote className="mt-12 italic text-[1.15rem] text-[#B8933F] leading-[1.7] pl-6 border-l-2 border-[#B8933F]" style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>
                {quote}
              </blockquote>
            )}
          </div>

          <div className="sticky top-24">
            <div className="overflow-hidden rounded-xl aspect-[3/4]">
              {image ? (
                <img 
                  src={image} 
                  alt={alt} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500 text-center px-4">
                  Image Placeholder
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePhysioSingleImageSection;
