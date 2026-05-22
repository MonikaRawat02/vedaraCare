import React from 'react';

const DoctorLanguagesSchedule = ({ doctor }) => {
  const schedule = [
    { day: 'Monday', time: '10:00 AM - 7:00 PM', off: false },
    { day: 'Tuesday', time: '10:00 AM - 7:00 PM', off: false },
    { day: 'Wednesday', time: 'Off', off: true },
    { day: 'Thursday', time: '10:00 AM - 7:00 PM', off: false },
    { day: 'Friday', time: '10:00 AM - 1:00 PM, 4:00 PM - 8:00 PM', off: false },
    { day: 'Saturday', time: '10:00 AM - 6:00 PM', off: false },
    { day: 'Sunday', time: '12:00 PM - 5:00 PM', off: false }
  ];

  const languages = ['English', 'Hindi', 'Malayalam', 'Arabic (conversational)'];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Languages */}
          <div>
            <span className="text-[13px] font-semibold tracking-[0.14em] uppercase block mb-4" style={{ color: 'rgb(201, 169, 97)' }}>
              ACCESSIBLE CARE
            </span>
            <h2 className="mb-6" style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '28px', fontWeight: '500', color: 'rgb(26, 26, 26)' }}>
              {doctor.firstName} consults in four languages.
            </h2>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {languages.map((lang, index) => (
                <span
                  key={index}
                  className="px-5 py-2.5 rounded-[8px] text-[15px]"
                  style={{ backgroundColor: 'rgb(240, 233, 221)', color: 'rgb(26, 26, 26)' }}
                >
                  {lang}
                </span>
              ))}
            </div>
            
            <p className="text-[15px] leading-[1.78]" style={{ color: 'rgb(107, 107, 107)' }}>
              Most JVC patients consult in English. South Asian expats often switch to Hindi or Malayalam for comfort. Translation support is available for other languages — please mention when booking.
            </p>
          </div>

          {/* Schedule */}
          <div>
            <p className="text-[13px] font-semibold tracking-[0.14em] uppercase mb-4" style={{ color: 'rgb(201, 169, 97)' }}>
              BOOKING WINDOWS
            </p>
            <h3 className="mb-6" style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '28px', fontWeight: '500', color: 'rgb(26, 26, 26)' }}>
              {doctor.firstName}'s clinic schedule.
            </h3>
            
            <div className="rounded-[8px] overflow-hidden mb-5" style={{ border: '1px solid rgb(229, 223, 211)' }}>
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-5 py-3"
                  style={{
                    borderTop: index === 0 ? 'none' : '1px solid rgb(229, 223, 211)',
                    backgroundColor: item.off ? 'rgb(240, 233, 221)' : 'rgb(255, 255, 255)'
                  }}
                >
                  <span className="text-[14px] font-medium" style={{ color: item.off ? 'rgb(107, 107, 107)' : 'rgb(26, 26, 26)' }}>
                    {item.day}
                  </span>
                  <span className="text-[14px]" style={{ color: item.off ? 'rgb(107, 107, 107)' : 'rgb(31, 69, 56)', fontStyle: item.off ? 'italic' : 'normal' }}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
            
            <p className="text-[13px] mb-5" style={{ color: 'rgb(107, 107, 107)' }}>
              Same-day slots are typically available with 2-hour notice via WhatsApp.
            </p>

            <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-[14px] font-medium transition-opacity hover:opacity-90 active:scale-[0.98]" style={{ background: 'rgb(31, 69, 56)', color: 'rgb(255, 255, 255)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Check Live Availability
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorLanguagesSchedule;
