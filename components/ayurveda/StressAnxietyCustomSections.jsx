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
    <section className="bg-[#EAE3D5] py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.18em] uppercase font-medium mb-3 text-[#B8915A] font-sans">
            {label}
          </p>
          <h2 className="text-3xl md:text-4xl leading-tight text-[#1C1814] mb-4 font-serif font-medium">
            {title}
          </h2>
          <p className="max-w-[720px] mx-auto leading-relaxed text-[#686358] text-base font-sans">
            {description}
          </p>
        </div>

        <div className="space-y-6">
          {months.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-8 grid md:grid-cols-[200px_1fr] gap-8 items-start shadow-sm border border-[#E8E1D5]/50">
              <div className="flex flex-col items-start">
                <span className="text-[11px] font-medium text-[#B8915A] uppercase tracking-widest font-sans">
                  {item.month}
                </span>
                <h4 className="text-[#1C1814] text-base mt-1 font-serif font-medium">
                  {item.title}
                </h4>
                <div className="w-8 h-8 rounded-full bg-[#B8915A] text-white flex items-center justify-center text-sm mt-4 font-medium font-sans">
                  {item.id}
                </div>
                <div className="mt-6 w-16 h-[1px] bg-[#E8E1D5]"></div>
              </div>
              <div>
                <ul className="space-y-1.5 mb-8">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed text-[rgba(28,24,20,0.8)] text-sm font-sans">
                      <Check size={14} className="text-[#B8915A] mt-1 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-[#FDFBF7] border-l-2 border-[#B8915A] p-4 mt-6">
                  <p className=" leading-relaxed text-[#686358] text-xs font-sans">
                    {item.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {footer && (
          <div className="text-center mt-8">
            <p className="max-w-[720px] mx-auto leading-relaxed text-[#686358] text-xs font-sans">
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
    <section className="bg-white py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.18em] uppercase font-medium mb-3 text-[#B8915A] font-sans">
            {label}
          </p>
          <h2 className="text-3xl md:text-4xl leading-tight text-[#1C1814] font-serif font-medium">
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            {content.map((text, index) => (
              <p key={index} className="leading-relaxed text-[#4A4A4A] text-base font-sans">
                {text}
              </p>
            ))}
            
            <div className="pt-4">
              <h3 className="text-lg text-[#B8915A] mb-4 font-serif font-medium">{subheading}</h3>
              <p className="leading-relaxed text-[#4A4A4A] text-base font-sans">
                {subheadingContent}
              </p>
            </div>

            <div className="pt-4">
              <a href={linkHref} className="font-bold text-[#B8915A] hover:opacity-80 flex items-center gap-1 text-sm font-sans">
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
  mapEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9894568193345!2d55.20722358578439!3d25.068346479666594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dd72f3da587%3A0xe7ecca8687a75b72!2sVedara%20Care%20Polyclinic!5e0!3m2!1sen!2sus!4v1780727442216!5m2!1sen!2sus",
  alt = "",
  whatsapp = ""
}) => {
  return (
    <section className="bg-[#F5F1E8] py-24 px-6 border-t border-[#F5F0E8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Map / Image */}
          <div className="lg:col-span-6">
            <div className="h-[500px] bg-gray-300 rounded-xl overflow-hidden shadow-lg">
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
                <div className="w-full h-full flex items-center justify-center text-gray-600">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <div className="w-3 h-3 rounded-full bg-[#B8915A]"></div>
                    </div>
                    <p className="text-base font-medium text-[#1A1A1A] font-serif">{location.name}</p>
                    <p className="text-xs text-[#6B6359] font-sans">{location.area}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Location Info */}
          <div className="lg:col-span-6">
            <p className="tracking-[0.18em] uppercase font-medium mb-3 text-[#B8915A] text-xs font-sans">
              {label}
            </p>
            <h2 className="text-4xl md:text-5xl text-[#1A1A1A] mb-8 font-serif">
              {title}
            </h2>

            <div className="space-y-5 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#F5F0E8] flex items-center justify-center shrink-0 mt-1">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#B8915A]"></div>
                </div>
                <div>
                  <p className="text-gray-700 font-sans">{address.line1}</p>
                  <p className="text-gray-700 font-sans">{address.line2}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                 <MessageCircle size={18} className="text-[#B8915A] mt-1 shrink-0" />
                 <div className="text-gray-700">
                   <div className="font-medium mb-0.5 font-sans">Phone</div>
                   <a href={`tel:${phone}`} className="font-sans">{phone}</a>
                 </div>
              </div>

              {hours && hours.length > 0 && (
                <div className="bg-[#F5F0E8] p-4 rounded-lg">
                  <div className="text-xs font-semibold mb-3 font-sans">Operating Hours</div>
                  <div className="space-y-2">
                    {hours.map((hour, index) => (
                      <div key={index} className="text-sm text-gray-700 font-sans">
                        {hour.label}: {hour.time}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {description && (
              <div className="bg-[#F6F1E9] border border-[#F5F0E8] rounded-lg p-6 mb-6">
                 <p className="leading-relaxed text-gray-600 text-sm font-sans">
                  {description}
                 </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#1F4538] text-white px-6 py-4 rounded font-bold flex-1 hover:bg-[#163128] transition-colors text-sm font-sans">
                {button1Text}
              </button>
              <button className="bg-[#25D366] text-white px-6 py-4 rounded font-bold flex items-center justify-center gap-2 hover:bg-[#1eb956] transition-colors text-sm font-sans">
                <MessageCircle size={20} />
                {button2Text}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
