import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import Link from 'next/link';

const TreatmentLocationCustom = ({
  bgColor = 'bg-white',
  label = 'VISIT US',
  title = 'Where IBS treatment happens at Vedara Care.',
  address1 = 'Vedara Care Polyclinic',
  address2 = '',
  addressNote = '',
  clinicHours = [
    { label: 'Sunday - Thursday', time: '9:00 AM - 8:00 PM' },
    { label: 'Friday', time: '2:00 PM - 8:00 PM' },
    { label: 'Saturday', time: '9:00 AM - 6:00 PM' }
  ],
  contactPhone = '+971 55 586 7466',
  contactEmail = 'booking@vedaracare.ae',
  description = 'Our JVC clinic schedules extended consultations for IBS patients — typically 60 minutes for initial, 30 minutes for follow-ups. We allow time to discuss symptoms patients have often stopped mentioning to other clinicians. Walking distance from Circle Mall, easy access from JVC Districts 10, 11, 12, 13, JVT, and Al Barsha South. Female doctors available on request.',
  buttonText = 'Book an IBS Consultation',
  buttonHref = '/book',
  mapEmbed = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9894568193345!2d55.20722358578439!3d25.068346479666594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dd72f3da587%3A0xe7ecca8687a75b72!2sVedara%20Care%20Polyclinic!5e0!3m2!1sen!2sus!4v1780727442216!5m2!1sen!2sus',
  locationMarkers
}) => {
  return (
    <section className={`${bgColor} py-12 md:py-24 px-4 md:px-8`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6">
            <div className="text-[#C9A55B] text-xs font-medium tracking-wider uppercase">
              {label}
            </div>
            <h2 className="text-2xl md:text-4xl font-medium">
              {title}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="size-5 text-[#C9A55B] mt-1 shrink-0" />
                <div>
                  <p className="font-medium">{address1}</p>
                  <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: address2 }} />
                  <p className="text-xs text-[#C9A55B] mt-1">
                    {addressNote}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="size-5 text-[#C9A55B] mt-1 shrink-0" />
                <div>
                  <p className="font-medium">Clinic Hours</p>
                  <div className="text-sm text-muted-foreground space-y-1 mt-1">
                    {clinicHours.map((item, index) => (
                      <p key={index}>{item.label}: {item.time}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="size-5 text-[#C9A55B] mt-1 shrink-0" />
                <div>
                  <p className="font-medium">Contact</p>
                  <p className="text-sm text-muted-foreground">{contactPhone}</p>
                  <p className="text-sm text-muted-foreground">{contactEmail}</p>
                </div>
              </div>
            </div>
            {locationMarkers && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {locationMarkers.map((marker, index) => (
                  <div key={index} className="rounded-lg p-3 text-center" style={{ background: "rgb(240, 234, 224)" }}>
                    <p className="text-xs font-semibold" style={{ color: "rgb(28, 25, 23)", fontFamily: '"DM Sans", sans-serif' }}>
                      {marker.name}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "rgb(184, 150, 90)", fontFamily: '"DM Sans", sans-serif' }}>
                      {marker.distance}
                    </p>
                  </div>
                ))}
              </div>
            )}
            <div className="pt-4">
              <p className="text-xs text-muted-foreground mb-4">
                {description}
              </p>
              <Link
                href={buttonHref}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-white h-9 px-4 py-2 has-[>svg]:px-3 bg-[#1A4D3E] hover:bg-opacity-90"
              >
                {buttonText}
              </Link>
            </div>
          </div>
          <div className="bg-[#F5F3EE] rounded-xl overflow-hidden aspect-square">
            {mapEmbed ? (
              <iframe 
                src={mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location Map"
              ></iframe>
            ) : (
              <div className="h-full w-full flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="size-16 mx-auto mb-4 text-[#C9A55B]" />
                  <p className="text-sm">Interactive map would be embedded here</p>
                  <p className="text-xs mt-2">Google Maps / Location Preview</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentLocationCustom;