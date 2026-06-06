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
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[3px] uppercase text-[#C6A05C] font-semibold">
            Transparent Pricing
          </p>

          <h2
            className="mt-4 text-[#1D1D1D] font-normal"
            style={{
              fontFamily: "Fraunces, Georgia, serif",
              fontSize: "48px",
              lineHeight: "1.2",
            }}
          >
            What Ayurveda actually costs in Dubai.
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-[#666] text-[17px] leading-8">
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
              <p className="text-[11px] tracking-[3px] uppercase text-[#C6A05C] font-semibold">
                {card.label}
              </p>

              <h3
                className="mt-4 text-[34px] text-[#111]"
                style={{
                  fontFamily: "Fraunces, Georgia, serif",
                  fontWeight: 400,
                }}
              >
                {card.title}
              </h3>

              <h4
                className="mt-3 mb-8 text-[#111]"
                style={{
                  fontFamily: "Fraunces, Georgia, serif",
                  fontSize: "28px",
                  fontWeight: 400,
                }}
              >
                {card.price}
              </h4>

              <ul className="space-y-4 flex-1">
                {card.points.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#6F6F6F] text-sm"
                  >
                    <Check
                      size={14}
                      className="text-[#C6A05C] mt-1 flex-shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="mt-10 border border-[#D8D1C7] rounded-full py-4 flex items-center justify-center gap-2 text-sm font-medium hover:bg-white transition">
                <MessageCircle size={15} />
                Enquire on WhatsApp
              </button>
            </div>
          ))}
        </div>

        {/* Insurance */}
        <div className="text-center mt-16">
          <p className="text-sm text-[#777] mb-6">
            Direct billing available with:
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {insurances.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-[#EFE8DD] border border-[#DDD3C4] text-[#666] text-xs"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-6 text-xs text-[#777] max-w-md mx-auto">
            Ayurveda coverage varies by plan. WhatsApp us your card and we will
            confirm before booking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AyurvedaPricing;