import { useState, useEffect } from 'react';
import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FAQ from '../../components/home/FAQ';
import { SciaticaTypes, SciaticaTreatment } from '../../components/ayurveda/SciaticaSections';
import CareSettings from '../../components/ayurveda/CareSettings';
import {
  strokeRehabHero,
  strokeRehabIntro,
  strokeRehabRecovery,
  strokeRehabCareSettings,
  strokeRehabTreatment,
  strokeRehabTypes,
  strokeRehabLocation,
  strokeRehabTeam,
  strokeRehabFaqs,
  strokeRehabCTA,
  strokeRehabRelatedPages
} from '../../data/strokeRehabData';

const StrokeRehabDubai = () => {
  const [currentDate, setCurrentDate] = useState('');
  
  useEffect(() => {
    setCurrentDate(new Date().toISOString());
  }, []);

  const schemaData = currentDate ? JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy"],
      "@id": "https://vedaracare.ae/conditions/stroke-rehab-dubai/#stroke-rehab",
      "name": "Vedara Care Post-Stroke Rehabilitation",
      "alternateName": ["Vedara Stroke Rehab Dubai", "Vedara Care JVC Stroke Rehabilitation"],
      "url": "https://vedaracare.ae/conditions/stroke-rehab-dubai/",
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "Specialist post-stroke rehabilitation at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. Evidence-based treatment including constraint-induced movement therapy (CIMT), functional electrical stimulation (FES), gait training, and home physiotherapy across Dubai. Neurologist-coordinated care. Insurance direct-billing.",
      "telephone": "[Phone number]",
      "priceRange": "AED [X] - AED [X]",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[Full address]",
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
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "21:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "09:00",
          "closes": "17:00"
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
        "Neurological Physiotherapy",
        "Physical Therapy",
        "Stroke Rehabilitation",
        "Neurorehabilitation"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Post-Stroke Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Constraint-Induced Movement Therapy (CIMT)"},
        {"@type": "MedicalProcedure", "name": "Functional Electrical Stimulation (FES)"},
        {"@type": "MedicalProcedure", "name": "Gait Training"},
        {"@type": "MedicalProcedure", "name": "Home Stroke Rehabilitation"}
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
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/"},
        {"@type": "ListItem", "position": 3, "name": "Post-Stroke Rehabilitation in Dubai", "item": "https://vedaracare.ae/conditions/stroke-rehab-dubai/"}
      ]
    }
  ]) : '';
  
  return (
    <>
      <Head>
        <title>Post-Stroke Rehabilitation in Dubai | Vedara Care JVC</title>
        <meta name="description" content="Specialist post-stroke rehabilitation at our JVC clinic and home physiotherapy across Dubai. Evidence-based treatment including CIMT, FES, gait training, and neurologist coordination. Insurance direct-billing." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        <meta property="og:title" content="Post-Stroke Rehabilitation in Dubai — Vedara Care JVC" />
        <meta property="og:description" content="Specialist post-stroke rehabilitation at our Jumeirah Village Circle clinic and home physiotherapy across Dubai. Evidence-based treatment including constraint-induced movement therapy (CIMT), functional electrical stimulation (FES), and gait training." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/stroke-rehab-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/stroke-rehab-dubai/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        
        <meta name="twitter:card" content="summary_large_image" />
        
        <link rel="canonical" href="https://vedaracare.ae/conditions/stroke-rehab-dubai/" />
        <link rel="alternate" href="https://vedaracare.ae/conditions/stroke-rehab-dubai/" hrefLang="en-AE" />
        <link rel="alternate" href="https://vedaracare.ae/ar/conditions/stroke-rehab-dubai/" hrefLang="ar-AE" />
        <link rel="alternate" href="https://vedaracare.ae/conditions/stroke-rehab-dubai/" hrefLang="x-default" />
      </Head>
      
      {currentDate && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaData }}
        />
      )}
      
      <div className="stroke-rehabilitation-page">
        <AyurvedaHero {...strokeRehabHero} bgColor="bg-[#F8F5EE]" />
        <AyurvedaIntro {...strokeRehabIntro} />
        <SciaticaTreatment data={strokeRehabRecovery} showBorderLeft={false} rightContentStyle="simpleBox" bgColor="bg-[#F5F0E8]" />
        <SciaticaTypes {...strokeRehabTypes} typicalSignsLabel="TYPICAL IMPAIRMENT PATTERNS:" />
        <SciaticaTreatment data={strokeRehabTreatment} showBorderLeft={false} rightContentStyle="bulletList" bgColor="bg-white" showStepNumbers={false} />
       <CareSettings {...strokeRehabCareSettings}/>
        <PhysiotherapyTeam {...strokeRehabTeam} />
        <FAQ {...strokeRehabFaqs} />
        <TreatmentLocation {...strokeRehabLocation} />
        <FinalCTA {...strokeRehabCTA} />
        <RelatedPages {...strokeRehabRelatedPages} />
      </div>
    </>
  );
};

export default StrokeRehabDubai;