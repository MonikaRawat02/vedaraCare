import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import Physician from '../../components/ayurveda/Physician';
import ClinicalBoundaries from '../../components/ayurveda/ClinicalBoundaries';
import PanchakarmaPhases from '../../components/ayurveda/PanchakarmaPhases';
import ClassicalTherapies from '../../components/ayurveda/ClassicalTherapies';
import DailyTimeline from '../../components/ayurveda/DailyTimeline';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';

import {
  panchakarmaDubaiHero,
  panchakarmaDubaiIntro,
  panchakarmaDubaiFoundation,
  panchakarmaDubaiPhysician,
  panchakarmaDubaiApplications,
  panchakarmaDubaiProtocol,
  panchakarmaDubaiPrograms,
  panchakarmaDubaiActions,
  panchakarmaDubaiDaily,
  panchakarmaDubaiReviews,
  panchakarmaDubaiFaqs,
  panchakarmaDubaiLocation,
  panchakarmaDubaiCTA
} from '../../data/panchakarmaDubaiData';

const PanchakarmaDubai = () => {
  const currentUrl = "https://vedaracare.ae/treatments/panchakarma-dubai/";
  const publishedDate = "2024-05-01T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    // Schema 1 — MedicalProcedure (Primary)
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "@id": `${currentUrl}#procedure`,
      "name": "Panchakarma",
      "alternateName": ["Pancha Karma", "Classical Ayurvedic Detoxification"],
      "description": "Panchakarma is the classical five-action Ayurvedic detoxification protocol involving Vamana, Virechana, Basti, Nasya, and Raktamokshana, supervised by a BAMS-qualified physician over 7 to 21 days.",
      "url": currentUrl,
      "image": "https://vedaracare.ae/images/panchakarma-dubai-hero.webp",
      "procedureType": "Ayurveda",
      "bodyLocation": "Multiple",
      "preparation": "Snehapana (internal oleation), daily Abhyanga, and Swedana for 3-7 days before main therapies.",
      "followup": "Samsarjana Krama graduated dietary protocol and herbal Rasayana for 7-14 days post-treatment.",
      "indication": [
        {"@type": "MedicalIndication", "name": "Chronic back pain"},
        {"@type": "MedicalIndication", "name": "PCOS"},
        {"@type": "MedicalIndication", "name": "Chronic stress and burnout"},
        {"@type": "MedicalIndication", "name": "Migraine"},
        {"@type": "MedicalIndication", "name": "Weight management"},
        {"@type": "MedicalIndication", "name": "IBS and chronic digestive disorders"},
        {"@type": "MedicalIndication", "name": "Hair loss and skin conditions"},
        {"@type": "MedicalIndication", "name": "Type 2 diabetes (alongside endocrinology)"},
        {"@type": "MedicalIndication", "name": "Rheumatoid arthritis"},
        {"@type": "MedicalIndication", "name": "Post-illness recovery"}
      ],
      "contraindication": [
        {"@type": "MedicalContraindication", "name": "Pregnancy"},
        {"@type": "MedicalContraindication", "name": "Active acute infection"},
        {"@type": "MedicalContraindication", "name": "Severe cardiac conditions"},
        {"@type": "MedicalContraindication", "name": "Active cancer treatment"}
      ],
      "sameAs": "https://en.wikipedia.org/wiki/Panchakarma",
      "performer": {
        "@type": "Physician",
        "name": "Dr. Priya Nair",
        "url": "https://vedaracare.ae/doctors/dr-priya-nair/"
      }
    },
    // Schema 2 — Service (with pricing)
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Panchakarma Programmes",
      "provider": {"@id": "https://vedaracare.ae/#organization"},
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "serviceType": "Ayurvedic Detoxification",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Panchakarma Programmes",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "7-Day Panchakarma Reset",
            "priceCurrency": "AED",
            "price": "8500",
            "description": "7-day classical Panchakarma reset programme including consultation, preparation, main therapies, and recovery"
          },
          {
            "@type": "Offer",
            "name": "14-Day Classical Panchakarma",
            "priceCurrency": "AED",
            "price": "15500",
            "description": "14-day classical Panchakarma programme with full Purvakarma, multiple main actions, and Paschatkarma"
          },
          {
            "@type": "Offer",
            "name": "21-Day Deep Panchakarma Intensive",
            "priceCurrency": "AED",
            "price": "24000",
            "description": "21-day intensive Panchakarma with extended Purvakarma, up to 4 of 5 main actions, full Rasayana recovery"
          }
        ]
      }
    },
    // Schema 3 — MedicalWebPage
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Panchakarma Treatment in Dubai | 7, 14 & 21-Day Programmes | Vedara",
      "url": currentUrl,
      "about": {"@id": `${currentUrl}#procedure`},
      "audience": {"@type": "PatientAudience"},
      "lastReviewed": modifiedDate,
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. Priya Nair",
        "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
      },
      "primaryImageOfPage": "https://vedaracare.ae/images/panchakarma-dubai-hero.webp"
    },
    // Schema 5 — Article
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Panchakarma Treatment in Dubai — A Complete Guide",
      "image": "https://vedaracare.ae/images/panchakarma-dubai-hero.webp",
      "datePublished": publishedDate,
      "dateModified": modifiedDate,
      "author": {
        "@type": "Physician",
        "name": "Dr. Priya Nair",
        "url": "https://vedaracare.ae/doctors/dr-priya-nair/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic",
        "logo": {"@type": "ImageObject", "url": "https://vedaracare.ae/logo.png"}
      },
      "mainEntityOfPage": currentUrl
    },
    // Schema 6 — BreadcrumbList
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Ayurvedic Treatment in Dubai", "item": "https://vedaracare.ae/ayurveda-dubai/"},
        {"@type": "ListItem", "position": 3, "name": "Panchakarma Treatment in Dubai", "item": currentUrl}
      ]
    },
    // Schema 7 — FAQPage
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": panchakarmaDubaiFaqs.faqs.map(faq => ({
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
        <title>Panchakarma Treatment in Dubai | 7, 14 & 21-Day Programmes | Vedara</title>
        <meta name="description" content="Authentic 7, 14 & 21-day Panchakarma programmes in Dubai. DHA-licensed BAMS doctors at our JVC clinic. Classical Kerala protocol. From AED 8,500. Book today." />
        
        {/* Canonical & Language Tags */}
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hreflang="en-AE" href={currentUrl} />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/treatments/panchakarma-dubai/" />
        <link rel="alternate" hreflang="x-default" href={currentUrl} />

        {/* Robots & Indexing */}
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Panchakarma Treatment in Dubai — Classical 7, 14 & 21-Day Programmes" />
        <meta property="og:description" content="DHA-licensed authentic Panchakarma at our JVC clinic. Doctor-supervised classical Kerala protocol. From AED 8,500." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/panchakarma-dubai.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content={publishedDate} />
        <meta property="article:modified_time" content={modifiedDate} />
        <meta property="article:author" content="Dr. Priya Nair" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Schema Markup */}
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

        {/* Preload Hero Image */}
        <link rel="preload" as="image" href="https://vedaracare.ae/images/panchakarma-dubai-hero.webp" />
      </Head>

      <AyurvedaHero {...panchakarmaDubaiHero} />
      
      <AyurvedaIntro {...panchakarmaDubaiIntro} />

      <TreatmentMechanism {...panchakarmaDubaiFoundation} />

      <ClassicalTherapies 
        {...panchakarmaDubaiActions}
      />

      <PanchakarmaPhases 
        {...panchakarmaDubaiProtocol}
        bgColor="bg-[#FAF6EF]"
      />
        
      <TreatmentPrograms 
        {...panchakarmaDubaiPrograms}
        bgColor="bg-white"
        carouselBgColor="bg-[#FAF6EF]"
        buttonBg="rgb(31, 69, 56)"
      />

      <ClinicalBoundaries 
        {...panchakarmaDubaiApplications} 
        bgColor="bg-[#F0E9DD]"
      />

      <DailyTimeline 
        {...panchakarmaDubaiDaily}
      />

      <Physician {...panchakarmaDubaiPhysician} />

      <TreatmentReviews 
        {...panchakarmaDubaiReviews}
        bgColor="bg-[#FAF6EF]" 
      />

      <FAQ 
        {...panchakarmaDubaiFaqs}
        bgColor="bg-[#F0E9DD]"
        label="PANCHAKARMA QUESTIONS"
        title="What patients ask before committing to Panchakarma."
        description="A serious commitment of time and money deserves serious answers. WhatsApp us anything that is not here."
        buttonText="Ask the Panchakarma Team"
      />

      <TreatmentLocation 
        {...panchakarmaDubaiLocation} 
        bgColor="bg-white"
      />

      <FinalCTA 
        {...panchakarmaDubaiCTA}
        bgColor="bg-[#FAF6EF]"
      />
    </>
  );
};

export default PanchakarmaDubai;
