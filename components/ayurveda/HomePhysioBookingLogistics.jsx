import React from 'react';

const HomePhysioBookingLogistics = ({
  bgColor = "bg-[#F5F1E8]",
  label = "BOOKING & LOGISTICS",
  title = "Booking and logistics for home physiotherapy.",
  content = [],
  buttons = []
}) => {
  return (
    <section className={`${bgColor} py-24 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-[#d4af37] text-sm tracking-wider mb-4">
            {label}
          </div>
          <h2 className="text-4xl font-serif">
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.map((section, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-[#d4af37] text-xs font-bold tracking-wider mb-2">
                Step {index + 1}
              </div>
              <h3 className="font-serif text-xl mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-gray-700">
                    <span className="text-[#d4af37] mt-1">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-12 flex-wrap">
          {buttons.map((button, index) => (
            <button 
              key={index}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                button.variant === "primary" 
                  ? "bg-[#184c3a] text-white hover:bg-[#153a2d]" 
                  : "bg-[#25d366] text-white hover:bg-[#20bd5a]"
              }`}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePhysioBookingLogistics;
