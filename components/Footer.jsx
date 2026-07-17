import Link from 'next/link';
import { Phone, Mail, Clock, MapPin, Stethoscope, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-[#184C3A] text-[#F8F9FA] pt-20 pb-8">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#D4A373] rounded-full"></div>
              <h3 className="text-2xl font-serif font-bold text-white leading-none tracking-tight">Vedara Care</h3>
            </Link>
            <p className="text-[#F8F9FA]/80 text-sm leading-relaxed max-w-[280px]">
              DHA-licensed holistic healthcare in Jumeirah Village Circle, Dubai.
            </p>
            <div className="space-y-4 text-sm text-[#F8F9FA]/80">
              <p>Al Barsha South Fourth, Binghatti Azure,<br />
                Jumeirah Village Circle Dubai, UAE
              </p>
              <div className="space-y-2">
                <a href="tel:+971 55 586 7466" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone size={14} />
                  <span>+971 55 586 7466</span>
                </a>
                <a href="mailto:booking@vedaracare.ae" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={14} />
                  <span>booking@vedaracare.ae</span>
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <button 
              onClick={() => toggleSection('services')}
              className="w-full flex items-center justify-between text-left mb-6 md:cursor-default"
            >
              <h4 className="text-lg font-bold text-white">Services</h4>
              <ChevronDown 
                size={18} 
                className={`md:hidden transition-transform duration-300 ${openSection === 'services' ? 'rotate-180' : ''}`} 
              />
            </button>
            <ul className={`space-y-4 text-[#F8F9FA]/80 text-sm ${openSection === 'services' ? 'block' : 'hidden md:block'}`}>
              <li><Link href="/ayurveda-clinic-jvc" className="hover:text-white transition-colors">Ayurveda in JVC</Link></li>
              <li><Link href="/physiotherapy-jvc" className="hover:text-white transition-colors">Physiotherapy in JVC</Link></li>
              <li><Link href="/dermatology-clinic-jvc" className="hover:text-white transition-colors">Dermatology in JVC</Link></li>
              <li><Link href="/home-healthcare-jvc" className="hover:text-white transition-colors">Home Healthcare in Dubai</Link></li>
              <li><Link href="/wellness-jvc" className="hover:text-white transition-colors">Wellness Treatments</Link></li>
            </ul>
          </div>

          {/* Popular Treatments */}
          <div>
            <button 
              onClick={() => toggleSection('treatments')}
              className="w-full flex items-center justify-between text-left mb-6 md:cursor-default"
            >
              <h4 className="text-lg font-bold text-white">Popular Treatments</h4>
              <ChevronDown 
                size={18} 
                className={`md:hidden transition-transform duration-300 ${openSection === 'treatments' ? 'rotate-180' : ''}`} 
              />
            </button>
            <ul className={`space-y-4 text-[#F8F9FA]/80 text-sm ${openSection === 'treatments' ? 'block' : 'hidden md:block'}`}>
              <li><Link href="/treatments/manual-therapy-dubai/" className="hover:text-white transition-colors">Manual Therapy</Link></li>
              <li><Link href="/treatments/cupping-therapy-dubai/" className="hover:text-white transition-colors">Cupping Therapy</Link></li>
              <li><Link href="/treatments/panchakarma-dubai/" className="hover:text-white transition-colors">Panchakarma in Dubai</Link></li>
              <li><Link href="/treatments/abhyanga-dubai/" className="hover:text-white transition-colors">Abhyanga Massage</Link></li>
              <li><Link href="/treatments/shirodhara-dubai/" className="hover:text-white transition-colors">Shirodhara</Link></li>
              <li><Link href="/treatments/skin-rejuvenation-jvc/" className="hover:text-white transition-colors">Skin Rejuvenation</Link></li>
              <li><Link href="/conditions/psoriasis-treatment-dubai" className="hover:text-white transition-colors">Psoriasis Treatment</Link></li>
              <li><Link href="/services/physiotherapy" className="hover:text-white transition-colors">Sports Injury Rehab</Link></li>
              <li><Link href="/physiotherapy/post-surgery-rehab-dubai/" className="hover:text-white transition-colors">Post-Surgery Rehab</Link></li>
              <li><Link href="/services/dermatology" className="hover:text-white transition-colors">PRP Hair</Link></li>
              <li><Link href="/services/home-healthcare" className="hover:text-white transition-colors">IV Drip at Home</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <button 
              onClick={() => toggleSection('company')}
              className="w-full flex items-center justify-between text-left mb-6 md:cursor-default"
            >
              <h4 className="text-lg font-bold text-white">Company</h4>
              <ChevronDown 
                size={18} 
                className={`md:hidden transition-transform duration-300 ${openSection === 'company' ? 'rotate-180' : ''}`} 
              />
            </button>
            <ul className={`space-y-4 text-[#F8F9FA]/80 text-sm ${openSection === 'company' ? 'block' : 'hidden md:block'}`}>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/doctors" className="hover:text-white transition-colors">Our Doctors</Link></li>
              <li><Link href="/insurance" className="hover:text-white transition-colors">Insurance</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/book" className="hover:text-white transition-colors">Book Appointment</Link></li>
            </ul>
          </div>
        </div>

        {/* Insurance Partners Section */}
        <div className="border-t border-white/20 pt-10 pb-12">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[13px] text-[#F8F9FA]/60 font-medium">
            <span>Daman</span>
            <span>AXA</span>
            <span>Allianz</span>
            <span>Oman Insurance</span>
            <span>Now Health</span>
            <span>Bupa</span>
            <span>MetLife</span>
            <span className="text-white/80">DHA License XXXXX</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#F8F9FA]/60">
          <p>© {currentYear} Vedara Care Polyclinic. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/patient-rights" className="hover:text-white transition-colors">Patient Rights</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
