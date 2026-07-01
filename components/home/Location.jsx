import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const Location = ({
  bgColor = "bg-[#FAF8EF]",
  label = "FIND US IN JVC",
  title = "Right next to Circle Mall. Two minutes from FIVE Jumeirah Village.",
  mapCard = {
    title: "Vedara Care Polyclinic",
    subtitle: "JVC, Dubai",
    linkText: "Get Directions"
  },
  address = {
    label: "Address",
    street: "",
    area: "Jumeirah Village Circle",
    city: "Dubai, UAE"
  },
  contact = {
    label: "Contact",
    phone: "+971 4 XXX XXXX",
    whatsapp: "+971 5X XXX XXXX",
    email: "booking@vedaracare.ae"
  },
  hours = {
    label: "Hours",
    weekdays: "Mon - Sat: 9 AM to 9 PM",
    sunday: "Sun: 10 AM to 7 PM"
  },
  parkingText = "Free covered parking available for patients",
  tags = ["5 min from JSS School", "3 min from FIVE JVC", "Next to Circle Mall"],
  buttonText = "Book Your Visit"
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Map Content */}
<div className="relative aspect-square bg-[#F6F1EA] rounded-[2rem] overflow-hidden shadow-sm">
  
  {/* Google Map */}
  <iframe
    className="absolute inset-0 w-full h-full"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9894568193345!2d55.20722358578439!3d25.068346479666594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dd72f3da587%3A0xe7ecca8687a75b72!2sVedara%20Care%20Polyclinic!5e0!3m2!1sen!2sus!4v1780727442216!5m2!1sen!2sus"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    title="Vedara Care JVC Dubai Location"
  />

  {/* Location Card Overlay */}
  <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[280px] space-y-3 z-10">
    <div className="space-y-1">
      <h4 className="text-[16px] font-serif font-bold text-[#1A1A1A]">
        {mapCard.title}
      </h4>
      <p className="text-[13px] text-[#6B6B6B] font-sans">
        {mapCard.subtitle}
      </p>
    </div>

    <button className="text-[#C9A961] font-sans font-bold text-[14px] flex items-center gap-2 hover:underline">
      <Navigation size={14} />
      {mapCard.linkText}
    </button>
  </div>
</div>
          {/* Contact Content */}
          <div className="lg:pl-12 space-y-10">
            <div className="space-y-4">
              <span className="text-[13px] font-sans tracking-[0.1em] text-[#C9A961] uppercase block">
                {label}
              </span>
              <h2 className="text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2]">
                {title}
              </h2>
            </div>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm h-fit">
                  <MapPin size={20} className="text-[#184C3A]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[16px] font-sans font-bold text-[#1A1A1A]">{address.label}</h4>
                  <p className="text-[15px] text-[#6B6B6B] font-sans leading-relaxed">
                    {address.street}<br />
                    {address.area}<br />
                    {address.city}
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm h-fit">
                  <Phone size={20} className="text-[#184C3A]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[16px] font-sans font-bold text-[#1A1A1A]">{contact.label}</h4>
                  <p className="text-[15px] text-[#6B6B6B] font-sans leading-relaxed">
                    Phone: {contact.phone}<br />
                    WhatsApp: {contact.whatsapp}<br />
                    Email: {contact.email}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm h-fit">
                  <Clock size={20} className="text-[#184C3A]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[16px] font-sans font-bold text-[#1A1A1A]">{hours.label}</h4>
                  <p className="text-[15px] text-[#6B6B6B] font-sans leading-relaxed">
                    {hours.weekdays}<br />
                    {hours.sunday}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <p className="text-[14px] text-[#6B6B6B] font-sans">
                {parkingText}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-white rounded-full text-[13px] text-[#6B6B6B] font-sans shadow-sm border border-gray-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961]" />
                    {tag}
                  </span>
                ))}
              </div>

              <button className="px-10 py-4 bg-[#184C3A] text-white rounded-lg font-sans font-bold text-[16px] hover:bg-[#123a2c] transition-all shadow-md">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
