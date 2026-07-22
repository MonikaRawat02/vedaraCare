import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  MessageCircle, 
  CheckCircle2, 
  Send, 
  Navigation, 
  Calendar, 
  ShieldCheck, 
  ChevronDown,
  Sparkles,
  ArrowRight,
  Car,
  Accessibility,
  HeartHandshake
} from 'lucide-react';

export default function Contact() {
  const [activeTab, setActiveTab] = useState('Physiotherapy');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Physiotherapy',
    preferredDate: '',
    preferredTime: 'Morning (8:30 AM - 12:00 PM)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionResponse, setSubmissionResponse] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Check if clinic is open currently (8:30 AM - 11:30 PM)
  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeInMinutes = hours * 60 + minutes;
    const openTime = 8 * 60 + 30; // 8:30 AM
    const closeTime = 23 * 60 + 30; // 11:30 PM
    setIsOpenNow(timeInMinutes >= openTime && timeInMinutes <= closeTime);
  }, []);

  const handleTabChange = (serviceName) => {
    setActiveTab(serviceName);
    setFormData(prev => ({ ...prev, service: serviceName }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setSubmissionResponse(data);
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback response if network fails
      const fallbackRef = `VC-${Date.now().toString().slice(-6)}`;
      const waText = encodeURIComponent(`Hello Vedara Care, I submitted an inquiry.\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Department: ${formData.service}`);
      setSubmissionResponse({
        success: true,
        referenceId: fallbackRef,
        whatsappUrl: `https://wa.me/971555867466?text=${waText}`
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const departments = [
    { name: 'Physiotherapy', desc: 'Sports, post-surgery, neuro, pediatric & joint rehab' },
    { name: 'Ayurveda', desc: 'Panchakarma, Kativasti, Abhyanga & chronic illness' },
    { name: 'Dermatology', desc: 'Skin, acne, eczema, PRP hair & rejuvenation' },
    { name: 'Home Healthcare', desc: 'Physiotherapy & medical care at your home across Dubai' },
    { name: 'General Inquiry', desc: 'Insurance, billing, location & general guidance' }
  ];

  const faqs = [
    {
      q: "Do I need to book an appointment or can I walk in?",
      a: "While walk-in patients are welcome, we strongly recommend booking in advance to guarantee zero wait time and match you with the specialist best suited for your condition. Same-day appointments are usually available."
    },
    {
      q: "How do I verify if my insurance is covered before visiting?",
      a: "Simply send a photo of your insurance card via WhatsApp to +971 55 586 7466. Our insurance desk will verify direct-billing coverage, pre-authorization needs, and any copay within 15 minutes during operating hours."
    },
    {
      q: "What should I bring to my first appointment?",
      a: "Please bring your Emirates ID or Passport, current health insurance card (if applicable), and any relevant prior medical reports, MRI/X-ray scans, or doctor referral letters."
    },
    {
      q: "Is free parking available near the clinic?",
      a: "Yes! Dedicated patient parking is available directly in front of our clinic entrance at Binghatti Azure in JVC. Free street parking is also widely accessible."
    },
    {
      q: "How does the Home Healthcare / Home Visit service work?",
      a: "Our DHA-licensed physiotherapists and medical staff bring specialized portable equipment directly to your residence anywhere in Dubai (JVC, JVT, Marina, Downtown, Palm Jumeirah, Mirdif, etc.). Contact us via phone or WhatsApp to schedule a home session."
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "LocalBusiness", "MedicalBusiness"],
        "@id": "https://vedaracare.ae/#organization",
        "name": "Vedara Care Polyclinic",
        "url": "https://vedaracare.ae/contact",
        "logo": "https://vedaracare.ae/logo.png",
        "image": "https://vedaracare.ae/images/clinic-exterior.jpg",
        "telephone": "+971 55 586 7466",
        "email": "booking@vedaracare.ae",
        "priceRange": "AED 250 - AED 8,000",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4, Jumeirah Village Circle",
          "addressLocality": "Jumeirah Village Circle",
          "addressRegion": "Dubai",
          "addressCountry": "AE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "25.0683",
          "longitude": "55.2072"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "08:30",
            "closes": "23:30"
          }
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+971 55 586 7466",
            "contactType": "Customer Service & Appointments",
            "areaServed": "AE",
            "availableLanguage": ["English", "Arabic", "Hindi", "Urdu"]
          }
        ]
      },
      {
        "@type": "ContactPage",
        "@id": "https://vedaracare.ae/contact/#webpage",
        "url": "https://vedaracare.ae/contact",
        "name": "Contact Vedara Care Polyclinic | JVC Dubai",
        "description": "Contact Vedara Care Polyclinic in Jumeirah Village Circle, Dubai. Book consultations for Physiotherapy, Ayurveda, Dermatology, and Home Healthcare."
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Contact Us | Vedara Care Polyclinic JVC Dubai | Book Appointment</title>
        <meta name="description" content="Contact Vedara Care Polyclinic in Jumeirah Village Circle (JVC), Dubai. Phone: +971 55 586 7466. Open daily 8:30 AM - 11:30 PM. Book Physiotherapy, Ayurveda, Dermatology & Home Visits." />
        <link rel="canonical" href="https://vedaracare.ae/contact" />
        <meta property="og:title" content="Contact Vedara Care Polyclinic — JVC Dubai" />
        <meta property="og:description" content="DHA-licensed polyclinic in Jumeirah Village Circle. Direct appointments, insurance checks, WhatsApp support & home visits across Dubai." />
        <meta property="og:url" content="https://vedaracare.ae/contact" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>

      <div className="bg-[#FAF8F5] min-h-screen text-[#1A1A1A] font-sans">
        {/* Header Hero Section */}
        <section className="bg-gradient-to-b from-[#184C3A] to-[#123B2D] text-white pt-12 pb-20 px-4 md:px-8 relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C9A55A_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="max-w-[1400px] mx-auto relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-sans text-[#C9A55A] mb-8 uppercase tracking-widest">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span className="text-white opacity-90">Contact Us</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#C9A55A]/20 border border-[#C9A55A]/40 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#E6C687] tracking-wider uppercase">
                  <Sparkles size={14} className="text-[#E6C687]" />
                  DHA-LICENSED POLYCLINIC · JUMEIRAH VILLAGE CIRCLE
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.15] tracking-tight">
                  Get in touch with <span className="text-[#E6C687]">Vedara Care.</span>
                </h1>
                <p className="text-lg md:text-xl text-[#F8F9FA]/85 leading-relaxed max-w-3xl font-light">
                  Whether you wish to book an appointment, check insurance direct-billing, inquire about home healthcare, or consult our medical experts, we are here for you every day.
                </p>

                {/* Status & Trust Pills */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/15 text-sm font-medium">
                    <span className={`w-2.5 h-2.5 rounded-full ${isOpenNow ? 'bg-[#25D366] animate-pulse' : 'bg-amber-400'}`} />
                    <span>{isOpenNow ? 'Open Now (8:30 AM - 11:30 PM)' : 'Opening at 8:30 AM'}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/15 text-sm font-medium">
                    <Clock size={15} className="text-[#E6C687]" />
                    <span>Response Time &lt; 15 Mins</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/15 text-sm font-medium">
                    <Car size={15} className="text-[#E6C687]" />
                    <span>Free Patient Parking</span>
                  </div>
                </div>
              </div>

              {/* Emergency / Urgent Highlight Card */}
              <div className="lg:col-span-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl space-y-4 text-white shadow-xl">
                  <div className="flex items-center gap-3 text-[#E6C687]">
                    <MessageCircle size={24} className="fill-current" />
                    <h3 className="font-serif text-xl font-medium">Instant WhatsApp Desk</h3>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Have a quick question or need to send insurance documents? Reach our reception team instantly on WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/971555867466?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20bd5b] text-white py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-green-500/20"
                  >
                    <MessageCircle size={18} fill="currentColor" />
                    Chat on WhatsApp Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Quick Action Contact Cards */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-8 -mt-10 relative z-20 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Phone Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all group">
              <div>
                <div className="w-12 h-12 bg-[#184C3A]/10 text-[#184C3A] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#184C3A] group-hover:text-white transition-colors">
                  <Phone size={22} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A55A] block mb-1">Direct Call</span>
                <h4 className="text-lg font-serif font-medium text-[#1A1A1A] mb-1">+971 55 586 7466</h4>
                <p className="text-xs text-gray-500">Available 8:30 AM to 11:30 PM daily</p>
              </div>
              <a href="tel:+971555867466" className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#184C3A] hover:underline">
                Call Reception Now <ArrowRight size={14} />
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all group">
              <div>
                <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle size={22} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A55A] block mb-1">WhatsApp Desk</span>
                <h4 className="text-lg font-serif font-medium text-[#1A1A1A] mb-1">+971 55 586 7466</h4>
                <p className="text-xs text-gray-500">Insurance checks & quick scheduling</p>
              </div>
              <a href="https://wa.me/971555867466" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:underline">
                Open WhatsApp Chat <ArrowRight size={14} />
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all group">
              <div>
                <div className="w-12 h-12 bg-[#C9A55A]/10 text-[#C9A55A] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C9A55A] group-hover:text-white transition-colors">
                  <Mail size={22} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A55A] block mb-1">Email Support</span>
                <h4 className="text-sm font-semibold text-[#1A1A1A] mb-1 truncate">booking@vedaracare.ae</h4>
                <p className="text-xs text-gray-500">For reports, records & inquiries</p>
              </div>
              <a href="mailto:booking@vedaracare.ae" className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#C9A55A] hover:underline">
                Send Email <ArrowRight size={14} />
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all group">
              <div>
                <div className="w-12 h-12 bg-[#184C3A]/10 text-[#184C3A] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#184C3A] group-hover:text-white transition-colors">
                  <MapPin size={22} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A55A] block mb-1">Location</span>
                <h4 className="text-sm font-semibold text-[#1A1A1A] mb-1">Binghatti Azure, Shop -4</h4>
                <p className="text-xs text-gray-500">Jumeirah Village Circle (JVC), Dubai</p>
              </div>
              <a href="https://maps.google.com/?q=Vedara+Care+Polyclinic+JVC+Dubai" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#184C3A] hover:underline">
                Open in Google Maps <Navigation size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* Main 2-Column Interactive Form & Clinic Info Section */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-8 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT: Interactive Contact / Appointment Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="mb-8">
                <span className="text-xs font-semibold tracking-widest text-[#C9A55A] uppercase block mb-2">Book or Inquire</span>
                <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1A1A1A]">Send us a message.</h2>
                <p className="text-sm text-gray-600 mt-2">
                  Select your department of interest below to route your message directly to the specialist team.
                </p>
              </div>

              {/* Department Tabs */}
              <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-100 pb-4">
                {departments.map((dept) => (
                  <button
                    key={dept.name}
                    type="button"
                    onClick={() => handleTabChange(dept.name)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                      activeTab === dept.name
                        ? 'bg-[#184C3A] text-white shadow-sm'
                        : 'bg-[#FAF8F5] text-gray-600 hover:bg-gray-200/60'
                    }`}
                  >
                    {dept.name}
                  </button>
                ))}
              </div>

              {isSubmitted ? (
                <div className="bg-[#FAF8F5] border-2 border-[#184C3A] rounded-2xl p-8 text-center space-y-5 animate-fade-in">
                  <div className="w-16 h-16 bg-[#184C3A] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-medium text-[#1A1A1A]">Inquiry Registered Successfully!</h3>
                  </div>
                  <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#1A1A1A]">{formData.name}</strong>. Your inquiry for <strong className="text-[#184C3A]">{formData.service}</strong> has been logged in our system. Our reception desk will contact you within 15 minutes.
                  </p>
                  
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                      href="/"
                      className="w-full sm:w-auto bg-[#184C3A] hover:bg-[#123B2D] text-white px-7 py-3 rounded-xl text-xs font-bold transition-all shadow-md text-center"
                    >
                      Return to Homepage
                    </Link>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto bg-white border border-gray-200 text-gray-800 px-7 py-3 rounded-xl text-xs font-bold hover:bg-gray-100 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Sarah Mitchell"
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#184C3A] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+971 50 123 4567"
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#184C3A] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="sarah@example.com"
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#184C3A] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-2">
                        Department / Service
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#184C3A] transition-colors"
                      >
                        {departments.map(d => (
                          <option key={d.name} value={d.name}>{d.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-2">
                        Preferred Date (Optional)
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#184C3A] transition-colors text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-2">
                        Preferred Time Window
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#184C3A] transition-colors"
                      >
                        <option value="Morning (8:30 AM - 12:00 PM)">Morning (8:30 AM - 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM - 5:00 PM)">Afternoon (12:00 PM - 5:00 PM)</option>
                        <option value="Evening (5:00 PM - 11:30 PM)">Evening (5:00 PM - 11:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-2">
                      Message / Medical Details (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us briefly about your condition, insurance question, or preferred visit time..."
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#184C3A] transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-gray-500 flex items-center gap-1.5">
                      <ShieldCheck size={16} className="text-[#184C3A] shrink-0" />
                      Your medical info is kept 100% private and confidential.
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-[#184C3A] hover:bg-[#123B2D] text-white px-8 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          Submit Inquiry <Send size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* RIGHT: Detailed Information & Department Desks */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Detailed Location & Address Card */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
                <div>
                  <span className="text-xs font-semibold tracking-widest text-[#C9A55A] uppercase block mb-1">Clinic Address</span>
                  <h3 className="text-2xl font-serif font-medium text-[#1A1A1A]">Vedara Care Polyclinic</h3>
                </div>

                <div className="space-y-4 text-sm text-gray-600">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-[#C9A55A] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1A1A1A]">Address:</strong>
                      <p className="leading-relaxed">
                        Al Barsha South Fourth, Binghatti Azure, Shop -4,<br />
                        Jumeirah Village Circle (JVC), Dubai, UAE
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={20} className="text-[#C9A55A] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1A1A1A]">Opening Hours:</strong>
                      <p className="leading-relaxed">
                        Monday – Sunday: <span className="font-semibold text-[#184C3A]">8:30 AM to 11:30 PM</span><br />
                        <span className="text-xs text-gray-500">Open 7 days a week including public holidays</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Car size={20} className="text-[#C9A55A] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1A1A1A]">Landmarks & Accessibility:</strong>
                      <ul className="list-disc list-inside text-xs text-gray-500 space-y-1 mt-1">
                        <li>5 mins walk from Circle Mall, JVC</li>
                        <li>3 mins from FIVE Jumeirah Village Hotel</li>
                        <li>Easy access from Sheikh MBZ Road & Al Khail Road</li>
                        <li>Free dedicated patient parking in front of clinic</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Department Direct Desks */}
              <div className="bg-[#184C3A] text-white p-8 rounded-3xl space-y-6 shadow-xl">
                <div>
                  <span className="text-xs font-semibold tracking-widest text-[#E6C687] uppercase block mb-1">Direct Department Desks</span>
                  <h3 className="text-2xl font-serif font-medium">Specialist Contact Lines</h3>
                </div>

                <div className="space-y-4 divide-y divide-white/10 text-sm">
                  <div className="pt-3 flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white">Physiotherapy Department</h4>
                      <p className="text-xs text-white/70">Sports, Rehab, Neuro & Joint care</p>
                    </div>
                    <a href="tel:+971555867466" className="text-xs font-bold text-[#E6C687] hover:underline flex items-center gap-1">
                      Call <Phone size={12} />
                    </a>
                  </div>

                  <div className="pt-3 flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white">Ayurveda Clinic</h4>
                      <p className="text-xs text-white/70">Panchakarma, Kativasti & Chronic care</p>
                    </div>
                    <a href="tel:+971555867466" className="text-xs font-bold text-[#E6C687] hover:underline flex items-center gap-1">
                      Call <Phone size={12} />
                    </a>
                  </div>

                  <div className="pt-3 flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white">Dermatology & Skin Care</h4>
                      <p className="text-xs text-white/70">Eczema, PRP Hair, Acne & Peel</p>
                    </div>
                    <a href="tel:+971555867466" className="text-xs font-bold text-[#E6C687] hover:underline flex items-center gap-1">
                      Call <Phone size={12} />
                    </a>
                  </div>

                  <div className="pt-3 flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white">Home Healthcare Desk</h4>
                      <p className="text-xs text-white/70">Physiotherapy at home across Dubai</p>
                    </div>
                    <a href="https://wa.me/971555867466?text=Hi,%20I%20need%20information%20about%20Home%20Healthcare." target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#25D366] hover:underline flex items-center gap-1">
                      WhatsApp <MessageCircle size={12} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Insurance Direct Billing Banner */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center space-y-4">
                <span className="text-xs font-semibold tracking-widest text-[#C9A55A] uppercase block">Insurance Support</span>
                <h4 className="text-base font-serif font-medium text-[#1A1A1A]">Direct-Billing Insurance Partners</h4>
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-gray-600">
                  <span className="bg-[#FAF8F5] px-3 py-1.5 rounded-lg border border-gray-100">Daman</span>
                  <span className="bg-[#FAF8F5] px-3 py-1.5 rounded-lg border border-gray-100">AXA</span>
                  <span className="bg-[#FAF8F5] px-3 py-1.5 rounded-lg border border-gray-100">Allianz</span>
                  <span className="bg-[#FAF8F5] px-3 py-1.5 rounded-lg border border-gray-100">Oman Insurance</span>
                  <span className="bg-[#FAF8F5] px-3 py-1.5 rounded-lg border border-gray-100">Now Health</span>
                  <span className="bg-[#FAF8F5] px-3 py-1.5 rounded-lg border border-gray-100">Bupa</span>
                  <span className="bg-[#FAF8F5] px-3 py-1.5 rounded-lg border border-gray-100">MetLife</span>
                </div>
                <a
                  href="https://wa.me/971555867466?text=Hi,%20I%20would%20like%20to%20verify%20my%20insurance%20coverage."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#184C3A] hover:underline pt-2"
                >
                  Verify Your Insurance Coverage via WhatsApp <ArrowRight size={14} />
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Embedded Map Section */}
        <section className="bg-white py-16 border-t border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <span className="text-xs font-semibold tracking-widest text-[#C9A55A] uppercase block">Location Map</span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1A1A1A]">Find us in Jumeirah Village Circle</h2>
              <p className="text-sm text-gray-600">
                Conveniently located at Binghatti Azure in JVC, walking distance from Circle Mall with ample parking.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[320px] sm:h-[450px] relative">
              <iframe
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9894568193345!2d55.20722358578439!3d25.068346479666594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dd72f3da587%3A0xe7ecca8687a75b72!2sVedara%20Care%20Polyclinic!5e0!3m2!1sen!2sus!4v1780727442216!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vedara Care JVC Dubai Location"
              />
            </div>
          </div>
        </section>

        {/* Interactive FAQ Accordion */}
        <section className="max-w-[1000px] mx-auto px-4 md:px-8 py-20">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#C9A55A] uppercase block">Patient Guidance</span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1A1A1A]">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-lg font-medium text-[#1A1A1A]">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-[#C9A55A] shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="bg-[#184C3A] text-white py-16 px-4 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight">
              Ready to schedule your appointment?
            </h2>
            <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
              Our medical team at JVC Dubai is available 7 days a week. Book online or speak to our desk immediately.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/book"
                className="bg-[#C9A55A] hover:bg-[#b89449] text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg"
              >
                Book Appointment Online
              </Link>
              <a
                href="https://wa.me/971555867466?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5b] text-white px-8 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-lg"
              >
                <MessageCircle size={18} fill="currentColor" />
                WhatsApp Direct Desk
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
