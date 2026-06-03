import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

const BlogFinalCTA = ({ label, title, content, bookHref, whatsappUrl, footerInfo = [] }) => {
  return (
    <div id="how-to-start" className="mt-40 text-center max-w-[720px] mx-auto pb-24">
      <span className="text-[11px] font-bold text-[#D4A373] uppercase tracking-[0.2em] mb-4 block">{label}</span>
      <h2 className="text-[28px] md:text-[36px] font-serif font-medium text-[#1A1A1A] mb-8 leading-tight">
        {title}
      </h2>
      
      <p className="text-[16px] md:text-[18px] text-[#4A4A4A] mb-12 leading-relaxed">
        {content}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <Link href={bookHref} className="w-full sm:w-auto px-10 py-4 bg-[#D4A373] text-white rounded-lg font-bold hover:bg-[#c69362] transition-all text-[15px] shadow-sm">
          Book a Back Pain Consultation
        </Link>
        <a href={whatsappUrl} className="w-full sm:w-auto px-10 py-4 border border-[#D4A373] text-[#D4A373] rounded-lg font-bold hover:bg-[#F5F2ED] transition-all text-[15px] flex items-center justify-center gap-2">
          <MessageCircle size={18} /> Chat on WhatsApp
        </a>
      </div>

      <div className="text-[13px] text-[#A1A1A1] space-y-1">
        {footerInfo.map((info, i) => (
          <p key={i}>{info}</p>
        ))}
      </div>
    </div>
  );
};

export default BlogFinalCTA;
