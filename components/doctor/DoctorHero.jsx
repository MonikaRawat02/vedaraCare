import React from 'react';
import Link from 'next/link';

const DoctorHero = ({ doctor }) => {
  return (
    <section className="py-0" style={{ backgroundColor: 'rgb(250, 246, 239)' }}>
      {/* Breadcrumb - Exact as requested */}
      <div className="bg-white border-b" style={{ borderColor: 'rgb(229, 223, 211)' }}>
        <div className="max-w-[1280px] mx-auto px-6 h-12 flex items-center gap-2 " style={{ fontSize: '13px', color: 'rgb(107, 107, 107)' }}>
          <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
          <span className="opacity-35">/</span>
          <Link href="/doctors" className="hover:opacity-70 transition-opacity">Doctors</Link>
          <span className="opacity-35">/</span>
          <span style={{ color: 'rgb(26, 26, 26)' }}>{doctor.name}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-6 py-8 m-21">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start md:items-center">
          {/* Doctor Image Container */}
          <div className="w-full md:w-[45%] flex-shrink-0">
            <div className="relative rounded-[8px] overflow-hidden" style={{ aspectRatio: '4 / 5', backgroundColor: 'rgb(228, 216, 200)' }}>
              {/* Image placeholder - you will add your image here */}
              <img
                src={doctor.image}
                alt="Dr. Priya Nair, Ayurvedic Physician at Vedara Care Polyclinic, JVC Dubai"
                className="w-full h-full object-cover"
              />
              
              {/* Bottom Info Card */}
              <div className="absolute bottom-0 left-0 right-0 m-4 p-4 rounded-[8px]" style={{ backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.13) 0px 4px 28px' }}>
                <p className="text-[11px] font-bold tracking-[0.13em] uppercase mb-1" style={{ color: 'rgb(201, 169, 97)' }}>
                  DHA-LICENSED • BAMS • MD (AYURVEDA)
                </p>
                <p className="text-[13px]" style={{ color: 'rgb(26, 26, 26)' }}>
                  15+ years • 5,000+ patients • License DHA-P-0048291
                </p>
              </div>
            </div>
          </div>

          {/* Doctor Info */}
          <div className="md:w-[55%] flex flex-col gap-6">
            <div>
              <p className="text-[13px] font-semibold tracking-[0.14em] uppercase mb-4" style={{ color: 'rgb(201, 169, 97)' }}>
                AYURVEDIC PHYSICIAN AT VEDARA CARE POLYCLINIC, JVC
              </p>
              <h1 className="mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(42px, 5vw, 60px)', fontWeight: '500', color: 'rgb(26, 26, 26)', lineHeight: '1.05' }}>
                {doctor.name}
              </h1>
              <p className="mb-5" style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '21px', fontStyle: 'italic', color: 'rgb(201, 169, 97)', fontWeight: '400' }}>
                {doctor.title}
              </p>
              <p className="leading-[1.8]" style={{ fontSize: '17px', color: 'rgb(107, 107, 107)', maxWidth: '480px' }}>
                Dr. Nair leads the Ayurveda department at Vedara Care Polyclinic in Jumeirah Village Circle. With over fifteen years of clinical practice — including eight years in Kerala's leading Ayurvedic hospitals and seven years serving Dubai patients — she is known for treating chronic conditions where conventional care has plateaued. Her approach is precise, evidence-aware, and unhurried.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-[14px] font-medium transition-opacity hover:opacity-90 active:scale-[0.98]"
                style={{ background: 'rgb(31, 69, 56)', color: 'rgb(255, 255, 255)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                Book a Consultation
              </Link>
              <a
                href="https://wa.me/971XXXXXXXX"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-[14px] font-medium transition-opacity hover:opacity-90 active:scale-[0.98]"
                style={{ background: 'rgb(74, 124, 89)', color: 'rgb(255, 255, 255)' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 border-t" style={{ borderColor: 'rgb(229, 223, 211)' }}>
              <div className="flex items-center gap-2 text-[13px]" style={{ color: 'rgb(107, 107, 107)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgb(201, 169, 97)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                DHA-Licensed Practitioner
              </div>
              <div className="flex items-center gap-2 text-[13px]" style={{ color: 'rgb(107, 107, 107)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgb(201, 169, 97)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                45-60 Min First Consultations
              </div>
              <div className="flex items-center gap-2 text-[13px]" style={{ color: 'rgb(107, 107, 107)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgb(201, 169, 97)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                Speaks English, Hindi, Malayalam, Arabic
              </div>
              <div className="flex items-center gap-2 text-[13px]" style={{ color: 'rgb(107, 107, 107)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgb(201, 169, 97)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                Insurance Direct Billing Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorHero;
