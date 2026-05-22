import React from 'react';

const About = () => {
  return (
    <section className="bg-[#184C3A] text-[#FAF8EF] py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[13px] font-sans tracking-[0.1em] text-[#C9A961] uppercase block">
                About Vedara Care
              </span>
              <h2 className="text-[42px] font-serif font-medium leading-[1.2] max-w-xl">
                A polyclinic built around one belief — that healing should treat the whole person.
              </h2>
            </div>
            
            <p className="text-[18px] font-sans leading-relaxed opacity-90 max-w-[580px]">
              Vedara Care Polyclinic is a DHA-licensed holistic healthcare clinic in Jumeirah Village Circle, Dubai. We integrate classical Ayurveda, modern physiotherapy, medical dermatology, home healthcare and wellness programs under one roof. Our BAMS-qualified Ayurvedic physicians and DPT physiotherapists work alongside board-certified dermatologists to serve JVC residents and patients across Dubai.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10 max-w-[580px]">
              <div className="space-y-2">
                <h4 className="text-[32px] font-serif font-bold text-[#C9A961]">5,000+</h4>
                <p className="text-[14px] opacity-80 font-sans uppercase tracking-[0.05em]">Patients Treated</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-[32px] font-serif font-bold text-[#C9A961]">15+</h4>
                <p className="text-[14px] opacity-80 font-sans uppercase tracking-[0.05em]">DNA Licensed Practitioners</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-[32px] font-serif font-bold text-[#C9A961]">20+</h4>
                <p className="text-[14px] opacity-80 font-sans uppercase tracking-[0.05em]">Treatment Protocols</p>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
              alt="Clinic Interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <span className="text-white/60 font-sans text-sm">Clinic Interior Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
