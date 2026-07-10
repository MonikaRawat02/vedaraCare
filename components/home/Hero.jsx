import Link from 'next/link';
import { Star, Users, Heart, MapPin, Calendar, MessageCircle, Shield, CheckCircle } from 'lucide-react';

const Hero = ({
  title = "Holistic Healthcare in Jumeirah Village Circle, Dubai",
  description = "DHA-licensed Ayurveda, Physiotherapy, Dermatology, Home Healthcare & Wellness services designed for modern Dubai living.",
  subtext = "Vedara Care Polyclinic is a DHA-licensed healthcare clinic in JVC Dubai offering Ayurveda, physiotherapy, dermatology, home healthcare, and wellness treatments by experienced doctors and therapists in a modern patient-focused environment.",
  primaryCTA = "Book Appointment",
  primaryCTAHref = "/book",
  secondaryCTA = "WhatsApp Now",
  secondaryCTAHref = "https://wa.me/971555867466?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20your%20treatments%20and%20book%20a%20consultation.",
  image = "/images/home.jpg",
  badges = [
    { label: "DHA Licensed", type: "shield" },
    { label: "Insurance Accepted", type: "check" },
    { label: "Same-Day Appointments", type: "calendar" },
    { label: "Near Circle Mall", type: "map" }
  ],
  stats = [
    { label: "4.9 Google Rating", type: "star" },
    { label: "1000+ Patients", type: "users" },
    { label: "Personalized Care", type: "heart" },
    { label: "JVC Dubai", type: "map" }
  ]
}) => {
  const getIcon = (type) => {
    switch (type) {
      case 'shield': return <Shield size={16} className="text-[#C8A76A] shrink-0" />;
      case 'check': return <CheckCircle size={16} className="text-[#C8A76A] shrink-0" />;
      case 'calendar': return <Calendar size={16} className="text-[#C8A76A] shrink-0" />;
      case 'map': return <MapPin size={16} className="text-[#C8A76A] shrink-0" />;
      case 'star': return <Star className="text-[#D4A373] fill-[#D4A373]" size={24} />;
      case 'users': return <Users className="text-[#D4A373]" size={24} />;
      case 'heart': return <Heart className="text-[#D4A373]" size={24} />;
      default: return null;
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with Image and Gradient Overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#184C3A]/95 via-[#184C3A]/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="font-serif text-5xl lg:text-6xl mb-6 leading-tight">
              {title}
            </h1>
            
            <p className="text-xl mb-6 text-white/90">
              {description}
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
              <p className="text-[14px] text-white/90 leading-relaxed font-sans">
                {subtext}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href={primaryCTAHref} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-[#C8A76A] text-white rounded-lg font-bold text-sm hover:opacity-90 transition-all flex items-center gap-2">
                <Calendar size={18} />
                {primaryCTA}
              </a>
              <a href={secondaryCTAHref} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg font-bold text-sm hover:bg-white/30 transition-all flex items-center gap-2">
                <MessageCircle size={18} />
                {secondaryCTA}
              </a>
            </div>

            {/* Bottom Badges */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {badges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-white group">
                  {getIcon(badge.type)}
                  <span className="text-[14px] font-medium whitespace-nowrap">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm rounded-xl border border-white/20 p-6 flex flex-col gap-1 shadow-xl transform hover:-translate-y-1 transition-transform">
                {getIcon(stat.type)}
                <p className="text-[#1C1C1C] font-semibold font-sans mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
