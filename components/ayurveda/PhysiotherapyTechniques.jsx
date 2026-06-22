import React from 'react';

const PhysiotherapyTechniques = ({
  bgColor = "bg-white",
  label = "TECHNIQUES",
  title = "",
  techniques = [],
  image = "",
  imageAlt = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[#C4A962] text-sm font-semibold tracking-wider mb-3">
            {label}
          </div>
          <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'Fraunces, serif' }}>
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {techniques.map((technique, index) => (
              <div key={index}>
                <h3 className="text-lg font-medium mb-2" style={{ fontFamily: 'Fraunces, serif' }} dangerouslySetInnerHTML={{ __html: technique.title }}>
                </h3>
                <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: technique.description }}>
                </p>
              </div>
            ))}
          </div>

          <div>
            {image && (
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-[500px] object-cover rounded-xl shadow-lg"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhysiotherapyTechniques;
