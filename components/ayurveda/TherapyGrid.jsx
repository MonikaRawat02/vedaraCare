import React from 'react';

const TherapyGrid = ({
  bgColor = "bg-[#FAF8F3]",
  label = "THE SPECIFIC TREATMENTS",
  title = "",
  subtitle = "",
  items = []
}) => {
  const firstRow = items.slice(0, 3);
  const secondRow = items.slice(3);
  
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs tracking-wider text-[#B8860B] mb-3 uppercase">
            {label}
          </div>
          <h2 className="text-4xl mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {firstRow.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-7 shadow-sm border-t-4 border-[#B8860B]">
              <h3 className="text-xl text-[#B8860B] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                {item.title}
              </h3>
              <p className="text-sm mb-3">
                {item.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                {item.description}
              </p>
              {item.link && (
                <a 
                  href={item.link} 
                  className="text-[#B8860B] text-sm hover:underline"
                >
                  {item.linkText || "Read more"} →
                </a>
              )}
            </div>
          ))}
        </div>

        {secondRow.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {secondRow.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-7 shadow-sm border-t-4 border-[#B8860B]">
                <h3 className="text-xl text-[#B8860B] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  {item.title}
                </h3>
                <p className="text-sm mb-3">
                  {item.subtitle}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                  {item.description}
                </p>
                {item.link && (
                  <a 
                    href={item.link} 
                    className="text-[#B8860B] text-sm hover:underline"
                  >
                    {item.linkText || "Read more"} →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TherapyGrid;
