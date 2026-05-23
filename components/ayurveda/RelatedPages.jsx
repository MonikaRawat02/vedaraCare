import React from 'react';
import Link from 'next/link';

const RelatedPages = ({
  bgColor = "bg-[#FAF7F2]",
  label = "EXPLORE FURTHER",
  title = "Related pages.",
  linkText = "Browse all Ayurvedic treatments →",
  pages = []
}) => {
  return (
    <section className={`${bgColor} py-20 px-6 relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="text-[#C8975F] text-sm font-semibold tracking-wider mb-2">
              {label}
            </div>
            <h2 className="text-3xl text-[#1A1A1A]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              {title}
            </h2>
          </div>
          
          <Link 
            href="/treatments"
            className="text-[#1A5D4D] hover:underline text-sm"
          >
            {linkText}
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pages.map((page, index) => (
            <Link
              key={index}
              href={page.href}
              className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow group"
            >
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2 group-hover:text-[#1A5D4D]">
                {page.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {page.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPages;
