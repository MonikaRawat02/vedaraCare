import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import { SciaticaTreatment } from '../../components/ayurveda/SciaticaSections';
import PostnatalComponents from '../../components/ayurveda/PostnatalComponents';
import ManualTherapySession, { ManualTherapyTechniques, ManualTherapyPricing } from '../../components/ayurveda/ManualTherapySession';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';

import {
  manualTherapyHero,
  manualTherapyIntro,
  manualTherapyWhatIs,
  manualTherapyConditions,
  manualTherapySession,
  manualTherapyTeam,
  manualTherapyReviews,
  manualTherapyFaqs,
  manualTherapyLocation,
  manualTherapyFinalCTA,
  manualTherapyRelatedPages,
  manualTherapyTechniques,
  manualTherapyPricing
} from '../../data/manualTherapyDubaiData';

const ManualTherapyDubai = () => {
  const currentDate = new Date().toISOString();

  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy"],
      "@id": "https://vedaracare.ae/treatments/manual-therapy-dubai/#manualtherapy",
      "name": "Vedara Care Manual Therapy Department",
      "alternateName": ["Manual Therapy Dubai", "Vedara Care Manual Therapy"],
      "url": "https://vedaracare.ae/treatments/manual-therapy-dubai/",
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "DHA-licensed manual therapy at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. DPT-qualified physiotherapists providing Maitland, Mulligan, McKenzie, Kaltenborn, myofascial release, neural mobilisation, and spinal manipulation where appropriate.",
      "telephone": "+971 4 XXX XXXX",
      "priceRange": "AED 380 - AED 2,000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Cluster X, Jumeirah Village Circle",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.0683",
        "longitude": "55.2072"
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
        {"@type": "Place", "name": "Al Barsha South"},
        {"@type": "Place", "name": "Sports City"},
        {"@type": "Place", "name": "Motor City"},
        {"@type": "Place", "name": "Dubai Hills"},
        {"@type": "City", "name": "Dubai"}
      ],
      "medicalSpecialty": ["PhysicalTherapy"],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Joint Mobilisation" },
        { "@type": "MedicalProcedure", "name": "Mulligan Technique" },
        { "@type": "MedicalProcedure", "name": "McKenzie Method" },
        { "@type": "MedicalProcedure", "name": "Myofascial Release" },
        { "@type": "MedicalProcedure", "name": "Neural Mobilisation" },
        { "@type": "MedicalProcedure", "name": "Spinal Manipulation" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://vedaracare.ae/treatments"},
        {"@type": "ListItem", "position": 3, "name": "Manual Therapy Dubai", "item": "https://vedaracare.ae/treatments/manual-therapy-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": manualTherapyFaqs.faqs.map(faq => ({
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
      "@type": "Organization",
      "@id": "https://vedaracare.ae/#organization",
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": "https://vedaracare.ae/logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Manual Therapy Dubai | Hands-on Physiotherapy | Vedara Care</title>
        <meta name="description" content="Specialist manual therapy in Dubai at our Jumeirah Village Circle clinic — Maitland, Mulligan, McKenzie, Kaltenborn, myofascial release, neural mobilisation. DPT-qualified physiotherapists. Walking distance from Circle Mall." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vedaracare.ae/treatments/manual-therapy-dubai/" />
        <meta property="og:title" content="Manual Therapy in Dubai — Vedara Care" />
        <meta property="og:description" content="Specialist manual therapy at our JVC clinic — hands-on physiotherapy, not chiropractic, not massage." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/manual-therapy-dubai.jpg" />
        <meta property="og:locale" content="en_AE" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://vedaracare.ae/treatments/manual-therapy-dubai/" />
        <meta name="twitter:title" content="Manual Therapy in Dubai — Vedara Care" />
        <meta name="twitter:description" content="Specialist manual therapy at our JVC clinic — hands-on physiotherapy." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/manual-therapy-dubai.jpg" />

        <link rel="canonical" href="https://vedaracare.ae/treatments/manual-therapy-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/treatments/manual-therapy-dubai/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/treatments/manual-therapy-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/treatments/manual-therapy-dubai/" />

        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <main>
        <AyurvedaHero {...manualTherapyHero} />
        <AyurvedaIntro {...manualTherapyIntro} />
        <SciaticaTreatment 
          data={manualTherapyWhatIs.data} 
          bgColor={manualTherapyWhatIs.bgColor}
          showBorderLeft={false}
          rightContentStyle="tagsBox"
        />
         <PostnatalComponents 
          bgColor={manualTherapyConditions.bgColor}
          cardBg={manualTherapyConditions.cardBg}
          label={manualTherapyConditions.label}
          title={manualTherapyConditions.title}
          description={manualTherapyConditions.description}
          items={manualTherapyConditions.items}
          footerNote={manualTherapyConditions.footerNote}
          row1Columns="lg:grid-cols-4"
          row2Columns="lg:grid-cols-4"
        />
      
        <ManualTherapySession 
          bgColor={manualTherapySession.bgColor}
          label={manualTherapySession.label}
          title={manualTherapySession.title}
          subtitle={manualTherapySession.subtitle}
          sections={manualTherapySession.sections}
          safetyCard={manualTherapySession.safetyCard}
        />
        <ManualTherapyTechniques 
          bgColor={manualTherapyTechniques.bgColor}
          label={manualTherapyTechniques.label}
          title={manualTherapyTechniques.title}
          subtitle={manualTherapyTechniques.subtitle}
          techniques={manualTherapyTechniques.techniques}
          footerNote={manualTherapyTechniques.footerNote}
        />
        <PhysiotherapyTeam 
          label={manualTherapyTeam.label}
          title={manualTherapyTeam.title}
          description={manualTherapyTeam.description}
          members={manualTherapyTeam.members}
          bgColor={manualTherapyTeam.bgColor}
        />
        <TreatmentReviews {...manualTherapyReviews} />
        <ManualTherapyPricing 
          bgColor={manualTherapyPricing.bgColor}
          label={manualTherapyPricing.label}
          title={manualTherapyPricing.title}
          pricingItems={manualTherapyPricing.pricingItems}
          insuranceNote={manualTherapyPricing.insuranceNote}
          insurers={manualTherapyPricing.insurers}
        />
        <FAQ {...manualTherapyFaqs} />
        <TreatmentLocation {...manualTherapyLocation} />
        <FinalCTA {...manualTherapyFinalCTA} />
        <RelatedPages {...manualTherapyRelatedPages} />
      </main>
    </>
  );
};

export default ManualTherapyDubai;
