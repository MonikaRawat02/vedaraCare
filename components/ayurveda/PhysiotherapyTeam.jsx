import React from 'react';
import Link from 'next/link';

const PhysiotherapyTeam = ({ label, title, team }) => {
  // Helper function to create a slug from the name
  const createSlug = (name) => {
    return name.toLowerCase().replace(/[.,]/g, '').replace(/\s+/g, '-');
  };

  return (
    <section className="bg-white px-6 md:px-24 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-7xl mx-auto mb-16 space-y-4">
          <div className="text-[#C4A962] text-xs font-semibold tracking-[0.2em] uppercase">{label}</div>
          <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: '#1A1A1A' }}>{title}</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {team.map((member, index) => {
            const slug = createSlug(member.name);
            return (
              <div key={index} className="bg-[#FAF8F5] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
                <div className="aspect-[5/5] bg-gray-100 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.alt || `${member.name} sports physiotherapist at Vedara Care JVC Dubai`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-3 flex flex-col flex-grow">
                  <h4 className="text-lg" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: '#1A1A1A' }}>{member.name}</h4>
                  <div className="text-xs text-[#C4A962] font-semibold tracking-wider uppercase">{member.qualification}</div>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span key={idx} className="text-xs bg-white px-3 py-1 rounded-full text-[#6B7280] border border-[#E5DFD3]">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-[#6B7280]" style={{ lineHeight: '1.6' }}>{member.experience}</p>
                  {member.languages && member.languages.length > 0 && (
                    <div className="space-y-1">
                      <div className="text-xs text-[#6B7280] uppercase tracking-[0.15em] font-semibold">Languages spoken</div>
                      <div className="text-sm text-[#1A1A14]">
                        {member.languages.join(", ")}
                      </div>
                    </div>
                  )}
                  <div className="mt-auto pt-2">
                    <Link 
                      href={`/physiotherapists/${slug}/`}
                      className="text-sm text-[#C4A962] hover:text-[#1A1A1A] transition-colors font-medium inline-block"
                    >
                      View profile →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
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
