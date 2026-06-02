import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const DoctorSpecialties = ({ doctor }) => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[13px] font-sans font-semibold tracking-[0.1em] uppercase block mb-4" style={{ color: 'rgb(201, 169, 97)' }}>
            CLINICAL FOCUS
          </span>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '42px', fontWeight: '500', color: 'rgb(26, 26, 26)', lineHeight: '1.2', marginBottom: '24px' }}>
            What {doctor.firstName} is known for.
          </h2>
          <p className="text-[15px] font-sans max-w-2xl mx-auto" style={{ color: 'rgb(107, 107, 107)' }}>
            Every Ayurvedic doctor has clinical strengths. These are the conditions {doctor.firstName} sees most often at our JVC clinic, and where her patients see the strongest outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctor.specialtiesList.map((specialty, index) => {
            return (
              <div
                key={index}
                className="p-8 rounded-[8px] border hover:shadow-lg transition-all duration-300 cursor-pointer group"
                style={{ backgroundColor: 'rgb(250, 246, 239)', border: '1px solid rgb(229, 223, 211)' }}
              >
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '20px', fontWeight: '500', color: 'rgb(26, 26, 26)', lineHeight: '1.2', marginBottom: '16px' }} dangerouslySetInnerHTML={{ __html: specialty.title }} />
                <p className="text-[14px] font-sans leading-relaxed mb-6" style={{ color: 'rgb(74, 74, 74)' }}>
                  {specialty.description}
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-[13px] font-sans font-semibold uppercase tracking-wide" style={{ color: 'rgb(107, 107, 107)' }}>
                    TYPICAL CASE LOAD: {specialty.caseLoad}
                  </p>
                </div>
                <div className="flex items-center gap-2 font-sans font-medium text-[14px]" style={{ color: 'rgb(31, 69, 56)' }}>
                  <span>Treatment approach</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DoctorSpecialties;
