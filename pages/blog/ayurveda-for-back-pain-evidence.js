import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import BlogHero from '../../components/blog/BlogHero';
import BlogQuickAnswer from '../../components/blog/BlogQuickAnswer';
import BlogOutcomeTable from '../../components/blog/BlogOutcomeTable';
import BlogAuthorCard from '../../components/blog/BlogAuthorCard';
import BlogRelatedArticles from '../../components/blog/BlogRelatedArticles';
import BlogNewsletter from '../../components/blog/BlogNewsletter';
import BlogFinalCTA from '../../components/blog/BlogFinalCTA';
import { ArrowRight } from 'lucide-react';
import { backPainEvidenceBlog as data } from '../../data/blog-posts';

const BlogPost = () => {
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

    data.tableOfContents.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      <Head>
        <title>{data.title} | Vedara Care</title>
        <meta name="description" content={data.description} />
      </Head>

      <div className="w-full">
        <BlogHero 
          category={data.category}
          title={data.title}
          description={data.description}
          readingTime={data.readingTime}
          authorName={data.author.name}
          publishDate={data.publishDate}
          updatedDate={data.updatedDate}
          breadcrumbs={data.breadcrumbs}
        />

        {/* Featured Image */}
        <div className="bg-white pb-20 px-6">
          <div className="max-w-[1080px] mx-auto">
            <div className="aspect-video bg-[#F5F1E9] rounded-lg overflow-hidden">
              <img 
                src={data.featuredImage.url} 
                alt={data.featuredImage.alt} 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-[14px] italic text-[#6B6B6B] mt-6 max-w-[720px] mx-auto leading-relaxed font-sans">
              {data.featuredImage.caption}
            </p>
          </div>
        </div>

        {/* Quick Answer Section - Full Width Background */}
        <BlogQuickAnswer 
          title={data.quickAnswer.title}
          content={data.quickAnswer.content}
        />

        {/* Content Section with Sidebar */}
        <div className="bg-[#FDFCF9] py-24 px-6">
          <div className="flex flex-col lg:flex-row gap-20 max-w-[1200px] mx-auto">
            {/* Sidebar */}
            <aside className="lg:w-[280px] shrink-0">
              <div className="sticky top-32">
                <h3 className="text-[11px] font-bold text-[#A1A1A1] uppercase tracking-[0.2em] mb-8 font-sans">IN THIS ARTICLE</h3>
                <nav className="flex flex-col gap-5">
                  {data.tableOfContents.map((item, index) => (
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
                {data.sections.map((section) => (
                  <div key={section.id} id={section.id} className="mb-24 last:mb-0">
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
                <div className="bg-[#E8D6A8] p-8 md:p-12 rounded-lg mt-24 text-center border-none shadow-sm">
                  <h3 className="text-[20px] md:text-[24px] font-serif font-medium text-[#1A1A1A] mb-4 font-sans leading-tight">
                    {data.cta.title}
                  </h3>
                  <p className="text-[#1A1A1A] mb-8 max-w-[600px] mx-auto font-sans text-[17px] md:text-[19px] leading-[1.75]">
                    {data.cta.text}
                  </p>
                  <Link 
                    href={data.cta.buttonHref} 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A961] text-white rounded-lg font-bold hover:opacity-90 transition-all shadow-md font-sans text-[15px]"
                  >
                    {data.cta.buttonText} <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Footer sections */}
        <BlogAuthorCard 
          name={data.author.name}
          credentials={data.author.credentials}
          bio={data.author.bio}
          readMoreHref={data.author.readMoreHref}
          bookHref={data.author.bookHref}
        />

        {/* Related Articles Section */}
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <BlogRelatedArticles 
            title="Related articles on back pain and Ayurveda"
            browseAllHref="/blog"
            articles={data.relatedArticles}
          />
        </div>

        {/* Newsletter & Final CTA Section */}
        <div className="bg-[#FDFCF9] px-6">
          <BlogNewsletter />

          <div id={data.finalCta.id}>
            <BlogFinalCTA 
              label={data.finalCta.label}
              title={data.finalCta.title}
              content={data.finalCta.content}
              bookHref={data.finalCta.bookHref}
              whatsappUrl={data.finalCta.whatsappUrl}
              footerInfo={data.finalCta.footerInfo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
