import React from 'react';

const KneeTreatmentApproach = ({
  label = "THE APPROACH",
  title = "How we actually treat knee pain at our JVC clinic.",
  description = "Effective knee pain treatment starts with accurate diagnosis. Generic \"knee exercises\" rarely resolve knee pain because the underlying cause varies enormously between patients. Our approach starts with identifying what is actually happening, then applying treatment matched to your specific condition.",
  content = [],
  quote = "Generic knee exercises produce generic outcomes. Treatment matched to your specific condition produces meaningfully better results.",
  image = "",
  alt = "",
  toolkitItems = [],
  sectionBg = "rgb(255, 255, 255)"
}) => {
  return (
    <section id="treatment" className="py-24" style={{ background: sectionBg }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-16 items-start">
          <div>
            <p
              className="text-xs font-semibold tracking-[0.18em] uppercase mb-4"
              style={{
                color: 'rgb(184, 150, 90)',
                fontFamily: '"DM Sans", sans-serif'
              }}
            >
              {label}
            </p>
            <h2
              className="font-medium leading-tight text-4xl lg:text-5xl mb-6"
              style={{ fontFamily: 'Fraunces, serif', color: 'rgb(28, 25, 23)' }}
            >
              {title}
            </h2>
            <p
              className="text-base leading-relaxed mb-10"
              style={{
                color: 'rgb(90, 79, 71)',
                fontFamily: '"DM Sans", sans-serif'
              }}
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className="space-y-7">
              {content.map((item, index) => (
                <div
                  key={index}
                  className="pl-6"
                  style={{ borderLeft: '2px solid rgb(184, 150, 90)' }}
                >
                  <h3
                    className="text-lg font-medium mb-2"
                    style={{ fontFamily: 'Fraunces, serif', color: 'rgb(28, 25, 23)' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: 'rgb(90, 79, 71)',
                      fontFamily: '"DM Sans", sans-serif'
                    }}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              ))}
            </div>
            <blockquote
              className="mt-12 text-2xl leading-snug italic"
              style={{
                fontFamily: 'Fraunces, serif',
                color: 'rgb(184, 150, 90)'
              }}
            >
              “{quote}”
            </blockquote>
          </div>
          <div className="sticky top-28">
            <div
              className="overflow-hidden"
              style={{ borderRadius: '12px', background: 'rgb(240, 234, 224)' }}
            >
              <img
                src={image}
                alt={alt}
                className="w-full object-cover"
                style={{ height: '500px' }}
              />
            </div>
            <div
              className="mt-6 rounded-lg p-6"
              style={{ background: 'rgb(248, 244, 238)' }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'rgb(184, 150, 90)' }}
              >
                Our treatment toolkit
              </p>
              <div className="grid grid-cols-2 gap-2">
                {toolkitItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-xs py-1"
                    style={{
                      color: 'rgb(90, 79, 71)',
                      fontFamily: '"DM Sans", sans-serif'
                    }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: 'rgb(184, 150, 90)' }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KneeTreatmentApproach;
