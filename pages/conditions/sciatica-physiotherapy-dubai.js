import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import { SciaticaTypes, SciaticaEmergency, SciaticaPricing, SciaticaTreatment } from '../../components/ayurveda/SciaticaSections';
import {
  sciaticaPhysioHero,
  sciaticaPhysioIntro,
  sciaticaPhysioFaqs,
  sciaticaPhysioLocation,
  sciaticaPhysioCTA,
  sciaticaPhysioRelatedPages,
  sciaticaPhysioReviews,
  sciaticaPhysioTeam,
  sciaticaPhysioTypes,
  sciaticaPhysioEmergency,
  sciaticaPhysioPricing,
  sciaticaPhysioTreatment
} from '../../data/sciaticaPhysiotherapyData';

const SciaticaPhysiotherapyDubai = () => {
  const currentDate = new Date().toISOString();
  
  return (
    <>
      <Head>
        <title>Sciatica Physiotherapy in Dubai | DPT-Qualified | Vedara Care</title>
        <meta name="description" content="Specialist sciatica physiotherapy at our DHA-licensed JVC clinic. DPT-qualified physiotherapists with McKenzie method expertise for disc herniation, piriformis syndrome, and spinal stenosis. Most sciatica resolves without surgery." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        <meta property="og:title" content="Sciatica Physiotherapy in Dubai — Specialist McKenzie Method Care | Vedara" />
        <meta property="og:description" content="DPT-qualified physiotherapists with Credentialed MDT (McKenzie method) certification for sciatica from disc herniation, disc bulges, piriformis syndrome, and spinal stenosis. Most sciatica resolves without surgery. Insurance direct-billing." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/sciatica-physiotherapy-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/sciatica-physiotherapy-dubai/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        
        <meta name="twitter:card" content="summary_large_image" />
        
        <link rel="canonical" href="https://vedaracare.ae/conditions/sciatica-physiotherapy-dubai/" />
        <link rel="alternate" href="https://vedaracare.ae/conditions/sciatica-physiotherapy-dubai/" hrefLang="en-AE" />
        <link rel="alternate" href="https://vedaracare.ae/ar/conditions/sciatica-physiotherapy-dubai/" hrefLang="ar-AE" />
        <link rel="alternate" href="https://vedaracare.ae/conditions/sciatica-physiotherapy-dubai/" hrefLang="x-default" />
      </Head>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy"],
              "@id": "https://vedaracare.ae/conditions/sciatica-physiotherapy-dubai/#sciatica-physio",
              "name": "Vedara Care Sciatica Physiotherapy",
              "alternateName": ["Vedara Sciatica Physio JVC", "Vedara Care Lumbar Radiculopathy Treatment"],
              "url": "https://vedaracare.ae/conditions/sciatica-physiotherapy-dubai/",
              "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
              "description": "Specialist sciatica physiotherapy at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. DPT-qualified physiotherapists with Credentialed MDT (McKenzie method) certification for disc herniation, disc bulges, piriformis syndrome, and spinal stenosis. Most sciatica resolves without surgery. Walking distance from Circle Mall.",
              "telephone": "[Phone number]",
              "priceRange": "AED 350 - AED 3,400",
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
                {"@type": "City", "name": "Dubai"}
              ],
              "medicalSpecialty": [
                "Physiotherapy",
                "Physical Therapy",
                "Manual Therapy",
                "McKenzie Method",
                "Sciatica Treatment"
              ],
              "isAcceptingNewPatients": true,
              "availableService": [
                {"@type": "MedicalProcedure", "name": "Sciatica Physiotherapy"},
                {"@type": "MedicalProcedure", "name": "McKenzie Method (MDT)"},
                {"@type": "MedicalProcedure", "name": "Nerve Mobilisation"},
                {"@type": "MedicalProcedure", "name": "Dry Needling"},
                {"@type": "MedicalProcedure", "name": "Motor Control Training"},
                {"@type": "MedicalProcedure", "name": "Piriformis Syndrome Treatment"}
              ],
              "memberOf": {
                "@type": "Organization",
                "name": "Dubai Health Authority"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "250",
                "bestRating": "5",
                "worstRating": "1"
              }
            },
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalCondition",
                  "name": "Sciatica",
                  "alternateName": ["Lumbar Radiculopathy", "Sciatic Nerve Pain"],
                  "code": {"@type": "MedicalCode", "code": "M54.3", "codingSystem": "ICD-10"},
                  "possibleTreatment": [
                    {"@type": "MedicalProcedure", "name": "McKenzie Method"},
                    {"@type": "MedicalProcedure", "name": "Nerve Mobilisation"},
                    {"@type": "MedicalProcedure", "name": "Manual Therapy"}
                  ]
                },
                {
                  "@type": "MedicalCondition",
                  "name": "Piriformis Syndrome",
                  "alternateName": ["Deep Gluteal Syndrome"],
                  "possibleTreatment": [
                    {"@type": "MedicalProcedure", "name": "Dry Needling"},
                    {"@type": "MedicalProcedure", "name": "Manual Therapy"},
                    {"@type": "MedicalProcedure", "name": "Therapeutic Exercise"}
                  ]
                },
                {
                  "@type": "MedicalCondition",
                  "name": "Lumbar Disc Herniation",
                  "alternateName": ["Disc Herniation", "Herniated Disc"],
                  "code": {"@type": "MedicalCode", "code": "M51.2", "codingSystem": "ICD-10"}
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Sciatica Physiotherapy Services in JVC, Dubai",
              "provider": {"@id": "https://vedaracare.ae/conditions/sciatica-physiotherapy-dubai/#sciatica-physio"},
              "areaServed": [
                {"@type": "Place", "name": "Jumeirah Village Circle"},
                {"@type": "City", "name": "Dubai"}
              ],
              "serviceType": "Sciatica Physiotherapy and Specialist Spinal Care",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Sciatica Physiotherapy Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "name": "Initial Sciatica Assessment",
                    "priceCurrency": "AED",
                    "price": "350",
                    "description": "60-minute comprehensive sciatica assessment with DPT-qualified physiotherapist"
                  },
                  {
                    "@type": "Offer",
                    "name": "Sciatica Programme (12 sessions over 8-12 weeks)",
                    "priceCurrency": "AED",
                    "price": "2600",
                    "description": "Structured 12-session programme for sciatica"
                  },
                  {
                    "@type": "Offer",
                    "name": "Chronic Sciatica Programme (16 sessions over 12-16 weeks)",
                    "priceCurrency": "AED",
                    "price": "3400",
                    "description": "16-session extended programme for chronic sciatica"
                  }
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
                {"@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/"},
                {"@type": "ListItem", "position": 3, "name": "Sciatica Physiotherapy in Dubai", "item": "https://vedaracare.ae/conditions/sciatica-physiotherapy-dubai/"}
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": sciaticaPhysioFaqs.faqs.map(faq => ({
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
              "headline": "Sciatica Physiotherapy in Dubai — Specialist McKenzie Method Care",
              "image": "https://vedaracare.ae/images/sciatica-physiotherapy-vedara-jvc.webp",
              "datePublished": currentDate,
              "dateModified": currentDate,
              "author": {
                "@type": "Physician",
                "name": "Dr. Sarah Al-Mansoori, DPT"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Vedara Care Polyclinic"
              },
              "mainEntityOfPage": "https://vedaracare.ae/conditions/sciatica-physiotherapy-dubai/"
            }
          ])
        }}
      />
      
      <div className="sciatica-physiotherapy-page">
        <AyurvedaHero {...sciaticaPhysioHero}
        bgColor='bg-[#F8F5EE]'
        />
        <AyurvedaIntro {...sciaticaPhysioIntro} />
        <SciaticaTypes {...sciaticaPhysioTypes} />
        <SciaticaEmergency data={sciaticaPhysioEmergency} />
        <SciaticaTreatment data={sciaticaPhysioTreatment} />
        <TreatmentReviews {...sciaticaPhysioReviews} />
        <PhysiotherapyTeam {...sciaticaPhysioTeam} />
         <SciaticaPricing {...sciaticaPhysioPricing} />
        <FAQ {...sciaticaPhysioFaqs} 
        bgColor='bg-[#F2EDE5]'/>
        <TreatmentLocation {...sciaticaPhysioLocation} />
        <FinalCTA {...sciaticaPhysioCTA} />
        <RelatedPages {...sciaticaPhysioRelatedPages} />
      </div>
    </>
  );
};

export default SciaticaPhysiotherapyDubai;
