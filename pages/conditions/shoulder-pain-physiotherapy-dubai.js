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
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy"],
      "@id": "https://vedaracare.ae/conditions/shoulder-pain-physiotherapy-dubai/#shoulder-physio",
      "name": "Vedara Care Shoulder Pain Physiotherapy",
      "alternateName": ["Vedara Shoulder Pain Physio Dubai", "Vedara Care JVC"],
      "url": "https://vedaracare.ae/conditions/shoulder-pain-physiotherapy-dubai/",
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "Specialist shoulder pain physiotherapy at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. DPT-qualified physiotherapists treating rotator cuff problems, shoulder impingement, AC joint pain, biceps tendinopathy, shoulder instability, and more. Evidence-based protocols with honest expectations. Walking distance from Circle Mall.",
      "telephone": "[Phone number]",
      "priceRange": "AED 350 - AED 15,000",
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
        "Manual Therapy",
        "Shoulder Rehabilitation"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Shoulder Pain Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Rotator Cuff Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Shoulder Impingement Treatment"},
        {"@type": "MedicalProcedure", "name": "Manual Therapy"},
        {"@type": "MedicalProcedure", "name": "Dry Needling"},
        {"@type": "MedicalProcedure", "name": "AC Joint Pain Treatment"},
        {"@type": "MedicalProcedure", "name": "Shoulder Instability Rehabilitation"}
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
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/"},
        {"@type": "ListItem", "position": 3, "name": "Shoulder Pain Physiotherapy in Dubai", "item": "https://vedaracare.ae/conditions/shoulder-pain-physiotherapy-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": shoulderPhysioFaqs.faqs.map(faq => ({
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
      "@type": "MedicalScholarlyArticle",
      "headline": "Shoulder Pain Physiotherapy in Dubai — Complete Treatment Guide",
      "image": "https://vedaracare.ae/images/shoulder-pain-physiotherapy-dubai-hero.jpg",
      "datePublished": currentDate,
      "dateModified": currentDate,
      "author": {
        "@type": "Physician",
        "name": "Dr. Sarah Al-Hassan, DPT"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic"
      },
      "about": [
        {"@type": "MedicalCondition", "name": "Shoulder Pain"},
        {"@type": "MedicalCondition", "name": "Rotator Cuff Tear"},
        {"@type": "MedicalCondition", "name": "Shoulder Impingement"}
      ],
      "mainEntityOfPage": "https://vedaracare.ae/conditions/shoulder-pain-physiotherapy-dubai/"
    },
    ...shoulderPhysioTeam.team.map(member => ({
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": member.name,
      "url": `https://vedaracare.ae/physiotherapists/${member.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}/`,
      "image": member.image || "",
      "medicalSpecialty": ["Physiotherapy", "Shoulder Rehabilitation", "Manual Therapy"],
      "hasCredential": ["DPT", "DHA-Licensed"],
      "worksFor": {"@id": "https://vedaracare.ae/#organization"}
    }))
  ]) : '';
  
  return (
    <>
      <Head>
        <title>Shoulder Pain Physiotherapy in Dubai | Vedara Care JVC</title>
        <meta name="description" content="Specialist shoulder pain physiotherapy at our JVC clinic, Dubai. DPT-qualified physiotherapists treating rotator cuff, impingement, AC joint pain, shoulder instability, and more. Same-week appointments. Walking distance from Circle Mall." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        <meta property="og:title" content="Shoulder Pain Physiotherapy in Dubai — Vedara Care JVC" />
        <meta property="og:description" content="Specialist shoulder pain physiotherapy at our Jumeirah Village Circle clinic for rotator cuff, impingement, AC joint pain, shoulder instability, and more. Evidence-based treatment with honest expectations." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/shoulder-pain-physiotherapy-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/shoulder-pain-physiotherapy-dubai/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        
        <meta name="twitter:card" content="summary_large_image" />
        
        <link rel="canonical" href="https://vedaracare.ae/conditions/shoulder-pain-physiotherapy-dubai/" />
        <link rel="alternate" href="https://vedaracare.ae/conditions/shoulder-pain-physiotherapy-dubai/" hrefLang="en-AE" />
        <link rel="alternate" href="https://vedaracare.ae/ar/conditions/shoulder-pain-physiotherapy-dubai/" hrefLang="ar-AE" />
        <link rel="alternate" href="https://vedaracare.ae/conditions/shoulder-pain-physiotherapy-dubai/" hrefLang="x-default" />
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
