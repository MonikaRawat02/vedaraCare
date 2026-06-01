import React from 'react';
import { Check, AlertTriangle } from 'lucide-react';

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
          {/* Left Card */}
          <div className={`${leftCard.bgColor || 'bg-red-50'} p-8 rounded-xl border-2 ${leftCard.borderColor || 'border-red-200'}`}>
            <div className={`text-sm font-sans font-semibold tracking-wider uppercase mb-4 ${leftCard.labelColor || 'text-red-500'}`}>
              {leftCard.label}
            </div>
            
            {leftCard.alertBox && (
              <div className={`${leftCard.alertBg || 'bg-red-100'} p-4 rounded-lg mb-6 border-l-4 ${leftCard.alertBorder || 'border-red-500'}`}>
                <p className={`text-sm ${leftCard.alertTextColor || 'text-red-900'} font-sans leading-relaxed`}>
                  {leftCard.alertBox}
                </p>
              </div>
            )}

            <div 
              className={`${leftCard.titleClass || 'text-lg font-sans font-medium'} text-[#1A1A1A] mb-8 leading-relaxed`}
              dangerouslySetInnerHTML={{ __html: leftCard.title }}
            />
            <ul className="space-y-4 mb-8">
              {leftCard.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-gray-700 font-sans">
                  {leftCard.useWarningIcon ? (
                    <AlertTriangle className={`w-4 h-4 mt-0.5 shrink-0 ${leftCard.iconColor || 'text-red-500'}`} />
                  ) : (
                    <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${leftCard.bulletColor || 'bg-red-500'}`} />
                  )}
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            {leftCard.footer && (
              <p className="text-sm text-gray-500 font-sans leading-relaxed pt-6 border-t border-gray-100">
                {leftCard.footer}
              </p>
            )}
          </div>

          {/* Right Card */}
          <div className={`${rightCard.bgColor || 'bg-[#FAF8F3]'} p-8 rounded-xl border-2 ${rightCard.borderColor || 'border-[#C9A961]/30'}`}>
            <div className={`text-sm font-sans font-semibold tracking-wider uppercase mb-4 ${rightCard.labelColor || 'text-[#C9A961]'}`}>
              {rightCard.label}
            </div>
            <div 
              className={`${rightCard.titleClass || 'text-lg font-sans font-medium'} text-[#1A1A1A] mb-8 leading-relaxed`}
              dangerouslySetInnerHTML={{ __html: rightCard.title }}
            />
            <ul className="space-y-5">
              {rightCard.items.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-sm text-gray-700 font-sans leading-relaxed">
                  <Check className={`w-5 h-5 mt-0.5 shrink-0 ${rightCard.checkColor || 'text-[#C9A961]'}`} />
                  <span dangerouslySetInnerHTML={{ __html: item.text || item }} />
                </li>
              ))}
            </ul>

            {rightCard.bestPractice && (
              <div className="mt-8 p-6 bg-[#F2F2E2] rounded-lg border border-[#C9A961]/20">
                <p className="text-[14px] text-gray-700 leading-relaxed font-sans">
                  <span className="font-bold">Best practice:</span> {rightCard.bestPractice}
                </p>
              </div>
            )}
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
