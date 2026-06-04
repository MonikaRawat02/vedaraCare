import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

const BlogFinalCTA = ({ label, title, content, bookHref, whatsappUrl, footerInfo = [] }) => {
  return (
    <div id="how-to-start" className="bg-[#FAF8F5] py-[96px] px-6 mt-40">
      <div className="max-w-[720px] mx-auto text-center">
        <span className="text-[14px] font-medium text-[#C9A961] uppercase tracking-wider block mb-4 font-sans">
          {label}
        </span>
        <h2 className="text-[28px] md:text-[36px] font-serif  text-[#1A1A1A] mb-6 ">
          {title}
        </h2>
        
        <p className="text-[17px] md:text-[19px] text-[#4A4A4A] mb-8 leading-[1.7] font-sans">
          {content}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Link href={bookHref} className="w-full sm:w-auto px-8 py-4 bg-[#C9A961] text-white rounded-lg font-bold hover:bg-[#C9A961]/90 transition-all text-[16px] shadow-sm">
            Book a Back Pain Consultation
          </Link>
          <a href={whatsappUrl} className="w-full sm:w-auto px-8 py-4 border-2 border-[#C9A961] text-[#C9A961] rounded-lg font-bold hover:bg-[#FAF8F5] transition-all text-[16px] flex items-center justify-center gap-2">
            <MessageCircle size={20} /> Chat on WhatsApp
          </a>
        </div>

        <div className="text-[14px] text-[#6B6B6B] space-y-1 font-sans leading-relaxed">
          {footerInfo.map((info, i) => (
            <p key={i}>{info}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogFinalCTA;
