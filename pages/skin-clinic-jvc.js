import Head from 'next/head';
import AyurvedaHero from '../components/ayurveda/AyurvedaHero';
import SportsInjuryTypes from '../components/ayurveda/SportsInjuryTypes';
import ManualTherapySession from '../components/ayurveda/ManualTherapySession';
import FAQ from '../components/home/FAQ';
import FinalCTA from '../components/ayurveda/FinalCTA';
import RelatedPages from '../components/ayurveda/RelatedPages';
import {
  skinClinicHero,
  skinClinicSpecificSituations,
  skinClinicWhenToSeeSpecialist,
  skinClinicPricing,
  skinClinicFaqs,
  skinClinicFinalCTA,
  skinClinicRelatedPages
} from '../data/skinClinicJvcData';

const SkinClinicJvc = () => {
  const currentUrl = "https://vedaracare.ae/skin-clinic-jvc/";
  const publishedDate = "2026-06-01T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": `${currentUrl}#skin-clinic`,
      "name": "Vedara Care Skin Clinic",
      "alternateName": ["Vedara Skin Clinic JVC", "Vedara Dermatology Dubai"],
      "url": currentUrl,
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "Specialist skin clinic at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. DHA-licensed consultant dermatologists helping patients navigate skin concerns — from medical conditions to aesthetic goals, with honest guidance about when specialist care is needed.",
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
        {"@type": "MedicalProcedure", "name": "Skin Assessment"},
        {"@type": "MedicalProcedure", "name": "Acne Treatment"},
        {"@type": "MedicalProcedure", "name": "Pigmentation Treatment"},
        {"@type": "MedicalProcedure", "name": "Eczema Treatment"},
        {"@type": "MedicalProcedure", "name": "Psoriasis Treatment"},
        {"@type": "MedicalProcedure", "name": "Skin Cancer Screening"},
        {"@type": "MedicalProcedure", "name": "Pre-Event Skin Preparation"},
        {"@type": "MedicalProcedure", "name": "Postnatal Skin Care"},
        {"@type": "MedicalProcedure", "name": "Adolescent Dermatology"},
        {"@type": "MedicalProcedure", "name": "Men's Skin Care"},
        {"@type": "MedicalProcedure", "name": "Climate Adjustment Skin Care"},
        {"@type": "MedicalProcedure", "name": "Skincare Routine Consultation"}
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
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Skin Clinic in JVC", "item": currentUrl}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "headline": "Skin Clinic in JVC — Navigation Hub for Skin Concerns",
      "image": "https://vedaracare.ae/images/skin-clinic-jvc-hero.webp",
      "datePublished": publishedDate,
      "dateModified": modifiedDate,
      "author": {
        "@type": "Physician",
        "name": "Dr. Layla Al-Hassan, MD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic"
      },
      "about": [
        {"@type": "MedicalSpecialty", "name": "Dermatology"},
        {"@type": "MedicalSpecialty", "name": "Skin Care"}
      ],
      "mainEntityOfPage": currentUrl
    },
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
        <title>Skin Clinic in JVC | Find Your Right Care Pathway | Vedara Care</title>
        <meta name="description" content="Your navigation hub for skin concerns at our Jumeirah Village Circle clinic. Identify what you need, understand when to see a specialist, and find your pathway to the right care." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/skin-clinic-jvc/" />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
        <meta property="og:title" content="Skin Clinic in JVC — Find Your Right Care Pathway | Vedara Care" />
        <meta property="og:description" content="Navigation hub for skin concerns at our Jumeirah Village Circle clinic. Identify what you need, understand when to see a specialist, and find your pathway to the right care." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/skin-clinic-jvc-hero.webp" />
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
        {...skinClinicHero}
      />
      
      <SportsInjuryTypes 
        {...skinClinicSpecificSituations}
        bgColor="rgb(255, 255, 255)"
        lgColumns={3}
      />

      <ManualTherapySession 
        bgColor="bg-[#F8F4EE]"
        label={skinClinicWhenToSeeSpecialist.label}
        title={skinClinicWhenToSeeSpecialist.title}
        subtitle={skinClinicWhenToSeeSpecialist.description}
        sections={skinClinicWhenToSeeSpecialist.sections}
        safetyCard={{
          label: skinClinicWhenToSeeSpecialist.quickGuide.label,
          safetyStandardsLabel: skinClinicWhenToSeeSpecialist.quickGuide.sections[0].label,
          safetyStandards: skinClinicWhenToSeeSpecialist.quickGuide.sections[0].items,
          contraindicationsLabel: skinClinicWhenToSeeSpecialist.quickGuide.sections[1].label,
          contraindications: skinClinicWhenToSeeSpecialist.quickGuide.sections[1].items,
          sideEffectsLabel: skinClinicWhenToSeeSpecialist.quickGuide.sections[2].label,
          sideEffects: skinClinicWhenToSeeSpecialist.quickGuide.sections[2].items,
          buttonText: skinClinicWhenToSeeSpecialist.quickGuide.buttonText,
          buttonHref: skinClinicWhenToSeeSpecialist.quickGuide.buttonHref
        }}
      />

      {/* Pricing Section */}
      <div className={`${skinClinicPricing.bgColor} py-24 px-6`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm tracking-widest uppercase mb-4" style={{ color: '#C9A84C' }}>
              {skinClinicPricing.label}
            </div>
            <h2 className="text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26, 26, 26)' }}>
              {skinClinicPricing.title}
            </h2>
            <p className="mt-6" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.7' }}>
              {skinClinicPricing.description}
            </p>
          </div>

          <div className="bg-white rounded-lg border border-[#E5DFD3] overflow-hidden mb-12">
            {skinClinicPricing.services.map((service, index) => (
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

          <p className="text-center mb-4" style={{ color: 'rgb(201, 168, 76)', lineHeight: '1.7', fontSize: '14px', fontFamily: 'Fraunces, Georgia, serif' }}>
            {skinClinicPricing.footerText}
          </p>

          <p className="text-center" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.7', fontSize: '14px' }}>
            {skinClinicPricing.insuranceText}
          </p>
        </div>
      </div>

      <FAQ 
        bgColor={skinClinicFaqs.bgColor}
        label={skinClinicFaqs.label}
        title={skinClinicFaqs.title}
        description={skinClinicFaqs.description}
        faqs={skinClinicFaqs.faqs}
        buttonText={skinClinicFaqs.primaryCtaText}
        sidebarLinks={skinClinicFaqs.sidebarLinks}
      />

      <FinalCTA 
        {...skinClinicFinalCTA}
      />

      <RelatedPages {...skinClinicRelatedPages} />
    </>
  );
};

export default SkinClinicJvc;
