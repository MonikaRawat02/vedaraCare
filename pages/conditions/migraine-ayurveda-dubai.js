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
      "name": "Episodic Migraine Without Aura",
      "alternateName": ["Ardhavabhedaka"],
      "code": {"@type": "MedicalCode", "code": "G43.0", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Unilateral throbbing headache"},
        {"@type": "MedicalSymptom", "name": "Nausea"},
        {"@type": "MedicalSymptom", "name": "Light sensitivity"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Shirodhara", "url": "https://vedaracare.ae/treatments/shirodhara-dubai/"},
        {"@type": "MedicalProcedure", "name": "Nasya"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Episodic Migraine With Aura",
      "alternateName": ["Drishtimargakshaya-related patterns"],
      "code": {"@type": "MedicalCode", "code": "G43.1", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Visual aura"},
        {"@type": "MedicalSymptom", "name": "Sensory aura"},
        {"@type": "MedicalSymptom", "name": "Speech disturbances"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Modified Shirodhara", "url": "https://vedaracare.ae/treatments/shirodhara-dubai/"}
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
      "@type": "MedicalCondition",
      "name": "Menstrual Migraine",
      "alternateName": ["Yoshapasmara-adjacent patterns"],
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Migraine linked to menstrual cycle"},
        {"@type": "MedicalSymptom", "name": "Hormonally driven attacks"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Cycle-specific Ayurvedic protocols"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Vestibular Migraine",
      "alternateName": ["Bhrama-associated patterns"],
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Vertigo"},
        {"@type": "MedicalSymptom", "name": "Dizziness"},
        {"@type": "MedicalSymptom", "name": "Motion sensitivity"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Vata-pacifying protocols"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Medication Overuse Headache",
      "alternateName": ["MOH", "Rebound Headache"],
      "code": {"@type": "MedicalCode", "code": "G44.4", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Daily headache"},
        {"@type": "MedicalSymptom", "name": "High acute medication use"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Ayurvedic withdrawal support"}
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
            "price": "[X]",
            "description": "60-minute consultation with BAMS physician, subtype identification, neurology coordination plan, written treatment plan"
          },
          {
            "@type": "Offer",
            "name": "Standard 6-Month Migraine Programme",
            "priceCurrency": "AED",
            "price": "[X]",
            "description": "Six-month integrated Ayurvedic migraine treatment with Shirodhara, Nasya, internal medicines, and trigger management"
          },
          {
            "@type": "Offer",
            "name": "Comprehensive Chronic Migraine Programme",
            "priceCurrency": "AED",
            "price": "[X]",
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
        {"@type": "ListItem", "position": 3, "name": "Ayurveda for Migraine in Dubai", "item": "https://vedaracare.ae/conditions/migraine-ayurveda-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Ayurvedic treatment actually work for migraine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For most migraine subtypes, yes — when treatment is a structured 4-6 month medical programme. Across our 280+ migraine patients at the JVC clinic, episodic migraine patients typically see 40-70% reduction in migraine days over 6 months. Chronic migraine patients typically see 25-50% reduction. This is not a cure — migraine remains a lifelong condition — but meaningful sustained reduction is realistic."
          }
        },
        {
          "@type": "Question",
          "name": "Can Ayurveda cure migraine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Migraine is a primary neurological disease with strong genetic components. We will not promise a cure, and any clinic that does is being dishonest. What sustained Ayurvedic treatment can produce: substantial reduction in migraine frequency, reduction in attack severity, reduction in acute medication use, improvement in attack management, and improvement in quality of life between attacks."
          }
        },
        {
          "@type": "Question",
          "name": "How long does Ayurvedic migraine treatment take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard programme runs 6 months for most patients. Episodic migraine with moderate frequency often shows substantial improvement by month 3-4. Chronic migraine typically needs the full 6 months and sometimes extension to 9-12 months."
          }
        },
        {
          "@type": "Question",
          "name": "How is Ayurvedic migraine treatment different from preventive medications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Preventive medications work pharmacologically to reduce migraine frequency. Ayurvedic treatment addresses the underlying nervous-system and Pitta-Vata patterns through Shirodhara, Nasya, internal medicines, and trigger management. They are not competing approaches — they work on different mechanisms."
          }
        },
        {
          "@type": "Question",
          "name": "Can I do Ayurvedic treatment while on migraine preventives?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The vast majority of our migraine patients are on preventive medications. Ayurvedic treatment is compatible with all of these. We never ask you to stop preventive medication."
          }
        },
        {
          "@type": "Question",
          "name": "Will Ayurvedic herbs interact with my migraine medications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Ayurvedic herbs used at our JVC clinic for migraine are compatible with common migraine medications. Specific attention is paid to interactions with serotonergic medications and beta-blockers. Your full medication list is reviewed at consultation."
          }
        },
        {
          "@type": "Question",
          "name": "How much does Ayurvedic migraine treatment cost in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Vedara Care, initial assessment starts from AED 350. Across Dubai, comprehensive Ayurvedic migraine programmes typically range from AED 12,000 to AED 35,000."
          }
        },
        {
          "@type": "Question",
          "name": "Will I have to stop my triptans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Triptans, gepants, NSAIDs, and other acute medications remain available throughout the programme. We do not ask you to \"tough out\" attacks. The goal is reducing attack frequency so that acute medication use naturally decreases."
          }
        },
        {
          "@type": "Question",
          "name": "What about CGRP inhibitors? Should I switch to Ayurveda?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CGRP inhibitors represent a significant therapeutic advance for many migraine patients. For patients responding well to them, we recommend continuation. For patients who started CGRP inhibitors and want to address underlying patterns, Ayurvedic treatment complements them."
          }
        },
        {
          "@type": "Question",
          "name": "What does Shirodhara feel like?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Shirodhara involves lying still on a wooden droni table while warm medicated oil flows from a copper vessel suspended above your forehead. Most patients describe it as a particular kind of slowed consciousness that is unlike anything else."
          }
        },
        {
          "@type": "Question",
          "name": "Will Nasya hurt? Is it tolerable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nasya involves medicated oil drops administered through each nostril. The first session can feel mildly uncomfortable as the oil reaches the back of the throat. By session 3-4, most patients describe it as easily tolerable."
          }
        },
        {
          "@type": "Question",
          "name": "What dietary changes will I need to make?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The dietary protocol is dosha-specific and trigger-aware. General principles: identify and avoid specific triggers, reduce inflammatory foods, regulate caffeine, and maintain consistent meal timing."
          }
        },
        {
          "@type": "Question",
          "name": "Can pregnant women have Ayurvedic migraine treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Modified Ayurvedic protocols are available during pregnancy. Shirodhara with appropriate oils, gentle Abhyanga, and pregnancy-safe herbal medicines are available."
          }
        },
        {
          "@type": "Question",
          "name": "Can children and teenagers have Ayurvedic migraine treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, with modified protocols. For adolescents with parental consultation and often alongside paediatric neurology, modified Ayurvedic programmes are available."
          }
        },
        {
          "@type": "Question",
          "name": "What about menstrual migraine specifically?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Menstrual migraine has specific Ayurvedic protocols recognizing the hormonal pattern. Treatment adds cycle-specific timing and hormonal-pattern dietary modifications."
          }
        },
        {
          "@type": "Question",
          "name": "Does this work for vestibular migraine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, vestibular migraine responds to modified Ayurvedic protocols. Treatment is typically gentler and slower-paced than for other subtypes."
          }
        },
        {
          "@type": "Question",
          "name": "Where exactly is your migraine clinic in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our clinic is in Jumeirah Village Circle (JVC), Dubai — next to Circle Mall, three minutes from FIVE Jumeirah Village Hotel. Free patient parking is available."
          }
        },
        {
          "@type": "Question",
          "name": "Do you coordinate with Dubai neurologists?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We work with several Dubai neurology practices for joint migraine patients. We do not work in competition with neurology — we coordinate care."
          }
        },
        {
          "@type": "Question",
          "name": "Does insurance cover Ayurvedic migraine treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Migraine is recognised as a medical condition for insurance purposes, which often supports coverage. We are direct-billing partners with seven major insurers."
          }
        },
        {
          "@type": "Question",
          "name": "How do I start?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Always with a thorough assessment. The 60-minute consultation at our JVC clinic includes comprehensive history, subtype identification, and a written treatment plan."
          }
        }
      ]
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
