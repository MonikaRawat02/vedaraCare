import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const RelatedPages = ({
  bgColor = "bg-[#F5F0E8]",
  label = "EXPLORE FURTHER",
  title = "Related pages.",
  linkText = "Browse all Ayurvedic treatments",
  linkHref = "/ayurveda-dubai/",
  pages = [],
  columns = 4,
  showUrl = false
}) => {
  const gridCols = columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4';

  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p 
              className="text-xs font-semibold tracking-[0.18em] uppercase mb-4"
              style={{ color: 'rgb(184, 145, 90)', fontFamily: '"DM Sans", sans-serif' }}
            >
              {label}
            </p>
            <h2 
              className=""
              style={{ 
                fontFamily: 'Fraunces, serif', 
                fontWeight: '500', 
                fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', 
                color: 'rgb(28, 28, 26)', 
                lineHeight: '1.25' 
              }}
            >
              {title}
            </h2>
          </div>
          
          <Link 
            href={linkHref}
            className="hidden sm:flex items-center gap-1 text-sm"
            style={{ color: 'rgb(184, 145, 90)' }}
          >
            {linkText}
            <ArrowRight size={13} />
          </Link>
        </div>

        <div className={`grid sm:grid-cols-2 ${gridCols} gap-4`}>
          {pages.map((page, index) => (
            <Link
              key={index}
              href={page.href}
              className="rounded-xl p-6 flex flex-col gap-3 transition-transform hover:scale-[1.02]"
              style={{ background: 'rgb(255, 255, 255)' }}
            >
              <h3 
                className="text-sm font-medium"
                style={{ fontFamily: 'Fraunces, serif', color: 'rgb(28, 28, 26)' }}
                dangerouslySetInnerHTML={{ __html: page.title }}
              />
              <p 
                className="text-xs leading-relaxed flex-1"
                style={{ color: 'rgb(107, 99, 89)' }}
                dangerouslySetInnerHTML={{ __html: page.description }}
              />
              {showUrl ? (
                <span 
                  className="text-[11px] flex items-center gap-1 font-medium mt-2"
                  style={{ color: 'rgb(184, 145, 90)', opacity: 0.8 }}
                >
                  {page.href}
                </span>
              ) : (
                <span 
                  className="text-xs flex items-center gap-1 font-medium"
                  style={{ color: 'rgb(184, 145, 90)' }}
                >
                  Read more
                  <ArrowRight size={11} />
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default RelatedPages;
