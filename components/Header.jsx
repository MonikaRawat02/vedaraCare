import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Globe, Menu, X, Calendar, ChevronDown } from 'lucide-react';

const Header = () => {
  const [showTopBar, setShowTopBar] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPhysioDropdownOpen, setIsPhysioDropdownOpen] = useState(false);
  const [isMobilePhysioOpen, setIsMobilePhysioOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsPhysioDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Bar */}
      <div 
        className={`bg-[#184C3A] text-white overflow-hidden transition-all duration-300 ${
          showTopBar ? 'h-10 opacity-100' : 'h-0 opacity-0'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between text-[14px] font-sans">
          <div className="flex items-center gap-6">
            <a href="tel:+9714XXXXXXX" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone size={14} className="fill-current" />
              <span>+971 4 XXX XXXX</span>
            </a>
            <span className="hidden md:block opacity-90">
              DHA Licensed Polyclinic in Jumeirah Village Circle, Dubai
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Globe size={14} />
              <div className="flex items-center gap-1 font-medium">
                <span className="cursor-pointer hover:underline">EN</span>
                <span className="opacity-50">|</span>
                <span className="cursor-pointer hover:underline">AR</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-100 shadow-sm relative">
        <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between h-22">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-3 h-3 bg-[#D4A373] rounded-full mt-1"></div>
            <h1 className="text-[24px] font-serif font-medium text-[#1A1A1A] tracking-tight">
              Vedara Care
            </h1>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/ayurveda-dubai" className="text-[14px] font-sans font-medium text-[#1A1A1A] hover:text-[#184C3A] transition-colors">Ayurveda</Link>
            
            {/* Physiotherapy Dropdown */}
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={() => setIsPhysioDropdownOpen(true)}
              onMouseLeave={() => setIsPhysioDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-[14px] font-sans font-medium text-[#1A1A1A] hover:text-[#184C3A] transition-colors"
                onClick={() => setIsPhysioDropdownOpen(!isPhysioDropdownOpen)}
              >
                <Link href="/physiotherapy-dubai" className="hover:text-[#184C3A]">Physiotherapy</Link>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isPhysioDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 pt-2 transition-all duration-200 ${isPhysioDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'}`}>
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[240px]">
                  <Link 
                    href="/physiotherapy-jvc" 
                    className="block px-4 py-2.5 text-[13px] font-sans text-[#4A4A4A] hover:text-[#184C3A] hover:bg-gray-50 transition-colors"
                  >
                    Physiotherapy in JVC
                  </Link>
                  <Link 
                    href="/physiotherapy/post-surgery-rehab-dubai/" 
                    className="block px-4 py-2.5 text-[13px] font-sans text-[#4A4A4A] hover:text-[#184C3A] hover:bg-gray-50 transition-colors"
                  >
                    Post-Surgery Rehab
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/services/dermatology" className="text-[14px] font-sans font-medium text-[#1A1A1A] hover:text-[#184C3A] transition-colors">Dermatology</Link>
            <Link href="/services/home-healthcare" className="text-[14px] font-sans font-medium text-[#1A1A1A] hover:text-[#184C3A] transition-colors">Home Healthcare</Link>
            <Link href="/services/wellness" className="text-[14px] font-sans font-medium text-[#1A1A1A] hover:text-[#184C3A] transition-colors">Wellness</Link>
            <Link href="/doctors" className="text-[14px] font-sans font-medium text-[#1A1A1A] hover:text-[#184C3A] transition-colors">Doctors</Link>
            <Link href="/about" className="text-[14px] font-sans font-medium text-[#1A1A1A] hover:text-[#184C3A] transition-colors">About</Link>
            <Link href="/blog" className="text-[14px] font-sans font-medium text-[#1A1A1A] hover:text-[#184C3A] transition-colors">Blog</Link>
          </div>

          {/* Action Buttons & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              href="/book" 
              className="hidden lg:inline-flex px-[28px] py-[14px] bg-[#1F4538] text-white rounded-md hover:bg-[#184C3A] transition-all text-[16px] font-sans font-semibold shadow-sm"
              style={{ backgroundColor: '#1F4538 !important', color: 'white !important' }}
            >
              Book Appointment
            </Link>
            <a 
              href="https://wa.me/971XXXXXXXX" 
              className="hidden lg:flex w-10 h-10 items-center justify-center bg-[#4A7C59] text-white rounded-full hover:opacity-90 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} className="fill-current" />
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-[#1A1A1A] hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 z-[60] bg-white border-b border-gray-100 transition-all duration-300 ease-in-out shadow-xl overflow-hidden ${
            isMenuOpen ? 'max-h-[60vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col py-6 px-6 gap-6">
            <Link href="/services/ayurveda" onClick={() => setIsMenuOpen(false)} className="text-[16px] font-medium text-[#1A1A1A] hover:text-[#184C3A]">Ayurveda</Link>
            
            {/* Mobile Physiotherapy Accordion */}
            <div>
              <div className="flex items-center justify-between">
                <Link href="/physiotherapy-dubai" onClick={() => setIsMenuOpen(false)} className="text-[16px] font-medium text-[#1A1A1A] hover:text-[#184C3A]">Physiotherapy</Link>
                <button 
                  onClick={() => setIsMobilePhysioOpen(!isMobilePhysioOpen)}
                  className="p-1 text-[#4A4A4A]"
                >
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isMobilePhysioOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <div className={`overflow-hidden transition-all duration-200 ${isMobilePhysioOpen ? 'max-h-40 mt-2' : 'max-h-0'}`}>
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100">
                  <Link href="/physiotherapy-jvc" onClick={() => setIsMenuOpen(false)} className="text-[14px] text-[#4A4A4A] hover:text-[#184C3A]">Physiotherapy in JVC</Link>
                  <Link href="/physiotherapy/post-surgery-rehab-dubai/" onClick={() => setIsMenuOpen(false)} className="text-[14px] text-[#4A4A4A] hover:text-[#184C3A]">Post-Surgery Rehab</Link>
                </div>
              </div>
            </div>

            <Link href="/services/dermatology" onClick={() => setIsMenuOpen(false)} className="text-[16px] font-medium text-[#1A1A1A] hover:text-[#184C3A]">Dermatology</Link>
            <Link href="/services/home-healthcare" onClick={() => setIsMenuOpen(false)} className="text-[16px] font-medium text-[#1A1A1A] hover:text-[#184C3A]">Home Healthcare</Link>
            <Link href="/services/wellness" onClick={() => setIsMenuOpen(false)} className="text-[16px] font-medium text-[#1A1A1A] hover:text-[#184C3A]">Wellness</Link>
            <Link href="/doctors" onClick={() => setIsMenuOpen(false)} className="text-[16px] font-medium text-[#1A1A1A] hover:text-[#184C3A]">Doctors</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-[16px] font-medium text-[#1A1A1A] hover:text-[#184C3A]">About</Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-[16px] font-medium text-[#1A1A1A] hover:text-[#184C3A]">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Persistent Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#184C3A] border-t border-[#1F4538] shadow-2xl h-20 flex items-center">
        <a 
          href="https://wa.me/971XXXXXXXX" 
          className="flex-1 flex flex-col items-center justify-center gap-1 h-full text-white hover:bg-[#4A7C59]/10 transition-colors"
          target="_blank"
          rel="noopener noreferrer">
          <MessageCircle size={22} className="fill-current" />
          <span className="text-[12px] font-medium font-sans">WhatsApp</span>
        </a>
        <a 
          href="tel:+9714XXXXXXX" 
          className="flex-1 flex flex-col items-center justify-center gap-1 h-full text-[#D4A373] bg-[#FDF8F1] hover:bg-[#EAE3D5] transition-colors">
          <Phone size={22} />
          <span className="text-[12px] font-medium font-sans">Call</span>
        </a>
        <Link 
          href="/book" 
          className="flex-1 flex flex-col items-center justify-center gap-1 h-full text-white bg-[#1F4538] hover:bg-[#184C3A] transition-colors">
          <Calendar size={22} />
          <span className="text-[12px] font-medium font-sans">Book</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
