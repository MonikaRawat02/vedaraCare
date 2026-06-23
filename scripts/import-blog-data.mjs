// Import script for sample blog data
import 'dotenv/config';
import mongoose from 'mongoose';
import dbConnect from '../lib/database.js';
import Blog from '../models/blog.js';
import { backPainEvidenceBlog, panchakarmaBlog } from '../data/blog-posts.js';

async function importData() {
  console.log('Connecting to database...');
  await dbConnect();
  
  console.log('Checking existing blogs...');
  await Blog.deleteMany({});
  
  console.log('Importing back pain blog...');
  const backPain = await Blog.create({
    title: backPainEvidenceBlog.title,
    paramlink: backPainEvidenceBlog.slug,
    description: backPainEvidenceBlog.description,
    category: backPainEvidenceBlog.category,
    readingTime: backPainEvidenceBlog.readingTime,
    author: backPainEvidenceBlog.author,
    featuredImage: backPainEvidenceBlog.featuredImage,
    breadcrumbs: backPainEvidenceBlog.breadcrumbs,
    tableOfContents: backPainEvidenceBlog.tableOfContents.map(item => ({
      label: item.title,
      href: `#${item.id}`
    })),
    quickAnswer: backPainEvidenceBlog.quickAnswer,
    sections: backPainEvidenceBlog.sections.map(section => ({
      id: section.id,
      title: section.title,
      content: section.content ? section.content.join('\n\n') : '',
      subsections: section.subsections ? section.subsections.map(sub => ({
        title: sub.title,
        content: sub.text || (sub.content ? sub.content.join('\n\n') : '')
      })) : []
    })),
    cta: backPainEvidenceBlog.cta,
    finalCta: backPainEvidenceBlog.finalCta,
    relatedArticles: backPainEvidenceBlog.relatedArticles.map(art => ({
      title: art.title,
      href: art.href || '',
      date: art.readingTime || ''
    })),
    heroBgColor: backPainEvidenceBlog.heroBgColor || backPainEvidenceBlog.bgColor,
    quickAnswerBgColor: backPainEvidenceBlog.quickAnswerBgColor,
    contentBgColor: backPainEvidenceBlog.contentBgColor,
    relatedArticlesBgColor: backPainEvidenceBlog.relatedArticlesBgColor,
    newsletterBgColor: backPainEvidenceBlog.newsletterBgColor,
    finalCtaBgColor: backPainEvidenceBlog.finalCtaBgColor,
    status: 'published'
  });

  console.log('Importing panchakarma blog...');
  const panchakarma = await Blog.create({
    title: panchakarmaBlog.title,
    paramlink: panchakarmaBlog.slug,
    description: panchakarmaBlog.description,
    category: panchakarmaBlog.category,
    readingTime: panchakarmaBlog.readingTime,
    author: panchakarmaBlog.author,
    featuredImage: panchakarmaBlog.featuredImage,
    breadcrumbs: panchakarmaBlog.breadcrumbs,
    tableOfContents: panchakarmaBlog.tableOfContents.map(item => ({
      label: item.title,
      href: `#${item.id}`
    })),
    quickAnswer: panchakarmaBlog.quickAnswer,
    sections: panchakarmaBlog.sections.map(section => ({
      id: section.id,
      title: section.title,
      content: section.content ? section.content.join('\n\n') : '',
      subsections: section.subsections ? section.subsections.map(sub => ({
        title: sub.title,
        content: sub.text || (sub.content ? sub.content.join('\n\n') : '')
      })) : []
    })),
    cta: panchakarmaBlog.cta,
    finalCta: panchakarmaBlog.finalCta,
    relatedArticles: panchakarmaBlog.relatedArticles.map(art => ({
      title: art.title,
      href: art.href || '',
      date: art.readingTime || ''
    })),
    heroBgColor: panchakarmaBlog.heroBgColor,
    quickAnswerBgColor: panchakarmaBlog.quickAnswerBgColor,
    contentBgColor: panchakarmaBlog.contentBgColor,
    relatedArticlesBgColor: panchakarmaBlog.relatedArticlesBgColor,
    newsletterBgColor: panchakarmaBlog.newsletterBgColor,
    finalCtaBgColor: panchakarmaBlog.finalCtaBgColor,
    status: 'published'
  });

  console.log('Data imported successfully!');
  process.exit(0);
}

importData().catch(err => {
  console.error('Error importing data:', err);
  process.exit(1);
});
