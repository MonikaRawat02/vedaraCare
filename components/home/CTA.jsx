import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';

const CTA = ({
  bgColor = "bg-[#FAF8EF]",
  label = "READY WHEN YOU ARE",
  title = "Book a consultation, or just ask a question.",
  description = "Most patients reach us on WhatsApp. It is the fastest way to check availability, ask about insurance, or send a photo of your concern for our team to review.",
  button1Text = "Book a Consultation",
  button2Text = "Chat on WhatsApp",
  button1Href = "/book",
  button2Href = "https://wa.me/971555867466?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20know%20more%20about%20your%20treatments%20and%20book%20a%20consultation.%20Please%20assist%20me.",
  subtext = "Typical reply time under 15 minutes during clinic hours",
  button1Class = "bg-[#184C3A] text-white hover:bg-[#123a2c]",
  button2Class = "bg-[#4A7C59] text-white hover:bg-[#3d664a]"
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Header Content */}
          <div className="space-y-6">
            <span className="text-[13px] font-sans tracking-[0.1em] text-[#C9A961] uppercase block">
              {label}
            </span>
            <h2 className="text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2]">
              {title}
            </h2>
            <p 
              className="text-[18px] text-[#1A1A1A] font-sans leading-relaxed max-w-2xl mx-auto"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>

          
         {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a href={button1Href}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 ${button1Class} rounded-lg transition-all font-sans font-bold text-[16px]`}>
              {button1Text}
            </a>
            <a
              href={button2Href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 ${button2Class} rounded-lg transition-all font-sans font-semibold text-[16px]`}>
              <MessageCircle size={20} />
              {button2Text}
            </a>
          </div>

          {/* Subtext */}
          <p className="text-[14px] text-[#6B6B6B] font-sans pt-2">
            {subtext}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
