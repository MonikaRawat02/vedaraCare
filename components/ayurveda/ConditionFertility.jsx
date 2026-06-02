import React from 'react';

const ConditionFertility = ({
  bgColor = "bg-[#2D5F4F]",
  label = "",
  title = "",
  description = "",
  image,
  imageAlt,
  paragraphs = [],
  buttonText = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`} style={{ backgroundColor: 'rgb(45, 95, 79)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-sm uppercase tracking-wider mb-4" style={{ color: 'rgb(201, 169, 97)' }} dangerouslySetInnerHTML={{ __html: label }} />
          <h2 className="text-white" style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', fontWeight: 500 }} dangerouslySetInnerHTML={{ __html: title }} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-4 text-lg leading-relaxed" style={{ color: 'rgb(250, 248, 245)' }}>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className={index === 0 ? "text-xl" : ""} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
            
            {buttonText && (
              <button className="mt-6 px-8 py-4 rounded-lg font-medium transition hover:opacity-90" style={{ backgroundColor: 'transparent', color: 'rgb(201, 169, 97)', border: '2px solid rgb(201, 169, 97)' }}>
                <span dangerouslySetInnerHTML={{ __html: buttonText }} />
              </button>
            )}
          </div>
          
          <div className="lg:col-span-2">
            <div className="rounded-xl overflow-hidden h-[500px] flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
              {image ? (
                <img 
                  src={image} 
                  alt={imageAlt || ""} 
                  className="w-full h-full object-cover" 
                />
              ) : (
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>
                  [Editorial photograph: Dubai woman in mid-30s in soft lighting]
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConditionFertility;
