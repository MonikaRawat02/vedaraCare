
import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import { SciaticaTreatment, SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import {
  melasmaTreatmentHero,
  melasmaTreatmentIntro,
  melasmaTreatmentUnderstanding,
  melasmaTreatmentTypes,
  melasmaTreatmentOptions,
  melasmaTreatmentTimeline,
  melasmaTreatmentReviews,
  melasmaTreatmentTeam,
  melasmaTreatmentPricing,
  melasmaTreatmentFaqs,
  melasmaTreatmentLocation,
  melasmaTreatmentCTA,
  melasmaTreatmentRelatedPages
} from '../../data/melasmaTreatmentData';

const MelasmaTreatmentDubai = () => {
  const currentUrl = "https://vedaracare.ae/conditions/melasma-treatment-dubai/";
  const publishedDate = "2026-06-30T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": `${currentUrl}#melasma`,
      "name": "Vedara Care Melasma Treatment JVC",
      "alternateName": ["Vedara Melasma JVC", "Vedara Pigmentation Dubai", "Vedara Melasma Specialist JVC"],
      "url": currentUrl,
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "Specialist melasma treatment at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. DHA-licensed consultant dermatologists treating melasma across all Fitzpatrick skin types. Comprehensive multi-modal treatment including topical regimens, chemical peels, selective laser treatments, oral tranexamic acid, and rigorous sun protection. Walking distance from Circle Mall.",
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
      "medicalSpecialty": [
        "Dermatology",
        "Melasma Treatment",
        "Pigmentation Disorders",
        "Medical Dermatology"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Melasma Treatment" },
        { "@type": "MedicalProcedure", "name": "Pregnancy Melasma Treatment" },
        { "@type": "MedicalProcedure", "name": "Hormonal Melasma Treatment" },
        { "@type": "MedicalProcedure", "name": "Topical Melasma Regimen" },
        { "@type": "MedicalProcedure", "name": "Chemical Peel for Melasma" },
        { "@type": "MedicalProcedure", "name": "Q-Switched Laser for Melasma" },
        { "@type": "MedicalProcedure", "name": "Pico-Second Laser Treatment" },
        { "@type": "MedicalProcedure", "name": "Oral Tranexamic Acid Therapy" },
        { "@type": "MedicalProcedure", "name": "Microneedling for Pigmentation" },
        { "@type": "MedicalProcedure", "name": "Wood's Lamp Examination" },
        { "@type": "HealthcareService", "name": "Sun Protection" },
        { "@type": "MedicalProcedure", "name": "Topical Melasma Treatment" }
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
      "@type": "MedicalCondition",
      "name": "Melasma",
      "alternateName": ["Chloasma", "Mask of Pregnancy", "Pregnancy Mask"],
      "code": { "@type": "MedicalCode", "code": "L81.1", "codingSystem": "ICD-10" },
      "possibleTreatment": [
        { "@type": "MedicalProcedure", "name": "Topical Hydroquinone" },
        { "@type": "MedicalProcedure", "name": "Topical Tranexamic Acid" },
        { "@type": "MedicalProcedure", "name": "Oral Tranexamic Acid" },
        { "@type": "MedicalProcedure", "name": "Chemical Peel" },
        { "@type": "MedicalProcedure", "name": "Q-Switched Laser" },
        { "@type": "MedicalProcedure", "name": "Pico-Second Laser" },
        { "@type": "MedicalProcedure", "name": "Microneedling" },
        { "@type": "HealthcareService", "name": "Sun Protection" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Epidermal Melasma",
      "alternateName": ["Superficial Melasma"]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Dermal Melasma",
      "alternateName": ["Deep Melasma"]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Mixed Melasma"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Pregnancy-Induced Melasma",
      "alternateName": ["Chloasma Gravidarum"]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Oral Contraceptive-Associated Melasma"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Perimenopausal Melasma"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Sun-Aggravated Melasma"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Hyperpigmentation",
      "code": { "@type": "MedicalCode", "code": "L81", "codingSystem": "ICD-10" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Drug",
      "name": "Hydroquinone"
    },
    {
      "@context": "https://schema.org",
      "@type": "Drug",
      "name": "Tranexamic Acid"
    },
    {
      "@context": "https://schema.org",
      "@type": "Drug",
      "name": "Cysteamine"
    },
    {
      "@context": "https://schema.org",
      "@type": "DrugClass",
      "name": "Retinoids"
    },
    {
      "@context": "https://schema.org",
      "@type": "Drug",
      "name": "Azelaic Acid"
    },
    {
      "@context": "https://schema.org",
      "@type": "Drug",
      "name": "Kojic Acid"
    },
    {
      "@context": "https://schema.org",
      "@type": "Drug",
      "name": "Ascorbic Acid",
      "alternateName": ["Vitamin C"]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalDevice",
      "name": "Q-Switched Nd:YAG Laser"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalDevice",
      "name": "Pico-Second Laser"
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Broad-Spectrum Sunscreen"
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Tinted Iron Oxide Sunscreen"
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
      "@type": "AnatomicalStructure",
      "name": "Melanosome"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalAssessmentClassification",
      "name": "Fitzpatrick Skin Type I-VI"
    },
    {
      "@context": "https://schema.org",
      "@type": "EducationalCredential",
      "name": "MD",
      "alternateName": ["Doctor of Medicine"]
    },
    {
      "@context": "https://schema.org",
      "@type": "OccupationalCategory",
      "name": "Consultant Dermatologist"
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
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Melasma Treatment Services at JVC Dubai",
      "provider": { "@id": `${currentUrl}#melasma` },
      "areaServed": [
        { "@type": "Place", "name": "Jumeirah Village Circle" },
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "United Arab Emirates" }
      ],
      "serviceType": "Melasma and Pigmentation Treatment",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Melasma Treatment Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Initial Melasma Consultation with Wood's Lamp Examination",
            "priceCurrency": "AED",
            "price": "650",
            "description": "60–75 minute comprehensive consultation with melasma depth assessment"
          },
          {
            "@type": "Offer",
            "name": "Follow-up Consultation",
            "priceCurrency": "AED",
            "price": "350",
            "description": "Treatment monitoring and adjustment consultation"
          },
          {
            "@type": "Offer",
            "name": "Treatment Monitoring Visit with Photography",
            "priceCurrency": "AED",
            "price": "450",
            "description": "Standardised photographic monitoring of treatment progress"
          },
          {
            "@type": "Offer",
            "name": "Personalised Topical Melasma Regimen",
            "priceCurrency": "AED",
            "price": "350",
            "description": "Prescription topical regimen calibrated to skin type and melasma type"
          },
          {
            "@type": "Offer",
            "name": "Oral Tranexamic Acid Treatment (3 Months)",
            "priceCurrency": "AED",
            "price": "850",
            "description": "Monthly monitoring during oral tranexamic acid treatment"
          },
          {
            "@type": "Offer",
            "name": "Superficial Chemical Peel for Melasma",
            "priceCurrency": "AED",
            "price": "950",
            "description": "Gentle chemical peel calibrated to skin type"
          },
          {
            "@type": "Offer",
            "name": "Q-Switched Laser Treatment (for Melasma)",
            "priceCurrency": "AED",
            "price": "1850",
            "description": "Selective Q-switched Nd:YAG laser treatment per session"
          },
          {
            "@type": "Offer",
            "name": "Microneedling with Topical Agents",
            "priceCurrency": "AED",
            "price": "1200",
            "description": "Conservative microneedling combined with pigmentation-targeting topicals"
          },
          {
            "@type": "Offer",
            "name": "Comprehensive 6-Month Melasma Programme",
            "priceCurrency": "AED",
            "price": "8500",
            "description": "Structured 6-month melasma treatment programme combining multiple modalities"
          },
          {
            "@type": "Offer",
            "name": "Maintenance Treatment (6 Months)",
            "priceCurrency": "AED",
            "price": "3500",
            "description": "Long-term maintenance treatment to prevent recurrence"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
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
          "name": "Melasma Treatment in JVC Dubai",
          "item": currentUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": melasmaTreatmentFaqs.faqs.map(faq => ({
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
      "headline": "Melasma Treatment at JVC Dubai — Specialist Pigmentation Care Guide",
      "image": "https://vedaracare.ae/images/melasma-treatment-jvc-dubai-hero.jpg",
      "datePublished": publishedDate,
      "dateModified": modifiedDate,
      "author": {
        "@type": "Physician",
        "name": "Dr. Layla Al-Rashid, MD",
        "url": "https://vedaracare.ae/dermatologists/dr-layla-al-rashid/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic",
        "logo": {
          "@type": "ImageObject",
          "url": "https://vedaracare.ae/logo.png"
        }
      },
      "about": [
        { "@type": "MedicalCondition", "name": "Melasma" },
        { "@type": "MedicalCondition", "name": "Chloasma" },
        { "@type": "MedicalCondition", "name": "Hyperpigmentation" },
        { "@type": "MedicalCondition", "name": "Pregnancy-Induced Melasma" }
      ],
      "mainEntityOfPage": currentUrl
    },
    ...melasmaTreatmentTeam.team.map(dr => ({
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": dr.name,
      "url": `https://vedaracare.ae${dr.link}`,
      "image": `https://vedaracare.ae${dr.image}`,
      "medicalSpecialty": dr.specialties,
      "hasCredential": [
        "MD",
        "Dermatology Board Certification",
        "DHA-Licensed Consultant Dermatologist"
      ],
      "knowsAbout": [
        "Melasma",
        "Pigmentation Disorders",
        "Fitzpatrick Skin Type Treatment",
        "Q-Switched Laser",
        "Pico-Second Laser",
        "Chemical Peels",
        "Topical Pigmentation Treatment"
      ],
      "knowsLanguage": dr.languages[0].split(", "),
      "worksFor": { "@id": "https://vedaracare.ae/#organization" }
    })),
    {
      "@context": "https://schema.org",
      "@id": "https://vedaracare.ae/#organization",
      "@type": ["Organization", "MedicalOrganization"],
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
      "@type": "InsuranceCompany",
      "name": "Daman"
    },
    {
      "@context": "https://schema.org",
      "@type": "InsuranceCompany",
      "name": "AXA"
    },
    {
      "@context": "https://schema.org",
      "@type": "InsuranceCompany",
      "name": "Allianz"
    },
    {
      "@context": "https://schema.org",
      "@type": "InsuranceCompany",
      "name": "Oman Insurance"
    },
    {
      "@context": "https://schema.org",
      "@type": "InsuranceCompany",
      "name": "Now Health"
    },
    {
      "@context": "https://schema.org",
      "@type": "InsuranceCompany",
      "name": "Bupa"
    },
    {
      "@context": "https://schema.org",
      "@type": "InsuranceCompany",
      "name": "MetLife"
    }
  ];

  return (
    <>
      <Head>
        <title>Melasma Treatment in JVC Dubai | Specialist Pigmentation | Vedara</title>
        <meta name="description" content="Specialist melasma treatment at our JVC clinic in Dubai. DHA-licensed consultant dermatologists. All Fitzpatrick skin types I-VI. Multi-modal treatment combining topical, peels, lasers, oral therapy. Walking distance from Circle Mall." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow" />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/conditions/melasma-treatment-dubai/" />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
        <meta property="og:title" content="Melasma Treatment in JVC Dubai — Specialist Pigmentation Care | Vedara Care" />
        <meta property="og:description" content="Specialist melasma treatment at our Jumeirah Village Circle clinic, Dubai. DHA-licensed consultant dermatologists treating pregnancy-induced melasma, hormonal melasma, sun-aggravated melasma across all Fitzpatrick skin types I-VI. Multi-modal evidence-based treatment combining topical regimens, chemical peels, specific laser treatments, oral tranexamic acid, and rigorous sun protection." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/melasma-treatment-jvc-dubai.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Melasma Treatment in JVC Dubai — Specialist Pigmentation | Vedara Care" />
        <meta name="twitter:description" content="DHA-licensed consultant dermatologists treating melasma across all Fitzpatrick skin types. Multi-modal evidence-based treatment. Walking distance from Circle Mall." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/melasma-treatment-jvc-dubai.jpg" />
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <AyurvedaHero
        {...melasmaTreatmentHero}
      />

      <AyurvedaIntro
        {...melasmaTreatmentIntro}
      />

      <SciaticaTreatment
        data={melasmaTreatmentUnderstanding}
        showBorderLeft={false}
        rightContentStyle="hairCycle"
        bgColor="bg-[#F0EBE3]"
        showStepNumbers={false}
      />

      <SciaticaTypes
        bgColor={melasmaTreatmentTypes.bgColor}
        cardBg={melasmaTreatmentTypes.cardBg}
        label={melasmaTreatmentTypes.label}
        title={melasmaTreatmentTypes.title}
        description={melasmaTreatmentTypes.description}
        types={melasmaTreatmentTypes.types}
        footer={melasmaTreatmentTypes.footer}
        gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        typicalSignsLabel="TYPICAL PRESENTATION:"
        borderPosition="left"
      />

      <ContentWithSidebar
        bgColor={melasmaTreatmentOptions.bgColor}
        label={melasmaTreatmentOptions.label}
        title={melasmaTreatmentOptions.title}
        contentSections={melasmaTreatmentOptions.contentSections}
        sidebar={melasmaTreatmentOptions.sidebar}
      />

      <ContentWithSidebar
        bgColor={melasmaTreatmentTimeline.bgColor}
        cardBg={melasmaTreatmentTimeline.cardBg}
        label={melasmaTreatmentTimeline.label}
        title={melasmaTreatmentTimeline.title}
        intro={melasmaTreatmentTimeline.intro}
        phases={melasmaTreatmentTimeline.phases}
        footerNote={melasmaTreatmentTimeline.footerNote}
      />

      <TreatmentReviews
        {...melasmaTreatmentReviews}
        bgColor={melasmaTreatmentReviews.bgColor}
        useKneeStyle={melasmaTreatmentReviews.useKneeStyle}
      />

      <PhysiotherapyTeam
        bgColor={melasmaTreatmentTeam.bgColor}
        label={melasmaTreatmentTeam.label}
        title={melasmaTreatmentTeam.title}
        description={melasmaTreatmentTeam.description}
        members={melasmaTreatmentTeam.team}
        gridColumns="lg:grid-cols-3"
      />

      <ContentWithSidebar
        bgColor={melasmaTreatmentPricing.bgColor}
        label={melasmaTreatmentPricing.label}
        title={melasmaTreatmentPricing.title}
        services={melasmaTreatmentPricing.services}
        insuranceText={melasmaTreatmentPricing.insuranceText}
        insurances={melasmaTreatmentPricing.insurances}
      />

      <FAQ
        bgColor={melasmaTreatmentFaqs.bgColor}
        label={melasmaTreatmentFaqs.label}
        title={melasmaTreatmentFaqs.title}
        description={melasmaTreatmentFaqs.description}
        faqs={melasmaTreatmentFaqs.faqs}
        buttonText={melasmaTreatmentFaqs.primaryCtaText}
        buttonHref={melasmaTreatmentFaqs.primaryCtaHref}
        secondaryLinkText={melasmaTreatmentFaqs.secondaryCtaText}
        secondaryLinkHref={melasmaTreatmentFaqs.secondaryCtaHref}
        sidebarLinks={melasmaTreatmentFaqs.sidebarLinks}
      />

      <TreatmentLocation {...melasmaTreatmentLocation} />

      <FinalCTA
        {...melasmaTreatmentCTA}
      />

      <RelatedPages
        {...melasmaTreatmentRelatedPages}
      />
    </>
  );
};

export default MelasmaTreatmentDubai;
