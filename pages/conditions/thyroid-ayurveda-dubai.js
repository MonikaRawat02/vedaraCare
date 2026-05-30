import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import ArthritisTypes from '../../components/ayurveda/ArthritisTypes';
import ArthritisPillars from '../../components/ayurveda/ArthritisPillars';
import ClinicalBoundaries from '../../components/ayurveda/ClinicalBoundaries';
import TreatmentProtocol from '../../components/ayurveda/Protocols';
import OutcomeRanges from '../../components/ayurveda/OutcomeRanges';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import FAQ from '../../components/home/FAQ';


import {
  thyroidHero,
  thyroidIntro,
  thyroidMechanism,
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
      "alternateName": ["Hypothyroidism", "Hashimoto's Thyroiditis", "Graves' Disease", "Galaganda", "Gandamala"],
      "code": [
        {"@type": "MedicalCode", "code": "E03.9", "codingSystem": "ICD-10"},
        {"@type": "MedicalCode", "code": "E06.3", "codingSystem": "ICD-10"},
        {"@type": "MedicalCode", "code": "E05.0", "codingSystem": "ICD-10"}
      ],
      "associatedAnatomy": [
        {"@type": "AnatomicalStructure", "name": "Thyroid gland"},
        {"@type": "AnatomicalStructure", "name": "Endocrine system"}
      ],
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Fatigue"},
        {"@type": "MedicalSymptom", "name": "Weight gain"},
        {"@type": "MedicalSymptom", "name": "Hair loss"},
        {"@type": "MedicalSymptom", "name": "Cold intolerance"},
        {"@type": "MedicalSymptom", "name": "Brain fog"},
        {"@type": "MedicalSymptom", "name": "Mood changes"},
        {"@type": "MedicalSymptom", "name": "Constipation"},
        {"@type": "MedicalSymptom", "name": "Dry skin"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Panchakarma", "url": "https://vedaracare.ae/treatments/panchakarma-jvc/"},
        {"@type": "MedicalProcedure", "name": "Virechana"},
        {"@type": "MedicalProcedure", "name": "Vasti"},
        {"@type": "MedicalTherapy", "name": "Kanchanara Guggulu"},
        {"@type": "MedicalTherapy", "name": "Varunadi Kashayam"},
        {"@type": "MedicalTherapy", "name": "Ayurvedic thyroid medicines"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": "https://vedaracare.ae/conditions/thyroid-ayurveda-dubai/#webpage",
      "name": "Ayurveda for Thyroid in Dubai | JVC Clinic | Vedara Care",
      "url": "https://vedaracare.ae/conditions/thyroid-ayurveda-dubai/",
      "about": {"@id": "https://vedaracare.ae/conditions/thyroid-ayurveda-dubai/#condition"},
      "audience": {
        "@type": "PatientAudience",
        "geographicArea": {"@type": "Place", "name": "Dubai, United Arab Emirates"}
      },
      "lastReviewed": "2026-05-30",
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. Priya Menon",
        "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/"},
        {"@type": "ListItem", "position": 3, "name": "Ayurveda for Thyroid in Dubai", "item": "https://vedaracare.ae/conditions/thyroid-ayurveda-dubai/"}
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Ayurveda for Thyroid in Dubai | Hashimoto's & Hypothyroid | Vedara Care</title>
        <meta name="description" content="DHA-licensed Ayurvedic thyroid treatment in Dubai. Integrative 6-9 month programmes for Hashimoto's, hypothyroidism & Graves' disease. Coordinated with endocrinology." />
        <link rel="canonical" href="https://vedaracare.ae/conditions/thyroid-ayurveda-dubai/" />
        
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

        {/* Honest Opening - Using ClinicalBoundaries for the two-column list */}
        <ClinicalBoundaries 
          label="AN HONEST OPENING"
          title="What we will and will not do for your thyroid condition."
          
          leftCard={{
            label: "We will not",
            items: thyroidMechanism.weWillNot.items,
            bgColor: "bg-white",
            borderColor: "border-gray-100",
            labelColor: "text-[#E63946]",
            bulletColor: "bg-[#E63946]"
          }}
          rightCard={{
            label: "We will",
            items: thyroidMechanism.weWill.items,
            bgColor: "bg-white",
            borderColor: "border-[#C9A961]/20",
            labelColor: "text-[#C9A961]",
            checkColor: "text-[#10B981]"
          }}
          footer={thyroidMechanism.content[0]}
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
          bgColor="bg-[#F5F1EB]"
        />

        <ClinicalBoundaries 
          {...thyroidBoundaries}
          bgColor="bg-[#F5F5DC]"
        />

        <FAQ 
          {...thyroidFaqs} 
          bgColor="bg-white"
        />

        <FinalCTA 
          {...thyroidCTA}
          bgColor="bg-[#FAF7F2]"
        />
      </main>
    </>
  );
};

export default AyurvedaThyroid;
