import React from 'react';
import Link from 'next/link';

const PhysiotherapyTeam = ({ label, title, description, team = [], members = [], bgColor = "bg-white", gridColumns = "lg:grid-cols-4" }) => {
  // Helper function to create a slug from the name
  const createSlug = (name) => {
    return name.toLowerCase().replace(/[.,]/g, '').replace(/\s+/g, '-');
  };

  // Use either team or members prop
  const displayTeam = team.length > 0 ? team : members;

  return (
    <section className={`${bgColor} px-6 md:px-24 py-24`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-7xl mx-auto mb-16 space-y-4">
          {label && <div className="text-[#C4A962] text-xs font-semibold tracking-[0.2em] uppercase">{label}</div>}
          {title && <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: '#1A1A1A' }}>{title}</h2>}
          {description && <p className="text-[15px] text-[#6B6B6B] font-sans leading-relaxed max-w-3xl mx-auto">{description}</p>}
        </div>
        
        <div className={`grid md:grid-cols-2 ${gridColumns} gap-6 mb-8`}>
          {displayTeam.map((member, index) => {
            const slug = createSlug(member.name);
            return (
              <div key={index} className="bg-[#FAF8F5] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
                <div className="aspect-[5/5] bg-gray-100 overflow-hidden">
                  {member.image && (
                    <img 
                      src={member.image} 
                      alt={member.alt || `${member.name} physiotherapist at Vedara Care JVC Dubai`} 
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-4 space-y-3 flex flex-col flex-grow">
                  <h4 className="text-lg" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: '#1A1A1A' }}>{member.name}</h4>
                  <div className="text-xs text-[#C4A962] font-semibold tracking-wider uppercase">
                    {member.qualification || member.credentials || member.role}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(member.specialties || member.tags || []).map((specialty, idx) => (
                      <span key={idx} className="text-xs bg-white px-3 py-1 rounded-full text-[#6B7280] border border-[#E5DFD3]">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-[#6B7280]" style={{ lineHeight: '1.6' }}>
                    {member.experience || member.description}
                  </p>
                  {member.languages && member.languages.length > 0 && (
                    <div className="space-y-1">
                      <div className="text-xs text-[#6B7280] uppercase tracking-[0.15em] font-semibold">Languages spoken</div>
                      <div className="text-sm text-[#1A1A14]">
                        {Array.isArray(member.languages) ? member.languages.join(", ") : member.languages}
                      </div>
                    </div>
                  )}
                  <div className="mt-auto pt-2">
                    {member.link ? (
                      <Link 
                        href={member.link}
                        className="text-sm text-[#C4A962] hover:text-[#1A1A1A] transition-colors font-medium inline-block"
                      >
                        View profile →
                      </Link>
                    ) : (
                      <Link 
                        href={`/physiotherapists/${slug}/`}
                        className="text-sm text-[#C4A962] hover:text-[#1A1A1A] transition-colors font-medium inline-block"
                      >
                        View profile →
                      </Link>
                    )}
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
