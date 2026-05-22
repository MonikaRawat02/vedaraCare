import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function DoctorsPage() {
  return (
    <>
      <Head>
        <title>Our Doctors | Vedara Care Polyclinic</title>
        <meta name="description" content="Meet our team of DHA-licensed doctors at Vedara Care Polyclinic in JVC, Dubai. Ayurveda, physiotherapy, dermatology, and wellness specialists." />
      </Head>

      <section className="bg-[#F6F1EA] py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[13px] font-sans font-semibold tracking-[0.1em] text-[#C9A961] uppercase block mb-4">
              OUR TEAM
            </span>
            <h1 className="text-[48px] font-serif font-medium text-[#1A1A1A] leading-[1.2] mb-6">
              Meet Our Doctors
            </h1>
            <p className="text-[16px] font-sans text-[#6B6B6B] max-w-2xl mx-auto">
              DHA-licensed healthcare professionals with years of experience in their specialties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href="/doctors/dr-priya-nair-ayurveda"
              className="bg-white p-8 rounded-lg border border-[#E5E5E5] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-full h-64 bg-[#F6F1EA] rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-[#C9A961]/20 rounded-full mx-auto mb-4"></div>
                  <p className="text-[14px] font-sans text-[#6B6B6B]">Doctor Image</p>
                </div>
              </div>
              <h3 className="text-[22px] font-serif font-medium text-[#1A1A1A] mb-2">Dr. Priya Nair</h3>
              <p className="text-[14px] font-sans text-[#C9A961] mb-4">BAMS, MD (Ayurveda)</p>
              <p className="text-[14px] font-sans text-[#4A4A4A] leading-relaxed mb-4">
                Classical Ayurveda specialist with 15+ years experience treating chronic pain, PCOS, migraine, and stress-related disorders.
              </p>
              <span className="text-[#184C3A] font-sans font-medium text-[14px] group-hover:underline">
                View Profile →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
