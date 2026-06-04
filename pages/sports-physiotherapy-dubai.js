import Head from 'next/head';
import AyurvedaHero from '../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../components/ayurveda/AyurvedaIntro';
import SportsInjuryTypes from '../components/ayurveda/SportsInjuryTypes';
import SportsInjuryMechanism from '../components/ayurveda/SportsInjuryMechanism';
import SportsProtocols from '../components/ayurveda/SportsProtocols';
import SportsPhysiotherapyModalities from '../components/ayurveda/SportsPhysiotherapyModalities';
import PhysiotherapyIntegration from '../components/ayurveda/PhysiotherapyIntegration';
import OutcomeRanges from '../components/ayurveda/OutcomeRanges';
import PhysiotherapyTeam from '../components/ayurveda/PhysiotherapyTeam';
import SportsPhysiotherapyPricing from '../components/ayurveda/SportsPhysiotherapyPricing';
import TreatmentReviews from '../components/ayurveda/TreatmentReviews';
import FAQ from '../components/home/FAQ';
import SportsPhysiotherapyLocation from '../components/ayurveda/SportsPhysiotherapyLocation';
import FinalCTA from '../components/ayurveda/FinalCTA';
import RelatedPages from '../components/ayurveda/RelatedPages';

import {
  sportsPhysiotherapyHero,
  sportsPhysiotherapyIntro,
  sportsPhysiotherapyConditions,
  sportsPhysiotherapyMechanism,
  sportsPhysiotherapyModalities,
  sportsPhysiotherapyIntegration,
  sportsPhysiotherapyOutcomes,
  sportsPhysiotherapyTeam,
  sportsPhysiotherapyPricing,
  sportsPhysiotherapyReviews,
  sportsPhysiotherapyFaqs,
  sportsPhysiotherapyLocation,
  sportsPhysiotherapyFinalCTA,
  sportsPhysiotherapyRelatedPages
} from '../data/sportsPhysiotherapyData';

const SportsPhysiotherapyDubai = () => {
  const currentDate = new Date().toISOString();
  
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy"],
      "@id": "https://vedaracare.ae/sports-physiotherapy-dubai/#physiotherapy",
      "name": "Vedara Care Sports Physiotherapy Department",
      "alternateName": ["Vedara Sports Physiotherapy", "Vedara Care Sports Rehab"],
      "url": "https://vedaracare.ae/sports-physiotherapy-dubai/",
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "DHA-licensed sports physiotherapy at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. DPT-qualified physiotherapists specialising in sports injuries, padel injuries, running injuries, and return-to-sport protocols.",
      "telephone": "+971 4 XXXX XXX",
      "priceRange": "AED 380 - AED 2,400",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Building X, District 12",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.0478",
        "longitude": "55.2418"
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
          "opens": "10:00",
          "closes": "18:00"
        }
      ],
      "areaServed": [
        {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "Place", "name": "Jumeirah Village Triangle"},
        {"@type": "Place", "name": "Al Barsha South"},
        {"@type": "Place", "name": "Dubai Sports City"},
        {"@type": "Place", "name": "Motor City"},
        {"@type": "Place", "name": "Arjan"},
        {"@type": "Place", "name": "Dubai Hills Estate"},
        {"@type": "City", "name": "Dubai"}
      ],
      "medicalSpecialty": [
        "Physiotherapy",
        "Physical Therapy",
        "Sports Medicine",
        "Sports Physiotherapy"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Sports Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Gait Analysis"},
        {"@type": "MedicalProcedure", "name": "Return-to-Sport Testing"},
        {"@type": "MedicalProcedure", "name": "Biomechanical Assessment"},
        {"@type": "MedicalProcedure", "name": "Manual Therapy"},
        {"@type": "MedicalProcedure", "name": "Dry Needling"},
        {"@type": "MedicalProcedure", "name": "Shockwave Therapy"}
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Dubai Health Authority"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "120",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Sports Physiotherapy Services at JVC Dubai",
      "provider": {"@id": "https://vedaracare.ae/sports-physiotherapy-dubai/#physiotherapy"},
      "areaServed": [
        {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "City", "name": "Dubai"}
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Sports Physiotherapy Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Initial Sports Physiotherapy Assessment",
            "priceCurrency": "AED",
            "price": "550",
            "description": "60-minute comprehensive assessment with DPT-qualified sports physiotherapist"
          },
          {
            "@type": "Offer",
            "name": "Follow-up Sports Physiotherapy Session",
            "priceCurrency": "AED",
            "price": "380",
            "description": "45-minute follow-up treatment session"
          },
          {
            "@type": "Offer",
            "name": "Return-to-Sport Package",
            "priceCurrency": "AED",
            "price": "2400",
            "description": "8-session structured rehabilitation package"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": "https://vedaracare.ae/sports-physiotherapy-dubai/#webpage",
      "name": "Sports Physiotherapy in Dubai",
      "url": "https://vedaracare.ae/sports-physiotherapy-dubai/",
      "about": {"@id": "https://vedaracare.ae/sports-physiotherapy-dubai/#physiotherapy"},
      "audience": {
        "@type": "PatientAudience",
        "geographicArea": {"@type": "City", "name": "Dubai, United Arab Emirates"}
      },
      "lastReviewed": currentDate,
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. Sarah Mitchell, DPT",
        "hasCredential": "DPT, DHA-Licensed"
      },
      "primaryImageOfPage": "https://vedaracare.ae/images/sports-physiotherapy-dubai-hero.webp"
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Sports Physiotherapy in Dubai — Complete Service Guide",
      "image": "https://vedaracare.ae/images/sports-physiotherapy-dubai-hero.webp",
      "datePublished": "2026-06-01",
      "dateModified": currentDate,
      "author": {
        "@type": "Physician",
        "name": "Dr. Sarah Mitchell, DPT"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic",
        "logo": "https://vedaracare.ae/logo.png",
        "@id": "https://vedaracare.ae/#organization"
      },
      "mainEntityOfPage": "https://vedaracare.ae/sports-physiotherapy-dubai/"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Physiotherapy in JVC", "item": "https://vedaracare.ae/physiotherapy-jvc/"},
        {"@type": "ListItem", "position": 3, "name": "Sports Physiotherapy", "item": "https://vedaracare.ae/sports-physiotherapy-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": sportsPhysiotherapyFaqs.faqs.map((faq) => ({
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
        <title>Sports Physiotherapy in Dubai | DPT-Qualified | Vedara Care</title>
        <meta name="description" content="DPT-qualified sports physiotherapy at our DHA-licensed JVC clinic in Dubai — padel injuries, running injuries, return-to-sport protocols, biomechanical assessment. Same-day appointments available." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Sports Physiotherapy in Dubai — Vedara Care | DPT-Qualified" />
        <meta property="og:description" content="DPT-qualified sports physiotherapy at our JVC clinic — padel injuries, running injuries, return-to-sport protocols. Same-day appointments available." />
        <meta property="og:image" content="https://vedaracare.ae/images/sports-physiotherapy-dubai-hero.webp" />
        <meta property="og:url" content="https://vedaracare.ae/sports-physiotherapy-dubai/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Canonical & Language Tags */}
        <link rel="canonical" href="https://vedaracare.ae/sports-physiotherapy-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/sports-physiotherapy-dubai/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/sports-physiotherapy-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/sports-physiotherapy-dubai/" />
        
        {/* Schema Markup */}
        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
          />
        ))}
      </Head>

      <div className="sports-physiotherapy-content">
        {/* Section 1 - Hero */}
        <AyurvedaHero {...sportsPhysiotherapyHero} />
        
        {/* Section 2 - Intro */}
        <AyurvedaIntro {...sportsPhysiotherapyIntro} />



         {/* Section 3 -  */}
        <SportsProtocols />
        
        {/* Section 4 -  */}
        <SportsInjuryTypes />
        
        {/* Section 5*/}
        <SportsInjuryMechanism />
        
    
        
        {/* Section 6 — Modalities */}
        <SportsPhysiotherapyModalities />
        
        {/* Section 7 - Acute Injury Care */}
        <PhysiotherapyIntegration />
        
        {/* Section 8 - Outcomes */}
        <OutcomeRanges {...sportsPhysiotherapyOutcomes} />
        
        {/* Section 9 - Team */}
        <PhysiotherapyTeam {...sportsPhysiotherapyTeam} />
        
        {/* Section 10 - Pricing */}
        <SportsPhysiotherapyPricing />
        
        {/* Section 11 - Reviews */}
        <TreatmentReviews {...sportsPhysiotherapyReviews} />
        
        {/* Section 12 - FAQ */}
        <FAQ {...sportsPhysiotherapyFaqs} />
        
        {/* Section 13 — Location */}
        <SportsPhysiotherapyLocation />
        
        {/* Section 14 - Final CTA */}
        <FinalCTA {...sportsPhysiotherapyFinalCTA} />
        
        {/* Section 15 - Related Pages */}
        <RelatedPages {...sportsPhysiotherapyRelatedPages} />
      </div>
    </>
  );
};

export default SportsPhysiotherapyDubai;
