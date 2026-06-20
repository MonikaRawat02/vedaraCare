import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import { SciaticaTreatment } from '../../components/ayurveda/SciaticaSections';
import PostnatalComponents from '../../components/ayurveda/PostnatalComponents';
import ManualTherapySession, { HijamaSection, ManualTherapyPricing } from '../../components/ayurveda/ManualTherapySession';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';

import {
  cuppingTherapyHero,
  cuppingTherapyIntro,
  cuppingTherapyWhatIs,
  cuppingTherapyConditions,
  cuppingTherapySession,
  cuppingTherapyHijama,
  cuppingTherapyTeam,
  cuppingTherapyPricing,
  cuppingTherapyReviews,
  cuppingTherapyFaqs,
  cuppingTherapyLocation,
  cuppingTherapyFinalCTA,
  cuppingTherapyRelatedPages
} from '../../data/cuppingTherapyDubaiData';

const CuppingTherapyDubai = () => {
  const currentDate = new Date().toISOString();

  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "HealthAndBeautyBusiness"],
      "@id": "https://vedaracare.ae/treatments/cupping-therapy-dubai/#cuppingtherapy",
      "name": "Vedara Care Cupping Therapy Department",
      "alternateName": ["Cupping Therapy Dubai", "Hijama Dubai", "Vedara Care Cupping"],
      "url": "https://vedaracare.ae/treatments/cupping-therapy-dubai/",
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "DHA-licensed cupping therapy at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. DPT-qualified practitioners providing dry cupping, massage cupping, and Hijama where appropriate.",
      "telephone": "+971 4 XXX XXXX",
      "priceRange": "AED 250 - AED 1,200",
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
      "medicalSpecialty": ["Complementary Therapy"],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Dry Cupping" },
        { "@type": "MedicalProcedure", "name": "Massage Cupping" },
        { "@type": "MedicalProcedure", "name": "Hijama" },
        { "@type": "MedicalProcedure", "name": "Dynamic Cupping" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "400",
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
        {"@type": "ListItem", "position": 3, "name": "Cupping Therapy Dubai", "item": "https://vedaracare.ae/treatments/cupping-therapy-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": cuppingTherapyFaqs.faqs.map(faq => ({
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
        <title>Cupping Therapy Dubai | Dry Cupping, Hijama | Vedara Care</title>
        <meta name="description" content="Specialist cupping therapy in Dubai at our Jumeirah Village Circle clinic — dry cupping, massage cupping, Hijama. DHA-licensed practitioners. Walking distance from Circle Mall." />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vedaracare.ae/treatments/cupping-therapy-dubai/" />
        <meta property="og:title" content="Cupping Therapy in Dubai — Vedara Care" />
        <meta property="og:description" content="Specialist cupping therapy at our JVC clinic — dry cupping, massage cupping, Hijama." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/cupping-therapy-dubai.jpg" />
        <meta property="og:locale" content="en_AE" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://vedaracare.ae/treatments/cupping-therapy-dubai/" />
        <meta name="twitter:title" content="Cupping Therapy in Dubai — Vedara Care" />
        <meta name="twitter:description" content="Specialist cupping therapy at our JVC clinic — dry cupping, massage cupping, Hijama." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/cupping-therapy-dubai.jpg" />

        <link rel="canonical" href="https://vedaracare.ae/treatments/cupping-therapy-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/treatments/cupping-therapy-dubai/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/treatments/cupping-therapy-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/treatments/cupping-therapy-dubai/" />

        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <main>
        <AyurvedaHero {...cuppingTherapyHero} />
        <AyurvedaIntro {...cuppingTherapyIntro} />
        <SciaticaTreatment 
          data={cuppingTherapyWhatIs.data} 
          bgColor={cuppingTherapyWhatIs.bgColor}
          showBorderLeft={false}
          rightContentStyle="simpleBox"
        />
        <PostnatalComponents 
          bgColor={cuppingTherapyConditions.bgColor}
          cardBg={cuppingTherapyConditions.cardBg}
          label={cuppingTherapyConditions.label}
          title={cuppingTherapyConditions.title}
          description={cuppingTherapyConditions.description}
          items={cuppingTherapyConditions.items}
          footerNote={cuppingTherapyConditions.footerNote}
          row1Columns="lg:grid-cols-3"
          row2Columns="lg:grid-cols-3"
          row1Count={3}
          techniquesLabel="CUPPING TYPE TYPICALLY USED:"
        />
        <ManualTherapySession 
          bgColor={cuppingTherapySession.bgColor}
          label={cuppingTherapySession.label}
          title={cuppingTherapySession.title}
          subtitle={cuppingTherapySession.subtitle}
          sections={cuppingTherapySession.sections}
          safetyCard={cuppingTherapySession.safetyCard}
        />
        <HijamaSection 
          bgColor={cuppingTherapyHijama.bgColor}
          label={cuppingTherapyHijama.label}
          title={cuppingTherapyHijama.title}
          subtitle={cuppingTherapyHijama.subtitle}
          content={cuppingTherapyHijama.content}
          rightSide={cuppingTherapyHijama.rightSide}
        />
        <TreatmentReviews {...cuppingTherapyReviews} />
        <PhysiotherapyTeam 
          label={cuppingTherapyTeam.label}
          title={cuppingTherapyTeam.title}
          description={cuppingTherapyTeam.description}
          members={cuppingTherapyTeam.members}
          bgColor={cuppingTherapyTeam.bgColor}
          gridColumns="lg:grid-cols-3"
        />
        <ManualTherapyPricing {...cuppingTherapyPricing} />
        <FAQ {...cuppingTherapyFaqs} />
        <TreatmentLocation {...cuppingTherapyLocation} />
        <FinalCTA {...cuppingTherapyFinalCTA} />
        <RelatedPages {...cuppingTherapyRelatedPages} />
      </main>
    </>
  );
};

export default CuppingTherapyDubai;
