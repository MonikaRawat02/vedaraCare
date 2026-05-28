import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import ArthritisTypes from '../../components/ayurveda/ArthritisTypes';
import ArthritisPillars from '../../components/ayurveda/ArthritisPillars';
import ClinicalBoundaries from '../../components/ayurveda/ClinicalBoundaries';
import PositioningStatement from '../../components/ayurveda/PositioningStatement';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import FAQ from '../../components/home/FAQ';
import { 
  StressAnxietyTimeline, 
  StressAnxietySleepSection, 
  StressAnxietyVisitSection 
} from '../../components/ayurveda/StressAnxietyCustomSections';

import {
  stressAnxietyHero,
  stressAnxietyIntro,
  stressAnxietyMechanism,
  stressAnxietyPatterns,
  stressAnxietyPillars,
  stressAnxietyPositioning,
  stressAnxietyBoundaries,
  stressAnxietyReviews,
  stressAnxietyPrograms,
  stressAnxietyFaqs,
  stressAnxietyCTA,
  stressAnxietyRelatedPages,
  stressAnxietyTimelineData,
  stressAnxietySleepSectionData,
  stressAnxietyVisitSectionData
} from '../../data/stressAnxietyData';

const AyurvedaStressAnxiety = () => {
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "@id": "https://vedaracare.ae/conditions/stress-anxiety-ayurveda-dubai/#condition",
      "name": "Chronic Stress and Anxiety Disorders",
      "alternateName": ["Anxiety", "Chronic Stress", "Burnout", "Manas Roga", "Chittodvega", "Generalised Anxiety Disorder"],
      "code": [
        {"@type": "MedicalCode", "code": "F41.1", "codingSystem": "ICD-10"},
        {"@type": "MedicalCode", "code": "F43.9", "codingSystem": "ICD-10"},
        {"@type": "MedicalCode", "code": "F48", "codingSystem": "ICD-10"}
      ],
      "associatedAnatomy": [
        {"@type": "AnatomicalStructure", "name": "Autonomic nervous system"},
        {"@type": "AnatomicalStructure", "name": "Hypothalamic-pituitary-adrenal axis"},
        {"@type": "AnatomicalStructure", "name": "Central nervous system"}
      ],
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Persistent worry"},
        {"@type": "MedicalSymptom", "name": "Sleep disturbance"},
        {"@type": "MedicalSymptom", "name": "Restlessness"},
        {"@type": "MedicalSymptom", "name": "Fatigue"},
        {"@type": "MedicalSymptom", "name": "Difficulty concentrating"},
        {"@type": "MedicalSymptom", "name": "Muscle tension"},
        {"@type": "MedicalSymptom", "name": "Irritability"},
        {"@type": "MedicalSymptom", "name": "Digestive disturbances"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Shirodhara", "url": "https://vedaracare.ae/treatments/shirodhara-dubai/"},
        {"@type": "MedicalProcedure", "name": "Abhyanga", "url": "https://vedaracare.ae/treatments/abhyanga-dubai/"},
        {"@type": "MedicalProcedure", "name": "Panchakarma", "url": "https://vedaracare.ae/treatments/panchakarma-dubai/"},
        {"@type": "MedicalTherapy", "name": "Ayurvedic nervous-system medicines"},
        {"@type": "MedicalTherapy", "name": "Dietary regulation"},
        {"@type": "MedicalTherapy", "name": "Lifestyle modification"}
      ],
      "riskFactor": [
        {"@type": "MedicalRiskFactor", "name": "Chronic work demands"},
        {"@type": "MedicalRiskFactor", "name": "Sleep dysfunction"},
        {"@type": "MedicalRiskFactor", "name": "Genetic predisposition"},
        {"@type": "MedicalRiskFactor", "name": "Traumatic life events"},
        {"@type": "MedicalRiskFactor", "name": "Family history of anxiety"},
        {"@type": "MedicalRiskFactor", "name": "Hormonal changes"},
        {"@type": "MedicalRiskFactor", "name": "Substance use"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Generalised Anxiety Disorder",
      "alternateName": ["GAD", "Vata-Dominant Anxiety Pattern"],
      "code": {"@type": "MedicalCode", "code": "F41.1", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Persistent worry"},
        {"@type": "MedicalSymptom", "name": "Difficulty controlling worry"},
        {"@type": "MedicalSymptom", "name": "Restlessness"},
        {"@type": "MedicalSymptom", "name": "Sleep onset difficulty"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Shirodhara with Brahmi or Ksheerabala", "url": "https://vedaracare.ae/treatments/shirodhara-dubai/"},
        {"@type": "MedicalTherapy", "name": "Saraswatarishta"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Chronic Stress",
      "alternateName": ["Cortisol-Dominant Stress Pattern"],
      "code": {"@type": "MedicalCode", "code": "F43.9", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Irritability"},
        {"@type": "MedicalSymptom", "name": "Mid-afternoon energy crashes"},
        {"@type": "MedicalSymptom", "name": "Wired but tired feeling"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Shirodhara with Ksheerabala Taila", "url": "https://vedaracare.ae/treatments/shirodhara-dubai/"},
        {"@type": "MedicalTherapy", "name": "Ashwagandha"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Burnout",
      "alternateName": ["Exhaustion-Dominant Pattern"],
      "code": {"@type": "MedicalCode", "code": "QD85", "codingSystem": "ICD-11"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Physical exhaustion"},
        {"@type": "MedicalSymptom", "name": "Emotional fatigue"},
        {"@type": "MedicalSymptom", "name": "Cynicism"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalTherapy", "name": "Deep restorative protocols"},
        {"@type": "MedicalTherapy", "name": "Restorative diet"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Panic Disorder",
      "alternateName": ["Vata-Pitta Anxiety Pattern"],
      "code": {"@type": "MedicalCode", "code": "F41.0", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Panic attacks"},
        {"@type": "MedicalSymptom", "name": "Heart racing"},
        {"@type": "MedicalSymptom", "name": "Breathlessness"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Shirodhara", "url": "https://vedaracare.ae/treatments/shirodhara-dubai/"},
        {"@type": "MedicalTherapy", "name": "Amygdala reactivity support"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Post-Traumatic Stress Response",
      "alternateName": ["Trauma-Pattern Anxiety"],
      "code": {"@type": "MedicalCode", "code": "F43.1", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Hyper-vigilance"},
        {"@type": "MedicalSymptom", "name": "Intrusive thoughts"},
        {"@type": "MedicalSymptom", "name": "Emotional numbing"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Gentle Shirodhara", "url": "https://vedaracare.ae/treatments/shirodhara-dubai/"},
        {"@type": "MedicalTherapy", "name": "System restoration"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": "https://vedaracare.ae/conditions/stress-anxiety-ayurveda-dubai/#webpage",
      "name": "Ayurveda for Stress & Anxiety in Dubai",
      "url": "https://vedaracare.ae/conditions/stress-anxiety-ayurveda-dubai/",
      "about": {"@id": "https://vedaracare.ae/conditions/stress-anxiety-ayurveda-dubai/#condition"},
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
      "primaryImageOfPage": "https://vedaracare.ae/images/stress-anxiety-ayurveda-dubai-hero.jpg"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Ayurvedic Stress and Anxiety Treatment Programmes",
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
      "serviceType": "Ayurvedic Mental Health Treatment",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Stress & Anxiety Programmes",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Stress & Anxiety Initial Assessment",
            "priceCurrency": "AED",
            "price": "450",
            "description": "60-minute consultation with BAMS physician at JVC clinic, pattern identification, written plan with realistic expectations"
          },
          {
            "@type": "Offer",
            "name": "Standard 3-Month Stress Programme",
            "priceCurrency": "AED",
            "price": "8500",
            "description": "Three-month structured Ayurvedic treatment for chronic stress, mild-to-moderate anxiety, and burnout"
          },
          {
            "@type": "Offer",
            "name": "Comprehensive 6-Month Anxiety Programme",
            "priceCurrency": "AED",
            "price": "15000",
            "description": "Six-month integrated programme for generalised anxiety, post-trauma patterns, and complex anxiety alongside psychiatric care"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Ayurveda for Stress & Anxiety in Dubai — A Complete Clinical Guide",
      "image": "https://vedaracare.ae/images/stress-anxiety-ayurveda-dubai-hero.jpg",
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
      "mainEntityOfPage": "https://vedaracare.ae/conditions/stress-anxiety-ayurveda-dubai/"
    },
    {
      "@context": "https://schema.org",
      "@id": "https://vedaracare.ae/#organization",
      "@type": "Organization",
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": "https://vedaracare.ae/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Circle Mall, JVC",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/"},
        {"@type": "ListItem", "position": 3, "name": "Ayurveda for Stress & Anxiety in Dubai", "item": "https://vedaracare.ae/conditions/stress-anxiety-ayurveda-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": stressAnxietyFaqs.faqs.map(faq => ({
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
        <title>Ayurveda for Stress & Anxiety in Dubai | JVC Clinic | Vedara Care</title>
        <meta name="description" content="DHA-licensed Ayurvedic treatment for chronic stress, anxiety, and burnout at our JVC clinic, Dubai. Shirodhara, herbal medicines, sleep protocols. Alongside psychiatry where appropriate." />
        <link rel="canonical" href="https://vedaracare.ae/conditions/stress-anxiety-ayurveda-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/conditions/stress-anxiety-ayurveda-dubai/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/conditions/stress-anxiety-ayurveda-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/conditions/stress-anxiety-ayurveda-dubai/" />
        <meta property="og:title" content="Ayurveda for Stress & Anxiety in Dubai — Treatment at Our JVC Clinic" />
        <meta property="og:description" content="DHA-licensed Ayurvedic treatment for chronic stress, anxiety, burnout, and post-trauma patterns at our Jumeirah Village Circle clinic. Alongside psychiatry and therapy where appropriate." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/stress-anxiety-ayurveda-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/stress-anxiety-ayurveda-dubai/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content="2026-05-28" />
        <meta property="article:modified_time" content="2026-05-28" />
        <meta property="article:author" content="Dr. [Lead Ayurvedic Physician Name]" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        {/* Force DM Sans only for this page */}
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>
      <main>
        <AyurvedaHero {...stressAnxietyHero} />
        <AyurvedaIntro {...stressAnxietyIntro} bgColor="bg-white" />
        <TreatmentMechanism 
          {...stressAnxietyMechanism}
          bgColor="bg-[#EAE3D5]"
        />
        <ArthritisTypes 
          {...stressAnxietyPatterns}
          bgColor="bg-white"
          cardBg="bg-[#FAF7F2]"
        />
        <PositioningStatement 
          {...stressAnxietyPositioning}
          bgColor="bg-[#F6F1E9]"
          cardBg="bg-white"
        />
        <ArthritisPillars 
          {...stressAnxietyPillars}
          bgColor="bg-white"
        />
        <StressAnxietyTimeline {...stressAnxietyTimelineData} />

        <StressAnxietySleepSection {...stressAnxietySleepSectionData} />

        <ClinicalBoundaries 
          {...stressAnxietyBoundaries}
          bgColor="bg-[#F6F1E9]"
          cardBg="bg-[#F6F1E9]"
        />

        <TreatmentReviews 
          {...stressAnxietyReviews}
          bgColor="bg-[#1F4538]"
        />

        <TreatmentPrograms 
          {...stressAnxietyPrograms}
          bgColor="bg-white"
        />
        <FAQ {...stressAnxietyFaqs} />

        <StressAnxietyVisitSection {...stressAnxietyVisitSectionData} />
        <FinalCTA 
          {...stressAnxietyCTA}
          bgColor="bg-[#F6F1E9]"
        />
        <RelatedPages 
          {...stressAnxietyRelatedPages}
          bgColor="bg-[#EAE3D5]"
        />
      </main>
    </>
  );
};

export default AyurvedaStressAnxiety;
