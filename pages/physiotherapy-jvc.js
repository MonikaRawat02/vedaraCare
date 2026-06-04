import Head from 'next/head';
import AyurvedaHero from '../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../components/ayurveda/AyurvedaIntro';
import PhysiotherapyTechniques from '../components/ayurveda/PhysiotherapyTechniques';
import PhysiotherapySpecializations from '../components/ayurveda/PhysiotherapySpecializations';
import TreatmentProtocolNew from '../components/ayurveda/TreatmentProtocolNew';
import IntegrationSection from '../components/ayurveda/IntegrationSection';
import Therapies2 from '../components/ayurveda/Therapies2';
import PhysiotherapyTeam from '../components/ayurveda/PhysiotherapyTeam';
import PhysiotherapyImageCards from '../components/ayurveda/PhysiotherapyImageCards';
import PhysiotherapyInsurance from '../components/ayurveda/PhysiotherapyInsurance';
import PricingSectionNew from '../components/ayurveda/PricingSectionNew';
import TreatmentReviews from '../components/ayurveda/TreatmentReviews';
import FAQ from '../components/home/FAQ';
import TreatmentLocation from '../components/ayurveda/TreatmentLocation';
import FinalCTA from '../components/ayurveda/FinalCTA';
import RelatedPages from '../components/ayurveda/RelatedPages';
import {
  physiotherapyJvcHero,
  physiotherapyJvcIntro,
  physiotherapyJvcSpecializations,
  physiotherapyJvcMechanism,
  physiotherapyJvcProtocol,
  physiotherapyJvcHomeHealthcareNew,
  physiotherapyJvcTeam,
  physiotherapyJvcImageCards,
  physiotherapyJvcInsurance,
  physiotherapyJvcPricing,
  physiotherapyJvcReviews,
  physiotherapyJvcFaqs,
  physiotherapyJvcLocation,
  physiotherapyJvcFinalCTA,
  physiotherapyJvcRelatedPages
} from '../data/physiotherapyJvcData';

const PhysiotherapyJvc = () => {
  const currentDate = new Date().toISOString();
  
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy", "MedicalClinic"],
      "@id": "https://vedaracare.ae/physiotherapy-jvc/#physiotherapy",
      "name": "Vedara Care Physiotherapy Department",
      "alternateName": ["Vedara Physiotherapy JVC", "Vedara Care Physio"],
      "url": "https://vedaracare.ae/physiotherapy-jvc/",
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "DHA-licensed physiotherapy at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. DPT-qualified physiotherapists providing musculoskeletal, sports, post-surgical, neurological, women's health, paediatric, and cardiopulmonary physiotherapy.",
      "telephone": "[Phone number]",
      "priceRange": "AED 250 - AED 8,000",
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
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "Place", "name": "Circle Mall"},
        {"@type": "Place", "name": "FIVE Jumeirah Village"},
        {"@type": "Place", "name": "JSS Private School"},
        {"@type": "Place", "name": "Jumeirah Village Triangle"},
        {"@type": "Place", "name": "Al Barsha South"},
        {"@type": "Place", "name": "Dubai Sports City"},
        {"@type": "Place", "name": "Motor City"},
        {"@type": "Place", "name": "Arjan"},
        {"@type": "Place", "name": "Dubai Hills Estate"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "medicalSpecialty": [
        "Physiotherapy",
        "Physical Therapy",
        "Sports Medicine",
        "Rehabilitation Medicine",
        "Sports Physiotherapy",
        "Neurological Rehabilitation",
        "Pelvic Floor Physiotherapy",
        "Paediatric Physiotherapy"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Musculoskeletal Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Sports Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Post-surgical Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Neurological Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Women's Health Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Paediatric Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Cardiopulmonary Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Manual Therapy"},
        {"@type": "MedicalProcedure", "name": "Dry Needling"},
        {"@type": "MedicalProcedure", "name": "Shockwave Therapy"},
        {"@type": "MedicalProcedure", "name": "Ultrasound Therapy"},
        {"@type": "MedicalProcedure", "name": "Interferential Therapy (IFC)"},
        {"@type": "MedicalProcedure", "name": "Transcutaneous Electrical Nerve Stimulation (TENS)"},
        {"@type": "MedicalProcedure", "name": "ACL Reconstruction Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Joint Replacement Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Spinal Surgery Rehabilitation"}
      ],
      "medicalCondition": [
        {"@type": "MedicalCondition", "name": "Back pain"},
        {"@type": "MedicalCondition", "name": "Neck pain"},
        {"@type": "MedicalCondition", "name": "Frozen shoulder"},
        {"@type": "MedicalCondition", "name": "Knee OA"},
        {"@type": "MedicalCondition", "name": "Sciatica"}
      ],
      "insuranceProvider": [
        {"@type": "Organization", "name": "Daman"},
        {"@type": "Organization", "name": "AXA"},
        {"@type": "Organization", "name": "Allianz"},
        {"@type": "Organization", "name": "Oman Insurance"},
        {"@type": "Organization", "name": "Now Health"},
        {"@type": "Organization", "name": "Bupa"},
        {"@type": "Organization", "name": "MetLife"}
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Dubai Health Authority"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "180",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Physiotherapy Services at JVC Dubai",
      "provider": {"@id": "https://vedaracare.ae/physiotherapy-jvc/#physiotherapy"},
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Physiotherapy Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Initial Physiotherapy Assessment",
            "priceCurrency": "AED",
            "price": "[X]",
            "description": "60-minute comprehensive assessment with DPT-qualified physiotherapist"
          },
          {
            "@type": "Offer",
            "name": "Single Physiotherapy Session",
            "priceCurrency": "AED",
            "price": "[X]",
            "description": "45-60 minute follow-up treatment session"
          },
          {
            "@type": "Offer",
            "name": "Structured Treatment Programme",
            "priceCurrency": "AED",
            "price": "[X]",
            "description": "Package of 6 or 12 sessions for chronic conditions and post-surgical rehabilitation"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": "https://vedaracare.ae/physiotherapy-jvc/#webpage",
      "name": "Physiotherapy in JVC, Dubai",
      "url": "https://vedaracare.ae/physiotherapy-jvc/",
      "about": {"@id": "https://vedaracare.ae/physiotherapy-jvc/#physiotherapy"},
      "audience": {
        "@type": "PatientAudience",
        "geographicArea": {"@type": "City", "name": "Dubai, United Arab Emirates"}
      },
      "lastReviewed": currentDate,
      "reviewedBy": {
        "@type": "Physician",
        "name": "[Lead Physiotherapist Name]",
        "hasCredential": "DPT, DHA-Licensed"
      },
      "primaryImageOfPage": "https://vedaracare.ae/images/physiotherapy-jvc-hero.webp"
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Physiotherapy in JVC, Dubai — A Complete Service Guide",
      "image": "https://vedaracare.ae/images/physiotherapy-jvc-hero.webp",
      "datePublished": "2026-06-01",
      "dateModified": currentDate,
      "author": {
        "@type": "Physician",
        "name": "[Lead Physiotherapist]"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic",
        "logo": "https://vedaracare.ae/logo.png"
      },
      "mainEntityOfPage": "https://vedaracare.ae/physiotherapy-jvc/"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://vedaracare.ae/#organization",
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": "https://vedaracare.ae/logo.png"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Physiotherapy in JVC", "item": "https://vedaracare.ae/physiotherapy-jvc/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": physiotherapyJvcFaqs.faqs.map((faq) => ({
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
      "@type": "Physician",
      "name": "[Lead Physiotherapist Name]",
      "url": "https://vedaracare.ae/physiotherapists/[name]/",
      "image": "https://vedaracare.ae/images/[name].jpg",
      "medicalSpecialty": ["Physiotherapy", "Physical Therapy"],
      "hasCredential": ["DPT", "DHA-Licensed"],
      "worksFor": {"@id": "https://vedaracare.ae/#organization"}
    }
  ];
  
  return (
    <>
      <Head>
        <title>Physiotherapy in JVC, Dubai | DPT-Qualified | Vedara Care</title>
        <meta name="description" content="DPT-qualified physiotherapy at our DHA-licensed JVC clinic, Dubai — walking distance from Circle Mall. Sports, post-surgical, neurological, women's health, paediatric physiotherapy. Same-day appointments. Insurance direct-billing with 7 major insurers." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Physiotherapy in JVC Dubai — Vedara Care | DPT-Qualified | Near Circle Mall" />
        <meta property="og:description" content="DPT-qualified physiotherapy at our DHA-licensed Jumeirah Village Circle clinic. Sports physio, post-surgical rehabilitation, neurological rehab, women's health, paediatric care. Walking distance from Circle Mall. Same-day appointments often available." />
        <meta property="og:image" content="https://vedaracare.ae/images/physiotherapy-jvc-hero.webp" />
        <meta property="og:url" content="https://vedaracare.ae/physiotherapy-jvc/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Canonical & Language Tags */}
        <link rel="canonical" href="https://vedaracare.ae/physiotherapy-jvc/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/physiotherapy-jvc/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/physiotherapy-jvc/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/physiotherapy-jvc/" />



        {/* Schema Markup */}
        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
          />
        ))}
      </Head>

      <div className="physiotherapy-content">
        {/* Section 1 - Hero */}
        <AyurvedaHero {...physiotherapyJvcHero} />
        
        {/* Section 2 - Intro */}
        <AyurvedaIntro {...physiotherapyJvcIntro} />
        
        {/* Section 3 - Specializations with commonConditions */}
        <PhysiotherapySpecializations {...physiotherapyJvcSpecializations} />
        
        {/* Section 4 - Mechanism with Image */}
        <PhysiotherapyTechniques {...physiotherapyJvcMechanism} />
        
        {/* Section 5 - Treatment Protocol */}
        <TreatmentProtocolNew {...physiotherapyJvcProtocol} />
        
        {/* Section 6 - Home Healthcare (with different UI) */}
        <IntegrationSection 
          {...physiotherapyJvcHomeHealthcareNew}
          primaryButtonHref="/book"
          secondaryButtonHref="/ayurveda-clinic-jvc"
        />
        
        {/* Section 7 - Therapies/Modalities */}
        <Therapies2 />
        
        {/* Section 8 - Team */}
        <PhysiotherapyTeam {...physiotherapyJvcTeam} />
        
        {/* Section 9 - Image Cards */}
        {/* <PhysiotherapyImageCards {...physiotherapyJvcImageCards} /> */}
        
        {/* Section 10 - Insurance */}
       
        
        {/* Section 11 - Pricing */}
        <PricingSectionNew {...physiotherapyJvcPricing} />
        
        {/* Section 12 - Reviews */}
        <TreatmentReviews {...physiotherapyJvcReviews} />
        
        {/* Section 13 - FAQ */}
        <FAQ {...physiotherapyJvcFaqs} />
        
        {/* Section 14 - Location */}
        <TreatmentLocation {...physiotherapyJvcLocation} />
        
        {/* Section 15 - Final CTA */}
        <FinalCTA {...physiotherapyJvcFinalCTA} />
        
        {/* Section 16 - Related Pages */}
        <RelatedPages {...physiotherapyJvcRelatedPages} />
      </div>
    </>
  );
};

export default PhysiotherapyJvc;
