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
  Compass, Target, Trophy, Users, Lightbulb, Rocket, Cloud, Grid, Box, GripHorizontal,
  Phone, Mail, PhoneCall, Inbox, Check, AlertCircle, ShieldCheck, Tag
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
  const [appointments, setAppointments] = useState([]);
  const [appointmentStats, setAppointmentStats] = useState({ total: 0, new: 0, contacted: 0, scheduled: 0, completed: 0, cancelled: 0 });
  const [appointmentFilter, setAppointmentFilter] = useState('all');
  const [appointmentSearch, setAppointmentSearch] = useState('');
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
    fetchAppointments();
  }, []);

  const fetchAppointments = async (status = appointmentFilter, search = appointmentSearch) => {
    try {
      const url = `/api/admin/appointments?status=${status}&search=${encodeURIComponent(search)}`;
      const res = await axios.get(url, getAuthHeaders());
      if (res.data.success) {
        setAppointments(res.data.appointments || []);
        if (res.data.stats) {
          setAppointmentStats(res.data.stats);
        }
      }
    } catch (error) {
      if (handleAuthError(error)) return;
      console.error("Error fetching appointments:", error);
    }
  };

  const handleUpdateAppointmentStatus = async (id, newStatus) => {
    try {
      const res = await axios.patch('/api/admin/appointments', { id, status: newStatus }, getAuthHeaders());
      if (res.data.success) {
        showToast(`Status updated to "${newStatus}"`, "success");
        fetchAppointments(appointmentFilter, appointmentSearch);
      }
    } catch (error) {
      console.error("Error updating appointment status:", error);
      showToast("Failed to update status", "error");
    }
  };

  const handleDeleteAppointment = async (id) => {
    if (!confirm("Are you sure you want to delete this inquiry record?")) return;
    try {
      const res = await axios.delete(`/api/admin/appointments?id=${id}`, getAuthHeaders());
      if (res.data.success) {
        showToast("Inquiry deleted successfully", "success");
        fetchAppointments(appointmentFilter, appointmentSearch);
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
      showToast("Failed to delete record", "error");
    }
  };

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
    } else {setEditBlogId(id);
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
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8EF] via-[#F8F9FA] to-white text-gray-800 font-sans selection:bg-[#C9A961]/30">
      {/* Soft Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#C9A961]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] bg-[#184C3A]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[-10%] left-[30%] w-[600px] h-[600px] bg-[#C9A961]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#184C3A] via-[#1f5f47] to-[#266b54] flex items-center justify-center shadow-xl shadow-[#184C3A]/20">
                <Lightbulb className="w-7 h-7 text-[#C9A961]" />
              </div>
              <div>
                <h1 className="text-3xl font-black text-[#184C3A]">
                  Content Lab
                </h1>
                <p className="text-gray-500 text-sm">Create. Publish. Grow.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* View Switcher */}
            <div className="w-full sm:w-auto overflow-x-auto max-w-full flex items-center gap-1.5 p-1.5 bg-white backdrop-blur-xl rounded-2xl border border-[#E5E5E5] shadow-sm scrollbar-none">
              <button
                onClick={() => setActiveView('dashboard')}
                className={`flex items-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                  activeView === 'dashboard'
                    ? 'bg-[#184C3A] text-white shadow-lg shadow-[#184C3A]/20'
                    : 'text-gray-600 hover:text-[#184C3A] hover:bg-[#FAF8EF]'
                }`}
              >
                <Grid className="w-4 h-4" />
                Dashboard
              </button>
              <button
                onClick={() => setActiveView('timeline')}
                className={`flex items-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                  activeView === 'timeline'
                    ? 'bg-[#184C3A] text-white shadow-lg shadow-[#184C3A]/20'
                    : 'text-gray-600 hover:text-[#184C3A] hover:bg-[#FAF8EF]'
                }`}
              >
                <CalendarDays className="w-4 h-4" />
                Timeline
              </button>
              <button
                onClick={() => setActiveView('grid')}
                className={`flex items-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                  activeView === 'grid'
                    ? 'bg-[#184C3A] text-white shadow-lg shadow-[#184C3A]/20'
                    : 'text-gray-600 hover:text-[#184C3A] hover:bg-[#FAF8EF]'
                }`}
              >
                <Box className="w-4 h-4" />
                Collection
              </button>
              <button
                onClick={() => setActiveView('appointments')}
                className={`flex items-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                  activeView === 'appointments'
                    ? 'bg-[#184C3A] text-white shadow-lg shadow-[#184C3A]/20'
                    : 'text-gray-600 hover:text-[#184C3A] hover:bg-[#FAF8EF]'
                }`}
              >
                <Inbox className="w-4 h-4 text-[#C9A961]" />
                <span className="hidden sm:inline">Inquiries & Bookings</span>
                <span className="sm:hidden">Inquiries</span>
                {appointmentStats.new > 0 && (
                  <span className="bg-[#C9A961] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full animate-pulse">
                    {appointmentStats.new}
                  </span>
                )}
              </button>
            </div>

            {/* Create Button */}
            <button
              onClick={handleCreateNew}
              className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#184C3A] via-[#1f5f47] to-[#266b54] text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-[#184C3A]/20 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="group relative overflow-hidden bg-white backdrop-blur-2xl border border-[#E5E5E5] rounded-3xl p-6 hover:border-[#C9A961] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#C9A961]/10">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Inbox className="w-24 h-24 text-[#184C3A]" />
                </div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FAF8EF] to-[#FAF8EF] flex items-center justify-center">
                    <Inbox className="w-6 h-6 text-[#184C3A]" />
                  </div>
                  <span className="text-xs font-semibold text-[#184C3A] bg-[#FAF8EF] px-3 py-1 rounded-full border border-[#C9A961]/30">
                    {appointmentStats.new > 0 ? `${appointmentStats.new} New` : 'All Caught Up'}
                  </span>
                </div>
                <p className="text-4xl font-black text-gray-900 mb-1.5">{appointmentStats.total || appointments.length}</p>
                <p className="text-gray-500 text-sm font-medium">Inquiries & Bookings</p>
              </div>

              <div className="group relative overflow-hidden bg-white backdrop-blur-2xl border border-[#E5E5E5] rounded-3xl p-6 hover:border-[#C9A961] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#C9A961]/10">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Trophy className="w-24 h-24 text-[#184C3A]" />
                </div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FAF8EF] to-[#FAF8EF] flex items-center justify-center">
                    <FileText className="w-6 h-6 text-[#184C3A]" />
                  </div>
                  <span className="text-xs font-semibold text-[#184C3A] bg-[#FAF8EF] px-3 py-1 rounded-full border border-[#C9A961]/30">Published</span>
                </div>
                <p className="text-4xl font-black text-gray-900 mb-1.5">{posts.length}</p>
                <p className="text-gray-500 text-sm font-medium">Total Stories</p>
              </div>

              <div className="group relative overflow-hidden bg-white backdrop-blur-2xl border border-[#E5E5E5] rounded-3xl p-6 hover:border-[#C9A961] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#C9A961]/10">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <ClockIcon className="w-24 h-24 text-[#C9A961]" />
                </div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FAF8EF] to-[#FAF8EF] flex items-center justify-center">
                    <PenLine className="w-6 h-6 text-[#C9A961]" />
                  </div>
                  <span className="text-xs font-semibold text-[#C9A961] bg-[#FAF8EF] px-3 py-1 rounded-full border border-[#C9A961]/30">In Progress</span>
                </div>
                <p className="text-4xl font-black text-gray-900 mb-1.5">{drafts.length}</p>
                <p className="text-gray-500 text-sm font-medium">Drafts Waiting</p>
              </div>

              <div className="group relative overflow-hidden bg-white backdrop-blur-2xl border border-[#E5E5E5] rounded-3xl p-6 hover:border-[#C9A961] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#C9A961]/10">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Eye className="w-24 h-24 text-[#184C3A]" />
                </div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FAF8EF] to-[#FAF8EF] flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-[#184C3A]" />
                  </div>
                  <span className="text-xs font-semibold text-[#184C3A] bg-[#FAF8EF] px-3 py-1 rounded-full border border-[#C9A961]/30">Views</span>
                </div>
                <p className="text-4xl font-black text-gray-900 mb-1.5">{totalViews.toLocaleString()}</p>
                <p className="text-gray-500 text-sm font-medium">Total Reads</p>
              </div>

              <div className="group relative overflow-hidden bg-white backdrop-blur-2xl border border-[#E5E5E5] rounded-3xl p-6 hover:border-[#C9A961] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#C9A961]/10">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Heart className="w-24 h-24 text-[#C9A961]" />
                </div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FAF8EF] to-[#FAF8EF] flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#C9A961]" />
                  </div>
                  <span className="text-xs font-semibold text-[#C9A961] bg-[#FAF8EF] px-3 py-1 rounded-full border border-[#C9A961]/30">Engagement</span>
                </div>
                <p className="text-4xl font-black text-gray-900 mb-1.5">{totalLikes.toLocaleString()}</p>
                <p className="text-gray-500 text-sm font-medium">Total Likes</p>
              </div>
            </div>

            {/* Quick Actions & Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Quick Actions */}
              <div className="lg:col-span-1">
                <div className="bg-white backdrop-blur-2xl border border-[#E5E5E5] rounded-3xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#C9A961]" />
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <button
                      onClick={handleCreateNew}
                      className="w-full flex items-center gap-3 px-5 py-4 bg-[#FAF8EF] border border-[#C9A961]/30 rounded-2xl text-left hover:bg-[#FAF8EF] transition-all group">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#184C3A] to-[#1f5f47] flex items-center justify-center">
                        <PlusCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 group-hover:text-[#184C3A] transition-colors">Write New Story</p>
                        <p className="text-xs text-gray-500">Start from scratch</p>
                      </div>
                      <ArrowUpRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#184C3A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </button>

                    {filteredDrafts.length > 0 && (
                      <button
                        onClick={() => handleEdit(filteredDrafts[0]._id, true)}
                        className="w-full flex items-center gap-3 px-5 py-4 bg-[#FAF8EF] border border-[#C9A961]/30 rounded-2xl text-left hover:bg-[#FAF8EF] transition-all group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A961] to-[#C9A961]/90 flex items-center justify-center">
                          <Edit3 className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 group-hover:text-[#C9A961] transition-colors truncate">Continue: {filteredDrafts[0].title || 'Untitled'}</p>
                          <p className="text-xs text-gray-500">Last edit {getRelativeDate(filteredDrafts[0].updatedAt)}</p>
                        </div>
                        <ArrowUpRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#C9A961] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Latest Content */}
              <div className="lg:col-span-2">
                <div className="bg-white backdrop-blur-2xl border border-[#E5E5E5] rounded-3xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-[#184C3A]" />
                      Latest Stories
                    </h3>
                    <button
                      onClick={() => setActiveView('timeline')}
                      className="text-sm text-[#184C3A] hover:text-[#1f5f47] font-semibold flex items-center gap-1.5"
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
                          className="group relative flex items-center gap-5 p-4 rounded-2xl bg-[#FAF8EF]/50 border border-[#E5E5E5] hover:border-[#C9A961]/50 hover:bg-[#FAF8EF] transition-all duration-300"
                        >
                          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#FAF8EF] to-[#FAF8EF] overflow-hidden">
                            {imageSrc ? (
                              <img src={imageSrc} alt="" className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <FileText className="w-6 h-6 text-[#C9A961]" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 truncate group-hover:text-[#184C3A] transition-colors">{post.title || 'Untitled'}</h4>
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
                              className="p-2.5 bg-white hover:bg-[#FAF8EF] text-gray-600 hover:text-[#184C3A] rounded-xl transition-all shadow-sm"
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
                    ? 'bg-[#184C3A] text-white shadow-lg shadow-[#184C3A]/20'
                    : 'bg-white text-gray-600 hover:text-[#184C3A] hover:bg-[#FAF8EF] border border-[#E5E5E5]'
                }`}
              >
                <CheckCircle2 className="w-4.5 h-4.5" />
                Published ({posts.length})
              </button>
              <button
                onClick={() => setActiveContentTab('drafts')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeContentTab === 'drafts'
                    ? 'bg-[#C9A961] text-white shadow-lg shadow-[#C9A961]/20'
                    : 'bg-white text-gray-600 hover:text-[#C9A961] hover:bg-[#FAF8EF] border border-[#E5E5E5]'
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
                className="w-full pl-14 pr-6 py-4 bg-white border border-[#E5E5E5] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#184C3A]/30 focus:border-[#184C3A] text-gray-900 placeholder-gray-400 shadow-sm"
              />
            </div>

            {/* Timeline Content */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C9A961] via-[#184C3A] to-transparent" />
              
              {Object.entries(activeContentTab === 'published' ? publishedMonthGroups : draftMonthGroups).map(([month, items]) => (
                <div key={month} className="mb-12">
                  <div className="flex items-center gap-4 mb-8 pl-6">
                    <div className="w-4 h-4 rounded-full bg-[#C9A961] shadow-lg shadow-[#C9A961]/20" />
                    <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                      {month}
                      <span className="text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-[#E5E5E5]">
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
                          className="group relative bg-white backdrop-blur-2xl border border-[#E5E5E5] rounded-3xl p-7 hover:border-[#C9A961] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C9A961]/10 shadow-sm"
                        >
                          <div className="absolute -left-10 top-10 w-3 h-3 rounded-full bg-gradient-to-br from-[#C9A961] to-[#184C3A] shadow-lg shadow-[#C9A961]/20" />
                          
                          <div className="flex flex-col md:flex-row gap-6">
                            {imageSrc && (
                              <div className="md:w-48 flex-shrink-0">
                                <div className="w-full h-32 rounded-2xl overflow-hidden bg-[#FAF8EF] group-hover:scale-105 transition-transform duration-500">
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
                                        ? 'bg-[#FAF8EF] text-[#C9A961] border-[#C9A961]/30'
                                        : 'bg-[#FAF8EF] text-[#184C3A] border-[#C9A961]/30'
                                    }`}>
                                      {isDraft ? <Edit3 className="w-3.5 h-3.5" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
                                      {isDraft ? 'Draft' : 'Live'}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                      {formatDate(isDraft ? item.updatedAt : item.createdAt)}
                                    </span>
                                  </div>
                                  <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#184C3A] transition-colors">
                                    {item.title || 'Untitled Story'}
                                  </h4>
                                </div>
                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                  <button
                                    onClick={() => handleEdit(item._id, isDraft)}
                                    className="p-2.5 bg-[#FAF8EF] hover:bg-[#FAF8EF] text-gray-600 hover:text-[#184C3A] rounded-xl transition-all"
                                    title="Edit"
                                  >
                                    <Edit3 className="w-5 h-5" />
                                  </button>
                                  {!isDraft && (
                                    <button
                                      onClick={() => handleCopyLink(item.paramlink)}
                                      className="p-2.5 bg-[#FAF8EF] hover:bg-[#FAF8EF] text-gray-600 hover:text-[#184C3A] rounded-xl transition-all"
                                      title="Copy Link"
                                    >
                                      <Copy className="w-5 h-5" />
                                    </button>
                                  )}
                                  <button
                                    onClick={() => handleDelete(item._id, isDraft)}
                                    className="p-2.5 bg-[#FAF8EF] hover:bg-[#FAF8EF] text-gray-600 hover:text-[#C9A961] rounded-xl transition-all"
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
                  <div className="w-20 h-20 bg-[#FAF8EF] rounded-full flex items-center justify-center mx-auto mb-5">
                    <Cloud className="w-9 h-9 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No content yet</h3>
                  <p className="text-gray-500 mb-6">Start creating amazing content for your audience</p>
                  <button
                    onClick={handleCreateNew}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#184C3A] to-[#1f5f47] text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-[#184C3A]/20 transition-all"
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
                      ? 'bg-[#184C3A] text-white shadow-lg shadow-[#184C3A]/20'
                      : 'bg-white text-gray-600 hover:text-[#184C3A] hover:bg-[#FAF8EF] border border-[#E5E5E5]'
                  }`}
                >
                  <CheckCircle2 className="w-4.5 h-4.5" />
                  Published ({posts.length})
                </button>
                <button
                  onClick={() => setActiveContentTab('drafts')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    activeContentTab === 'drafts'
                      ? 'bg-[#C9A961] text-white shadow-lg shadow-[#C9A961]/20'
                      : 'bg-white text-gray-600 hover:text-[#C9A961] hover:bg-[#FAF8EF] border border-[#E5E5E5]'
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
                  className="w-full pl-12 pr-4 py-2.5 bg-white border border-[#E5E5E5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#184C3A]/30 focus:border-[#184C3A] text-gray-900 placeholder-gray-400 text-sm shadow-sm"
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
                    className="group relative bg-white backdrop-blur-2xl border border-[#E5E5E5] rounded-3xl overflow-hidden hover:border-[#C9A961] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#C9A961]/10 shadow-sm"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-[#FAF8EF] to-[#FAF8EF] overflow-hidden">
                      {imageSrc ? (
                        <img src={imageSrc} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FileText className="w-12 h-12 text-[#C9A961]" />
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${
                          isDraft
                            ? 'bg-[#C9A961]/90 text-white border-[#C9A961]/30'
                            : 'bg-[#184C3A]/90 text-white border-[#184C3A]/30'
                        }`}>
                          {isDraft ? <Edit3 className="w-3.5 h-3.5" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
                          {isDraft ? 'Draft' : 'Live'}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <button
                          onClick={() => handleEdit(item._id, isDraft)}
                          className="p-2.5 bg-white/90 backdrop-blur-xl text-gray-800 rounded-xl hover:bg-[#184C3A] hover:text-white hover:scale-110 transition-all shadow-lg"
                        >
                          <Edit3 className="w-4.5 h-4.5" />
                        </button>
                        {!isDraft && (
                          <button
                            onClick={() => handleCopyLink(item.paramlink)}
                            className="p-2.5 bg-white/90 backdrop-blur-xl text-gray-800 rounded-xl hover:bg-[#184C3A] hover:text-white hover:scale-110 transition-all shadow-lg"
                          >
                            <Copy className="w-4.5 h-4.5" />
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(item._id, isDraft)}
                          className="p-2.5 bg-white/90 backdrop-blur-xl text-gray-800 rounded-xl hover:bg-[#C9A961] hover:text-white hover:scale-110 transition-all shadow-lg"
                        >
                          <Trash2 className="w-4.5 h-4.5" />
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#184C3A] transition-colors">
                        {item.title || 'Untitled'}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {truncateText(item.content)}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-[#E5E5E5]">
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
                <div className="w-20 h-20 bg-[#FAF8EF] rounded-full flex items-center justify-center mx-auto mb-5">
                  <Cloud className="w-9 h-9 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No content found</h3>
                <p className="text-gray-500 mb-6">
                  {searchQuery ? 'Try adjusting your search' : 'Start creating your first piece of content'}
                </p>
                {!searchQuery && (
                  <button
                    onClick={handleCreateNew}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#184C3A] to-[#1f5f47] text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-[#184C3A]/20 transition-all"
                  >
                    <PlusCircle className="w-5 h-5" />
                    Create Something New
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* Appointments & Inquiries View */}
        {activeView === 'appointments' && (
          <div className="space-y-6">
            {/* Header & Filter Bar */}
            <div className="bg-white backdrop-blur-2xl border border-[#E5E5E5] rounded-3xl p-4 sm:p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Inbox className="w-6 h-6 text-[#184C3A]" />
                  Inquiries & Contact Submissions
                </h2>
                <p className="text-[#6B7280] text-sm mt-1">
                  Manage patient bookings, contact forms, source tracking & status responses.
                </p>
              </div>

              {/* Status Filter Badges */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { key: 'all', label: `All (${appointmentStats.total || 0})` },
                  { key: 'new', label: `New (${appointmentStats.new || 0})` },
                  { key: 'contacted', label: `Contacted (${appointmentStats.contacted || 0})` },
                  { key: 'scheduled', label: `Scheduled (${appointmentStats.scheduled || 0})` },
                  { key: 'completed', label: `Completed (${appointmentStats.completed || 0})` },
                  { key: 'cancelled', label: `Cancelled (${appointmentStats.cancelled || 0})` }
                ].map(filterTab => (
                  <button
                    key={filterTab.key}
                    onClick={() => {
                      setAppointmentFilter(filterTab.key);
                      fetchAppointments(filterTab.key, appointmentSearch);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      appointmentFilter === filterTab.key
                        ? 'bg-[#184C3A] text-white shadow-md'
                        : 'bg-[#FAF8EF] text-gray-600 hover:bg-gray-200/70 border border-[#E5E5E5]'
                    }`}
                  >
                    {filterTab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input Bar */}
            <div className="relative max-w-2xl">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by patient name, phone, email, department, message, or source..."
                value={appointmentSearch}
                onChange={(e) => {
                  setAppointmentSearch(e.target.value);
                  fetchAppointments(appointmentFilter, e.target.value);
                }}
                className="w-full pl-14 pr-6 py-4 bg-white border border-[#E5E5E5] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#184C3A]/30 text-gray-900 text-sm shadow-sm"
              />
            </div>

            {/* Inquiries Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {appointments.map((apt) => {
                const waCleanPhone = (apt.phone || '').replace(/[^0-9]/g, '');
                const waText = encodeURIComponent(`Hello ${apt.fullName || 'Patient'}, following up from Vedara Care regarding your inquiry for ${apt.concern || 'treatment'}.`);
                const waUrl = `https://wa.me/${waCleanPhone}?text=${waText}`;

                return (
                  <div
                    key={apt._id}
                    className="bg-white border border-[#E5E5E5] rounded-3xl p-6 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      {/* Top Bar: Source & Status Selector */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
                        <span className="inline-flex items-center gap-1.5 bg-[#FAF8EF] text-[#C9A961] border border-[#C9A961]/30 px-3 py-1 rounded-full text-xs font-semibold">
                          <Tag className="w-3.5 h-3.5" />
                          Source: {apt.source || 'Contact Form'}
                        </span>

                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-gray-500">Status:</span>
                          <select
                            value={apt.status || 'new'}
                            onChange={(e) => handleUpdateAppointmentStatus(apt._id, e.target.value)}
                            className={`px-3 py-1 rounded-xl text-xs font-bold focus:outline-none border cursor-pointer ${
                              apt.status === 'new' ? 'bg-amber-100 text-amber-800 border-amber-300' :
                              apt.status === 'contacted' ? 'bg-blue-100 text-blue-800 border-blue-300' :
                              apt.status === 'scheduled' ? 'bg-purple-100 text-purple-800 border-purple-300' :
                              apt.status === 'completed' ? 'bg-emerald-100 text-emerald-800 border-emerald-300' :
                              'bg-rose-100 text-rose-800 border-rose-300'
                            }`}
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="scheduled">Scheduled</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </div>
                      </div>

                      {/* Patient Info */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{apt.fullName || 'Anonymous Patient'}</h3>
                        <p className="text-sm font-semibold text-[#184C3A]">Department / Concern: {apt.concern || 'General Inquiry'}</p>
                      </div>

                      {/* Contact & Date Info */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600 bg-[#FAF8EF] p-3 rounded-2xl">
                        <div className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-[#184C3A]" />
                          <span>{apt.phone || 'No phone'}</span>
                        </div>
                        {apt.email && (
                          <div className="flex items-center gap-2 truncate">
                            <Mail className="w-3.5 h-3.5 text-[#184C3A]" />
                            <span className="truncate">{apt.email}</span>
                          </div>
                        )}
                        {apt.preferredDate && (
                          <div className="flex items-center gap-2">
                            <CalendarDays className="w-3.5 h-3.5 text-[#C9A961]" />
                            <span>Pref Date: {formatDate(apt.preferredDate)}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-[#C9A961]" />
                          <span>Submitted: {getRelativeDate(apt.createdAt)}</span>
                        </div>
                      </div>

                      {/* Details / Message */}
                      {apt.additionalInfo && (
                        <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-xs text-gray-700 leading-relaxed space-y-1">
                          <strong className="text-gray-900 block font-semibold">Patient Note / Details:</strong>
                          <p className="whitespace-pre-line">{apt.additionalInfo}</p>
                        </div>
                      )}
                    </div>

                    {/* Quick Response Actions */}
                    <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {apt.phone && (
                          <>
                            <a
                              href={waUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3.5 py-2 bg-[#25D366] hover:bg-[#20bd5b] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
                            >
                              <MessageCircle className="w-3.5 h-3.5 fill-current" />
                              WhatsApp
                            </a>
                            <a
                              href={`tel:${apt.phone}`}
                              className="px-3.5 py-2 bg-[#184C3A] hover:bg-[#123B2D] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
                            >
                              <Phone className="w-3.5 h-3.5" />
                              Call
                            </a>
                          </>
                        )}
                        {apt.email && (
                          <a
                            href={`mailto:${apt.email}`}
                            className="px-3.5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            Email
                          </a>
                        )}
                      </div>

                      <button
                        onClick={() => handleDeleteAppointment(apt._id)}
                        className="p-2 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                        title="Delete record"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}

              {appointments.length === 0 && (
                <div className="col-span-full text-center py-20 bg-white border border-[#E5E5E5] rounded-3xl">
                  <Inbox className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">No Inquiries Found</h3>
                  <p className="text-gray-500 text-sm">
                    {appointmentSearch ? 'Try clearing your search query' : 'Patient contact submissions and booking inquiries will appear here.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Toast Notifications */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 space-y-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`flex items-center gap-4 px-6 py-4 rounded-2xl shadow-xl border border-[#E5E5E5] backdrop-blur-2xl animate-fade-in-up ${
              toast.type === 'success'
                ? 'bg-gradient-to-r from-[#184C3A]/95 to-[#1f5f47]/95 text-white border-[#C9A961]/30'
                : 'bg-gradient-to-r from-[#C9A961]/95 to-[#C9A961]/95 text-white border-[#184C3A]/30'
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
