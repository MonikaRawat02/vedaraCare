import React from 'react';

const DoctorConsultation = ({ doctor }) => {
  return (
    <section className="bg-[#F6F1EA] py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[13px] font-sans font-semibold tracking-[0.1em] text-[#C9A961] uppercase block mb-4">
            YOUR FIRST VISIT
          </span>
          <h2 className="text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2]">
            A consultation with {doctor.firstName} is unlike any you have had.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctor.consultationSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-[64px] font-serif text-[#C9A961]/20 font-medium mb-4">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-[18px] font-serif font-medium text-[#1A1A1A] mb-4">
                {step.title}
              </h3>
              <p className="text-[14px] font-sans text-[#4A4A4A] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[13px] font-sans text-[#6B6B6B]">
            First consultation: 45 to 60 minutes • From AED 350 • Insurance direct-billing available
          </p>
        </div>
      </div>
    </section>
  );
};

export default DoctorConsultation;
