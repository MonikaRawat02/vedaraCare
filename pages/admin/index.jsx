import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ModernBlogEditorV1 from './blog-editor';
import axios from 'axios';
import {
  PlusCircle, Search, Heart, MessageCircle, Bookmark, Edit3, Trash2,
  Eye, Clock, User, Hash, Sparkles, Flame, BarChart3, ExternalLink,
  X, Link as LinkIcon, RefreshCw, TrendingUp, ChevronLeft, ChevronRight,
  FileText, Calendar, Layers, Share2, MoreVertical, Copy, Star, Zap, ArrowUpRight,
  LayoutGrid, List as ListIcon, Filter, ArrowDownToLine, CheckCircle2, AlertTriangle,
  CalendarDays, Calendar as CalendarIcon, PenLine, Clock as ClockIcon, Image as ImageIcon, Video as VideoIcon, Maximize2,
  Compass, Target, Trophy, Users, Lightbulb, Rocket, Cloud, Grid, Box, GripHorizontal
} from 'lucide-react';

const cleanBlogContent = (html) => {
  if (!html || typeof document === 'undefined') return html;
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  const removeButtons = tempDiv.querySelectorAll('button[data-remove-media="true"]');
  removeButtons.forEach(btn => btn.remove());
  const mediaContainers = tempDiv.querySelectorAll('.image-container, .video-container');
  mediaContainers.forEach(container => {
    const buttons = container.querySelectorAll('button');
    buttons.forEach(btn => btn.remove());
  });
  const allButtons = tempDiv.querySelectorAll('button');
  allButtons.forEach(btn => {
    const styleAttr = btn.getAttribute('style') || '';
    if (styleAttr.includes('position') && (styleAttr.includes('absolute') || styleAttr.includes('position:absolute'))) {
      btn.remove();
    }
  });
  return tempDiv.innerHTML;
};

const AdminBlogPost = () => {
  const router = useRouter();
  const [activeView, setActiveView] = useState('dashboard');
  const [showEditor, setShowEditor] = useState(false);
  const [editBlogId, setEditBlogId] = useState(null);
  const [editDraftId, setEditDraftId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [drafts, setDrafts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeContentTab, setActiveContentTab] = useState('published');
  const [toasts, setToasts] = useState([]);
  const tokenKey = "adminToken";
  
  useEffect(() => {
    const token = localStorage.getItem(tokenKey);
    if (!token) {
      router.push("/admin/login");
      return;
    }
    fetchPosts();
    fetchDrafts();
  }, []);

  const getAuthHeaders = () => {
    const token = localStorage.getItem(tokenKey);
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  const handleAuthError = (error) => {
    const status = error?.response?.status;
    if (status === 401 || status === 403) {
      router.push("/admin/login");
      return true;
    }
    return false;
  };

  const fetchPosts = async () => {
    try {
      const res = await axios.get('/api/blog/published', getAuthHeaders());
      if (res.data.success) {
        setPosts(res.data.blogs);
      }
    } catch (error) {
      if (handleAuthError(error)) return;
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDrafts = async () => {
    try {
      const res = await axios.get('/api/blog/draft', getAuthHeaders());
      if (res.data.success) {
        setDrafts(res.data.drafts);
      }
    } catch (error) {
      if (handleAuthError(error)) return;
      console.error("Error fetching drafts:", error);
    }
  };

  const handleDelete = async (id, isDraft = false) => {
    const performDelete = async () => {
      try {
        const endpoint = isDraft ? `/api/blog/draft?id=${id}` : `/api/blog/published?id=${id}`;
        await axios.delete(endpoint, getAuthHeaders());
        fetchPosts();
        fetchDrafts();
        showToast(isDraft ? "Draft deleted successfully!" : "Blog post deleted successfully!", "success");
      } catch (error) {
        console.error("Error deleting blog:", error);
        showToast(isDraft ? "Failed to delete draft" : "Failed to delete blog post", "error");
      }
    };
    performDelete();
  };

  const handleEdit = (id, isDraft = false) => {
    if (isDraft) {
      setEditDraftId(id);
      setEditBlogId(null);
    } else {
      setEditBlogId(id);
      setEditDraftId(null);
    }
    setShowEditor(true);
  };

  const handleCreateNew = () => {
    setEditBlogId(null);
    setEditDraftId(null);
    setShowEditor(true);
  };

  const handleSaveComplete = (message = "Blog post saved successfully!") => {
    setShowEditor(false);
    fetchPosts();
    fetchDrafts();
    showToast(message, "success");
  };

  const handleCopyLink = (paramlink) => {
    if (typeof window === 'undefined') return;
    const url = `${window.location.origin}/blog/${paramlink}`;
    navigator.clipboard.writeText(url);
    showToast('Link copied to clipboard!', 'success');
  };
  
  const showToast = (message, type = 'success') => {
    const id = Date.now();
    const newToast = { id, message, type };
    setToasts(prev => [...prev, newToast]);
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 3000);
  };
  
  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const filteredPosts = posts.filter(post => 
    (post.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
     post.content?.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const filteredDrafts = drafts.filter(draft => 
    (draft.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
     draft.content?.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const extractFirstImageSrc = (html) => {
    if (!html || typeof html !== 'string') return null;
    const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
    return match ? match[1] : null;
  };

  const truncateText = (text, maxLength = 100) => {
    if (!text) return '';
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = text;
    const decodedText = tempDiv.textContent || tempDiv.innerText || '';
    return decodedText.length > maxLength ? decodedText.substring(0, maxLength) + '...' : decodedText;
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getRelativeDate = (dateStr) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  const getMonthGroup = (dateStr) => {
    const date = new Date(dateStr);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const groupByMonth = (items) => {
    const groups = {};
    items.forEach(item => {
      const month = getMonthGroup(item.createdAt);
      if (!groups[month]) groups[month] = [];
      groups[month].push(item);
    });
    return groups;
  };

  const totalViews = posts.reduce((sum, post) => sum + (post.viewsCount || 0), 0);
  const totalLikes = posts.reduce((sum, post) => sum + (post.likesCount || 0), 0);

  if (showEditor) {
    return (
      <ModernBlogEditorV1
        tokenKey={tokenKey}
        onClose={() => setShowEditor(false)}
        editBlogId={editBlogId}
        editDraftId={editDraftId}
        onSave={handleSaveComplete}
      />
    );
  }

  const publishedMonthGroups = groupByMonth(filteredPosts);
  const draftMonthGroups = groupByMonth(filteredDrafts);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800 font-sans selection:bg-blue-200">
      {/* Soft Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] bg-indigo-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[-10%] left-[30%] w-[600px] h-[600px] bg-purple-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center shadow-xl shadow-blue-200">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-black bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
                  Content Lab
                </h1>
                <p className="text-gray-500 text-sm">Create. Publish. Grow.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* View Switcher */}
            <div className="flex items-center gap-2 p-1.5 bg-white backdrop-blur-xl rounded-2xl border border-gray-200 shadow-sm">
              <button
                onClick={() => setActiveView('dashboard')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeView === 'dashboard'
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-200'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Grid className="w-4.5 h-4.5" />
                Dashboard
              </button>
              <button
                onClick={() => setActiveView('timeline')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeView === 'timeline'
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-200'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <CalendarDays className="w-4.5 h-4.5" />
                Timeline
              </button>
              <button
                onClick={() => setActiveView('grid')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeView === 'grid'
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-200'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Box className="w-4.5 h-4.5" />
                Collection
              </button>
            </div>

            {/* Create Button */}
            <button
              onClick={handleCreateNew}
              className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <PlusCircle className="w-5.5 h-5.5 relative z-10" />
              <span className="relative z-10">New Piece</span>
            </button>
          </div>
        </div>

        {/* Dashboard View */}
        {activeView === 'dashboard' && (
          <div className="space-y-8">
            {/* Stat KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="group relative overflow-hidden bg-white backdrop-blur-2xl border border-gray-200 rounded-3xl p-6 hover:border-blue-300 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-100">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Trophy className="w-24 h-24 text-blue-500" />
                </div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">Published</span>
                </div>
                <p className="text-4xl font-black text-gray-900 mb-1.5">{posts.length}</p>
                <p className="text-gray-500 text-sm font-medium">Total Stories</p>
              </div>

              <div className="group relative overflow-hidden bg-white backdrop-blur-2xl border border-gray-200 rounded-3xl p-6 hover:border-amber-300 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-100">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <ClockIcon className="w-24 h-24 text-amber-500" />
                </div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                    <PenLine className="w-6 h-6 text-amber-600" />
                  </div>
                  <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">In Progress</span>
                </div>
                <p className="text-4xl font-black text-gray-900 mb-1.5">{drafts.length}</p>
                <p className="text-gray-500 text-sm font-medium">Drafts Waiting</p>
              </div>

              <div className="group relative overflow-hidden bg-white backdrop-blur-2xl border border-gray-200 rounded-3xl p-6 hover:border-cyan-300 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-100">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Eye className="w-24 h-24 text-cyan-500" />
                </div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-cyan-600" />
                  </div>
                  <span className="text-xs font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">Views</span>
                </div>
                <p className="text-4xl font-black text-gray-900 mb-1.5">{totalViews.toLocaleString()}</p>
                <p className="text-gray-500 text-sm font-medium">Total Reads</p>
              </div>

              <div className="group relative overflow-hidden bg-white backdrop-blur-2xl border border-gray-200 rounded-3xl p-6 hover:border-pink-300 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-pink-100">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Heart className="w-24 h-24 text-pink-500" />
                </div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-pink-600" />
                  </div>
                  <span className="text-xs font-semibold text-pink-600 bg-pink-50 px-3 py-1 rounded-full border border-pink-200">Engagement</span>
                </div>
                <p className="text-4xl font-black text-gray-900 mb-1.5">{totalLikes.toLocaleString()}</p>
                <p className="text-gray-500 text-sm font-medium">Total Likes</p>
              </div>
            </div>

            {/* Quick Actions & Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Quick Actions */}
              <div className="lg:col-span-1">
                <div className="bg-white backdrop-blur-2xl border border-gray-200 rounded-3xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-amber-500" />
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <button
                      onClick={handleCreateNew}
                      className="w-full flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl text-left hover:from-blue-100 hover:to-indigo-100 transition-all group">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                        <PlusCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">Write New Story</p>
                        <p className="text-xs text-gray-500">Start from scratch</p>
                      </div>
                      <ArrowUpRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </button>

                    {filteredDrafts.length > 0 && (
                      <button
                        onClick={() => handleEdit(filteredDrafts[0]._id, true)}
                        className="w-full flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl text-left hover:from-amber-100 hover:to-orange-100 transition-all group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                          <Edit3 className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 group-hover:text-amber-700 transition-colors truncate">Continue: {filteredDrafts[0].title || 'Untitled'}</p>
                          <p className="text-xs text-gray-500">Last edit {getRelativeDate(filteredDrafts[0].updatedAt)}</p>
                        </div>
                        <ArrowUpRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-amber-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Latest Content */}
              <div className="lg:col-span-2">
                <div className="bg-white backdrop-blur-2xl border border-gray-200 rounded-3xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-500" />
                      Latest Stories
                    </h3>
                    <button
                      onClick={() => setActiveView('timeline')}
                      className="text-sm text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1.5"
                    >
                      View All <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    {filteredPosts.slice(0, 4).map((post, index) => {
                      const imageSrc = extractFirstImageSrc(post.content);
                      return (
                        <div
                          key={post._id}
                          className="group relative flex items-center gap-5 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300"
                        >
                          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                            {imageSrc ? (
                              <img src={imageSrc} alt="" className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <FileText className="w-6 h-6 text-gray-400" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 truncate group-hover:text-blue-700 transition-colors">{post.title || 'Untitled'}</h4>
                            <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <CalendarDays className="w-3.5 h-3.5" />
                                {getRelativeDate(post.createdAt)}
                              </span>
                              <span className="flex items-center gap-1">
                                <Eye className="w-3.5 h-3.5" />
                                {(post.viewsCount || 0).toLocaleString()}
                              </span>
                              <span className="flex items-center gap-1">
                                <Heart className="w-3.5 h-3.5" />
                                {post.likesCount || 0}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <button
                              onClick={() => handleEdit(post._id)}
                              className="p-2.5 bg-white hover:bg-blue-100 text-gray-600 hover:text-blue-600 rounded-xl transition-all shadow-sm"
                            >
                              <Edit3 className="w-4.5 h-4.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                    {filteredPosts.length === 0 && (
                      <div className="text-center py-10">
                        <Compass className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                        <p className="text-gray-500 text-sm">No stories published yet</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Timeline View */}
        {activeView === 'timeline' && (
          <div className="space-y-6">
            {/* Tabs */}
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => setActiveContentTab('published')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeContentTab === 'published'
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-200'
                    : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <CheckCircle2 className="w-4.5 h-4.5" />
                Published ({posts.length})
              </button>
              <button
                onClick={() => setActiveContentTab('drafts')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeContentTab === 'drafts'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-200'
                    : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <Edit3 className="w-4.5 h-4.5" />
                Drafts ({drafts.length})
              </button>
            </div>

            {/* Search */}
            <div className="relative max-w-2xl">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search through your content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 text-gray-900 placeholder-gray-400 shadow-sm"
              />
            </div>

            {/* Timeline Content */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-indigo-400 to-transparent" />
              
              {Object.entries(activeContentTab === 'published' ? publishedMonthGroups : draftMonthGroups).map(([month, items]) => (
                <div key={month} className="mb-12">
                  <div className="flex items-center gap-4 mb-8 pl-6">
                    <div className="w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-200" />
                    <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                      {month}
                      <span className="text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                        {items.length} items
                      </span>
                    </h3>
                  </div>
                  <div className="space-y-6 pl-20">
                    {items.map((item) => {
                      const imageSrc = extractFirstImageSrc(item.content);
                      const isDraft = activeContentTab === 'drafts';
                      return (
                        <div
                          key={item._id}
                          className="group relative bg-white backdrop-blur-2xl border border-gray-200 rounded-3xl p-7 hover:border-blue-300 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100 shadow-sm"
                        >
                          <div className="absolute -left-10 top-10 w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 shadow-lg shadow-blue-200" />
                          
                          <div className="flex flex-col md:flex-row gap-6">
                            {imageSrc && (
                              <div className="md:w-48 flex-shrink-0">
                                <div className="w-full h-32 rounded-2xl overflow-hidden bg-gray-100 group-hover:scale-105 transition-transform duration-500">
                                  <img src={imageSrc} alt="" className="w-full h-full object-cover" />
                                </div>
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-4 mb-3">
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-3 mb-2">
                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                                      isDraft
                                        ? 'bg-amber-50 text-amber-700 border-amber-200'
                                        : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                    }`}>
                                      {isDraft ? <Edit3 className="w-3.5 h-3.5" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
                                      {isDraft ? 'Draft' : 'Live'}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                      {formatDate(isDraft ? item.updatedAt : item.createdAt)}
                                    </span>
                                  </div>
                                  <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
                                    {item.title || 'Untitled Story'}
                                  </h4>
                                </div>
                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                  <button
                                    onClick={() => handleEdit(item._id, isDraft)}
                                    className="p-2.5 bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 rounded-xl transition-all"
                                    title="Edit"
                                  >
                                    <Edit3 className="w-5 h-5" />
                                  </button>
                                  {!isDraft && (
                                    <button
                                      onClick={() => handleCopyLink(item.paramlink)}
                                      className="p-2.5 bg-gray-100 hover:bg-cyan-100 text-gray-600 hover:text-cyan-600 rounded-xl transition-all"
                                      title="Copy Link"
                                    >
                                      <Copy className="w-5 h-5" />
                                    </button>
                                  )}
                                  <button
                                    onClick={() => handleDelete(item._id, isDraft)}
                                    className="p-2.5 bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600 rounded-xl transition-all"
                                    title="Delete"
                                  >
                                    <Trash2 className="w-5 h-5" />
                                  </button>
                                </div>
                              </div>
                              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                {truncateText(item.content)}
                              </p>
                              {!isDraft && (
                                <div className="flex items-center gap-5 text-sm text-gray-500">
                                  <span className="flex items-center gap-1.5">
                                    <Eye className="w-4 h-4 text-gray-500" />
                                    {(item.viewsCount || 0).toLocaleString()} views
                                  </span>
                                  <span className="flex items-center gap-1.5">
                                    <Heart className="w-4 h-4 text-gray-500" />
                                    {item.likesCount || 0} likes
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
              {Object.keys(activeContentTab === 'published' ? publishedMonthGroups : draftMonthGroups).length === 0 && (
                <div className="text-center py-20 pl-20">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Cloud className="w-9 h-9 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No content yet</h3>
                  <p className="text-gray-500 mb-6">Start creating amazing content for your audience</p>
                  <button
                    onClick={handleCreateNew}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-200 transition-all"
                  >
                    <PlusCircle className="w-5 h-5" />
                    Create First Piece
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Grid View */}
        {activeView === 'grid' && (
          <div className="space-y-6">
            {/* Tabs & Search */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveContentTab('published')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    activeContentTab === 'published'
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-200'
                      : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <CheckCircle2 className="w-4.5 h-4.5" />
                  Published ({posts.length})
                </button>
                <button
                  onClick={() => setActiveContentTab('drafts')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    activeContentTab === 'drafts'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-200'
                      : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <Edit3 className="w-4.5 h-4.5" />
                  Drafts ({drafts.length})
                </button>
              </div>
              <div className="relative w-full md:w-80">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-4.5 h-4.5" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 text-gray-900 placeholder-gray-400 text-sm shadow-sm"
                />
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
              {(activeContentTab === 'published' ? filteredPosts : filteredDrafts).map((item) => {
                const imageSrc = extractFirstImageSrc(item.content);
                const isDraft = activeContentTab === 'drafts';
                return (
                  <div
                    key={item._id}
                    className="group relative bg-white backdrop-blur-2xl border border-gray-200 rounded-3xl overflow-hidden hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100 shadow-sm"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                      {imageSrc ? (
                        <img src={imageSrc} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FileText className="w-12 h-12 text-gray-400" />
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${
                          isDraft
                            ? 'bg-amber-500/90 text-white border-amber-400/30'
                            : 'bg-emerald-500/90 text-white border-emerald-400/30'
                        }`}>
                          {isDraft ? <Edit3 className="w-3.5 h-3.5" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
                          {isDraft ? 'Draft' : 'Live'}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <button
                          onClick={() => handleEdit(item._id, isDraft)}
                          className="p-2.5 bg-white/90 backdrop-blur-xl text-gray-800 rounded-xl hover:bg-blue-500 hover:text-white hover:scale-110 transition-all shadow-lg"
                        >
                          <Edit3 className="w-4.5 h-4.5" />
                        </button>
                        {!isDraft && (
                          <button
                            onClick={() => handleCopyLink(item.paramlink)}
                            className="p-2.5 bg-white/90 backdrop-blur-xl text-gray-800 rounded-xl hover:bg-cyan-500 hover:text-white hover:scale-110 transition-all shadow-lg"
                          >
                            <Copy className="w-4.5 h-4.5" />
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(item._id, isDraft)}
                          className="p-2.5 bg-white/90 backdrop-blur-xl text-gray-800 rounded-xl hover:bg-red-500 hover:text-white hover:scale-110 transition-all shadow-lg"
                        >
                          <Trash2 className="w-4.5 h-4.5" />
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors">
                        {item.title || 'Untitled'}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {truncateText(item.content)}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-xs text-gray-500">
                          {formatDate(isDraft ? item.updatedAt : item.createdAt)}
                        </span>
                        {!isDraft && (
                          <div className="flex items-center gap-3 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Eye className="w-3.5 h-3.5" />
                              {(item.viewsCount || 0).toLocaleString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart className="w-3.5 h-3.5" />
                              {item.likesCount || 0}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {(activeContentTab === 'published' ? filteredPosts : filteredDrafts).length === 0 && (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Cloud className="w-9 h-9 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No content found</h3>
                <p className="text-gray-500 mb-6">
                  {searchQuery ? 'Try adjusting your search' : 'Start creating your first piece of content'}
                </p>
                {!searchQuery && (
                  <button
                    onClick={handleCreateNew}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-200 transition-all"
                  >
                    <PlusCircle className="w-5 h-5" />
                    Create Something New
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Toast Notifications */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 space-y-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`flex items-center gap-4 px-6 py-4 rounded-2xl shadow-xl border border-gray-200 backdrop-blur-2xl animate-fade-in-up ${
              toast.type === 'success'
                ? 'bg-gradient-to-r from-emerald-500/95 to-teal-500/95 text-white border-emerald-400/30'
                : 'bg-gradient-to-r from-red-500/95 to-rose-500/95 text-white border-red-400/30'
            }`}
          >
            {toast.type === 'success' ? (
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <X className="w-5 h-5" />
              </div>
            )}
            <p className="font-semibold">{toast.message}</p>
            <button 
              onClick={() => removeToast(toast.id)}
              className="ml-4 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate(-50%, 10px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default AdminBlogPost;
