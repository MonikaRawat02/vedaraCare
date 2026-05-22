import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const Location = () => {
  return (
    <section className="bg-[#FAF8EF] py-24 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Content */}
          <div className="relative aspect-square bg-[#F6F1EA] rounded-[2rem] overflow-hidden shadow-sm flex items-center justify-center text-[#A1A1A1] font-sans">
            <span className="text-sm">Map with Vedara Care Pin</span>
            
            {/* Location Card Overlay */}
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[280px] space-y-3">
              <div className="space-y-1">
                <h4 className="text-[16px] font-serif font-bold text-[#1A1A1A]">Vedara Care Polyclinic</h4>
                <p className="text-[13px] text-[#6B6B6B] font-sans">JVC, Dubai</p>
              </div>
              <button className="text-[#C9A961] font-sans font-bold text-[14px] flex items-center gap-2 hover:underline">
                <Navigation size={14} />
                Get Directions
              </button>
            </div>
          </div>

          {/* Contact Content */}
          <div className="lg:pl-12 space-y-10">
            <div className="space-y-4">
              <span className="text-[13px] font-sans tracking-[0.1em] text-[#C9A961] uppercase block">
                FIND US IN JVC
              </span>
              <h2 className="text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2]">
                Right next to Circle Mall. Two minutes from FIVE Jumeirah Village.
              </h2>
            </div>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm h-fit">
                  <MapPin size={20} className="text-[#184C3A]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[16px] font-sans font-bold text-[#1A1A1A]">Address</h4>
                  <p className="text-[15px] text-[#6B6B6B] font-sans leading-relaxed">
                    [Full Street Address]<br />
                    Jumeirah Village Circle<br />
                    Dubai, UAE
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm h-fit">
                  <Phone size={20} className="text-[#184C3A]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[16px] font-sans font-bold text-[#1A1A1A]">Contact</h4>
                  <p className="text-[15px] text-[#6B6B6B] font-sans leading-relaxed">
                    Phone: +971 4 XXX XXXX<br />
                    WhatsApp: +971 5X XXX XXXX<br />
                    Email: hello@vedaracare.ae
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm h-fit">
                  <Clock size={20} className="text-[#184C3A]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[16px] font-sans font-bold text-[#1A1A1A]">Hours</h4>
                  <p className="text-[15px] text-[#6B6B6B] font-sans leading-relaxed">
                    Mon - Sat: 9 AM to 9 PM<br />
                    Sun: 10 AM to 7 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <p className="text-[14px] text-[#6B6B6B] font-sans">
                Free covered parking available for patients
              </p>
              
              <div className="flex flex-wrap gap-3">
                {["5 min from JSS School", "3 min from FIVE JVC", "Next to Circle Mall"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-white rounded-full text-[13px] text-[#6B6B6B] font-sans shadow-sm border border-gray-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961]" />
                    {tag}
                  </span>
                ))}
              </div>

              <button className="px-10 py-4 bg-[#184C3A] text-white rounded-lg font-sans font-bold text-[16px] hover:bg-[#123a2c] transition-all shadow-md">
                Book Your Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
