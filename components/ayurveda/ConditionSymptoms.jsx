import React from 'react';

const ConditionSymptoms = ({
  bgColor = "bg-[#F7F3EC]",
  label = "",
  title = "",
  description = "",
  symptoms = [],
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
            <p className="text-sm text-muted-foreground max-w-[600px] mx-auto" style={{ lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {symptoms.map((symptom, index) => (
            <div key={index} className="bg-white p-6 rounded-lg" style={{ borderLeft: '4px solid rgb(201, 169, 97)' }}>
              <h4 className="text-lg font-medium mb-3" style={{ color: 'rgb(28, 28, 26)' }} dangerouslySetInnerHTML={{ __html: symptom.title }} />
              <p className="text-sm mb-4 leading-relaxed" style={{ color: 'rgb(107, 114, 128)' }} dangerouslySetInnerHTML={{ __html: symptom.content }} />
              <div className="text-sm font-medium" style={{ color: 'rgb(201, 169, 97)' }} dangerouslySetInnerHTML={{ __html: symptom.expected }} />
            </div>
          ))}
        </div>

        {footer && (
          <p className="text-center mt-8 max-w-3xl mx-auto" style={{ color: 'rgb(107, 114, 128)' }} dangerouslySetInnerHTML={{ __html: footer }} />
        )}
      </div>
    </section>
  );
};

export default ConditionSymptoms;
