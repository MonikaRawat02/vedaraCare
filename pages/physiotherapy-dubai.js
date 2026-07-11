import Head from 'next/head';
import AyurvedaHero from '../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../components/ayurveda/AyurvedaIntro';
import PhysiotherapyMechanism from '../components/ayurveda/PhysiotherapyMechanism';
import ArthritisPillars from '../components/ayurveda/ArthritisPillars';
import PhysiotherapySpecializations from '../components/ayurveda/PhysiotherapySpecializations';
import TreatmentReviews from '../components/ayurveda/TreatmentReviews';
import PhysiotherapyConditions from '../components/ayurveda/PhysiotherapyConditions';
import PhysiotherapyTwoImage from '../components/ayurveda/PhysiotherapyTwoImage';
import FAQ from '../components/home/FAQ';
import FinalCTA from '../components/ayurveda/FinalCTA';
import RelatedPages from '../components/ayurveda/RelatedPages';
import PhysiotherapyInsurance from '../components/ayurveda/PhysiotherapyInsurance';
import PricingSection2 from '../components/ayurveda/PricingSection2';
import TreatmentLocationCustom from '../components/ayurveda/TreatmentLocationCustom';
import {
  physiotherapyHero,
  physiotherapyIntro,
  physiotherapyMechanism,
  physiotherapyBenefits,
  physiotherapySpecializations,
  physiotherapyReviews,
  physiotherapyConditions,
  physiotherapyTwoImage,
  physiotherapyFaqs,
  physiotherapyInsurance,
  physiotherapyPricing,
  physiotherapyLocationCustom,
  physiotherapyFinalCTA,
  physiotherapyRelatedPages
} from '../data/physiotherapyData';

const PhysiotherapyDubai = () => {
  const currentDate = new Date().toISOString();
  
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy", "MedicalClinic"],
      "@id": "https://vedaracare.ae/physiotherapy-dubai/#physiotherapy",
      "name": "Vedara Care Physiotherapy",
      "alternateName": ["Vedara Care Physio Dubai", "Vedara Physiotherapy"],
      "url": "https://vedaracare.ae/physiotherapy-dubai/",
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "DHA-licensed physiotherapy at Vedara Care Polyclinic, Al Barsha South Fourth, Binghatti Azure, Shop -4, Jumeirah Village Circle (JVC), Dubai. DPT-qualified physiotherapists serving patients from across Dubai including JVC, Marina, Downtown, Palm Jumeirah, Mirdif. Seven specialisations available for conditions like back pain, knee OA, post-surgical rehab, and more. Open Monday to Sunday 8:30 AM to 11:30 PM.",
      "telephone": "+971 55 586 7466",
      "email": "booking@vedaracare.ae",
      "priceRange": "AED 250 - AED 8,000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4, Jumeirah Village Circle (JVC)",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "08:30",
          "closes": "23:30"
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
        {"@type": "Place", "name": "Dubai Marina"},
        {"@type": "Place", "name": "Downtown Dubai"},
        {"@type": "Place", "name": "Business Bay"},
        {"@type": "Place", "name": "Palm Jumeirah"},
        {"@type": "Place", "name": "Mirdif"},
        {"@type": "Place", "name": "Al Furjan"},
        {"@type": "Place", "name": "Discovery Gardens"},
        {"@type": "Place", "name": "Damac Hills"},
        {"@type": "Place", "name": "Mudon"},
        {"@type": "Place", "name": "Town Square"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "medicalSpecialty": [
        "Physiotherapy",
        "Physical Therapy",
        "Sports Medicine",
        "Rehabilitation Medicine",
        "Musculoskeletal Physiotherapy",
        "Sports Physiotherapy",
        "Neurological Rehabilitation",
        "Pelvic Floor Physiotherapy",
        "Paediatric Physiotherapy",
        "Cardiopulmonary Rehabilitation"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Musculoskeletal Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Sports Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Post-Surgical Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Neurological Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Women's Health Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Paediatric Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Cardiopulmonary Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Manual Therapy"},
        {"@type": "MedicalProcedure", "name": "Dry Needling"},
        {"@type": "MedicalProcedure", "name": "Shockwave Therapy"},
        {"@type": "MedicalProcedure", "name": "Ultrasound Therapy"},
        {"@type": "MedicalProcedure", "name": "Pelvic Floor Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Interferential Therapy (IFC)"},
        {"@type": "MedicalProcedure", "name": "Transcutaneous Electrical Nerve Stimulation (TENS)"},
        {"@type": "MedicalProcedure", "name": "Class IV Laser Therapy"},
        {"@type": "MedicalProcedure", "name": "Post-COVID Conditioning"},
        {"@type": "MedicalProcedure", "name": "ACL Reconstruction Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Joint Replacement Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Spinal Surgery Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Home Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Padel Injury Rehabilitation"}
      ],
      "medicalCondition": [
        {"@type": "MedicalCondition", "name": "Back pain"},
        {"@type": "MedicalCondition", "name": "Neck pain"},
        {"@type": "MedicalCondition", "name": "Frozen shoulder"},
        {"@type": "MedicalCondition", "name": "Knee OA"},
        {"@type": "MedicalCondition", "name": "Sciatica"},
        {"@type": "MedicalCondition", "name": "Padel elbow"},
        {"@type": "MedicalCondition", "name": "Post-COVID syndrome"}
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
      "@type": "Sport",
      "name": "Padel"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Physiotherapy Services in Dubai",
      "provider": {"@id": "https://vedaracare.ae/physiotherapy-dubai/#physiotherapy"},
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "serviceType": "Physiotherapy and Physical Therapy",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Physiotherapy Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Initial Physiotherapy Assessment",
            "priceCurrency": "AED",
            "price": "[X]",
            "description": "60-minute comprehensive assessment with DPT-qualified physiotherapist at JVC Dubai clinic"
          },
          {
            "@type": "Offer",
            "name": "Single Physiotherapy Session",
            "priceCurrency": "AED",
            "price": "[X]",
            "description": "45-60 minute treatment session"
          },
          {
            "@type": "Offer",
            "name": "12-Session Treatment Package",
            "priceCurrency": "AED",
            "price": "[X]",
            "description": "Discounted package for chronic conditions and post-surgical rehab"
          },
          {
            "@type": "Offer",
            "name": "Home Physiotherapy Session",
            "priceCurrency": "AED",
            "price": "[X]",
            "description": "Physiotherapy delivered at patient home across Dubai"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": "https://vedaracare.ae/physiotherapy-dubai/#webpage",
      "name": "Physiotherapy in Dubai",
      "url": "https://vedaracare.ae/physiotherapy-dubai/",
      "about": {"@id": "https://vedaracare.ae/physiotherapy-dubai/#physiotherapy"},
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
      "primaryImageOfPage": "https://vedaracare.ae/images/physiotherapy-dubai-hero.webp"
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Physiotherapy in Dubai — A Complete Service Guide",
      "image": "https://vedaracare.ae/images/physiotherapy-dubai-hero.webp",
      "datePublished": "2026-06-01",
      "dateModified": currentDate,
      "author": {
        "@type": "Physician",
        "name": "[Lead Physiotherapist]"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic",
        "logo": {"@type": "ImageObject", "url": "https://vedaracare.ae/logo.png"}
      },
      "mainEntityOfPage": "https://vedaracare.ae/physiotherapy-dubai/"
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
        {"@type": "ListItem", "position": 2, "name": "Physiotherapy in Dubai", "item": "https://vedaracare.ae/physiotherapy-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": physiotherapyFaqs.faqs.map((faq) => ({
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
      "@type": "EducationalCredential",
      "name": "Doctor of Physical Therapy (DPT)",
      "alternateName": ["DPT"]
    }
  ];
  
  return (
    <>
      <Head>
        <title>Physiotherapy in Dubai | DPT-Qualified | DHA-Licensed | Vedara Care JVC</title>
        <meta name="description" content="Physiotherapy in Dubai at our DHA-licensed JVC clinic. DPT-qualified physiotherapists, 7 specialisations, transparent pricing, insurance direct-billing. Patients from across Dubai — JVC, Marina, Palm Jumeirah, Mirdif, Downtown. Same-day appointments available." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Physiotherapy in Dubai — DPT-Qualified at our JVC Clinic | Vedara Care" />
        <meta property="og:description" content="Comprehensive DHA-licensed physiotherapy at our Jumeirah Village Circle clinic — serving patients from across Dubai. Seven specialisations, DPT-qualified team, transparent pricing, insurance direct-billing with seven major insurers." />
        <meta property="og:image" content="https://vedaracare.ae/images/physiotherapy-dubai-hero.webp" />
        <meta property="og:url" content="https://vedaracare.ae/physiotherapy-dubai/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Canonical & Language Tags */}
        <link rel="canonical" href="https://vedaracare.ae/physiotherapy-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/physiotherapy-dubai/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/physiotherapy-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/physiotherapy-dubai/" />



        {/* Schema Markup */}
        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <div className="physiotherapy-content">
        {/* Section 1 - Hero */}
        <AyurvedaHero {...physiotherapyHero} />
        
        {/* Section 2 - Intro */}
        <AyurvedaIntro {...physiotherapyIntro} />
        
        {/* Section 3 - Context & Mechanism */}
        <PhysiotherapyMechanism {...physiotherapyMechanism} />
        
        {/* Section 4 - Five Pillars/Benefits (ArthritisPillars reuse) */}
        <ArthritisPillars 
          {...physiotherapyBenefits} 
          pillars={physiotherapyBenefits.pillars}
          bgColor="bg-white"
          cardBg="bg-[#F5F1E8]"
          footer={physiotherapyBenefits.footer}
        />
        
        {/* Section 5 - Specialisations */}
        <PhysiotherapySpecializations {...physiotherapySpecializations} />
        
       
      
          {/* Section 6 - Conditions */}
        <PhysiotherapyConditions {...physiotherapyConditions} />
       
        <PhysiotherapyInsurance {...physiotherapyInsurance} />
         <PricingSection2 />
        <TreatmentReviews {...physiotherapyReviews} bgColor='bg-[#1A4D2E]' />
         <PhysiotherapyTwoImage {...physiotherapyTwoImage} />
               <FAQ {...physiotherapyFaqs} />
        
      
        <TreatmentLocationCustom {...physiotherapyLocationCustom} />
        
        
        <FinalCTA {...physiotherapyFinalCTA} />
        
      
        <RelatedPages {...physiotherapyRelatedPages} />
      </div>
    </>
  );
};

export default PhysiotherapyDubai;
