import React from 'react';

const HomePhysioSessionFlow = ({
  bgColor = "bg-[#FFFFFF]",
  label = "HOW IT WORKS",
  title = "What happens during a home physiotherapy session.",
  steps = [],
  image = "",
  alt = "Session flow image"
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

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="p-6 bg-[#f5f1e8] rounded-xl">
                <div className="text-[#d4af37] text-sm font-bold mb-2">
                  Step {index + 1}: {step.step}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="sticky top-24">
            <div className="bg-gray-200 rounded-xl h-[500px] flex items-center justify-center overflow-hidden">
              {image ? (
                <img 
                  src={image} 
                  alt={alt} 
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <span className="text-gray-500 text-center px-4">
                  Session Flow Image
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePhysioSessionFlow;
