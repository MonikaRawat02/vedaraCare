import React from 'react';
import Link from 'next/link';

const DoctorOtherPractitioners = () => {
  const practitioners = [
    {
      name: 'Dr. Meera Krishnan',
      specialty: 'Senior Ayurvedic Physician',
      focus: 'Panchakarma & Detox',
      image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=480&h=360&fit=crop&auto=format',
      alt: 'Dr. Meera Krishnan',
      slug: 'dr-meera-krishnan-ayurveda'
    },
    {
      name: 'Dr. James Okafor',
      specialty: 'Lead Physiotherapist',
      focus: 'Sports Rehabilitation',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=480&h=360&fit=crop&auto=format',
      alt: 'Dr. James Okafor',
      slug: 'dr-james-okafor-physiotherapy'
    },
    {
      name: 'Dr. Layla Al Rashid',
      specialty: 'Consultant Dermatologist',
      focus: 'Integrative Dermatology',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=480&h=360&fit=crop&auto=format',
      alt: 'Dr. Layla Al Rashid',
      slug: 'dr-layla-al-rashid-dermatology'
    }
  ];

  return (
    <section className="py-24" style={{ background: 'rgb(240, 233, 221)' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[13px] font-semibold tracking-[0.14em] uppercase mb-4" style={{ color: 'rgb(201, 169, 97)' }}>
              OTHER PRACTITIONERS
            </p>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '500', color: 'rgb(26, 26, 26)' }}>
              Our clinical team.
            </h2>
          </div>
          <Link
            href="/doctors"
            className="text-[14px] font-medium flex items-center gap-1 transition-opacity hover:opacity-70"
            style={{ color: 'rgb(201, 169, 97)' }}
          >
            View all doctors
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {practitioners.map((doc, index) => (
            <Link
              key={index}
              href={`/doctors/${doc.slug}`}
              className="rounded-[8px] overflow-hidden cursor-pointer group"
              style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(229, 223, 211)' }}
            >
              <div className="overflow-hidden" style={{ aspectRatio: '4 / 3', background: 'rgb(228, 216, 200)' }}>
                <img
                  src={doc.image}
                  alt={doc.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="font-semibold text-[16px] mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26, 26, 26)' }}>
                  {doc.name}
                </p>
                <p className="text-[13px] mb-0.5" style={{ color: 'rgb(31, 69, 56)' }}>
                  {doc.specialty}
                </p>
                <p className="text-[13px]" style={{ color: 'rgb(107, 107, 107)' }}>
                  {doc.focus}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorOtherPractitioners;
