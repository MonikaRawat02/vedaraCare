import React from 'react';
import Head from 'next/head';
import BlogHero from '../../components/blog/BlogHero';
import BlogFeaturedImage from '../../components/blog/BlogFeaturedImage';
import BlogQuickAnswer from '../../components/blog/BlogQuickAnswer';
import BlogBody from '../../components/blog/BlogBody';
import BlogAuthorCard from '../../components/blog/BlogAuthorCard';
import BlogRelatedArticles from '../../components/blog/BlogRelatedArticles';
import BlogNewsletter from '../../components/blog/BlogNewsletter';
import BlogFinalCTA from '../../components/blog/BlogFinalCTA';
import { panchakarmaBlog as data } from '../../data/blog-posts';

const PanchakarmaPage = () => {
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
          bgColor={data.heroBgColor}
        />

        <BlogFeaturedImage 
          image={data.featuredImage} 
          bgColor="bg-white"
        />

        <BlogQuickAnswer 
          title={data.quickAnswer.title}
          content={data.quickAnswer.content}
          bgColor={data.quickAnswerBgColor}
        />

        <BlogBody 
          sections={data.sections}
          tableOfContents={data.tableOfContents}
          cta={data.cta}
          bgColor={data.contentBgColor}
        />

        <BlogAuthorCard 
          name={data.author.name}
          credentials={data.author.credentials}
          bio={data.author.bio}
          readMoreHref={data.author.readMoreHref}
          bookHref={data.author.bookHref}
        />

        <BlogRelatedArticles 
          title="Related articles on Panchakarma and Ayurveda"
          browseAllHref="/blog"
          articles={data.relatedArticles}
          bgColor={data.relatedArticlesBgColor}
        />

        <div className={`${data.newsletterBgColor} px-6 pb-24`}>
          <BlogNewsletter />
        </div>

        <div id={data.finalCta.id}>
          <BlogFinalCTA 
            label={data.finalCta.label}
            title={data.finalCta.title}
            content={data.finalCta.content}
            bookHref={data.finalCta.bookHref}
            whatsappUrl={data.finalCta.whatsappUrl}
            footerInfo={data.finalCta.footerInfo}
            bgColor={data.finalCtaBgColor}
          />
        </div>
      </div>
    </div>
  );
};

export default PanchakarmaPage;
