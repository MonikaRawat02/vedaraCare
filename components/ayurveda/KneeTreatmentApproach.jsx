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
              className="text-xs font-semibold tracking-[0.18em] uppercase mb-4 text-[#B8965A] font-sans"
            >
              {label}
            </p>
            <h2
              className="font-medium leading-tight text-4xl lg:text-5xl mb-6 font-serif text-[#1C1917]"
            >
              {title}
            </h2>
            <p
              className="text-base leading-relaxed mb-10 text-[#5A4F47] font-sans"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className="space-y-7">
              {content.map((item, index) => (
                <div
                  key={index}
                  className="pl-6 border-l-2 border-[#B8965A]"
                >
                  <h3
                    className="text-lg font-medium mb-2 font-serif text-[#1C1917]"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p
                    className="text-sm leading-relaxed text-[#5A4F47] font-sans"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              ))}
            </div>
            <blockquote
              className="mt-12 text-2xl leading-snug italic font-serif text-[#B8965A]"
            >
              “{quote}”
            </blockquote>
          </div>
          <div className="sticky top-28">
            <div
              className="overflow-hidden rounded-xl bg-[#F0EAE0]"
            >
              <img
                src={image}
                alt={alt}
                className="w-full object-cover h-[500px]"
              />
            </div>
            <div
              className="mt-6 rounded-lg p-6 bg-[#F8F4EE]"
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3 text-[#B8965A] font-sans"
              >
                Our treatment toolkit
              </p>
              <div className="grid grid-cols-2 gap-2">
                {toolkitItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-xs py-1 text-[#5A4F47] font-sans"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#B8965A]"
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
