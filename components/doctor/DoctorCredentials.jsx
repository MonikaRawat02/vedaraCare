import React from 'react';

const DoctorCredentials = ({ doctor }) => {
  return (
    <section className="bg-[#F6F1EA] py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[13px] font-sans font-semibold tracking-[0.1em] text-[#C9A961] uppercase block mb-4">
            QUALIFICATIONS, LICENSES, AFFILIATIONS
          </span>
          <h2 className="text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2] mb-6">
            Credentials, in full.
          </h2>
          <p className="text-[15px] font-sans text-[#6B6B6B] max-w-2xl mx-auto">
            We publish every qualification and license number because in healthcare, accountability is not optional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Education */}
          <div className="bg-white p-8 rounded-lg border border-[#E5E5E5]">
            <div className="w-12 h-12 bg-[#F6F1EA] rounded-lg flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
              </svg>
            </div>
            <h3 className="text-[18px] font-serif font-medium text-[#1A1A1A] mb-6">Education</h3>
            <ul className="space-y-4">
              {doctor.education.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#C9A961] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[14px] font-sans text-[#4A4A4A]">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Licenses */}
          <div className="bg-white p-8 rounded-lg border border-[#E5E5E5]">
            <div className="w-12 h-12 bg-[#F6F1EA] rounded-lg flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 className="text-[18px] font-serif font-medium text-[#1A1A1A] mb-6">Licenses & Registrations</h3>
            <ul className="space-y-4">
              {doctor.licenses.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#C9A961] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[14px] font-sans text-[#4A4A4A]">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Affiliations */}
          <div className="bg-white p-8 rounded-lg border border-[#E5E5E5]">
            <div className="w-12 h-12 bg-[#F6F1EA] rounded-lg flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 className="text-[18px] font-serif font-medium text-[#1A1A1A] mb-6">Professional Affiliations</h3>
            <ul className="space-y-4">
              {doctor.affiliations.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#C9A961] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[14px] font-sans text-[#4A4A4A]">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorCredentials;
