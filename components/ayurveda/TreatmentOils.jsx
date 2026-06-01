import React from 'react';

const TreatmentOils = ({
  bgColor = "bg-[#FAF6EF]",
  label = "",
  title = "",
  description = "",
  oils = [],
  cards = [],
  footer = ""
}) => {
  // Check if we have cards data (for GLP-1 section)
  const useCardsLayout = cards.length > 0;

  return (
    <section className={`${bgColor} py-24`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p 
            className="uppercase tracking-wider text-sm mb-4"
            style={{ color: 'rgb(201, 169, 97)' }}
          >
            {label}
          </p>
          <h2 
            className="text-4xl mb-4"
            style={{ fontFamily: 'Georgia, serif', fontWeight: 500 }}
          >
            {title}
          </h2>
          <p 
            className="text-lg max-w-3xl mx-auto"
            style={{ color: 'rgb(107, 114, 128)' }}
          >
            {description}
          </p>
        </div>

        {useCardsLayout ? (
          // Cards layout (for GLP-1)
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div 
                key={index} 
                className="p-8 rounded-xl"
                style={{ backgroundColor: 'rgb(250, 248, 245)' }}
              >
                <h3 
                  className="text-xl mb-4"
                  style={{ fontFamily: 'Georgia, serif', fontWeight: 500 }}
                >
                  {card.title}
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{ color: 'rgb(107, 114, 128)' }}
                >
                  {card.content}
                </p>
              </div>
            ))}
          </div>
        ) : (
          // Original oils layout
          <div className="grid md:grid-cols-2 gap-5">
            {oils.map((oil, index) => (
              <div 
                key={index} 
                className="rounded-xl p-8"
                style={{ background: 'rgb(255, 255, 255)' }}
              >
                <h3 
                  className="mb-1"
                  style={{ 
                    fontFamily: 'Fraunces, serif', 
                    fontWeight: 500, 
                    fontSize: '1.2rem', 
                    color: 'rgb(184, 145, 90)' 
                  }}
                >
                  {oil.name}
                </h3>
                <p 
                  className="text-xs mb-4"
                  style={{ color: 'rgb(138, 126, 116)' }}
                >
                  {oil.description}
                </p>
                <p 
                  className="text-sm leading-[1.85] mb-5"
                  style={{ color: 'rgb(74, 67, 60)' }}
                  dangerouslySetInnerHTML={{ __html: oil.content }}
                />

                <p 
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: 'rgb(184, 145, 90)' }}
                >
                  Typically prescribed for:
                </p>
                <div className="flex flex-wrap gap-2">
                  {oil.indication.split(', ').map((item, i) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{ background: 'rgb(245, 240, 232)', color: 'rgb(90, 82, 72)' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {footer && (
          <p 
            className="text-center mt-12 max-w-3xl mx-auto"
            style={{ color: 'rgb(107, 114, 128)' }}
          >
            {footer}
          </p>
        )}
      </div>
    </section>
  );
};

export default TreatmentOils;
