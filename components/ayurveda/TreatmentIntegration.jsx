import React from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';

const TreatmentIntegration = ({
  bgColor = "bg-[#F5F1E8]",
  label = "INTEGRATED CARE AT VEDARA",
  title = "Why our back pain patients often combine Kativasti with physiotherapy.",
  paragraphs = [],
  image = "",
  features = [],
  button1Text = "",
  button2Text = "",
  button2Link = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[#C8975F] text-sm font-semibold tracking-wider mb-3">
            {label}
          </div>
          <h2 className="text-4xl text-[#1A1A1A]" style={{ fontFamily: 'var(--font-serif)' }}>
            {title}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="lg:w-[60%]">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className={`text-gray-700 leading-relaxed ${index === 0 ? 'text-lg mb-6' : 'mb-8'}`} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C8975F] mt-0.5 shrink-0" />
                  <span className="text-gray-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 bg-[#1A5D4D] hover:bg-[#154935] text-white">
                {button1Text}
              </button>
              {button2Link && button2Text && (
                <Link 
                  href={button2Link}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 border bg-background hover:text-accent-foreground border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  {button2Text}
                </Link>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-[40%]">
            <img 
              src={image || "https://images.unsplash.com/photo-1731597076108-f3bbe268162f?w=600"} 
              alt="Integrated care consultation" 
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentIntegration;
