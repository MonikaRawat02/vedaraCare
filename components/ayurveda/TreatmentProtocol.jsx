import React from 'react';

const TreatmentProtocol = ({
  bgColor = "bg-white",
  label = "What to Expect",
  title = "",
  description = "",
  phases = [],
  footer = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs tracking-wider text-[#B8860B] mb-3 uppercase">{label}</div>
          <h2 className="text-4xl mb-4" style={{ fontFamily: 'Georgia, serif' }}>{title}</h2>
          {description && (
            <p className="text-muted-foreground max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>

        <div>
          {phases.map((phase, index) => (
            <div key={index} className="flex gap-6 mb-8 last:mb-0">
              <div className="flex-shrink-0 w-24">
                <div className="text-[#B8860B] font-medium">{phase.time}</div>
              </div>
              <div className="flex-1 border-l-2 border-[#B8860B] pl-6 pb-6">
                <h3 className="text-lg mb-3">{phase.title}</h3>
                {/* Support for the old format with "content" */}
                {phase.content && (
                  <p className="text-sm leading-relaxed text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: phase.content }} />
                )}
                {/* Support for the new format with "items" and "expected" */}
                {phase.items && (
                  <ul className="space-y-1.5 mb-4">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex">
                        <span className="mr-2">•</span>
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                )}
                {phase.expected && (
                  <p className="text-sm italic text-muted-foreground">
                    <span className="font-medium">Expected by end of {phase.time}:</span> <span dangerouslySetInnerHTML={{ __html: phase.expected }} />
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {footer && (
          <p className="text-center text-sm mt-12 text-muted-foreground" dangerouslySetInnerHTML={{ __html: footer }} />
        )}
      </div>
    </section>
  );
};

export default TreatmentProtocol;
