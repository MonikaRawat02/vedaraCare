import React from 'react';

const HomePhysioPricing = ({
  bgColor = "bg-[#FFFFFF]",
  label = "TRANSPARENT PRICING",
  title = "What home physiotherapy in Dubai actually costs.",
  description = "",
  perSessionPricing = [],
  packages = [],
  comparison = [],
  note = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-4`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-[#d4af37] text-sm tracking-wider mb-4">{label}</div>
          <h2 className="text-4xl font-serif mb-6">{title}</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="space-y-8">
          {/* Per-session pricing */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-[#d4af37]">Per-session pricing</h3>
            <div className="space-y-2">
              {perSessionPricing.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">{item.service}</span>
                  <span className="font-bold text-[#184c3a]">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Packages */}
          <div className="grid md:grid-cols-2 gap-6">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bg-[#f5f1e8] p-6 rounded-xl shadow-sm border border-[#d4af37]/30">
                <h3 className="font-serif text-lg mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-[#184c3a] mb-2">{pkg.price}</div>
                <p className="text-sm text-gray-600">{pkg.perSession}</p>
              </div>
            ))}
          </div>

          {/* Comparison */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-[#d4af37]">Comparison — clinic vs. home</h3>
            <table className="w-full">
              <thead>
                <tr className="bg-[#184c3a] text-white">
                  <th className="text-left py-3 px-4 rounded-tl-lg">Service</th>
                  <th className="text-center py-3 px-4">Clinic Price</th>
                  <th className="text-center py-3 px-4 rounded-tr-lg">Home Price</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">{item.service}</td>
                    <td className="text-center py-3 px-4 font-medium">{item.clinicPrice}</td>
                    <td className="text-center py-3 px-4 font-medium">{item.homePrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            {note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomePhysioPricing;
