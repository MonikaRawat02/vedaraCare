import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import ConditionPhenotypes from '../../components/ayurveda/ConditionPhenotypes';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import TherapyGrid from '../../components/ayurveda/TherapyGrid';
import TreatmentProtocol from '../../components/ayurveda/TreatmentProtocol';
import ConditionSymptoms from '../../components/ayurveda/ConditionSymptoms';
import ConditionBoundaries from '../../components/ayurveda/ConditionBoundaries';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  hairLossHero,
  hairLossIntro,
  hairLossPhenotypes,
  hairLossMechanism1,
  hairLossMechanism2,
  hairLossTherapies,
  hairLossProtocol,
  hairLossSymptoms,
  hairLossBoundaries,
  hairLossReviews,
  hairLossPrograms,
  hairLossFaqs,
  hairLossTreatmentLocation,
  hairLossFinalCTA,
  hairLossRelatedPages
} from '../../data/hairLossData';

const HairLossAyurvedaDubai = () => {
  const currentDate = new Date().toISOString();

  return (
    <>
      <Head>
        <title>Ayurveda for Hair Loss in Dubai | JVC Clinic | Vedara Care</title>
        <meta name="description" content="DHA-licensed Ayurvedic hair loss treatment at our JVC clinic, Dubai — pattern-specific protocols for androgenetic, postpartum, telogen & alopecia areata. From AED 350." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ayurveda for Hair Loss in Dubai — Pattern-Specific Treatment at Our JVC Clinic" />
        <meta property="og:description" content="DHA-licensed Ayurvedic hair loss treatment at our Jumeirah Village Circle clinic. Pattern-identification approach for androgenetic, postpartum, telogen & more." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/hair-loss-ayurveda-dubai-hero.webp" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/hair-loss-ayurveda-dubai/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content="2026-05-01" />
        <meta property="article:modified_time" content={currentDate} />
        <meta property="article:author" content="Dr. Sharma Patel" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Canonical & Language */}
        <link rel="canonical" href="https://vedaracare.ae/conditions/hair-loss-ayurveda-dubai/" />
        <link rel="alternate" hrefLang="en-AE" href="https://vedaracare.ae/conditions/hair-loss-ayurveda-dubai/" />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/conditions/hair-loss-ayurveda-dubai/" />
        <link rel="alternate" hrefLang="x-default" href="https://vedaracare.ae/conditions/hair-loss-ayurveda-dubai/" />
      </Head>

      {/* Schema 1 - Medical Condition (Primary) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            "@id": "https://vedaracare.ae/conditions/hair-loss-ayurveda-dubai/#condition",
            "name": "Hair Loss",
            "alternateName": ["Alopecia", "Hair Fall", "Khalitya", "Indralupta", "Hair Thinning", "Scalp Hair Loss"],
            "code": [
              {"@type": "MedicalCode", "code": "L65.9", "codingSystem": "ICD-10"},
              {"@type": "MedicalCode", "code": "L64", "codingSystem": "ICD-10"},
              {"@type": "MedicalCode", "code": "L63", "codingSystem": "ICD-10"}
            ],
            "associatedAnatomy": [
              {"@type": "AnatomicalStructure", "name": "Scalp"},
              {"@type": "AnatomicalStructure", "name": "Hair follicle"}
            ],
            "signOrSymptom": [
              {"@type": "MedicalSymptom", "name": "Excessive hair shedding"},
              {"@type": "MedicalSymptom", "name": "Visible scalp thinning"},
              {"@type": "MedicalSymptom", "name": "Receding hairline"},
              {"@type": "MedicalSymptom", "name": "Patchy hair loss"},
              {"@type": "MedicalSymptom", "name": "Reduced hair density at crown"},
              {"@type": "MedicalSymptom", "name": "Hair miniaturisation"}
            ],
            "possibleTreatment": [
              {"@type": "MedicalProcedure", "name": "Nasya"},
              {"@type": "MedicalProcedure", "name": "Shirodhara", "url": "https://vedaracare.ae/treatments/shirodhara-dubai/"},
              {"@type": "MedicalProcedure", "name": "Takradhara"},
              {"@type": "MedicalProcedure", "name": "Shiroabhyanga"},
              {"@type": "MedicalProcedure", "name": "Panchakarma", "url": "https://vedaracare.ae/treatments/panchakarma-dubai/"},
              {"@type": "MedicalTherapy", "name": "Internal Ayurvedic Medicines"}
            ],
            "riskFactor": [
              {"@type": "MedicalRiskFactor", "name": "Genetic predisposition (androgenetic)"},
              {"@type": "MedicalRiskFactor", "name": "Postpartum hormonal changes"},
              {"@type": "MedicalRiskFactor", "name": "Iron deficiency"},
              {"@type": "MedicalRiskFactor", "name": "Thyroid disorders"},
              {"@type": "MedicalRiskFactor", "name": "Severe physical or emotional stress"},
              {"@type": "MedicalRiskFactor", "name": "PCOS and hormonal disorders"},
              {"@type": "MedicalRiskFactor", "name": "Autoimmune conditions"},
              {"@type": "MedicalRiskFactor", "name": "Scalp conditions"}
            ]
          })
        }}
      />

      {/* Schema 2 - Hair Loss Pattern Subtypes & Additional Semantic Entities */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalCondition",
                "name": "Androgenetic Alopecia",
                "alternateName": ["Male Pattern Baldness", "Female Pattern Hair Loss", "Khalitya"],
                "code": {"@type": "MedicalCode", "code": "L64.9", "codingSystem": "ICD-10"},
                "signOrSymptom": [
                  {"@type": "MedicalSymptom", "name": "Receding hairline"},
                  {"@type": "MedicalSymptom", "name": "Crown thinning"},
                  {"@type": "MedicalSymptom", "name": "Hair miniaturisation"}
                ],
                "possibleTreatment": [
                  {"@type": "MedicalProcedure", "name": "Nasya"},
                  {"@type": "MedicalProcedure", "name": "Shirodhara", "url": "https://vedaracare.ae/treatments/shirodhara-dubai/"},
                  {"@type": "MedicalTherapy", "name": "Bhringraja-based protocols"}
                ]
              },
              {
                "@type": "MedicalCondition",
                "name": "Telogen Effluvium",
                "alternateName": ["Diffuse Hair Shedding"],
                "code": {"@type": "MedicalCode", "code": "L65.1", "codingSystem": "ICD-10"},
                "signOrSymptom": [
                  {"@type": "MedicalSymptom", "name": "Excessive hair shedding"},
                  {"@type": "MedicalSymptom", "name": "Diffuse scalp thinning"}
                ]
              },
              {
                "@type": "MedicalCondition",
                "name": "Alopecia Areata",
                "alternateName": ["Indralupta", "Patchy Hair Loss"],
                "code": {"@type": "MedicalCode", "code": "L63.9", "codingSystem": "ICD-10"},
                "signOrSymptom": [
                  {"@type": "MedicalSymptom", "name": "Patchy hair loss"}
                ]
              },
              {
                "@type": "MedicalCondition",
                "name": "Postpartum Hair Loss",
                "signOrSymptom": [
                  {"@type": "MedicalSymptom", "name": "Excessive hair shedding"}
                ]
              },
              {
                "@type": "MedicalCondition",
                "name": "Khalitya"
              },
              {
                "@type": "MedicalCondition",
                "name": "Indralupta"
              },
              {
                "@type": "MedicalCondition",
                "name": "Palitya"
              },
              {
                "@type": "MedicalCondition",
                "name": "Darunaka"
              },
              {
                "@type": "MedicalSubstance",
                "name": "Bhringraja Taila"
              },
              {
                "@type": "MedicalSubstance",
                "name": "Neelibhringadi Taila"
              },
              {
                "@type": "MedicalSubstance",
                "name": "Anu Taila"
              },
              {
                "@type": "MedicalSubstance",
                "name": "Shadbindu Taila"
              },
              {
                "@type": "MedicalEntity",
                "name": "Vata dosha"
              },
              {
                "@type": "MedicalEntity",
                "name": "Pitta dosha"
              },
              {
                "@type": "MedicalEntity",
                "name": "Kapha dosha"
              },
              {
                "@type": "Place",
                "name": "Circle Mall"
              },
              {
                "@type": "Place",
                "name": "FIVE Jumeirah Village"
              },
              {
                "@type": "Place",
                "name": "JSS Private School"
              },
              {
                "@type": "MedicalSpecialty",
                "name": "Dermatology"
              },
              {
                "@type": "Drug",
                "name": "Minoxidil"
              },
              {
                "@type": "Drug",
                "name": "Finasteride"
              },
              {
                "@type": "MedicalProcedure",
                "name": "Shiroabhyanga"
              },
              {
                "@type": "MedicalProcedure",
                "name": "Takradhara"
              },
              {
                "@type": "MedicalProcedure",
                "name": "Nasya"
              },
              {
                "@type": "Plant",
                "name": "Bhringraja"
              },
              {
                "@type": "Plant",
                "name": "Amalaki"
              },
              {
                "@type": "Plant",
                "name": "Brahmi"
              }
            ]
          })
        }}
      />

      {/* Schema 3 - Medical Web Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "@id": "https://vedaracare.ae/conditions/hair-loss-ayurveda-dubai/#webpage",
            "name": "Ayurveda for Hair Loss in Dubai",
            "url": "https://vedaracare.ae/conditions/hair-loss-ayurveda-dubai/",
            "about": {"@id": "https://vedaracare.ae/conditions/hair-loss-ayurveda-dubai/#condition"},
            "audience": {
              "@type": "PatientAudience",
              "geographicArea": {"@type": "Place", "name": "Dubai, United Arab Emirates"}
            },
            "lastReviewed": currentDate,
            "reviewedBy": {
              "@type": "Physician",
              "name": "Dr. Sharma Patel",
              "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
            },
            "primaryImageOfPage": "https://vedaracare.ae/og-images/hair-loss-ayurveda-dubai-hero.webp"
          })
        }}
      />

      {/* Schema 4 - Service with Offer Catalog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Ayurvedic Hair Loss Treatment Programmes",
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
            "serviceType": "Ayurvedic Treatment for Hair Loss",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Hair Loss Programmes",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "name": "Hair Loss Initial Assessment",
                  "priceCurrency": "AED",
                  "price": "350",
                  "description": "60-minute consultation with BAMS-qualified physician at our JVC clinic, scalp examination, pattern identification, written treatment plan"
                },
                {
                  "@type": "Offer",
                  "name": "Standard 6-Month Hair Loss Programme",
                  "priceCurrency": "AED",
                  "price": "12500",
                  "description": "Six-month structured Ayurvedic hair loss treatment with Nasya, scalp therapies, internal medicines"
                },
                {
                  "@type": "Offer",
                  "name": "Comprehensive Hair Loss + Dermatology Programme",
                  "priceCurrency": "AED",
                  "price": "18500",
                  "description": "Integrated 6-9 month programme with extended Panchakarma, photographic monitoring, dermatology coordination"
                }
              ]
            }
          })
        }}
      />

      {/* Schema 5 - Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Ayurveda for Hair Loss in Dubai — A Complete Clinical Guide",
            "image": "https://vedaracare.ae/og-images/hair-loss-ayurveda-dubai-hero.webp",
            "datePublished": "2026-05-01",
            "dateModified": currentDate,
            "author": {
              "@type": "Physician",
              "name": "Dr. Sharma Patel",
              "url": "https://vedaracare.ae/doctors/dr-sharma-patel/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Vedara Care Polyclinic",
              "logo": {"@type": "ImageObject", "url": "https://vedaracare.ae/logo.png"}
            },
            "mainEntityOfPage": "https://vedaracare.ae/conditions/hair-loss-ayurveda-dubai/"
          })
        }}
      />

      {/* Schema 6 - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://vedaracare.ae/#organization",
            "name": "Vedara Care Polyclinic",
            "url": "https://vedaracare.ae/",
            "logo": "https://vedaracare.ae/logo.png"
          })
        }}
      />

      {/* Schema 7 - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
              {"@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/"},
              {"@type": "ListItem", "position": 3, "name": "Ayurveda for Hair Loss in Dubai", "item": "https://vedaracare.ae/conditions/hair-loss-ayurveda-dubai/"}
            ]
          })
        }}
      />

      {/* Schema 8 - FAQ Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": hairLossFaqs.faqs.map((faq, idx) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Section 1: Hero */}
      <AyurvedaHero {...hairLossHero} />

      {/* Section 2: Intro */}
      <AyurvedaIntro {...hairLossIntro} />

      {/* Section 3: Condition Phenotypes */}
      <ConditionPhenotypes {...hairLossPhenotypes} />

      {/* Section 4: Treatment Mechanism (Four Levels) */}
      <TreatmentMechanism {...hairLossMechanism1} />

      {/* Section 5: Therapy Grid */}
      <TherapyGrid {...hairLossTherapies} />


      {/* Section 6: Treatment Protocol */}
      <TreatmentProtocol {...hairLossProtocol} />

      {/* Section 7: Condition Symptoms (Realistic Outcomes) */}
      <ConditionSymptoms {...hairLossSymptoms} />
      {/* Section 5: Treatment Mechanism (Why Most Fail) */}
      <TreatmentMechanism {...hairLossMechanism2} />


      {/* Section 8: Condition Boundaries */}
      <ConditionBoundaries {...hairLossBoundaries} />

      {/* Section 9: Treatment Reviews */}
      <TreatmentReviews {...hairLossReviews} />

      {/* Section 10: Treatment Programs */}
      <TreatmentPrograms {...hairLossPrograms} />

      {/* Section 11: FAQ */}
      <FAQ {...hairLossFaqs} />

      {/* Section 12: Treatment Location */}
      <TreatmentLocation {...hairLossTreatmentLocation} />

      {/* Section 13: Final CTA */}
      <FinalCTA {...hairLossFinalCTA} />

      {/* Section 14: Related Pages */}
      <RelatedPages {...hairLossRelatedPages} />
    </>
  );
};

export default HairLossAyurvedaDubai;
