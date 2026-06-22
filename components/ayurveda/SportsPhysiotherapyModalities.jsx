import React from 'react';

const SportsPhysiotherapyModalities = ({
  bgColor = "bg-white",
  label = "Techniques & Modalities",
  title = "Evidence-based techniques.",
  description = "",
modalities = [],
  footer = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgb(201, 168, 76)' }}>
            <span className="inline-block w-6 h-px mr-2 align-middle" style={{ background: 'rgb(201, 168, 76)' }}></span>
            {label}
            <span className="inline-block w-6 h-px ml-2 align-middle" style={{ background: 'rgb(201, 168, 76)' }}></span>
          </p>
          <h2 className="text-3xl sm:text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500, color: 'rgb(26, 26, 26)' }}>
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-[#6B635A] text-base max-w-[700px] mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {modalities.map((modality, index) => (
            <div key={index} className="rounded-lg p-7 transition-all hover:shadow-md" style={{ background: 'rgb(250, 247, 242)' }}>
              <p className="text-4xl mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(201, 168, 76)', fontWeight: 300 }}>
                {modality.number}
              </p>
              <h3 className="text-lg mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500, color: 'rgb(26, 26, 26)' }} dangerouslySetInnerHTML={{ __html: modality.title }}>
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgb(107, 107, 107)', lineHeight: 1.7 }}>
                {modality.description}
              </p>
            </div>
          ))}
        </div>

        {footer && (
          <div className="text-center">
              <p class="mt-10 text-center text-sm text-[#6B635A] max-w-[700px] mx-auto leading-relaxed">
              {footer}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SportsPhysiotherapyModalities;
