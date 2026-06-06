import React from 'react';

const PediatricPhysiotherapyPricing = () => {
  return (
    <section className="bg-[#f8f6f1] py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-[#c9a65c] text-sm font-medium tracking-wider mb-4">TRANSPARENT PRICING</div>
          <h2 className="text-4xl font-serif text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>What paediatric physiotherapy at our JVC clinic costs.</h2>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#1a4d2e] text-white">
              <tr>
                <th className="text-left py-4 px-6 font-semibold">Service</th>
                <th className="text-right py-4 px-6 font-semibold">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 text-gray-700">Initial paediatric assessment (60-75 minutes)</td>
                <td className="py-4 px-6 text-right font-semibold text-gray-900">AED 450</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 text-gray-700">Follow-up paediatric session (45-60 minutes)</td>
                <td className="py-4 px-6 text-right font-semibold text-gray-900">AED 350</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 text-gray-700">Infant physiotherapy session (30-45 minutes)</td>
                <td className="py-4 px-6 text-right font-semibold text-gray-900">AED 300</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 text-gray-700">Adolescent sports physiotherapy session (60 minutes)</td>
                <td className="py-4 px-6 text-right font-semibold text-gray-900">AED 380</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 text-gray-700">Home paediatric physiotherapy session</td>
                <td className="py-4 px-6 text-right font-semibold text-gray-900">AED 500</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 text-gray-700">Scoliosis assessment and structured programme</td>
                <td className="py-4 px-6 text-right font-semibold text-gray-900">AED 420</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 text-gray-700">Sports injury package (10 sessions, adolescents)</td>
                <td className="py-4 px-6 text-right font-semibold text-gray-900">AED 3,400</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 text-gray-700">Developmental support package (12 sessions)</td>
                <td className="py-4 px-6 text-right font-semibold text-gray-900">AED 3,900</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 text-gray-700">Cerebral palsy ongoing care (per session, structured programme)</td>
                <td className="py-4 px-6 text-right font-semibold text-gray-900">AED 370</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 text-gray-700">Multi-disciplinary case coordination (per case)</td>
                <td className="py-4 px-6 text-right font-semibold text-gray-900">AED 250</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-center text-sm text-gray-600 mt-8 max-w-3xl mx-auto">Family pricing available for siblings receiving treatment. Insurance direct-billing with seven major insurers — coverage for paediatric physiotherapy is often substantial with paediatrician referral. WhatsApp your insurance card and referral letter to +971 50 123 4567 before booking.</p>
      </div>
    </section>
  );
};

export default PediatricPhysiotherapyPricing;
