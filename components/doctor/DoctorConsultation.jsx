import React from 'react';
import Link from 'next/link';

const DoctorConsultation = ({ 
  doctor, 
  title, 
  subtitle, 
  steps,
  label = "YOUR FIRST VISIT",
  footer
}) => {
  const displayTitle = title || `A consultation with ${doctor?.firstName} is unlike any you have had.`;
  const displaySteps = steps || doctor?.consultationSteps || [];
  const defaultFooter = (
    <>
      First consultation: 45 to 60 minutes • From AED 350 • Insurance direct-billing available • <Link href="/treatments/panchakarma-dubai" className="hover:opacity-70 transition-opacity" style={{ color: 'rgb(201, 169, 97)' }}>Panchakarma</Link> programmes available
    </>
  );

  return (
    <section className="py-24" style={{ backgroundColor: 'rgb(250, 246, 239)' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[13px] font-sans font-semibold tracking-[0.1em] uppercase block mb-4" style={{ color: 'rgb(201, 169, 97)' }}>
            {label}
          </span>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '42px', fontWeight: '500', color: 'rgb(26, 26, 26)', lineHeight: '1.2' }}>
            {displayTitle}
          </h2>
          {subtitle && (
            <p className="mt-6 text-[18px] font-sans max-w-[700px] mx-auto leading-relaxed" style={{ color: 'rgb(74, 74, 74)' }}>
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displaySteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-[64px] font-serif font-medium mb-4" style={{ color: 'rgba(201, 169, 97, 0.2)' }}>
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '18px', fontWeight: '500', color: 'rgb(26, 26, 26)', marginBottom: '16px' }}>
                {step.title}
              </h3>
              <p className="text-[14px] font-sans leading-relaxed" style={{ color: 'rgb(74, 74, 74)' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[13px] font-sans" style={{ color: 'rgb(107, 107, 107)' }}>
            {footer || defaultFooter}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DoctorConsultation;
