import React from 'react';

const ServicePillars = ({ data }) => {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'rgb(240, 234, 224)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3 text-center" style={{ color: 'rgb(176, 141, 87)' }}>
            {data.label}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal leading-[1.15] text-[#1A1A1A] text-center">
            {data.title}
          </h2>
          <p className="text-[#6B6B6B] text-lg leading-relaxed mt-4 text-center mx-auto max-w-[720px]">
            {data.description}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.services.map((service, index) => (
            <a key={index} href={service.href} className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 group block border border-[#E5DFD3]/50">
              <h3 className="font-serif text-xl font-normal text-[#1A1A1A] group-hover:text-[#B08D57] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-[#6B6B6B] mt-3 leading-relaxed">
                {service.description}
              </p>
              <p className="text-sm font-semibold mt-5 flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: 'rgb(176, 141, 87)' }}>
                Explore
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePillars;
