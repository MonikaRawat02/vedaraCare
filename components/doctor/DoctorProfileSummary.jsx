import React from 'react';

const DoctorProfileSummary = ({ doctor }) => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[13px] font-sans font-semibold tracking-[0.1em] text-[#C9A961] uppercase block mb-4">
              PROFILE SUMMARY
            </span>
            <h2 className="text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2]">
              {doctor.summaryTitle}
            </h2>
          </div>

          <div className="border-l-2 border-[#C9A961] pl-8">
            <p 
              className="text-[16px] font-sans text-[#4A4A4A] leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: doctor.summaryParagraph1 }}
            />
            <p 
              className="text-[16px] font-sans text-[#4A4A4A] leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: doctor.summaryParagraph2 }}
            />
            <p 
              className="text-[16px] font-sans text-[#4A4A4A] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: doctor.summaryParagraph3 }}
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-[13px] font-sans text-[#8B8B8B]">
              Profile reviewed and verified by Dr. Nair • Last updated May 2026 • DHA License DHA-P-0048291
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfileSummary;
