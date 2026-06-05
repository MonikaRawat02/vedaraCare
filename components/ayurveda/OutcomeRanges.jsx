import React from 'react';

const OutcomeRanges = ({
  bgColor = "bg-[#F5F1EB]",
  headerBgColor = "bg-[#030213]",
  headerTextColor = "text-white",
  label = "REALISTIC EXPECTATIONS",
  title = "",
  description = "",
  tableHeaders = [],
  tableRows = [],
  footer = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-[#C5A572] text-sm font-medium tracking-wider uppercase mb-4">
            {label}
          </div>
          <h2 className="text-4xl font-medium text-[#1A1A1A] font-serif max-w-3xl mx-auto mb-6" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
            {title}
          </h2>
          <p className="text-base text-gray-600 font-sans max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg overflow-hidden">
            <thead>
              <tr className={`${headerBgColor} ${headerTextColor}`}>
                {tableHeaders.map((header, index) => (
                  <th key={index} className="px-6 py-4 text-left text-[14px] font-bold tracking-wider ">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tableRows.map((row, index) => (
                <tr key={index} className={`${(index + 1) % 2 === 0 ? 'bg-[#FAF7F2]' : 'bg-white'}`}>
                  <td className="px-6 py-4 text-[14px] font-semibold text-[#1A1A1A] font-sans">
                    {row.subtype}
                  </td>
                  <td className="px-6 py-4 text-[14px] text-[#1A1A1A]font-sans">
                    {row.days}
                  </td>
                  <td className="px-6 py-4 text-[14px] text-[#1A1A1A] font-sans">
                    {row.severity}
                  </td>
                  <td className="px-6 py-4 text-[14px] text-[#1A1A1A] font-sans">
                    {row.medication}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {footer && (
          <div className="text-center max-w-3xl mx-auto mt-8">
            <p className="text-gray-600 text-[15px] font-sans leading-relaxed">
              {footer}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default OutcomeRanges;
