import React, { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const defaultFaqs = [
  {
    question: "Is Vedara Care Polyclinic DHA-licensed?",
    answer: "Yes, Vedara Care Polyclinic is fully licensed by the Dubai Health Authority (DHA License XXXXX). Every practicing doctor holds an individual DHA professional license, displayed on each doctor page."
  },
  {
    question: "Where is your clinic located in Jumeirah Village Circle?",
    answer: "We are located in the heart of JVC, easily accessible for all residents. Please contact us for the exact location and directions."
  },
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of services including Ayurveda, Physiotherapy, Dermatology, Home Healthcare, and Wellness treatments."
  },
  {
    question: "Do you accept health insurance?",
    answer: "Yes, we accept a variety of health insurance plans. Please contact our team to verify if your specific plan is covered."
  },
  {
    question: "Do you offer home healthcare in JVC and across Dubai?",
    answer: "Yes, we provide DHA-licensed home doctor visits, nursing, and physiotherapy services across JVC and other areas in Dubai."
  },
  {
    question: "How long is a first consultation?",
    answer: "First Ayurvedic consultations typically run for 45 to 60 minutes to ensure a comprehensive assessment."
  },
  {
    question: "Are your Ayurvedic doctors qualified?",
    answer: "All our Ayurvedic physicians are BAMS-qualified and DHA-licensed with extensive experience in traditional healing."
  },
  {
    question: "Do you offer Panchakarma in Dubai?",
    answer: "Yes, we provide authentic Panchakarma treatments tailored to individual needs at our JVC clinic."
  },
  {
    question: "Can I request a male or female doctor?",
    answer: "Yes, you can request a doctor based on your preference. We have both male and female practitioners available."
  },
  {
    question: "How do I book?",
    answer: "You can book an appointment through our website, by calling us, or via WhatsApp."
  }
];

const FAQ = ({ 
  bgColor = "bg-white",
  label = "QUESTIONS, ANSWERED", 
  title = "Everything patients ask before their first visit.",
  description = "Short, honest answers from our clinical team. Cannot find what you are looking for? WhatsApp us, usually answered in under 15 minutes.",
  faqs = [],
  buttonText = "Ask a Question",
  buttonHref = "https://wa.me/971555867466?text=Hi,%20I%27m%20interested%20in%20your%20treatments%20and%20would%20like%20to%20book%20a%20consultation.",
  secondaryCtaText = "",
  secondaryCtaHref = "#",
  sidebarLinks = []
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className={`${bgColor} py-24`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[40%_60%] gap-12">
          {/* Left Side: Header Content */}
          <div className="space-y-6">
            
              <span className="text-[13px] font-sans tracking-[0.1em] text-[#C9A961] uppercase block">
                {label}
              </span>
              <h2 className="text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2] ">
                {title}
              </h2>
            
            
            <p 
              className="text-[16px] text-[#6B6B6B] font-sans leading-relaxed "
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <a href={buttonHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#4A7C59] text-white rounded-lg hover:bg-[#3d664a] transition-colors font-sans font-semibold text-[16px]">
              <MessageCircle size={18} />
              {buttonText}
            </a>

            {secondaryCtaText && secondaryCtaHref && (
              <a href={secondaryCtaHref} className="block text-[14px] font-sans text-[#C4A962] hover:text-[#b89a56] hover:underline">
                {secondaryCtaText}
              </a>
            )}

            {sidebarLinks.length > 0 && (
              <div className="space-y-2 pt-2">
                {sidebarLinks.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.href} 
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="block text-[14px] font-sans text-[#C4A962] hover:text-[#b89a56] hover:underline"
                  >
                    {link.text} →
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Right Side: Accordion */}
          <div className="divide-y divide-gray-200 lg:max-h-[650px] lg:overflow-y-auto lg:pr-8 pr-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6 first:pt-0">
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center text-left group"
                >
                  <span className={`text-[18px] font-sans font-semibold transition-colors ${openIndex === index ? 'text-[#184C3A]' : 'text-[#1A1A1A] group-hover:text-[#184C3A]'}`} dangerouslySetInnerHTML={{ __html: faq.question?.trim() }} />
                  <span className="text-[#D4A373] shrink-0 ml-4">
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 mt-4' : 'max-h-0'}`}>
                  <p 
                    className="text-[16px] text-[#6B6B6B] font-sans leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.answer?.trim() }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
