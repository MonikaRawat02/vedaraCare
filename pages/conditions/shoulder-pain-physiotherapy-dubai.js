import { useState, useEffect } from 'react';
import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import { SciaticaTypes, SciaticaTreatment } from '../../components/ayurveda/SciaticaSections';
import { ShoulderSurgicalConsiderations, ShoulderActivityPatterns, ShoulderPricing } from '../../components/ayurveda/ShoulderSurgicalConsiderations';
import {
  shoulderPhysioHero,
  shoulderPhysioIntro,
  shoulderPhysioFaqs,
  shoulderPhysioLocation,
  shoulderPhysioCTA,
  shoulderPhysioRelatedPages,
  shoulderPhysioReviews,
  shoulderPhysioTeam,
  shoulderPhysioConditions,
  shoulderPhysioTreatment,
  shoulderPhysioApproach,
  shoulderPhysioSurgicalConsiderations,
  shoulderPhysioActivityPatterns,
  shoulderPhysioPricing
} from '../../data/shoulderPhysiotherapyData';

const ShoulderPainPhysiotherapyDubai = () => {
  const [currentDate, setCurrentDate] = useState('');
  
  useEffect(() => {
    setCurrentDate(new Date().toISOString());
  }, []);

  const schemaData = currentDate ? JSON.stringify([
    // Schema 1: MedicalBusiness with Shoulder Specialty
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy"],
      "@id": "https://vedaracare.ae/conditions/shoulder-pain-physiotherapy-dubai/#shoulder-pain-physio",
      "name": "Vedara Care Shoulder Pain Physiotherapy",
      "alternateName": ["Vedara Shoulder Physio Dubai", "Vedara Care Shoulder Rehabilitation JVC"],
      "url": "https://vedaracare.ae/conditions/shoulder-pain-physiotherapy-dubai/",
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "Comprehensive shoulder pain physiotherapy at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. DPT-qualified specialists treating rotator cuff problems, shoulder impingement, AC joint pain, biceps tendinopathy, shoulder instability, bursitis, calcific tendinopathy, post-surgical recovery, and frozen shoulder. Most shoulder pain responds to evidence-based physiotherapy without surgery.",
      "telephone": "+971 55 586 7466",
      "priceRange": "AED 300 - AED 25,000",
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
        {"@type": "Place", "name": "Jumeirah Village Triangle"},
        {"@type": "Place", "name": "Al Barsha South"},
        {"@type": "Place", "name": "Dubai Sports City"},
        {"@type": "Place", "name": "Motor City"},
        {"@type": "Place", "name": "Arjan"},
        {"@type": "Place", "name": "Dubai Hills Estate"},
        {"@type": "Place", "name": "Dubai Marina"},
        {"@type": "Place", "name": "Downtown Dubai"},
        {"@type": "Place", "name": "Palm Jumeirah"},
        {"@type": "Place", "name": "Mirdif"}
      ],
      "medicalSpecialty": [
        "Physiotherapy",
        "Physical Therapy",
        "Sports Medicine",
        "Orthopaedic Rehabilitation"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Shoulder Pain Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Rotator Cuff Treatment"},
        {"@type": "MedicalProcedure", "name": "Shoulder Impingement Treatment"},
        {"@type": "MedicalProcedure", "name": "AC Joint Treatment"},
        {"@type": "MedicalProcedure", "name": "Biceps Tendinopathy Treatment"},
        {"@type": "MedicalProcedure", "name": "Shoulder Instability Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Calcific Tendinopathy Treatment"},
        {"@type": "MedicalProcedure", "name": "Post-Surgical Shoulder Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Manual Therapy"},
        {"@type": "MedicalProcedure", "name": "Dry Needling"},
        {"@type": "MedicalProcedure", "name": "Shockwave Therapy"},
        {"@type": "MedicalProcedure", "name": "Scapular Re-Education"}
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Dubai Health Authority"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "380",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    // Schema 2: MedicalCondition Entities (Multiple Shoulder Conditions)
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "name": "Rotator Cuff Syndrome",
          "alternateName": ["Rotator Cuff Tendinopathy", "Rotator Cuff Injury"],
          "code": {"@type": "MedicalCode", "code": "M75.1", "codingSystem": "ICD-10"},
          "possibleTreatment": [
            {"@type": "MedicalProcedure", "name": "Progressive Loading"},
            {"@type": "MedicalProcedure", "name": "Manual Therapy"},
            {"@type": "MedicalProcedure", "name": "Scapular Re-Education"}
          ]
        },
        {
          "@type": "MedicalCondition",
          "name": "Shoulder Impingement Syndrome",
          "alternateName": ["Subacromial Impingement"],
          "code": {"@type": "MedicalCode", "code": "M75.4", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "AC Joint Pain",
          "alternateName": ["Acromioclavicular Joint Disorder"],
          "code": {"@type": "MedicalCode", "code": "M19.011", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Biceps Tendinopathy",
          "code": {"@type": "MedicalCode", "code": "M75.2", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Shoulder Instability",
          "alternateName": ["Recurrent Shoulder Dislocation"],
          "code": {"@type": "MedicalCode", "code": "M25.31", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Shoulder Bursitis",
          "code": {"@type": "MedicalCode", "code": "M75.5", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Calcific Tendinopathy of Shoulder",
          "code": {"@type": "MedicalCode", "code": "M75.3", "codingSystem": "ICD-10"}
        }
      ]
    },
    // Schema 3: Service with OfferCatalog
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Shoulder Pain Physiotherapy Services in Dubai",
      "provider": {"@id": "https://vedaracare.ae/conditions/shoulder-pain-physiotherapy-dubai/#shoulder-pain-physio"},
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "serviceType": "Comprehensive Shoulder Pain Physiotherapy",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Shoulder Pain Physiotherapy Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Initial Shoulder Pain Assessment",
            "priceCurrency": "AED",
            "price": "[X]",
            "description": "60-minute comprehensive shoulder pain assessment with DPT-qualified specialist"
          },
          {
            "@type": "Offer",
            "name": "Acute Shoulder Injury Package",
            "priceCurrency": "AED",
            "price": "[X]",
            "description": "8-session structured programme for acute shoulder injuries over 4-6 weeks"
          },
          {
            "@type": "Offer",
            "name": "Rotator Cuff Conservative Programme",
            "priceCurrency": "AED",
            "price": "[X]",
            "description": "16-20 session programme for rotator cuff conditions over 12-16 weeks"
          },
          {
            "@type": "Offer",
            "name": "Post-Surgical Rotator Cuff Rehabilitation",
            "priceCurrency": "AED",
            "price": "[X]",
            "description": "24-36 session comprehensive post-surgical programme over 6-9 months"
          },
          {
            "@type": "Offer",
            "name": "Shoulder Instability Rehabilitation",
            "priceCurrency": "AED",
            "price": "[X]",
            "description": "Comprehensive instability rehabilitation programme"
          }
        ]
      }
    },
    // Schema 4: BreadcrumbList
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/"},
        {"@type": "ListItem", "position": 3, "name": "Shoulder Pain Physiotherapy in Dubai", "item": "https://vedaracare.ae/conditions/shoulder-pain-physiotherapy-dubai/"}
      ]
    },
    // Schema 5: FAQPage (All 20 Q&As)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": shoulderPhysioFaqs.faqs.map(faq => {
        // Use exactly the documentation-specified answers for these two questions
        if (faq.question === "Do I need surgery for my shoulder pain?") {
          return {
            "@type": "Question",
            "name": "Do I need surgery for my shoulder pain?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most shoulder pain does not require surgery. Research consistently shows that physiotherapy is at least as effective as surgery for many common shoulder conditions including degenerative rotator cuff tears, shoulder impingement, and most overuse conditions. Surgery is appropriate for specific situations including large traumatic rotator cuff tears, recurrent dislocations, and failed conservative care."
            }
          };
        }
        if (faq.question === "How is my shoulder pain different from frozen shoulder?") {
          return {
            "@type": "Question",
            "name": "How is my shoulder pain different from frozen shoulder?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Frozen shoulder is a specific condition with restriction of both active and passive movement in all directions and progressive worsening over months. Most shoulder pain involves specific structures and typically restricts certain movements rather than all directions."
            }
          };
        }
        // Use the rest from the data
        return {
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        };
      })
    },
    // Schema 6: Article
    {
      "@context": "https://schema.org",
      "@type": "MedicalScholarlyArticle",
      "headline": "Shoulder Pain Physiotherapy in Dubai — Complete Treatment Guide",
      "image": "https://vedaracare.ae/images/shoulder-pain-physiotherapy-dubai-hero.jpg",
      "datePublished": currentDate,
      "dateModified": currentDate,
      "author": {
        "@type": "Physician",
        "name": "[Lead Physiotherapist]"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic"
      },
      "about": [
        {"@type": "MedicalCondition", "name": "Shoulder Pain"},
        {"@type": "MedicalCondition", "name": "Rotator Cuff Syndrome"},
        {"@type": "MedicalCondition", "name": "Shoulder Impingement"}
      ],
      "mainEntityOfPage": "https://vedaracare.ae/conditions/shoulder-pain-physiotherapy-dubai/"
    },
    // Schema 7: Physiotherapist (for each team member)
    ...shoulderPhysioTeam.team.map(member => ({
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": member.name,
      "url": `https://vedaracare.ae/physiotherapists/${member.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}/`,
      "image": member.image || "",
      "medicalSpecialty": ["Physiotherapy", "Shoulder Rehabilitation", "Manual Therapy"],
      "hasCredential": ["DPT", "Manual Therapy Certified", "Dry Needling Certified", "DHA-Licensed"],
      "worksFor": {"@id": "https://vedaracare.ae/#organization"}
    }))
    // Schema 8: Organization is referenced via @id site-wide
  ]) : '';
  
  return (
    <>
      <Head>
        <title>Shoulder Pain Physiotherapy in Dubai | All Conditions | Vedara JVC</title>
        <meta name="description" content="Specialist shoulder pain physiotherapy at our JVC clinic, Dubai. DPT-qualified specialists treating rotator cuff, impingement, AC joint, biceps, instability, and all shoulder conditions. Most shoulder pain responds without surgery. Walking distance from Circle Mall." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        <meta property="og:title" content="Shoulder Pain Physiotherapy in Dubai — Comprehensive Specialist Care | Vedara JVC" />
        <meta property="og:description" content="DPT-qualified shoulder specialists at our Jumeirah Village Circle clinic treating the full range of shoulder conditions — rotator cuff problems, impingement, AC joint, biceps tendinopathy, instability, and more. Most shoulder pain responds excellently to evidence-based physiotherapy without surgery." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/shoulder-pain-physiotherapy-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/shoulder-pain-physiotherapy-dubai/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        
        <meta name="twitter:card" content="summary_large_image" />
        
        <link rel="canonical" href="https://vedaracare.ae/conditions/shoulder-pain-physiotherapy-dubai/" />
        <link rel="alternate" href="https://vedaracare.ae/conditions/shoulder-pain-physiotherapy-dubai/" hreflang="en-AE" />
        <link rel="alternate" href="https://vedaracare.ae/ar/conditions/shoulder-pain-physiotherapy-dubai/" hreflang="ar-AE" />
        <link rel="alternate" href="https://vedaracare.ae/conditions/shoulder-pain-physiotherapy-dubai/" hreflang="x-default" />
      </Head>
      
      {currentDate && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaData }}
        />
      )}
      
      <div className="shoulder-pain-physiotherapy-page">
        <AyurvedaHero {...shoulderPhysioHero}
        bgColor='bg-[#F8F5EE]'
        />
        <AyurvedaIntro {...shoulderPhysioIntro} />
        <SciaticaTreatment data={shoulderPhysioTreatment} showBorderLeft={false} rightContentStyle="simpleBox" bgColor="bg-[#F0E8D5]" />
       
        <SciaticaTypes
          {...shoulderPhysioConditions}
          gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        />
        <ShoulderActivityPatterns data={shoulderPhysioActivityPatterns} />
        <SciaticaTreatment data={shoulderPhysioApproach} showBorderLeft={false} rightContentStyle="tags" bgColor="bg-white" showStepNumbers={true} />
        <ShoulderSurgicalConsiderations data={shoulderPhysioSurgicalConsiderations} />
        <TreatmentReviews {...shoulderPhysioReviews} />
        <PhysiotherapyTeam {...shoulderPhysioTeam} />
        <ShoulderPricing data={shoulderPhysioPricing} />
        <FAQ {...shoulderPhysioFaqs} 
        bgColor="bg-[#F2EDE5]"/>
        <TreatmentLocation {...shoulderPhysioLocation} />
        <FinalCTA {...shoulderPhysioCTA} />
        <RelatedPages {...shoulderPhysioRelatedPages} />
      </div>
    </>
  );
};

export default ShoulderPainPhysiotherapyDubai;
