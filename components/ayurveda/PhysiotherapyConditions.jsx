import React from 'react';
import Link from 'next/link';

const PhysiotherapyConditions = ({
  bgColor = "bg-[#FFFFFF]",
  label = "CONDITIONS",
  title = "Specific conditions treated across Dubai patient populations.",
  conditions = [],
  footerText = "",
  footerLink = "/"
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-[#C9A55A] text-sm font-medium tracking-wider uppercase mb-4">
            {label}
          </div>
          <h2 className="text-4xl font-serif text-[#1A1A1A]">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {conditions.map((condition, index) => (
            condition.link ? (
              <Link key={index} href={condition.link} className="block">
                <div className="bg-[#F5F1E8] p-6 rounded-xl border-l-4 border-[#C9A55A] h-full hover:shadow-md transition-all cursor-pointer">
                  <h3 className="text-lg font-medium text-[#1A1A1A] mb-2" style={{ color: '#1A1A1A !important' }}>
                    {condition.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B]" style={{ color: '#6B6B6B !important' }}>
                    {condition.description}
                  </p>
                  {condition.link && (
                    <p className="text-xs text-[#C9A55A] mt-3" style={{ color: '#C9A55A !important' }}>
                      Learn more →
                    </p>
                  )}
                </div>
              </Link>
            ) : (
              <div key={index} className="bg-[#F5F1E8] p-6 rounded-xl border-l-4 border-[#C9A55A] h-full">
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">
                  {condition.title}
                </h3>
                <p className="text-sm text-[#6B6B6B]">
                  {condition.description}
                </p>
              </div>
            )
          ))}
        </div>

        {footerText && (
          <div className="text-center">
            <Link href={footerLink} className="text-[#C9A55A] text-sm font-medium tracking-wider uppercase" style={{ color: '#C9A55A !important' }}>
              {footerText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhysiotherapyConditions;
