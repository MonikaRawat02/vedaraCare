import React from 'react';
import Link from 'next/link';

const PhysiotherapyTeam = ({ label, title, description, team }) => {
  // Helper function to create a slug from the name
  const createSlug = (name) => {
    return name.toLowerCase().replace(/[.,]/g, '').replace(/\s+/g, '-');
  };

  return (
    <section className="bg-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.18em] font-semibold text-[#B8933F] uppercase">
            {label}
          </span>
          <h2 className="mt-3 text-[clamp(1.8rem,3.5vw,2.6rem)] text-[#1C1814] leading-tight" style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}>
            {title}
          </h2>
          {description && (
            <p className="text-[#6B635A] text-base max-w-2xl mx-auto mt-6 leading-relaxed">
              {description}
            </p>
          )}
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
       
          {team.map((member, index) => {
            const slug = createSlug(member.name);
            return (
              <div key={index} className="bg-[#F7F2EA] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.alt || `${member.name} sports physiotherapist at Vedara Care JVC Dubai`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-7 space-y-3">
                  <h4 className="text-[1.25rem]" style={{ fontFamily: 'var(--font-display)', fontWeight: 500, color: '#1C1814' }}>
                    {member.name}
                  </h4>
                  <div className="text-xs text-[#B8933F] font-semibold">
                    {member.qualification}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span key={idx} className="text-xs bg-white px-3 py-1 rounded-full text-[#6B635A] border border-gray-100">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-[#6B635A]">
                    {member.experience}
                  </p>
                
                  <Link 
                    href={`/physiotherapists/${slug}/`}
                    className="text-sm text-[#B8933F] hover:text-[#1E4D3A] transition-colors font-medium inline-block"
                  >
                    View profile →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <button className="text-[#B8933F] hover:text-[#1E4D3A] transition-colors font-medium">
            Meet the full team →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhysiotherapyTeam;
