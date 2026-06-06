import React from 'react';

const PediatricPhysiotherapyPricing = ({ data }) => {
  return (
    <section className={`${data.bgColor || "bg-[#f8f6f1]"} py-24`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-[#c9a65c] text-sm font-medium tracking-wider mb-4">{data.label || "TRANSPARENT PRICING"}</div>
          <h2 className="text-4xl font-serif text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>{data.title || "What paediatric physiotherapy at our JVC clinic costs."}</h2>
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
              {data.tableData?.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700">{item.service}</td>
                  <td className="py-4 px-6 text-right font-semibold text-gray-900">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {data.footerText && (
          <p className="text-center text-sm text-gray-600 mt-8 max-w-3xl mx-auto">{data.footerText}</p>
        )}
      </div>
    </section>
  );
};

export default PediatricPhysiotherapyPricing;
