import React from 'react';

const Physician = ({ label, name, qualification, description, image, alt, stats, languages, button1Text, button2Text, profileLink }) => {
  return (
    <section className="bg-[#184C3A] py-24 px-6 text-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-[45fr_55fr] gap-14 items-center">
          {/* Image Side */}
          <div className="relative rounded-[12px] overflow-hidden aspect-[4/5] max-h-[583px] shadow-2xl">
            <img 
              src={image.startsWith('http') || image.startsWith('/') ? image : `/images/${image}`} 
              alt={alt || name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="space-y-5">
            <div className="space-y-1">
              <p className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase">
                {label}
              </p>
              <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-serif font-normal leading-[1.1] text-white">
                {name}
              </h2>
              <p className="text-[15px] font-sans font-semibold tracking-wider text-[#C9A961] ">
                {qualification}
              </p>
            </div>

            <p className="text-[17px] font-sans leading-[1.7] text-white/80 max-w-[480px]">
              {description}
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <h4 className="text-[24px] font-serif font-bold text-white">{stat.value}</h4>
                  <p className="text-[13px] text-white/60 font-sans  tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="text-[13px] text-white/55 font-sans">
              {languages}
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <button className="px-8 py-3 bg-[#C9A961] text-[#1A1A1A] rounded-full font-sans font-medium text-[15px] hover:bg-[#B89850] transition-all">
                {button1Text}
              </button>
              {profileLink ? (
                <a href={profileLink} className="px-8 py-3 bg-transparent border border-white/30 text-white rounded-full font-sans font-medium text-[15px] hover:bg-white/10 transition-all">
                  {button2Text}
                </a>
              ) : (
                <button className="px-8 py-3 bg-transparent border border-white/30 text-white rounded-full font-sans font-medium text-[15px] hover:bg-white/10 transition-all">
                  {button2Text}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Physician;
