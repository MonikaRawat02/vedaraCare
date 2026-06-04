const BlogOutcomeTable = ({ title, description, headers, rows }) => {
  return (
    <div className="mb-12">
      {title && <h2 className="text-[32px] font-serif font-medium text-[#1A1A1A] mb-8 leading-tight">{title}</h2>}
      {description && <p className="mb-8 text-[18px] leading-relaxed text-[#4A4A4A] font-sans">{description}</p>}

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
          <thead>
            <tr className="bg-[#F8F5F0]">
              {headers.map((header, i) => (
                <th key={i} className="p-6 font-bold text-[#1A1A1A] border-b border-gray-100 text-[14px] uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-[16px]">
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className="p-6">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogOutcomeTable;
