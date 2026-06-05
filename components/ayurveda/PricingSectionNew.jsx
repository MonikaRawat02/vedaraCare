import React from 'react';

const PricingSectionNew = ({ bgColor, label, title, description, pricingCards }) => {
  return (
    <section className={`${bgColor} px-6 md:px-24 py-24`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-[#C4A962] text-sm font-semibold tracking-wider">
            {label}
          </div>
          <h2 
            className="text-4xl md:text-5xl" 
            style={{ fontFamily: 'Fraunces, serif', fontWeight: 500 }}
          >
            {title}
          </h2>
          <p className="text-lg text-[#6B7280]">
            {description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingCards.map((card, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-8 relative shadow-lg ${card.highlight ? 'ring-4 ring-[#C4A962] shadow-2xl' : ''} flex flex-col`}
            >
              {card.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C4A962] text-white px-6 py-2 rounded-full text-xs font-semibold">
                  Most Common
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 
                  className="text-2xl mb-2" 
                  style={{ fontFamily: 'Fraunces, serif', fontWeight: 500 }}
                >
                  {card.title}
                </h3>
                <div 
                  className="text-4xl mb-2" 
                  style={{ fontFamily: 'Fraunces, serif', fontWeight: 600 }}
                >
                  {card.price}
                </div>
                <div className="text-sm text-[#6B7280]">
                  {card.duration || '60 minutes at our JVC clinic'}
                </div>
              </div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                {card.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="lucide lucide-check text-[#C4A962] mt-0.5 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-[#6B7280]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="border-t pt-4 mt-auto">
                <div className="text-xs font-semibold text-[#6B7280] mb-1">Best for:</div>
                <div className="text-sm text-[#6B7280]">
                  {card.bestFor || 'Standard follow-up sessions after initial assessment'}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <h3 
            className="text-2xl mb-6 text-center" 
            style={{ fontFamily: 'Fraunces, serif', fontWeight: 500 }}
          >
            Additional Services &amp; Packages
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#C4A962]">
                  <th className="text-left py-3 px-4 font-semibold text-[#030213]">Service</th>
                  <th className="text-right py-3 px-4 font-semibold text-[#030213]">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-[#6B7280]">Single physiotherapy session (follow-up)</td>
                  <td className="py-3 px-4 text-right font-semibold">AED 350</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-[#6B7280]">Initial assessment</td>
                  <td className="py-3 px-4 text-right font-semibold">AED 400</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-[#6B7280]">Dry needling (add-on)</td>
                  <td className="py-3 px-4 text-right font-semibold">AED 150</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-[#6B7280]">Shockwave therapy session</td>
                  <td className="py-3 px-4 text-right font-semibold">AED 500</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-[#6B7280]">Home visit physiotherapy session</td>
                  <td className="py-3 px-4 text-right font-semibold">AED 600</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-[#6B7280]">Sports performance assessment</td>
                  <td className="py-3 px-4 text-right font-semibold">AED 500</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-[#6B7280]">Postnatal physiotherapy assessment</td>
                  <td className="py-3 px-4 text-right font-semibold">AED 400</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-[#6B7280]">6-session package</td>
                  <td className="py-3 px-4 text-right font-semibold">AED 1,800</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-[#6B7280]">12-session package</td>
                  <td className="py-3 px-4 text-right font-semibold">AED 3,200</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-[#6B7280] italic">Integrated Ayurveda + Physiotherapy programmes</td>
                  <td className="py-3 px-4 text-right font-semibold text-[#C4A962]">See condition pages</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <p className="text-sm text-[#6B7280] mb-6 text-center max-w-3xl mx-auto">
          Insurance direct-billing available with Daman, AXA, Allianz, Oman Insurance, Now Health, Bupa, MetLife. Most plans cover physiotherapy when there is medical justification. WhatsApp your insurance card before booking to confirm coverage.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 opacity-50 grayscale">
          <div className="text-xs text-[#6B7280] font-semibold">DAMAN</div>
          <div className="text-xs text-[#6B7280] font-semibold">AXA</div>
          <div className="text-xs text-[#6B7280] font-semibold">ALLIANZ</div>
          <div className="text-xs text-[#6B7280] font-semibold">OMAN INSURANCE</div>
          <div className="text-xs text-[#6B7280] font-semibold">NOW HEALTH</div>
          <div className="text-xs text-[#6B7280] font-semibold">BUPA</div>
          <div className="text-xs text-[#6B7280] font-semibold">METLIFE</div>
        </div>
      </div>
    </section>
  );
};

export default PricingSectionNew;
