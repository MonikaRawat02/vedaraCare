import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import { SciaticaTreatment, SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import {
  skinRejuvenationHero,
  skinRejuvenationIntro,
  skinRejuvenationUnderstanding,
  skinRejuvenationTypes,
  skinRejuvenationTreatmentPlan,
  skinRejuvenationPricing,
  skinRejuvenationExpectations,
  skinRejuvenationPatientVoices,
  skinRejuvenationTeam,
  skinRejuvenationFaqs,
  skinRejuvenationLocation,
  skinRejuvenationCTA,
  skinRejuvenationRelatedPages
} from '../../data/skinRejuvenationJvcData';

const SkinRejuvenationJvc = () => {
  const currentUrl = "https://vedaracare.ae/treatments/skin-rejuvenation-jvc/";
  const currentDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": `${currentUrl}#skin-rejuvenation`,
      "name": "Vedara Care Skin Rejuvenation JVC",
      "alternateName": ["Vedara Skin Rejuvenation JVC", "Vedara Aesthetic Dermatology Dubai", "Vedara Cosmetic Dermatology JVC"],
      "url": currentUrl,
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "Specialist skin rejuvenation at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. DHA-licensed consultant dermatologists delivering personalised multi-modal aesthetic dermatology across all Fitzpatrick skin types. Walking distance from Circle Mall.",
      "telephone": "+971 55 586 7466",
      "priceRange": "AED 400 - AED 30,000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit G-07, Circle Mall Building",
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
        { "@type": "Place", "name": "Jumeirah Village Circle" },
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "Jumeirah Village Triangle" },
        { "@type": "Place", "name": "Al Barsha South" },
        { "@type": "Place", "name": "Dubai Sports City" },
        { "@type": "Place", "name": "Motor City" },
        { "@type": "Place", "name": "Arjan" },
        { "@type": "Place", "name": "Dubai Hills Estate" },
        { "@type": "Place", "name": "Dubai Marina" },
        { "@type": "Place", "name": "Downtown Dubai" },
        { "@type": "Place", "name": "Palm Jumeirah" },
        { "@type": "Place", "name": "Mirdif" }
      ],
      "medicalSpecialty": ["Dermatology", "Aesthetic Dermatology", "Cosmetic Dermatology", "Anti-Aging Medicine"],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Skin Rejuvenation" },
        { "@type": "MedicalProcedure", "name": "Chemical Peel" },
        { "@type": "MedicalProcedure", "name": "Medical Microneedling" },
        { "@type": "MedicalProcedure", "name": "PRP Facial Therapy" },
        { "@type": "MedicalProcedure", "name": "Mesotherapy" },
        { "@type": "MedicalProcedure", "name": "Laser Skin Rejuvenation" },
        { "@type": "MedicalProcedure", "name": "Skin Boosters" },
        { "@type": "MedicalProcedure", "name": "Aesthetic Skin Consultation" },
        { "@type": "MedicalProcedure", "name": "Pre-Wedding Skin Package" },
        { "@type": "MedicalProcedure", "name": "Photoaging Treatment" }
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Dubai Health Authority"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1000",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Skin Rejuvenation",
      "procedureType": "https://schema.org/NoninvasiveProcedure",
      "bodyLocation": "Skin"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Chemical Peel",
      "procedureType": "https://schema.org/NoninvasiveProcedure",
      "howPerformed": "Controlled chemical exfoliation using superficial (glycolic, mandelic, lactic, salicylic) or medium-depth (TCA-based) formulations"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Medical Microneedling",
      "procedureType": "https://schema.org/NoninvasiveProcedure",
      "howPerformed": "Controlled micro-injuries using medical microneedling devices to stimulate collagen and skin renewal"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "PRP Facial Therapy",
      "alternateName": "Platelet-Rich Plasma Therapy",
      "procedureType": "https://schema.org/PercutaneousProcedure",
      "howPerformed": "Uses growth factors from patient's own concentrated platelets applied topically with microneedling or injected"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Mesotherapy",
      "procedureType": "https://schema.org/PercutaneousProcedure",
      "howPerformed": "Multiple superficial injections delivering vitamins, hyaluronic acid, and skin-boosting formulations"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Laser Skin Rejuvenation",
      "procedureType": "https://schema.org/NoninvasiveProcedure",
      "howPerformed": "Uses specific laser platforms including fractional non-ablative, Q-switched Nd:YAG, and IPL where appropriate"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Skin Boosters",
      "procedureType": "https://schema.org/PercutaneousProcedure",
      "howPerformed": "Injectable hyaluronic acid-based treatments delivering deep hydration and skin quality improvement"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Skin Rejuvenation Services at JVC Dubai",
      "provider": { "@id": `${currentUrl}#skin-rejuvenation` },
      "areaServed": [
        { "@type": "Place", "name": "Jumeirah Village Circle" },
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "United Arab Emirates" }
      ],
      "serviceType": "Aesthetic Dermatology and Skin Rejuvenation",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Skin Rejuvenation Services",
        "itemListElement": [
          { "@type": "Offer", "name": "Initial Skin Rejuvenation Consultation", "priceCurrency": "AED", "price": "500" },
          { "@type": "Offer", "name": "Follow-up Consultation and Progress Review", "priceCurrency": "AED", "price": "250" },
          { "@type": "Offer", "name": "Superficial Chemical Peel", "priceCurrency": "AED", "price": "600" },
          { "@type": "Offer", "name": "Medium-Depth Chemical Peel", "priceCurrency": "AED", "price": "1200" },
          { "@type": "Offer", "name": "Medical Microneedling", "priceCurrency": "AED", "price": "900" },
          { "@type": "Offer", "name": "Microneedling with PRP", "priceCurrency": "AED", "price": "1600" },
          { "@type": "Offer", "name": "Mesotherapy", "priceCurrency": "AED", "price": "800" },
          { "@type": "Offer", "name": "PRP Facial Treatment", "priceCurrency": "AED", "price": "1500" },
          { "@type": "Offer", "name": "Laser Skin Rejuvenation", "priceCurrency": "AED", "price": "1200" },
          { "@type": "Offer", "name": "Skin Boosters Treatment", "priceCurrency": "AED", "price": "2200" },
          { "@type": "Offer", "name": "Pre-Wedding Skin Package", "priceCurrency": "AED", "price": "8500" },
          { "@type": "Offer", "name": "Pre-Event Skin Package", "priceCurrency": "AED", "price": "3500" },
          { "@type": "Offer", "name": "Comprehensive 6-Month Rejuvenation Programme", "priceCurrency": "AED", "price": "12000" }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${currentUrl}#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://vedaracare.ae/treatments/" },
        { "@type": "ListItem", "position": 3, "name": "Skin Rejuvenation in JVC", "item": currentUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": skinRejuvenationFaqs.faqs.map((faq) => ({
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
      "@type": "MedicalScholarlyArticle",
      "headline": "Skin Rejuvenation at JVC — Dermatologist-Led Aesthetic Care Guide",
      "image": "https://vedaracare.ae/images/skin-rejuvenation-jvc-hero.jpg",
      "datePublished": "2026-06-01T08:00:00+04:00",
      "dateModified": currentDate,
      "author": {
        "@type": "Physician",
        "name": "Dr. Layla Hassan",
        "url": "https://vedaracare.ae/doctors/dr-layla-hassan/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic",
        "logo": { "@type": "ImageObject", "url": "https://vedaracare.ae/logo.png" }
      },
      "about": [
        { "@type": "MedicalProcedure", "name": "Skin Rejuvenation" },
        { "@type": "MedicalProcedure", "name": "Chemical Peel" },
        { "@type": "MedicalProcedure", "name": "Medical Microneedling" },
        { "@type": "MedicalProcedure", "name": "PRP Facial Therapy" }
      ],
      "mainEntityOfPage": currentUrl
    },
    ...skinRejuvenationTeam.team.map(doctor => ({
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": doctor.name,
      "url": doctor.link,
      "image": `https://vedaracare.ae${doctor.image}`,
      "medicalSpecialty": doctor.specialties,
      "hasCredential": ["MD", "DHA-Licensed Consultant Dermatologist"],
      "knowsAbout": ["Skin Rejuvenation", "Chemical Peels", "Medical Microneedling", "PRP Therapy", "Mesotherapy", "Laser Skin Rejuvenation", "Skin Boosters", "Fitzpatrick Skin Type Treatment"],
      "knowsLanguage": doctor.languages,
      "worksFor": { "@id": "https://vedaracare.ae/#organization" }
    })),
    {
      "@context": "https://schema.org",
      "@id": "https://vedaracare.ae/#organization",
      "@type": ["Organization", "MedicalOrganization"],
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": { "@type": "ImageObject", "url": "https://vedaracare.ae/logo.png" },
      "sameAs": ["https://www.facebook.com/VedaraCare", "https://www.instagram.com/vedaracare/", "https://www.linkedin.com/company/vedara-care/"],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971 55 586 7466",
        "contactType": "Customer Service",
        "areaServed": "AE",
        "availableLanguage": ["English", "Arabic", "Hindi", "Urdu"]
      }
    }
  ];

  return (
    <>
      <Head>
        <title>Skin Rejuvenation in JVC | Dermatologist-Led Aesthetics | Vedara</title>
        <meta name="description" content="Sophisticated skin rejuvenation at our JVC clinic, Dubai. DHA-licensed consultant dermatologists delivering personalised multi-modal treatment plans across all Fitzpatrick skin types. Walking distance from Circle Mall." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Skin Rejuvenation in JVC — Dermatologist-Led Aesthetic Care | Vedara Care" />
        <meta property="og:description" content="Sophisticated skin rejuvenation at our Jumeirah Village Circle clinic, Dubai. DHA-licensed consultant dermatologists delivering personalised multi-modal treatment plans combining chemical peels, medical microneedling, PRP therapy, mesotherapy, laser rejuvenation, and skin boosters. Particular expertise across all Fitzpatrick skin types." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/skin-rejuvenation-jvc.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skin Rejuvenation in JVC — Dermatologist-Led | Vedara Care" />
        <meta name="twitter:description" content="DHA-licensed consultant dermatologists delivering personalised multi-modal skin rejuvenation across all Fitzpatrick skin types." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/skin-rejuvenation-jvc.jpg" />
        
        {/* Canonical & Hreflang */}
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/treatments/skin-rejuvenation-jvc/" />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />

        {/* Schema Markup */}
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      {/* Section 1 - Hero */}
      <AyurvedaHero {...skinRejuvenationHero} />
      
      {/* Section 2 - Intro */}
      <AyurvedaIntro {...skinRejuvenationIntro} />
      
      {/* Section 3 - Understanding */}
      <SciaticaTreatment
        data={skinRejuvenationUnderstanding}
        showBorderLeft={false}
        rightContentStyle=""
        bgColor="bg-[#F0EBE3]"
        showStepNumbers={true}
      />
      
      {/* Section 4 - Treatment Types */}
      <SciaticaTypes
        bgColor={skinRejuvenationTypes.bgColor}
        cardBg={skinRejuvenationTypes.cardBg}
        label={skinRejuvenationTypes.label}
        title={skinRejuvenationTypes.title}
        description={skinRejuvenationTypes.description}
        types={skinRejuvenationTypes.types}
        footer={skinRejuvenationTypes.footer}
        gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        typicalSignsLabel="BEST FOR:"
        borderPosition="left"
      />
      
      <ContentWithSidebar
        bgColor={skinRejuvenationTreatmentPlan.bgColor}
        label={skinRejuvenationTreatmentPlan.label}
        title={skinRejuvenationTreatmentPlan.title}
        intro={skinRejuvenationTreatmentPlan.intro}
        contentSections={skinRejuvenationTreatmentPlan.contentSections}
        sidebar={skinRejuvenationTreatmentPlan.sidebar}
      />
       {/* Section 6 - Realistic Expectations */}
      <ContentWithSidebar
        bgColor={skinRejuvenationExpectations.bgColor}
        cardBg={skinRejuvenationExpectations.cardBg}
        label={skinRejuvenationExpectations.label}
        title={skinRejuvenationExpectations.title}
        intro={skinRejuvenationExpectations.intro}
        phases={skinRejuvenationExpectations.phases}
        bottomContent={skinRejuvenationExpectations.bottomContent}
      />

      {/* Section 7 - Patient Voices */}
      <TreatmentReviews
        bgColor={skinRejuvenationPatientVoices.bgColor}
        cardBgColor="white"
        statsBgColor="transparent"
        label={skinRejuvenationPatientVoices.label}
        title={skinRejuvenationPatientVoices.title}
        items={skinRejuvenationPatientVoices.testimonials.map(t => ({
          quote: t.quote,
          author: t.attribution,
          details: t.treatment,
          details1: t.location
        }))}
        stats={skinRejuvenationPatientVoices.stats.map(s => ({
          value: s.value,
          label: s.description
        }))}
        isDarkText={true}
        useKneeStyle={false}
      />

      {/* Section 8 - The Team */}
      <PhysiotherapyTeam
        bgColor={skinRejuvenationTeam.bgColor}
        label={skinRejuvenationTeam.label}
        title={skinRejuvenationTeam.title}
        description={skinRejuvenationTeam.description}
        team={skinRejuvenationTeam.team}
        gridColumns="lg:grid-cols-4"
      />
      
      <ContentWithSidebar
        bgColor={skinRejuvenationPricing.bgColor}
        label={skinRejuvenationPricing.label}
        title={skinRejuvenationPricing.title}
        services={skinRejuvenationPricing.services}
        insuranceText={skinRejuvenationPricing.insuranceText}
        insurances={skinRejuvenationPricing.insurances}
      />
{/* Section 9 - FAQ */}
      <FAQ
        bgColor={skinRejuvenationFaqs.bgColor}
        label={skinRejuvenationFaqs.label}
        title={skinRejuvenationFaqs.title}
        description={skinRejuvenationFaqs.description}
        faqs={skinRejuvenationFaqs.faqs}
        buttonText={skinRejuvenationFaqs.primaryCtaText}
        buttonHref={skinRejuvenationFaqs.primaryCtaHref}
        secondaryLinkText={skinRejuvenationFaqs.secondaryCtaText}
        secondaryLinkHref={skinRejuvenationFaqs.secondaryCtaHref}
        sidebarLinks={skinRejuvenationFaqs.sidebarLinks}
      />
      {/* Section 11 - Location */}
      <TreatmentLocation
        bgColor={skinRejuvenationLocation.bgColor}
        address={skinRejuvenationLocation.address}
        phone={skinRejuvenationLocation.phone}
        whatsapp={skinRejuvenationLocation.whatsapp}
        whatsappMessage={skinRejuvenationLocation.whatsappMessage}
        email={skinRejuvenationLocation.email}
        hours={skinRejuvenationLocation.hours}
        landmarks={skinRejuvenationLocation.landmarks}
        mapEmbed={skinRejuvenationLocation.mapEmbed}
        
        buttonText={skinRejuvenationLocation.buttonText}
        buttonHref={skinRejuvenationLocation.buttonHref}
        label={skinRejuvenationLocation.label}
        title={skinRejuvenationLocation.title}
      />
      {/* Section 11 - Final CTA */}
      <FinalCTA {...skinRejuvenationCTA} />
      
      {/* Section 12 - Related Pages */}
      <RelatedPages {...skinRejuvenationRelatedPages} />
      
     
    </>
  );
};

export default SkinRejuvenationJvc;
