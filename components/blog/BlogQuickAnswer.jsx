const BlogQuickAnswer = ({ title, content }) => {
  return (
    <div className="bg-[#F5F2ED] py-20 px-6">
      <div className="max-w-[880px] mx-auto">
        <h3 className="text-center text-[11px] font-bold text-[#C9A961] uppercase tracking-[0.2em] mb-6 font-sans">
          THE QUICK ANSWER
        </h3>
        <h2 className="text-center text-[28px] md:text-[32px] font-serif font-medium text-[#1A1A1A] mb-10 leading-tight">
          {title}
        </h2>
        <div className="border-l-[3px] border-[#D4A373] pl-8 md:pl-12">
          <p className="text-[19px]  leading-[1.7] text-[#1A1A1A] font-sans">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogQuickAnswer;
