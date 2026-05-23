import React from 'react';

const WhyVedara = ({
  bgColor = "bg-[#FAF8EF]",
  cardBgColor = "bg-white",
  label = "Why Vedara",
  title = "Healthcare designed the way we would want it for our families.",
  items = [
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
  ]
}) => {
  return (
    <section className={`${bgColor} py-24 `}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[13px] font-sans tracking-[0.1em] text-[#C9A961] uppercase block mb-4">
            {label}
          </span>
          <h2 className="text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2] max-w-6xl mx-auto">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((reason, index) => (
            <div 
              key={index} 
              className={`${cardBgColor} p-10 rounded-[8px] shadow-sm hover:shadow-md transition-shadow duration-300 group`}
            >
              <div className="space-y-6">
                <span className="text-[72px] font-serif font-medium text-[#C9A961] leading-[1] block mb-4 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                  {reason.number}
                </span>
                <div className="space-y-4">
                  <h3 className="text-[26px] font-serif font-semibold text-[#1A1A1A] leading-[1.3] mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-[16px] text-[#6B6B6B] font-sans leading-relaxed">
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
