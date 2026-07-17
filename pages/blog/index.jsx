import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { Search, X, Calendar, Clock, TrendingUp, MessageCircle, Flame, ArrowRight, BookOpen, CheckCircle2, Star, Phone, Mail, Clock as ClockIcon, MapPin } from "lucide-react";

export default function BlogListPage() {
  const router = useRouter();
  const { topic: queryTopic } = router.query;
  
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [showAllTopics, setShowAllTopics] = useState(false);
  const TOPIC_LIMIT = 15;

  useEffect(() => {
    if (queryTopic) {
      const topics = Array.isArray(queryTopic) ? queryTopic : queryTopic.split(',');
      setSelectedTopics(topics);
    }
  }, [queryTopic]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/api/blog/published");
        if (res.data.success) {
          const postsWithTopics = res.data.blogs.map(post => ({
            ...post,
            topics: extractTopics(post.content || ""),
            readTime: calculateReadTime(post.content || "")
          }));
          setPosts(postsWithTopics);
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
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const decodedText = tempDiv.textContent || tempDiv.innerText || '';
    const words = decodedText.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return minutes;
  };

  const allTopics = [...new Set(posts.flatMap(p => p.topics))];
  
  const topicsWithCount = allTopics.map(topic => ({
    name: topic,
    count: posts.filter(p => p.topics.includes(topic)).length
  })).sort((a, b) => b.count - a.count);

  const toggleTopic = (topic) => {
    setSelectedTopics(prev => {
      if (topic === "all") return [];
      if (prev.includes(topic)) {
        return prev.filter(t => t !== topic);
      } else {
        return [...prev, topic];
      }
    });
  };

  const getFilteredPosts = () => {
    let filtered = posts.filter((p) =>
      (p.title || "").toLowerCase().includes(search.toLowerCase())
    );

    if (selectedTopics.length > 0) {
      filtered = filtered.filter(p => 
        p.topics.some(t => selectedTopics.includes(t))
      );
    }

    return filtered;
  };

  const filtered = getFilteredPosts();
  const recentPosts = filtered.slice(0, 5);

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

  return (
    <>
      <Head>
        <title key="title">Health & Wellness Blog | Vedara Care Dubai</title>
        <meta name="description" content="Stay updated with the latest health insights, medical tips, and wellness advice from our expert doctors at Vedara Care Dubai. Covering dermatology, dental care, Ayurveda, and more." key="description" />
        <meta name="keywords" content="health blog Dubai, medical news Dubai, wellness tips, dermatology blog, dental care advice, Ayurveda insights, healthcare blog" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-[#F8F9FA] to-white">
        {/* Top Section */}
        <div className="bg-white border-b border-[#E5E5E5] shadow-sm">
          <div className="max-w-[1400px] mx-auto px-6 py-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-[#C9A961]" />
                  <span className="text-[11px] font-sans tracking-[0.2em] text-[#C9A961] uppercase">
                    Vedara Care Blog
                  </span>
                </div>
                <h1 className="text-[32px] lg:text-[40px] font-serif font-medium text-[#1A1A1A] mb-3">
                  Health & Wellness Insights
                </h1>
                <p className="text-[14px] text-[#6B6B6B] font-sans max-w-xl">
                  Expert insights and practical tips from our DHA-licensed healthcare professionals in Dubai
                </p>
              </div>

              {/* Search */}
              <div className="w-full lg:w-[400px]">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B6B] group-focus-within:text-[#184C3A] transition-colors" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full pl-11 pr-10 py-3 bg-[#F8F9FA] border border-[#E5E5E5] rounded-xl text-[14px] text-[#1A1A1A] font-sans placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#184C3A]/20 focus:border-[#184C3A] transition-all"
                  />
                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#999] hover:text-[#184C3A] transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Topics */}
            {allTopics.length > 0 && (
              <div className="mt-8 pt-6 border-t border-[#E5E5E5]">
                <div className="flex flex-wrap gap-2 items-center">
                  <button
                    onClick={() => toggleTopic("all")}
                    className={`px-4 py-1.5 rounded-full text-[12px] font-sans font-medium transition-all ${
                      selectedTopics.length === 0
                        ? "bg-[#184C3A] text-white shadow-md"
                        : "bg-white text-[#6B6B6B] border border-[#E5E5E5] hover:border-[#184C3A] hover:text-[#184C3A] hover:bg-[#F6F1EA]"
                    }`}
                  >
                    All
                  </button>
                  {(showAllTopics ? allTopics : allTopics.slice(0, TOPIC_LIMIT)).map(topic => (
                    <button
                      key={topic}
                      onClick={() => toggleTopic(topic)}
                      className={`px-4 py-1.5 rounded-full text-[12px] font-sans font-medium transition-all ${
                        selectedTopics.includes(topic)
                          ? "bg-[#184C3A] text-white shadow-md"
                          : "bg-white text-[#6B6B6B] border border-[#E5E5E5] hover:border-[#184C3A] hover:text-[#184C3A] hover:bg-[#F6F1EA]"
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                  
                  {allTopics.length > TOPIC_LIMIT && (
                    <button
                      onClick={() => setShowAllTopics(!showAllTopics)}
                      className="px-4 py-1.5 text-[12px] text-[#C9A961] font-sans font-medium hover:underline"
                    >
                      {showAllTopics ? "Show less" : `+${allTopics.length - TOPIC_LIMIT} more`}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[1400px] mx-auto px-6 py-10">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-10 h-10 border-3 border-[#E5E5E5] border-t-[#184C3A] rounded-full animate-spin"></div>
              <p className="mt-4 text-[14px] text-[#6B6B6B] font-sans">Loading articles...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column - Articles */}
              <div className="lg:col-span-8 space-y-6">
                {/* Featured Article (Highlighted) */}
                {filtered[0] && (
                  <Link
                    href={`/blog/${filtered[0].paramlink}`}
                    className="group block"
                  >
                    <article className="bg-white rounded-xl overflow-hidden border-2 border-[#C9A961] hover:shadow-xl transition-all duration-300">
                      <div className="grid md:grid-cols-5 gap-0">
                        <div className="md:col-span-2 aspect-[16/10] md:aspect-auto bg-gradient-to-br from-[#F6F1EA] to-[#FAF8EF] overflow-hidden">
                          {(() => {
                            const src = extractFirstImageSrc(filtered[0].content || "");
                            return src ? (
                              <img
                                src={src}
                                alt={filtered[0].title || ""}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <div className="text-3xl font-serif text-[#C9A961] opacity-50">
                                  {filtered[0].title?.charAt(0) || 'V'}
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                        
                        <div className="md:col-span-3 p-5 md:p-6">
                          <div className="mb-2">
                            <span className="inline-flex items-center gap-1 bg-[#C9A961] text-white px-2 py-1 rounded-full text-[9px] font-sans font-semibold uppercase">
                              <Star className="w-3 h-3 fill-current" />
                              Featured
                            </span>
                          </div>
                          {filtered[0].topics.length > 0 && (
                            <div className="mb-2">
                              <span className="text-[10px] font-sans tracking-[0.15em] text-[#C9A961] uppercase">
                                {filtered[0].topics[0]}
                              </span>
                            </div>
                          )}
                          <h3 className="text-[17px] md:text-[20px] font-serif font-medium text-[#1A1A1A] mb-2 leading-snug group-hover:text-[#184C3A] line-clamp-2">
                            {filtered[0].title}
                          </h3>
                          <p className="text-[12px] text-[#6B6B6B] font-sans mb-4 line-clamp-3">
                            {(() => {
                              const tempDiv = document.createElement('div');
                              tempDiv.innerHTML = filtered[0].content || '';
                              const decodedText = tempDiv.textContent || tempDiv.innerText || '';
                              return decodedText.slice(0, 150) + '...';
                            })()}
                          </p>
                          <div className="flex items-center gap-3 text-[11px] text-[#999] font-sans mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {formatDate(filtered[0].createdAt)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {filtered[0].readTime} min read
                            </span>
                          </div>
                          <div className="flex items-center justify-between pt-2 border-t border-[#F5F5F5]">
                            <span className="text-[12px] text-[#184C3A] font-sans font-semibold flex items-center gap-1">
                              Read full article
                              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                )}

                {/* Articles List (All Same Consistent Layout) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {filtered.slice(1).map((post, index) => (
                    <Link
                      key={post._id}
                      href={`/blog/${post.paramlink}`}
                      className="group block"
                    >
                      <article className="bg-white rounded-xl overflow-hidden border border-[#E5E5E5] hover:shadow-lg hover:border-[#C9A961] transition-all duration-300">
                        <div className="flex flex-col">
                          <div className="aspect-[16/10] bg-gradient-to-br from-[#F6F1EA] to-[#FAF8EF] overflow-hidden">
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
                                  <div className="text-3xl font-serif text-[#C9A961] opacity-50">
                                    {post.title?.charAt(0) || 'V'}
                                  </div>
                                </div>
                              );
                            })()}
                          </div>
                          
                          <div className="p-5">
                            {post.topics.length > 0 && (
                              <div className="mb-2">
                                <span className="text-[10px] font-sans tracking-[0.15em] text-[#C9A961] uppercase">
                                  {post.topics[0]}
                                </span>
                              </div>
                            )}
                            <h3 className="text-[15px] md:text-[16px] font-serif font-medium text-[#1A1A1A] mb-2 leading-snug group-hover:text-[#184C3A] line-clamp-2">
                              {post.title}
                            </h3>
                            <div className="flex items-center gap-3 text-[11px] text-[#999] font-sans mb-3">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {formatDate(post.createdAt)}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {post.readTime} min read
                              </span>
                            </div>
                            <div className="flex items-center justify-between pt-2 border-t border-[#F5F5F5]">
                              <span className="text-[11px] text-[#184C3A] font-sans font-medium flex items-center gap-1">
                                Read article
                                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>

                {/* Empty State */}
                {filtered.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-[#E5E5E5]">
                    <div className="w-16 h-16 bg-[#F8F9FA] rounded-full flex items-center justify-center mb-5">
                      <Search className="w-6 h-6 text-[#999]" />
                    </div>
                    <h3 className="text-[18px] font-serif font-medium text-[#1A1A1A] mb-2">
                      No articles found
                    </h3>
                    <p className="text-[13px] text-[#6B6B6B] font-sans mb-6 text-center max-w-sm">
                      Try adjusting your search or topic filters
                    </p>
                    <button
                      onClick={() => {
                        setSearch("");
                        setSelectedTopics([]);
                      }}
                      className="px-6 py-2 bg-[#184C3A] text-white rounded-lg text-[13px] font-sans font-medium hover:bg-[#123a2c] transition-colors shadow-md hover:shadow-lg"
                    >
                      Reset filters
                    </button>
                  </div>
                )}
              </div>

              {/* Right Sidebar */}
              <div className="lg:col-span-4 space-y-5">
                {/* Popular Topics */}
                <div className="bg-white rounded-xl border border-[#E5E5E5] p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-4 h-4 text-[#C9A961]" />
                    <h3 className="text-[14px] font-serif font-medium text-[#1A1A1A]">
                      Popular Topics
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {topicsWithCount.slice(0, 5).map((topic, index) => (
                      <button
                        key={topic.name}
                        onClick={() => toggleTopic(topic.name)}
                        className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-left transition-all ${
                          selectedTopics.includes(topic.name)
                            ? "bg-[#184C3A] text-white shadow-md"
                            : "bg-[#F8F9FA] text-[#6B6B6B] hover:bg-[#F6F1EA] hover:text-[#184C3A]"
                        }`}
                      >
                        <span className="flex items-center gap-2 text-[12px] font-sans">
                          <span className="text-[#C9A961] font-bold w-4">{index + 1}</span>
                          {topic.name}
                        </span>
                        <span className="text-[11px] opacity-60">
                          {topic.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* WhatsApp & Contact Card */}
                <div className="bg-gradient-to-br from-[#184C3A] to-[#266b54] rounded-xl p-5 text-white shadow-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageCircle className="w-4 h-4 text-[#C9A961]" />
                    <h3 className="text-[14px] font-serif font-medium">
                      Have Questions?
                    </h3>
                  </div>
                  <p className="text-[12px] text-white/90 font-sans mb-4 leading-relaxed">
                    Chat with our team on WhatsApp for quick answers about appointments, insurance, and treatments.
                  </p>
                  
                  <a
                    href={`https://wa.me/971555867466?text=${encodeURIComponent("Hello! I'm browsing your Vedara Care blogs and would like to ask a question or book a consultation with your team.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] text-white rounded-lg text-[12px] font-sans font-semibold hover:bg-[#22c55e] transition-colors mb-3"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                  
                  <a
                    href="tel:+971555867466"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-white/20 text-white border border-white/30 rounded-lg text-[12px] font-sans font-semibold hover:bg-white/30 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call: +971 55 586 7466
                  </a>
                </div>

                {/* Expert Tip Card */}
                <div className="bg-white rounded-xl border border-[#E5E5E5] p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A961]" />
                    <h3 className="text-[14px] font-serif font-medium text-[#1A1A1A]">
                      Expert Health Tip
                    </h3>
                  </div>
                  <p className="text-[12px] text-[#6B6B6B] font-sans mb-4 leading-relaxed">
                    "Stay consistent with small daily habits—consistency beats perfection when it comes to health and wellness."
                  </p>
                  <div className="flex items-center gap-2 text-[11px] text-[#184C3A] font-sans">
                    <span className="w-7 h-7 bg-[#184C3A] rounded-full flex items-center justify-center text-white font-bold text-xs">
                      V
                    </span>
                    <span>Vedara Care Team</span>
                  </div>
                </div>

                {/* Book Appointment CTA */}
                <div className="bg-[#FAF8EF] rounded-xl p-5 border border-[#E5E5E5] hover:shadow-md transition-shadow">
                  <h3 className="text-[14px] font-serif font-medium text-[#1A1A1A] mb-3">
                    Ready to Book?
                  </h3>
                  <p className="text-[12px] text-[#6B6B6B] font-sans mb-4">
                    Schedule a consultation with our DHA-licensed doctors in Jumeirah Village Circle, Dubai.
                  </p>
                  <Link
                    href="/book"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#184C3A] text-white rounded-lg text-[12px] font-sans font-semibold hover:bg-[#123a2c] transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                  </Link>
                </div>

                {/* Recent Posts */}
                <div className="bg-white rounded-xl border border-[#E5E5E5] p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-4">
                    <Flame className="w-4 h-4 text-[#C9A961]" />
                    <h3 className="text-[14px] font-serif font-medium text-[#1A1A1A]">
                      Recent Articles
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {recentPosts.map((post, index) => (
                      <Link
                        key={post._id}
                        href={`/blog/${post.paramlink}`}
                        className="group flex gap-3"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F6F1EA] to-[#FAF8EF] flex-shrink-0 overflow-hidden flex items-center justify-center">
                          {(() => {
                            const src = extractFirstImageSrc(post.content || "");
                            return src ? (
                              <img
                                src={src}
                                alt={post.title || ""}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span className="text-[#C9A961] font-serif text-xs opacity-70">
                                {index + 1}
                              </span>
                            );
                          })()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[12px] font-serif font-medium text-[#1A1A1A] leading-snug group-hover:text-[#184C3A] line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-[10px] text-[#999] font-sans mt-1 flex items-center gap-1">
                            <Calendar className="w-2.5 h-2.5" />
                            {formatDate(post.createdAt)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Clinic Info Card */}
                <div className="bg-white rounded-xl border border-[#E5E5E5] p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-[#C9A961]" />
                    <h3 className="text-[14px] font-serif font-medium text-[#1A1A1A]">
                      Visit Us
                    </h3>
                  </div>
                  <div className="space-y-2 text-[12px] text-[#6B6B6B] font-sans">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#184C3A] shrink-0 mt-0.5" />
                      <span>Al Barsha South Fourth, Binghatti Azure, Shop -4,Jumeraih Village Circle (JVC) Dubai</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ClockIcon className="w-3.5 h-3.5 text-[#184C3A] shrink-0 mt-0.5" />
                      <div>
                        <p>Mon - Sun: 8:30AM to 11:30PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#184C3A] shrink-0 mt-0.5" />
                      <span>booking@vedaracare.ae</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
