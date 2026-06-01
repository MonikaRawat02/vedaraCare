import React from 'react';
import { Check, X, Info } from 'lucide-react';

const TreatmentApplications = ({
  bgColor = "bg-white",
  label = "CLINICAL APPLICATIONS",
  title = "",
  description = "",
  primaryApplications = [],
  honestLimits = {},
  whereItExcels = [],
  honestLimitsList = [],
  honestLimitsDescription = "",
  honestNote = "",
  footer = "",
  strongIndicationsLabel = "STRONG INDICATIONS",
  complementaryUseLabel = "COMPLEMENTARY USE",
  applications = []
}) => {
  const isNewFormat = whereItExcels && whereItExcels.length > 0;
  const isApplicationsFormat = applications && applications.length > 0;

  const renderOldFormat = () => (
    <div className="grid lg:grid-cols-2 gap-12">
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
          {honestLimits.items && honestLimits.items.map((item, index) => (
            <div key={index} className="text-gray-600 pl-4 border-l-2 border-gray-300">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderNewFormat = () => (
    <div className="grid lg:grid-cols-2 gap-12">
      <div>
        <p 
          className="text-xs font-semibold tracking-[0.18em] uppercase mb-4"
          style={{ 
            color: 'rgb(184, 145, 90)', 
            fontFamily: '"DM Sans", sans-serif' 
          }}
        >
          {strongIndicationsLabel}
        </p>
        <div className="space-y-0">
          {whereItExcels.map((item, index) => (
            <div key={index} className="py-3 border-b border-[rgb(237,232,222)]">
              <div className="flex items-start gap-3">
                <Check 
                  size={13} 
                  className="mt-0.5 shrink-0"
                  style={{ color: 'rgb(184, 145, 90)' }}
                />
                <div>
                  {item.href ? (
                    <a 
                      href={item.href} 
                      className="text-sm font-medium hover:underline transition-colors"
                      style={{ color: 'rgb(28, 28, 26)' }}
                    >
                      {item.title}
                    </a>
                  ) : (
                    <p 
                      className="text-sm font-medium"
                      style={{ color: 'rgb(28, 28, 26)' }}
                    >
                      {item.title}
                    </p>
                  )}
                  {item.subtitle && (
                    <p 
                      className="text-xs mt-1"
                      style={{ color: 'rgb(107, 99, 89)' }}
                    >
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <p 
          className="text-xs font-semibold tracking-[0.18em] uppercase mb-4"
          style={{ 
            color: 'rgb(184, 145, 90)', 
            fontFamily: '"DM Sans", sans-serif' 
          }}
        >
          {complementaryUseLabel}
        </p>
        <p 
          className="text-sm mb-4"
          style={{ color: 'rgb(74, 67, 60)' }}
        >
          {honestLimitsDescription || "Real Ayurvedic doctors at our JVC clinic recommend something else when this treatment is not appropriate."}
        </p>
        <div className="space-y-0 flex-1">
          {honestLimitsList.map((item, index) => (
            <div key={index} className="py-3 border-b border-[rgb(237,232,222)]">
              <div className="flex items-start gap-3">
                {complementaryUseLabel === "HONEST LIMITS" ? (
                  <X 
                    size={13} 
                    className="mt-0.5 shrink-0"
                    style={{ color: 'rgb(157, 148, 139)' }}
                  />
                ) : (
                  <Check 
                    size={13} 
                    className="mt-0.5 shrink-0"
                    style={{ color: 'rgb(184, 145, 90)' }}
                  />
                )}
                <div>
                  {item.href ? (
                    <a 
                      href={item.href} 
                      className="text-sm hover:underline transition-colors"
                      style={{ color: 'rgb(74, 67, 60)' }}
                    >
                      {item.title}
                    </a>
                  ) : (
                    <p 
                      className="text-sm"
                      style={{ color: 'rgb(74, 67, 60)' }}
                    >
                      {item.title}
                    </p>
                  )}
                  {item.subtitle && (
                    <p 
                      className="text-xs mt-1"
                      style={{ color: 'rgb(107, 99, 89)' }}
                    >
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {honestNote && (
          <div className="mt-6">
            <p 
              className="text-xs p-4 rounded-lg leading-relaxed"
              style={{ 
                color: 'rgb(90, 82, 72)', 
                background: 'rgb(245, 240, 232)' 
              }}
            >
              {honestNote}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  const renderApplicationsFormat = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {applications.map((item, index) => (
        <div 
          key={index} 
          className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-[rgb(237,232,222)]"
        >
          <div className="flex items-center gap-2 mb-3">
            {item.suitable === true && (
              <Check 
                size={18}
                style={{ color: 'rgb(184, 145, 90)' }}
              />
            )}
            {item.suitable === "partial" && (
              <Info 
                size={18}
                style={{ color: 'rgb(184, 145, 90)' }}
              />
            )}
            {item.suitable === false && (
              <X 
                size={18}
                style={{ color: 'rgb(157, 148, 139)' }}
              />
            )}
            <h3 className="text-lg font-semibold" style={{ color: 'rgb(28, 28, 26)', fontFamily: 'DM Sans, sans-serif' }}>
              {item.title}
            </h3>
          </div>
          {item.subtitle && (
            <p className="text-sm mb-3" style={{ color: 'rgb(107, 99, 89)' }}>
              {item.subtitle}
            </p>
          )}
          <p className="text-sm leading-relaxed" style={{ color: 'rgb(74, 67, 60)' }}>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
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
          {description && (
            <p 
              className="text-sm leading-relaxed"
              style={{ 
                color: 'rgb(107, 99, 89)', 
                maxWidth: '580px', 
                margin: '0px auto' 
              }}
            >
              {description}
            </p>
          )}
        </div>

        {isApplicationsFormat ? renderApplicationsFormat() : (isNewFormat ? renderNewFormat() : renderOldFormat())}

        {footer && (
          <p className="text-center max-w-3xl mx-auto mt-12" style={{ color: 'rgb(74, 67, 60)' }}>
            {footer}
          </p>
        )}
      </div>
    </section>
  );
};

export default TreatmentApplications;