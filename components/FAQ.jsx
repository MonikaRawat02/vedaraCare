import React, { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const faqs = [
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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[40%_60%] gap-12">
          {/* Left Side: Header Content */}
          <div className="space-y-6">
            
              <span className="text-[13px] font-sans tracking-[0.1em] text-[#C9A961] uppercase block">
                QUESTIONS, ANSWERED
              </span>
              <h2 className="text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2] max-w-[420px]">
                Everything patients ask before their first visit.
              </h2>
            
            
            <p className="text-[16px] text-[#6B6B6B] font-sans leading-relaxed max-w-[420px]">
              Short, honest answers from our clinical team. Cannot find what you are looking for? WhatsApp us, usually answered in under 15 minutes.
            </p>

            <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#4A7C59] text-white rounded-lg hover:bg-[#3d664a] transition-colors font-sans font-semibold text-[16px]">
              <MessageCircle size={18} />
              Ask a Question
            </button>
          </div>

          {/* Right Side: Accordion */}
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6 first:pt-0">
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center text-left group"
                >
                  <span className={`text-[18px] font-sans font-semibold transition-colors ${openIndex === index ? 'text-[#184C3A]' : 'text-[#1A1A1A] group-hover:text-[#184C3A]'}`}>
                    {faq.question}
                  </span>
                  <div className="text-[#D4A373] shrink-0 ml-4">
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 mt-4' : 'max-h-0'}`}>
                  <p className="text-[16px] text-[#6B6B6B] font-sans leading-relaxed">
                    {faq.answer}
                  </p>
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
