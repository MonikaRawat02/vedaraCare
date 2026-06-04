const BlogNewsletter = () => {
  return (
    <div className="mt-32 text-center max-w-[720px] mx-auto">
      <span className="text-[11px] font-bold text-[#D4A373] uppercase tracking-[0.2em] mb-4 block">STAY INFORMED</span>
      <h2 className="text-[28px] md:text-[36px] font-serif font-medium text-[#1A1A1A] mb-4 leading-tight">
        Honest, evidence-based articles on Ayurveda and integrative health in Dubai.
      </h2>
      <p className="text-[16px] md:text-[18px] text-[#6B6B6B] mb-10 leading-relaxed">
        Once a month, we publish our articles like this one — researched, medically reviewed, no marketing. No spam ever.
      </p>
      <form className="max-w-[500px] mx-auto flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="Your email address" 
          className="w-full px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#D4A373] transition-colors text-center"
        />
        <button className="w-full py-4 bg-[#D4A373] text-white font-bold rounded-lg hover:bg-[#c69362] transition-all text-[15px] shadow-sm">
          Subscribe to the Vedara Journal
        </button>
        <p className="text-[13px] text-[#A1A1A1] mt-2">
          Unsubscribe anytime · Read our privacy policy
        </p>
      </form>
    </div>
  );
};

export default BlogNewsletter;
