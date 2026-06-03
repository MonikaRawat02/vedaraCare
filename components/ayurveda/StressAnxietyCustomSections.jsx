import React from 'react';
import { Check, MessageCircle } from 'lucide-react';

export const StressAnxietyTimeline = ({ 
  label = "WHAT TO EXPECT",
  title = "What three to six months of Ayurvedic stress and anxiety treatment at our JVC clinic looks like.",
  description = "A representative protocol for chronic stress with secondary generalised anxiety. Your specific plan varies based on pattern, severity, and concurrent psychiatric or therapeutic care.",
  months = [],
  footer = ""
}) => {
  return (
    <section className="bg-[#EAE3D5] py-24 px-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.18em] uppercase font-medium mb-3 text-[#B8915A]">
            {label}
          </p>
          <h2 className="text-3xl md:text-4xl leading-tight text-[#1C1814] mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500 }}>
            {title}
          </h2>
          <p className="max-w-[720px] mx-auto leading-relaxed" style={{ color: '#686358', fontSize: '15px', fontWeight: 400 }}>
            {description}
          </p>
        </div>

        <div className="space-y-6">
          {months.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-8 grid md:grid-cols-[200px_1fr] gap-8 items-start shadow-sm border border-[#E8E1D5]/50">
              <div className="flex flex-col items-start">
                <span className="text-[11px] font-medium text-[#B8915A] uppercase tracking-widest">
                  {item.month}
                </span>
                <h4 className="text-[#1C1814] text-base mt-1" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500 }}>
                  {item.title}
                </h4>
                <div className="w-8 h-8 rounded-full bg-[#B8915A] text-white flex items-center justify-center text-sm mt-4" style={{ fontWeight: 500 }}>
                  {item.id}
                </div>
                <div className="mt-6 w-16 h-[1px] bg-[#E8E1D5]"></div>
              </div>
              <div>
                <ul className="space-y-1.5 mb-8">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed" style={{ color: 'rgba(28, 24, 20, 0.8)', fontSize: '14px', fontWeight: 400 }}>
                      <Check size={14} className="text-[#B8915A] mt-1 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-[#FDFBF7] border-l-2 border-[#B8915A] p-4 mt-6">
                  <p className=" leading-relaxed" style={{ color: '#686358', fontSize: '13px', fontWeight: 400 }}>
                    {item.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {footer && (
          <div className="text-center mt-8">
            <p className="max-w-[720px] mx-auto leading-relaxed" style={{ color: '#686358', fontSize: '12px', fontWeight: 400 }}>
              {footer}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export const StressAnxietySleepSection = ({
  label = "THE FOUNDATIONAL TREATMENT",
  title = "",
  content = [],
  subheading = "Why Shirodhara Specifically Helps Sleep",
  subheadingContent = "",
  linkText = "Read about Shirodhara",
  linkHref = "/treatments/shirodhara-dubai/",
  image = "",
  alt = ""
}) => {
  return (
    <section className="bg-white py-24 px-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.18em] uppercase font-medium mb-3 text-[#B8915A]">
            {label}
          </p>
          <h2 className="text-3xl md:text-4xl leading-tight text-[#1C1814]" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500 }}>
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            {content.map((text, index) => (
              <p key={index} className="leading-relaxed text-[#4A4A4A]" style={{ fontSize: '15px', fontWeight: 400 }}>
                {text}
              </p>
            ))}
            
            <div className="pt-4">
              <h3 className="text-lg text-[#B8915A] mb-4" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500 }}>{subheading}</h3>
              <p className="leading-relaxed text-[#4A4A4A]" style={{ fontSize: '15px', fontWeight: 400 }}>
                {subheadingContent}
              </p>
            </div>

            <div className="pt-4">
              <a href={linkHref} className="font-bold text-[#B8915A] hover:opacity-80 flex items-center gap-1" style={{ fontSize: '14px' }}>
                {linkText} <span className="text-lg">→</span>
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src={image} 
              alt={alt || title} 
              className="rounded-xl w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const StressAnxietyVisitSection = ({
  label = "VISIT US",
  title = "Where stress and anxiety treatment happens at Vedara Care.",
  location = { name: "Circle Mall, JVC", area: "Jumeirah Village Circle, Dubai" },
  address = { line1: "207 Circle Mall, JVC", line2: "Jumeirah Village Circle, Dubai, UAE" },
  phone = "+971 4 XXX XXXX",
  hours = [],
  description = "",
  button1Text = "Book an Anxiety & Stress Consultation",
  button2Text = "WhatsApp Us",
  mapEmbed = "",
  alt = ""
}) => {
  return (
    <section className="bg-white py-24 px-8 border-t border-[#F5F0E8]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="bg-[#F6F1E9] rounded-xl w-full aspect-[4/3] flex items-center justify-center overflow-hidden">
             {mapEmbed ? (
               <iframe 
                 src={mapEmbed}
                 width="100%"
                 height="100%"
                 style={{ border: 0 }}
                 allowFullScreen=""
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 title={alt}
               ></iframe>
             ) : (
               <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-[#B8915A]"></div>
                  </div>
                  <p className="text-base font-medium text-[#1A1A1A]" style={{ fontFamily: 'Fraunces, serif' }}>{location.name}</p>
                  <p className="text-xs text-[#6B6359]">{location.area}</p>
               </div>
             )}
          </div>
        </div>
        <div>
          <p className="tracking-[0.18em] uppercase font-medium mb-4 text-[#B8915A]" style={{ fontSize: '12px' }}>
            {label}
          </p>
          <h2 className="text-3xl md:text-[2.1rem] leading-tight text-[#1C1814] mb-8" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500 }}>
            {title}
          </h2>

          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#F5F0E8] flex items-center justify-center shrink-0 mt-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#B8915A]"></div>
              </div>
              <div>
                <p className="text-[#4A4A4A]" style={{ fontSize: '14px', fontWeight: 400 }}>{address.line1}</p>
                <p className="text-[#6B6359]" style={{ fontSize: '14px', fontWeight: 400 }}>{address.line2}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
               <MessageCircle size={18} className="text-[#B8915A] mt-1 shrink-0" />
               <p className="text-[#4A4A4A]" style={{ fontSize: '14px', fontWeight: 400 }}>{phone}</p>
            </div>

            <div className="flex items-start gap-3">
               <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-1">
                  <div className="w-3 h-3 border border-[#B8915A] rounded-full"></div>
               </div>
               <div>
                {hours.map((hour, index) => (
                  <p key={index} className="text-[#4A4A4A]" style={{ fontSize: '14px', fontWeight: 400 }}>
                    {hour.label}: {hour.time}
                  </p>
                ))}
               </div>
            </div>
          </div>

          <div className="bg-[#F6F1E9] border border-[#F5F0E8] rounded-lg p-6 mb-10">
             <p className="leading-relaxed text-[#4A4A4A]" style={{ fontSize: '14px', fontWeight: 400 }}>
              {description}
             </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#1F4538] text-white px-6 py-4 rounded font-bold flex-1 hover:bg-[#163128] transition-colors" style={{ fontSize: '14px' }}>
              {button1Text}
            </button>
            <button className="bg-[#25D366] text-white px-6 py-4 rounded font-bold flex items-center justify-center gap-2 hover:bg-[#1eb956] transition-colors" style={{ fontSize: '14px' }}>
              <MessageCircle size={20} />
              {button2Text}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
