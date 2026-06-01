import React from 'react';
import { Check } from 'lucide-react';

const TreatmentBenefits = ({
  bgColor = "bg-[#EDE8DE]",
  label = "PATIENTS WHO BENEFIT MOST",
  title = "Three groups for whom this therapy is genuinely transformative.",
  benefitGroups = [],
  footer = ""
}) => {
  return (
    <section className={`${bgColor} py-24`} style={{ backgroundColor: 'rgb(237, 232, 222)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p 
            className="text-xs font-semibold tracking-[0.18em] uppercase mb-4"
            style={{ 
              color: 'rgb(184, 145, 90)', 
              fontFamily: '"DM Sans", sans-serif' 
            }}
          >
            {label}
          </p>
          <h2 
            className=""
            style={{ 
              fontFamily: 'Fraunces, serif', 
              fontWeight: '500', 
              fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', 
              color: 'rgb(28, 28, 26)', 
              lineHeight: '1.25' 
            }}
          >
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefitGroups.map((group, index) => (
            <div 
              key={index} 
              className="rounded-xl p-8 flex flex-col"
              style={{ 
                background: 'rgb(255, 255, 255)', 
                borderTop: '4px solid rgb(184, 145, 90)' 
              }}
            >
              <h3 
                className="mb-4"
                style={{ 
                  fontFamily: 'Fraunces, serif', 
                  fontWeight: '500', 
                  fontSize: '1.1rem', 
                  color: 'rgb(28, 28, 26)' 
                }}
              >
                {group.title}
              </h3>
              
              <p 
                className="text-sm leading-[1.85] mb-5 flex-1"
                style={{ color: 'rgb(74, 67, 60)' }}
                dangerouslySetInnerHTML={{ __html: group.description }}
              />
              
              <ul className="space-y-2">
                {group.benefits.map((benefit, benefitIndex) => (
                  <li 
                    key={benefitIndex} 
                    className="flex items-start gap-2.5 text-sm"
                    style={{ color: 'rgb(74, 67, 60)' }}
                  >
                    <Check 
                      size={13} 
                      className="mt-0.5 shrink-0"
                      style={{ color: 'rgb(184, 145, 90)' }}
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {footer && (
          <div className="mt-10">
            <p 
              className="text-center max-w-2xl mx-auto leading-relaxed"
              style={{ color: 'rgb(107, 114, 128)' }}
            >
              {footer}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TreatmentBenefits;
