import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import BlogOutcomeTable from './BlogOutcomeTable';

const BlogBody = ({ sections, tableOfContents, cta, bgColor = "bg-[#FDFCF9]" }) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    tableOfContents.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tableOfContents]);

  return (
    <div className={`${bgColor} py-24 px-6`}>
      <div className="flex flex-col lg:flex-row gap-20 max-w-[1200px] mx-auto">
        {/* Sidebar */}
        <aside className="lg:w-[280px] shrink-0">
          <div className="sticky top-32">
            <h3 className="text-[11px] font-bold text-[#C9A961] uppercase tracking-[0.2em] mb-8 font-sans">IN THIS ARTICLE</h3>
            <nav className="flex flex-col gap-5">
              {tableOfContents.map((item, index) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`}
                  className={`group flex gap-3 text-[15px] transition-colors leading-[1.4] font-sans ${
                    activeId === item.id ? 'text-[#D4A373]' : 'text-[#6B6B6B] hover:text-[#D4A373]'
                  }`}
                >
                  <span className={`transition-colors font-medium ${
                    activeId === item.id ? 'text-[#D4A373]' : 'text-[#D1D1D1] group-hover:text-[#D4A373]'
                  }`}>{index + 1}.</span> 
                  <span className="flex-1">{item.title}</span>
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Article Content */}
        <article className="lg:max-w-[720px]">
          <div className="max-w-none text-gray-800">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="mb-24 last:mb-0 scroll-mt-32">
                <h2 className="text-[32px] font-serif font-medium text-[#1A1A1A] mb-8 leading-tight">
                  {section.title}
                </h2>
                
                {section.intro && (
                  <p className="mb-8 text-[18px] leading-relaxed font-sans text-[#4A4A4A] italic opacity-90">{section.intro}</p>
                )}

                {section.table && (
                  <div className="my-12">
                    <BlogOutcomeTable 
                      title={section.table.title}
                      description={section.table.description}
                      headers={section.table.headers}
                      rows={section.table.rows}
                    />
                  </div>
                )}

                {section.content && section.content.map((para, i) => (
                  <p key={i} className="mb-8 text-[18px] leading-relaxed font-sans text-[#4A4A4A]">{para}</p>
                ))}

                {section.quote && (
                  <blockquote className="text-[28px] md:text-[32px] font-serif italic text-[#D4A373] border-none text-center my-20 px-6 md:px-12 leading-relaxed">
                    "{section.quote}"
                  </blockquote>
                )}

                {section.list && (
                  <div className="bg-[#F9F7F2] p-8 md:p-10 rounded-lg my-12 border border-[#EAE3D5]">
                    <h4 className="text-[18px] font-sans font-bold text-[#1A1A1A] mb-6">{section.list.title}</h4>
                    <ul className="space-y-4">
                      {section.list.items.map((item, i) => (
                        <li key={i} className="flex gap-4 text-[16px] md:text-[17px] leading-relaxed text-[#4A4A4A] font-sans">
                          <span className="text-[#D4A373] mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.subsections && (
                  <div className="space-y-16 mt-12">
                    {section.subsections.map((sub, i) => (
                      <div key={i}>
                        <h3 className="text-[24px] font-serif font-medium text-[#1A1A1A] mb-4">{sub.title}</h3>
                        <p className="text-[18px] leading-relaxed font-sans text-[#4A4A4A]">{sub.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Want to read more CTA */}
            {cta && (
              <div className="bg-[#E8D6A8] p-8 md:p-12 rounded-lg mt-24 text-center border-none shadow-sm">
                <h3 className="text-[20px] md:text-[24px] font-serif font-medium text-[#1A1A1A] mb-4 font-sans leading-tight">
                  {cta.title}
                </h3>
                <p className="text-[#1A1A1A] mb-8 max-w-[600px] mx-auto font-sans text-[17px] md:text-[19px] leading-[1.75]">
                  {cta.text}
                </p>
                <Link 
                  href={cta.buttonHref} 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A961] text-white rounded-lg font-bold hover:opacity-90 transition-all shadow-md font-sans text-[15px]"
                >
                  {cta.buttonText} <ArrowRight size={18} />
                </Link>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogBody;
