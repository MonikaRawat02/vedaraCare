import React from 'react';

const PhysiotherapyImageCards = ({ label, title, cards }) => {
  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-[#d4af37] text-sm tracking-wider mb-4">{label}</div>
          <h2 className="text-4xl font-serif">{title}</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="rounded-xl overflow-hidden bg-[#F5F1E8]">
              <div className="bg-gray-200 aspect-square flex items-center justify-center">
                <p className="text-gray-500">{card.alt}</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-[#1A1A1A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#6B6B6B]">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhysiotherapyImageCards;
