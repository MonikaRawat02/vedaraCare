import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import ArthritisTypes from '../../components/ayurveda/ArthritisTypes';
import ArthritisPillars from '../../components/ayurveda/ArthritisPillars';
import Protocols from '../../components/ayurveda/Protocols';
import OutcomeRanges from '../../components/ayurveda/OutcomeRanges';
import TreatmentIntegration from '../../components/ayurveda/TreatmentIntegration';
import ClinicalBoundaries from '../../components/ayurveda/ClinicalBoundaries';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import FAQ from '../../components/home/FAQ';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';

import {
  skinHero,
  skinIntro,
  skinMechanism,
  skinTypes,
  skinPillars,
  skinProtocol,
  skinOutcomes,
  skinIntegration,
  skinBoundaries,
  skinReviews,
  skinPrograms,
  skinFaqs,
  skinCTA,
  skinRelatedPages,
} from '../../data/skinAyurvedaData';

const SkinAyurvedaDubai = () => {
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "@id": "https://vedaracare.ae/conditions/skin-ayurveda-dubai/#condition",
      "name": "Chronic Skin Conditions",
      "alternateName": ["Skin Disease", "Dermatologic Conditions", "Kushta", "Twak Vikara"],
      "code": [
        {"@type": "MedicalCode", "code": "L20", "codingSystem": "ICD-10"},
        {"@type": "MedicalCode", "code": "L40", "codingSystem": "ICD-10"},
        {"@type": "MedicalCode", "code": "L70", "codingSystem": "ICD-10"},
        {"@type": "MedicalCode", "code": "L71", "codingSystem": "ICD-10"}
      ],
      "associatedAnatomy": [
        {"@type": "AnatomicalStructure", "name": "Skin"},
        {"@type": "AnatomicalStructure", "name": "Sebaceous glands"},
        {"@type": "AnatomicalStructure", "name": "Dermis"},
        {"@type": "AnatomicalStructure", "name": "Epidermis"}
      ],
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Itching"},
        {"@type": "MedicalSymptom", "name": "Inflammation"},
        {"@type": "MedicalSymptom", "name": "Redness"},
        {"@type": "MedicalSymptom", "name": "Scaling"},
        {"@type": "MedicalSymptom", "name": "Pigmentation changes"},
        {"@type": "MedicalSymptom", "name": "Lesions"},
        {"@type": "MedicalSymptom", "name": "Dryness"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Panchakarma", "url": "https://vedaracare.ae/treatments/panchakarma-dubai/"},
        {"@type": "MedicalProcedure", "name": "Virechana"},
        {"@type": "MedicalProcedure", "name": "Rakta Mokshana"},
        {"@type": "MedicalProcedure", "name": "Mukha lepa"},
        {"@type": "MedicalTherapy", "name": "Manjishtadi Kashayam"},
        {"@type": "MedicalTherapy", "name": "Mahatiktaka Ghrita"},
        {"@type": "MedicalTherapy", "name": "Khadirarishta"},
        {"@type": "MedicalTherapy", "name": "Dietary regulation"}
      ],
      "riskFactor": [
        {"@type": "MedicalRiskFactor", "name": "Family history of atopy"},
        {"@type": "MedicalRiskFactor", "name": "Family history of autoimmune disease"},
        {"@type": "MedicalRiskFactor", "name": "Hormonal patterns"},
        {"@type": "MedicalRiskFactor", "name": "Chronic stress"},
        {"@type": "MedicalRiskFactor", "name": "Dietary patterns"},
        {"@type": "MedicalRiskFactor", "name": "UV exposure"},
        {"@type": "MedicalRiskFactor", "name": "Gut health"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Atopic Dermatitis (Eczema)",
      "alternateName": ["Atopic Eczema", "Vicharchika"],
      "code": {"@type": "MedicalCode", "code": "L20", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Intense itching"},
        {"@type": "MedicalSymptom", "name": "Erythematous patches"},
        {"@type": "MedicalSymptom", "name": "Dry skin"},
        {"@type": "MedicalSymptom", "name": "Lichenification"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Panchakarma with Virechana", "url": "https://vedaracare.ae/treatments/panchakarma-dubai/"},
        {"@type": "MedicalTherapy", "name": "Mahatiktaka Ghrita"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Psoriasis",
      "alternateName": ["Eka Kushta", "Kitibha"],
      "code": {"@type": "MedicalCode", "code": "L40", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Silvery scales"},
        {"@type": "MedicalSymptom", "name": "Erythematous plaques"},
        {"@type": "MedicalSymptom", "name": "Itching"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Panchakarma with Virechana", "url": "https://vedaracare.ae/treatments/panchakarma-dubai/"},
        {"@type": "MedicalTherapy", "name": "Manjishtadi Kashayam"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Hormonal Acne",
      "alternateName": ["Yauvana Pidaka"],
      "code": {"@type": "MedicalCode", "code": "L70", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Cystic lesions"},
        {"@type": "MedicalSymptom", "name": "Inflammation"},
        {"@type": "MedicalSymptom", "name": "Hormonal flares"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Panchakarma", "url": "https://vedaracare.ae/treatments/panchakarma-dubai/"},
        {"@type": "MedicalTherapy", "name": "Lodhradi Lepa"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Rosacea",
      "alternateName": ["Pitta-prakriti patterns"],
      "code": {"@type": "MedicalCode", "code": "L71", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Facial redness"},
        {"@type": "MedicalSymptom", "name": "Flushing"},
        {"@type": "MedicalSymptom", "name": "Papules"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Cooling protocols"},
        {"@type": "MedicalTherapy", "name": "Mahatiktaka Ghrita"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Melasma and Hyperpigmentation",
      "alternateName": ["Vyanga"],
      "code": {"@type": "MedicalCode", "code": "L81.1", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Hyperpigmentation"},
        {"@type": "MedicalSymptom", "name": "Symmetric patches"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Mukha lepa"},
        {"@type": "MedicalTherapy", "name": "Kunkumadi Tailam"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Chronic Urticaria",
      "alternateName": ["Sheetapitta"],
      "code": {"@type": "MedicalCode", "code": "L50", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Wheals"},
        {"@type": "MedicalSymptom", "name": "Angioedema"},
        {"@type": "MedicalSymptom", "name": "Itching"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Panchakarma", "url": "https://vedaracare.ae/treatments/panchakarma-dubai/"},
        {"@type": "MedicalTherapy", "name": "Haridra Khanda"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Vitiligo",
      "alternateName": ["Shvitra"],
      "code": {"@type": "MedicalCode", "code": "L80", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Depigmentation"},
        {"@type": "MedicalSymptom", "name": "White patches"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalTherapy", "name": "Bakuchi-based preparations"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Seborrheic Dermatitis",
      "alternateName": ["Darunaka"],
      "code": {"@type": "MedicalCode", "code": "L21", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Scaling"},
        {"@type": "MedicalSymptom", "name": "Itching"},
        {"@type": "MedicalSymptom", "name": "Dandruff"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Scalp treatments"},
        {"@type": "MedicalTherapy", "name": "Nimbadi Kashayam"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Lichen Planus",
      "alternateName": ["Charmadala"],
      "code": {"@type": "MedicalCode", "code": "L43", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Violaceous papules"},
        {"@type": "MedicalSymptom", "name": "Itching"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalTherapy", "name": "Pancha Tikta Ghruta Guggulu"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Chronic Post-Inflammatory Skin Issues",
      "alternateName": ["Varnavikara"],
      "code": {"@type": "MedicalCode", "code": "L81.0", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Post-inflammatory hyperpigmentation"},
        {"@type": "MedicalSymptom", "name": "Scarring"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Skin restoration protocols"},
        {"@type": "MedicalTherapy", "name": "Raktaprasadana medicines"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": "https://vedaracare.ae/conditions/skin-ayurveda-dubai/#webpage",
      "name": "Ayurveda for Skin Problems in Dubai",
      "url": "https://vedaracare.ae/conditions/skin-ayurveda-dubai/",
      "about": {"@id": "https://vedaracare.ae/conditions/skin-ayurveda-dubai/#condition"},
      "audience": {
        "@type": "PatientAudience",
        "geographicArea": {"@type": "Place", "name": "Dubai, United Arab Emirates"}
      },
      "lastReviewed": "2026-06-03",
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. Priya Sharma",
        "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
      },
      "primaryImageOfPage": "https://vedaracare.ae/images/skin-ayurveda-dubai-hero.jpg"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Ayurvedic Skin Treatment Programmes",
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
      "serviceType": "Ayurvedic Treatment for Skin Conditions",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Skin Programmes",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Skin Initial Assessment",
            "priceCurrency": "AED",
            "price": "450",
            "description": "60-minute consultation with BAMS physician at JVC clinic, condition classification, dermatology coordination plan, written treatment plan"
          },
          {
            "@type": "Offer",
            "name": "Standard 6-Month Skin Programme",
            "priceCurrency": "AED",
            "price": "12500",
            "description": "Six-month structured Ayurvedic skin treatment with Panchakarma, internal medicines, dietary protocols, external treatments alongside dermatology"
          },
          {
            "@type": "Offer",
            "name": "Comprehensive 9-Month Skin Programme",
            "priceCurrency": "AED",
            "price": "18000",
            "description": "Nine-month programme for psoriasis, vitiligo, severe chronic eczema, and complex skin conditions with integrated dermatology coordination"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Ayurveda for Skin Problems in Dubai — A Complete Clinical Guide",
      "image": "https://vedaracare.ae/images/skin-ayurveda-dubai-hero.jpg",
      "datePublished": "2026-06-03",
      "dateModified": "2026-06-03",
      "author": {
        "@type": "Physician",
        "name": "Dr. Priya Sharma",
        "url": "https://vedaracare.ae/doctors/dr-priya-sharma-ayurveda/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic",
        "logo": {"@type": "ImageObject", "url": "https://vedaracare.ae/logo.png"}
      },
      "mainEntityOfPage": "https://vedaracare.ae/conditions/skin-ayurveda-dubai/"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/"},
        {"@type": "ListItem", "position": 3, "name": "Ayurveda for Skin Problems in Dubai", "item": "https://vedaracare.ae/conditions/skin-ayurveda-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": skinFaqs.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer.replace(/<[^>]*>?/gm, '')
        }
      }))
    }
  ];

  return (
    <>
      <Head>
        <title>Ayurveda for Skin Problems in Dubai | JVC Clinic | Vedara Care</title>
        <meta name="description" content="DHA-licensed Ayurvedic treatment for chronic skin conditions at our JVC clinic, Dubai — eczema, psoriasis, acne, rosacea, melasma. Integrated with our dermatology department. Alongside topical care, never replacement." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/skin-ayurveda-dubai/" />
        <meta property="og:title" content="Ayurveda for Skin Problems in Dubai — Integrated Treatment at Our JVC Clinic" />
        <meta property="og:description" content="DHA-licensed Ayurvedic treatment for eczema, psoriasis, hormonal acne, rosacea, melasma at our Jumeirah Village Circle clinic. Integrated with our dermatology department. Addresses systemic patterns driving recurrence." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/skin-ayurveda-dubai.jpg" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content="2026-06-03" />
        <meta property="article:modified_time" content="2026-06-03" />
        <meta property="article:author" content="Dr. Priya Sharma" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayurveda for Skin Problems in Dubai — Integrated Treatment at Our JVC Clinic" />
        <meta name="twitter:description" content="DHA-licensed Ayurvedic treatment for eczema, psoriasis, hormonal acne, rosacea, melasma at our Jumeirah Village Circle clinic. Integrated with our dermatology department. Addresses systemic patterns driving recurrence." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/skin-ayurveda-dubai.jpg" />

        {/* Canonical & Language Tags */}
        <link rel="canonical" href="https://vedaracare.ae/conditions/skin-ayurveda-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/conditions/skin-ayurveda-dubai/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/conditions/skin-ayurveda-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/conditions/skin-ayurveda-dubai/" />

        {/* Robots & Indexing */}
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>

      <AyurvedaHero {...skinHero} 
      bgColor="bg-[#FAF8F3]"/>
      
      <AyurvedaIntro {...skinIntro} />
      
      <TreatmentMechanism {...skinMechanism}
      bgColor="bg-[#F5F1EA]" />

      <ArthritisTypes {...skinTypes}
      bgColor="bg-white"
      cardBg="bg-[#FAF8F3]" />

      <TreatmentIntegration {...skinIntegration}
      bgColor="bg-[#FAF8F3]" />

      <ArthritisPillars {...skinPillars}
      bgColor="bg-white"
      cardBg="bg-[#FAF8F3]" />

      <Protocols {...skinProtocol}
      bgColor="bg-[#F5F1EA]"
      cardBg="bg-[#F5F1EA]" />

      <OutcomeRanges {...skinOutcomes} 
      bgColor="bg-white"
       />
      
      
      <ClinicalBoundaries {...skinBoundaries}
      bgColor="bg-[#FAF8F3]" />
      
      <TreatmentReviews {...skinReviews} isDarkText={false} bgColor="bg-[#2D5F4F]" cardBgColor="bg-white" />
      
      <TreatmentPrograms {...skinPrograms} />
      
      <FAQ {...skinFaqs} />
      
      <FinalCTA {...skinCTA} />
      
      <RelatedPages {...skinRelatedPages} />
    </>
  );
};

export default SkinAyurvedaDubai;
