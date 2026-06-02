import React from 'react';

const BackPainConditions = ({
  bgColor = "bg-[#FAF6EF]",
  label = "ASSESSMENT MATTERS",
  title = "",
  subtitle = "",
  items = [],
  footer = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="text-sm tracking-wider text-[#C9A961] uppercase font-sans">
            {label}
          </div>
          <h2 className="text-4xl font-serif text-[#1A1A1A] leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[#717182] font-sans max-w-[720px] mx-auto text-base leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-serif text-[#C9A961] mb-4" dangerouslySetInnerHTML={{ __html: item.title }} />
              <p className="text-gray-700 font-sans leading-relaxed mb-6 text-[15px]" dangerouslySetInnerHTML={{ __html: item.description }} />
              <div className="pt-6 border-t border-gray-100 space-y-4">
                <div className="space-y-1">
                  <div className="text-sm font-sans font-medium text-[#1A1A1A]">
                    Typical Ayurvedic approach:
                  </div>
                  <div className="text-sm font-sans text-gray-700" dangerouslySetInnerHTML={{ __html: item.approach }} />
                </div>
                {item.link && (
                  <a href={item.link} className="text-[#C9A961] text-sm font-sans hover:underline inline-flex items-center gap-1">
                    {item.linkText} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {footer && (
          <div className="mt-16 text-center max-w-[900px] mx-auto">
            <p className="text-sm text-[#717182] font-sans leading-relaxed">
              {footer}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BackPainConditions;
