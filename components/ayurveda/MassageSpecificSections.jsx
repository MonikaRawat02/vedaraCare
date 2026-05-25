import React from 'react';
import { Check, X as CloseIcon } from 'lucide-react';

export const AyurvedaVsSpa = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <span className="text-[14px] font-sans font-medium tracking-wider text-[#B8860B] uppercase block mb-4">
          AYURVEDA VS SPA
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1A1A1A] leading-tight mb-4 mx-auto" style={{ fontFamily: 'Fraunces, serif' }}>
          Most "Ayurvedic massage" in Dubai is just spa massage with Indian-sounding names.
        </h2>
        <p className="text-[16px] text-gray-600 font-sans mb-12 max-w-3xl mx-auto">
          The difference is not the oils or the room. It is the clinical rigour behind the treatment.
        </p>

        <div className="grid md:grid-cols-2 gap-8  mx-auto">
          {/* Spa Positioning */}
          <div className="bg-white p-8 rounded-xl text-left border border-gray-200">
            <span className="text-[12px] font-sans tracking-wider text-gray-400 uppercase block mb-4">
              SPA POSITIONING
            </span>
            <h3 className="text-[22px] font-serif font-medium text-[#1A1A1A] mb-8">
              "Walk-in, generic, single-session"
            </h3>
            <ul className="space-y-5">
              {[
                "No doctor consultation before treatment",
                "Generic oils used for all clients regardless of dosha",
                "60-minute \"package\" treatments without protocol logic",
                "Often performed in shared spaces or curtained areas",
                "Marketing focuses on relaxation and ambiance"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-[15px] text-gray-500 font-sans">
                  <CloseIcon size={18} className="text-red-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Medical Positioning */}
          <div className="bg-[#FAF8F3] p-8 rounded-xl text-left border-2 border-[#B8860B] relative">
            <span className="text-[12px] font-sans tracking-wider text-[#B8860B] uppercase block mb-4">
              MEDICAL POSITIONING
            </span>
            <h3 className="text-[22px] font-serif font-medium text-[#1A1A1A] mb-8">
              "Prescribed, personalised, protocol-driven"
            </h3>
            <ul className="space-y-5">
              {[
                "BAMS-qualified doctor consultation before any therapy",
                "Dosha-specific oils selected for your individual constitution",
                "Duration and protocol matched to clinical objective",
                "Private treatment rooms with traditional Kerala-style droni tables",
                "Same-gender therapists, trained in classical technique"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-[15px] text-[#1A1A1A] font-sans font-medium">
                  <Check size={18} className="text-[#B8860B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 text-[22px] md:text-[24px] font-serif italic text-[#B8860B] max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Fraunces, serif' }}>
          "If a clinic offers Ayurvedic massage without a doctor consultation, they are offering wellness — not medicine. Both have value. But they are not the same thing."
        </p>
      </div>
    </section>
  );
};

export const MassagesTable = () => {
  const rows = [
    {
      want: "Full-body relaxation, sleep, stress relief, dosha balance",
      name: "Abhyanga",
      duration: "60-90 min",
      does: "Warm medicated oil massage applied head-to-toe in synchronized strokes. The most-prescribed Ayurvedic massage and the foundation of most protocols.",
      link: "/treatments/abhyanga-dubai/",
      linkText: "Learn about Abhyanga"
    },
    {
      want: "Deep calm for anxiety, insomnia, or migraine",
      name: "Shirodhara",
      duration: "45-60 min",
      does: "Continuous gentle stream of warm medicated oil poured rhythmically across the forehead. Profoundly nervous-system focused.",
      link: "/treatments/shirodhara-dubai/",
      linkText: "Learn about Shirodhara"
    },
    {
      want: "Targeted relief for chronic lower back pain or sciatica",
      name: "Kativasti",
      duration: "45 min",
      does: "Warm medicated oil pooled in a wheat-dough reservoir over the lower spine. Localized, deep, lasting.",
      link: "/treatments/kativasti-dubai/",
      linkText: "Learn about Kativasti"
    },
    {
      want: "Muscle weakness, post-illness recovery, or neurological recovery",
      name: "Njavarakizhi",
      duration: "60-75 min",
      does: "Massage using small cloth boluses filled with rice cooked in herbal milk. Nourishing and strengthening.",
      link: "/treatments/njavarakizhi-dubai/",
      linkText: "Learn about Njavarakizhi"
    },
    {
      want: "Weight management, lymphatic drainage, or cellulite",
      name: "Udvartana",
      duration: "45-60 min",
      does: "Vigorous massage using dry herbal powders (not oil). Stimulates metabolism and lymphatic flow.",
      link: "/treatments/udvartana-dubai/",
      linkText: "Learn about Udvartana"
    }
  ];

  return (
    <section className="bg-[#F5F3EE] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[14px] font-sans font-medium tracking-wider text-[#B8860B] uppercase block mb-4">
            NOT SURE WHICH ONE?
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1A1A1A] leading-tight mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
            Five classical Ayurvedic massages, each for a specific need.
          </h2>
          <p className="text-[16px] text-gray-600 font-sans max-w-3xl mx-auto">
            A practical guide to choosing. At consultation, your doctor will confirm or recommend a different protocol based on your dosha and condition.
          </p>
        </div>

        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-200">
                  <th className="py-4 px-6 text-[14px] font-sans font-semibold text-gray-900 uppercase tracking-wider w-[25%]">If you want...</th>
                  <th className="py-4 px-6 text-[14px] font-sans font-semibold text-gray-900 uppercase tracking-wider w-[20%]">The Ayurvedic massage is...</th>
                  <th className="py-4 px-6 text-[14px] font-sans font-semibold text-gray-900 uppercase tracking-wider w-[15%]">Duration</th>
                  <th className="py-4 px-6 text-[14px] font-sans font-semibold text-gray-900 uppercase tracking-wider w-[40%]">What it does</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-6 px-6 text-[14px] text-gray-700 font-sans leading-relaxed">{row.want}</td>
                    <td className="py-6 px-6 text-[16px] text-[#B8860B] font-sans font-semibold">{row.name}</td>
                    <td className="py-6 px-6 text-[14px] text-gray-400 font-sans">{row.duration}</td>
                    <td className="py-6 px-6">
                      <p className="text-[14px] text-gray-600 font-sans leading-relaxed">
                        {row.does} <a href={row.link} className="text-[#B8860B] font-semibold hover:underline whitespace-nowrap inline-flex items-center gap-1"> → {row.linkText}</a>
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-8 text-center text-[14px] text-gray-600 font-sans">
          Not sure which is right? <a href="#" className="text-[#B8860B] font-semibold hover:underline">→ Book a 45-60 minute Ayurvedic consultation</a> and we will recommend the right protocol for you.
        </p>
      </div>
    </section>
  );
};

export const PricingSection = () => {
  const cards = [
    {
      name: "Abhyanga",
      price: "350",
      duration: "60-90 min",
      description: "Warm medicated oil massage applied head-to-toe in synchronized strokes.",
      link: "/treatments/abhyanga-dubai/"
    },
    {
      name: "Shirodhara",
      price: "450",
      duration: "45-60 min",
      description: "Continuous gentle stream of warm medicated oil poured rhythmically across the forehead.",
      link: "/treatments/shirodhara-dubai/"
    },
    {
      name: "Kativasti",
      price: "380",
      duration: "45 min",
      description: "Warm medicated oil pooled in a wheat-dough reservoir over the lower spine.",
      link: "/treatments/kativasti-dubai/"
    },
    {
      name: "Njavarakizhi",
      price: "480",
      duration: "60-75 min",
      description: "Massage using small cloth boluses filled with rice cooked in herbal milk.",
      link: "/treatments/njavarakizhi-dubai/"
    },
    {
      name: "Udvartana",
      price: "420",
      duration: "45-60 min",
      description: "Vigorous massage using dry herbal powders (not oil).",
      link: "/treatments/udvartana-dubai/"
    }
  ];

  return (
    <section className="bg-[#FAF8F3] py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-12">
          <span className="text-[14px] font-sans font-medium tracking-wider text-[#B8860B] uppercase block mb-4">
            TRANSPARENT PRICING
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1A1A1A] leading-tight mb-4  mx-auto" style={{ fontFamily: 'Fraunces, serif' }}>
            What Ayurvedic massage at Vedara Care actually costs.
          </h2>
          <p className="text-[16px] text-gray-600 font-sans max-w-3xl mx-auto">
            Indicative pricing per session. Course pricing (3, 7, or 14 sessions) offers per-session discount. Final pricing confirmed in writing after consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
              <h3 className="text-[18px] font-serif font-medium text-[#1A1A1A] mb-3" style={{ fontFamily: 'Fraunces, serif' }}>{card.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-[32px] font-serif font-semibold text-[#1A1A1A]" style={{ fontFamily: 'Fraunces, serif' }}>AED</span>
                <span className="text-[32px] font-serif font-semibold text-[#1A1A1A]" style={{ fontFamily: 'Fraunces, serif' }}>{card.price}</span>
              </div>
              <p className="text-[13px]  font-sans text-[#B8860B] mb-6">{card.duration}</p>
              <p className="text-[14px] text-gray-600 font-sans leading-relaxed mb-8 h-[60px] flex items-center justify-center">
                {card.description}
              </p>
              <a href={card.link} className="mt-auto text-[14px] font-sans font-semibold text-[#B8860B] hover:underline">
                Full details →
              </a>
            </div>
          ))}
        </div>

        <div className="space-y-6 pt-4">
          <p className="text-[15px] text-gray-500 font-sans">
            Course pricing available: 7-session course typically 10-15% off per session, 14-session course 15-20% off.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[12px] font-sans text-gray-400  tracking-widest">
            <span>Direct-billing partner with leading insurers:</span>
            <div className="flex items-center gap-4 text-gray-600 font-semibold">
              <span>Daman</span>
              <span className="text-gray-300">|</span>
              <span>AXA</span>
              <span className="text-gray-300">|</span>
              <span>Now Health</span>
              <span className="text-gray-300">|</span>
              <span>Allianz</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

