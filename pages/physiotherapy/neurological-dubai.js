import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import PhysiotherapyMechanism from '../../components/ayurveda/PhysiotherapyMechanism';
import ArthritisTypes from '../../components/ayurveda/ArthritisTypes';
import TreatmentProtocol from '../../components/ayurveda/Protocols';
import {
  HomePhysiotherapy,
  PostSurgeryTeam,
  InsuranceCoverage,
} from '../../components/ayurveda/PostSurgeryComponents';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  neurologicalDubaiHero,
  neurologicalDubaiIntro,
  neurologicalDubaiMechanism,
  neurologicalConditionsData,
  neurologicalPhasesData,
  neurologicalHomePhysiotherapyData,
  neurologicalDubaiReviews,
  neurologicalTeamData,
  neurologicalInsuranceCoverageData,
  neurologicalDubaiFAQData,
  neurologicalDubaiFinalCTA,
  neurologicalDubaiRelatedPages
} from '../../data/neurologicalDubaiData';

const NeurologicalDubai = () => {
  const currentDate = new Date().toISOString();
  
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy"],
      "@id": "https://vedaracare.ae/physiotherapy/neurological-dubai/#neurological",
      "name": "Vedara Care Neurological Physiotherapy",
      "alternateName": ["Vedara Neurological Rehabilitation Dubai", "Vedara Neuro Physio JVC"],
      "url": "https://vedaracare.ae/physiotherapy/neurological-dubai/",
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "DHA-licensed neurological physiotherapy at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. DPT-qualified neurological rehabilitation specialists treating post-stroke recovery, multiple sclerosis, Parkinson's disease, traumatic brain injury, peripheral neuropathy, vestibular disorders, and other neurological conditions with evidence-based protocols. Home physiotherapy available across Dubai.",
      "telephone": "+971 4 XXX XXXX",
      "priceRange": "AED 350 - AED 15,000",
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
          "dayOfWeek": ["Sunday"],
          "opens": "10:00",
          "closes": "16:00"
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
        "Neurological Rehabilitation",
        "Physical Therapy",
        "Physiotherapy",
        "Vestibular Rehabilitation"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Post-Stroke Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Multiple Sclerosis Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Parkinson's Disease Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Traumatic Brain Injury Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Peripheral Neuropathy Treatment"},
        {"@type": "MedicalProcedure", "name": "Vestibular Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Spinal Cord Injury Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Home Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Functional Electrical Stimulation"}
      ],
      "medicalCondition": [
        {"@type": "MedicalCondition", "name": "Stroke"},
        {"@type": "MedicalCondition", "name": "Multiple Sclerosis"},
        {"@type": "MedicalCondition", "name": "Parkinson's Disease"},
        {"@type": "MedicalCondition", "name": "Traumatic Brain Injury"},
        {"@type": "MedicalCondition", "name": "Peripheral Neuropathy"},
        {"@type": "MedicalCondition", "name": "Vertigo"},
        {"@type": "MedicalCondition", "name": "BPPV"}
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
        "ratingValue": "4.8",
        "reviewCount": "85",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Neurological Physiotherapy Services in Dubai",
      "provider": {"@id": "https://vedaracare.ae/physiotherapy/neurological-dubai/#neurological"},
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "serviceType": "Neurological Rehabilitation Physiotherapy",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Neurological Rehabilitation Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Neurological Assessment (Clinic)",
            "priceCurrency": "AED",
            "price": "350",
            "description": "60-minute comprehensive neurological assessment with DPT-qualified specialist"
          },
          {
            "@type": "Offer",
            "name": "Neurological Assessment (Home)",
            "priceCurrency": "AED",
            "price": "450",
            "description": "60-minute home assessment for patients with mobility limitations"
          },
          {
            "@type": "Offer",
            "name": "Post-Stroke Rehabilitation Programme",
            "priceCurrency": "AED",
            "price": "8500",
            "description": "Structured rehabilitation programme over 3-6 months with task-specific training"
          },
          {
            "@type": "Offer",
            "name": "Home Physiotherapy Session",
            "priceCurrency": "AED",
            "price": "450",
            "description": "Home-delivered neurological physiotherapy session across Dubai"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Physiotherapy in Dubai", "item": "https://vedaracare.ae/physiotherapy-dubai/"},
        {"@type": "ListItem", "position": 3, "name": "Neurological Physiotherapy", "item": "https://vedaracare.ae/physiotherapy/neurological-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": neurologicalDubaiFAQData.faqs.map(faq => ({
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
      "headline": "Neurological Physiotherapy in Dubai — Complete Rehabilitation Guide",
      "image": "https://vedaracare.ae/images/neurological-physiotherapy-dubai-hero.jpg",
      "datePublished": "2026-06-05",
      "dateModified": currentDate,
      "author": {
        "@type": "Physician",
        "name": "Dr. James Okafor"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic",
        "logo": {"@type": "ImageObject", "url": "https://vedaracare.ae/logo.png"}
      },
      "mainEntityOfPage": "https://vedaracare.ae/physiotherapy/neurological-dubai/"
    }
  ];

  return (
    <>
      <Head>
        <title>Neurological Physiotherapy in Dubai | Post-Stroke, MS, Parkinson's | Vedara JVC</title>
        <meta name="description" content="DHA-licensed neurological physiotherapy at our JVC Dubai clinic. Specialised rehabilitation for post-stroke recovery, multiple sclerosis, Parkinson's disease, TBI, neuropathy, vestibular disorders. DPT-qualified neurological specialists. Home physiotherapy available." />
        <link rel="canonical" href="https://vedaracare.ae/physiotherapy/neurological-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/physiotherapy/neurological-dubai/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/physiotherapy/neurological-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/physiotherapy/neurological-dubai/" />
        <meta property="og:title" content="Neurological Physiotherapy in Dubai — Post-Stroke, MS, Parkinson's | Vedara JVC" />
        <meta property="og:description" content="DHA-licensed neurological rehabilitation at our Jumeirah Village Circle clinic. Specialised protocols for post-stroke recovery, multiple sclerosis, Parkinson's disease, TBI, neuropathy, and vestibular disorders. Home physiotherapy across Dubai." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/neurological-physiotherapy-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/physiotherapy/neurological-dubai/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>

      <main>
        {/* Hero Section */}
        <AyurvedaHero {...neurologicalDubaiHero} />
        
        {/* Intro Section */}
        <AyurvedaIntro {...neurologicalDubaiIntro} />


        {/* Condition-Specific Protocols - Using ArthritisTypes Component */}
        <ArthritisTypes 
          {...neurologicalConditionsData}
          bgColor="bg-[#FAF8F3]"
          cardBg="bg-white"
        />

         {/* Mechanism Section */}
         <PhysiotherapyMechanism {...neurologicalDubaiMechanism} />

        {/* Treatment Phases - Using Protocols Component */}
        <TreatmentProtocol {...neurologicalPhasesData} />

        {/* Home Physiotherapy - Using PostSurgeryComponents HomePhysiotherapy */}
        <HomePhysiotherapy data={neurologicalHomePhysiotherapyData} />
         {/* Insurance Coverage */}
         <InsuranceCoverage data={neurologicalInsuranceCoverageData} />

        {/* Patient Reviews */}
        <TreatmentReviews {...neurologicalDubaiReviews} />

        {/* The Team */}
        <PostSurgeryTeam data={neurologicalTeamData} />

        {/* FAQ Section */}
        <FAQ {...neurologicalDubaiFAQData} />

        {/* Final CTA */}
        <FinalCTA {...neurologicalDubaiFinalCTA} />

        {/* Related Pages */}
        <RelatedPages {...neurologicalDubaiRelatedPages} />
      </main>
    </>
  );
};

export default NeurologicalDubai;
