import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { drPriyaNair } from '../../data/doctorData';

const practitioners = [
  {
    name: 'Dr. Priya Nair',
    specialty: 'Senior Ayurvedic Physician',
    focus: 'Chronic Pain, PCOS, Migraine',
    image: drPriyaNair.image,
    alt: drPriyaNair.alt,
    slug: 'dr-priya-nair-ayurveda'
  },
  {
    name: 'Dr. Meera Krishnan',
    specialty: 'Senior Ayurvedic Physician',
    focus: 'Panchakarma & Detox',
    image: '/images/dr-meera-krishnan-ayurvedic-physician-jvc-dubai.webp',
    alt: 'Dr. Meera Krishnan, BAMS-qualified DHA-licensed Ayurvedic physician at Vedara Care Polyclinic, JVC Dubai',
    slug: 'dr-meera-krishnan-ayurveda'
  },
  {
    name: 'Dr. James Okafor',
    specialty: 'Lead Physiotherapist',
    focus: 'Sports Rehabilitation',
    image: '/images/dr-james-okafor-physiotherapist-jvc-dubai.webp',
    alt: 'Dr. James Okafor, DHA-licensed physiotherapist at Vedara Care Polyclinic, JVC Dubai',
    slug: 'dr-james-okafor-physiotherapy'
  },
  {
    name: 'Dr. Layla Al Rashid',
    specialty: 'Consultant Dermatologist',
    focus: 'Integrative Dermatology',
    image: '/images/dr-layla-al-rashid-dermatologist-jvc-dubai.webp',
    alt: 'Dr. Layla Al Rashid, DHA-licensed consultant dermatologist at Vedara Care Polyclinic, JVC Dubai',
    slug: 'dr-layla-al-rashid-dermatology'
  }
];

export default function DoctorsPage() {
  return (
    <>
      <Head>
        <title>Our Doctors | Vedara Care Polyclinic</title>
        <meta name="description" content="Meet our team of DHA-licensed doctors at Vedara Care Polyclinic in JVC, Dubai. Ayurveda, physiotherapy, dermatology, and wellness specialists." />
      </Head>

      <section className="py-24" style={{ backgroundColor: 'rgb(240, 233, 221)' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[13px] font-sans font-semibold tracking-[0.1em] uppercase block mb-4" style={{ color: 'rgb(201, 169, 97)' }}>
              OUR TEAM
            </span>
            <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: '500', color: 'rgb(26, 26, 26)', lineHeight: '1.2', marginBottom: '24px' }}>
              Meet Our Doctors
            </h1>
            <p className="text-[16px] font-sans max-w-2xl mx-auto" style={{ color: 'rgb(107, 107, 107)' }}>
              DHA-licensed healthcare professionals with years of experience in their specialties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
    </>
  );
}
