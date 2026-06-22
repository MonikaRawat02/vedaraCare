import Head from 'next/head';
import AyurvedaHero from '../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../components/ayurveda/AyurvedaIntro';
import { SciaticaTreatment } from '../components/ayurveda/SciaticaSections';
import SportsInjuryTypes from '../components/ayurveda/SportsInjuryTypes';
import PhysiotherapySpecializations from '../components/ayurveda/PhysiotherapySpecializations';
import ManualTherapySession from '../components/ayurveda/ManualTherapySession';
import PhysiotherapyTeam from '../components/ayurveda/PhysiotherapyTeam';
import TreatmentReviews from '../components/ayurveda/TreatmentReviews';
import FAQ from '../components/home/FAQ';
import TreatmentLocation from '../components/ayurveda/TreatmentLocation';
import FinalCTA from '../components/ayurveda/FinalCTA';
import ServicePillars from '../components/ayurveda/ServicePillars';
import RelatedPages from '../components/ayurveda/RelatedPages';
import {
  dermatologyHero,
  dermatologyIntro,
  dermatologySciaticaSection1,
  dermatologyTypes,
  dermatologyAestheticTypes,
  dermatologyAssessment,
  dermatologyReviews,
  dermatologyTeam,
  dermatologyPricing,
  dermatologyFaqs,
  dermatologyLocation,
  dermatologyCTA,
  servicePillarsData,
  dermatologyRelatedPages,
  dermatologyConsultation
} from '../data/dermatologyData';

// import { servicePillarsData } from '../data/servicePillarsData';

const DermatologyClinicJVC = () => {
  const currentUrl = "https://vedaracare.ae/dermatology-clinic-jvc/";
  const publishedDate = "2026-06-01T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": `${currentUrl}#dermatology`,
      "name": "Vedara Care Dermatology Clinic",
      "alternateName": ["Vedara Dermatologist JVC", "Vedara Dermatology Dubai"],
      "url": currentUrl,
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "Specialist dermatology clinic at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. DHA-licensed consultant dermatologists delivering medical dermatology (acne, melasma, eczema, psoriasis, rosacea, skin cancer screening, hyperhidrosis, hair and scalp conditions) and aesthetic dermatology (botulinum toxin, dermal fillers, chemical peels, laser treatments, hair restoration, skin rejuvenation). Expertise across all Fitzpatrick skin types (I-VI). Multiple languages including Arabic, English, Hindi, Urdu. Premium clinical environment with premium FDA/EMA-approved products including Botox, Restylane, Juvederm, Belotero.",
      "telephone": "+971 4 567 8900",
      "priceRange": "AED 400 - AED 20,000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Building 23, District 12",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.068346",
        "longitude": "55.2072235"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "21:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "Place", "name": "Jumeirah Village Triangle"},
        {"@type": "Place", "name": "Al Barsha South"},
        {"@type": "Place", "name": "Dubai Sports City"},
        {"@type": "Place", "name": "Motor City"},
        {"@type": "Place", "name": "Arjan"},
        {"@type": "Place", "name": "Dubai Hills Estate"},
        {"@type": "Place", "name": "Dubai Marina"},
        {"@type": "Place", "name": "Downtown Dubai"},
        {"@type": "Place", "name": "Palm Jumeirah"},
        {"@type": "Place", "name": "Mirdif"}
      ],
      "medicalSpecialty": [
        "Dermatology",
        "Medical Dermatology",
        "Cosmetic Dermatology",
        "Aesthetic Medicine",
        "Pediatric Dermatology"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Dermatology Consultation"},
        {"@type": "MedicalProcedure", "name": "Acne Treatment"},
        {"@type": "MedicalProcedure", "name": "Melasma Treatment"},
        {"@type": "MedicalProcedure", "name": "Eczema Treatment"},
        {"@type": "MedicalProcedure", "name": "Psoriasis Treatment"},
        {"@type": "MedicalProcedure", "name": "Skin Cancer Screening"},
        {"@type": "MedicalProcedure", "name": "Mole Removal"},
        {"@type": "MedicalProcedure", "name": "Skin Biopsy"},
        {"@type": "MedicalProcedure", "name": "Dermoscopy"},
        {"@type": "MedicalProcedure", "name": "Hyperhidrosis Treatment"},
        {"@type": "MedicalProcedure", "name": "Botulinum Toxin Injection"},
        {"@type": "MedicalProcedure", "name": "Dermal Filler Injection"},
        {"@type": "MedicalProcedure", "name": "Chemical Peel"},
        {"@type": "MedicalProcedure", "name": "Laser Hair Removal"},
        {"@type": "MedicalProcedure", "name": "Pigmentation Laser Treatment"},
        {"@type": "MedicalProcedure", "name": "Skin Resurfacing Laser"},
        {"@type": "MedicalProcedure", "name": "PRP Hair Restoration"},
        {"@type": "MedicalProcedure", "name": "Mesotherapy"}
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Dubai Health Authority"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    [
      {
        "@context": "https://schema.org",
        "@type": "MedicalCondition",
        "name": "Acne Vulgaris",
        "alternateName": ["Acne", "Adult Acne"],
        "code": {"@type": "MedicalCode", "code": "L70", "codingSystem": "ICD-10"},
        "possibleTreatment": {"@type": "MedicalProcedure", "name": "Acne Treatment"}
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalCondition",
        "name": "Melasma",
        "alternateName": ["Chloasma", "Pregnancy Mask"],
        "code": {"@type": "MedicalCode", "code": "L81.1", "codingSystem": "ICD-10"},
        "possibleTreatment": {"@type": "MedicalProcedure", "name": "Melasma Treatment"}
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalCondition",
        "name": "Atopic Dermatitis",
        "alternateName": ["Eczema"],
        "code": {"@type": "MedicalCode", "code": "L20", "codingSystem": "ICD-10"},
        "possibleTreatment": {"@type": "MedicalProcedure", "name": "Eczema Treatment"}
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalCondition",
        "name": "Psoriasis",
        "code": {"@type": "MedicalCode", "code": "L40", "codingSystem": "ICD-10"},
        "possibleTreatment": {"@type": "MedicalProcedure", "name": "Psoriasis Treatment"}
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalCondition",
        "name": "Rosacea",
        "code": {"@type": "MedicalCode", "code": "L71", "codingSystem": "ICD-10"},
        "possibleTreatment": {"@type": "MedicalProcedure", "name": "Rosacea Treatment"}
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalCondition",
        "name": "Hyperhidrosis",
        "code": {"@type": "MedicalCode", "code": "R61", "codingSystem": "ICD-10"},
        "possibleTreatment": {"@type": "MedicalProcedure", "name": "Hyperhidrosis Treatment"}
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalCondition",
        "name": "Androgenetic Alopecia",
        "alternateName": ["Pattern Hair Loss"],
        "code": {"@type": "MedicalCode", "code": "L64", "codingSystem": "ICD-10"},
        "possibleTreatment": {"@type": "MedicalProcedure", "name": "Hair Restoration"}
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalCondition",
        "name": "Skin Cancer",
        "possibleTreatment": {"@type": "MedicalProcedure", "name": "Skin Cancer Screening"}
      }
    ],
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Dermatology Services in JVC Dubai",
      "provider": {"@id": `${currentUrl}#dermatology`},
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "serviceType": "Medical and Aesthetic Dermatology",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dermatology Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Initial Dermatology Consultation",
            "priceCurrency": "AED",
            "price": "550",
            "description": "45–60 minute comprehensive consultation with consultant dermatologist"
          },
          {
            "@type": "Offer",
            "name": "Skin Cancer Screening with Dermoscopy",
            "priceCurrency": "AED",
            "price": "650",
            "description": "Full-body skin examination with dermoscopy and photographic documentation"
          },
          {
            "@type": "Offer",
            "name": "Botulinum Toxin Treatment",
            "priceCurrency": "AED",
            "price": "1200",
            "description": "Per treatment area, premium FDA/EMA-approved products"
          },
          {
            "@type": "Offer",
            "name": "Dermal Filler Treatment",
            "priceCurrency": "AED",
            "price": "2500",
            "description": "Per syringe, premium hyaluronic acid products"
          },
          {
            "@type": "Offer",
            "name": "Laser Hair Removal",
            "priceCurrency": "AED",
            "price": "350",
            "description": "Per session, area-specific pricing, multiple sessions package available"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Dermatology Clinic in JVC", "item": currentUrl}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do I need a referral to see a dermatologist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No — patients can self-refer directly to our dermatology clinic. Some insurance plans require GP referral for specialist consultation; check with your insurance about specific requirements. Most patients book directly without referral."
          }
        },
        {
          "@type": "Question",
          "name": "Do you have female dermatologists?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — our team includes both female and male consultant dermatologists. Patients can request a specific dermatologist or gender preference at booking."
          }
        },
        ...dermatologyFaqs.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalScholarlyArticle",
      "headline": "Dermatology Clinic in JVC — Complete Service Guide",
      "image": "https://vedaracare.ae/images/dermatology-clinic-jvc-hero.webp",
      "datePublished": publishedDate,
      "dateModified": modifiedDate,
      "author": {
        "@type": "Physician",
        "name": "Dr. Amina Hassan, MD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic"
      },
      "about": [
        {"@type": "MedicalSpecialty", "name": "Dermatology"},
        {"@type": "MedicalSpecialty", "name": "Cosmetic Dermatology"}
      ],
      "mainEntityOfPage": currentUrl
    },
    ...dermatologyTeam.members.map(member => ({
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": member.name,
      "url": member.link,
      "image": member.image,
      "gender": member.name.toLowerCase().includes("dr. amina") || member.name.toLowerCase().includes("dr. zainab") ? "Female" : "Male",
      "medicalSpecialty": ["Dermatology", "Medical Dermatology", "Cosmetic Dermatology"],
      "hasCredential": ["MD (Doctor of Medicine)", "DHA-Licensed Consultant Dermatologist"],
      "worksFor": {"@id": "https://vedaracare.ae/#organization"}
    })),
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://vedaracare.ae/#organization",
      "name": "Vedara Care Polyclinic"
    }
  ];

  return (
    <>
      <Head>
        <title>Dermatologist in JVC | Medical & Aesthetic | Vedara Clinic Dubai</title>
        <meta name="description" content="Specialist dermatology clinic in JVC, Dubai. Consultant dermatologists, DHA-licensed. Medical dermatology (acne, melasma, eczema, skin cancer) and aesthetic (botulinum toxin, fillers, lasers). All skin types. Multiple languages. Walking distance from Circle Mall." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hreflang="en-AE" href={currentUrl} />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/dermatology-clinic-jvc/" />
        <link rel="alternate" hreflang="x-default" href={currentUrl} />
        <meta property="og:title" content="Dermatologist in JVC — Medical & Aesthetic Dermatology | Vedara Clinic Dubai" />
        <meta property="og:description" content="Specialist dermatology clinic at Jumeirah Village Circle, Dubai. Consultant dermatologists with international training delivering medical dermatology (acne, melasma, eczema, psoriasis, skin cancer screening) and aesthetic dermatology (botulinum toxin, dermal fillers, lasers, chemical peels, hair restoration). Expertise across all Fitzpatrick skin types. Multiple languages including Arabic, English, Hindi, Urdu." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/dermatology-clinic-jvc-hero.webp" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <AyurvedaHero 
        {...dermatologyHero}
        patientsTreated={dermatologyHero.patientsTreated}
      />
      
      <AyurvedaIntro 
        {...dermatologyIntro}
      />
      
     
      <SciaticaTreatment
        data={dermatologySciaticaSection1}
        showBorderLeft={false}
        rightContentStyle="keyAnatomy"
        bgColor="bg-[#F5F1E8]"
        showStepNumbers={false}
      />

      <SportsInjuryTypes 
        {...dermatologyTypes}
        bgColor="rgb(255, 255, 255)"
        description={dermatologyTypes.description}
        variant="condition"
        lgColumns={4}
        image={dermatologyTypes.image}
        alt={dermatologyTypes.alt}
      />

      <SportsInjuryTypes 
        {...dermatologyAestheticTypes}
        bgColor="rgb(248, 244, 238)"
        description={dermatologyAestheticTypes.description}
        variant="condition"
        lgColumns={4}
        image={dermatologyAestheticTypes.image}
        alt={dermatologyAestheticTypes.alt}
      />

      {/* <SciaticaTreatment
       data={dermatologyAssessment}
        showBorderLeft={false}
        rightContentStyle="keyFact"
        bgColor="bg-white"
        showStepNumbers={false}
      /> */}


 <ManualTherapySession 
        {...dermatologyConsultation}
        image={dermatologyConsultation.image}
        alt={dermatologyConsultation.alt}
      />



      <PhysiotherapyTeam 
        bgColor="bg-[#F8F4EE]"
        cardColor="bg-white"
        {...dermatologyTeam}
      />


      <TreatmentReviews 
        bgColor="bg-white"
        label={dermatologyReviews.label}
        title={dermatologyReviews.title}
        {...dermatologyReviews}
        useKneeStyle={true}
        useKneeStyleBgColor="bg-white"
      />

      

      <div className={`bg-[#FAF8F3] py-24 px-6 ${dermatologyPricing.bgColor}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm tracking-widest uppercase mb-4" style={{ color: '#C9A84C' }}>
              {dermatologyPricing.label}
            </div>
            <h2 className="text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26, 26, 26)' }}>
              {dermatologyPricing.title}
            </h2>
          </div>

          <div className="bg-white rounded-lg border border-[#E5DFD3] overflow-hidden mb-12">
            {dermatologyPricing.services.map((service, index) => (
              <div key={index} className={`flex items-center justify-between px-8 py-5 ${index % 2 === 1 ? 'bg-[#FAF8F5]' : 'bg-white'}`}>
                <p className="text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                  {service.name}
                </p>
                <p style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(201, 168, 76)' }}>
                  {service.price}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center mb-8" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.7', fontSize: '14px' }}>
            {dermatologyPricing.insuranceText}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {dermatologyPricing.insurances && dermatologyPricing.insurances.map((insurer, index) => (
              <span key={index} className="bg-[#FAF8F5] px-4 py-2 rounded-full text-xs border border-[#E5DFD3]" style={{ color: 'rgb(107, 107, 107)' }}>
                {insurer}
              </span>
            ))}
          </div>
        </div>
      </div>

      <FAQ {...dermatologyFaqs} />

      <section className="bg-[#FAF8F3] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Map */}
            <div className="rounded-xl overflow-hidden aspect-[4/3]">
              <iframe 
                src={dermatologyLocation.mapEmbed} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Vedara Care Polyclinic Location"
              />
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              <div>
                <p className="text-sm tracking-[0.15em] uppercase text-[#C9A961] font-semibold mb-4">
                  VISIT US
                </p>
                <h2 className="text-[42px] font-serif font-normal leading-[1.1] text-[#1A1A1A]">
                  Where dermatology happens at Vedara Care JVC.
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="text-[#C9A961] flex-shrink-0 mt-1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-[#1A1A1A]">Address</p>
                    <p className="text-sm text-[#6B6B6B]">Jumeirah Village Circle (JVC), Dubai, UAE</p>
                    <p className="text-sm text-[#6B6B6B]">Walking distance from Circle Mall</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="text-[#C9A961] flex-shrink-0 mt-1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-[#1A1A1A]">Telephone</p>
                    <p className="text-sm text-[#6B6B6B]">+971 4 000 0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="text-[#C9A961] flex-shrink-0 mt-1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-[#1A1A1A]">Clinic Hours</p>
                    <p className="text-sm text-[#6B6B6B]">Monday – Saturday: 9:00 AM – 9:00 PM</p>
                    <p className="text-sm text-[#6B6B6B]">Sunday: 10:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Proximity cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-lg border border-[#E5DFD3] p-4 text-center">
                  <p className="text-xs font-semibold text-[#C9A961] mb-1">Walking distance</p>
                  <p className="text-xs text-[#6B6B6B]">Circle Mall</p>
                </div>
                <div className="bg-white rounded-lg border border-[#E5DFD3] p-4 text-center">
                  <p className="text-xs font-semibold text-[#C9A961] mb-1">3 minutes</p>
                  <p className="text-xs text-[#6B6B6B]">FIVE JV Hotel</p>
                </div>
                <div className="bg-white rounded-lg border border-[#E5DFD3] p-4 text-center">
                  <p className="text-xs font-semibold text-[#C9A961] mb-1">5 minutes</p>
                  <p className="text-xs text-[#6B6B6B]">JSS Private School</p>
                </div>
              </div>

              {/* Description */}
              <div className="border-l-2 border-[#C9A961] pl-4">
                <p className="text-xs text-[#6B6B6B] leading-relaxed">
Our JVC clinic has dedicated dermatology consultation rooms, specialised treatment rooms for laser procedures, surgical room for biopsies and minor procedures, premium clinical environment with patient comfort prioritised, full equipment for all procedures described, and discreet booking and treatment process. Easy access from JVC, JVT, Al Barsha South, Sports City, Motor City, Arjan, Dubai Hills, and across Dubai.
                </p>
              </div>

              {/* Button */}
              <button className="bg-[#1A1A1A] text-white px-8 py-4 text-sm font-semibold inline-flex items-center gap-2">
                Book Dermatology Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>


      <FinalCTA 
        {...dermatologyCTA}
        title="Consultant dermatology. Medical and aesthetic. All skin types."
      />

     

      <ServicePillars data={servicePillarsData} />
 <RelatedPages {...dermatologyRelatedPages} />
    </>
  );
};

export default DermatologyClinicJVC;
