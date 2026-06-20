import React from 'react';

const PostnatalComponents = ({
  bgColor = "#FFFFFF",
  cardBg = "#FAF8F5",
  label = "WHAT YOU RECEIVE",
  title = "",
  description = "",
  items = [],
  footerNote = "",
  row1Columns = "lg:grid-cols-4",
  row2Columns = "lg:grid-cols-3",
  row1Count = 4,
  techniquesLabel = "SPECIFIC TECHNIQUES APPLIED:"
}) => {
  const row1 = items.slice(0, row1Count);
  const row2 = items.slice(row1Count);

  return (
    <section className="py-24 px-6" style={{ backgroundColor: bgColor }}>       
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16  mx-auto">
          <p className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase mb-4">
            {label}
          </p>
          <h2 className="text-[clamp(1.75rem,2vw,2.5rem)] font-serif font-normal text-[#1A1A1A] leading-[1.2] mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-[16px] text-[#6B6B6B] font-sans leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="space-y-6">
          {/* Row 1 */}
          <div className={`grid grid-cols-1 md:grid-cols-2 ${row1Columns} gap-6`}>
            {row1.map((item, index) => (
              <ComponentCard key={index} item={item} cardBg={cardBg} techniquesLabel={techniquesLabel} />
            ))}
          </div>

          {/* Row 2 */}
          {row2.length > 0 && (
            <div className={`grid grid-cols-1 md:grid-cols-2 ${row2Columns} gap-6`}>
              {row2.map((item, index) => (
                <ComponentCard key={index} item={item} cardBg={cardBg} techniquesLabel={techniquesLabel} />       
              ))}
            </div>
          )}
        </div>

        {footerNote && (
          <div className="mt-16 text-center max-w-[800px] mx-auto">
            <p className="text-[13px] text-[#6B6B6B] font-sans leading-relaxed ">
              {footerNote}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

const ComponentCard = ({ item, cardBg, techniquesLabel }) => (
  <div
    className="p-8 rounded-xl border-t-1 flex flex-col h-full transition-all duration-300 hover:shadow-lg"
    style={{
      backgroundColor: cardBg,
      borderTopColor: '#C9A961',
      borderLeftWidth: '4px',
      borderRightWidth: '1.5px',
      borderBottomWidth: '1.5px',
      borderLeftColor: '#C9A961',
      borderRightColor: '#C9A961',
      borderBottomColor: '#C9A961'
    }}
  >
    <div className="text-[48px] font-serif text-[#C9A961] mb-2 leading-none opacity-40">{item.number}</div>
    <h3 className="text-[18px] font-sans font-semibold text-[#1A1A1A] mb-4 leading-tight" dangerouslySetInnerHTML={{ __html: item.title }} />
    <p className="text-[14px] text-[#4A4A4A] font-sans leading-relaxed flex-grow" dangerouslySetInnerHTML={{ __html: item.content }} />
    {item.techniques && (
      <div className="mt-6 pt-4 border-t border-[#C9A961]/30">
        <p className="text-[11px] font-sans font-semibold tracking-[0.15em] uppercase text-[#C9A961] mb-2">{techniquesLabel}</p>
        <p className="text-[13px] text-[#4A4A4A] font-sans leading-relaxed">{item.techniques}</p>
      </div>
    )}
  </div>
);

export default PostnatalComponents;
