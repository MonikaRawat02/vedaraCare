import Link from 'next/link';
import { Star, Users, Heart, MapPin, Calendar, MessageCircle, Shield, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with Image and Gradient Overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="/images/home.jpg" 
          alt="Modern healthcare clinic" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#184C3A]/95 via-[#184C3A]/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="font-serif text-5xl lg:text-6xl mb-6 leading-tight">
              Holistic Healthcare in Jumeirah Village Circle, Dubai
            </h1>
            
            <p className="text-xl mb-6 text-white/90">
              DHA-licensed Ayurveda, Physiotherapy, Dermatology, Home Healthcare & Wellness services designed for modern Dubai living.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
              <p className="text-[14px] text-white/90 leading-relaxed font-sans">
                Vedara Care Polyclinic is a DHA-licensed healthcare clinic in JVC Dubai offering Ayurveda, physiotherapy, dermatology, home healthcare, and wellness treatments by experienced doctors and therapists in a modern patient-focused environment.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/book" className="px-8 py-3 bg-[#C8A76A] text-white rounded-lg font-bold text-sm hover:opacity-90 transition-all flex items-center gap-2">
                <Calendar size={18} />
                Book Appointment
              </Link>
              <Link href="https://wa.me/971XXXXXXXX" className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg font-bold text-sm hover:bg-white/30 transition-all flex items-center gap-2">
                <MessageCircle size={18} />
                WhatsApp Now
              </Link>
            </div>

            {/* Bottom Badges */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2 text-white group">
                <Shield size={16} className="text-[#C8A76A] shrink-0" />
                <span className="text-[14px] font-medium whitespace-nowrap">DHA Licensed</span>
              </div>
              <div className="flex items-center gap-2 text-white group">
                <CheckCircle size={16} className="text-[#C8A76A] shrink-0" />
                <span className="text-[14px] font-medium whitespace-nowrap">Insurance Accepted</span>
              </div>
              <div className="flex items-center gap-2 text-white group">
                <Calendar size={16} className="text-[#C8A76A] shrink-0" />
                <span className="text-[14px] font-medium whitespace-nowrap">Same-Day Appointments</span>
              </div>
              <div className="flex items-center gap-2 text-white group">
                <MapPin size={16} className="text-[#C8A76A] shrink-0" />
                <span className="text-[14px] font-medium whitespace-nowrap">Near Circle Mall</span>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-white/20 p-6 flex flex-col gap-1 shadow-xl transform hover:-translate-y-1 transition-transform">
              <Star className="text-[#D4A373] fill-[#D4A373]" size={24} />
              <p className="text-[#1C1C1C] font-semibold font-sans mt-2">4.9 Google Rating</p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-white/20 p-6 flex flex-col gap-1 shadow-xl transform hover:-translate-y-1 transition-transform">
              <Users className="text-[#D4A373]" size={24} />
              <p className="text-[#1C1C1C] font-semibold font-sans mt-2">1000+ Patients</p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-white/20 p-6 flex flex-col gap-1 shadow-xl transform hover:-translate-y-1 transition-transform">
              <Heart className="text-[#D4A373]" size={24} />
              <p className="text-[#1C1C1C] font-semibold font-sans mt-2">Personalized Care</p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-white/20 p-6 flex flex-col gap-1 shadow-xl transform hover:-translate-y-1 transition-transform">
              <MapPin className="text-[#D4A373]" size={24} />
              <p className="text-[#1C1C1C] font-semibold font-sans mt-2">JVC Dubai</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
