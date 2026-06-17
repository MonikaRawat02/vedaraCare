import React from 'react';
import { X, CircleCheckBig, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const TennisElbowRecoveryTimeline = ({
  label = "Realistic Recovery",
  title = "How long does tennis elbow take to resolve?",
  description = "Tennis elbow recovery is measured in months, not weeks. Honest realistic expectations help you stay engaged with treatment.",
  introText = "Tennis elbow recovery follows reasonably predictable patterns based on factors including symptom duration before treatment, severity of presentation, compliance with the loading protocols, and successful activity modification. The phases below represent typical patterns based on research evidence and our clinical experience treating 220+ tennis elbow patients.",
  phases = [],
  whyPatience = {},
  stats = [],
  buttonText = "Book Tennis Elbow Assessment",
  buttonHref = "#booking",
  image
}) => {
  return (
    <section className="py-24" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: '"DM Sans", system-ui, sans-serif', color: 'rgb(201, 168, 76)' }}
          >
            {label}
          </p>
          <h2
            className="mb-4"
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: '500',
              color: 'rgb(28, 21, 10)',
              letterSpacing: '-0.02em'
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              color: 'rgb(122, 110, 97)',
              fontSize: '17px',
              lineHeight: '1.75'
            }}
          >
            {description}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p
              className="mb-10 text-base leading-relaxed"
              style={{
                fontFamily: '"DM Sans", system-ui, sans-serif',
                fontSize: '17px',
                color: 'rgb(28, 21, 10)',
                lineHeight: '1.8'
              }}
            >
              {introText}
            </p>
            <div className="relative">
              <div
                className="absolute left-5 top-0 bottom-0 w-px"
                style={{ backgroundColor: 'rgba(201, 168, 76, 0.3)' }}
              />
              <div className="space-y-8">
                {phases.map((phase, index) => (
                  <div key={index} className="flex gap-6 pl-14 relative">
                    <div
                      className="absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                      style={{
                        fontFamily: '"DM Sans", system-ui, sans-serif',
                        backgroundColor: phase.isSpecial ? 'rgb(28, 21, 10)' : 'rgb(201, 168, 76)',
                        color: 'rgb(255, 255, 255)'
                      }}
                    >
                      {phase.icon || index + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3
                          className="font-medium"
                          style={{
                            fontFamily: 'Fraunces, Georgia, serif',
                            fontSize: '18px',
                            color: 'rgb(28, 21, 10)'
                          }}
                        >
                          {phase.title}
                        </h3>
                        {phase.timeline && (
                          <span
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{
                              fontFamily: '"DM Sans", system-ui, sans-serif',
                              backgroundColor: 'rgba(201, 168, 76, 0.15)',
                              color: 'rgb(201, 168, 76)'
                            }}
                          >
                            {phase.timeline}
                          </span>
                        )}
                      </div>
                      <p
                        style={{
                          fontFamily: '"DM Sans", system-ui, sans-serif',
                          fontSize: '15px',
                          color: 'rgb(122, 110, 97)',
                          lineHeight: '1.8'
                        }}
                      >
                        {phase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {image && (
              <div className="w-full">
                <img
                  src={image}
                  alt="Tennis elbow recovery timeline"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            )}
            <div
              className="p-8 rounded-2xl"
              style={{
                backgroundColor: 'rgb(250, 248, 243)',
                border: '1px solid rgba(201, 168, 76, 0.3)'
              }}
            >
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-6"
                style={{
                  fontFamily: '"DM Sans", system-ui, sans-serif',
                  color: 'rgb(201, 168, 76)'
                }}
              >
                {whyPatience.title || "Why Patience Matters"}
              </p>
              <p
                className="text-sm mb-6 leading-relaxed"
                style={{
                  fontFamily: '"DM Sans", system-ui, sans-serif',
                  color: 'rgb(28, 21, 10)'
                }}
              >
                {whyPatience.description}
              </p>
              <div className="mb-6">
                <p
                  className="text-xs font-semibold mb-3"
                  style={{
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                    color: 'rgb(212, 24, 61)'
                  }}
                >
                  Common mistakes
                </p>
                <div className="space-y-2">
                  {whyPatience.mistakes?.map((mistake, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm"
                      style={{
                        fontFamily: '"DM Sans", system-ui, sans-serif',
                        color: 'rgb(122, 110, 97)'
                      }}
                    >
                      <X
                        style={{
                          color: 'rgb(212, 24, 61)',
                          flexShrink: 0
                        }}
                        width="13"
                        height="13"
                      />
                      {mistake}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p
                  className="text-xs font-semibold mb-3"
                  style={{
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                    color: 'rgb(42, 122, 74)'
                  }}
                >
                  What works
                </p>
                <div className="space-y-2">
                  {whyPatience.whatWorks?.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm"
                      style={{
                        fontFamily: '"DM Sans", system-ui, sans-serif',
                        color: 'rgb(28, 21, 10)'
                      }}
                    >
                      <CircleCheckBig
                        style={{
                          color: 'rgb(42, 122, 74)',
                          flexShrink: 0
                        }}
                        width="13"
                        height="13"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-xl text-center"
                  style={{ border: '1px solid rgba(28, 21, 10, 0.08)' }}
                >
                  <div
                    style={{
                      fontFamily: 'Fraunces, Georgia, serif',
                      fontSize: '26px',
                      fontWeight: '500',
                      color: 'rgb(201, 168, 76)'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{
                      fontFamily: '"DM Sans", system-ui, sans-serif',
                      color: 'rgb(28, 21, 10)'
                    }}
                  >
                    {stat.label}
                  </div>
                  {stat.subLabel && (
                    <div
                      className="text-xs"
                      style={{
                        fontFamily: '"DM Sans", system-ui, sans-serif',
                        color: 'rgb(122, 110, 97)'
                      }}
                    >
                      {stat.subLabel}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Link
              href={buttonHref}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-full text-sm font-medium transition-all hover:opacity-90"
              style={{
                fontFamily: '"DM Sans", system-ui, sans-serif',
                backgroundColor: 'rgb(28, 21, 10)',
                color: 'rgb(250, 248, 243)'
              }}
            >
              {buttonText}
              <ArrowRight width="14" height="14" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TennisElbowRecoveryTimeline;