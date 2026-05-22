import React from 'react';
import { Check } from 'lucide-react';

const HomeHealthcare = () => {
  const features = [
    "Doctor on Call 24/7",
    "Physiotherapy at Home",
    "Lab Collection",
    "Newborn Care",
    "Home Nursing",
    "IV Drip Therapy",
    "Vaccinations",
    "Elderly Care"
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 items-center">
          {/* Image Content */}
          <div className="aspect-[4/5] bg-gradient-to-br from-[#F6F1EA] to-[#FAF8EF] rounded-[2rem] flex items-center justify-center text-[#A1A1A1] font-sans shadow-sm overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
               <span className="text-sm">Home Healthcare Visit Photo</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8 lg:pl-12">
            <div className="space-y-4">
              <span className="text-[13px] font-sans tracking-[0.1em] text-[#C9A961] uppercase block">
                DOCTOR ON CALL | NURSING | PHYSIO AT HOME
              </span>
              <h2 className="text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2]">
                When coming to the clinic is not the right answer.
              </h2>
            </div>

            <p className="text-[16px] text-[#6B6B6B] font-sans leading-relaxed">
              Our home healthcare team brings DHA-licensed doctors, registered nurses and qualified physiotherapists to your door across JVC, JVT, Al Barsha South, Sports City and all of Dubai. Same protocols. Same accountability. Faster access.
            </p>

            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-[15px] text-[#1A1A1A] font-sans">
                  <Check size={16} className="text-[#4A7C59] shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#184C3A] text-white rounded-lg font-sans font-bold text-[16px] hover:bg-[#123a2c] transition-all">
                Request a Home Visit
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white border border-[#184C3A] text-[#184C3A] rounded-lg font-sans font-bold text-[16px] hover:bg-[#F6F1EA] transition-all">
                Learn More
              </button>
            </div>

            <p className="text-[14px] text-[#6B6B6B] font-sans italic">
              Typical response time within JVC: 30 to 60 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHealthcare;
