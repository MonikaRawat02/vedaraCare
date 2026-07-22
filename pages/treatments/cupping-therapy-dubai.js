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
      "@type": ["MedicalBusiness", "LocalBusiness"],
      "@id": "https://vedaracare.ae/treatments/cupping-therapy-dubai/#cupping",
      "name": "Vedara Care Cupping Therapy",
      "alternateName": ["Vedara Cupping Dubai", "Vedara Hijama JVC"],
      "url": "https://vedaracare.ae/treatments/cupping-therapy-dubai/",
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "Specialist cupping therapy at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. Dry cupping, massage cupping, and Hijama (wet cupping) delivered by DHA-licensed practitioners. Sterile single-use equipment for Hijama. Integrated with physiotherapy for musculoskeletal applications. Cultural and religious respect for Hijama as Islamic Sunnah practice.",
      "telephone": "+971 55 586 7466",
      "priceRange": "AED 200 - AED 5,000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4, Jumeirah Village Circle (JVC)",
        "addressLocality": "Jumeirah Village Circle",
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
        "Cupping Therapy",
        "Hijama",
        "Traditional Therapy",
        "Physiotherapy Modalities"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Dry Cupping"},
        {"@type": "MedicalProcedure", "name": "Massage Cupping"},
        {"@type": "MedicalProcedure", "name": "Hijama"},
        {"@type": "MedicalProcedure", "name": "Sports Cupping"},
        {"@type": "MedicalProcedure", "name": "Trigger Point Cupping"}
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Dubai Health Authority"
      },
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
      "@type": "MedicalProcedure",
      "name": "Cupping Therapy",
      "alternateName": ["Cupping", "Hijama", "Wet Cupping", "Dry Cupping", "Massage Cupping"],
      "description": "Therapy involving application of cups to the skin to create localised suction. Multiple types: dry cupping (suction only), massage cupping (dynamic cup movement with oil), and Hijama (wet cupping with controlled small incisions, with Islamic Sunnah significance).",
      "procedureType": "Therapeutic",
      "bodyLocation": ["Back", "Shoulders", "Neck", "Limbs"],
      "preparation": "Initial assessment and contraindication screening required.",
      "followup": "Visible marks 1-2 weeks normal. Mild soreness 24-48 hours possible. Hijama requires specific aftercare for incision sites."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Cupping Therapy Services in Dubai",
      "provider": {"@id": "https://vedaracare.ae/treatments/cupping-therapy-dubai/#cupping"},
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "serviceType": "Cupping Therapy and Hijama",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Cupping Therapy Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Dry Cupping Session",
            "priceCurrency": "AED",
            "price": "250",
            "description": "30-45 minute dry cupping session"
          },
          {
            "@type": "Offer",
            "name": "Massage Cupping Session",
            "priceCurrency": "AED",
            "price": "300",
            "description": "45-60 minute dynamic cupping with oil"
          },
          {
            "@type": "Offer",
            "name": "Hijama Session",
            "priceCurrency": "AED",
            "price": "350",
            "description": "Wet cupping with sterile single-use equipment"
          },
          {
            "@type": "Offer",
            "name": "Sports Recovery Cupping",
            "priceCurrency": "AED",
            "price": "300",
            "description": "Athletic recovery cupping session"
          },
          {
            "@type": "Offer",
            "name": "Chronic Pain Cupping Programme",
            "priceCurrency": "AED",
            "price": "1,800",
            "description": "6-session structured programme"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://vedaracare.ae/treatments/"},
        {"@type": "ListItem", "position": 3, "name": "Cupping Therapy in Dubai", "item": "https://vedaracare.ae/treatments/cupping-therapy-dubai/"}
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
      "@type": "Article",
      "headline": "Cupping Therapy in Dubai — Complete Guide to Dry Cupping, Massage Cupping, and Hijama",
      "image": "https://vedaracare.ae/og-images/cupping-therapy-dubai.jpg",
      "datePublished": currentDate,
      "dateModified": currentDate,
      "author": {
        "@type": "Person",
        "name": "Vedara Care Cupping Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic"
      },
      "about": [
        {"@type": "MedicalProcedure", "name": "Cupping Therapy"},
        {"@type": "MedicalProcedure", "name": "Hijama"}
      ],
      "mainEntityOfPage": "https://vedaracare.ae/treatments/cupping-therapy-dubai/"
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
        <title>Cupping Therapy in Dubai | Dry Cupping & Hijama | Vedara JVC</title>
        <meta name="description" content="Specialist cupping therapy at our JVC clinic, Dubai. Dry cupping, massage cupping, and Hijama (wet cupping). DHA-licensed practitioners, sterile single-use equipment. For chronic back pain, sports recovery, muscle tension. Walking distance from Circle Mall." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:title" content="Cupping Therapy in Dubai — Dry Cupping, Massage Cupping, Hijama | Vedara JVC" />
        <meta property="og:description" content="DHA-licensed cupping therapy at our Jumeirah Village Circle clinic. Dry cupping for chronic back pain and sports recovery, massage cupping for broader tension relief, Hijama (wet cupping) with Islamic Sunnah respect. Sterile single-use equipment. Honest evidence positioning. Cultural and religious respect." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/cupping-therapy-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/treatments/cupping-therapy-dubai/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />

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
