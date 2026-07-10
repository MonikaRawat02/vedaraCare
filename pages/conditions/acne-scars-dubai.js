import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import { SciaticaTreatment, SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  acneScarsHero,
  acneScarsIntro,
  acneScarsUnderstanding,
  acneScarsTypes,
  acneScarsCombination,
  acneScarsExpectations,
  acneScarsWhyVedara,
  acneScarsPatientVoices,
  acneScarsTeam,
  acneScarsPricing,
  acneScarsFAQ,
  acneScarsLocation,
  acneScarsFinalCTA,
  acneScarsRelatedPages
} from "../../data/acneScarsData";

const acneScarsTreatment = () => {
  const currentUrl = "https://vedaracare.ae/conditions/acne-scars-dubai/";
  const publishedDate = "2026-07-09T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": `${currentUrl}#acne-scars`,
      "name": "Vedara Care Acne Scar Treatment JVC",
      "alternateName": ["Vedara Acne Scars JVC", "Best Acne Scar Clinic Dubai", "Vedara Acne Scar Specialist Dubai"],
      "url": currentUrl,
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "Specialist acne scar treatment at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. DHA-licensed consultant dermatologists delivering combination protocols for all acne scar types with particular Fitzpatrick IV-VI expertise.",
      "telephone": "+971 55 586 7466",
      "priceRange": "AED 500 - AED 50,000",
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
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "Jumeirah Village Circle" },
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
      "medicalSpecialty": ["Dermatology", "Acne Scar Treatment", "Aesthetic Dermatology", "Cosmetic Dermatology"],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Acne Scar Treatment" },
        { "@type": "MedicalProcedure", "name": "Subcision for Rolling Scars" },
        { "@type": "MedicalProcedure", "name": "TCA Cross for Ice Pick Scars" },
        { "@type": "MedicalProcedure", "name": "Medical Microneedling with PRP" },
        { "@type": "MedicalProcedure", "name": "Fractional Laser Resurfacing" },
        { "@type": "MedicalProcedure", "name": "Dermal Filler for Atrophic Scars" },
        { "@type": "MedicalProcedure", "name": "Chemical Peel for Post-Inflammatory Hyperpigmentation" }
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Dubai Health Authority"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1200",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "name": "Acne Scars",
          "alternateName": ["Post-Acne Scarring", "Atrophic Acne Scars"],
          "code": { "@type": "MedicalCode", "code": "L90.5", "codingSystem": "ICD-10" },
          "possibleTreatment": [
            { "@type": "MedicalProcedure", "name": "Subcision" },
            { "@type": "MedicalProcedure", "name": "TCA Cross" },
            { "@type": "MedicalProcedure", "name": "Medical Microneedling" },
            { "@type": "MedicalProcedure", "name": "Fractional Laser" },
            { "@type": "MedicalProcedure", "name": "Dermal Fillers" }
          ]
        },
        { "@type": "MedicalCondition", "name": "Ice Pick Scars" },
        { "@type": "MedicalCondition", "name": "Boxcar Scars" },
        { "@type": "MedicalCondition", "name": "Rolling Scars" },
        {
          "@type": "MedicalCondition",
          "name": "Hypertrophic Scars",
          "code": { "@type": "MedicalCode", "code": "L91.0", "codingSystem": "ICD-10" }
        },
        {
          "@type": "MedicalCondition",
          "name": "Keloid Scars",
          "code": { "@type": "MedicalCode", "code": "L91.0", "codingSystem": "ICD-10" }
        },
        {
          "@type": "MedicalCondition",
          "name": "Post-Inflammatory Hyperpigmentation",
          "code": { "@type": "MedicalCode", "code": "L81.0", "codingSystem": "ICD-10" }
        },
        { "@type": "MedicalCondition", "name": "Post-Inflammatory Erythema" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Acne Scar Treatment Services in JVC Dubai",
      "provider": { "@id": `${currentUrl}#acne-scars` },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "United Arab Emirates" }
      ],
      "serviceType": "Acne Scar Treatment and Combination Protocols",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Acne Scar Treatment Services",
        "itemListElement": acneScarsPricing.services.map((service, index) => ({
          "@type": "Offer",
          "name": service.name,
          "priceCurrency": "AED"
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${currentUrl}#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/" },
        { "@type": "ListItem", "position": 3, "name": "Acne Scars Treatment in JVC Dubai", "item": currentUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": acneScarsFAQ.faqs.map((faq) => ({
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
      "headline": "Best Clinic for Acne Scars in Dubai — Dermatology-Led Combination Protocol Guide",
      "image": "https://vedaracare.ae/og-images/best-acne-scars-jvc-dubai.jpg",
      "datePublished": publishedDate,
      "dateModified": modifiedDate,
      "author": {
        "@type": "Physician",
        "name": "Consultant Dermatologist"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic"
      },
      "about": [
        { "@type": "MedicalCondition", "name": "Acne Scars" },
        { "@type": "MedicalCondition", "name": "Ice Pick Scars" },
        { "@type": "MedicalCondition", "name": "Rolling Scars" },
        { "@type": "MedicalCondition", "name": "Post-Inflammatory Hyperpigmentation" }
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
        <title>Best Clinic for Acne Scars in JVC Dubai | Combination Care | Vedara</title>
        <meta name="description" content="Specialist acne scar clinic in JVC, Dubai. DHA-licensed consultant dermatologists with combination protocols for ice pick, boxcar, rolling scars. Fitzpatrick I-VI expertise. Walking distance from Circle Mall." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/conditions/acne-scars-dubai/" />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
        <meta property="og:title" content="Best Clinic for Acne Scars in JVC Dubai — Combination Protocol Care | Vedara" />
        <meta property="og:description" content="Specialist acne scar treatment at our Jumeirah Village Circle clinic, Dubai. DHA-licensed consultant dermatologists delivering combination protocols for ice pick, boxcar, rolling scars and post-inflammatory hyperpigmentation. Fitzpatrick I-VI expertise particularly for darker skin types where wrong treatment produces hyperpigmentation." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/best-acne-scars-jvc-dubai.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Clinic for Acne Scars in JVC Dubai — Combination Care | Vedara" />
        <meta name="twitter:description" content="DHA-licensed consultant dermatologists with combination protocol expertise across all Fitzpatrick skin types." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/best-acne-scars-jvc-dubai.jpg" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow" />
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      {/* Section 1 - Hero */}
      <AyurvedaHero {...acneScarsHero} />

      {/* Section 2 - Intro */}
      <AyurvedaIntro {...acneScarsIntro} />

      {/* Section 3 - Understanding Acne Scars */}
      <SciaticaTreatment
        data={acneScarsUnderstanding}
        showBorderLeft={false}
        rightContentStyle="acneScarTypes"
        bgColor="bg-[#F0EBE3]"
      />

      {/* Section 4 - Acne Scar Types */}
      <SciaticaTypes
        {...acneScarsTypes}
        typicalSignsLabel="BEST TREATED WITH:"
      />

      {/* Section 5 - Combination Protocols */}
      <ContentWithSidebar
        {...acneScarsCombination}
      />

       <ContentWithSidebar
        bgColor={acneScarsExpectations.bgColor}
        cardBg={acneScarsExpectations.cardBg}
        label={acneScarsExpectations.label}
        title={acneScarsExpectations.title}
        intro={acneScarsExpectations.intro}
        phases={acneScarsExpectations.phases}
        footerNote={acneScarsExpectations.footerNote}
        bottomContent={acneScarsExpectations.bottomContent}
      />

      {/* Why Vedara Section */}
      <SciaticaTypes
        bgColor={acneScarsWhyVedara.bgColor}
        cardBg={acneScarsWhyVedara.cardBg}
        label={acneScarsWhyVedara.label}
        title={acneScarsWhyVedara.title}
        description={acneScarsWhyVedara.description}
        types={acneScarsWhyVedara.types}
        footer={acneScarsWhyVedara.footer}
        gridCols={acneScarsWhyVedara.gridCols}
        borderPosition={acneScarsWhyVedara.borderPosition}
      />

      {/* Section 6 - Patient Voices */}
      <TreatmentReviews
        bgColor={acneScarsPatientVoices.bgColor}
        cardBgColor={acneScarsPatientVoices.cardBg}
        statsBgColor="transparent"
        label={acneScarsPatientVoices.label}
        title={acneScarsPatientVoices.title}
        items={acneScarsPatientVoices.testimonials.map(t => ({
          quote: t.quote,
          author: t.attribution,
          details: t.treatment,
          details1: t.location
        }))}
        stats={acneScarsPatientVoices.stats.map(s => ({
          value: s.value,
          label: s.description
        }))}
        isDarkText={true}
        useKneeStyle={false}
      />

      {/* Section 4 - Team */}
      <PhysiotherapyTeam
        bgColor={acneScarsTeam.bgColor}
        label={acneScarsTeam.label}
        title={acneScarsTeam.title}
        description={acneScarsTeam.description}
        team={acneScarsTeam.team}
        gridColumns={acneScarsTeam.gridColumns}
      />

      {/* Section 5 - Pricing */}
      <ContentWithSidebar
        bgColor={acneScarsPricing.bgColor}
        label={acneScarsPricing.label}
        title={acneScarsPricing.title}
        services={acneScarsPricing.services}
        insuranceText={acneScarsPricing.insuranceText}
      />

      {/* FAQ Section */}
      <FAQ
        bgColor={acneScarsFAQ.bgColor}
        label={acneScarsFAQ.label}
        title={acneScarsFAQ.title}
        description={acneScarsFAQ.description}
        faqs={acneScarsFAQ.faqs}
        buttonText={acneScarsFAQ.buttonText}
        buttonHref={acneScarsFAQ.buttonHref}
        sidebarLinks={acneScarsFAQ.sidebarLinks}
      />

      {/* Clinic Location Section */}
      <TreatmentLocation
        bgColor={acneScarsLocation.bgColor}
        label={acneScarsLocation.label}
        title={acneScarsLocation.title}
        address={acneScarsLocation.address}
        phone={acneScarsLocation.phone}
        whatsapp={acneScarsLocation.whatsapp}
        whatsappMessage={acneScarsLocation.whatsappMessage}
        email={acneScarsLocation.email}
        hours={acneScarsLocation.hours}
        landmarks={acneScarsLocation.landmarks}
        description={acneScarsLocation.description}
        buttonText={acneScarsLocation.buttonText}
        mapEmbed={acneScarsLocation.mapEmbed}
      />

      {/* Final CTA Section */}
      <FinalCTA {...acneScarsFinalCTA} />

      {/* Related Pages Section */}
      <RelatedPages {...acneScarsRelatedPages} />
    </>
  )
};

export default acneScarsTreatment;
