import React from 'react';
import { MessageCircle, MapPin, Clock, Phone, Mail, ArrowRight } from 'lucide-react';

// 6. Home Physiotherapy
export const HomePhysiotherapy = ({ data }) => {
  return (
    <section className="bg-[#FAFAFA] py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase block mb-4">
            {data.label}
          </span>
          <h2 className="text-[32px] md:text-[42px] font-serif font-normal text-[#1A1A1A] leading-[1.2]">
            {data.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start">
          <div className="space-y-5">
            {data.content.map((paragraph, idx) => (
              <p key={idx} className="text-[17px] font-sans leading-[1.75] text-[#717182]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="bg-[#F8F6F0] border-4 border-[#C4A962] rounded-lg px-6 py-5 h-fit">
            <span className="text-[11px] font-sans font-semibold tracking-[0.15em] text-[#C4A962] uppercase block mb-4">
              {data.sidebar.label}
            </span>
            
            <div className="space-y-3">
              <div>
                <h4 className="text-[13px] font-sans font-semibold text-[#1A1A1A] mb-1">Coverage:</h4>
                <p className="text-[12px] font-sans text-[#6B6B6B] leading-relaxed">{data.sidebar.coverage}</p>
              </div>

              <div>
                <h4 className="text-[13px] font-sans font-semibold text-[#1A1A1A] mb-1">Typical Use Cases:</h4>
                <ul className="space-y-0.5">
                  {data.sidebar.useCases.map((useCase, idx) => (
                    <li key={idx} className="text-[12px] font-sans text-[#6B6B6B] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#C4A962] rounded-full mt-1 shrink-0" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[13px] font-sans font-semibold text-[#1A1A1A] mb-1">Session Duration:</h4>
                <p className="text-[12px] font-sans text-[#6B6B6B]">{data.sidebar.duration}</p>
              </div>

              <div>
                <h4 className="text-[13px] font-sans font-semibold text-[#1A1A1A] mb-1">Pricing:</h4>
                <p className="text-[12px] font-sans text-[#6B6B6B]">{data.sidebar.pricing}</p>
              </div>

              <div>
                <h4 className="text-[13px] font-sans font-semibold text-[#1A1A1A] mb-1">Booking:</h4>
                <p className="text-[12px] font-sans text-[#6B6B6B]">{data.sidebar.booking}</p>
              </div>

              <button className="w-full bg-[#C4A962] text-white py-2.5 rounded-md font-sans font-semibold text-[13px] hover:bg-[#b89a56] transition-colors mt-2">
                {data.sidebar.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 7. Transparent Pricing
export const TransparentPricing = ({ data }) => {
  return (
    <section className="bg-[#FAF8F5] py-24 px-6">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase block mb-4">
            {data.label}
          </span>
          <h2 className="text-[32px] md:text-[42px] font-serif font-normal text-[#1A1A1A] leading-[1.2] mb-6">
            {data.title}
          </h2>
          <p className="text-[16px] font-sans text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {data.sections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-[20px] font-serif text-[#1A1A1A] mb-6">{section.title}</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-3 text-[13px] font-sans font-bold text-[#1A1A1A] uppercase tracking-wider">Service</th>
                      <th className="text-right py-3 text-[13px] font-sans font-bold text-[#1A1A1A] uppercase tracking-wider">Price</th>
                      {section.hasDuration && (
                        <th className="text-right py-3 text-[13px] font-sans font-bold text-[#1A1A1A] uppercase tracking-wider pl-8">Duration</th>
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {section.items.map((item, itemIdx) => (
                      <tr key={itemIdx}>
                        <td className="py-4 text-[14px] font-sans text-[#4A4A4A]">{item.name}</td>
                        <td className="py-4 text-right text-[14px] font-sans font-bold text-[#1A1A1A]">{item.price}</td>
                        {section.hasDuration && (
                          <td className="py-4 text-right text-[14px] font-sans text-[#6B6B6B] pl-8 whitespace-nowrap">{item.duration}</td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-[13px] font-sans text-[#6B6B6B] text-center leading-relaxed max-w-3xl mx-auto">
          {data.footer}
        </p>
      </div>
    </section>
  );
};

// 9. The Team
export const PostSurgeryTeam = ({ data }) => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase block mb-4">
            {data.label}
          </span>
          <h2 className="text-[32px] md:text-[42px] font-serif font-normal text-[#1A1A1A] leading-[1.2]">
            {data.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.members.map((member, idx) => (
            <div key={idx} className="bg-[#FAF8F5] rounded-xl overflow-hidden shadow-sm group hover:shadow-md transition-shadow">
              <div className="aspect-[4/5] bg-gradient-to-b from-[#D4B57E] to-[#B89A56] relative">
                {/* Image Placeholder or actual image if provided */}
                <div className="absolute inset-0 flex items-center justify-center text-white/20">
                  <span className="text-sm font-sans uppercase tracking-widest">Image Placeholder</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-[19px] font-serif font-bold text-[#1A1A1A] mb-1">{member.name}</h3>
                <p className="text-[13px] font-sans text-[#C9A961] mb-4">{member.credentials}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-[11px] font-sans font-medium bg-white px-2 py-1 rounded border border-gray-100 text-[#6B6B6B]">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-[14px] font-sans text-[#6B6B6B] leading-relaxed mb-6">
                  {member.description}
                </p>
                <a href={member.link} className="inline-flex items-center gap-1 text-[13px] font-sans font-bold text-[#C9A961] hover:underline">
                  View profile <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 10. Insurance Coverage
export const InsuranceCoverage = ({ data }) => {
  return (
    <section className="bg-[#FAF8F5] py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase block mb-4">
            {data.label}
          </span>
          <h2 className="text-[32px] md:text-[42px] font-serif font-normal text-[#1A1A1A] leading-[1.2]">
            {data.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-20">
          <div className="space-y-8">
            {data.content.map((item, idx) => (
              <div key={idx}>
                {item.title ? (
                  <p className="text-[17px] font-sans leading-[1.8] text-[#4A4A4A]">
                    <strong className="text-[#1A1A1A]">{item.title}</strong> {item.text}
                  </p>
                ) : (
                  <p className="text-[17px] font-sans leading-[1.8] text-[#4A4A4A]">
                    {item.text}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="bg-white border-[3px] border-[#C9A961] rounded-xl p-8 shadow-sm h-fit">
            <span className="text-[12px] font-sans font-semibold tracking-[0.1em] text-[#C9A961] uppercase block mb-8 text-center">
              {data.sidebar.label}
            </span>
            
            <div className="grid grid-cols-2 gap-3 mb-8">
              {data.sidebar.insurers.map((insurer, idx) => (
                <div key={idx} className="bg-[#FAF8F5] py-3 px-4 rounded text-center text-[13px] font-sans font-bold text-[#4A4A4A] flex items-center justify-center border border-gray-50">
                  {insurer}
                </div>
              ))}
            </div>

            <p className="text-[13px] font-sans text-[#6B6B6B] leading-relaxed mb-8">
              {data.sidebar.text}
            </p>

            <button className="w-full bg-[#25D366] text-white py-4 rounded-md font-sans font-bold text-[15px] hover:bg-[#20bd5b] transition-colors flex items-center justify-center gap-2">
              <MessageCircle size={20} fill="currentColor" />
              {data.sidebar.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// 11. Where We Work
export const WhereWeWork = ({ data }) => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-[#FAF8F5] p-10 rounded-xl shadow-sm space-y-8">
            <div>
              <span className="text-[12px] font-sans font-semibold tracking-[0.1em] text-[#C9A961] uppercase block mb-4">
                {data.label}
              </span>
              <h2 className="text-[32px] md:text-[42px] font-serif font-normal text-[#1A1A1A] leading-[1.2] mb-8">
                {data.title}
              </h2>
              <p className="text-[15px] font-sans leading-[1.7] text-[#6B6B6B]">
                {data.description}
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex gap-4">
                <MapPin className="text-[#C9A961] shrink-0" size={20} />
                <div>
                  <h4 className="text-[15px] font-sans font-bold text-[#1A1A1A] mb-1">Address</h4>
                  <p className="text-[14px] font-sans text-[#6B6B6B] leading-relaxed" dangerouslySetInnerHTML={{ __html: data.details.address }} />
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-[#C9A961] shrink-0" size={20} />
                <div>
                  <h4 className="text-[15px] font-sans font-bold text-[#1A1A1A] mb-1">Hours</h4>
                  <p className="text-[14px] font-sans text-[#6B6B6B]">{data.details.hours}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-[#C9A961] shrink-0" size={20} />
                <div>
                  <h4 className="text-[15px] font-sans font-bold text-[#1A1A1A] mb-1">Contact</h4>
                  <div className="space-y-0.5">
                    <p className="text-[14px] font-sans text-[#6B6B6B]">{data.details.phone}</p>
                    <p className="text-[14px] font-sans text-[#6B6B6B]">{data.details.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[14px] font-sans text-[#6B6B6B] leading-relaxed pt-4 border-t border-gray-200/50">
              {data.footer}
            </p>

            <div className="flex flex-col gap-3 pt-4">
              <button className="w-full bg-[#1A1A1A] text-white py-4 rounded-md font-sans font-bold text-[15px] hover:bg-black transition-colors">
                {data.buttons.primary}
              </button>
              <button className="w-full bg-[#C9A961] text-white py-4 rounded-md font-sans font-bold text-[15px] hover:bg-[#b89a56] transition-colors">
                {data.buttons.secondary}
              </button>
            </div>
          </div>

          <div className="aspect-square lg:aspect-auto lg:h-[800px] bg-gradient-to-b from-[#D4B57E] to-[#B89A56] rounded-xl relative overflow-hidden shadow-sm">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white/40 gap-4">
              <MapPin size={48} strokeWidth={1.5} />
              <div className="text-center">
                <h3 className="text-[24px] font-serif font-medium text-white mb-1">Map Placeholder</h3>
                <p className="text-[14px] font-sans uppercase tracking-widest text-white/60">JVC, Dubai Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
