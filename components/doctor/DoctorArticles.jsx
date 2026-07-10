import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';

const DoctorArticles = ({ doctor }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/api/blog/published");
        if (res.data.success) {
          const postsWithData = res.data.blogs.map(post => ({
            ...post,
            topics: extractTopics(post.content || ""),
            readTime: calculateReadTime(post.content || "")
          }));
          setPosts(postsWithData.slice(0, 3)); // Show 3 latest
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const extractFirstImageSrc = (html) => {
    if (!html || typeof html !== "string") return null;
    const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
    return match ? match[1] : null;
  };

  const extractTopics = (html) => {
    if (!html || typeof html !== "string") return [];
    const topicRegex = /<p[^>]*style="display:\s*none[^"]*"[^>]*>(.*?)<\/p>/gi;
    const matches = html.matchAll(topicRegex);
    const topics = [];
    for (const match of matches) {
      const content = match[1];
      const hashtagMatches = content.match(/#(\w+)/g);
      if (hashtagMatches) {
        const extractedTopics = hashtagMatches.map(tag => tag.substring(1));
        topics.push(...extractedTopics);
      }
    }
    return [...new Set(topics)];
  };

  const calculateReadTime = (html) => {
    const tempDiv = typeof document !== 'undefined' ? document.createElement('div') : null;
    if (!tempDiv) return 5;
    tempDiv.innerHTML = html;
    const decodedText = tempDiv.textContent || tempDiv.innerText || '';
    const words = decodedText.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return minutes;
  };

  const formatDate = (d) => {
    try {
      return new Date(d).toLocaleDateString(undefined, { 
        year: "numeric", 
        month: "short", 
        day: "numeric" 
      });
    } catch {
      return "";
    }
  };

  const extractDescription = (html) => {
    const tempDiv = typeof document !== 'undefined' ? document.createElement('div') : null;
    if (!tempDiv) return "Read our latest article.";
    tempDiv.innerHTML = html;
    const decodedText = tempDiv.textContent || tempDiv.innerText || '';
    return decodedText.slice(0, 150) + '...';
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-4" style={{ color: 'rgb(201, 169, 97)' }}>
              FROM THE JOURNAL
            </p>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '500', color: 'rgb(26, 26, 26)' }}>
              Articles by {doctor?.firstName || doctor?.name?.split(' ')[0] || 'Our Doctors'}.
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

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-10 h-10 border-3 border-[#E5E5E5] border-t-[#184C3A] rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {posts.map((post, index) => (
              <Link
                key={post._id || index}
                href={`/blog/${post.paramlink}`}
                className="rounded-[8px] overflow-hidden cursor-pointer group"
                style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(229, 223, 211)' }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '4 / 3', background: 'rgb(228, 216, 200)' }}>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-[8px] text-[11px] font-semibold tracking-wide uppercase" style={{ background: 'rgb(240, 233, 221)', color: 'rgb(26, 26, 26)' }}>
                      {post.topics[0] || "HEALTH"}
                    </span>
                  </div>
                  {(() => {
                    const src = extractFirstImageSrc(post.content || "");
                    return src ? (
                      <img
                        src={src}
                        alt={post.title || ""}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-[#C9A961] font-serif text-2xl opacity-70">
                          {post.title?.charAt(0) || 'V'}
                        </span>
                      </div>
                    );
                  })()}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[12px] font-medium tracking-wide uppercase mb-2" style={{ color: 'rgb(107, 107, 107)' }}>
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(post.createdAt)}</span>
                    <span>•</span>
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime} min read</span>
                  </div>
                  <h3 className="font-semibold text-[16px] mb-2 leading-snug group-hover:text-[#184C3A] transition-colors" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26, 26, 26)' }}>
                    {post.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: 'rgb(107, 107, 107)' }}>
                    {extractDescription(post.content)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorArticles;
