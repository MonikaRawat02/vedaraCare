import React from 'react';
import { ArrowRight } from 'lucide-react';

const DoctorSpecialties = ({ doctor }) => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[13px] font-sans font-semibold tracking-[0.1em] text-[#C9A961] uppercase block mb-4">
            CLINICAL FOCUS
          </span>
          <h2 className="text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2] mb-6">
            What {doctor.firstName} is known for.
          </h2>
          <p className="text-[15px] font-sans text-[#6B6B6B] max-w-2xl mx-auto">
            Every Ayurvedic doctor has clinical strengths. These are the conditions {doctor.firstName} sees most often at our JVC clinic, and where her patients see the strongest outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctor.specialtiesList.map((specialty, index) => (
            <div
              key={index}
              className="bg-[#F6F1EA] p-8 rounded-lg border border-[#E5E5E5] hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <h3 className="text-[20px] font-serif font-medium text-[#1A1A1A] leading-tight mb-4">
                {specialty.title}
              </h3>
              <p className="text-[14px] font-sans text-[#4A4A4A] leading-relaxed mb-6">
                {specialty.description}
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-[13px] font-sans font-semibold text-[#6B6B6B] uppercase tracking-wide">
                  TYPICAL CASE LOAD: {specialty.caseLoad}
                </p>
              </div>
              <div className="flex items-center gap-2 text-[#184C3A] font-sans font-medium text-[14px]">
                <span>Treatment approach</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorSpecialties;
