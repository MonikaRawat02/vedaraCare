import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import ArthritisTypes from '../../components/ayurveda/ArthritisTypes';
import ArthritisPillars from '../../components/ayurveda/ArthritisPillars';
import ClinicalBoundaries from '../../components/ayurveda/ClinicalBoundaries';
import TreatmentProtocol from '../../components/ayurveda/Protocols';
import OutcomeRanges from '../../components/ayurveda/OutcomeRanges';
import PositioningStatement from '../../components/ayurveda/PositioningStatement';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import FAQ from '../../components/home/FAQ';

import {
  migraineHero,
  migraineIntro,
  migrainePatterns,
  migraineMechanism,
  migrainePillars,
  migraineBoundaries,
  migraineProtocol,
  migraineOutcomeRanges,
  migrainePositioning,
  migraineLocation,
  migraineReviews,
  migrainePrograms,
  migraineFaqs,
  migraineCTA,
  migraineRelatedPages
} from '../../data/migraineData';

const AyurvedaMigraine = () => {
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "@id": "https://vedaracare.ae/conditions/migraine-ayurveda-dubai/#condition",
      "name": "Migraine",
      "alternateName": ["Migraine Headache", "Migraine Disease", "Ardhavabhedaka", "Shiroroga", "Hemicrania"],
      "code": [
        {"@type": "MedicalCode", "code": "G43", "codingSystem": "ICD-10"},
        {"@type": "MedicalCode", "code": "G43.0", "codingSystem": "ICD-10"},
        {"@type": "MedicalCode", "code": "G43.7", "codingSystem": "ICD-10"}
      ],
      "associatedAnatomy": [
        {"@type": "AnatomicalStructure", "name": "Trigeminovascular system"},
        {"@type": "AnatomicalStructure", "name": "Brain"},
        {"@type": "AnatomicalStructure", "name": "Central nervous system"}
      ],
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Unilateral throbbing headache"},
        {"@type": "MedicalSymptom", "name": "Nausea"},
        {"@type": "MedicalSymptom", "name": "Light sensitivity (photophobia)"},
        {"@type": "MedicalSymptom", "name": "Sound sensitivity (phonophobia)"},
        {"@type": "MedicalSymptom", "name": "Visual aura"},
        {"@type": "MedicalSymptom", "name": "Sensory aura"},
        {"@type": "MedicalSymptom", "name": "Vertigo (vestibular migraine)"},
        {"@type": "MedicalSymptom", "name": "Cognitive disturbances during attacks"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Shirodhara", "url": "https://vedaracare.ae/treatments/shirodhara-dubai/"},
        {"@type": "MedicalProcedure", "name": "Nasya"},
        {"@type": "MedicalProcedure", "name": "Takradhara"},
        {"@type": "MedicalProcedure", "name": "Abhyanga", "url": "https://vedaracare.ae/treatments/abhyanga-dubai/"},
        {"@type": "MedicalProcedure", "name": "Panchakarma", "url": "https://vedaracare.ae/treatments/panchakarma-dubai/"},
        {"@type": "MedicalTherapy", "name": "Ayurvedic migraine medicines"},
        {"@type": "MedicalTherapy", "name": "Trigger management protocols"}
      ],
      "riskFactor": [
        {"@type": "MedicalRiskFactor", "name": "Family history of migraine"},
        {"@type": "MedicalRiskFactor", "name": "Female sex"},
        {"@type": "MedicalRiskFactor", "name": "Hormonal fluctuations"},
        {"@type": "MedicalRiskFactor", "name": "Sleep dysfunction"},
        {"@type": "MedicalRiskFactor", "name": "Chronic stress"},
        {"@type": "MedicalRiskFactor", "name": "Dietary triggers"},
        {"@type": "MedicalRiskFactor", "name": "Weather and barometric changes"},
        {"@type": "MedicalRiskFactor", "name": "Medication overuse"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Chronic Migraine",
      "alternateName": ["Severe Ardhavabhedaka", "Chronic Daily Headache with Migraine"],
      "code": {"@type": "MedicalCode", "code": "G43.7", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Headache on 15+ days per month"},
        {"@type": "MedicalSymptom", "name": "Migraine features on 8+ days per month"},
        {"@type": "MedicalSymptom", "name": "Duration 3+ months"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Intensive Shirodhara course", "url": "https://vedaracare.ae/treatments/shirodhara-dubai/"},
        {"@type": "MedicalProcedure", "name": "Panchakarma", "url": "https://vedaracare.ae/treatments/panchakarma-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": "https://vedaracare.ae/conditions/migraine-ayurveda-dubai/#webpage",
      "name": "Ayurveda for Migraine in Dubai",
      "url": "https://vedaracare.ae/conditions/migraine-ayurveda-dubai/",
      "about": {"@id": "https://vedaracare.ae/conditions/migraine-ayurveda-dubai/#condition"},
      "audience": {
        "@type": "PatientAudience",
        "geographicArea": {"@type": "Place", "name": "Dubai, United Arab Emirates"}
      },
      "lastReviewed": "2026-05-28",
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. [Lead Ayurvedic Physician]",
        "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
      },
      "primaryImageOfPage": "https://vedaracare.ae/images/conditions/migraine-ayurveda-dubai-hero.webp"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Ayurvedic Migraine Treatment Programmes",
      "provider": {"@id": "https://vedaracare.ae/#organization"},
      "areaServed": [
        {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "Place", "name": "Jumeirah Village Triangle"},
        {"@type": "Place", "name": "Al Barsha South"},
        {"@type": "Place", "name": "Dubai Sports City"},
        {"@type": "Place", "name": "Motor City"},
        {"@type": "Place", "name": "Arjan"},
        {"@type": "Place", "name": "Dubai Hills Estate"},
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "serviceType": "Ayurvedic Treatment for Migraine",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Migraine Programmes",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Migraine Initial Assessment",
            "priceCurrency": "AED",
            "price": "350",
            "description": "60-minute consultation with BAMS physician, subtype identification, neurology coordination plan, written treatment plan"
          },
          {
            "@type": "Offer",
            "name": "Standard 6-Month Migraine Programme",
            "priceCurrency": "AED",
            "price": "0",
            "description": "Six-month integrated Ayurvedic migraine treatment with Shirodhara, Nasya, internal medicines, and trigger management"
          },
          {
            "@type": "Offer",
            "name": "Comprehensive Chronic Migraine Programme",
            "priceCurrency": "AED",
            "price": "0",
            "description": "9-12 month programme for chronic migraine, medication overuse headache, and complex migraine patterns"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Ayurveda for Migraine in Dubai — A Complete Clinical Guide",
      "image": "https://vedaracare.ae/images/conditions/migraine-ayurveda-dubai-hero.webp",
      "datePublished": "2026-05-28",
      "dateModified": "2026-05-28",
      "author": {
        "@type": "Physician",
        "name": "Dr. [Lead Ayurvedic Physician]",
        "url": "https://vedaracare.ae/doctors/dr-[name]-ayurveda/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic",
        "logo": {"@type": "ImageObject", "url": "https://vedaracare.ae/logo.png"}
      },
      "mainEntityOfPage": "https://vedaracare.ae/conditions/migraine-ayurveda-dubai/"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/"},
        {"@type": "ListItem", "position": 3, "name": "Ayurveda for Migraine in Dubai", "item": "https://vedaracare.ae/conditions/migraine-ayurveda-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": migraineFaqs.faqs.map(faq => ({
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
        <title>Ayurveda for Migraine in Dubai | JVC Clinic | Vedara Care</title>
        <meta name="description" content="DHA-licensed Ayurvedic migraine treatment at our JVC clinic, Dubai. Subtype-specific 6-month programmes for episodic, chronic, menstrual, and vestibular migraine. Coordinated with your neurologist." />
        <link rel="canonical" href="https://vedaracare.ae/conditions/migraine-ayurveda-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/conditions/migraine-ayurveda-dubai/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/conditions/migraine-ayurveda-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/conditions/migraine-ayurveda-dubai/" />
        
        <meta property="og:title" content="Ayurveda for Migraine in Dubai — Integrated Treatment at Our JVC Clinic" />
        <meta property="og:description" content="DHA-licensed Ayurvedic migraine treatment at our Jumeirah Village Circle clinic. Subtype-specific protocols for episodic, chronic, menstrual & vestibular migraine. Coordinated with neurology." />
        <meta property="og:image" content="https://vedaracare.ae/images/conditions/migraine-ayurveda-dubai-hero.webp" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/migraine-ayurveda-dubai/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content="2026-05-28T09:00:00Z" />
        <meta property="article:modified_time" content="2026-05-28T09:00:00Z" />
        <meta property="article:author" content="Dr. [Lead Ayurvedic Physician Name]" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://vedaracare.ae/images/conditions/migraine-ayurveda-dubai-hero.webp" />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>

      <main>
        <AyurvedaHero {...migraineHero} />
        
        <AyurvedaIntro {...migraineIntro} bgColor="bg-white" />
  <TreatmentMechanism 
          {...migraineMechanism}
          bgColor="bg-[#F5F1EB]"
        />
        <ArthritisTypes 
          {...migrainePatterns}
          bgColor="bg-white"
          cardBg="bg-[#FAF7F2]"
        />


        <ArthritisPillars 
          {...migrainePillars}
          bgColor="bg-[#FAF7F2]"
        />

        <TreatmentProtocol 
          {...migraineProtocol}
          bgColor="bg-white"
        />

        <OutcomeRanges 
          {...migraineOutcomeRanges}
          bgColor="bg-[#F5F1EB]"
        />

        <PositioningStatement 
          {...migrainePositioning}
          bgColor="bg-white"
          cardBg="bg-[#FAF7F2]"
        />
 <ClinicalBoundaries 
          {...migraineBoundaries}
          bgColor="bg-[#FAF7F2]"
        />
        <TreatmentReviews 
          {...migraineReviews}
          bgColor="bg-[#1F4538]"
        />

        <TreatmentPrograms 
          {...migrainePrograms}
          bgColor="bg-white"
        />
         <FAQ {...migraineFaqs} 
         bgColor="bg-[#F5F1EB]"/>
       <FinalCTA 
          {...migraineCTA}
          bgColor="bg-[#FAF7F2]"
        />

        <TreatmentLocation 
          {...migraineLocation}
          bgColor="bg-white"
        />
        <RelatedPages 
          {...migraineRelatedPages}
          bgColor="bg-[#F5F1EB]"
        />
      </main>
    </>
  );
};

export default AyurvedaMigraine;
