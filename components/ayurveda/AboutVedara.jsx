import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutVedara = ({
  label = "ABOUT VEDARA CARE",
  title = "A DHA-licensed Ayurveda practice in Jumeirah Village Circle, Dubai.",
  description = "Vedara Care Polyclinic is a DHA-licensed holistic healthcare clinic in JVC, Dubai, with Ayurveda at its centre. Our BAMS-qualified Ayurvedic physicians practise classical Ayurveda — pulse diagnosis, dosha assessment, classical Panchakarma, and constitution-based herbal medicine — alongside modern physiotherapy and dermatology. Patients come to us from across Dubai for chronic conditions where conventional care has plateaued.",
  stats = [
    { value: "15+", label: "DHA-Licensed Practitioners" },
    { value: "5,000+", label: "Patients Treated" },
    { value: "20+", label: "Treatment Protocols" }
  ],
  image = "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop",
  primaryCTA = "Visit Our JVC Clinic",
  secondaryCTA = "Meet Our Doctors"
}) => {
  return (
    <section className="bg-[#184C3A] py-24 px-6 text-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-[60fr_40fr] gap-12 lg:gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <p className="text-[13px] font-sans font-semibold tracking-[0.12em] text-[#C9A961] uppercase">
                {label}
              </p>
              <h2 className="text-[clamp(28px,4vw,48px)] font-serif font-medium leading-[1.1] text-white">
                {title}
              </h2>
              <p className="text-[16px] leading-[1.7] text-white/80 font-sans max-w-[600px]">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-[24px] font-serif font-semibold text-[#C9A961]">
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-sans text-white/60  tracking-wider leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/ayurveda-clinic-jvc"
                className="bg-[#C9A961] text-[#184C3A] px-8 py-4 rounded-[4px] font-sans font-semibold text-[14px] hover:bg-[#B89850] transition-colors"
              >
                {primaryCTA} →
              </Link>
              <Link
                href="/doctors"
                className="border border-white/20 text-white px-8 py-4 rounded-[4px] font-sans font-semibold text-[14px] hover:bg-white/5 transition-colors"
              >
                {secondaryCTA}
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-[12px] overflow-hidden">
            <Image
              src={image}
              alt="Vedara Care Polyclinic interior"
              fill
              className="object-cover opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVedara;
