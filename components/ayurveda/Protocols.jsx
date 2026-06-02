import React from 'react';
import { Check } from 'lucide-react';

const TreatmentProtocol = ({
  bgColor = "bg-[#FAF8F3]",
  label = "A TYPICAL PROTOCOL",
  title = "",
  subtitle = "",
  steps = [],
  footer = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="text-sm tracking-wider text-[#C9A961] uppercase font-sans" dangerouslySetInnerHTML={{ __html: label }} />
          <h2 className="text-4xl font-serif text-[#1A1A1A] leading-tight mx-auto" dangerouslySetInnerHTML={{ __html: title }} />
          {subtitle && (
            <p className="text-[#717182] max-w-[720px] mx-auto text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: subtitle }} />
          )}
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm flex flex-col md:flex-row gap-6 items-start relative">
              {/* Week Number Circle */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C9A961]/80 text-white flex items-center justify-center font-serif text-2xl font-medium">
                {index + 1}
              </div>

              <div className="flex-grow pt-1">
                <div className="mb-4">
                  <div className="text-sm font-medium text-[#C9A961] uppercase tracking-widest mb-1" dangerouslySetInnerHTML={{ __html: step.week }} />
                  <h3 className="text-2xl font-serif text-[#1A1A1A]" dangerouslySetInnerHTML={{ __html: step.title }} />
                </div>

                <ul className="space-y-2 mb-4">
                  {step.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="w-5 h-5 text-[#C9A961] mt-0.5 shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>

                {step.expected && (
                  <div className="bg-[#FAF8F3] p-4 rounded-lg">
                    <div className="text-sm font-medium text-[#1A1A1A] mb-1" dangerouslySetInnerHTML={{ __html: step.expected.split(':')[0] + ":" }} />
                    <div className="text-sm text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: step.expected.split(':').slice(1).join(':').trim() }} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {footer && (
          <div className="mt-12 text-center">
            <p className="text-sm text-[#888888] max-w-[800px] mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: footer }} />
          </div>
        )}
      </div>
    </section>
  );
};

export default TreatmentProtocol;
