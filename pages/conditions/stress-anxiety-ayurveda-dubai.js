import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import ArthritisTypes from '../../components/ayurveda/ArthritisTypes';
import ArthritisPillars from '../../components/ayurveda/ArthritisPillars';
import ClinicalBoundaries from '../../components/ayurveda/ClinicalBoundaries';
import PositioningStatement from '../../components/ayurveda/PositioningStatement';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import FAQ from '../../components/home/FAQ';

import {
  stressAnxietyHero,
  stressAnxietyIntro,
  stressAnxietyMechanism,
  stressAnxietyPatterns,
  stressAnxietyPillars,
  stressAnxietyPositioning,
  stressAnxietyProtocol,
  stressAnxietyBoundaries,
  stressAnxietyReviews,
  stressAnxietyPrograms,
  stressAnxietyFaqs,
  stressAnxietyLocation,
  stressAnxietyCTA,
  stressAnxietyRelatedPages
} from '../../data/stressAnxietyData';

const AyurvedaStressAnxiety = () => {
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "@id": "https://vedaracare.ae/conditions/stress-anxiety-ayurveda-dubai/#condition",
      "name": "Stress and Anxiety",
      "alternateName": ["Chronic Stress", "Generalised Anxiety Disorder", "Burnout", "Chittodvega", "Manas Roga"],
      "associatedAnatomy": [
        {"@type": "AnatomicalStructure", "name": "Nervous system"},
        {"@type": "AnatomicalStructure", "name": "Brain"},
        {"@type": "AnatomicalStructure", "name": "HPA Axis"}
      ],
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Sleep dysfunction"},
        {"@type": "MedicalSymptom", "name": "Persistent worry"},
        {"@type": "MedicalSymptom", "name": "Physical exhaustion"},
        {"@type": "MedicalSymptom", "name": "Irritability"},
        {"@type": "MedicalSymptom", "name": "Digestive issues"},
        {"@type": "MedicalSymptom", "name": "Panic attacks"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Shirodhara", "url": "https://vedaracare.ae/treatments/shirodhara-dubai/"},
        {"@type": "MedicalProcedure", "name": "Abhyanga", "url": "https://vedaracare.ae/treatments/abhyanga-dubai/"},
        {"@type": "MedicalTherapy", "name": "Ayurvedic nervine tonics"},
        {"@type": "MedicalTherapy", "name": "Lifestyle and rhythm protocols"}
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
    }
  ];

  return (
    <>
      <Head>
        <title>Ayurveda for Stress & Anxiety in Dubai | JVC Clinic | Vedara Care</title>
        <meta name="description" content="DHA-licensed Ayurvedic treatment for chronic stress, anxiety, and burnout at our JVC clinic, Dubai. Structured 3-6 month programmes combining Shirodhara, herbs, and lifestyle protocols." />
        <link rel="canonical" href="https://vedaracare.ae/conditions/stress-anxiety-ayurveda-dubai/" />
        
        <meta property="og:title" content="Ayurveda for Stress & Anxiety in Dubai — Integrated Treatment at Our JVC Clinic" />
        <meta property="og:description" content="DHA-licensed Ayurvedic treatment for stress and anxiety at our Jumeirah Village Circle clinic. Structured protocols for burnout, GAD & chronic stress." />
        <meta property="og:url" content="https://vedaracare.ae/conditions/stress-anxiety-ayurveda-dubai/" />
        <meta property="og:type" content="article" />
        
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
          cardBg="bg-[#F6F1E9]"
        />

        <TreatmentMechanism 
          {...stressAnxietyProtocol}
          bgColor="bg-[#FAF8F3]"
          imageLeft={false}
        />

        <ClinicalBoundaries 
          {...stressAnxietyBoundaries}
          bgColor="bg-white"
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

        <TreatmentLocation 
          {...stressAnxietyLocation}
          bgColor="bg-white"
        />

        <FinalCTA 
          {...stressAnxietyCTA}
          bgColor="bg-[#FAF8F3]"
        />

        <RelatedPages 
          {...stressAnxietyRelatedPages}
          bgColor="bg-white"
        />
      </main>
    </>
  );
};

export default AyurvedaStressAnxiety;
