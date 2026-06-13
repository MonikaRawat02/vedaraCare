import Head from 'next/head';
import AyurvedaHero from '../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../components/ayurveda/AyurvedaIntro';
import PhysiotherapySpecializations from '../components/ayurveda/PhysiotherapySpecializations';
import TreatmentReviews from '../components/ayurveda/TreatmentReviews';
import FAQ from '../components/home/FAQ';
import FinalCTA from '../components/ayurveda/FinalCTA';
import RelatedPages from '../components/ayurveda/RelatedPages';
import HomePhysioSingleImageSection from '../components/ayurveda/HomePhysioSingleImageSection';
// import HomePhysioSessionFlow from '../components/ayurveda/HomePhysioSessionFlow';
import HomePhysioCoverage from '../components/ayurveda/HomePhysioCoverage';
import HomePhysioBookingLogistics from '../components/ayurveda/HomePhysioBookingLogistics';
import HomePhysioPricing from '../components/ayurveda/HomePhysioPricing';
import PhysiotherapyTeam from '../components/ayurveda/PhysiotherapyTeam';
import HomePhysioClinicTransition from '../components/ayurveda/HomePhysioClinicTransition';
import SportsPhysiotherapyModalities from '../components/ayurveda/SportsPhysiotherapyModalities';
import PhysiotherapyTwoImage from '../components/ayurveda/PhysiotherapyTwoImage';
import {
  homePhysioHero,
  homePhysioIntro,
  homePhysioSituations,
  homePhysioCoverage,
  homePhysioModalities,
  homePhysioSpecialisations,
  homePhysioBookingLogistics,
  homePhysioPricing,
  homePhysioOutcomes,
  homePhysioTeam,
  homePhysioTwoImage,
  homePhysioFaqs,
  homePhysioClinicTransition,
  homePhysioFinalCTA,
  homePhysioRelatedPages
} from '../data/homePhysiotherapyData';

const HomePhysiotherapyDubai = () => {
  const currentUrl = "https://vedaracare.ae/physiotherapy-at-home-dubai/";
  const publishedDate = "2024-05-01T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy", "HomeHealthCare"],
      "@id": `${currentUrl}#home-physiotherapy`,
      "name": "Vedara Care Home Physiotherapy",
      "alternateName": ["Vedara Home Physio Dubai", "Vedara At-Home Physiotherapy", "At-Home Physical Therapy", "Mobile Physiotherapy"],
      "url": currentUrl,
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "DHA-licensed home physiotherapy across Dubai delivered by DPT-qualified physiotherapists from Vedara Care Polyclinic, Jumeirah Village Circle. All physiotherapy specialisations available at patient homes — post-surgical, neurological, postnatal, paediatric, geriatric. Coverage across 18+ Dubai neighbourhoods.",
      "telephone": "[Phone number]",
      "priceRange": "AED 400 - AED 25,000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[Street address]",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "[Latitude]",
        "longitude": "[Longitude]"
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
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "Jumeirah Village Circle" },
        { "@type": "Place", "name": "Jumeirah Village Triangle" },
        { "@type": "Place", "name": "Al Barsha South" },
        { "@type": "Place", "name": "Dubai Sports City" },
        { "@type": "Place", "name": "Motor City" },
        { "@type": "Place", "name": "Arjan" },
        { "@type": "Place", "name": "Dubai Hills Estate" },
        { "@type": "Place", "name": "Dubai Marina" },
        { "@type": "Place", "name": "Downtown Dubai" },
        { "@type": "Place", "name": "Business Bay" },
        { "@type": "Place", "name": "Palm Jumeirah" },
        { "@type": "Place", "name": "Mirdif" },
        { "@type": "Place", "name": "Al Furjan" },
        { "@type": "Place", "name": "Discovery Gardens" },
        { "@type": "Place", "name": "Damac Hills" },
        { "@type": "Place", "name": "Mudon" },
        { "@type": "Place", "name": "Town Square" },
        { "@type": "Place", "name": "Jumeirah Beach Residence" },
        { "@type": "Place", "name": "Dubai Production City" },
        { "@type": "Place", "name": "Dubai Studio City" },
        { "@type": "Place", "name": "DIFC" },
        { "@type": "Place", "name": "Jumeirah" },
        { "@type": "Place", "name": "Umm Suqeim" },
        { "@type": "Place", "name": "Al Quoz" },
        { "@type": "Place", "name": "Dubai Silicon Oasis" },
        { "@type": "Place", "name": "Al Warqa" },
        { "@type": "Place", "name": "International City" },
        { "@type": "Place", "name": "Academic City" },
        { "@type": "Place", "name": "Liwan" },
        { "@type": "Place", "name": "The Lakes / Springs / Meadows" }
      ],
      "medicalSpecialty": [
        "Home Physiotherapy",
        "Physical Therapy",
        "Rehabilitation Medicine",
        "Home Healthcare",
        "Post-Surgical Rehabilitation",
        "Neurological Rehabilitation",
        "Postnatal Physiotherapy",
        "Paediatric Physiotherapy",
        "Geriatric Physiotherapy"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Home Musculoskeletal Physiotherapy" },
        { "@type": "MedicalProcedure", "name": "Home Post-Surgical Rehabilitation" },
        { "@type": "MedicalProcedure", "name": "Home Neurological Physiotherapy" },
        { "@type": "MedicalProcedure", "name": "Home Postnatal Physiotherapy" },
        { "@type": "MedicalProcedure", "name": "Home Pelvic Floor Physiotherapy" },
        { "@type": "MedicalProcedure", "name": "Home Paediatric Physiotherapy" },
        { "@type": "MedicalProcedure", "name": "Home Geriatric Physiotherapy" },
        { "@type": "MedicalProcedure", "name": "Falls Prevention" },
        { "@type": "MedicalProcedure", "name": "Manual Therapy" },
        { "@type": "MedicalProcedure", "name": "Home Exercise Prescription" },
        { "@type": "MedicalProcedure", "name": "Functional Re-Education" }
      ],
      "memberOf": {
        "@type": "GovernmentOrganization",
        "name": "Dubai Health Authority",
        "alternateName": ["DHA"]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "160",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Home Physiotherapy Services in Dubai",
      "alternateName": ["At-Home Physical Therapy", "Mobile Physiotherapy"],
      "provider": { "@id": `${currentUrl}#home-physiotherapy` },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "United Arab Emirates" }
      ],
      "serviceType": "Home Physiotherapy and At-Home Physical Therapy",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Home Physiotherapy Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Standard Home Physiotherapy Session",
            "priceCurrency": "AED",
            "price": "450",
            "description": "60-minute home physiotherapy session delivered across Dubai"
          },
          {
            "@type": "Offer",
            "name": "Initial Home Physiotherapy Assessment",
            "priceCurrency": "AED",
            "price": "520",
            "description": "75-minute comprehensive initial home assessment"
          },
          {
            "@type": "Offer",
            "name": "Extended Home Session (Complex Cases)",
            "priceCurrency": "AED",
            "price": "620",
            "description": "90-minute home session for complex conditions"
          },
          {
            "@type": "Offer",
            "name": "Same-Day Urgent Home Visit",
            "priceCurrency": "AED",
            "price": "580",
            "description": "Same-day home physiotherapy for urgent situations"
          },
          {
            "@type": "Offer",
            "name": "6-Session Home Physiotherapy Package",
            "priceCurrency": "AED",
            "price": "2430",
            "description": "Discounted package for structured short-term care"
          },
          {
            "@type": "Offer",
            "name": "12-Session Home Physiotherapy Package",
            "priceCurrency": "AED",
            "price": "4500",
            "description": "Discounted package for chronic conditions and post-surgical recovery"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "EducationalCredential",
      "name": "Doctor of Physical Therapy",
      "alternateName": ["DPT"],
      "description": "Doctoral-level qualification in physical therapy required for all physiotherapists at Vedara Care"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Stroke"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Parkinson's Disease"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Multiple Sclerosis"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Knee Replacement"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Hip Replacement"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "ACL Reconstruction"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Spinal Surgery"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "C-Section Recovery"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": `${currentUrl}#webpage`,
      "name": "Physiotherapy at Home in Dubai",
      "url": currentUrl,
      "about": { "@id": `${currentUrl}#home-physiotherapy` },
      "audience": {
        "@type": "PatientAudience",
        "geographicArea": { "@type": "City", "name": "Dubai, United Arab Emirates" }
      },
      "lastReviewed": modifiedDate,
      "reviewedBy": {
        "@type": "Physician",
        "name": "[Lead Home Physiotherapist Name]",
        "hasCredential": {
          "@type": "EducationalCredential",
          "name": "Doctor of Physical Therapy",
          "alternateName": ["DPT"]
        }
      },
      "primaryImageOfPage": "https://vedaracare.ae/images/physiotherapy-at-home-dubai-hero.webp"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Physiotherapy at Home in Dubai", "item": currentUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": homePhysioFaqs.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Physiotherapy at Home in Dubai — Complete Service Guide",
      "image": "https://vedaracare.ae/images/physiotherapy-at-home-dubai-hero.webp",
      "datePublished": publishedDate,
      "dateModified": modifiedDate,
      "author": {
        "@type": "Physician",
        "name": "[Lead Home Physiotherapist]"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic",
        "logo": { "@type": "ImageObject", "url": "https://vedaracare.ae/logo.png" }
      },
      "mainEntityOfPage": currentUrl
    }
  ];

  return (
    <>
      <Head>
        <title>Physiotherapy at Home in Dubai | DPT-Qualified | Vedara Care JVC</title>
        <meta name="description" content="DPT-qualified home physiotherapy across Dubai — post-surgical, neurological, postnatal, paediatric, geriatric specialisations delivered at your home. Same-week appointments. 18+ neighbourhoods covered. Insurance direct-billing. From our DHA-licensed JVC clinic." />
        
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hreflang="en-AE" href={currentUrl} />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/physiotherapy-at-home-dubai/" />
        <link rel="alternate" hreflang="x-default" href={currentUrl} />

        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta property="og:title" content="Physiotherapy at Home in Dubai — DPT-Qualified | Vedara Care JVC" />
        <meta property="og:description" content="DPT-qualified physiotherapists from our Jumeirah Village Circle clinic travelling to your home across Dubai. All specialisations — post-surgical, neurological, postnatal, paediatric, geriatric. Same-week appointments. Insurance direct-billing with seven major insurers." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/physiotherapy-at-home-dubai.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        
        <meta name="twitter:card" content="summary_large_image" />

        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

        <link rel="preload" as="image" href="https://vedaracare.ae/images/physiotherapy-at-home-dubai-hero.webp" />
      </Head>

      <AyurvedaHero {...homePhysioHero} />
      <AyurvedaIntro {...homePhysioIntro} />
       <SportsPhysiotherapyModalities {...homePhysioModalities} />
      <HomePhysioSingleImageSection 
        {...homePhysioSituations}
        items={homePhysioSituations.situations}
        image={homePhysioSituations.image}
        alt={homePhysioSituations.alt}
        quote={homePhysioSituations.quote}
      />

   

      <HomePhysioCoverage {...homePhysioCoverage} />

     

      <PhysiotherapySpecializations {...homePhysioSpecialisations} />

      <HomePhysioBookingLogistics 
        {...homePhysioBookingLogistics}
        content={homePhysioBookingLogistics.content}
      />

      <HomePhysioPricing {...homePhysioPricing} />

      <TreatmentReviews {...homePhysioOutcomes} bgColor="bg-[#1A4340]" />

      <PhysiotherapyTeam {...homePhysioTeam} />

      <FAQ {...homePhysioFaqs} />

      <HomePhysioClinicTransition {...homePhysioClinicTransition} />

      <FinalCTA {...homePhysioFinalCTA} />

      <RelatedPages {...homePhysioRelatedPages} />
    </>
  );
};

export default HomePhysiotherapyDubai;
