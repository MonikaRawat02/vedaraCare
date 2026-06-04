import React from 'react';

const PhysiotherapyModalities = ({
  bgColor = "bg-[#FFFFFF]",
  label = "MODALITIES & TECHNIQUES",
  title = "Evidence-based physiotherapy techniques.",
  modalities = []
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[#C9A55A] text-sm font-medium tracking-wider uppercase mb-4">
            {label}
          </div>
          <h2 className="text-4xl font-serif text-[#1A1A1A]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modalities.map((modality, index) => (
            <div key={index} className="bg-[#F5F1E8] p-8 rounded-xl border-l-4 border-[#C9A55A] h-full hover:shadow-md transition-all">
              <div className="text-4xl font-serif text-[#C9A55A] mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                {modality.number}
              </div>
              <h3 className="text-xl font-medium text-[#1A1A1A] mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                {modality.title}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {modality.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhysiotherapyModalities;
