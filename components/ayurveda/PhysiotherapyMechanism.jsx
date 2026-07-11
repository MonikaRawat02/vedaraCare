import React from 'react';

const PhysiotherapyMechanism = ({
  bgColor = "bg-[#f9f7f3]",
  label = "THE DUBAI CONTEXT",
  title = "What you should know about physiotherapy in Dubai before choosing.",
  content = [],
  quote = "",
  image = "",
  alt = "Specialised Treatment Room Image",
  imagePlaceholder = "Specialised Treatment Room Image"
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
          <div className="space-y-6 text-gray-700 leading-relaxed">
            {content.map((paragraph, index) => (
              <p 
                key={index}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
            {quote && (
              <blockquote className="text-2xl font-serif italic text-[#d4af37] my-8 pl-6 border-l-4 border-[#d4af37]">
                "{quote}"
              </blockquote>
            )}
          </div>
          <div className="bg-gray-200 rounded-xl sticky top-24 h-[600px] flex items-center justify-center shrink-0">
            {image ? (
              <img 
                src={image} 
                alt={alt} 
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <span className="text-gray-500">
                {imagePlaceholder}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhysiotherapyMechanism;
