import React from 'react';
import { Check } from 'lucide-react';

const ClinicalBoundaries = ({
  bgColor = "bg-white",
  label = "HONEST CLINICAL BOUNDARIES",
  title = "",
  subtitle = "",
  leftCard = { items: [] },
  rightCard = { items: [] },
  footer = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="text-sm font-sans tracking-wider text-[#C9A961] uppercase">
            {label}
          </div>
          <h2 className="text-4xl font-serif text-[#1A1A1A]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[#717182] font-sans max-w-[800px] mx-auto text-base leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Card - Urgent Care */}
          <div className="bg-red-50 p-8 rounded-xl border-2 border-red-200">
            <div className="text-sm font-sans font-semibold tracking-wider text-red-500 uppercase mb-4">
              {leftCard.label}
            </div>
            <div className="text-lg font-sans font-medium text-[#1A1A1A] mb-8 leading-relaxed">
              {leftCard.title}
            </div>
            <ul className="space-y-4 mb-8">
              {leftCard.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-gray-700 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {leftCard.footer && (
              <p className="text-sm text-gray-500 font-sans leading-relaxed pt-6 border-t border-red-100">
                {leftCard.footer}
              </p>
            )}
          </div>

          {/* Right Card - Combined Care */}
          <div className="bg-[#FAF8F3] p-8 rounded-xl border-2 border-[#C9A961]/30">
            <div className="text-sm font-sans font-semibold tracking-wider text-[#C9A961] uppercase mb-4">
              {rightCard.label}
            </div>
            <div className="text-lg font-sans font-medium text-[#1A1A1A] mb-8 leading-relaxed">
              {rightCard.title}
            </div>
            <ul className="space-y-5">
              {rightCard.items.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-sm text-gray-700 font-sans">
                  <Check className="w-5 h-5 text-[#C9A961] mt-0.5 shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {footer && (
          <div className="mt-12 text-center max-w-[800px] mx-auto">
            <p className="text-sm text-[#717182] font-sans leading-relaxed">
              {footer}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClinicalBoundaries;
