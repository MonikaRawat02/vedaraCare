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
  hairLossTreatmentHero,
  hairLossTreatmentIntro,
  hairLossUnderstanding,
  hairLossTypes,
  hairLossTreatmentLadder,
  hairLossTreatmentTimeline,
  hairLossTreatmentWorkup,
  hairLossTreatmentPricing,
  hairLossTreatmentReviews,
  hairLossTreatmentTeam,
  hairLossTreatmentFaqs,
  hairLossTreatmentLocation,
  hairLossTreatmentCTA,
  hairLossTreatmentRelatedPages
} from '../../data/hairLossTreatmentJvcData';

const HairLossTreatmentJvc = () => {
  const currentUrl = "https://vedaracare.ae/conditions/hair-loss-treatment-jvc/";
  const publishedDate = "2026-06-27T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": `${currentUrl}#hair-loss-treatment`,
      "name": "Vedara Care Hair Loss Treatment Clinic",
      "alternateName": ["Vedara Hair Loss Treatment JVC", "Vedara Hair Loss Specialist Dubai"],
      "url": currentUrl,
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "Specialist hair loss treatment at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. DHA-licensed consultant dermatologists treating male pattern hair loss, female pattern hair loss, postnatal hair loss, alopecia areata, telogen effluvium, traction alopecia, and scarring alopecia. Comprehensive evidence-based treatment including topical minoxidil, oral finasteride/dutasteride, PRP, mesotherapy, microneedling, and hair transplant coordination. All genders and skin types.",
      "telephone": "+971 4 567 8900",
      "priceRange": "AED 300 - AED 12,000",
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
      "medicalSpecialty": ["Dermatology", "Trichology", "Hair Loss Treatment", "Medical Dermatology"],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Hair Loss Consultation" },
        { "@type": "MedicalProcedure", "name": "Trichoscopy" },
        { "@type": "MedicalProcedure", "name": "Topical Minoxidil Treatment" },
        { "@type": "MedicalProcedure", "name": "Oral Finasteride Treatment" },
        { "@type": "MedicalProcedure", "name": "Platelet-Rich Plasma (PRP) Therapy" },
        { "@type": "MedicalProcedure", "name": "Hair Mesotherapy" },
        { "@type": "MedicalProcedure", "name": "Scalp Microneedling" },
        { "@type": "MedicalProcedure", "name": "Hormonal Evaluation" }
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Dubai Health Authority"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "300",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "name": "Androgenetic Alopecia",
          "alternateName": ["Male Pattern Baldness", "Female Pattern Baldness", "Pattern Hair Loss"],
          "code": { "@type": "MedicalCode", "code": "L64", "codingSystem": "ICD-10" },
          "possibleTreatment": [
            { "@type": "MedicalProcedure", "name": "Topical Minoxidil" },
            { "@type": "MedicalProcedure", "name": "Oral Finasteride" },
            { "@type": "MedicalProcedure", "name": "Platelet-Rich Plasma Therapy" }
          ]
        },
        {
          "@type": "MedicalCondition",
          "name": "Telogen Effluvium",
          "code": { "@type": "MedicalCode", "code": "L65.0", "codingSystem": "ICD-10" }
        },
        {
          "@type": "MedicalCondition",
          "name": "Alopecia Areata",
          "code": { "@type": "MedicalCode", "code": "L63", "codingSystem": "ICD-10" }
        },
        {
          "@type": "MedicalCondition",
          "name": "Postpartum Alopecia",
          "alternateName": ["Postnatal Hair Loss"]
        },
        {
          "@type": "MedicalCondition",
          "name": "Traction Alopecia",
          "code": { "@type": "MedicalCode", "code": "L65.1", "codingSystem": "ICD-10" }
        },
        {
          "@type": "MedicalCondition",
          "name": "Scarring Alopecia",
          "alternateName": ["Cicatricial Alopecia"]
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Hair Loss Treatment Services in JVC Dubai",
      "provider": { "@id": `${currentUrl}#hair-loss-treatment` },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "United Arab Emirates" }
      ],
      "serviceType": "Trichology & Hair Loss Treatment",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Hair Loss Treatment Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Initial Hair Loss Consultation",
            "priceCurrency": "AED",
            "price": "400",
            "description": "45-60 minute comprehensive consultation with consultant dermatologist including trichoscopy"
          },
          {
            "@type": "Offer",
            "name": "PRP Hair Treatment (Single Session)",
            "priceCurrency": "AED",
            "price": "1200",
            "description": "Single PRP hair treatment session"
          },
          {
            "@type": "Offer",
            "name": "PRP Hair Treatment (4 Sessions)",
            "priceCurrency": "AED",
            "price": "4000",
            "description": "4-session PRP hair treatment programme"
          },
          {
            "@type": "Offer",
            "name": "Hair Mesotherapy (Single Session)",
            "priceCurrency": "AED",
            "price": "800",
            "description": "Single hair mesotherapy session"
          },
          {
            "@type": "Offer",
            "name": "Comprehensive Hair Loss Programme (6 Months)",
            "priceCurrency": "AED",
            "price": "8000",
            "description": "6-month comprehensive hair loss treatment programme"
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
        { "@type": "ListItem", "position": 3, "name": "Hair Loss Treatment in JVC", "item": currentUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": hairLossTreatmentFaqs.faqs.map((faq) => ({
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
      "headline": "Hair Loss Treatment in JVC Dubai — Specialist Dermatology Guide",
      "image": "https://vedaracare.ae/og-images/hair-loss-treatment-jvc.webp",
      "datePublished": "2026-06-27T08:00:00+04:00",
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
        { "@type": "MedicalCondition", "name": "Androgenetic Alopecia" },
        { "@type": "MedicalCondition", "name": "Telogen Effluvium" },
        { "@type": "MedicalCondition", "name": "Alopecia Areata" }
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
        <title>Hair Loss Treatment in JVC | Specialist Dermatologists | Vedara Dubai</title>
        <meta name="description" content="Specialist hair loss treatment in JVC, Dubai. DHA-licensed consultant dermatologists treating male pattern hair loss, female pattern hair loss, postnatal hair loss, alopecia areata. All genders. Comprehensive evidence-based care including PRP and mesotherapy. Walking distance from Circle Mall." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/conditions/hair-loss-treatment-jvc/" />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
        <meta property="og:title" content="Hair Loss Treatment in JVC — Specialist Dermatologists | Vedara Care Dubai" />
        <meta property="og:description" content="Specialist hair loss treatment at our Jumeirah Village Circle clinic. DHA-licensed consultant dermatologists treating male pattern hair loss, female pattern hair loss, postnatal hair loss, alopecia areata, telogen effluvium, and all hair loss types. Evidence-based comprehensive treatment including topical minoxidil, oral finasteride/dutasteride, PRP, mesotherapy, and scalp microneedling. Realistic timelines, transparent pricing." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/hair-loss-treatment-jvc.webp" />
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
        {...hairLossTreatmentHero}
      />

      <AyurvedaIntro
        {...hairLossTreatmentIntro}
      />

      <SciaticaTreatment
            data={hairLossUnderstanding}
            showBorderLeft={false}
            rightContentStyle="hairCycle"
            bgColor="bg-[#F5F1E8]"
            showStepNumbers={false}
          />

      <SciaticaTypes
        bgColor={hairLossTypes.bgColor}
        cardBg={hairLossTypes.cardBg}
        label={hairLossTypes.label}
        title={hairLossTypes.title}
        description={hairLossTypes.description}
        types={hairLossTypes.types}
        footer={hairLossTypes.footer}
        gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        typicalSignsLabel="TYPICAL PRESENTATION:"
        borderPosition="left"
      />

      <ContentWithSidebar
        bgColor={hairLossTreatmentWorkup.bgColor}
        label={hairLossTreatmentWorkup.label}
        title={hairLossTreatmentWorkup.title}
        contentSections={hairLossTreatmentWorkup.contentSections}
        sidebar={hairLossTreatmentWorkup.sidebar}
      />

      <SciaticaTypes
        bgColor={hairLossTreatmentLadder.bgColor}
        cardBg={hairLossTreatmentLadder.cardBg}
        label={hairLossTreatmentLadder.label}
        title={hairLossTreatmentLadder.title}
        description={hairLossTreatmentLadder.description}
        types={hairLossTreatmentLadder.types}
        footer={hairLossTreatmentLadder.footer}
        gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        typicalSignsLabel="BEST FOR:"
        borderPosition="top"
      />

      <ContentWithSidebar
        bgColor={hairLossTreatmentTimeline.bgColor}
        label={hairLossTreatmentTimeline.label}
        title={hairLossTreatmentTimeline.title}
        intro={hairLossTreatmentTimeline.intro}
        phases={hairLossTreatmentTimeline.phases}
        footerNote={hairLossTreatmentTimeline.footerNote}
      />

      <TreatmentReviews
        {...hairLossTreatmentReviews}
        bgColor={hairLossTreatmentReviews.bgColor}
        useKneeStyle={hairLossTreatmentReviews.useKneeStyle}
      />

      <PhysiotherapyTeam
        bgColor={hairLossTreatmentTeam.bgColor}
        label={hairLossTreatmentTeam.label}
        title={hairLossTreatmentTeam.title}
        description={hairLossTreatmentTeam.description}
        members={hairLossTreatmentTeam.team}
        gridColumns="lg:grid-cols-4"
      />

      <ContentWithSidebar
        bgColor={hairLossTreatmentPricing.bgColor}
        label={hairLossTreatmentPricing.label}
        title={hairLossTreatmentPricing.title}
        services={hairLossTreatmentPricing.services}
        insuranceText={hairLossTreatmentPricing.insuranceText}
        insurances={hairLossTreatmentPricing.insurances}
      />

      <FAQ
        bgColor={hairLossTreatmentFaqs.bgColor}
        label={hairLossTreatmentFaqs.label}
        title={hairLossTreatmentFaqs.title}
        description={hairLossTreatmentFaqs.description}
        faqs={hairLossTreatmentFaqs.faqs}
        buttonText={hairLossTreatmentFaqs.primaryCtaText}
        buttonHref={hairLossTreatmentFaqs.primaryCtaHref}
        secondaryLinkText={hairLossTreatmentFaqs.secondaryCtaText}
        secondaryLinkHref={hairLossTreatmentFaqs.secondaryCtaHref}
        sidebarLinks={hairLossTreatmentFaqs.sidebarLinks}
      />

      <TreatmentLocation
        address={hairLossTreatmentLocation.sections.find(s => s.label === "Address")?.content}
        phone={hairLossTreatmentLocation.sections.find(s => s.label === "Phone")?.content}
        hours={hairLossTreatmentLocation.sections.find(s => s.label === "Clinic Hours")?.content}
        mapEmbed={hairLossTreatmentLocation.mapEmbed}
        description={hairLossTreatmentLocation.description}
        buttonText={hairLossTreatmentLocation.buttonText}
        buttonHref={hairLossTreatmentLocation.buttonHref}
      />

      <FinalCTA
        {...hairLossTreatmentCTA}
      />

      <RelatedPages
        {...hairLossTreatmentRelatedPages}
      />
    </>
  );
};

export default HairLossTreatmentJvc;
