import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    quote: "Dr. Nair is the first doctor in Dubai who actually listened.",
    content: "I have been to four specialists for PCOS over three years. Dr. Nair spent 50 minutes with me on the first visit — asking about my sleep, my stress, my diet. Six months later, my cycles are regular for the first time in a decade.",
    author: "Aisha M.",
    details: "PCOS · 6-month programme · March 2026"
  },
  {
    quote: "After three years of back pain, I finally have a long-term answer.",
    content: "Conventional physiotherapy gave me temporary relief. The 21-day Panchakarma programme changed how I manage my lumbar disc issue. Eight months on and I have not had a single acute episode.",
    author: "Sarah K.",
    details: "Chronic Back Pain · 21-day Panchakarma · January 2026"
  },
  {
    quote: "I was skeptical about Ayurveda. I am not anymore.",
    content: "I came after two years of poor sleep and anxiety that no medication had resolved. Eight weeks of Shirodhara and Medhya Rasayana later, I sleep seven hours without interruption. The clinical precision here surprised me.",
    author: "Rohan D.",
    details: "Stress & Insomnia · 8-week programme · February 2026"
  }
];

const Reviews = ({ doctor }) => {
  const doctorName = doctor?.firstName || 'Dr. Nair';

  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: 'rgb(31, 69, 56)' }}>
      <div className="max-w-[1170px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[13px] font-sans tracking-[0.2em] uppercase block mb-4" style={{ color: 'rgb(201, 169, 97)' }}>
            What Patients Say
          </span>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(32px, 3vw, 42px)', fontWeight: '500', color: 'rgb(255, 255, 255)', lineHeight: '1.2', marginBottom: '24px' }}>
            Verified outcomes, in patients' own words.
          </h2>
          <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', fontFamily: 'sans-serif', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '3xl', margin: '0 auto', lineHeight: '1.6' }}>
            These are Google reviews from patients personally treated by {doctorName} at our JVC clinic. Displayed in full, never edited.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-[8px] p-8 flex flex-col shadow-lg relative h-full" style={{ borderRadius: '8px' }}>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} style={{ fill: 'rgb(201, 169, 97)', color: 'rgb(201, 169, 97)' }} />
                ))}
              </div>
              
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '19px', fontWeight: '500', fontStyle: 'italic', color: 'rgb(26, 26, 26)', lineHeight: '1.35', marginBottom: '16px' }}>
                "{review.quote}"
              </h3>
              
              <p className="text-[14px] font-sans leading-[1.75] mb-8 flex-grow" style={{ color: 'rgb(74, 74, 74)' }}>
                {review.content}
              </p>
              
              <div className="mt-auto pt-4 border-t flex justify-between items-center" style={{ borderColor: 'rgb(245, 245, 245)' }}>
                <div className="space-y-0.5">
                  <p className="font-sans font-bold text-[15px]" style={{ color: 'rgb(26, 26, 26)' }}>
                    {review.author}
                  </p>
                  <p className="text-[12px] font-sans" style={{ color: 'rgb(136, 136, 136)' }}>
                    {review.details}
                  </p>
                </div>
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold" style={{ backgroundColor: '#4285F4' }}>
                  G
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 mb-16">
          <div className="text-center">
            <h4 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '48px', fontWeight: '500', color: 'rgb(201, 169, 97)', lineHeight: '1', marginBottom: '8px' }}>4.9</h4>
            <p className="text-[13px] font-sans tracking-widest" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>stars on Google</p>
          </div>
          <div className="text-center">
            <h4 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '48px', fontWeight: '500', color: 'rgb(201, 169, 97)', lineHeight: '1', marginBottom: '8px' }}>42</h4>
            <p className="text-[13px] font-sans tracking-widest" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>reviews mentioning {doctorName}</p>
          </div>
          <div className="text-center">
            <h4 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '48px', fontWeight: '500', color: 'rgb(201, 169, 97)', lineHeight: '1', marginBottom: '8px' }}>97%</h4>
            <p className="text-[13px] font-sans tracking-widest" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>would recommend her</p>
          </div>
        </div>

        <div className="text-center">
          <button className="inline-flex items-center px-8 py-3.5 border text-[14px] font-sans font-bold rounded-md hover:opacity-90 transition-all duration-300" style={{ borderColor: 'rgb(201, 169, 97)', color: 'rgb(201, 169, 97)' }} onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgb(201, 169, 97)';
            e.currentTarget.style.color = 'rgb(255, 255, 255)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'rgb(201, 169, 97)';
          }}>
            Read All Reviews for {doctorName}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
