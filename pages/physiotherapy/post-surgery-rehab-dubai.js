import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import PhysiotherapyMechanism from '../../components/ayurveda/PhysiotherapyMechanism';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import TreatmentProtocol from '../../components/ayurveda/Protocols';
import FAQ from '../../components/home/FAQ';
import { 
  SurgicalProcedures,
  HomePhysiotherapy, 
  TransparentPricing, 
  PostSurgeryTeam, 
  InsuranceCoverage, 
  WhereWeWork 
} from '../../components/ayurveda/PostSurgeryComponents';
import {
  postSurgeryRehabHero,
  postSurgeryRehabIntro,
  postSurgeryRehabMechanism,
  postSurgeryRehabFinalCTA,
  postSurgeryRehabRelatedPages,
  postSurgeryRehabReviews,
  homePhysiotherapyData,
  transparentPricingData,
  postSurgeryTeamData,
  insuranceCoverageData,
  whereWeWorkData,
  surgicalProceduresData,
  rehabilitationPhasesData,
  postSurgeryFAQData
} from '../../data/postSurgeryRehabData';

const PostSurgeryRehabDubai = () => {
  const schemaMarkup = [
    // Schema 1 — MedicalBusiness with Post-Surgical Specialty
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy"],
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#post-surgical",
      "name": "Vedara Care Post-Surgery Rehabilitation",
      "alternateName": ["Vedara Post-Operative Physiotherapy Dubai", "Vedara Surgical Rehab JVC"],
      "url": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/",
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "DHA-licensed post-surgery rehabilitation at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. DPT-qualified physiotherapists providing procedure-specific rehabilitation for knee replacement, hip replacement, ACL reconstruction, spinal surgery, rotator cuff repair, and other surgical procedures. Surgeon coordination with Dubai and international surgeons. Home physiotherapy available across Dubai.",
      "telephone": "+971 4 XXX XXXX",
      "priceRange": "AED 350 - AED 25,000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jumeirah Village Circle",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.0607",
        "longitude": "55.2078"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "21:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "Place", "name": "Jumeirah Village Triangle"},
        {"@type": "Place", "name": "Al Barsha South"},
        {"@type": "Place", "name": "Dubai Sports City"},
        {"@type": "Place", "name": "Motor City"},
        {"@type": "Place", "name": "Arjan"},
        {"@type": "Place", "name": "Dubai Hills Estate"},
        {"@type": "Place", "name": "Dubai Marina"},
        {"@type": "Place", "name": "Downtown Dubai"},
        {"@type": "Place", "name": "Palm Jumeirah"},
        {"@type": "Place", "name": "Mirdif"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "medicalSpecialty": [
        "Post-Surgical Rehabilitation",
        "Orthopaedic Rehabilitation",
        "Physical Therapy",
        "Physiotherapy"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Total Knee Replacement Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Total Hip Replacement Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "ACL Reconstruction Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Rotator Cuff Repair Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Spinal Surgery Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Meniscus Surgery Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Hip Arthroscopy Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Post-Mastectomy Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Home Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Manual Therapy"}
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Dubai Health Authority"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "140",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    // Schema 2 — MedicalProcedure Entities
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Total Knee Replacement Rehabilitation",
      "alternateName": ["TKR Rehab", "Knee Arthroplasty Rehabilitation"],
      "procedureType": "Post-Operative Rehabilitation",
      "preparation": "Initial assessment within 24-72 hours of surgical discharge",
      "followup": "30-40 sessions over 4-6 months in phased protocol"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Total Hip Replacement Rehabilitation",
      "alternateName": ["THR Rehab", "Hip Arthroplasty Rehabilitation"],
      "procedureType": "Post-Operative Rehabilitation",
      "followup": "24-30 sessions over 3-4 months"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "ACL Reconstruction Rehabilitation",
      "alternateName": ["ACL Rehab", "Anterior Cruciate Ligament Reconstruction Recovery"],
      "procedureType": "Post-Operative Rehabilitation",
      "followup": "40-60 sessions over 9-12 months with phased return-to-sport protocols"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Rotator Cuff Repair Rehabilitation",
      "procedureType": "Post-Operative Rehabilitation",
      "followup": "24-40 sessions over 4-6 months"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Spinal Surgery Rehabilitation",
      "alternateName": ["Post-Spinal Surgery Recovery", "Post-Discectomy Rehab", "Post-Spinal Fusion Recovery"],
      "procedureType": "Post-Operative Rehabilitation",
      "followup": "20-30 sessions over 3-6 months"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Meniscus Surgery Rehabilitation",
      "alternateName": ["Meniscectomy Rehab", "Meniscus Repair Recovery"],
      "procedureType": "Post-Operative Rehabilitation",
      "followup": "8-12 sessions for meniscectomy; 16-24 sessions for repair"
    },
    // Schema 3 — Service with OfferCatalog
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Post-Surgery Rehabilitation Services in Dubai",
      "provider": {"@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#post-surgical"},
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "serviceType": "Post-Surgical Rehabilitation Physiotherapy",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Post-Surgery Rehabilitation Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Post-Surgery Initial Assessment (Clinic)",
            "priceCurrency": "AED",
            "price": "350",
            "description": "60-minute comprehensive assessment with surgeon coordination"
          },
          {
            "@type": "Offer",
            "name": "Post-Surgery Initial Assessment (Home)",
            "priceCurrency": "AED",
            "price": "450",
            "description": "60-minute home assessment for early-phase patients"
          },
          {
            "@type": "Offer",
            "name": "Total Knee Replacement Rehabilitation Programme",
            "priceCurrency": "AED",
            "price": "8500",
            "description": "30-session structured rehabilitation programme over 4-6 months"
          },
          {
            "@type": "Offer",
            "name": "ACL Reconstruction Rehabilitation Programme",
            "priceCurrency": "AED",
            "price": "13500",
            "description": "40-60 session structured rehabilitation over 9-12 months"
          },
          {
            "@type": "Offer",
            "name": "Home Physiotherapy Session",
            "priceCurrency": "AED",
            "price": "450",
            "description": "Home-delivered physiotherapy session across Dubai"
          }
        ]
      }
    },
    // Schema 4 — BreadcrumbList
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Physiotherapy in JVC", "item": "https://vedaracare.ae/physiotherapy-jvc/"},
        {"@type": "ListItem", "position": 3, "name": "Post-Surgery Rehabilitation", "item": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/"}
      ]
    },
    // Schema 5 — FAQPage (dynamic from data)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": postSurgeryFAQData.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    // Schema 6 — Semantic Entities
    // Post-Surgical Rehabilitation (primary topic)
    {
      "@context": "https://schema.org",
      "@type": "MedicalSpecialty",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#post-surgical-specialty",
      "name": "Post-Surgical Rehabilitation",
      "description": "Specialty focused on structured recovery after surgical procedures including joint replacement, spinal surgery, and sports surgery",
      "sameAs": "https://en.wikipedia.org/wiki/Physical_therapy"
    },
    // Surgical specialties
    {
      "@context": "https://schema.org",
      "@type": "MedicalSpecialty",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#orthopaedic-surgery",
      "name": "Orthopaedic Surgery",
      "sameAs": "https://en.wikipedia.org/wiki/Orthopedic_surgery"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalSpecialty",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#joint-replacement",
      "name": "Joint Replacement",
      "sameAs": "https://en.wikipedia.org/wiki/Joint_replacement"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalSpecialty",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#spinal-surgery",
      "name": "Spinal Surgery",
      "sameAs": "https://en.wikipedia.org/wiki/Spinal_surgery"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalSpecialty",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#sports-surgery",
      "name": "Sports Surgery",
      "sameAs": "https://en.wikipedia.org/wiki/Sports_medicine"
    },
    // DPT Educational Credential
    {
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalCredential",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#dpt",
      "name": "DPT",
      "alternateName": ["Doctor of Physical Therapy"],
      "description": "Professional doctoral degree in physiotherapy required for post-surgical rehabilitation specialists at Vedara Care",
      "credentialCategory": "Doctoral Degree",
      "recognizedBy": {"@type": "Organization", "name": "Dubai Health Authority"}
    },
    // Surgeon Coordination — distinctive practice
    {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#surgeon-coordination",
      "name": "Surgeon Coordination",
      "description": "Direct clinical communication between the rehabilitation physiotherapist and the operating surgeon to ensure protocol adherence and optimal post-surgical outcomes",
      "inDefinedTermSet": {"@type": "DefinedTermSet", "name": "Vedara Care Practice Standards"}
    },
    {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#post-operative-communication",
      "name": "Post-Operative Communication",
      "description": "Structured reporting of patient progress to operating surgeons including initial assessment, mid-point reports, and clinical concerns",
      "inDefinedTermSet": {"@type": "DefinedTermSet", "name": "Vedara Care Practice Standards"}
    },
    // Home Physiotherapy & Home Healthcare (MedicalService)
    {
      "@context": "https://schema.org",
      "@type": "MedicalService",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#home-physiotherapy",
      "name": "Home Physiotherapy",
      "description": "Home-delivered physiotherapy for post-surgical patients across Dubai, particularly during the early recovery phase",
      "serviceType": "Home Healthcare",
      "provider": {"@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#post-surgical"},
      "areaServed": [{"@type": "City", "name": "Dubai"}]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalService",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#home-healthcare",
      "name": "Home Healthcare",
      "description": "Broader home healthcare delivery model for patients unable to travel to clinic during post-surgical recovery",
      "serviceType": "Home Healthcare",
      "provider": {"@id": "https://vedaracare.ae/#organization"}
    },
    // Techniques (MedicalProcedure)
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#manual-therapy",
      "name": "Manual Therapy",
      "description": "Hands-on therapeutic technique for joint mobilisation, soft tissue work, and myofascial release in post-surgical rehabilitation",
      "sameAs": "https://en.wikipedia.org/wiki/Manual_therapy"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#dry-needling",
      "name": "Dry Needling",
      "description": "Myofascial trigger point dry needling used as adjunct modality in post-surgical rehabilitation for pain and muscle activation",
      "sameAs": "https://en.wikipedia.org/wiki/Dry_needling"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#shockwave-therapy",
      "name": "Shockwave Therapy",
      "description": "Extracorporeal shockwave therapy used as adjunct modality in post-surgical rehabilitation for tissue healing and pain management",
      "sameAs": "https://en.wikipedia.org/wiki/Extracorporeal_shockwave_therapy"
    },
    // Vedara Care Polyclinic (MedicalClinic)
    {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "@id": "https://vedaracare.ae/#organization",
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "medicalSpecialty": ["Ayurveda", "Physiotherapy", "Dermatology"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Building 23, District 12",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "License",
        "name": "DHA Healthcare Facility License",
        "identifier": "[DHA License Number]"
      }
    },
    // Dubai Health Authority (GovernmentOrganization)
    {
      "@context": "https://schema.org",
      "@type": "GovernmentOrganization",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#dha",
      "name": "Dubai Health Authority",
      "alternateName": ["DHA"],
      "url": "https://www.dha.gov.ae",
      "sameAs": "https://en.wikipedia.org/wiki/Dubai_Health_Authority"
    },
    // Insurance partners
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#daman",
      "name": "Daman",
      "description": "Health insurance provider — direct-billing partner for post-surgery rehabilitation at Vedara Care"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#axa",
      "name": "AXA",
      "description": "Health insurance provider — direct-billing partner for post-surgery rehabilitation at Vedara Care"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#allianz",
      "name": "Allianz",
      "description": "Health insurance provider — direct-billing partner for post-surgery rehabilitation at Vedara Care"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#oman-insurance",
      "name": "Oman Insurance",
      "description": "Health insurance provider — direct-billing partner for post-surgery rehabilitation at Vedara Care"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#now-health",
      "name": "Now Health",
      "description": "Health insurance provider — direct-billing partner for post-surgery rehabilitation at Vedara Care"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#bupa",
      "name": "Bupa",
      "description": "Health insurance provider — direct-billing partner for post-surgery rehabilitation at Vedara Care"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#metlife",
      "name": "MetLife",
      "description": "Health insurance provider — direct-billing partner for post-surgery rehabilitation at Vedara Care"
    },
    // JVC Place + hyperlocal landmarks
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#jvc",
      "name": "Jumeirah Village Circle",
      "alternateName": ["JVC"],
      "description": "Residential community in Dubai where Vedara Care Polyclinic is located, walking distance from Circle Mall",
      "containedInPlace": {
        "@type": "City",
        "name": "Dubai",
        "containedInPlace": {
          "@type": "Country",
          "name": "United Arab Emirates"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Circle Mall",
      "description": "Retail mall in Jumeirah Village Circle, walking distance from Vedara Care Polyclinic"
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "FIVE Jumeirah Village",
      "description": "Hotel and landmark in JVC near Vedara Care Polyclinic"
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "JSS Private School",
      "description": "School landmark in JVC near Vedara Care Polyclinic"
    },
    // International surgery contexts (Country)
    {
      "@context": "https://schema.org",
      "@type": "Country",
      "name": "United Kingdom",
      "description": "International surgery context — approximately 40% of Vedara post-surgical patients had surgery overseas"
    },
    {
      "@context": "https://schema.org",
      "@type": "Country",
      "name": "India",
      "description": "International surgery context for post-surgical rehabilitation patients at Vedara Care"
    },
    {
      "@context": "https://schema.org",
      "@type": "Country",
      "name": "Germany",
      "description": "International surgery context for post-surgical rehabilitation patients at Vedara Care"
    },
    {
      "@context": "https://schema.org",
      "@type": "Country",
      "name": "USA",
      "description": "International surgery context for post-surgical rehabilitation patients at Vedara Care"
    },
    {
      "@context": "https://schema.org",
      "@type": "Country",
      "name": "Lebanon",
      "description": "International surgery context for post-surgical rehabilitation patients at Vedara Care"
    },
    {
      "@context": "https://schema.org",
      "@type": "Country",
      "name": "Egypt",
      "description": "International surgery context for post-surgical rehabilitation patients at Vedara Care"
    },
    // Dubai areas served
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#dubai-marina",
      "name": "Dubai Marina",
      "containedInPlace": {"@type": "City", "name": "Dubai"}
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#downtown-dubai",
      "name": "Downtown Dubai",
      "containedInPlace": {"@type": "City", "name": "Dubai"}
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#palm-jumeirah",
      "name": "Palm Jumeirah",
      "containedInPlace": {"@type": "City", "name": "Dubai"}
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#mirdif",
      "name": "Mirdif",
      "containedInPlace": {"@type": "City", "name": "Dubai"}
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#jvt",
      "name": "Jumeirah Village Triangle",
      "alternateName": ["JVT"],
      "containedInPlace": {"@type": "City", "name": "Dubai"}
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#al-barsha-south",
      "name": "Al Barsha South",
      "containedInPlace": {"@type": "City", "name": "Dubai"}
    },
    // Schema 7 — Article
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Post-Surgery Rehabilitation in Dubai — Complete Service Guide",
      "image": "https://vedaracare.ae/images/post-surgery-rehabilitation-dubai-hero.webp",
      "datePublished": "2026-06-01",
      "dateModified": "2026-06-04",
      "author": {
        "@type": "Physician",
        "name": "Dr. Sarah Mitchell",
        "url": "https://vedaracare.ae/physiotherapists/dr-sarah-mitchell/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic",
        "logo": {
          "@type": "ImageObject",
          "url": "https://vedaracare.ae/logo.png"
        }
      },
      "mainEntityOfPage": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/"
    },
    // Schema 8 — Physiotherapist (for each team member)
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Sarah Mitchell",
      "url": "https://vedaracare.ae/physiotherapists/dr-sarah-mitchell/",
      "image": "https://vedaracare.ae/images/dr-sarah-mitchell.jpg",
      "medicalSpecialty": ["Post-Surgical Rehabilitation", "Orthopaedic Physiotherapy", "Physiotherapy"],
      "hasCredential": ["DPT", "DHA-Licensed"],
      "worksFor": {"@id": "https://vedaracare.ae/#organization"}
    }
  ];

  return (
    <>
      <Head>
        <title>Post-Surgery Rehabilitation in Dubai | Surgeon-Coordinated | Vedara JVC</title>
        <meta name="description" content="Procedure-specific post-surgery rehabilitation in Dubai — knee, hip, ACL, spinal, rotator cuff, more. DPT-qualified physiotherapists at our JVC clinic + home physiotherapy across Dubai. Surgeon-coordinated whether your surgery was in Dubai or overseas." />
        <link rel="canonical" href="https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/physiotherapy/post-surgery-rehab-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/" />
        <meta property="og:title" content="Post-Surgery Rehabilitation in Dubai — Surgeon-Coordinated | Vedara JVC" />
        <meta property="og:description" content="DPT-qualified post-surgical physiotherapy at our Jumeirah Village Circle clinic + home physiotherapy across Dubai. Procedure-specific protocols for knee replacement, hip replacement, ACL, spinal surgery, rotator cuff repair, and more. We coordinate with your surgeon — local or international." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/post-surgery-rehabilitation-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Post-Surgery Rehabilitation in Dubai — Surgeon-Coordinated | Vedara JVC" />
        <meta name="twitter:description" content="DPT-qualified post-surgical physiotherapy at our Jumeirah Village Circle clinic + home physiotherapy across Dubai. Procedure-specific protocols for knee replacement, hip replacement, ACL, spinal surgery, rotator cuff repair, and more." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/post-surgery-rehabilitation-dubai.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>

      <main>
        {/* 1. Hero */}
        <AyurvedaHero {...postSurgeryRehabHero} />
        
        {/* 2. Intro */}
        <AyurvedaIntro {...postSurgeryRehabIntro} />

        {/* 3. Surgical Procedures We Rehabilitate */}
        <SurgicalProcedures {...surgicalProceduresData} />
        
        {/* 4. Mechanism (Surgeon Coordination) */}
        <PhysiotherapyMechanism {...postSurgeryRehabMechanism} />

        {/* 5. Five Phases of Post-Surgical Rehabilitation */}
        <TreatmentProtocol {...rehabilitationPhasesData} />

        {/* 6. Home Physiotherapy */}
        <HomePhysiotherapy data={homePhysiotherapyData} />

        {/* 7. Transparent Pricing */}
        <TransparentPricing data={transparentPricingData} />

         {/* 13. Patient Reviews */}
        <TreatmentReviews {...postSurgeryRehabReviews} />

        {/* 9. The Team */}
        <PostSurgeryTeam data={postSurgeryTeamData} />

        {/* 10. Insurance Coverage */}
        <InsuranceCoverage data={insuranceCoverageData} />

        {/* 11. FAQ */}
        <FAQ {...postSurgeryFAQData} />

        {/* 12. Where We Work */}
        <WhereWeWork data={whereWeWorkData} />

         {/* 8. Final CTA (Ready to start?) */}
        <FinalCTA {...postSurgeryRehabFinalCTA} />

        {/* 12. Related Pages */}
        <RelatedPages {...postSurgeryRehabRelatedPages} />

      </main>
    </>
  );
};

export default PostSurgeryRehabDubai;
