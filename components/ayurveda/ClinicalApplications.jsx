import React from 'react';
import { Check, Info } from 'lucide-react';

const ClinicalApplications = ({
  bgColor = "bg-[#FAF6EF]",
  label = "CLINICAL APPLICATIONS",
  title = "What Ayurveda actually treats well — and what it does not.",
  description = "Honest clinical guidance. Ayurveda is powerful for chronic conditions where lifestyle, stress, and constitution drive symptoms. It is not a substitute for surgery, emergency care, or acute infection management.",
  strongOutcomes = [],
  referralCases = [],
  referralNote = '"Authentic Ayurvedic doctors in Dubai will tell you honestly when modern medicine is the right first step."',
  footerNote = "At Vedara Care, we work alongside conventional medicine, not against it. Patients often see both an Ayurvedic and conventional doctor for the same condition."
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 space-y-3">
          <span className="text-[13px] font-sans font-semibold tracking-[0.12em] text-[#C9A961] uppercase block mb-4">
            {label}
          </span>
          <h2 className="text-[clamp(24px,3.5vw,42px)] font-serif font-medium text-[#1A1A1A] leading-[1.2]">
            {title}
          </h2>
          <p className="text-[17px] text-[#6B6B6B] font-sans max-w-[700px] mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Strong Outcomes Card */}
          <div className="bg-white rounded-[12px] p-8 lg:p-10 border border-[#E5DFD3]">
            <p className="text-[13px] font-sans font-semibold tracking-[0.12em] text-[#C9A961] uppercase mb-4">
              STRONG OUTCOMES
            </p>
            <ul className="space-y-3">
              {strongOutcomes.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-[14.5px] text-[#1A1A1A] font-sans">
                  <Check className="w-5 h-5 text-[#1A1A1A] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Referral Card */}
          <div className="bg-white rounded-[12px] p-8 lg:p-10 border border-[#E5DFD3] shadow-sm">
            <p className="text-[13px] font-sans font-semibold tracking-[0.12em] text-[#C9A961] uppercase mb-4">
              WHERE WE WILL REFER YOU
            </p>
            <p className="text-[16.5px] font-sans text-[#1A1A1A] mb-6 leading-[1.7]">
              {referralNote}
            </p>
            <ul className="space-y-4 mb-10">
              {referralCases.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-[14.5px] text-[#1A1A1A] font-sans">
                  <Info className="w-5 h-5 text-[#1A1A1A] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[13px] text-[#888888] font-sans leading-[1.7] border-t border-[#F5F5F5] pt-6 mt-8">
              {footerNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalApplications;
