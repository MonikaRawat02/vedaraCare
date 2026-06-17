import React from 'react';
import Link from 'next/link';

const CareSettings = ({
  bgColor = "bg-[#F8F5EE]",
  label = "CARE SETTINGS",
  title = "Where we deliver rehabilitation.",
  description = "",
  settings = [],
  footer = "",
  linkText = "",
  linkHref = ""
}) => {
  const icons = {
    clinic: (
      <svg className="w-6 h-6 text-[#C4A962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    home: (
      <svg className="w-6 h-6 text-[#C4A962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    combined: (
      <svg className="w-6 h-6 text-[#C4A962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  };

  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="text-[#C4A962] text-xs font-semibold tracking-[0.2em] uppercase">
            {label}
          </div>
          <h2 className="text-4xl font-serif text-[#1A1A1A]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
            {title}
          </h2>
          {description && (
            <p className="text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {settings.map((setting, index) => (
            <div key={index} className="bg-white border-t-4 border-[#B8975A] rounded-xl p-8   hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[#FAF7F2] rounded-lg flex items-center justify-center ">
                {icons[setting.icon]}
              </div>

              <h3 className="text-xl font-serif mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#1A1A1A' }}>
                {setting.title}
              </h3>

              <p className="text-[#6B6B6B] mb-5 leading-relaxed text-[14px]">
                {setting.description}
              </p>

              {setting.whenRight && setting.whenRight.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs tracking-[0.15em] uppercase text-[#C4A962] mb-3 font-semibold">
                    WHEN THIS SETTING IS RIGHT
                  </p>
                  <ul className="space-y-2">
                    {setting.whenRight.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#6B6B6B]">
                        <span className="text-[#B8975A] shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {setting.whatWeDeliver && setting.whatWeDeliver.length > 0 && (
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#C4A962] mb-3 font-semibold">
                    WHAT WE DELIVER
                  </p>
                  <ul className="space-y-2">
                    {setting.whatWeDeliver.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#6B6B6B]">
                        <span className="text-[#B8975A] shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {footer && (
          <div className="mt-12 text-center">
            <p className="text-[#555555] max-w-3xl mx-auto leading-relaxed">
              {footer}
            </p>
            {linkText && linkHref && (
              <Link href={linkHref} className="text-[#C4A962] hover:underline text-sm inline-block mt-4">
                {linkText}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CareSettings;
