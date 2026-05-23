import React from 'react';

const TreatmentOils = ({
  bgColor = "bg-[#FAF6EF]",
  label = "",
  title = "",
  description = "",
  oils = [],
  footer = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[#C8975F] text-sm font-semibold tracking-wider mb-3">
            {label}
          </div>
          <h2 className="text-4xl text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {oils.map((oil, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl text-[#C8975F] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                {oil.name}
              </h3>
              <div className="text-sm font-semibold text-gray-700 mb-4">
                {oil.description}
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {oil.content}
              </p>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Typically prescribed for:</span> {oil.indication}
              </div>
            </div>
          ))}
        </div>

        {footer && (
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            {footer}
          </p>
        )}
      </div>
    </section>
  );
};

export default TreatmentOils;
