import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import { SciaticaTreatment, SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  chemicalPeelHero,
  chemicalPeelIntro,
  chemicalPeelHowItWorks,
  chemicalPeelFormulations,
  chemicalPeelSelection,
  chemicalPeelRealisticExpectations,
  chemicalPeelPatientVoices,
  chemicalPeelTeam,
  chemicalPeelPricing,
  chemicalPeelFAQ,
  chemicalPeelLocation,
  chemicalPeelCTA,
  chemicalPeelRelatedPages
} from '../../data/chemicalpeel';

const ChemicalPeelTreatment = () => {
  const currentUrl = "https://vedaracare.ae/treatments/chemical-peel-dubai/";
  const publishedDate = "2026-07-09T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": `${currentUrl}#chemical-peel`,
      "name": "Vedara Care Chemical Peel Treatment JVC",
      "alternateName": ["Vedara Chemical Peel JVC", "Vedara Medical Peel Dubai", "Vedara Skin Peel Specialist"],
      "url": currentUrl,
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "Specialist chemical peel treatment at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. DHA-licensed consultant dermatologists delivering skin-type-safe medical chemical peels across full formulation range with particular expertise for Fitzpatrick IV-VI.",
      "telephone": "+971 55 586 7466",
      "priceRange": "AED 400 - AED 20000",
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
      "medicalSpecialty": ["Dermatology", "Aesthetic Dermatology", "Chemical Peel Treatment", "Cosmetic Dermatology"],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Chemical Peel" },
        { "@type": "MedicalProcedure", "name": "Glycolic Acid Peel" },
        { "@type": "MedicalProcedure", "name": "Mandelic Acid Peel" },
        { "@type": "MedicalProcedure", "name": "Salicylic Acid Peel" },
        { "@type": "MedicalProcedure", "name": "TCA Peel" },
        { "@type": "MedicalProcedure", "name": "Jessner's Peel" },
        { "@type": "MedicalProcedure", "name": "Melasma-Specific Peel" },
        { "@type": "MedicalProcedure", "name": "Acne-Specific Peel" }
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Dubai Health Authority"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "800",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalProcedure",
          "name": "Chemical Peel",
          "procedureType": "https://schema.org/NoninvasiveProcedure",
          "howPerformed": "Controlled application of specific acid formulations to remove outer skin layers triggering skin renewal. Formulation and depth matched to patient skin type and concerns."
        },
        {
          "@type": "MedicalProcedure",
          "name": "Superficial Chemical Peel",
          "procedureType": "https://schema.org/NoninvasiveProcedure",
          "howPerformed": "Alpha-hydroxy acids (glycolic, mandelic, lactic) or beta-hydroxy acid (salicylic) formulations penetrating only epidermis. Safe across all Fitzpatrick skin types."
        },
        {
          "@type": "MedicalProcedure",
          "name": "Medium-Depth Chemical Peel",
          "procedureType": "https://schema.org/NoninvasiveProcedure",
          "howPerformed": "TCA-based or Jessner's peel formulations penetrating epidermis into papillary dermis. Careful patient selection primarily for Fitzpatrick I-III."
        },
        {
          "@type": "MedicalProcedure",
          "name": "Glycolic Acid Peel",
          "procedureType": "https://schema.org/NoninvasiveProcedure"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Mandelic Acid Peel",
          "procedureType": "https://schema.org/NoninvasiveProcedure"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Salicylic Acid Peel",
          "procedureType": "https://schema.org/NoninvasiveProcedure"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Chemical Peel Treatment Services in JVC Dubai",
      "provider": { "@id": `${currentUrl}#chemical-peel` },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "United Arab Emirates" }
      ],
      "serviceType": "Chemical Peel Skin Treatment",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Chemical Peel Services",
        "itemListElement": chemicalPeelPricing.services.map((service, index) => ({
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
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://vedaracare.ae/treatments/" },
        { "@type": "ListItem", "position": 3, "name": "Chemical Peel in JVC Dubai", "item": currentUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": chemicalPeelFAQ.faqs.map((faq) => ({
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
      "headline": "Chemical Peel Treatment at JVC Dubai — Skin-Type-Safe Medical Peels Guide",
      "image": "https://vedaracare.ae/images/chemical-peel-jvc-dubai-hero.jpg",
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
        { "@type": "MedicalProcedure", "name": "Chemical Peel" },
        { "@type": "MedicalProcedure", "name": "Superficial Chemical Peel" },
        { "@type": "MedicalProcedure", "name": "Medium-Depth Chemical Peel" }
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
        <title>Chemical Peel in JVC Dubai | Skin-Type-Safe Peels | Vedara Care</title>
        <meta name="description" content="Specialist chemical peel treatment at our JVC clinic, Dubai. DHA-licensed consultant dermatologists. Full range of peel formulations. Skin-type-safe expertise particularly for Fitzpatrick IV-VI. Walking distance from Circle Mall." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/treatments/chemical-peel-dubai/" />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
        <meta property="og:title" content="Chemical Peel in JVC Dubai — Skin-Type-Safe Medical Peels | Vedara Care" />
        <meta property="og:description" content="Specialist chemical peel treatment at our Jumeirah Village Circle clinic, Dubai. DHA-licensed consultant dermatologists delivering evidence-based standardised peel protocols across full range of formulations. Particular expertise for Fitzpatrick IV-VI skin types where wrong peel selection can produce hyperpigmentation worse than the original concern." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/chemical-peel-jvc-dubai.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chemical Peel in JVC Dubai — Skin-Type-Safe | Vedara Care" />
        <meta name="twitter:description" content="DHA-licensed consultant dermatologists delivering skin-type-safe chemical peels across full formulation range." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/chemical-peel-jvc-dubai.jpg" />
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
      <AyurvedaHero
        {...chemicalPeelHero}
      />

      <AyurvedaIntro
        {...chemicalPeelIntro}
      />

      <SciaticaTreatment
        data={chemicalPeelHowItWorks}
        showBorderLeft={false}
        rightContentStyle="peelDepthAndFitzpatrick"
        bgColor="bg-[#F0EBE3]"
      />
<SciaticaTypes
        {...chemicalPeelFormulations}
      />
      <ContentWithSidebar
        bgColor={chemicalPeelSelection.bgColor}
        label={chemicalPeelSelection.label}
        title={chemicalPeelSelection.title}
        description={chemicalPeelSelection.description}
        contentSections={chemicalPeelSelection.contentSections}
        sidebar={chemicalPeelSelection.sidebar}
      />

      <ContentWithSidebar
        bgColor={chemicalPeelRealisticExpectations.bgColor}
        cardBg={chemicalPeelRealisticExpectations.cardBg}
        label={chemicalPeelRealisticExpectations.label}
        title={chemicalPeelRealisticExpectations.title}
        intro={chemicalPeelRealisticExpectations.intro}
        phases={chemicalPeelRealisticExpectations.phases}
        footerNote={chemicalPeelRealisticExpectations.footerNote}
        bottomContent={chemicalPeelRealisticExpectations.bottomContent}
      />

      <TreatmentReviews
        bgColor={chemicalPeelPatientVoices.bgColor}
        cardBgColor={chemicalPeelPatientVoices.cardBg}
        statsBgColor="transparent"
        label={chemicalPeelPatientVoices.label}
        title={chemicalPeelPatientVoices.title}
        items={chemicalPeelPatientVoices.testimonials.map(t => ({
          quote: t.quote,
          author: t.attribution,
          details: t.treatment,
          details1: t.location
        }))}
        stats={chemicalPeelPatientVoices.stats.map(s => ({
          value: s.value,
          label: s.description
        }))}
        isDarkText={true}
        useKneeStyle={false}
      />

      <PhysiotherapyTeam
        bgColor={chemicalPeelTeam.bgColor}
        label={chemicalPeelTeam.label}
        title={chemicalPeelTeam.title}
        description={chemicalPeelTeam.description}
        team={chemicalPeelTeam.team}
        gridColumns={chemicalPeelTeam.gridColumns}
      />

      <ContentWithSidebar
        bgColor={chemicalPeelPricing.bgColor}
        label={chemicalPeelPricing.label}
        title={chemicalPeelPricing.title}
        services={chemicalPeelPricing.services}
        insuranceText={chemicalPeelPricing.insuranceText}
        insurances={chemicalPeelPricing.insurances}
      />

      <FAQ
        bgColor={chemicalPeelFAQ.bgColor}
        label={chemicalPeelFAQ.label}
        title={chemicalPeelFAQ.title}
        description={chemicalPeelFAQ.description}
        faqs={chemicalPeelFAQ.faqs}
        buttonText={chemicalPeelFAQ.buttonText}
        buttonHref={chemicalPeelFAQ.buttonHref}
        sidebarLinks={chemicalPeelFAQ.sidebarLinks}
      />

      <TreatmentLocation
        bgColor={chemicalPeelLocation.bgColor}
        label={chemicalPeelLocation.label}
        title={chemicalPeelLocation.title}
        address={chemicalPeelLocation.address}
        phone={chemicalPeelLocation.phone}
        email={chemicalPeelLocation.email}
        whatsapp={chemicalPeelLocation.whatsapp}
        whatsappMessage={chemicalPeelLocation.whatsappMessage}
        hours={chemicalPeelLocation.hours}
        landmarks={chemicalPeelLocation.landmarks}
        description={chemicalPeelLocation.description}
        buttonText={chemicalPeelLocation.buttonText}
      />

      <FinalCTA
        {...chemicalPeelCTA}
      />

      <RelatedPages
        {...chemicalPeelRelatedPages}
      />
    </>
  );
};

export default ChemicalPeelTreatment;