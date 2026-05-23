import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const TreatmentHomeHealthcare = ({
  bgColor = "bg-[#F5F0E8]",
  label = "HOME HEALTHCARE",
  title = "For our elderly and post-illness patients, home Njavarakizhi changes outcomes.",
  description = "",
  quote = "",
  features = [],
  priceText = "",
  image = "",
  imageAlt = ""
}) => {
  return (
    <section className={`${bgColor} py-24`} style={{ backgroundColor: 'rgb(245, 240, 232)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p 
            className="text-xs font-semibold tracking-[0.18em] uppercase mb-4"
            style={{ 
              color: 'rgb(184, 145, 90)', 
              fontFamily: '"DM Sans", sans-serif' 
            }}
          >
            {label}
          </p>
          <h2 
            className="mb-4"
            style={{ 
              fontFamily: 'Fraunces, serif', 
              fontWeight: '500', 
              fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', 
              color: 'rgb(28, 28, 26)', 
              lineHeight: '1.25' 
            }}
          >
            {title}
          </h2>
          {description && (
            <p 
              className="text-sm leading-relaxed"
              style={{ 
                color: 'rgb(107, 99, 89)', 
                maxWidth: '580px', 
                margin: '0px auto' 
              }}
            >
              {description}
            </p>
          )}
        </div>

        <div 
          className="grid lg:grid-cols-[60fr_40fr] gap-12 lg:gap-16 items-center"
        >
          <div>
            {quote && (
              <p 
                className="text-base leading-[1.85] mb-5"
                style={{ 
                  color: 'rgb(74, 67, 60)', 
                  fontStyle: 'italic' 
                }}
              >
                "{quote}"
              </p>
            )}
            
            <p 
              className="text-sm leading-[1.85] mb-8"
              style={{ color: 'rgb(90, 82, 72)' }}
            >
              Our home Njavarakizhi service brings two trained therapists, freshly cooked Njavara rice (prepared at the clinic and transported warm in insulated containers), the herbal milk vessel, oils, and all required equipment. The therapy is performed in your home with the same clinical protocol as the clinic version.
            </p>
            
            <ul className="space-y-3 mb-7">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-2.5 text-sm"
                  style={{ color: 'rgb(74, 67, 60)' }}
                >
                  <Check 
                    size={13} 
                    className="mt-0.5 shrink-0"
                    style={{ color: 'rgb(184, 145, 90)' }}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            
            {priceText && (
              <div 
                className="inline-block px-5 py-3 rounded-lg mb-7 text-sm font-medium"
                style={{ 
                  background: 'rgb(42, 67, 64)', 
                  color: 'rgb(245, 240, 232)' 
                }}
              >
                {priceText}
              </div>
            )}
            
            <div className="flex flex-wrap gap-3">
              <Link 
                href="/book/"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm transition-transform hover:scale-[1.02] active:scale-100"
                style={{ 
                  background: 'rgb(42, 67, 64)', 
                  color: 'rgb(245, 240, 232)' 
                }}
              >
                Check Home Njavarakizhi Availability
              </Link>
              <Link 
                href="/home-healthcare-dubai/"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
                style={{ 
                  border: '1px solid rgb(42, 67, 64)', 
                  color: 'rgb(42, 67, 64)' 
                }}
              >
                Home Healthcare
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          
          {image && (
            <div 
              className="rounded-2xl overflow-hidden"
              style={{ 
                background: 'rgb(196, 184, 154)', 
                aspectRatio: '4 / 5' 
              }}
            >
              <img 
                src={image} 
                alt={imageAlt || "Home healthcare service"}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TreatmentHomeHealthcare;
