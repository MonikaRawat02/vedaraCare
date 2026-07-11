import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import { SciaticaTreatment, SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  acneTreatmentHero,
  acneTreatmentIntro,
  acneUnderstanding,
  acneTypes,
  acneTreatmentLadder,
  acneIsotretinoin,
  acneTreatmentTimeline,
  acneTreatmentPricing,
  acneTreatmentReviews,
  acneTreatmentTeam,
  acneTreatmentFaqs,
  acneTreatmentLocation,
  acneTreatmentCTA,
  acneTreatmentRelatedPages
} from '../../data/acneTreatmentJvcData';

const AcneTreatmentJvc = () => {
  const currentUrl = "https://vedaracare.ae/conditions/acne-treatment-jvc/";
  const publishedDate = "2026-06-01T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": `${currentUrl}#acne-treatment`,
      "name": "Vedara Care Acne Treatment Clinic",
      "alternateName": ["Vedara Acne Treatment JVC", "Vedara Acne Specialist Dubai"],
      "url": currentUrl,
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "Specialist acne treatment at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. DHA-licensed consultant dermatologists treating adolescent acne, adult acne, hormonal acne, cystic acne, comedonal acne, inflammatory acne, body acne, acne scarring, and post-inflammatory hyperpigmentation. Comprehensive evidence-based treatment including topical therapies, oral medications, isotretinoin when appropriate, and procedural treatments. All Fitzpatrick skin types.",
      "telephone": "+971 55 586 7466",
      "priceRange": "AED 400 - AED 15,000",
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
      "medicalSpecialty": ["Dermatology", "Acne Treatment", "Medical Dermatology"],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Acne Treatment" },
        { "@type": "MedicalProcedure", "name": "Adult Acne Treatment" },
        { "@type": "MedicalProcedure", "name": "Hormonal Acne Treatment" },
        { "@type": "MedicalProcedure", "name": "Cystic Acne Treatment" },
        { "@type": "MedicalProcedure", "name": "Acne Scarring Treatment" },
        { "@type": "MedicalProcedure", "name": "Isotretinoin Therapy" },
        { "@type": "MedicalProcedure", "name": "Chemical Peel for Acne" },
        { "@type": "MedicalProcedure", "name": "Comedone Extraction" },
        { "@type": "MedicalProcedure", "name": "Intralesional Cortisone Injection" }
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Dubai Health Authority"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "400",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "name": "Acne Vulgaris",
          "alternateName": ["Acne", "Common Acne"],
          "code": { "@type": "MedicalCode", "code": "L70", "codingSystem": "ICD-10" },
          "possibleTreatment": [
            { "@type": "MedicalProcedure", "name": "Topical Retinoids" },
            { "@type": "MedicalProcedure", "name": "Benzoyl Peroxide" },
            { "@type": "MedicalProcedure", "name": "Oral Antibiotics" },
            { "@type": "MedicalProcedure", "name": "Isotretinoin" }
          ]
        },
        {
          "@type": "MedicalCondition",
          "name": "Comedonal Acne",
          "code": { "@type": "MedicalCode", "code": "L70.0", "codingSystem": "ICD-10" }
        },
        {
          "@type": "MedicalCondition",
          "name": "Cystic Acne",
          "alternateName": ["Nodular Acne", "Severe Acne"],
          "code": { "@type": "MedicalCode", "code": "L70.0", "codingSystem": "ICD-10" }
        },
        {
          "@type": "MedicalCondition",
          "name": "Adult Acne",
          "alternateName": ["Adult-Onset Acne", "Post-Adolescent Acne"]
        },
        {
          "@type": "MedicalCondition",
          "name": "Hormonal Acne"
        },
        {
          "@type": "MedicalCondition",
          "name": "Acne Scarring",
          "code": { "@type": "MedicalCode", "code": "L90.5", "codingSystem": "ICD-10" }
        },
        {
          "@type": "MedicalCondition",
          "name": "Post-Inflammatory Hyperpigmentation",
          "code": { "@type": "MedicalCode", "code": "L81.0", "codingSystem": "ICD-10" }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Acne Treatment Services in JVC Dubai",
      "provider": { "@id": `${currentUrl}#acne-treatment` },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "United Arab Emirates" }
      ],
      "serviceType": "Acne Dermatology Treatment",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Acne Treatment Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Initial Acne Consultation",
            "priceCurrency": "AED",
            "price": "400",
            "description": "45-60 minute comprehensive consultation with consultant dermatologist"
          },
          {
            "@type": "Offer",
            "name": "Comprehensive 3-Month Acne Programme",
            "priceCurrency": "AED",
            "price": "5000",
            "description": "Structured 3-month acne treatment programme"
          },
          {
            "@type": "Offer",
            "name": "Comprehensive 6-Month Acne Programme",
            "priceCurrency": "AED",
            "price": "9000",
            "description": "Structured 6-month acne treatment programme"
          },
          {
            "@type": "Offer",
            "name": "Isotretinoin Treatment Course",
            "priceCurrency": "AED",
            "price": "8000",
            "description": "Monthly monitoring during isotretinoin treatment"
          },
          {
            "@type": "Offer",
            "name": "Acne Scarring Treatment",
            "priceCurrency": "AED",
            "price": "1500",
            "description": "Multi-modal acne scarring treatment per session"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${currentUrl}#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/" },
        { "@type": "ListItem", "position": 3, "name": "Acne Treatment in JVC", "item": currentUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": acneTreatmentFaqs.faqs.map((faq) => ({
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
      "headline": "Acne Treatment in JVC Dubai — Specialist Dermatology Guide",
      "image": "https://vedaracare.ae/og-images/acne-treatment-jvc.webp",
      "datePublished": "2026-06-01T08:00:00+04:00",
      "dateModified": new Date().toISOString(),
      "author": {
        "@type": "Physician",
        "name": "Consultant Dermatologist"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic"
      },
      "about": [
        { "@type": "MedicalCondition", "name": "Acne Vulgaris" },
        { "@type": "MedicalCondition", "name": "Adult Acne" },
        { "@type": "MedicalCondition", "name": "Acne Scarring" }
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
        <title>Acne Treatment in JVC | Specialist Dermatologists | Vedara Dubai</title>
        <meta name="description" content="Specialist acne treatment in JVC, Dubai. DHA-licensed consultant dermatologists treating adult acne, hormonal acne, cystic acne, acne scarring. All skin types. Comprehensive evidence-based care including isotretinoin. Walking distance from Circle Mall." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/conditions/acne-treatment-jvc/" />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
        <meta property="og:title" content="Acne Treatment in JVC — Specialist Dermatologists | Vedara Care Dubai" />
        <meta property="og:description" content="Specialist acne treatment at our Jumeirah Village Circle clinic. DHA-licensed consultant dermatologists treating adolescent acne, adult acne, hormonal acne, cystic acne, and acne scarring across all Fitzpatrick skin types. Evidence-based comprehensive treatment including topical, oral, and procedural approaches. Realistic timelines, transparent pricing." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/acne-treatment-jvc.webp" />
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
        {...acneTreatmentHero}
      />

      <AyurvedaIntro
        {...acneTreatmentIntro}
      />

      <SciaticaTreatment
        data={acneUnderstanding}
        showBorderLeft={false}
        rightContentStyle="keyAnatomy"
        bgColor="bg-[#F5F1E8]"
        showStepNumbers={false}
      />

      <SciaticaTypes
        bgColor={acneTypes.bgColor}
        cardBg={acneTypes.cardBg}
        label={acneTypes.label}
        title={acneTypes.title}
        description={acneTypes.description}
        types={acneTypes.types}
        footer={acneTypes.footer}
        gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        typicalSignsLabel="TYPICAL PRESENTATION:"
        borderPosition="left"
      />

      <ContentWithSidebar
        bgColor={acneTreatmentLadder.bgColor}
        label={acneTreatmentLadder.label}
        title={acneTreatmentLadder.title}
        intro={acneTreatmentLadder.intro}
        preContent={acneTreatmentLadder.preContent}
        ladderItems={acneTreatmentLadder.ladderItems}
        sidebar={acneTreatmentLadder.sidebar}
      />

      <ContentWithSidebar
        bgColor={acneIsotretinoin.bgColor}
        label={acneIsotretinoin.label}
        title={acneIsotretinoin.title}
        contentSections={acneIsotretinoin.contentSections}
        sidebar={acneIsotretinoin.sidebar}
      />

      <ContentWithSidebar
        bgColor={acneTreatmentTimeline.bgColor}
        label={acneTreatmentTimeline.label}
        title={acneTreatmentTimeline.title}
        intro={acneTreatmentTimeline.intro}
        phases={acneTreatmentTimeline.phases}
        footerNote={acneTreatmentTimeline.footerNote}
      />

      <TreatmentReviews
        {...acneTreatmentReviews}
        bgColor={acneTreatmentReviews.bgColor}
      />

      <PhysiotherapyTeam
        bgColor={acneTreatmentTeam.bgColor}
        label={acneTreatmentTeam.label}
        title={acneTreatmentTeam.title}
        description={acneTreatmentTeam.description}
        members={acneTreatmentTeam.team}
        gridColumns="lg:grid-cols-4"
      />

      <ContentWithSidebar
        bgColor={acneTreatmentPricing.bgColor}
        label={acneTreatmentPricing.label}
        title={acneTreatmentPricing.title}
        services={acneTreatmentPricing.services}
        insuranceText={acneTreatmentPricing.insuranceText}
        insurances={acneTreatmentPricing.insurances}
      />

      <FAQ
        bgColor={acneTreatmentFaqs.bgColor}
        label={acneTreatmentFaqs.label}
        title={acneTreatmentFaqs.title}
        description={acneTreatmentFaqs.description}
        faqs={acneTreatmentFaqs.faqs}
        buttonText={acneTreatmentFaqs.primaryCtaText}
        buttonHref={acneTreatmentFaqs.primaryCtaHref}
        secondaryLinkText={acneTreatmentFaqs.secondaryCtaText}
        secondaryLinkHref={acneTreatmentFaqs.secondaryCtaHref}
        sidebarLinks={acneTreatmentFaqs.sidebarLinks}
      />

      <TreatmentLocation
        address={acneTreatmentLocation.sections.find(s => s.label === "Address")?.content}
        phone={acneTreatmentLocation.sections.find(s => s.label === "Phone")?.content}
        hours={acneTreatmentLocation.sections.find(s => s.label === "Clinic Hours")?.content}
        mapEmbed={acneTreatmentLocation.mapEmbed}
        description={acneTreatmentLocation.description}
        buttonText={acneTreatmentLocation.buttonText}
        buttonHref={acneTreatmentLocation.buttonHref}
        label={acneTreatmentLocation.label}
        title={acneTreatmentLocation.title}
      />

      <FinalCTA
        {...acneTreatmentCTA}
      />

      <RelatedPages
        {...acneTreatmentRelatedPages}
      />
    </>
  );
};

export default AcneTreatmentJvc;
