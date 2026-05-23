import React from 'react';
import Link from 'next/link';
import { Building2, Heart, Home, ArrowRight } from 'lucide-react';

const NextSteps = ({
  label = "NEXT STEPS",
  title = "Where would you like to go next?",
  pages = []
}) => {
  const getIcon = (title) => {
    const t = title.toLowerCase();
    if (t.includes('clinic')) return <Building2 size={20} className="text-[#C9A961]" />;
    if (t.includes('condition') || t.includes('treatments')) return <Heart size={20} className="text-[#C9A961]" />;
    if (t.includes('home')) return <Home size={20} className="text-[#C9A961]" />;
    return <ArrowRight size={20} className="text-[#C9A961]" />;
  };

  const getLinkText = (title) => {
    const t = title.toLowerCase();
    if (t.includes('condition')) return "Browse Conditions";
    if (t.includes('home')) return "Home Healthcare";
    return title;
  };

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-[13px] font-sans font-semibold tracking-[0.12em] text-[#C9A961] uppercase mb-4">
            {label}
          </p>
          <h2 className="text-[clamp(24px,3.5vw,42px)] font-serif font-medium text-[#1A1A1A] leading-[1.2]">
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pages.map((page, index) => (
            <Link
              key={index}
              href={page.href}
              className="block bg-[#FAF6EF] rounded-[8px] p-8 transition-all duration-200 hover:-translate-y-1 group border border-transparent hover:border-[#C9A961]/20"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 bg-[#C9A961]/10">
                {getIcon(page.title)}
              </div>
              <h3 className="text-[18px] font-serif font-semibold text-[#1A1A1A] mb-3">
                {page.title}
              </h3>
              <p className="text-[13.5px] leading-[1.65] text-[#6B6B6B] font-sans mb-5">
                {page.description}
              </p>
              <span className="text-[13px] font-semibold text-[#C9A961] flex items-center gap-1">
                {getLinkText(page.title)}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
