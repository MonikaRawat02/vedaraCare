import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import PediatricAgeGroups from '../../components/ayurveda/PediatricAgeGroups';
import SportsInjuryTypes from '../../components/ayurveda/SportsInjuryTypes';
import PhysiotherapyMechanism from '../../components/ayurveda/PhysiotherapyMechanism';
import PediatricWhatToExpect from '../../components/ayurveda/PediatricWhatToExpect';
import PhysiotherapyInsurance from '../../components/ayurveda/PhysiotherapyInsurance';
import PricingSectionNew from '../../components/ayurveda/PricingSectionNew';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  pediatricPhysiotherapyHero,
  pediatricPhysiotherapyIntro,
  pediatricPhysiotherapyAgeGroups,
  pediatricPhysiotherapyMechanism,
  pediatricPhysiotherapyInsurance,
  pediatricPhysiotherapyMechanism2,
  pediatricPhysiotherapyWhatToExpect,
  pediatricPhysiotherapyReviews,
  pediatricPhysiotherapyJvcPricing,
  pediatricPhysiotherapyTeam,
  pediatricPhysiotherapyFaqs,
  pediatricPhysiotherapyLocation,
  pediatricPhysiotherapyFinalCTA,
  pediatricPhysiotherapyRelatedPages
} from '../../data/pediatricPhysiotherapyData';

const PediatricDubai = () => {
  const currentDate = new Date().toISOString();
  
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy"],
      "@id": "https://vedaracare.ae/physiotherapy/pediatric-dubai/#physiotherapy",
      "name": "Vedara Care Paediatric Physiotherapy",
      "alternateName": ["Vedara Paediatric Physio", "Vedara Care Kids Physio"],
      "url": "https://vedaracare.ae/physiotherapy/pediatric-dubai/",
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "DHA-licensed paediatric physiotherapy at Vedara Care Polyclinic, Dubai. DPT-qualified physiotherapists specialising in infants, toddlers, school-age, and adolescent physiotherapy for developmental, musculoskeletal, and sports conditions.",
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
        {"@type": "Place", "name": "Dubai"},
        {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "Place", "name": "Jumeirah Village Triangle"},
        {"@type": "Place", "name": "Dubai Sports City"},
        {"@type": "Place", "name": "Motor City"},
        {"@type": "Place", "name": "Al Barsha South"},
        {"@type": "Place", "name": "Dubai Hills Estate"},
        {"@type": "Place", "name": "Dubai Marina"},
        {"@type": "Place", "name": "Downtown Dubai"},
        {"@type": "Place", "name": "Palm Jumeirah"},
        {"@type": "Place", "name": "Mirdif"}
      ],
      "medicalSpecialty": [
        "Paediatric Physiotherapy",
        "Sports Medicine",
        "Sports Physiotherapy",
        "Rehabilitation Medicine",
        "Physical Therapy"
      ],
      "isAcceptingNewPatients": true,
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
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Physiotherapy in JVC", "item": "https://vedaracare.ae/physiotherapy-jvc/"},
        {"@type": "ListItem", "position": 3, "name": "Paediatric Physiotherapy", "item": "https://vedaracare.ae/physiotherapy/pediatric-dubai/"}
      ]
    }
  ];
  
  return (
    <>
      <Head>
        <title>Paediatric Physiotherapy Dubai | Kids Physiotherapy | Vedara Care</title>
        <meta name="description" content="DHA-licensed paediatric physiotherapy for infants, toddlers, school-age, and adolescents in Dubai. Developmental delays, torticollis, sports injuries, and more. Family-centred care with DPT-qualified therapists." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Paediatric Physiotherapy Dubai — Kids Physiotherapy | Vedara Care" />
        <meta property="og:description" content="DHA-licensed paediatric physiotherapy for infants, toddlers, school-age, and adolescents in Dubai. Developmental delays, torticollis, sports injuries, and more. Family-centred care." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/pediatric-physiotherapy-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/physiotherapy/pediatric-dubai/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        
        {/* Canonical & Language Tags */}
        <link rel="canonical" href="https://vedaracare.ae/physiotherapy/pediatric-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/physiotherapy/pediatric-dubai/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/physiotherapy/pediatric-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/physiotherapy/pediatric-dubai/" />
        
        {/* Schema Markup */}
        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
          />
        ))}
      </Head>

      <div className="pediatric-physiotherapy-content">
        <AyurvedaHero {...pediatricPhysiotherapyHero} />
        <AyurvedaIntro {...pediatricPhysiotherapyIntro} />
        <PediatricAgeGroups {...pediatricPhysiotherapyAgeGroups} />
             
        <SportsInjuryTypes />
        <PhysiotherapyMechanism{...pediatricPhysiotherapyMechanism2}
        bgColor="bg-[#F8F6F1 ]" />
        {/* <PhysiotherapyMechanism /> */}
        <PediatricWhatToExpect {...pediatricPhysiotherapyWhatToExpect} />
      <PhysiotherapyInsurance {...pediatricPhysiotherapyInsurance} />
        <PhysiotherapyMechanism {...pediatricPhysiotherapyMechanism} />
   
        <PricingSectionNew {...pediatricPhysiotherapyJvcPricing} />
        <TreatmentReviews {...pediatricPhysiotherapyReviews} />
        <PhysiotherapyTeam {...pediatricPhysiotherapyTeam} />
        <FAQ {...pediatricPhysiotherapyFaqs} 
        bgColor="bg-[#F5F1E8]"/>
        <TreatmentLocation {...pediatricPhysiotherapyLocation}
        bgColor="bg-[#FFFFFF]" />
        <FinalCTA {...pediatricPhysiotherapyFinalCTA} />
        <RelatedPages {...pediatricPhysiotherapyRelatedPages} />
      </div>
    </>
  );
};

export default PediatricDubai;
