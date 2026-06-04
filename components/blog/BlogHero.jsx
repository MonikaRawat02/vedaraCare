import React from 'react';
import Link from 'next/link';
import { Clock, User, MessageCircle, Copy, Mail } from 'lucide-react';

const BlogHero = ({ 
  category, 
  title, 
  description, 
  readingTime, 
  authorName, 
  publishDate, 
  updatedDate,
  breadcrumbs = [],
  bgColor = "bg-[#FAF8F5]"
}) => {
  return (
    <>
      {/* Breadcrumb Bar - Full Width White Background */}
      <div className="bg-white border-b border-gray-100 h-12 flex items-center mb-0">
        <div className="max-w-[1200px] mx-auto px-6 w-full flex items-center gap-1.5 text-[13px]">
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              <Link href={item.href} className="font-sans text-[#6B6B6B] hover:text-[#D4A373] transition-colors">
                {item.label}
              </Link>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="13" 
                height="13" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-[#6B6B6B]"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </React.Fragment>
          ))}
          <span className="font-sans text-[#1A1A1A] truncate max-w-[300px]">{title}</span>
        </div>
      </div>

      {/* Hero Content */}
      <div className={`${bgColor} py-[120px] px-6`}>
        <div className="max-w-[880px] mx-auto text-center">
          {/* Category and Read Time */}
          <div className="flex items-center justify-between mb-6 max-w-[720px] mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-medium bg-[#E8D6A8] text-[#1A1A1A] font-sans tracking-wide">
              {category}
            </span>
            <div className="flex items-center gap-2 text-[#6B6B6B] text-[14px] font-sans">
              <Clock size={16} />
              <span>{readingTime}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-[40px] md:text-[56px] font-serif font-medium text-[#1A1A1A] leading-[1.15] mb-6 max-w-[720px] mx-auto">
            {title}
          </h1>

          {/* Description */}
          <p className="text-[18px] md:text-[20px] leading-[1.5] text-[#6B6B6B] mb-8 max-w-[720px] mx-auto font-sans">
            {description}
          </p>

          {/* Author and Metadata */}
          <div className="flex flex-col items-center gap-4 py-6 border-t border-b border-[rgba(0,0,0,0.1)] max-w-[720px] mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#D4A373] rounded-full flex items-center justify-center text-white">
                <User size={20} />
              </div>
              <div className="text-left font-sans">
                <div className="text-[14px] font-bold text-[#1A1A1A]">
                  {authorName}
                </div>
                <div className="text-[14px] text-[#6B6B6B]">
                  Medically reviewed · Published {publishDate} · Updated {updatedDate}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-8 mt-2">
              <button className="flex items-center gap-2 text-[14px] text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors font-medium font-sans">
                <MessageCircle size={18} /> WhatsApp
              </button>
              <button className="flex items-center gap-2 text-[14px] text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors font-medium font-sans">
                <Copy size={18} /> Copy Link
              </button>
              <button className="flex items-center gap-2 text-[14px] text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors font-medium font-sans">
                <Mail size={18} /> Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHero;
