import React from 'react';

const TherapyGrid = ({
  bgColor = "bg-white",
  label = "THE TREATMENTS WE USE",
  title = "",
  subtitle = "",
  items = []
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="text-sm tracking-wider text-[#C9A961] uppercase">
            {label}
          </div>
          <h2 className="text-4xl font-serif text-[#1A1A1A]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[#6B6B6B] max-w-[720px] mx-auto text-base">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-[#FAF8F3] rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl mb-2 text-[#C9A961] font-serif">
                {item.title}
              </h3>
              <div className="text-sm italic text-gray-600 mb-4">
                {item.subtitle}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                {item.description}
              </p>
              {item.link && (
                <a 
                  href={item.link} 
                  className="text-sm text-[#C9A961] hover:underline inline-flex items-center"
                >
                  {item.linkText || "Read more"} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapyGrid;
