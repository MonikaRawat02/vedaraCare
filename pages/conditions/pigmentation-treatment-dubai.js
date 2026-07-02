
import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import { HowThisPageWorksSection, PigmentationConcernSelector, WhatToExpectSection, PatientPreferencesSection, PigmentationPricingSection } from '../../components/ayurveda/PatientPreferencesSection';
import ManualTherapySession from '../../components/ayurveda/ManualTherapySession';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import {
  pigmentationTreatmentHero,
  pigmentationHowItWorks,
  pigmentationConcernSelector,
  pigmentationWhenToSeeSpecialist,
  pigmentationWhatToExpect,
  pigmentationPatientPreferences,
  pigmentationPricing,
  pigmentationFaqs,
  pigmentationTreatmentLocation,
  pigmentationCTA,
  pigmentationRelatedPages
} from '../../data/pigmentationTreatmentData';

const PigmentationTreatmentDubai = () => {
  const currentUrl = "https://vedaracare.ae/conditions/pigmentation-treatment-dubai/";
  const publishedDate = "2026-06-30T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${currentUrl}#webpage`,
      "name": "Pigmentation Treatment in JVC Dubai — Patient-Guided Navigation Hub",
      "alternateName": ["Pigmentation Treatment Dubai", "Pigmentation Treatment JVC", "Skin Pigmentation Treatment Dubai"],
      "url": currentUrl,
      "description": "Patient-guided pigmentation navigation hub helping patients identify pigmentation concerns and find appropriate care pathways at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai.",
      "isPartOf": {
        "@type": "WebSite",
        "url": "https://vedaracare.ae/",
        "name": "Vedara Care Polyclinic"
      },
      "about": [
        {"@id": "https://vedaracare.ae/conditions/melasma-treatment-dubai/#melasma"},
        {"@id": "https://vedaracare.ae/dermatology-clinic-jvc/#dermatology"}
      ],
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://vedaracare.ae/images/pigmentation-treatment-jvc-dubai-hero.jpg"
      },
      "breadcrumb": {"@id": `${currentUrl}#breadcrumb`}
    },
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": `${currentUrl}#pigmentation`,
      "name": "Vedara Care Pigmentation Treatment JVC",
      "alternateName": ["Vedara Pigmentation JVC", "Vedara Pigmentation Specialist Dubai", "Vedara Hyperpigmentation Treatment"],
      "url": currentUrl,
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "Specialist pigmentation treatment at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. DHA-licensed consultant dermatologists treating all pigmentation conditions including melasma, post-inflammatory hyperpigmentation, age spots, sun damage, body pigmentation, vitiligo. Expertise across all Fitzpatrick skin types. Walking distance from Circle Mall.",
      "telephone": "+971 55 586 7466",
      "priceRange": "AED 400 - AED 18,000",
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
        {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "City", "name": "Dubai"},
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
        "Pigmentation Disorders",
        "Medical Dermatology",
        "Cosmetic Dermatology"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Melasma Treatment"},
        {"@type": "MedicalProcedure", "name": "Post-Inflammatory Hyperpigmentation Treatment"},
        {"@type": "MedicalProcedure", "name": "Age Spot Treatment"},
        {"@type": "MedicalProcedure", "name": "Sun Damage Treatment"},
        {"@type": "MedicalProcedure", "name": "Body Pigmentation Treatment"},
        {"@type": "MedicalProcedure", "name": "Vitiligo Treatment"},
        {"@type": "MedicalProcedure", "name": "Pigmentation Assessment"},
        {"@type": "MedicalProcedure", "name": "Wood's Lamp Examination"},
        {"@type": "MedicalProcedure", "name": "Dermoscopy"}
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Dubai Health Authority"
      },
      "sameAs": ["https://vedaracare.ae/conditions/melasma-treatment-dubai/"],
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
      "@type": "ItemList",
      "name": "Pigmentation Type Categories at Vedara Care",
      "description": "Common pigmentation types we help patients identify and route to appropriate care.",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Melasma — Chronic Facial Pigmentation"},
        {"@type": "ListItem", "position": 2, "name": "Post-Inflammatory Hyperpigmentation"},
        {"@type": "ListItem", "position": 3, "name": "Age Spots and Sun Spots"},
        {"@type": "ListItem", "position": 4, "name": "Sun Damage and Photoaging Pigmentation"},
        {"@type": "ListItem", "position": 5, "name": "Body Pigmentation"},
        {"@type": "ListItem", "position": 6, "name": "Vitiligo and Hypopigmentation"},
        {"@type": "ListItem", "position": 7, "name": "Drug-Induced or Post-Procedural Pigmentation"},
        {"@type": "ListItem", "position": 8, "name": "Multiple or Unclear Pigmentation Concerns"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${currentUrl}#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://vedaracare.ae/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://vedaracare.ae/conditions/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Pigmentation Treatment in JVC Dubai",
          "item": currentUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": pigmentationFaqs.faqs.map(faq => ({
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
      "@type": ["Organization", "MedicalOrganization"],
      "@id": "https://vedaracare.ae/#organization",
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vedaracare.ae/logo.png"
      },
      "sameAs": [
        "https://www.facebook.com/vedaracare",
        "https://www.instagram.com/vedaracare",
        "https://www.linkedin.com/company/vedaracare"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971 55 586 7466",
        "contactType": "Customer Service",
        "areaServed": "AE",
        "availableLanguage": ["English", "Arabic", "Hindi", "Urdu"]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalSpecialty",
      "name": "Pigmentation Treatment"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Hyperpigmentation"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Melasma",
      "sameAs": "https://vedaracare.ae/conditions/melasma-treatment-dubai/"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Post-Inflammatory Hyperpigmentation",
      "alternateName": ["PIH"]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Solar Lentigines",
      "alternateName": ["Age Spots", "Sun Spots"]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Sun Damage"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Body Pigmentation"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Vitiligo"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Hypopigmentation"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Drug-Induced Pigmentation"
    },
    {
      "@context": "https://schema.org",
      "@type": "HealthcareService",
      "name": "Patient-Guided Care"
    },
    {
      "@context": "https://schema.org",
      "@type": "AnatomicalStructure",
      "name": "Melanocyte"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalSubstance",
      "name": "Melanin"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalAssessmentClassification",
      "name": "Fitzpatrick Skin Type I-VI"
    },
    {
      "@context": "https://schema.org",
      "@type": "Credential",
      "name": "DHA-Licensed Consultant Dermatologist"
    },
    {
      "@context": "https://schema.org",
      "@type": "GovernmentOrganization",
      "name": "Dubai Health Authority",
      "alternateName": ["DHA"]
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Circle Mall"
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "FIVE Jumeirah Village"
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "JSS Private School"
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Sheikh Mohammed Bin Zayed Road"
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Al Khail Road"
    }
  ];

  return (
    <>
      <Head>
        <title>Pigmentation Treatment in JVC Dubai | All Types | Vedara Care</title>
        <meta name="description" content="Not sure what type of pigmentation you have? Our JVC clinic in Dubai helps you identify and treat all pigmentation concerns — melasma, post-inflammatory hyperpigmentation, age spots, body pigmentation. DHA-licensed consultant dermatologists. All skin types." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow" />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/conditions/pigmentation-treatment-dubai/" />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
        <meta property="og:title" content="Pigmentation Treatment in JVC Dubai — All Types of Pigmentation Care | Vedara" />
        <meta property="og:description" content="Patient-guided pigmentation hub at our Jumeirah Village Circle clinic, Dubai. Identify your specific pigmentation type from melasma to post-inflammatory hyperpigmentation to age spots to body pigmentation to vitiligo. DHA-licensed consultant dermatologists. Expertise across all Fitzpatrick skin types." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/pigmentation-treatment-jvc-dubai.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pigmentation Treatment in JVC Dubai — All Types | Vedara Care" />
        <meta name="twitter:description" content="DHA-licensed consultant dermatologists treating all pigmentation types. Patient-guided navigation. Walking distance from Circle Mall." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/pigmentation-treatment-jvc-dubai.jpg" />
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <AyurvedaHero
        {...pigmentationTreatmentHero}
      />

      <HowThisPageWorksSection
        {...pigmentationHowItWorks}
      />

      <PigmentationConcernSelector
        {...pigmentationConcernSelector}
      />

      <ManualTherapySession
        bgColor={pigmentationWhenToSeeSpecialist.bgColor}
        cardColor={pigmentationWhenToSeeSpecialist.cardColor}
        label={pigmentationWhenToSeeSpecialist.label}
        title={pigmentationWhenToSeeSpecialist.title}
        subtitle={pigmentationWhenToSeeSpecialist.description}
        sections={pigmentationWhenToSeeSpecialist.sections}
        safetyCard={{
          label: pigmentationWhenToSeeSpecialist.quickGuide.label,
          safetyStandardsLabel: pigmentationWhenToSeeSpecialist.quickGuide.sections[0].label,
          safetyStandards: pigmentationWhenToSeeSpecialist.quickGuide.sections[0].items,
          contraindicationsLabel: pigmentationWhenToSeeSpecialist.quickGuide.sections[1].label,
          contraindications: pigmentationWhenToSeeSpecialist.quickGuide.sections[1].items,
          sideEffectsLabel: pigmentationWhenToSeeSpecialist.quickGuide.sections[2].label,
          sideEffects: pigmentationWhenToSeeSpecialist.quickGuide.sections[2].items,
          additionalSectionLabel: pigmentationWhenToSeeSpecialist.quickGuide.sections[3].label,
          additionalSectionItems: pigmentationWhenToSeeSpecialist.quickGuide.sections[3].items,
          buttonText: pigmentationWhenToSeeSpecialist.quickGuide.buttonText,
          buttonHref: pigmentationWhenToSeeSpecialist.quickGuide.buttonHref
        }}
      />

      <WhatToExpectSection
        {...pigmentationWhatToExpect}
      />

      <PatientPreferencesSection
        {...pigmentationPatientPreferences}
      />

      <PigmentationPricingSection
        {...pigmentationPricing}
      />

      <FAQ
        bgColor={pigmentationFaqs.bgColor}
        label={pigmentationFaqs.label}
        title={pigmentationFaqs.title}
        description={pigmentationFaqs.description}
        faqs={pigmentationFaqs.faqs}
        buttonText={pigmentationFaqs.primaryCtaText}
        buttonHref={pigmentationFaqs.primaryCtaHref}
        secondaryLinkText={pigmentationFaqs.secondaryCtaText}
        secondaryLinkHref={pigmentationFaqs.secondaryCtaHref}
        sidebarLinks={pigmentationFaqs.sidebarLinks}
      />

      <TreatmentLocation
        {...pigmentationTreatmentLocation}
      />

      <FinalCTA
        {...pigmentationCTA}
      />

      <RelatedPages
        {...pigmentationRelatedPages}
      />
    </>
  );
};

export default PigmentationTreatmentDubai;
