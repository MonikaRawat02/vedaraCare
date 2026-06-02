import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import ArthritisTypes from '../../components/ayurveda/ArthritisTypes';
import ArthritisPillars from '../../components/ayurveda/ArthritisPillars';
import ClinicalBoundaries from '../../components/ayurveda/ClinicalBoundaries';
import TreatmentProtocol from '../../components/ayurveda/Protocols';
import OutcomeRanges from '../../components/ayurveda/OutcomeRanges';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import CTA from '../../components/home/CTA';
import FAQ from '../../components/home/FAQ';


import {
  thyroidHero,
  thyroidIntro,
  thyroidHonestOpening,
  thyroidPatterns,
  thyroidHashimoto,
  thyroidPillars,
  thyroidProtocol,
  thyroidOutcomeRanges,
  thyroidBoundaries,
  thyroidFaqs,
  thyroidCTA,
  thyroidLocation,
  thyroidRelatedPages
} from '../../data/thyroidData';

const AyurvedaThyroid = () => {
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "@id": "https://vedaracare.ae/conditions/thyroid-ayurveda-dubai/#condition",
      "name": "Thyroid Disorders",
      "alternateName": ["Thyroid Disease", "Hashimoto's Thyroiditis", "Hypothyroidism", "Hyperthyroidism", "Galaganda", "Gandamala"],
      "code": [
        { "@type": "MedicalCode", "code": "E03", "codingSystem": "ICD-10" },
        { "@type": "MedicalCode", "code": "E06.3", "codingSystem": "ICD-10" },
        { "@type": "MedicalCode", "code": "E05", "codingSystem": "ICD-10" }
      ],
      "associatedAnatomy": [
        { "@type": "AnatomicalStructure", "name": "Thyroid gland" },
        { "@type": "AnatomicalStructure", "name": "Endocrine system" },
        { "@type": "AnatomicalStructure", "name": "Hypothalamic-pituitary-thyroid axis" }
      ],
      "signOrSymptom": [
        { "@type": "MedicalSymptom", "name": "Fatigue" },
        { "@type": "MedicalSymptom", "name": "Weight changes" },
        { "@type": "MedicalSymptom", "name": "Hair loss" },
        { "@type": "MedicalSymptom", "name": "Mood changes" },
        { "@type": "MedicalSymptom", "name": "Cold intolerance" },
        { "@type": "MedicalSymptom", "name": "Heat intolerance" },
        { "@type": "MedicalSymptom", "name": "Constipation or diarrhoea" },
        { "@type": "MedicalSymptom", "name": "Menstrual irregularities" }
      ],
      "possibleTreatment": [
        { "@type": "MedicalProcedure", "name": "Panchakarma", "url": "https://vedaracare.ae/treatments/panchakarma-dubai/" },
        { "@type": "MedicalTherapy", "name": "Kanchanara Guggulu" },
        { "@type": "MedicalTherapy", "name": "Varunadi Kashayam" },
        { "@type": "MedicalTherapy", "name": "Adjunctive Ayurvedic care" },
        { "@type": "MedicalTherapy", "name": "Dietary regulation" }
      ],
      "riskFactor": [
        { "@type": "MedicalRiskFactor", "name": "Female sex" },
        { "@type": "MedicalRiskFactor", "name": "Family history of thyroid disease" },
        { "@type": "MedicalRiskFactor", "name": "Autoimmune disease history" },
        { "@type": "MedicalRiskFactor", "name": "Postpartum period" },
        { "@type": "MedicalRiskFactor", "name": "Iodine deficiency or excess" },
        { "@type": "MedicalRiskFactor", "name": "Radiation exposure" }
      ]
    },
    // Subtypes
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Hashimoto's Thyroiditis",
      "alternateName": ["Autoimmune Hypothyroidism", "Chronic Lymphocytic Thyroiditis"],
      "code": { "@type": "MedicalCode", "code": "E06.3", "codingSystem": "ICD-10" },
      "signOrSymptom": [
        { "@type": "MedicalSymptom", "name": "Elevated TSH" },
        { "@type": "MedicalSymptom", "name": "Low free T4" },
        { "@type": "MedicalSymptom", "name": "Elevated anti-TPO antibodies" },
        { "@type": "MedicalSymptom", "name": "Elevated anti-Tg antibodies" }
      ],
      "possibleTreatment": [
        { "@type": "MedicalTherapy", "name": "Levothyroxine (conventional)" },
        { "@type": "MedicalTherapy", "name": "Adjunctive Ayurvedic treatment" },
        { "@type": "MedicalTherapy", "name": "Kanchanara Guggulu" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": "https://vedaracare.ae/conditions/thyroid-ayurveda-dubai/#webpage",
      "name": "Ayurveda for Thyroid in Dubai",
      "url": "https://vedaracare.ae/conditions/thyroid-ayurveda-dubai/",
      "about": { "@id": "https://vedaracare.ae/conditions/thyroid-ayurveda-dubai/#condition" },
      "audience": {
        "@type": "PatientAudience",
        "geographicArea": { "@type": "Place", "name": "Dubai, United Arab Emirates" }
      },
      "lastReviewed": "2026-06-02",
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. Priya Menon",
        "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
      },
      "primaryImageOfPage": "https://vedaracare.ae/images/thyroid-ayurveda-dubai-hero.webp"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Ayurvedic Thyroid Treatment Programmes",
      "provider": { "@id": "https://vedaracare.ae/#organization" },
      "areaServed": [
        { "@type": "Place", "name": "Jumeirah Village Circle" },
        { "@type": "Place", "name": "Jumeirah Village Triangle" },
        { "@type": "Place", "name": "Al Barsha South" },
        { "@type": "Place", "name": "Dubai Sports City" },
        { "@type": "Place", "name": "Motor City" },
        { "@type": "Place", "name": "Arjan" },
        { "@type": "Place", "name": "Dubai Hills Estate" },
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "United Arab Emirates" }
      ],
      "serviceType": "Adjunctive Ayurvedic Treatment for Thyroid Disorders",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Thyroid Programmes",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Thyroid Initial Assessment",
            "priceCurrency": "AED",
            "price": "350",
            "description": "60-75 minute consultation with BAMS physician, bloodwork review, condition classification, endocrinologist coordination plan"
          },
          {
            "@type": "Offer",
            "name": "Standard 6-Month Thyroid Programme",
            "priceCurrency": "AED",
            "price": "12000",
            "description": "Six-month structured Ayurvedic adjunctive thyroid treatment alongside endocrinology"
          },
          {
            "@type": "Offer",
            "name": "Comprehensive 9-Month Hashimoto's Programme",
            "priceCurrency": "AED",
            "price": "18000",
            "description": "Nine-month programme for Hashimoto's thyroiditis with antibody monitoring and integrated endocrinology coordination"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Ayurveda for Thyroid in Dubai — A Complete Clinical Guide",
      "image": "https://vedaracare.ae/images/thyroid-ayurveda-dubai-hero.webp",
      "datePublished": "2026-06-02",
      "dateModified": "2026-06-02",
      "author": {
        "@type": "Physician",
        "name": "Dr. Priya Menon",
        "url": "https://vedaracare.ae/doctors/dr-priya-menon-ayurveda/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic",
        "logo": { "@type": "ImageObject", "url": "https://vedaracare.ae/logo.png" }
      },
      "mainEntityOfPage": "https://vedaracare.ae/conditions/thyroid-ayurveda-dubai/"
    },
    {
      "@context": "https://schema.org",
      "@id": "https://vedaracare.ae/#organization",
      "@type": "MedicalClinic",
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": "https://vedaracare.ae/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "District 13, Jumeirah Village Circle",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/" },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Ayurveda for Thyroid in Dubai",
          "item": "https://vedaracare.ae/conditions/thyroid-ayurveda-dubai/"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": thyroidFaqs.faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer
                    }
                  }))
    }
  ];

  return (
    <>
      <Head>
        <title>Ayurveda for Thyroid in Dubai | JVC Clinic | Vedara Care</title>
        <meta
          name="description"
          content="DHA-licensed Ayurvedic thyroid treatment at our JVC clinic, Dubai — adjunctive care for Hashimoto's, hypothyroid, Graves'. Always alongside your endocrinologist. Never replacement of medication."
        />
        <link rel="canonical" href="https://vedaracare.ae/conditions/thyroid-ayurveda-dubai/" />
        <link
          rel="alternate"
          hreflang="en-AE"
          href="https://vedaracare.ae/conditions/thyroid-ayurveda-dubai/"
        />
        <link
          rel="alternate"
          hreflang="ar-AE"
          href="https://vedaracare.ae/ar/conditions/thyroid-ayurveda-dubai/"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://vedaracare.ae/conditions/thyroid-ayurveda-dubai/"
        />

        <meta
          property="og:title"
          content="Ayurveda for Thyroid in Dubai — Adjunctive Treatment at Our JVC Clinic"
        />
        <meta
          property="og:description"
          content="DHA-licensed Ayurvedic thyroid treatment at our Jumeirah Village Circle clinic. Adjunctive care for Hashimoto's, hypothyroid, Graves' — alongside endocrinology, never replacement of medication."
        />
        <meta
          property="og:image"
          content="https://vedaracare.ae/og-images/thyroid-ayurveda-dubai-hero.webp"
        />
        <meta property="og:url" content="https://vedaracare.ae/conditions/thyroid-ayurveda-dubai/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content="2026-06-02T09:00:00Z" />
        <meta property="article:modified_time" content="2026-06-02T09:00:00Z" />
        <meta property="article:author" content="Dr. Priya Menon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>

      <main>
        <AyurvedaHero {...thyroidHero} 
        bgColor="bg-[#F5F5DC]"
        />
        
        <AyurvedaIntro {...thyroidIntro} />

        {/* Honest Opening */}
        <ClinicalBoundaries 
          {...thyroidHonestOpening}
          bgColor="bg-[#F5F1EB]"
        />

        <ArthritisTypes 
          {...thyroidPatterns}
          bgColor="bg-white"
          cardBg="bg-[#F5F5DC]"
        />

        <TreatmentMechanism 
          {...thyroidHashimoto}
          bgColor="bg-[#F5F5DC]"
        />

        <ArthritisPillars 
          {...thyroidPillars}
          bgColor="bg-white"
          cardBg="bg-[#F5F5DC]"
        />

        <TreatmentProtocol 
          {...thyroidProtocol}
          bgColor="bg-[#F4F0E8]"
        />

        <OutcomeRanges 
          {...thyroidOutcomeRanges}
          bgColor="bg-white"
        />

        <ClinicalBoundaries 
          {...thyroidBoundaries}
          bgColor="bg-[#F5F5DC]"
        />
        <FAQ 
          {...thyroidFaqs} 
          bgColor="bg-white"
        />

        <CTA 
          {...thyroidCTA} 
        />
          <RelatedPages 
          {...thyroidRelatedPages}
          bgColor="bg-[#F4F0E8]"
        />
      </main>
    </>
  );
};

export default AyurvedaThyroid;
