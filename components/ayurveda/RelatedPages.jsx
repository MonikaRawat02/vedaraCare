import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const RelatedPages = ({
  bgColor = "bg-[#FAF7F2]",
  label = "EXPLORE FURTHER",
  title = "Related pages.",
  linkText = "Browse all Ayurveda treatments →",
  linkHref = "/treatments",
  pages = []
}) => {
  return (
    <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div className="space-y-4">
            <div className="text-[#C9A961] text-[13px] font-sans font-semibold tracking-[0.12em] uppercase">
              {label}
            </div>
            <h2 className="text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2]">
              {title}
            </h2>
          </div>
          
          <Link 
            href={linkHref}
            className="text-[#C9A961] hover:underline text-[15px] font-sans font-medium mb-2"
          >
            {linkText}
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pages.map((page, index) => (
            <Link
              key={index}
              href={page.href}
              className="bg-white p-8 rounded-[8px] hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
            >
              <h3 className="text-[20px] font-serif font-semibold text-[#1A1A1A] mb-4 group-hover:text-[#184C3A] transition-colors flex items-center justify-between">
                {page.title}
              </h3>
              <p className="text-[14.5px] text-[#6B6B6B] font-sans leading-relaxed mb-8 flex-1">
                {page.description}
              </p>
              <div className="text-[13px] text-[#C9A961] font-sans font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                {page.href}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPages;
