import React from 'react';
import { Check } from 'lucide-react';

const TreatmentApplications = ({
  bgColor = "bg-white",
  label = "CLINICAL APPLICATIONS",
  title = "What Kativasti actually treats — and how it integrates with conventional care.",
  description = "",
  primaryApplications = [],
  honestLimits = {
    title: "",
    description: "",
    items: []
  },
  footer = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[#C8975F] text-sm font-semibold tracking-wider mb-3">
            {label}
          </div>
          <h2 className="text-4xl text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            {title}
          </h2>
          {description && (
            <p className="text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Primary Applications */}
          <div>
            <div className="text-[#C8975F] text-sm font-semibold tracking-wider mb-4">
              PRIMARY APPLICATIONS
            </div>
            <div className="space-y-3">
              {primaryApplications.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C8975F] mt-0.5 shrink-0" />
                  <span className="text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Honest Limits */}
          <div>
            <div className="text-[#C8975F] text-sm font-semibold tracking-wider mb-4">
              HONEST LIMITS
            </div>
            {honestLimits.description && (
              <p className="text-lg mb-6 text-gray-700">
                {honestLimits.description}
              </p>
            )}
            <div className="space-y-3">
              {honestLimits.items.map((item, index) => (
                <div key={index} className="text-gray-600 pl-4 border-l-2 border-gray-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {footer && (
          <p className="text-center text-gray-600 max-w-3xl mx-auto mt-12">
            {footer}
          </p>
        )}
      </div>
    </section>
  );
};

export default TreatmentApplications;
