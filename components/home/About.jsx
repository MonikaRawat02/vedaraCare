import React from 'react';

const About = ({
  label = "About Vedara Care",
  title = "A polyclinic built around one belief — that healing should treat the whole person.",
  description = "Vedara Care Polyclinic is a DHA-licensed holistic healthcare clinic in Jumeirah Village Circle, Dubai. We integrate classical Ayurveda, modern physiotherapy, medical dermatology, home healthcare and wellness programs under one roof. Our BAMS-qualified Ayurvedic physicians and DPT physiotherapists work alongside board-certified dermatologists to serve JVC residents and patients across Dubai.",
  image = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop",
  stats = [
    { value: "5,000+", label: "Patients Treated" },
    { value: "15+", label: "DHA-Licensed Practitioners" },
    { value: "20+", label: "Treatment Protocols" }
  ]
}) => {
  return (
    <section className="bg-[#184C3A] text-[#FAF8EF] py-24 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="text-[13px] font-sans tracking-[0.1em] text-[#C9A961] uppercase block">
                {label}
              </span>
              <h2 className="text-[42px] font-serif font-medium leading-[1.2] text-[#FAF8EF] max-w-3xl">
                {title}
              </h2>
            </div>
            
            <p className="text-[18px] font-sans leading-relaxed opacity-90 max-w-3xl">
              {description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 py-8 border-t border-white/10 max-w-[580px]">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-[32px] font-serif font-semibold text-[#C9A961]">{stat.value}</h4>
                  <p className="text-[14px] opacity-80 font-sans leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Content */}
          <div className="relative aspect-[4/5] bg-[#1F4538] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover opacity-90"
            />
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
