import React from 'react';
import Link from 'next/link';

const DoctorCredentials = ({ doctor }) => {
  return (
    <section className="py-24" style={{ backgroundColor: 'rgb(250, 246, 239)' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[13px] font-sans font-semibold tracking-[0.1em] uppercase block mb-4" style={{ color: 'rgb(201, 169, 97)' }}>
            QUALIFICATIONS, LICENSES, AFFILIATIONS
          </span>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '42px', fontWeight: '500', color: 'rgb(26, 26, 26)', lineHeight: '1.2', marginBottom: '24px' }}>
            Credentials, in full.
          </h2>
          <p className="text-[15px] font-sans max-w-2xl mx-auto" style={{ color: 'rgb(107, 107, 107)' }}>
            We publish every qualification and license number because in healthcare, accountability is not optional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Education */}
          <div className="rounded-[8px] p-8" style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(229, 223, 211)' }}>
            <div className="w-12 h-12 rounded-[8px] flex items-center justify-center mb-6" style={{ backgroundColor: 'rgb(250, 246, 239)' }} role="img" aria-label={`Education credentials icon — ${doctor.name} Ayurvedic doctor`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(201, 169, 97)" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
              </svg>
            </div>
            <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '18px', fontWeight: '500', color: 'rgb(26, 26, 26)', marginBottom: '24px' }}>Education</h3>
            <ul className="space-y-4">
              {doctor.education.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'rgb(201, 169, 97)' }}></div>
                  <p className="text-[14px] font-sans" style={{ color: 'rgb(74, 74, 74)' }}>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Licenses */}
          <div className="rounded-[8px] p-8" style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(229, 223, 211)' }}>
            <div className="w-12 h-12 rounded-[8px] flex items-center justify-center mb-6" style={{ backgroundColor: 'rgb(250, 246, 239)' }} role="img" aria-label="DHA license credentials icon — Vedara Care JVC">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(201, 169, 97)" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '18px', fontWeight: '500', color: 'rgb(26, 26, 26)', marginBottom: '24px' }}>Licenses & Registrations</h3>
            <ul className="space-y-4">
              {doctor.licenses.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'rgb(201, 169, 97)' }}></div>
                  <p className="text-[14px] font-sans" style={{ color: 'rgb(74, 74, 74)' }}>{item}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[13px] font-sans" style={{ color: 'rgb(107, 107, 107)' }}>
              <Link href="/about/dha-accreditation" className="hover:opacity-70 transition-opacity" style={{ color: 'rgb(201, 169, 97)' }}>
                DHA Healthcare Facility License
              </Link>
            </p>
          </div>

          {/* Affiliations */}
          <div className="rounded-[8px] p-8" style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(229, 223, 211)' }}>
            <div className="w-12 h-12 rounded-[8px] flex items-center justify-center mb-6" style={{ backgroundColor: 'rgb(250, 246, 239)' }} role="img" aria-label="Professional affiliations icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(201, 169, 97)" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '18px', fontWeight: '500', color: 'rgb(26, 26, 26)', marginBottom: '24px' }}>Professional Affiliations</h3>
            <ul className="space-y-4">
              {doctor.affiliations.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'rgb(201, 169, 97)' }}></div>
                  <p className="text-[14px] font-sans" style={{ color: 'rgb(74, 74, 74)' }}>{item}</p>
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
