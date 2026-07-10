import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';

const Journal = ({
  bgColor = "bg-white",
  label = "VEDARA JOURNAL",
  title = "Reading worth your time.",
  linkText = "Explore the journal"
}) => {
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
    <section className={`${bgColor} py-24`}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-4">
            <span className="text-[13px] font-sans tracking-[0.2em] text-[#C9A961] uppercase block">
              {label}
            </span>
            <h2 className="text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2]">
              {title}
            </h2>
          </div>
          <Link href="/blog" className="text-[#C9A961] font-sans font-medium text-[15px] hover:underline mb-2">
            {linkText}
          </Link>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-10 h-10 border-3 border-[#E5E5E5] border-t-[#184C3A] rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link 
                key={post._id || index} 
                href={`/blog/${post.paramlink}`} 
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-[#F6F1EA] to-[#FAF8EF] rounded-2xl flex items-center justify-center text-[#A1A1A1] font-sans text-sm overflow-hidden mb-6">
                  {(() => {
                    const src = extractFirstImageSrc(post.content || "");
                    return src ? (
                      <img
                        src={src}
                        alt={post.title || ""}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="group-hover:scale-105 transition-transform duration-500 ease-out">
                        {post.title?.charAt(0) || 'V'}
                      </div>
                    );
                  })()}
                </div>

                {/* Content */}
                <div>
                  <div className="text-[14px] font-sans tracking-[0.1em] text-[#C9A961] uppercase mb-3">
                    {post.topics[0] || "HEALTH"}
                  </div>
                  <h4 className="text-[20px] font-serif font-medium text-[#1A1A1A] leading-snug mb-3 group-hover:text-[#184C3A] transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-[14px] text-[#6B6B6B] font-sans leading-relaxed mb-4">
                    {extractDescription(post.content)}
                  </p>
                  <div className="text-[12px] text-[#6B6B6B] font-sans flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(post.createdAt)}</span>
                    <span className="px-1">•</span>
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Journal;
