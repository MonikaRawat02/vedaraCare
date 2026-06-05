import React from 'react';

const SportsPhysiotherapyPricing = () => {
  const pricingItems = [
    { name: 'Initial sports physiotherapy assessment (60 minutes)', price: 'AED 350', bg: 'rgb(255, 255, 255)' },
    { name: 'Follow-up sports physio session (45–60 minutes)', price: 'AED 280', bg: 'rgb(250, 247, 242)' },
    { name: 'Sport-specific assessment & gait analysis (90 minutes)', price: 'AED 480', bg: 'rgb(255, 255, 255)' },
    { name: 'Dry needling (add-on per session)', price: 'AED 120', bg: 'rgb(250, 247, 242)' },
    { name: 'Shockwave therapy session', price: 'AED 350', bg: 'rgb(255, 255, 255)' },
    { name: 'Acute sports injury package (8 sessions)', price: 'AED 1,980', bg: 'rgb(250, 247, 242)' },
    { name: 'Sport-specific rehabilitation package (12 sessions)', price: 'AED 2,800', bg: 'rgb(255, 255, 255)' },
    { name: 'ACL reconstruction rehabilitation programme (20–30 sessions)', price: 'AED 6,500', bg: 'rgb(250, 247, 242)' },
    { name: 'Return-to-sport testing & clearance', price: 'AED 420', bg: 'rgb(255, 255, 255)' },
    { name: 'Performance optimisation programme', price: 'AED 1,600', bg: 'rgb(250, 247, 242)' }
  ];

  return (
    <section className="bg-white" style={{ padding: '96px 24px' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgb(201, 168, 76)' }}>
            <span className="inline-block w-6 h-px mr-2 align-middle" style={{ background: 'rgb(201, 168, 76)' }}></span>
            Transparent Pricing
            <span className="inline-block w-6 h-px ml-2 align-middle" style={{ background: 'rgb(201, 168, 76)' }}></span>
          </p>
          <h2 className="text-3xl sm:text-4xl" style={{ fontFamily: 'var(--font-display, Fraunces, Georgia, serif)', fontWeight: 500, color: 'rgb(26, 26, 26)' }}>
            What sports injury physiotherapy at our JVC clinic costs.
          </h2>
        </div>
        <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(0, 0, 0, 0.08)' }}>
          {pricingItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-center justify-between px-7 py-5 transition-colors hover:bg-stone-50"
              style={{ 
                background: item.bg, 
                borderBottom: index < pricingItems.length - 1 ? '1px solid rgba(0, 0, 0, 0.05)' : 'none' 
              }}
            >
              <span className="text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                {item.name}
              </span>
              <span className="text-sm font-bold flex-shrink-0 ml-6" style={{ color: 'rgb(27, 67, 50)', fontFamily: 'var(--font-display, Fraunces, Georgia, serif)' }}>
                {item.price}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-xl p-7" style={{ background: 'rgb(27, 67, 50)', color: 'rgb(250, 247, 242)' }}>
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgb(201, 168, 76)' }}>
            Direct Insurance Billing
          </p>
          <p className="text-sm mb-5 leading-relaxed" style={{ lineHeight: 1.7 }}>
            Insurance direct-billing available with seven major insurers. Sports injuries with medical justification are typically covered. WhatsApp your insurance card to <a href="https://wa.me/971501234567" className="underline" style={{ color: 'rgb(201, 168, 76)' }}>+971 50 123 4567</a> before booking for specific coverage confirmation.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 rounded text-xs font-semibold" style={{ background: 'rgba(201, 168, 76, 0.2)', color: 'rgb(201, 168, 76)', border: '1px solid rgba(201, 168, 76, 0.3)' }}>
              Daman
            </span>
            <span className="px-3 py-1.5 rounded text-xs font-semibold" style={{ background: 'rgba(201, 168, 76, 0.2)', color: 'rgb(201, 168, 76)', border: '1px solid rgba(201, 168, 76, 0.3)' }}>
              AXA
            </span>
            <span className="px-3 py-1.5 rounded text-xs font-semibold" style={{ background: 'rgba(201, 168, 76, 0.2)', color: 'rgb(201, 168, 76)', border: '1px solid rgba(201, 168, 76, 0.3)' }}>
              Allianz
            </span>
            <span className="px-3 py-1.5 rounded text-xs font-semibold" style={{ background: 'rgba(201, 168, 76, 0.2)', color: 'rgb(201, 168, 76)', border: '1px solid rgba(201, 168, 76, 0.3)' }}>
              Oman Insurance
            </span>
            <span className="px-3 py-1.5 rounded text-xs font-semibold" style={{ background: 'rgba(201, 168, 76, 0.2)', color: 'rgb(201, 168, 76)', border: '1px solid rgba(201, 168, 76, 0.3)' }}>
              Now Health
            </span>
            <span className="px-3 py-1.5 rounded text-xs font-semibold" style={{ background: 'rgba(201, 168, 76, 0.2)', color: 'rgb(201, 168, 76)', border: '1px solid rgba(201, 168, 76, 0.3)' }}>
              Bupa
            </span>
            <span className="px-3 py-1.5 rounded text-xs font-semibold" style={{ background: 'rgba(201, 168, 76, 0.2)', color: 'rgb(201, 168, 76)', border: '1px solid rgba(201, 168, 76, 0.3)' }}>
              MetLife
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsPhysiotherapyPricing;
