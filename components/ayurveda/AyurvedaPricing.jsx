import React from "react";
import { Check, MessageCircle } from "lucide-react";

const AyurvedaPricing = () => {
  const cards = [
    {
      label: "CONSULTATIONS",
      title: "First Consultation",
      price: "From AED [price]",
      points: [
        "First Ayurvedic consultation (45-60 min)",
        "Pulse and dosha assessment",
        "Personalised treatment plan",
        "Written prescription summary",
        "One follow-up call within 7 days",
      ],
    },
    {
      label: "TREATMENTS",
      title: "Individual Sessions",
      price: "From AED [price] per session",
      points: [
        "Abhyanga, Shirodhara, Kativasti, Njavarakizhi",
        "Performed by trained therapists",
        "Authentic medicated oils",
        "Therapist of preferred gender",
        "Aftercare guidance included",
      ],
    },
    {
      label: "PROGRAMMES",
      title: "Panchakarma",
      price: "From AED [price]",
      points: [
        "7-day, 14-day, or 21-day programmes",
        "Doctor supervision throughout",
        "All medicines and therapies included",
        "Customised diet plan",
        "3-month follow-up support",
      ],
    },
  ];

  const insurances = [
    "Daman",
    "AXA",
    "Allianz",
    "Oman Insurance",
    "Now Health",
    "Bupa",
    "MetLife",
  ];

  return (
    <section className="bg-[#F8F8F8] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14 space-y-0">
          <p className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase">
            Transparent Pricing
          </p>
          
          <h2 className="mt-4 mb-4 text-[#1A1A1A] font-serif text-[clamp(1.7rem,2.8vw,2.5rem)] leading-[1.15] font-normal mx-auto">
            What Ayurveda actually costs in Dubai.
          </h2>

          <p className="text-[17px] text-[#6B6B6B] font-sans max-w-[640px] mx-auto leading-relaxed">
            We publish indicative pricing because patients deserve to know
            before they book. Final pricing depends on your treatment plan,
            which is decided after consultation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F2EEE8] rounded-lg p-10 flex flex-col"
            >
              <p className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase">
                {card.label}
              </p>

              <h3
                className="mt-4 text-[#1A1A1A] font-serif"
                style={{
                  fontSize: "clamp(1.3rem, 1.8vw, 1.7rem)",
                }}
              >
                {card.title}
              </h3>

              <h4
                className="mt-3 mb-8 text-[#1A1A1A] font-serif"
                style={{
                  fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)",
                }}
              >
                {card.price}
              </h4>

              <ul className="space-y-4 flex-1">
                {card.points.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#6B6B6B] text-[14px] font-sans"
                  >
                    <Check
                      size={14}
                      className="text-[#C9A961] mt-1 flex-shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <a 
                href="https://wa.me/971555867466?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20enquire%20about%20Ayurveda%20pricing%20and%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 border border-[#D8D1C7] rounded-full py-4 flex items-center justify-center gap-2 text-[14px] font-sans font-medium hover:bg-white transition">
                <MessageCircle size={15} />
                Enquire on WhatsApp
              </a>
            </div>
          ))}
        </div>

        {/* Insurance */}
        <div className="text-center mt-16">
          <p className="text-[14px] text-[#6B6B6B] font-sans mb-6">
            Direct billing available with:
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {insurances.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-[#EFE8DD] border border-[#DDD3C4] text-[#6B6B6B] text-[13px] font-sans"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-6 text-[13px] text-[#6B6B6B] font-sans max-w-md mx-auto">
            Ayurveda coverage varies by plan. WhatsApp us your card and we will
            confirm before booking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AyurvedaPricing;