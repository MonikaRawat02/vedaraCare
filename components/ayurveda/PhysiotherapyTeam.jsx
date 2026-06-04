import React from 'react';

const PhysiotherapyTeam = ({ label, title, team }) => {
  return (
    <section className="bg-white px-6 md:px-24 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-[#C4A962] text-sm font-semibold tracking-wider">{label}</div>
          <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500 }}>{title}</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {team.map((member, index) => (
            <div key={index} className="bg-[#FAF8F5] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.alt || member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-3">
                <h4 className="text-xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500 }}>{member.name}</h4>
                <div className="text-xs text-[#C4A962] font-semibold">{member.qualification}</div>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, idx) => (
                    <span key={idx} className="text-xs bg-white px-3 py-1 rounded-full text-[#6B7280] border border-gray-200">
                      {specialty}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-[#6B7280] line-clamp-2">{member.experience}</p>
                <button className="text-sm text-[#C4A962] hover:text-[#030213] transition-colors font-medium">
                  View profile →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="text-[#C4A962] hover:text-[#030213] transition-colors font-medium">
            Meet the full team →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhysiotherapyTeam;
