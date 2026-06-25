import Head from 'next/head';
import AyurvedaHero from '../components/ayurveda/AyurvedaHero';
import PhysiotherapySpecializations from '../components/ayurveda/PhysiotherapySpecializations';
import SportsInjuryTypes from '../components/ayurveda/SportsInjuryTypes';
import ManualTherapySession from '../components/ayurveda/ManualTherapySession';
import FAQ from '../components/home/FAQ';
import FinalCTA from '../components/ayurveda/FinalCTA';
import RelatedPages from '../components/ayurveda/RelatedPages';
import { PatientPreferencesSection, HowThisPageWorksSection, WhatToExpectSection } from '../components/ayurveda/PatientPreferencesSection';
import {
  skinClinicHero,
  skinConcernSelector,
  skinClinicSpecificSituations,
  skinClinicWhenToSeeSpecialist,
  skinClinicPatientPreferences,
  skinClinicWhatToExpect,
  howThisPageWorks,
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
      "@type": "WebPage",
      "@id": `${currentUrl}#webpage`,
      "name": "Skin Clinic in JVC — Patient-Guided Skin Care Navigation",
      "alternateName": ["Skin Clinic JVC", "Skin Clinic Dubai"],
      "url": currentUrl,
      "description": "Patient-guided skin clinic navigation page helping patients identify skin concerns and find appropriate care pathways at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai.",
      "isPartOf": {
        "@type": "WebSite",
        "url": "https://vedaracare.ae/",
        "name": "Vedara Care Polyclinic"
      },
      "about": [
        {"@id": "https://vedaracare.ae/dermatology-clinic-jvc/#dermatology"}
      ],
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://vedaracare.ae/images/skin-clinic-jvc-hero.jpg"
      },
      "breadcrumb": {"@id": `${currentUrl}#breadcrumb`}
    },
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness"],
      "@id": `${currentUrl}#skin-clinic`,
      "name": "Vedara Care Skin Clinic",
      "alternateName": ["Skin Clinic JVC", "Skin Clinic Jumeirah Village Circle"],
      "url": currentUrl,
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "Skin clinic at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. DHA-licensed consultant dermatologists treating all skin concerns. Patient-guided navigation helping patients identify appropriate care.",
      "telephone": "+971 4 567 8900",
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
      "sameAs": ["https://vedaracare.ae/dermatology-clinic-jvc/"]
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Skin Concern Categories at Vedara Care",
      "description": "Common skin concerns we help patients identify and navigate appropriate care for.",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Acne and Breakouts"},
        {"@type": "ListItem", "position": 2, "name": "Pigmentation and Melasma"},
        {"@type": "ListItem", "position": 3, "name": "Signs of Aging"},
        {"@type": "ListItem", "position": 4, "name": "Hair Loss and Scalp Concerns"},
        {"@type": "ListItem", "position": 5, "name": "Eczema and Sensitive Skin"},
        {"@type": "ListItem", "position": 6, "name": "Skin Cancer Screening"},
        {"@type": "ListItem", "position": 7, "name": "Unwanted Hair Removal"},
        {"@type": "ListItem", "position": 8, "name": "Skin Health Maintenance"},
        {"@type": "ListItem", "position": 9, "name": "Hyperhidrosis"},
        {"@type": "ListItem", "position": 10, "name": "Uncategorised Concerns"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${currentUrl}#breadcrumb`,
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Skin Clinic in JVC", "item": currentUrl}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": skinClinicFaqs.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
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
        <title>Skin Clinic in JVC | Find the Right Care | Vedara Care Dubai</title>
        <meta name="description" content="Not sure what skin treatment you need? Our JVC skin clinic helps you identify your concern and find the right care. Acne, pigmentation, aging, hair, eczema, skin cancer — guidance for every concern. Consultant dermatologists. Walking distance from Circle Mall." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/skin-clinic-jvc/" />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
        <meta property="og:title" content="Skin Clinic in JVC — Find the Right Care for Your Concerns | Vedara Care" />
        <meta property="og:description" content="Patient-guided skin clinic at Jumeirah Village Circle, Dubai. Identify your skin concern from acne to aging to skin cancer screening, and navigate to the right care. DHA-licensed consultant dermatologists. Multiple languages. Both medical and aesthetic guidance." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/skin-clinic-jvc.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
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
      
      {/* How This Page Works Section */}
      <HowThisPageWorksSection 
        {...howThisPageWorks}
      />
      
      <PhysiotherapySpecializations 
        {...skinConcernSelector}
        cardBorder="border border-[#E5DFD3]"
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

      {/* What to Expect Section */}
      <WhatToExpectSection 
        bgColor={skinClinicWhatToExpect.bgColor}
        label={skinClinicWhatToExpect.label}
        title={skinClinicWhatToExpect.title}
        subtitle={skinClinicWhatToExpect.subtitle}
        paragraphs={skinClinicWhatToExpect.paragraphs}
        primaryButton={skinClinicWhatToExpect.primaryButton}
        secondaryButton={skinClinicWhatToExpect.secondaryButton}
      />

      {/* Patient Preferences Section */}
      <PatientPreferencesSection 
        bgColor={skinClinicPatientPreferences.bgColor}
        label={skinClinicPatientPreferences.label}
        title={skinClinicPatientPreferences.title}
        description={skinClinicPatientPreferences.description}
        additionalNote={skinClinicPatientPreferences.additionalNote}
        cardLabel={skinClinicPatientPreferences.preferencesCard.label}
        preferences={skinClinicPatientPreferences.preferencesCard.preferences}
        footerNote={skinClinicPatientPreferences.preferencesCard.footerNote}
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
            <a href="/dermatology-clinic-jvc/#pricing" className="hover:underline">
              {skinClinicPricing.footerText}
            </a>
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
        buttonText={skinClinicFaqs.buttonText}
        buttonHref={skinClinicFaqs.buttonHref}
        secondaryLinkText={skinClinicFaqs.secondaryLinkText}
        secondaryLinkHref={skinClinicFaqs.secondaryLinkHref}
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
