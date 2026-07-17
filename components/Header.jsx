import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Globe, Menu, X, Calendar, ChevronDown } from 'lucide-react';


const AYURVEDA_PAGES = [
  { href: '/ayurveda-dubai', label: 'Ayurveda in Dubai' },
  { href: '/ayurveda-clinic-jvc', label: 'Ayurveda Clinic in JVC' },
];
const AYURVEDA_CONDITIONS = [
  { href: '/conditions/arthritis-ayurveda-dubai', label: 'Arthritis (Ayurveda)' },
  { href: '/conditions/back-pain-ayurveda-dubai', label: 'Back Pain (Ayurveda)' },
  { href: '/conditions/diabetes-ayurveda-dubai', label: 'Diabetes (Ayurveda)' },
  { href: '/conditions/hair-loss-ayurveda-dubai', label: 'Hair Loss (Ayurveda)' },
  { href: '/conditions/ibs-ayurveda-dubai', label: 'IBS (Ayurveda)' },
  { href: '/conditions/migraine-ayurveda-dubai', label: 'Migraine (Ayurveda)' },
  { href: '/conditions/pcos-ayurveda-dubai', label: 'PCOS (Ayurveda)' },
  { href: '/conditions/postnatal-ayurveda-dubai', label: 'Postnatal Care (Ayurveda)' },
  { href: '/conditions/skin-ayurveda-dubai', label: 'Skin Conditions (Ayurveda)' },
  { href: '/conditions/stress-anxiety-ayurveda-dubai', label: 'Stress & Anxiety (Ayurveda)' },
  { href: '/conditions/thyroid-ayurveda-dubai', label: 'Thyroid (Ayurveda)' },
  { href: '/conditions/weight-loss-ayurveda-dubai', label: 'Weight Loss (Ayurveda)' },
];
const AYURVEDA_TREATMENTS = [
  { href: '/treatments/abhyanga-dubai', label: 'Abhyanga' },
  { href: '/treatments/ayurvedic-massage-jvc', label: 'Ayurvedic Massage' },
  { href: '/treatments/kativasti-dubai', label: 'Kativasti' },
  { href: '/treatments/njavarakizhi-dubai', label: 'Njavarakizhi' },
  { href: '/treatments/panchakarma-dubai', label: 'Panchakarma' },
  { href: '/treatments/panchakarma-jvc', label: 'Panchakarma in JVC' },
  { href: '/treatments/shirodhara-dubai', label: 'Shirodhara' },
];
// Data for dropdown menus
const PHYSIOTHERAPY_PAGES = [
  { href: '/physiotherapy-dubai', label: 'Physiotherapy in Dubai' },
  { href: '/physiotherapy-jvc', label: 'Physiotherapy in JVC' },
];
const PHYSIOTHERAPY_SPECIALITIES = [
  { href: '/physiotherapy/neurological-dubai', label: 'Neurological Physiotherapy' },
  { href: '/physiotherapy/pediatric-dubai', label: 'Pediatric Physiotherapy' },
  { href: '/physiotherapy/post-surgery-rehab-dubai', label: 'Post-Surgery Rehab' },
  { href: '/physiotherapy/sports-injury-jvc', label: 'Sports Injury Physiotherapy' },
];
const PHYSIOTHERAPY_CONDITIONS = [
  { href: '/conditions/back-pain-physiotherapy-jvc', label: 'Back Pain' },
  { href: '/conditions/frozen-shoulder-dubai', label: 'Frozen Shoulder' },
  { href: '/conditions/knee-pain-physiotherapy-dubai', label: 'Knee Pain' },
  { href: '/conditions/neck-pain-physiotherapy-jvc', label: 'Neck Pain' },
  { href: '/conditions/pelvic-floor-physiotherapy-dubai', label: 'Pelvic Floor Physiotherapy' },
  { href: '/conditions/sciatica-physiotherapy-dubai', label: 'Sciatica' },
  { href: '/conditions/shoulder-pain-physiotherapy-dubai', label: 'Shoulder Pain' },
  { href: '/conditions/stroke-rehab-dubai', label: 'Post-Stroke Rehab' },
  { href: '/conditions/tennis-elbow-dubai', label: 'Tennis Elbow' },
];
const PHYSIOTHERAPY_TREATMENTS = [
  { href: '/treatments/manual-therapy-dubai', label: 'Manual Therapy' },
];

const WELLNESS_TREATMENTS = [
  { href: '/treatments/cupping-therapy-dubai', label: 'Cupping Therapy' },
];

const DERMATOLOGY_PAGES = [
  { href: '/dermatology-clinic-jvc', label: 'Dermatology Clinic in JVC' },
  { href: '/skin-clinic-jvc', label: 'Skin Clinic in JVC' },
];
const DERMATOLOGY_CONDITIONS = [
  { href: '/conditions/acne-scars-dubai', label: 'Acne Scars Treatment' },
  { href: '/conditions/acne-treatment-jvc', label: 'Acne Treatment' },
  { href: '/conditions/eczema-treatment-dubai', label: 'Eczema Treatment' },
  { href: '/conditions/hair-loss-treatment-jvc', label: 'Hair Loss Treatment' },
  { href: '/conditions/melasma-treatment-dubai', label: 'Melasma Treatment' },
  { href: '/conditions/pigmentation-treatment-dubai', label: 'Pigmentation Treatment' },
  { href: '/conditions/psoriasis-treatment-dubai', label: 'Psoriasis Treatment' },
];
const DERMATOLOGY_TREATMENTS = [
  { href: '/treatments/chemical-peel-dubai', label: 'Chemical Peel' },
  { href: '/treatments/prp-hair-dubai', label: 'PRP Hair Treatment' },
  { href: '/treatments/skin-rejuvenation-jvc', label: 'Skin Rejuvenation' },
];

const HOME_HEALTHCARE_PAGES = [
  { href: '/physiotherapy-at-home-dubai', label: 'Physiotherapy at Home' },
];

// Custom scrollbar hide styles
const scrollbarHide = "scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none]";

const Header = () => {
  const [showTopBar, setShowTopBar] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAyurvedaDropdownOpen, setIsAyurvedaDropdownOpen] = useState(false);
  const [isPhysioDropdownOpen, setIsPhysioDropdownOpen] = useState(false);
  const [isConditionsDropdownOpen, setIsConditionsDropdownOpen] = useState(false);
  const [isWellnessDropdownOpen, setIsWellnessDropdownOpen] = useState(false);
  const [isDermatologyDropdownOpen, setIsDermatologyDropdownOpen] = useState(false);
  const [isHomeHealthcareDropdownOpen, setIsHomeHealthcareDropdownOpen] = useState(false);
  const [isMobileAyurvedaOpen, setIsMobileAyurvedaOpen] = useState(false);
  const [isMobilePhysioOpen, setIsMobilePhysioOpen] = useState(false);
  const [isMobileConditionsOpen, setIsMobileConditionsOpen] = useState(false);
  const [isMobileWellnessOpen, setIsMobileWellnessOpen] = useState(false);
  const [isMobileDermatologyOpen, setIsMobileDermatologyOpen] = useState(false);
  const [isMobileHomeHealthcareOpen, setIsMobileHomeHealthcareOpen] = useState(false);
  const ayurvedaDropdownRef = useRef(null);
  const physioDropdownRef = useRef(null);
  const conditionsDropdownRef = useRef(null);
  const wellnessDropdownRef = useRef(null);
  const dermatologyDropdownRef = useRef(null);
  const homeHealthcareDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setShowTopBar(window.scrollY <= 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if ( ayurvedaDropdownRef.current &&  !ayurvedaDropdownRef.current.contains(event.target)) {
         setIsAyurvedaDropdownOpen(false);
      }
      if (physioDropdownRef.current && !physioDropdownRef.current.contains(event.target)) {
        setIsPhysioDropdownOpen(false);
      }
      if (conditionsDropdownRef.current && !conditionsDropdownRef.current.contains(event.target)) {
        setIsConditionsDropdownOpen(false);
      }
      if (wellnessDropdownRef.current && !wellnessDropdownRef.current.contains(event.target)) {
        setIsWellnessDropdownOpen(false);
      }
      if (dermatologyDropdownRef.current && !dermatologyDropdownRef.current.contains(event.target)) {
        setIsDermatologyDropdownOpen(false);
      }
      if (homeHealthcareDropdownRef.current && !homeHealthcareDropdownRef.current.contains(event.target)) {
        setIsHomeHealthcareDropdownOpen(false);
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
        }`}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 h-full flex items-center justify-between text-[12px] md:text-[14px] font-sans">
          <div className="flex items-center gap-4">
            <a href="tel:+971555867466" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone size={14} className="fill-current" />
              <span>+971 55 586 7466</span>
            </a>
            <span className="hidden lg:block opacity-90">
              DHA Licensed Polyclinic in Jumeirah Village Circle, Dubai
            </span>
          </div>
          <div className="flex items-center gap-3">
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
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 flex items-center justify-between h-20 md:h-22">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-3 h-3 bg-[#D4A373] rounded-full mt-1"></div>
            <h1 className="text-[20px] md:text-[24px] font-serif font-medium text-[#1A1A1A] tracking-tight">
              Vedara Care
            </h1>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-5">
                    <div
            className="relative"
            ref={ayurvedaDropdownRef}
            onMouseEnter={() => setIsAyurvedaDropdownOpen(true)}
            onMouseLeave={() => setIsAyurvedaDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-[14px] font-sans font-medium text-[#1A1A1A] hover:text-[#184C3A] transition-colors"
              onClick={() => setIsAyurvedaDropdownOpen(!isAyurvedaDropdownOpen)}
            >
              <Link href="/ayurveda-dubai" className="hover:text-[#184C3A]">
                Ayurveda
              </Link>

              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  isAyurvedaDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                isAyurvedaDropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-1"
              }`}
            >
              <div className={`bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[240px] max-h-[400px] overflow-y-auto ${scrollbarHide}`}>
                  {AYURVEDA_PAGES.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="block px-4 py-2.5 text-[13px] font-sans text-[#4A4A4A] hover:text-[#184C3A] hover:bg-gray-50 transition-colors"
                    >
                      {page.label}
                    </Link>
                  ))}
                  <div className="px-4 py-2 border-t border-gray-100 mt-1">
                    <span className="text-[12px] font-semibold uppercase tracking-wider text-[#C9A84C]">Ayurveda Conditions</span>
                  </div>
                  {AYURVEDA_CONDITIONS.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="block px-4 py-2.5 text-[13px] font-sans text-[#4A4A4A] hover:text-[#184C3A] hover:bg-gray-50 transition-colors"
                    >
                      {page.label}
                    </Link>
                  ))}
                  <div className="px-4 py-2 border-t border-gray-100 mt-1">
                    <span className="text-[12px] font-semibold uppercase tracking-wider text-[#C9A84C]">Ayurveda Treatments</span>
                  </div>
                  {AYURVEDA_TREATMENTS.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="block px-4 py-2.5 text-[13px] font-sans text-[#4A4A4A] hover:text-[#184C3A] hover:bg-gray-50 transition-colors"
                    >
                      {page.label}
                    </Link>
                  ))}
                </div>
            </div>
          </div>
            
            {/* Physiotherapy Dropdown */}
            <div 
              className="relative" 
              ref={physioDropdownRef}
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
                <div className={`bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[240px] max-h-[400px] overflow-y-auto ${scrollbarHide}`}>
                  {PHYSIOTHERAPY_PAGES.map((page) => (
                  <Link 
                    key={page.href} 
                    href={page.href} 
                    className="block px-4 py-2.5 text-[13px] font-sans text-[#4A4A4A] hover:text-[#184C3A] hover:bg-gray-50 transition-colors"
                  >
                    {page.label}
                  </Link>
                ))}
                  <div className="px-4 py-2 border-t border-gray-100 mt-1">
                    <span className="text-[12px] font-semibold uppercase tracking-wider text-[#C9A84C]">Physiotherapy Specialities</span>
                  </div>
                  {PHYSIOTHERAPY_SPECIALITIES.map((page) => (
                    <Link 
                      key={page.href} 
                      href={page.href} 
                      className="block px-4 py-2.5 text-[13px] font-sans text-[#4A4A4A] hover:text-[#184C3A] hover:bg-gray-50 transition-colors"
                    >
                      {page.label}
                    </Link>
                  ))}
                  <div className="px-4 py-2 border-t border-gray-100 mt-1">
                    <span className="text-[12px] font-semibold uppercase tracking-wider text-[#C9A84C]">Physiotherapy Conditions</span>
                  </div>
                  {PHYSIOTHERAPY_CONDITIONS.map((page) => (
                    <Link 
                      key={page.href} 
                      href={page.href} 
                      className="block px-4 py-2.5 text-[13px] font-sans text-[#4A4A4A] hover:text-[#184C3A] hover:bg-gray-50 transition-colors"
                    >
                      {page.label}
                    </Link>
                  ))}
                  <div className="px-4 py-2 border-t border-gray-100 mt-1">
                    <span className="text-[12px] font-semibold uppercase tracking-wider text-[#C9A84C]">Physiotherapy Treatments</span>
                  </div>
                  {PHYSIOTHERAPY_TREATMENTS.map((page) => (
                    <Link 
                      key={page.href} 
                      href={page.href} 
                      className="block px-4 py-2.5 text-[13px] font-sans text-[#4A4A4A] hover:text-[#184C3A] hover:bg-gray-50 transition-colors"
                    >
                      {page.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Dermatology Dropdown */}
            <div 
              className="relative" 
              ref={dermatologyDropdownRef}
              onMouseEnter={() => setIsDermatologyDropdownOpen(true)}
              onMouseLeave={() => setIsDermatologyDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-[14px] font-sans font-medium text-[#1A1A1A] hover:text-[#184C3A] transition-colors"
                onClick={() => setIsDermatologyDropdownOpen(!isDermatologyDropdownOpen)}
              >
                <Link href="/dermatology-clinic-jvc" className="hover:text-[#184C3A]">Dermatology</Link>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isDermatologyDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 pt-2 transition-all duration-200 ${isDermatologyDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'}`}>
                <div className={`bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[240px] max-h-[400px] overflow-y-auto ${scrollbarHide}`}>
                  {DERMATOLOGY_PAGES.map((page) => (
                  <Link 
                    key={page.href} 
                    href={page.href} 
                    className="block px-4 py-2.5 text-[13px] font-sans text-[#4A4A4A] hover:text-[#184C3A] hover:bg-gray-50 transition-colors"
                  >
                    {page.label}
                  </Link>
                ))}
                  <div className="px-4 py-2 border-t border-gray-100 mt-1">
                    <span className="text-[12px] font-semibold uppercase tracking-wider text-[#C9A84C]">Dermatology Conditions</span>
                  </div>
                  {DERMATOLOGY_CONDITIONS.map((page) => (
                    <Link 
                      key={page.href} 
                      href={page.href} 
                      className="block px-4 py-2.5 text-[13px] font-sans text-[#4A4A4A] hover:text-[#184C3A] hover:bg-gray-50 transition-colors"
                    >
                      {page.label}
                    </Link>
                  ))}
                  <div className="px-4 py-2 border-t border-gray-100 mt-1">
                    <span className="text-[12px] font-semibold uppercase tracking-wider text-[#C9A84C]">Dermatology Treatments</span>
                  </div>
                  {DERMATOLOGY_TREATMENTS.map((page) => (
                    <Link 
                      key={page.href} 
                      href={page.href} 
                      className="block px-4 py-2.5 text-[13px] font-sans text-[#4A4A4A] hover:text-[#184C3A] hover:bg-gray-50 transition-colors"
                    >
                      {page.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Wellness Dropdown */}
            <div 
              className="relative" 
              ref={wellnessDropdownRef}
              onMouseEnter={() => setIsWellnessDropdownOpen(true)}
              onMouseLeave={() => setIsWellnessDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-[14px] font-sans font-medium text-[#1A1A1A] hover:text-[#184C3A] transition-colors"
                onClick={() => setIsWellnessDropdownOpen(!isWellnessDropdownOpen)}
              >
                <span className="hover:text-[#184C3A]">Wellness</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isWellnessDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 pt-2 transition-all duration-200 ${isWellnessDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'}`}>
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[240px]">
                  {WELLNESS_TREATMENTS.map((page) => (
                  <Link 
                    key={page.href} 
                    href={page.href} 
                    className="block px-4 py-2.5 text-[13px] font-sans text-[#4A4A4A] hover:text-[#184C3A] hover:bg-gray-50 transition-colors"
                  >
                    {page.label}
                  </Link>
                ))}
                </div>
              </div>
            </div>

            {/* Home Healthcare Dropdown */}
            <div 
              className="relative" 
              ref={homeHealthcareDropdownRef}
              onMouseEnter={() => setIsHomeHealthcareDropdownOpen(true)}
              onMouseLeave={() => setIsHomeHealthcareDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-[14px] font-sans font-medium text-[#1A1A1A] hover:text-[#184C3A] transition-colors"
                onClick={() => setIsHomeHealthcareDropdownOpen(!isHomeHealthcareDropdownOpen)}
              >
                <Link href="/physiotherapy-at-home-dubai" className="hover:text-[#184C3A]">Home Healthcare</Link>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isHomeHealthcareDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 pt-2 transition-all duration-200 ${isHomeHealthcareDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'}`}>
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[240px]">
                  {HOME_HEALTHCARE_PAGES.map((page) => (
                  <Link 
                    key={page.href} 
                    href={page.href} 
                    className="block px-4 py-2.5 text-[13px] font-sans text-[#4A4A4A] hover:text-[#184C3A] hover:bg-gray-50 transition-colors"
                  >
                    {page.label}
                  </Link>
                ))}
                </div>
              </div>
            </div>
            <Link href="/doctors" className="text-[14px] font-sans font-medium text-[#1A1A1A] hover:text-[#184C3A] transition-colors">Doctors</Link>
            <Link href="/about" className="text-[14px] font-sans font-medium text-[#1A1A1A] hover:text-[#184C3A] transition-colors">About</Link>
            <Link href="/blog" className="text-[14px] font-sans font-medium text-[#1A1A1A] hover:text-[#184C3A] transition-colors">Blog</Link>
          </div>

          {/* Action Buttons & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              href="/book" 
              className="hidden xl:inline-flex px-[28px] py-[14px] bg-[#1F4538] text-white rounded-md hover:bg-[#184C3A] transition-all text-[16px] font-sans font-semibold shadow-sm"
              style={{ backgroundColor: '#1F4538 !important', color: 'white !important' }}
            >
              Book Appointment
            </Link>
            <a
              href="https://wa.me/971555867466?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20your%20treatments%20and%20book%20a%20consultation."
              className="hidden xl:flex w-10 h-10 items-center justify-center bg-[#4A7C59] text-white rounded-full hover:opacity-90 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} className="fill-current" />
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="xl:hidden p-2 text-[#1A1A1A] hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`xl:hidden absolute top-full left-0 right-0 z-[60] bg-white border-b border-gray-100 transition-all duration-300 ease-in-out shadow-xl overflow-y-auto ${
            isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col py-6 px-6 pb-24 gap-6">
                        <div>
              <div className="flex items-center justify-between">
                <Link
                  href="/ayurveda-dubai"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[16px] font-medium text-[#1A1A1A] hover:text-[#184C3A]"
                >
                  Ayurveda
                </Link>

                <button
                  onClick={() => setIsMobileAyurvedaOpen(!isMobileAyurvedaOpen)}
                  className="p-1 text-[#4A4A4A]"
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      isMobileAyurvedaOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <div
                className={`overflow-hidden transition-all duration-200 ${
                  isMobileAyurvedaOpen ? `max-h-[600px] overflow-y-auto mt-2 ${scrollbarHide}` : "max-h-0"
                }`}
              >
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100">
                  {AYURVEDA_PAGES.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-[14px] text-[#4A4A4A] hover:text-[#184C3A]"
                    >
                      {page.label}
                    </Link>
                  ))}
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-[#C9A84C] mt-2">Ayurveda Conditions</span>
                  {AYURVEDA_CONDITIONS.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-[14px] text-[#4A4A4A] hover:text-[#184C3A]"
                    >
                      {page.label}
                    </Link>
                  ))}
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-[#C9A84C] mt-2">Ayurveda Treatments</span>
                  {AYURVEDA_TREATMENTS.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-[14px] text-[#4A4A4A] hover:text-[#184C3A]"
                    >
                      {page.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
                        
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
              <div className={`overflow-hidden transition-all duration-200 ${isMobilePhysioOpen ? `max-h-[600px] overflow-y-auto mt-2 ${scrollbarHide}` : 'max-h-0'}`}>
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100">
                  {PHYSIOTHERAPY_PAGES.map((page) => (
                    <Link key={page.href} onClick={() => setIsMenuOpen(false)} href={page.href} className="text-[14px] text-[#4A4A4A] hover:text-[#184C3A]">{page.label}</Link>
                  ))}
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-[#C9A84C] mt-2">Physiotherapy Specialities</span>
                  {PHYSIOTHERAPY_SPECIALITIES.map((page) => (
                    <Link key={page.href} onClick={() => setIsMenuOpen(false)} href={page.href} className="text-[14px] text-[#4A4A4A] hover:text-[#184C3A]">{page.label}</Link>
                  ))}
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-[#C9A84C] mt-2">Physiotherapy Conditions</span>
                  {PHYSIOTHERAPY_CONDITIONS.map((page) => (
                    <Link key={page.href} onClick={() => setIsMenuOpen(false)} href={page.href} className="text-[14px] text-[#4A4A4A] hover:text-[#184C3A]">{page.label}</Link>
                  ))}
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-[#C9A84C] mt-2">Physiotherapy Treatments</span>
                  {PHYSIOTHERAPY_TREATMENTS.map((page) => (
                    <Link key={page.href} onClick={() => setIsMenuOpen(false)} href={page.href} className="text-[14px] text-[#4A4A4A] hover:text-[#184C3A]">{page.label}</Link>
                  ))}
                </div>
              </div>
            </div>



            {/* Mobile Dermatology Accordion */}
            <div>
              <div className="flex items-center justify-between">
                <Link href="/dermatology-clinic-jvc" onClick={() => setIsMenuOpen(false)} className="text-[16px] font-medium text-[#1A1A1A] hover:text-[#184C3A]">Dermatology</Link>
                <button 
                  onClick={() => setIsMobileDermatologyOpen(!isMobileDermatologyOpen)}
                  className="p-1 text-[#4A4A4A]"
                >
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isMobileDermatologyOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <div className={`overflow-hidden transition-all duration-200 ${isMobileDermatologyOpen ? `max-h-[600px] overflow-y-auto mt-2 ${scrollbarHide}` : 'max-h-0'}`}>
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100">
                  {DERMATOLOGY_PAGES.map((page) => (
                    <Link key={page.href} onClick={() => setIsMenuOpen(false)} href={page.href} className="text-[14px] text-[#4A4A4A] hover:text-[#184C3A]">{page.label}</Link>
                  ))}
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-[#C9A84C] mt-2">Dermatology Conditions</span>
                  {DERMATOLOGY_CONDITIONS.map((page) => (
                    <Link key={page.href} onClick={() => setIsMenuOpen(false)} href={page.href} className="text-[14px] text-[#4A4A4A] hover:text-[#184C3A]">{page.label}</Link>
                  ))}
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-[#C9A84C] mt-2">Dermatology Treatments</span>
                  {DERMATOLOGY_TREATMENTS.map((page) => (
                    <Link key={page.href} onClick={() => setIsMenuOpen(false)} href={page.href} className="text-[14px] text-[#4A4A4A] hover:text-[#184C3A]">{page.label}</Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Wellness Accordion */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[16px] font-medium text-[#1A1A1A]">Wellness</span>
                <button 
                  onClick={() => setIsMobileWellnessOpen(!isMobileWellnessOpen)}
                  className="p-1 text-[#4A4A4A]"
                >
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isMobileWellnessOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <div className={`overflow-hidden transition-all duration-200 ${isMobileWellnessOpen ? 'max-h-64 mt-2' : 'max-h-0'}`}>
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100">
                  {WELLNESS_TREATMENTS.map((page) => (
                    <Link key={page.href} onClick={() => setIsMenuOpen(false)} href={page.href} className="text-[14px] text-[#4A4A4A] hover:text-[#184C3A]">{page.label}</Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Home Healthcare Accordion */}
            <div>
              <div className="flex items-center justify-between">
                <Link href="/physiotherapy-at-home-dubai" onClick={() => setIsMenuOpen(false)} className="text-[16px] font-medium text-[#1A1A1A] hover:text-[#184C3A]">Home Healthcare</Link>
                <button 
                  onClick={() => setIsMobileHomeHealthcareOpen(!isMobileHomeHealthcareOpen)}
                  className="p-1 text-[#4A4A4A]"
                >
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isMobileHomeHealthcareOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <div className={`overflow-hidden transition-all duration-200 ${isMobileHomeHealthcareOpen ? 'max-h-64 mt-2' : 'max-h-0'}`}>
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100">
                  {HOME_HEALTHCARE_PAGES.map((page) => (
                    <Link key={page.href} onClick={() => setIsMenuOpen(false)} href={page.href} className="text-[14px] text-[#4A4A4A] hover:text-[#184C3A]">{page.label}</Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/doctors" onClick={() => setIsMenuOpen(false)} className="text-[16px] font-medium text-[#1A1A1A] hover:text-[#184C3A]">Doctors</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-[16px] font-medium text-[#1A1A1A] hover:text-[#184C3A]">About</Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-[16px] font-medium text-[#1A1A1A] hover:text-[#184C3A]">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Persistent Mobile Bottom Navigation */}
      <div className="xl:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#184C3A] border-t border-[#1F4538] shadow-2xl h-20 flex items-center">
        <a
          href="https://wa.me/971555867466?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20your%20treatments%20and%20book%20a%20consultation."
          className="flex-1 flex flex-col items-center justify-center gap-1 h-full text-white hover:bg-[#4A7C59]/10 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={22} className="fill-current" />
          <span className="text-[12px] font-medium font-sans">WhatsApp</span>
        </a>
        <a
          href="tel:+971555867466"
          className="flex-1 flex flex-col items-center justify-center gap-1 h-full text-[#D4A373] bg-[#FDF8F1] hover:bg-[#EAE3D5] transition-colors"
        >
          <Phone size={22} />
          <span className="text-[12px] font-medium font-sans">Call</span>
        </a>
        <Link 
          href="/book" 
          className="flex-1 flex flex-col items-center justify-center gap-1 h-full text-white bg-[#1F4538] hover:bg-[#184C3A] transition-colors"
        >
          <Calendar size={22} />
          <span className="text-[12px] font-medium font-sans">Book</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
