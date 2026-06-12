import React from 'react';

const HomePhysioCoverage = ({
  bgColor = "bg-[#F5F1E8]",
  label = "ACROSS DUBAI",
  title = "Where we deliver home physiotherapy.",
  description = "",
  within10Minutes = [],
  within1525Minutes = [],
  within2545Minutes = [],
  note = "",
  image = "",
  alt = "Home physiotherapy coverage image"
}) => {
  return (
    <section className={`${bgColor} py-24 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-[#d4af37] text-sm tracking-wider mb-4">
            {label}
          </div>
          <h2 className="text-4xl font-serif mb-6">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-gray-200 rounded-xl h-[500px] flex items-center justify-center overflow-hidden">
            {image ? (
              <img 
                src={image} 
                alt={alt} 
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <span className="text-gray-500 text-center px-4">
                Coverage Map Image
              </span>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-[#d4af37] mb-3">
                Within 15 minutes of clinic:
              </h4>
              <div className="flex flex-wrap gap-2">
                {within10Minutes.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-[#d4af37] mb-3">
                Within 15-25 minutes:
              </h4>
              <div className="flex flex-wrap gap-2">
                {within1525Minutes.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-[#d4af37] mb-3">
                Within 25-45 minutes:
              </h4>
              <div className="flex flex-wrap gap-2">
                {within2545Minutes.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {note && (
              <div className="mt-6 p-4 bg-white border-l-4 border-[#d4af37] rounded-r-lg">
                <p className="text-gray-700 text-sm">{note}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePhysioCoverage;
