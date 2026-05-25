import React from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';

const TreatmentHomeHealthcare = ({
  bgColor = "bg-[#F5F0E8]",
  label = "HOME HEALTHCARE",
  title = "For our elderly and post-illness patients, home Njavarakizhi changes outcomes.",
  description = "",
  quote = "",
  features = [],
  priceText = "",
  priceNote = "",
  footer = "",
  image = "",
  imageAlt = ""
}) => {
  return (
    <section className="bg-card py-24 px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p 
            className="text-xs font-medium uppercase tracking-widest mb-4"
            style={{ 
              color: 'rgb(184, 144, 30)', 
              letterSpacing: '0.16em' 
            }}
          >
            {label}
          </p>
          <h2 
            className="text-3xl md:text-4xl mb-4"
            style={{ 
              fontFamily: 'Fraunces, Georgia, serif', 
              fontWeight: 500 
            }}
          >
            {title}
          </h2>
          {description && (
            <p 
              className="text-muted-foreground max-w-[720px] mx-auto text-sm"
              style={{ lineHeight: 1.75 }}
            >
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-14 lg:gap-20 items-center">
          <div>
            {quote && (
              <p 
                className="text-base text-foreground mb-6"
                style={{ lineHeight: 1.85 }}
              >
                {quote}
              </p>
            )}
            
            <ul className="space-y-3.5 mb-8">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 text-sm"
                >
                  <Check 
                    width={15} 
                    height={15}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: 'rgb(184, 144, 30)' }}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            {priceText && (
              <div className="bg-muted rounded-lg px-5 py-4 mb-7">
                <p className="text-sm font-medium text-foreground">
                  {priceText}
                </p>
                {priceNote && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {priceNote}
                  </p>
                )}
              </div>
            )}
            
            {footer && (
              <p 
                className="text-sm text-muted-foreground mb-8"
                style={{ lineHeight: 1.8 }}
              >
                {footer}
              </p>
            )}
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href="/book/"
                className="px-6 py-3.5 text-sm font-medium text-white text-center rounded-md transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'rgb(26, 21, 16)' }}
              >
                Book Home Abhyanga
              </Link>
              <Link 
                href="/home-healthcare-dubai/"
                className="px-6 py-3.5 text-sm font-medium text-center rounded-md border border-border hover:bg-muted transition-colors"
              >
                Read about Home Healthcare
              </Link>
            </div>
          </div>
          
          {image && (
            <div className="rounded-xl overflow-hidden bg-muted" style={{ minHeight: 440 }}>
              <img 
                src={image} 
                alt={imageAlt || "Home healthcare service"}
                className="w-full h-full object-cover"
                style={{ minHeight: 440 }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TreatmentHomeHealthcare;
