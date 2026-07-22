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
import CareSettings, { StrokePhases, CoordinatedCare, TransparentPricing } from '../../components/ayurveda/CareSettings';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import {
  strokeRehabHero,
  strokeRehabIntro,
  strokeRehabRecovery,
  strokeRehabCareSettings,
  strokeRehabTreatment,
  strokeRehabTypes,
  strokeRehabPhases,
  strokeRehabCoordinatedCare,
  strokeRehabPricing,
  strokeRehabReviews,
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
    // Schema 1 — MedicalBusiness with Stroke Rehabilitation Specialty
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy"],
      "@id": "https://vedaracare.ae/conditions/stroke-rehab-dubai/#stroke-rehab",
      "name": "Vedara Care Post-Stroke Rehabilitation",
      "alternateName": ["Vedara Stroke Rehab Dubai", "Vedara Care Neurorehabilitation JVC"],
      "url": "https://vedaracare.ae/conditions/stroke-rehab-dubai/",
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "Specialist post-stroke rehabilitation at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. DPT-qualified neurorehabilitation specialists delivering evidence-based protocols including constraint-induced movement therapy, mirror therapy, functional electrical stimulation, and task-specific training. Clinic-based care at JVC and home physiotherapy across Dubai. Hospital discharge coordination.",
      "telephone": "+971 55 586 7466",
      "priceRange": "AED 400 - AED 50,000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4, Jumeirah Village Circle",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.068346",
        "longitude": "55.2072235"
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
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "Jumeirah Village Circle" },
        { "@type": "Place", "name": "Jumeirah Village Triangle" },
        { "@type": "Place", "name": "Al Barsha South" },
        { "@type": "Place", "name": "Dubai Sports City" },
        { "@type": "Place", "name": "Motor City" },
        { "@type": "Place", "name": "Arjan" },
        { "@type": "Place", "name": "Dubai Hills Estate" },
        { "@type": "Place", "name": "Dubai Marina" },
        { "@type": "Place", "name": "Downtown Dubai" },
        { "@type": "Place", "name": "Palm Jumeirah" },
        { "@type": "Place", "name": "Mirdif" }
      ],
      "medicalSpecialty": [
        "Physiotherapy",
        "Neurological Physiotherapy",
        "Stroke Rehabilitation",
        "Neurorehabilitation"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Post-Stroke Physiotherapy" },
        { "@type": "MedicalProcedure", "name": "Constraint-Induced Movement Therapy" },
        { "@type": "MedicalProcedure", "name": "Mirror Therapy" },
        { "@type": "MedicalProcedure", "name": "Functional Electrical Stimulation" },
        { "@type": "MedicalProcedure", "name": "Task-Specific Training" },
        { "@type": "MedicalProcedure", "name": "High-Intensity Gait Training" },
        { "@type": "MedicalProcedure", "name": "Spasticity Management Coordination" },
        { "@type": "MedicalProcedure", "name": "Post-Stroke Home Physiotherapy" },
        { "@type": "MedicalProcedure", "name": "Hospital Discharge Coordination" },
        { "@type": "MedicalProcedure", "name": "Family Caregiver Education" }
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
    // Schema 2 — MedicalCondition Entities
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "name": "Stroke",
          "alternateName": ["Cerebrovascular Accident", "CVA"],
          "code": { "@type": "MedicalCode", "code": "I64", "codingSystem": "ICD-10" },
          "possibleTreatment": [
            { "@type": "MedicalProcedure", "name": "Constraint-Induced Movement Therapy" },
            { "@type": "MedicalProcedure", "name": "Mirror Therapy" },
            { "@type": "MedicalProcedure", "name": "Functional Electrical Stimulation" },
            { "@type": "MedicalProcedure", "name": "Task-Specific Training" }
          ]
        },
        {
          "@type": "MedicalCondition",
          "name": "Ischaemic Stroke",
          "code": { "@type": "MedicalCode", "code": "I63", "codingSystem": "ICD-10" }
        },
        {
          "@type": "MedicalCondition",
          "name": "Haemorrhagic Stroke",
          "code": { "@type": "MedicalCode", "code": "I61", "codingSystem": "ICD-10" }
        },
        {
          "@type": "MedicalCondition",
          "name": "Brainstem Stroke"
        },
        {
          "@type": "MedicalCondition",
          "name": "Cerebellar Stroke"
        },
        {
          "@type": "MedicalCondition",
          "name": "Transient Ischaemic Attack",
          "alternateName": ["TIA", "Mini-Stroke"],
          "code": { "@type": "MedicalCode", "code": "G45.9", "codingSystem": "ICD-10" }
        },
        {
          "@type": "MedicalCondition",
          "name": "Post-Stroke Hemiparesis",
          "code": { "@type": "MedicalCode", "code": "G81", "codingSystem": "ICD-10" }
        }
      ]
    },
    // Schema 3 — Service with OfferCatalog
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Post-Stroke Rehabilitation Services in Dubai",
      "provider": { "@id": "https://vedaracare.ae/conditions/stroke-rehab-dubai/#stroke-rehab" },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "United Arab Emirates" }
      ],
      "serviceType": "Post-Stroke Rehabilitation and Neurorehabilitation",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Post-Stroke Rehabilitation Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Initial Stroke Rehabilitation Assessment",
            "priceCurrency": "AED",
            "price": "[X]",
            "description": "90-minute comprehensive assessment with DPT-qualified neurorehabilitation specialist"
          },
          {
            "@type": "Offer",
            "name": "Home Physiotherapy Session",
            "priceCurrency": "AED",
            "price": "[X]",
            "description": "60-minute home physiotherapy session for stroke patients across Dubai"
          },
          {
            "@type": "Offer",
            "name": "Constraint-Induced Movement Therapy Intensive",
            "priceCurrency": "AED",
            "price": "[X]",
            "description": "2-week CIMT intensive programme for upper limb recovery"
          },
          {
            "@type": "Offer",
            "name": "Acute Phase Home Programme",
            "priceCurrency": "AED",
            "price": "[X]",
            "description": "3-month intensive home programme for early stroke recovery"
          },
          {
            "@type": "Offer",
            "name": "Subacute Phase Combined Programme",
            "priceCurrency": "AED",
            "price": "[X]",
            "description": "3-6 month combined home and clinic programme"
          }
        ]
      }
    },
    // Schema 4 — BreadcrumbList
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/" },
        { "@type": "ListItem", "position": 3, "name": "Post-Stroke Rehabilitation in Dubai", "item": "https://vedaracare.ae/conditions/stroke-rehab-dubai/" }
      ]
    },
    // Schema 5 — FAQPage (All 20 Q&As)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": strokeRehabFaqs.faqs.map(faq => {
        // Use exactly the documentation-specified answers for these two questions
        if (faq.question === "How soon after a stroke can rehabilitation begin?") {
          return {
            "@type": "Question",
            "name": "How soon after a stroke can rehabilitation begin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rehabilitation begins in hospital, typically within 24-72 hours of stroke when medical condition is stable. Post-hospital rehabilitation at home or clinic typically starts within 48-72 hours of hospital discharge. The first 6 months post-stroke is when most recovery happens, so starting appropriate rehabilitation promptly substantially improves outcomes."
            }
          };
        }
        if (faq.question === "How long does stroke recovery take?") {
          return {
            "@type": "Question",
            "name": "How long does stroke recovery take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Highly variable. Most patients experience the steepest recovery in the first 3 months. Substantial recovery typically continues through the first 6 months. Continued improvement happens beyond 6 months for many patients with appropriate intervention. Some patients see meaningful improvements years after stroke with specific intensive interventions."
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
    // Schema 6 — Article
    {
      "@context": "https://schema.org",
      "@type": "MedicalScholarlyArticle",
      "headline": "Post-Stroke Rehabilitation in Dubai — Evidence-Based Treatment Guide",
      "image": "https://vedaracare.ae/images/stroke-rehab-dubai-hero.jpg",
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
      "about": [
        { "@type": "MedicalCondition", "name": "Stroke" },
        { "@type": "MedicalCondition", "name": "Post-Stroke Hemiparesis" }
      ],
      "mainEntityOfPage": "https://vedaracare.ae/conditions/stroke-rehab-dubai/"
    },
    // Schema 7 — Physiotherapist (for each team member)
    ...strokeRehabTeam.team.map(member => ({
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": member.name,
      "url": `https://vedaracare.ae/physiotherapists/${member.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}/`,
      "image": member.image || "",
      "medicalSpecialty": ["Physiotherapy", "Neurological Physiotherapy", "Stroke Rehabilitation"],
      "hasCredential": ["DPT", "Neurorehabilitation Trained", "DHA-Licensed"],
      "worksFor": { "@id": "https://vedaracare.ae/#organization" }
    }))
    // Schema 8 — Organization is referenced via @id site-wide
  ]) : '';

  return (
    <>
      <Head>
        <title>Post-Stroke Rehabilitation in Dubai | Evidence-Based Care | Vedara JVC</title>
        <meta name="description" content="Specialist post-stroke rehabilitation at our JVC clinic and across Dubai. DPT-qualified neurorehabilitation specialists with CIMT, mirror therapy, FES expertise. Hospital discharge coordination. Home physiotherapy available. Family-centred care across languages." />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta property="og:title" content="Post-Stroke Rehabilitation in Dubai — Evidence-Based Neurorehabilitation | Vedara JVC" />
        <meta property="og:description" content="DPT-qualified neurorehabilitation specialists at our Jumeirah Village Circle clinic and across Dubai. Constraint-induced movement therapy, mirror therapy, functional electrical stimulation, task-specific training. Hospital discharge coordination. Home physiotherapy for patients who cannot travel. Family-centred care." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/stroke-rehab-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/stroke-rehab-dubai/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />

        <meta name="twitter:card" content="summary_large_image" />

        <link rel="canonical" href="https://vedaracare.ae/conditions/stroke-rehab-dubai/" />
        <link rel="alternate" href="https://vedaracare.ae/conditions/stroke-rehab-dubai/" hreflang="en-AE" />
        <link rel="alternate" href="https://vedaracare.ae/ar/conditions/stroke-rehab-dubai/" hreflang="ar-AE" />
        <link rel="alternate" href="https://vedaracare.ae/conditions/stroke-rehab-dubai/" hreflang="x-default" />
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
        <StrokePhases {...strokeRehabPhases} />
        <SciaticaTreatment data={strokeRehabTreatment} showBorderLeft={false} rightContentStyle="bulletList" bgColor="bg-white" showStepNumbers={false} />
        <CareSettings {...strokeRehabCareSettings} />
        <TreatmentReviews {...strokeRehabReviews} />
        <PhysiotherapyTeam {...strokeRehabTeam} />
        <CoordinatedCare {...strokeRehabCoordinatedCare} />
        <TransparentPricing {...strokeRehabPricing} />
        <FAQ {...strokeRehabFaqs} />
        <TreatmentLocation {...strokeRehabLocation} />
        <FinalCTA {...strokeRehabCTA} />
        <RelatedPages {...strokeRehabRelatedPages} />
      </div>
    </>
  );
};

export default StrokeRehabDubai;