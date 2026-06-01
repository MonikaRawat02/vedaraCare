import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import ArthritisTypes from '../../components/ayurveda/ArthritisTypes';
import ArthritisPillars from '../../components/ayurveda/ArthritisPillars';
import TreatmentProtocol from '../../components/ayurveda/TreatmentProtocol';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import FAQ from '../../components/home/FAQ';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import TreatmentLocationCustom from '../../components/ayurveda/TreatmentLocationCustom';
import {
  ayurvedaIbsHero,
  ayurvedaIbsIntro,
  ayurvedaIbsMechanism1,
  ayurvedaIbsMechanism2,
  ayurvedaIbsPillars,
  ayurvedaIbsArthritisTypes,
  ayurvedaIbsProtocol,
  ayurvedaIbsPrograms,
  ayurvedaIbsFaqs,
  ayurvedaIbsFinalCTA,
  ayurvedaIbsRelatedPages,
  ayurvedaIbsTreatmentLocationCustom,
} from '../../data/ayurvedaIbs';

const AyurvedaIbsDubai = () => {
  const currentDate = new Date().toISOString();
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "@id": "https://vedaracare.ae/conditions/ibs-ayurveda-dubai/#condition",
      "name": "Irritable Bowel Syndrome",
      "alternateName": ["IBS", "Grahani Roga", "Functional Bowel Disorder", "Spastic Colon", "Sangrahani"],
      "code": [
        {"@type": "MedicalCode", "code": "K58", "codingSystem": "ICD-10"},
        {"@type": "MedicalCode", "code": "K58.0", "codingSystem": "ICD-10"},
        {"@type": "MedicalCode", "code": "K58.9", "codingSystem": "ICD-10"}
      ],
      "associatedAnatomy": [
        {"@type": "AnatomicalStructure", "name": "Colon"},
        {"@type": "AnatomicalStructure", "name": "Small intestine"},
        {"@type": "AnatomicalStructure", "name": "Enteric nervous system"},
        {"@type": "AnatomicalStructure", "name": "Gut microbiome"}
      ],
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Abdominal pain"},
        {"@type": "MedicalSymptom", "name": "Altered bowel habits"},
        {"@type": "MedicalSymptom", "name": "Diarrhoea"},
        {"@type": "MedicalSymptom", "name": "Constipation"},
        {"@type": "MedicalSymptom", "name": "Bloating"},
        {"@type": "MedicalSymptom", "name": "Abdominal distension"},
        {"@type": "MedicalSymptom", "name": "Post-meal urgency"},
        {"@type": "MedicalSymptom", "name": "Sense of incomplete evacuation"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Panchakarma", "url": "https://vedaracare.ae/treatments/panchakarma-dubai/"},
        {"@type": "MedicalProcedure", "name": "Virechana"},
        {"@type": "MedicalProcedure", "name": "Basti"},
        {"@type": "MedicalProcedure", "name": "Abhyanga", "url": "https://vedaracare.ae/treatments/abhyanga-dubai/"},
        {"@type": "MedicalProcedure", "name": "Shirodhara", "url": "https://vedaracare.ae/treatments/shirodhara-dubai/"},
        {"@type": "MedicalTherapy", "name": "Ayurvedic gut medicines"},
        {"@type": "MedicalTherapy", "name": "Dietary regulation"}
      ],
      "riskFactor": [
        {"@type": "MedicalRiskFactor", "name": "Previous GI infection (post-infectious IBS)"},
        {"@type": "MedicalRiskFactor", "name": "Chronic stress"},
        {"@type": "MedicalRiskFactor", "name": "SIBO"},
        {"@type": "MedicalRiskFactor", "name": "Family history"},
        {"@type": "MedicalRiskFactor", "name": "Female sex (IBS-C)"},
        {"@type": "MedicalRiskFactor", "name": "Dietary patterns"},
        {"@type": "MedicalRiskFactor", "name": "Antibiotic use history"},
        {"@type": "MedicalRiskFactor", "name": "Irregular eating patterns"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "IBS-D (Diarrhoea-Predominant Irritable Bowel Syndrome)",
      "alternateName": ["IBS-D", "Pitta-Vata Pattern Grahani"],
      "code": {"@type": "MedicalCode", "code": "K58.0", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Loose stools 25%+ of the time"},
        {"@type": "MedicalSymptom", "name": "Bowel urgency"},
        {"@type": "MedicalSymptom", "name": "Post-meal urgency"},
        {"@type": "MedicalSymptom", "name": "Morning bowel movements"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Virechana", "url": "https://vedaracare.ae/treatments/panchakarma-dubai/"},
        {"@type": "MedicalTherapy", "name": "Kutaja Ghana Vati"},
        {"@type": "MedicalTherapy", "name": "Bilva Marmala"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "IBS-C (Constipation-Predominant Irritable Bowel Syndrome)",
      "alternateName": ["IBS-C", "Vata Pattern Grahani"],
      "code": {"@type": "MedicalCode", "code": "K58.9", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Infrequent bowel movements (fewer than 3 per week)"},
        {"@type": "MedicalSymptom", "name": "Hard or pellet-like stools"},
        {"@type": "MedicalSymptom", "name": "Straining"},
        {"@type": "MedicalSymptom", "name": "Sense of incomplete evacuation"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Basti"},
        {"@type": "MedicalTherapy", "name": "Triphala"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "IBS-M (Mixed Alternating Irritable Bowel Syndrome)",
      "alternateName": ["IBS-M", "Mixed Dosha Pattern Grahani"],
      "code": {"@type": "MedicalCode", "code": "K58.9", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Alternating periods of diarrhoea and constipation"},
        {"@type": "MedicalSymptom", "name": "Significant abdominal discomfort"},
        {"@type": "MedicalSymptom", "name": "Bloating"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Panchakarma"},
        {"@type": "MedicalTherapy", "name": "Tridoshic balancing medicines"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Post-Infectious IBS",
      "alternateName": ["PI-IBS", "Pitta-Pittaja with Ama component"],
      "code": {"@type": "MedicalCode", "code": "K58.9", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "IBS symptoms after GI infection"},
        {"@type": "MedicalSymptom", "name": "Persistent symptoms post-infection"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Panchakarma"},
        {"@type": "MedicalTherapy", "name": "Pippali-based formulations"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "SIBO-Related IBS",
      "alternateName": ["SIBO-IBS", "Ajeerna or Ama-Grahani patterns"],
      "code": {"@type": "MedicalCode", "code": "K58.9", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Bloating"},
        {"@type": "MedicalSymptom", "name": "Abdominal distension"},
        {"@type": "MedicalSymptom", "name": "Changes after carbohydrate-containing meals"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Panchakarma"},
        {"@type": "MedicalTherapy", "name": "Vidanga"},
        {"@type": "MedicalTherapy", "name": "Pippali-based formulations"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": "https://vedaracare.ae/conditions/ibs-ayurveda-dubai/#webpage",
      "name": "Ayurveda for IBS in Dubai",
      "url": "https://vedaracare.ae/conditions/ibs-ayurveda-dubai/",
      "about": {"@id": "https://vedaracare.ae/conditions/ibs-ayurveda-dubai/#condition"},
      "audience": {
        "@type": "PatientAudience",
        "geographicArea": {"@type": "Place", "name": "Dubai, United Arab Emirates"}
      },
      "lastReviewed": currentDate,
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. [Lead Ayurvedic Physician]",
        "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
      },
      "primaryImageOfPage": "https://vedaracare.ae/images/ibs-ayurveda-dubai-hero.jpg"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Ayurvedic IBS Treatment Programmes",
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
      "serviceType": "Ayurvedic Treatment for IBS",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IBS Programmes",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "IBS Initial Assessment",
            "priceCurrency": "AED",
            "price": "[X]",
            "description": "60-minute consultation with BAMS physician at JVC clinic, subtype identification, treatment plan with realistic expectations"
          },
          {
            "@type": "Offer",
            "name": "Standard 3-Month IBS Programme",
            "priceCurrency": "AED",
            "price": "[X]",
            "description": "Three-month structured Ayurvedic IBS treatment with Panchakarma, subtype-specific medicines, dietary protocols"
          },
          {
            "@type": "Offer",
            "name": "Comprehensive 6-Month IBS Programme",
            "priceCurrency": "AED",
            "price": "[X]",
            "description": "Six-month integrated programme for complex IBS, post-infectious IBS, SIBO-related IBS, and treatment-resistant patterns"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Ayurveda for IBS in Dubai — A Complete Clinical Guide",
      "image": "https://vedaracare.ae/images/ibs-ayurveda-dubai-hero.jpg",
      "datePublished": "2026-05-01",
      "dateModified": currentDate,
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
      "mainEntityOfPage": "https://vedaracare.ae/conditions/ibs-ayurveda-dubai/"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://vedaracare.ae/#organization",
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": "https://vedaracare.ae/logo.png"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/"},
        {"@type": "ListItem", "position": 3, "name": "Ayurveda for IBS in Dubai", "item": "https://vedaracare.ae/conditions/ibs-ayurveda-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": ayurvedaIbsFaqs.faqs.map(faq => ({
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
        <title>Ayurveda for IBS in Dubai | JVC Clinic | Vedara Care</title>
        <meta name="description" content="DHA-licensed Ayurvedic treatment for IBS at our JVC clinic, Dubai — subtype-specific programmes for IBS-D, IBS-C, IBS-M, post-infectious IBS, and SIBO. Coordinated with gastroenterology." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ayurveda for IBS in Dubai — Subtype-Specific Treatment at Our JVC Clinic" />
        <meta property="og:description" content="DHA-licensed Ayurvedic IBS treatment at our Jumeirah Village Circle clinic. Different protocols for IBS-D, IBS-C, IBS-M, post-infectious IBS, and SIBO. Treats your IBS as the real biological condition it is." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/ibs-ayurveda-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/ibs-ayurveda-dubai/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content="2026-05-01" />
        <meta property="article:modified_time" content={currentDate} />
        <meta property="article:author" content="Dr. [Lead Ayurvedic Physician Name]" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Canonical & Language */}
        <link rel="canonical" href="https://vedaracare.ae/conditions/ibs-ayurveda-dubai/" />
        <link rel="alternate" hrefLang="en-AE" href="https://vedaracare.ae/conditions/ibs-ayurveda-dubai/" />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/conditions/ibs-ayurveda-dubai/" />
        <link rel="alternate" hrefLang="x-default" href="https://vedaracare.ae/conditions/ibs-ayurveda-dubai/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>

      <main>
        {/* Section 1: Hero */}
        <AyurvedaHero {...ayurvedaIbsHero} />

        {/* Section 2: Intro */}
        <AyurvedaIntro {...ayurvedaIbsIntro} />

        {/* Section 3: History & Framework */}
        <TreatmentMechanism {...ayurvedaIbsMechanism1} />

        {/* Section 4: Condition Phenotypes */}
        <ArthritisTypes {...ayurvedaIbsArthritisTypes} 
        bgColor="bg-white"
          cardBg="bg-[#FAF7F2]" />

        {/* Section 5: Treatment Pillars */}
        <ArthritisPillars {...ayurvedaIbsPillars} />

        {/* Section 6: Treatment Protocol */}
        <TreatmentProtocol {...ayurvedaIbsProtocol} />

        {/* Section 7: Treatment Programs */}
        <TreatmentPrograms {...ayurvedaIbsPrograms}
        bgColor="bg-white"
          cardBg="bg-[#FFFFFF]"
          buttonBg="#C9A55B"
          buttonText="Book Assessment"
        />

        {/* Section 8: Treatment Pillars Mechanism */}
        <TreatmentMechanism {...ayurvedaIbsMechanism2} />

        {/* Section 9: FAQ */}
        <FAQ {...ayurvedaIbsFaqs} />

        {/* Section 10: Treatment Location */}
        <TreatmentLocationCustom {...ayurvedaIbsTreatmentLocationCustom} />

        {/* Section 11: Related Pages */}
        <RelatedPages {...ayurvedaIbsRelatedPages} />

        {/* Section 12: Final CTA */}
        <FinalCTA {...ayurvedaIbsFinalCTA} />
      </main>
    </>
  );
};

export default AyurvedaIbsDubai;