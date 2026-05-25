import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import Reviews from '../../components/ayurveda/TreatmentReviews';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import PanchakarmaTimeline from '../../components/ayurveda/PanchakarmaTimeline';
import PanchakarmaBenefits from '../../components/ayurveda/PanchakarmaBenefits';
import FAQ from '../../components/home/FAQ';
import CTA from '../../components/home/CTA';
import {  panchakarmaJVCHero, panchakarmaJVCIntro,panchakarmaJVCPrograms,panchakarmaJVCReviews,panchakarmaJVCFaqs,panchakarmaJVCLocation,panchakarmaJVCCTA,panchakarmaJVCRelatedPages, panchakarmaJVCTimeline,panchakarmaJVCBenefits} from '../../data/treatmentData';

const PanchakarmaJVC = () => {
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "@id": "https://vedaracare.ae/treatments/panchakarma-jvc/#procedure",
      "name": "Panchakarma in Jumeirah Village Circle",
      "alternateName": ["Panchakarma JVC", "Classical Ayurvedic Detoxification"],
      "description": "DHA-licensed doctor-supervised classical Panchakarma programmes at Vedara Care Polyclinic in Jumeirah Village Circle, Dubai. 7, 14, and 21-day programmes for chronic conditions and constitutional reset.",
      "url": "https://vedaracare.ae/treatments/panchakarma-jvc/",
      "image": "https://vedaracare.ae/images/panchakarma-jvc-hero.jpg",
      "procedureType": "Ayurveda",
      "preparation": "Snehapana, Abhyanga, and Swedana for 3-7 days before main therapies.",
      "followup": "Samsarjana Krama graduated dietary protocol and Rasayana rejuvenation.",
      "indication": [
        {"@type": "MedicalIndication", "name": "Chronic back pain"},
        {"@type": "MedicalIndication", "name": "PCOS"},
        {"@type": "MedicalIndication", "name": "Chronic stress"},
        {"@type": "MedicalIndication", "name": "Migraine"},
        {"@type": "MedicalIndication", "name": "Weight management"}
      ],
      "sameAs": "https://en.wikipedia.org/wiki/Panchakarma",
      "performer": {"@id": "https://vedaracare.ae/treatments/panchakarma-jvc/#clinic"}
    },
    {
      "@context": "https://schema.org",
      "@type": ["MedicalClinic", "LocalBusiness"],
      "@id": "https://vedaracare.ae/treatments/panchakarma-jvc/#clinic",
      "name": "Vedara Care Polyclinic — Panchakarma Department, JVC",
      "url": "https://vedaracare.ae/treatments/panchakarma-jvc/",
      "image": "https://vedaracare.ae/images/panchakarma-jvc-hero.jpg",
      "telephone": "+971-XX-XXX-XXXX",
      "priceRange": "AED",
      "medicalSpecialty": "Ayurveda",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Building 123, Street 45A",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.0XXX",
        "longitude": "55.2XXX"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          "opens": "09:00",
          "closes": "21:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "10:00",
          "closes": "19:00"
        }
      ],
      "areaServed": [
        {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "Place", "name": "Jumeirah Village Triangle"},
        {"@type": "Place", "name": "Al Barsha South"},
        {"@type": "Place", "name": "Dubai Sports City"},
        {"@type": "Place", "name": "Motor City"},
        {"@type": "Place", "name": "Arjan"},
        {"@type": "Place", "name": "Dubai Hills Estate"}
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "License",
        "name": "DHA Healthcare Facility License",
        "identifier": "[DHA License Number]"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Panchakarma Programmes at Vedara Care JVC",
      "provider": {"@id": "https://vedaracare.ae/#organization"},
      "areaServed": {"@type": "Place", "name": "Jumeirah Village Circle, Dubai"},
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Panchakarma Programmes",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "7-Day Panchakarma Reset",
            "priceCurrency": "AED",
            "price": "4500"
          },
          {
            "@type": "Offer",
            "name": "14-Day Classical Panchakarma",
            "priceCurrency": "AED",
            "price": "8900"
          },
          {
            "@type": "Offer",
            "name": "21-Day Deep Panchakarma",
            "priceCurrency": "AED",
            "price": "14500"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Panchakarma in JVC, Dubai",
      "url": "https://vedaracare.ae/treatments/panchakarma-jvc/",
      "about": {"@id": "https://vedaracare.ae/treatments/panchakarma-jvc/#procedure"},
      "audience": {"@type": "PatientAudience"},
      "lastReviewed": "2026-05-25",
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. Priya Sharma",
        "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
      },
      "primaryImageOfPage": "https://vedaracare.ae/images/panchakarma-jvc-hero.jpg"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Ayurveda Clinic in JVC", "item": "https://vedaracare.ae/ayurveda-clinic-jvc/"},
        {"@type": "ListItem", "position": 3, "name": "Panchakarma in JVC", "item": "https://vedaracare.ae/treatments/panchakarma-jvc/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": panchakarmaJVCFaqs.faqs.map(faq => ({
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
        <title>Panchakarma in JVC, Dubai | DHA-Licensed Clinic | Vedara Care</title>
        <meta name="description" content="DHA-licensed Panchakarma at our Jumeirah Village Circle clinic — next to Circle Mall. 7, 14 & 21-day classical programmes. Free patient parking. Book today." />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Panchakarma in JVC, Dubai — Classical Programmes at Vedara Care" />
        <meta property="og:description" content="DHA-licensed Panchakarma in Jumeirah Village Circle. Next to Circle Mall. Free parking. From AED 4,500." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/panchakarma-jvc.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/treatments/panchakarma-jvc/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        
        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Panchakarma in JVC, Dubai — Classical Programmes at Vedara Care" />
        <meta name="twitter:description" content="DHA-licensed Panchakarma in Jumeirah Village Circle. Next to Circle Mall. Free parking." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/panchakarma-jvc.jpg" />
        
        {/* Canonical & Language Tags */}
        <link rel="canonical" href="https://vedaracare.ae/treatments/panchakarma-jvc/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/treatments/panchakarma-jvc/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/treatments/panchakarma-jvc/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/treatments/panchakarma-jvc/" />
        
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Schema Markup */}
        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <AyurvedaHero {...panchakarmaJVCHero} />
      <AyurvedaIntro {...panchakarmaJVCIntro} />
      <PanchakarmaBenefits {...panchakarmaJVCBenefits} />
      <TreatmentPrograms {...panchakarmaJVCPrograms} />
      <PanchakarmaTimeline {...panchakarmaJVCTimeline} />
      <Reviews {...panchakarmaJVCReviews} isDarkText={true} />
      <FAQ {...panchakarmaJVCFaqs} />
      <TreatmentLocation {...panchakarmaJVCLocation} />
      <CTA {...panchakarmaJVCCTA} />
       <RelatedPages {...panchakarmaJVCRelatedPages} />
    </>
  );
};

export default PanchakarmaJVC;
