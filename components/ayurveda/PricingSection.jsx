import React from 'react';

const PricingSection = () => {
  const pricingCards = [
    {
      category: "FIRST CONSULTATION",
      title: "Doctor Assessment",
      price: "AED 200 – AED 800",
      description: "A 45–60 minute Ayurvedic consultation with a BAMS-qualified doctor, including pulse diagnosis, dosha assessment, and a written treatment plan. Some clinics charge less but offer shorter consultations.",
      footer: "At Vedara Care: From AED 350"
    },
    {
      category: "INDIVIDUAL TREATMENTS",
      title: "Single Session",
      price: "AED 250 – AED 800",
      description: "Single therapy sessions like Abhyanga (60–90 min), Shirodhara (45–60 min), or Kativasti (45 min). Quality varies enormously — cheaper is often a warning sign.",
      footer: "At Vedara Care: From AED 280"
    },
    {
      category: "PANCHAKARMA",
      title: "Full Programme",
      price: "AED 3,500 – AED 15,000",
      description: "7-day, 14-day, or 21-day full Panchakarma detox programmes. Includes consultations, daily therapies, herbal medicines, dietary guidance, and follow-up. Length and inclusions vary.",
      footer: "At Vedara Care: From AED 3,800"
    }
  ];

  const insurers = ["Daman", "AXA", "Allianz", "Oman Insurance", "Now Health", "Bupa", "MetLife"];

  return (
    <section className="bg-[#FAF6EF] py-24 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-[13px] font-sans font-semibold tracking-[0.12em] text-[#C9A961] uppercase mb-4">
            TRANSPARENT PRICING
          </p>
          <h2 className="text-[clamp(24px,3.5vw,42px)] font-serif font-medium text-[#1A1A1A] leading-[1.2] mb-4">
            How much does Ayurvedic treatment cost in Dubai?
          </h2>
          <p className="max-w-[640px] mx-auto text-[16.5px] leading-[1.7] text-[#6B6B6B] font-sans">
            Honest indicative pricing across Dubai's main Ayurveda clinics, based on publicly available information. Final pricing always depends on your specific treatment plan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pricingCards.map((card, index) => (
            <div key={index} className="bg-white rounded-[8px] p-8 border border-[#E5DFD3] flex flex-col h-full">
              <p className="text-[13px] font-sans font-semibold tracking-[0.12em] text-[#C9A961] uppercase mb-3">
                {card.category}
              </p>
              <h3 className="text-[19px] font-serif font-semibold text-[#1A1A1A] mb-4">
                {card.title}
              </h3>
              <p className="text-[32px] font-serif font-medium text-[#1F4538] mb-5">
                {card.price}
              </p>
              <p className="text-[13.5px] leading-[1.65] text-[#6B6B6B] font-sans mb-6 flex-grow">
                {card.description}
              </p>
              <div className="pt-5 border-t border-[#F5F5F5]">
                <p className="text-[12.5px] font-sans font-semibold text-[#C9A961]">
                  {card.footer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[12px] p-8 lg:p-12 border border-[#E5DFD3] text-center">
          <p className="text-[12px] font-sans font-semibold tracking-[0.12em] text-[#6B6B6B] uppercase mb-3">
            INSURANCE COVERAGE FOR AYURVEDA IN DUBAI (2026)
          </p>
          <p className="max-w-[720px] mx-auto text-[15px] leading-[1.7] text-[#1A1A1A] font-sans mb-8">
            Some Dubai insurance plans cover Ayurveda partially or fully — most commonly Daman, AXA, and Now Health premium tiers. Coverage varies plan by plan. Vedara Care is a direct-billing partner with seven major insurers — send us a photo of your card on WhatsApp and we will confirm your specific coverage before you book.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {insurers.map((insurer, index) => (
              <span key={index} className="bg-[#FAF6EF] text-[#6B6B6B] px-4 py-2 rounded-[4px] text-[13px] font-sans border border-[#E5DFD3]">
                {insurer}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
