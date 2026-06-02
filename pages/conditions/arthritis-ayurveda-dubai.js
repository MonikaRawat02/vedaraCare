import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import ClinicalBoundaries from '../../components/ayurveda/ClinicalBoundaries';
import ArthritisTypes from '../../components/ayurveda/ArthritisTypes';
import ArthritisPillars from '../../components/ayurveda/ArthritisPillars';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import FAQ from '../../components/home/FAQ';
import CTA from '../../components/home/CTA';


import {
  arthritisHero,
  arthritisIntro,
  arthritisBoundaries,
  arthritisTypesData,
  arthritisPillars,
  arthritisFaqs,
  arthritisCTA,
  arthritisRelatedPages,
} from '../../data/arthritisData';

const AyurvedaArthritis = () => {
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "@id": "https://vedaracare.ae/conditions/arthritis-ayurveda-dubai/#condition",
      "name": "Arthritis",
      "alternateName": ["Joint Disease", "Sandhi Roga", "Inflammatory Arthritis", "Degenerative Joint Disease"],
      "code": [
        {"@type": "MedicalCode", "code": "M19", "codingSystem": "ICD-10"},
        {"@type": "MedicalCode", "code": "M05", "codingSystem": "ICD-10"},
        {"@type": "MedicalCode", "code": "M10", "codingSystem": "ICD-10"}
      ],
      "associatedAnatomy": [
        {"@type": "AnatomicalStructure", "name": "Joint"},
        {"@type": "AnatomicalStructure", "name": "Synovium"},
        {"@type": "AnatomicalStructure", "name": "Cartilage"}
      ],
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Joint pain"},
        {"@type": "MedicalSymptom", "name": "Joint stiffness"},
        {"@type": "MedicalSymptom", "name": "Reduced range of motion"},
        {"@type": "MedicalSymptom", "name": "Joint swelling"},
        {"@type": "MedicalSymptom", "name": "Morning stiffness"},
        {"@type": "MedicalSymptom", "name": "Joint deformity (advanced)"},
        {"@type": "MedicalSymptom", "name": "Functional impairment"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Janu Vasti"},
        {"@type": "MedicalProcedure", "name": "Greeva Vasti"},
        {"@type": "MedicalProcedure", "name": "Kati Vasti", "url": "https://vedaracare.ae/treatments/kativasti-dubai/"},
        {"@type": "MedicalProcedure", "name": "Patra Pinda Sweda"},
        {"@type": "MedicalProcedure", "name": "Pizhichil"},
        {"@type": "MedicalProcedure", "name": "Njavarakizhi", "url": "https://vedaracare.ae/treatments/njavarakizhi-dubai/"},
        {"@type": "MedicalProcedure", "name": "Panchakarma", "url": "https://vedaracare.ae/treatments/panchakarma-dubai/"},
        {"@type": "MedicalTherapy", "name": "Physiotherapy", "url": "https://vedaracare.ae/physiotherapy-jvc/"},
        {"@type": "MedicalTherapy", "name": "Ayurvedic anti-inflammatory medicines"}
      ],
      "riskFactor": [
        {"@type": "MedicalRiskFactor", "name": "Age (osteoarthritis)"},
        {"@type": "MedicalRiskFactor", "name": "Genetic predisposition"},
        {"@type": "MedicalRiskFactor", "name": "Autoimmune disease (inflammatory arthritis)"},
        {"@type": "MedicalRiskFactor", "name": "Obesity"},
        {"@type": "MedicalRiskFactor", "name": "Previous joint injury"},
        {"@type": "MedicalRiskFactor", "name": "Sedentary lifestyle"},
        {"@type": "MedicalRiskFactor", "name": "HLA-B27 (ankylosing spondylitis)"},
        {"@type": "MedicalRiskFactor", "name": "Hyperuricaemia (gout)"}
      ]
    },
    // Replicate for all subtypes
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Knee Osteoarthritis",
      "alternateName": ["Janu Sandhivata", "Knee OA"],
      "code": {"@type": "MedicalCode", "code": "M17", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Knee pain with activity"},
        {"@type": "MedicalSymptom", "name": "Morning stiffness less than 30 minutes"},
        {"@type": "MedicalSymptom", "name": "Crepitus"},
        {"@type": "MedicalSymptom", "name": "Reduced knee range of motion"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Janu Vasti"},
        {"@type": "MedicalTherapy", "name": "Yogaraja Guggulu"},
        {"@type": "MedicalTherapy", "name": "Integrated physiotherapy"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": "https://vedaracare.ae/conditions/arthritis-ayurveda-dubai/#webpage",
      "name": "Ayurveda for Arthritis in Dubai",
      "url": "https://vedaracare.ae/conditions/arthritis-ayurveda-dubai/",
      "about": {"@id": "https://vedaracare.ae/conditions/arthritis-ayurveda-dubai/#condition"},
      "audience": {
        "@type": "PatientAudience",
        "geographicArea": {"@type": "Place", "name": "Dubai, United Arab Emirates"}
      },
      "lastReviewed": "2026-05-28",
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. Priya Menon",
        "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
      },
      "primaryImageOfPage": "https://vedaracare.ae/images/arthritis-ayurveda-dubai-hero.webp"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Ayurvedic Arthritis Treatment Programmes",
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
      "serviceType": "Ayurvedic Treatment for Arthritis",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Arthritis Programmes",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Arthritis Initial Assessment",
            "priceCurrency": "AED",
            "price": "350",
            "description": "60-minute consultation with BAMS physician at JVC clinic, type identification, written plan with realistic expectations"
          },
          {
            "@type": "Offer",
            "name": "Standard 4-6 Month Arthritis Programme",
            "priceCurrency": "AED",
            "price": "0",
            "description": "Four to six month structured Ayurvedic arthritis treatment with localised joint therapies, internal medicines, dietary protocols"
          },
          {
            "@type": "Offer",
            "name": "Comprehensive Integrated Arthritis Programme",
            "priceCurrency": "AED",
            "price": "0",
            "description": "Six to nine month programme with integrated physiotherapy, Panchakarma where appropriate, coordination with rheumatology and orthopaedics"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Ayurveda for Arthritis in Dubai — A Complete Clinical Guide",
      "image": "https://vedaracare.ae/images/arthritis-ayurveda-dubai-hero.jpg",
      "datePublished": "2026-05-28",
      "dateModified": "2026-05-28",
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
      "mainEntityOfPage": "https://vedaracare.ae/conditions/arthritis-ayurveda-dubai/"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/"},
        {"@type": "ListItem", "position": 3, "name": "Ayurveda for Arthritis in Dubai", "item": "https://vedaracare.ae/conditions/arthritis-ayurveda-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Ayurvedic treatment actually work for arthritis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For osteoarthritis: yes, substantially. Most of our knee, hip, and spine osteoarthritis patients at the JVC clinic see 50-70% reduction in pain and meaningful function improvement over 6 months. For rheumatoid arthritis and other inflammatory arthritis: Ayurvedic treatment is supportive — providing meaningful symptom relief and quality-of-life improvement but never replacing immunosuppressive medications. For frozen shoulder: outcomes are particularly strong."
          }
        },
        ...arthritisFaqs.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      ]
    }
  ];
  return (
    <>
      <Head>
        <title>Ayurveda for Arthritis in Dubai | JVC Clinic | Vedara Care</title>
        <meta name="description" content="DHA-licensed Ayurvedic arthritis treatment at our JVC clinic, Dubai — type-specific programmes for osteoarthritis, RA, gout, frozen shoulder, spondylosis. Integrated with rheumatology." />
        <link rel="canonical" href="https://vedaracare.ae/conditions/arthritis-ayurveda-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/conditions/arthritis-ayurveda-dubai/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/conditions/arthritis-ayurveda-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/conditions/arthritis-ayurveda-dubai/" />
        
        <meta property="og:title" content="Ayurveda for Arthritis in Dubai — Type-Specific Treatment at Our JVC Clinic" />
        <meta property="og:description" content="DHA-licensed Ayurvedic arthritis treatment at our Jumeirah Village Circle clinic. Different protocols for osteoarthritis, rheumatoid arthritis, gout, ankylosing spondylitis, frozen shoulder. Coordinated with rheumatology and orthopaedics." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/arthritis-ayurveda-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/arthritis-ayurveda-dubai/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content="2026-05-28T09:00:00Z" />
        <meta property="article:modified_time" content="2026-05-28T09:00:00Z" />
        <meta property="article:author" content="Dr. Priya Menon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>
      <main>
        <AyurvedaHero {...arthritisHero} />
        
        <AyurvedaIntro {...arthritisIntro} />
         <ArthritisTypes 
          {...arthritisTypesData}
          bgColor="bg-[#FAF8F3]"
        />
        <ClinicalBoundaries 
          {...arthritisBoundaries}
          bgColor="bg-white"/>
        <ArthritisPillars 
          {...arthritisPillars}
          bgColor="bg-[#F5F1E8]"
        />

        <FAQ {...arthritisFaqs} />

        <CTA {...arthritisCTA} />

        <RelatedPages 
          {...arthritisRelatedPages}
          bgColor="bg-white"
        />
      </main>
    </>
  );
};

export default AyurvedaArthritis;
