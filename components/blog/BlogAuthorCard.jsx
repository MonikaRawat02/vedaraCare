import Link from 'next/link';
import { User } from 'lucide-react';

const BlogAuthorCard = ({ name, credentials, bio, readMoreHref, bookHref }) => {
  return (
    <div className="w-full bg-[#FAF8F5] py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center md:items-start">
          {/* Avatar - 200px as per Figma */}
          <div className="w-[200px] h-[200px] bg-[#D4A373] rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden shadow-sm">
            <User size={100} strokeWidth={1} />
          </div>

          <div className="flex-1">
            <h3 className="text-[28px] font-serif font-medium text-[#1A1A1A] mb-2">{name}</h3>
            <p className="text-[#C9A961] text-[14px] font-sans font-medium mb-4">
              {credentials}
            </p>
            
            <p className="text-[#4A4A4A] text-[17px] leading-[1.6] font-sans mb-8 max-w-[800px]">
              {bio}
            </p>

            <div className="flex flex-wrap gap-x-10 gap-y-4 text-[14px] font-sans font-bold">
              <Link href={readMoreHref} className="text-[#D4A373] hover:text-[#B88655] transition-colors border-b border-[#D4A373] pb-0.5">
                Read more articles by {name.includes('Dr.') ? `${name.split(' ')[0]} ${name.split(' ').pop()}` : name.split(' ')[0]}
              </Link>
              <Link href={bookHref} className="text-[#D4A373] hover:text-[#B88655] transition-colors border-b border-[#D4A373] pb-0.5">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAuthorCard;
