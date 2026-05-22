import React from 'react';
import Link from 'next/link';

const DoctorArticles = ({ doctor }) => {
  const articles = [
    {
      category: 'Clinical Insight',
      title: 'The Clinical Reality of Shirodhara for Chronic Stress',
      excerpt: 'Dr. Nair examines the evidence base for continuous oil-stream therapy and what patients should realistically expect from a structured Shirodhara protocol.',
      date: 'April 2026',
      image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=480&h=360&fit=crop&auto=format',
      alt: 'The Clinical Reality of Shirodhara for Chronic Stress - Article by Dr. Nair'
    },
    {
      category: 'Women\'s Health',
      title: 'PCOS Through the Ayurvedic Lens: A Kapha-Pitta Perspective',
      excerpt: 'A practical guide to understanding how dosha imbalance contributes to polycystic ovarian syndrome — and why the treatment timeline is measured in months, not weeks.',
      date: 'March 2026',
      image: 'https://images.unsplash.com/photo-1624629747980-9028b99db266?w=600&amp;height=400&amp;fit=crop&amp;auto=format',
      alt: 'PCOS Through the Ayurvedic Lens: A Kapha-Pitta Perspective - Article by Dr. Nair'
    },
    {
      category: 'Research',
      title: 'KatiVasti for Lumbar Disc Disease: What the Research Shows',
      excerpt: 'A review of three clinical studies on the efficacy of localised oil pooling therapy for L4-L5 and L5-S1 disc issues, and what this means for treatment planning.',
      date: 'February 2026',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&h=360&fit=crop&auto=format',
      alt: 'KatiVasti for Lumbar Disc Disease: What the Research Shows - Article by Dr. Nair'
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[13px] font-semibold tracking-[0.14em] uppercase mb-4" style={{ color: 'rgb(201, 169, 97)' }}>
              FROM THE JOURNAL
            </p>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '500', color: 'rgb(26, 26, 26)' }}>
              Articles by {doctor.firstName}.
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-[14px] font-medium flex items-center gap-1 transition-opacity hover:opacity-70"
            style={{ color: 'rgb(201, 169, 97)' }}
          >
            Read all articles
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {articles.map((article, index) => (
            <Link
              key={index}
              href="/blog"
              className="rounded-[8px] overflow-hidden cursor-pointer group"
              style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(229, 223, 211)' }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '4 / 3', background: 'rgb(228, 216, 200)' }}>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-[8px] text-[11px] font-semibold tracking-wide uppercase" style={{ background: 'rgb(240, 233, 221)', color: 'rgb(26, 26, 26)' }}>
                    {article.category}
                  </span>
                </div>
                <img
                  src={article.image}
                  alt={article.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-[12px] font-medium tracking-wide uppercase mb-2" style={{ color: 'rgb(107, 107, 107)' }}>
                  {article.date}
                </p>
                <h3 className="font-semibold text-[16px] mb-2 leading-snug" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26, 26, 26)' }}>
                  {article.title}
                </h3>
                <p className="text-[13px] leading-relaxed" style={{ color: 'rgb(107, 107, 107)' }}>
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorArticles;
