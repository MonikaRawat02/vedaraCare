import React from 'react';

const HomePhysioBookingLogistics = ({
  bgColor = "bg-[#F5F1E8]",
  label = "BOOKING & LOGISTICS",
  title = "Booking and logistics for home physiotherapy.",
  content = [],
  buttons = []
}) => {
  const icons = [
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'rgb(30, 77, 58)' }}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'rgb(30, 77, 58)' }}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'rgb(30, 77, 58)' }}><path d="M3 9a2 2 0 0 1 2-2h.93a2 2 0 0 0 1.664-.89l.812-1.22A2 2 0 0 1 10.07 4h3.86a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 18.07 7H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path><path d="m15 13-3 3-3-3"></path></svg>
  ];

  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.18em] font-semibold text-[#B8933F] uppercase">
            {label}
          </span>
          <h2 className="mt-3 text-[clamp(1.8rem,3.5vw,2.6rem)] text-[#1C1814] leading-tight" style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}>
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.map((section, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ background: 'rgba(30, 77, 58, 0.082)', border: '1px solid rgba(30, 77, 58, 0.19)' }}>
                {icons[index] || icons[0]}
              </div>
              <div className="text-[#B8933F] text-xs font-bold tracking-wider mb-2">
                Step {index + 1}
              </div>
              <h3 className="text-[1.2rem] text-[#1C1814] mb-4 leading-snug" style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-[#6B635A]">
                    <span className="text-[#B8933F] mt-1">•</span>
                    <span className="leading-relaxed text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-12 flex-wrap">
          {buttons.map((button, index) => (
            button.link || button.href ? (
              <a 
                key={index}
                href={button.link || button.href}
                target={button.link?.startsWith('http') || button.href?.startsWith('http') ? '_blank' : undefined}
                rel={button.link?.startsWith('http') || button.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`px-8 py-3 rounded-full font-medium transition-all text-center block ${
                  button.variant === "primary" 
                    ? "bg-[#1E4D3A] text-white hover:bg-[#153a2d]" 
                    : "bg-[#25d366] text-white hover:bg-[#20bd5a]"
                }`}
              >
                {button.text}
              </a>
            ) : (
              <button 
                key={index}
                className={`px-8 py-3 rounded-full font-medium transition-all ${
                  button.variant === "primary" 
                    ? "bg-[#1E4D3A] text-white hover:bg-[#153a2d]" 
                    : "bg-[#25d366] text-white hover:bg-[#20bd5a]"
                }`}
              >
                {button.text}
              </button>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePhysioBookingLogistics;
