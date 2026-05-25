import React from 'react';

const ConditionPhenotypes = ({
  bgColor = "bg-white",
  label = "",
  title = "",
  description = "",
  phenotypes = [],
  footer = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: 'rgb(184, 145, 90)' }}>
            {label}
          </p>
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500, color: 'rgb(28, 28, 26)', lineHeight: 1.25 }}>
            {title}
          </h2>
          {description && (
            <p className="text-sm text-muted-foreground max-w-[600px] mx-auto" style={{ lineHeight: 1.75 }}>
              {description}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {phenotypes.map((phenotype, index) => (
            <div key={index} className="rounded-xl p-8" style={{ background: 'rgb(250, 246, 239)' }}>
              <p className="text-4xl font-semibold mb-2" style={{ color: 'rgb(184, 145, 90)' }}>
                {phenotype.letter}
              </p>
              <h3 className="text-xl mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500, color: 'rgb(28, 28, 26)' }}>
                {phenotype.title}
              </h3>
              <p className="text-[11px] uppercase tracking-widest mb-4 text-muted-foreground">
                {phenotype.description}
              </p>
              <p className="text-sm text-muted-foreground mb-5" style={{ lineHeight: 1.85 }}>
                {phenotype.content}
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgb(184, 145, 90)' }}>
                Ayurvedic emphasis for this phenotype:
              </p>
              <p className="text-xs text-muted-foreground" style={{ lineHeight: 1.7 }}>
                {phenotype.ayurvedicEmphasis}
              </p>
            </div>
          ))}
        </div>

        {footer && (
          <p className="text-center text-sm text-muted-foreground max-w-[640px] mx-auto">
            {footer}
          </p>
        )}
      </div>
    </section>
  );
};

export default ConditionPhenotypes;
