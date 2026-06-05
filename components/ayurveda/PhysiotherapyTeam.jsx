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
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-[#C4A962] text-sm font-semibold tracking-wider">{label}</div>
          <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500 }}>{title}</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {team.map((member, index) => {
            const slug = createSlug(member.name);
            return (
              <div key={index} className="bg-[#FAF8F5] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.alt || `${member.name} sports physiotherapist at Vedara Care JVC Dubai`} 
                    className="w-full h-full object-cover"
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
                  <Link 
                    href={`/physiotherapists/${slug}/`}
                    className="text-sm text-[#C4A962] hover:text-[#030213] transition-colors font-medium inline-block"
                  >
                    View profile →
                  </Link>
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
