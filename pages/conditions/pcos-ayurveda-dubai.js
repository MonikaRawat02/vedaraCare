import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import ConditionPhenotypes from '../../components/ayurveda/ConditionPhenotypes';
import TreatmentBenefits from '../../components/ayurveda/TreatmentBenefits';
import TreatmentProtocol from '../../components/ayurveda/Protocols';
import ConditionSymptoms from '../../components/ayurveda/ConditionSymptoms';
import ConditionFertility from '../../components/ayurveda/ConditionFertility';
import ConditionBoundaries from '../../components/ayurveda/ConditionBoundaries';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import { 
  pcosHero, 
  pcosIntro, 
  pcosMechanism, 
  pcosPhenotypes, 
  pcosBenefits,
  pcosProtocol,
  pcosSymptoms,
  pcosFertility,
  pcosBoundaries,
  pcosReviews,
  pcosPrograms,
  pcosFaqs,
  pcosTreatmentLocation,
  pcosFinalCTA,
  pcosRelatedPages
} from '../../data/pcosData';

const PcosAyurvedaDubai = () => {
  const currentDate = new Date().toISOString();

  return (
    <>
      <Head>
        <title>Ayurveda for PCOS in Dubai | Female Doctors | Vedara Care JVC</title>
        <meta name="description" content="DHA-licensed Ayurvedic treatment for PCOS in Dubai by female BAMS doctors — Panchakarma, herbal medicine, dietary protocols. 6-month programme. From AED 450." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ayurveda for PCOS in Dubai — Female Doctors, 6-Month Programme" />
        <meta property="og:description" content="DHA-licensed Ayurvedic PCOS treatment by female BAMS physicians at our JVC clinic. Panchakarma, herbal medicine, integrated with gynaecology." />
        <meta property="og:image" content="https://vedaracare.ae/images/pcos-ayurveda-dubai-hero.webp" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/pcos-ayurveda-dubai/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content="2026-05-01" />
        <meta property="article:modified_time" content={currentDate} />
        <meta property="article:author" content="Dr. Priya Menon" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Canonical & Language */}
        <link rel="canonical" href="https://vedaracare.ae/conditions/pcos-ayurveda-dubai/" />
        <link rel="alternate" hrefLang="en-AE" href="https://vedaracare.ae/conditions/pcos-ayurveda-dubai/" />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/conditions/pcos-ayurveda-dubai/" />
        <link rel="alternate" hrefLang="x-default" href="https://vedaracare.ae/conditions/pcos-ayurveda-dubai/" />
      </Head>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            "@id": "https://vedaracare.ae/conditions/pcos-ayurveda-dubai/#condition",
            "name": "Polycystic Ovary Syndrome (PCOS)",
            "alternateName": ["PCOS", "PCOD", "Polycystic Ovarian Syndrome", "Polycystic Ovarian Disease", "Stein-Leventhal Syndrome"],
            "code": [{"@type": "MedicalCode", "code": "E28.2", "codingSystem": "ICD-10"}],
            "associatedAnatomy": [
              {"@type": "AnatomicalStructure", "name": "Ovary"},
              {"@type": "AnatomicalStructure", "name": "Endocrine system"}
            ],
            "signOrSymptom": [
              {"@type": "MedicalSymptom", "name": "Irregular menstrual cycles"},
              {"@type": "MedicalSymptom", "name": "Absent menstruation (amenorrhoea)"},
              {"@type": "MedicalSymptom", "name": "Hirsutism (unwanted hair growth)"},
              {"@type": "MedicalSymptom", "name": "Acne"},
              {"@type": "MedicalSymptom", "name": "Hair loss"},
              {"@type": "MedicalSymptom", "name": "Weight gain"},
              {"@type": "MedicalSymptom", "name": "Insulin resistance"},
              {"@type": "MedicalSymptom", "name": "Mood changes"},
              {"@type": "MedicalSymptom", "name": "Fertility difficulties"},
              {"@type": "MedicalSymptom", "name": "Polycystic ovaries on ultrasound"}
            ],
            "possibleTreatment": [
              {"@type": "MedicalProcedure", "name": "Panchakarma", "url": "https://vedaracare.ae/treatments/panchakarma-dubai/"},
              {"@type": "MedicalProcedure", "name": "Virechana", "url": "https://vedaracare.ae/treatments/panchakarma-dubai/"},
              {"@type": "MedicalProcedure", "name": "Basti", "url": "https://vedaracare.ae/treatments/panchakarma-dubai/"},
              {"@type": "MedicalProcedure", "name": "Abhyanga", "url": "https://vedaracare.ae/treatments/abhyanga-dubai/"},
              {"@type": "MedicalProcedure", "name": "Shirodhara", "url": "https://vedaracare.ae/treatments/shirodhara-dubai/"},
              {"@type": "MedicalTherapy", "name": "Ayurvedic herbal medicines"},
              {"@type": "MedicalTherapy", "name": "Dietary regulation"},
              {"@type": "MedicalTherapy", "name": "Lifestyle modification"},
              {"@type": "MedicalProcedure", "name": "IUI"},
              {"@type": "MedicalProcedure", "name": "IVF"}
            ],
            "riskFactor": [
              {"@type": "MedicalRiskFactor", "name": "Family history of PCOS"},
              {"@type": "MedicalRiskFactor", "name": "Insulin resistance"},
              {"@type": "MedicalRiskFactor", "name": "Obesity"},
              {"@type": "MedicalRiskFactor", "name": "South Asian or Middle Eastern ethnicity"},
              {"@type": "MedicalRiskFactor", "name": "Sedentary lifestyle"},
              {"@type": "MedicalRiskFactor", "name": "Chronic stress"}
            ],
            "epidemiology": "Affects approximately 1 in 7 women of reproductive age globally, with higher prevalence in South Asian and Middle Eastern populations including Dubai residents."
          })
        }}
      />

      {/* Additional Semantic Entities */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "MedicalCondition",
              "name": "Phenotype A (Rotterdam) PCOS",
              "alternateName": ["Classic PCOS"]
            },
            {
              "@context": "https://schema.org",
              "@type": "MedicalCondition",
              "name": "Phenotype B (Rotterdam) PCOS",
              "alternateName": ["Ovulatory PCOS"]
            },
            {
              "@context": "https://schema.org",
              "@type": "MedicalCondition",
              "name": "Phenotype C (Rotterdam) PCOS",
              "alternateName": ["Non-Hyperandrogenic PCOS"]
            },
            {
              "@context": "https://schema.org",
              "@type": "MedicalCondition",
              "name": "Phenotype D (Rotterdam) PCOS",
              "alternateName": ["Mild PCOS"]
            },
            {
              "@context": "https://schema.org",
              "@type": "MedicalCondition",
              "name": "Hyperandrogenism"
            },
            {
              "@context": "https://schema.org",
              "@type": "MedicalGuideline",
              "name": "Rotterdam criteria"
            },
            {
              "@context": "https://schema.org",
              "@type": "Substance",
              "name": "Shatavari"
            },
            {
              "@context": "https://schema.org",
              "@type": "Substance",
              "name": "Ashoka"
            },
            {
              "@context": "https://schema.org",
              "@type": "Substance",
              "name": "Guduchi"
            },
            {
              "@context": "https://schema.org",
              "@type": "Substance",
              "name": "Kanchanara Guggulu"
            },
            {
              "@context": "https://schema.org",
              "@type": "Substance",
              "name": "Metformin"
            },
            {
              "@context": "https://schema.org",
              "@type": "Substance",
              "name": "Oral contraceptives"
            },
            {
              "@context": "https://schema.org",
              "@type": "Substance",
              "name": "Spironolactone"
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Dubai Health Authority"
            },
            {
              "@context": "https://schema.org",
              "@type": "Place",
              "name": "Jumeirah Village Circle"
            },
            {
              "@context": "https://schema.org",
              "@type": "EducationalCredential",
              "name": "BAMS"
            },
            {
              "@context": "https://schema.org",
              "@type": "EducationalCredential",
              "name": "MD (Ayurveda)"
            },
            {
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "@id": "https://vedaracare.ae/#organization",
              "name": "Vedara Care Polyclinic"
            },
            {
              "@context": "https://schema.org",
              "@type": "MedicalCondition",
              "name": "Infertility"
            },
            {
              "@context": "https://schema.org",
              "@type": "MedicalEntity",
              "name": "Vata"
            },
            {
              "@context": "https://schema.org",
              "@type": "MedicalEntity",
              "name": "Pitta"
            },
            {
              "@context": "https://schema.org",
              "@type": "MedicalEntity",
              "name": "Kapha"
            }
          ])
        }}
      />

      {/* Schema 3 — MedicalWebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "@id": "https://vedaracare.ae/conditions/pcos-ayurveda-dubai/#webpage",
            "name": "Ayurveda for PCOS in Dubai",
            "url": "https://vedaracare.ae/conditions/pcos-ayurveda-dubai/",
            "about": {"@id": "https://vedaracare.ae/conditions/pcos-ayurveda-dubai/#condition"},
            "audience": {
              "@type": "PatientAudience",
              "geographicArea": {"@type": "Place", "name": "Dubai, United Arab Emirates"},
              "requiredGender": "Female"
            },
            "lastReviewed": currentDate,
            "reviewedBy": {
              "@type": "Physician",
              "name": "Dr. Priya Menon",
              "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
            },
            "primaryImageOfPage": "https://vedaracare.ae/images/pcos-ayurveda-dubai-hero.webp"
          })
        }}
      />

      {/* Schema 4 — Service with OfferCatalog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Ayurvedic PCOS Treatment Programmes",
            "provider": {"@id": "https://vedaracare.ae/#organization"},
            "areaServed": [
              {"@type": "City", "name": "Dubai"},
              {"@type": "Place", "name": "United Arab Emirates"}
            ],
            "serviceType": "Ayurvedic Treatment for PCOS",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "PCOS Programmes",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "name": "PCOS Initial Assessment",
                  "priceCurrency": "AED",
                  "price": "450",
                  "description": "60-minute consultation with female Ayurvedic physician, phenotype classification, written treatment plan"
                },
                {
                  "@type": "Offer",
                  "name": "Standard 6-Month PCOS Programme",
                  "priceCurrency": "AED",
                  "price": "18500",
                  "description": "Comprehensive 6-month Ayurvedic PCOS treatment with Panchakarma, herbal medicines, dietary and lifestyle protocols"
                },
                {
                  "@type": "Offer",
                  "name": "Comprehensive PCOS + Fertility Programme",
                  "priceCurrency": "AED",
                  "price": "24500",
                  "description": "Extended 6-9 month programme for women trying to conceive, coordinated with fertility specialists"
                }
              ]
            }
          })
        }}
      />

      {/* Schema 5 — Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Ayurveda for PCOS in Dubai — A Complete Clinical Guide",
            "image": "https://vedaracare.ae/images/pcos-ayurveda-dubai-hero.webp",
            "datePublished": "2026-05-01",
            "dateModified": currentDate,
            "author": {
              "@type": "Physician",
              "name": "Dr. Priya Menon",
              "url": "https://vedaracare.ae/doctors/dr-priya-menon-ayurveda/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Vedara Care Polyclinic",
              "logo": {"@type": "ImageObject", "url": "https://vedaracare.ae/logo.png"}
            },
            "mainEntityOfPage": "https://vedaracare.ae/conditions/pcos-ayurveda-dubai/"
          })
        }}
      />

      {/* Schema 7 — BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
              {"@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/"},
              {"@type": "ListItem", "position": 3, "name": "Ayurveda for PCOS in Dubai", "item": "https://vedaracare.ae/conditions/pcos-ayurveda-dubai/"}
            ]
          })
        }}
      />

      {/* Schema 7 — Organization */}
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

      {/* Schema 8 — FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": pcosFaqs.faqs.map((faq, index) => ({
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

      {/* Section 1 - Hero */}
      <AyurvedaHero {...pcosHero} />
      
      {/* Section 2 - Intro */}
      <AyurvedaIntro {...pcosIntro} />
      
      {/* Section 3 - Mechanism with Image 1 */}
      <TreatmentMechanism {...pcosMechanism} />
      
      {/* Section 4 - Phenotypes */}
      <ConditionPhenotypes {...pcosPhenotypes} />
      
      {/* Section 5 - Benefits (Four Pillars) */}
      <TreatmentBenefits {...pcosBenefits} />
      
      {/* Section 6 - Protocol (6-Month Programme) */}
      <TreatmentProtocol {...pcosProtocol} />
      
      {/* Section 7 - Symptoms (Symptom-by-Symptom) */}
      <ConditionSymptoms {...pcosSymptoms} />
      
      {/* Section 8 - Fertility */}
      <ConditionFertility {...pcosFertility} />
      
      {/* Section 9 - Boundaries */}
      <ConditionBoundaries {...pcosBoundaries} />
      
      {/* Section 10 - Reviews */}
      <TreatmentReviews {...pcosReviews} />
      
      {/* Section 11 - Programmes (Pricing) */}
      <TreatmentPrograms {...pcosPrograms} />
      
      {/* Section 12 - FAQ */}
      <FAQ {...pcosFaqs} />
      
      {/* Section 13 - Location */}
      <TreatmentLocation {...pcosTreatmentLocation} />
      
      {/* Section 14 - Final CTA */}
      <FinalCTA {...pcosFinalCTA} />
      
      {/* Section 15 - Related Pages */}
      <RelatedPages {...pcosRelatedPages} />
    </>
  );
};

export default PcosAyurvedaDubai;
