import React from 'react';

const reasons = [
  {
    number: "1",
    title: "Integrated, not siloed",
    description: "Your Ayurvedic doctor and physiotherapist sit ten meters apart and share your treatment plan. For chronic conditions, that integration is what moves outcomes."
  },
  {
    number: "2",
    title: "DHA-licensed across every specialty",
    description: "Every practitioner you see at Vedara holds a current DHA license. We display license numbers because accountability is not optional in healthcare."
  },
  {
    number: "3",
    title: "Time you can feel",
    description: "First Ayurvedic consultations run 45 to 60 minutes. Physiotherapy is one-to-one, never group. We see fewer patients per day on purpose."
  },
  {
    number: "4",
    title: "We come to you, too",
    description: "DHA-licensed home doctor visits, nursing, physiotherapy and IV therapy across JVC and Dubai. Same clinical standard, your living room."
  }
];

const WhyVedara = () => {
  return (
    <section className="bg-[#FAF8EF] py-24 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-[13px] font-sans tracking-[0.1em] text-[#C9A961] uppercase block">
            Why Vedara
          </span>
          <h2 className="text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2] max-w-6xl mx-auto">
            Healthcare designed the way we would want it for our families.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-10 lg:p-12 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div className="space-y-6">
                <span className="text-[64px] font-serif font-medium text-[#D4A373]/30 group-hover:text-[#D4A373] transition-colors duration-500 leading-none block">
                  {reason.number}
                </span>
                <div className="space-y-4">
                  <h3 className="text-[24px] font-serif font-bold text-[#184C3A]">
                    {reason.title}
                  </h3>
                  <p className="text-[16px] text-[#5a5a5a] font-sans leading-relaxed max-w-md">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVedara;
