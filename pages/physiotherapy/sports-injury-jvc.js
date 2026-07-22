import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import SportsInjuryTypes from '../../components/ayurveda/SportsInjuryTypes';
import SportsInjuryMechanism from '../../components/ayurveda/SportsInjuryMechanism';
import SportsProtocols from '../../components/ayurveda/SportsProtocols';
import SportsPhysiotherapyModalities from '../../components/ayurveda/SportsPhysiotherapyModalities';
import PhysiotherapyIntegration from '../../components/ayurveda/PhysiotherapyIntegration';
import OutcomeRanges from '../../components/ayurveda/OutcomeRanges';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import SportsPhysiotherapyPricing from '../../components/ayurveda/SportsPhysiotherapyPricing';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import SportsPhysiotherapyLocation from '../../components/ayurveda/SportsPhysiotherapyLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  sportsPhysiotherapyHero,
  sportsPhysiotherapyIntro,
  sportsPhysiotherapyConditions,
  sportsPhysiotherapyMechanism,
  sportsPhysiotherapyModalities,
  sportsPhysiotherapyIntegration,
  sportsPhysiotherapyOutcomes,
  sportsPhysiotherapyTeam,
  sportsPhysiotherapyPricing,
  sportsPhysiotherapyReviews,
  sportsPhysiotherapyFaqs,
  sportsPhysiotherapyLocation,
  sportsPhysiotherapyFinalCTA,
  sportsPhysiotherapyRelatedPages,
  sportsPhysiotherapyInjuryTypes
} from '../../data/sportsPhysiotherapyData';

const SportsInjuryJvc = () => {
  const currentDate = new Date().toISOString();

  const schemaMarkup = [
    // Site-wide Vedara Care Organization
    {
      "@context": "https://schema.org",
      "@type": ["MedicalClinic", "Organization"],
      "@id": "https://vedaracare.ae/#organization",
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      }
    },

    // MedicalBusiness (Sports Physiotherapy)
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy"],
      "@id": "https://vedaracare.ae/physiotherapy/sports-injury-jvc/#sports-physiotherapy",
      "name": "Vedara Care Sports Injury Physiotherapy",
      "alternateName": ["Vedara Sports Physio JVC", "Vedara Sports Medicine Physiotherapy"],
      "url": "https://vedaracare.ae/physiotherapy/sports-injury-jvc/",
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "DHA-licensed sports injury physiotherapy at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. DPT-qualified sports physiotherapists treating padel injuries, running injuries, ACL rehabilitation, gym training injuries, and full sports medicine rehabilitation with evidence-based return-to-sport protocols.",
      "telephone": "+971 55 586 7466",
      "priceRange": "AED 300 - AED 12,000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Building X, Street 2",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.0478",
        "longitude": "55.2418"
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
        { "@type": "Place", "name": "Jumeirah Village Circle" },
        { "@type": "Place", "name": "Dubai Sports City" },
        { "@type": "Place", "name": "Motor City" },
        { "@type": "Place", "name": "Jumeirah Village Triangle" },
        { "@type": "Place", "name": "Al Barsha South" },
        { "@type": "Place", "name": "Arjan" },
        { "@type": "Place", "name": "Dubai Hills Estate" },
        { "@type": "Place", "name": "Dubai Marina" },
        { "@type": "Place", "name": "Downtown Dubai" },
        { "@type": "Place", "name": "Palm Jumeirah" },
        { "@type": "Place", "name": "Mirdif" },
        { "@type": "Place", "name": "Circle Mall" },
        { "@type": "Place", "name": "FIVE Jumeirah Village" },
        { "@type": "Place", "name": "JSS Private School" },
        { "@type": "City", "name": "Dubai" }
      ],
      "medicalSpecialty": [
        "Sports Medicine",
        "Sports Physiotherapy",
        "Rehabilitation Medicine",
        "Physical Therapy"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Sports Injury Treatment" },
        { "@type": "MedicalProcedure", "name": "ACL Rehabilitation" },
        { "@type": "MedicalProcedure", "name": "Padel Injury Treatment" },
        { "@type": "MedicalProcedure", "name": "Running Injury Treatment" },
        { "@type": "MedicalProcedure", "name": "Manual Therapy" },
        { "@type": "MedicalProcedure", "name": "Dry Needling" },
        { "@type": "MedicalProcedure", "name": "Shockwave Therapy" },
        { "@type": "MedicalProcedure", "name": "Biomechanical Analysis" },
        { "@type": "MedicalProcedure", "name": "Gait Analysis" },
        { "@type": "MedicalProcedure", "name": "Running Gait Analysis" },
        { "@type": "MedicalProcedure", "name": "Return-to-Sport Testing" }
      ],
      "memberOf": {
        "@type": "GovernmentOrganization",
        "name": "Dubai Health Authority"
      },
      "insuranceProvider": [
        { "@type": "Organization", "name": "Daman" },
        { "@type": "Organization", "name": "AXA" },
        { "@type": "Organization", "name": "Allianz" },
        { "@type": "Organization", "name": "Oman Insurance" },
        { "@type": "Organization", "name": "Now Health" },
        { "@type": "Organization", "name": "Bupa" },
        { "@type": "Organization", "name": "MetLife" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "180",
        "bestRating": "5",
        "worstRating": "1"
      }
    },

    // Medical Conditions
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Lateral Epicondylitis",
      "alternateName": ["Padel Elbow", "Tennis Elbow"],
      "code": { "@type": "MedicalCode", "code": "M77.1", "codingSystem": "ICD-10" },
      "possibleTreatment": [
        { "@type": "MedicalProcedure", "name": "Manual Therapy" },
        { "@type": "MedicalProcedure", "name": "Eccentric Loading" },
        { "@type": "MedicalProcedure", "name": "Shockwave Therapy" },
        { "@type": "MedicalProcedure", "name": "Dry Needling" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Anterior Cruciate Ligament Injury",
      "alternateName": ["ACL Injury", "ACL Tear"],
      "code": { "@type": "MedicalCode", "code": "S83.5", "codingSystem": "ICD-10" },
      "possibleTreatment": [
        { "@type": "MedicalProcedure", "name": "ACL Reconstruction Rehabilitation" },
        { "@type": "MedicalProcedure", "name": "Conservative Management" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Hamstring Strain",
      "code": { "@type": "MedicalCode", "code": "S76.3", "codingSystem": "ICD-10" }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Patellofemoral Pain Syndrome",
      "alternateName": ["Runner's Knee"],
      "code": { "@type": "MedicalCode", "code": "M22.2", "codingSystem": "ICD-10" }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Achilles Tendinopathy",
      "code": { "@type": "MedicalCode", "code": "M76.6", "codingSystem": "ICD-10" }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Rotator Cuff Injury"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Meniscus Injury"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Ankle Sprain"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Iliotibial Band Syndrome",
      "alternateName": ["IT Band Syndrome"]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Plantar Fasciitis"
    },

    // Sports Events
    {
      "@context": "https://schema.org",
      "@type": "SportsEvent",
      "name": "Dubai Marathon"
    },
    {
      "@context": "https://schema.org",
      "@type": "SportsEvent",
      "name": "RAK Half Marathon"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Sports Injury Physiotherapy in JVC, Dubai",
      "provider": { "@id": "https://vedaracare.ae/physiotherapy/sports-injury-jvc/#sports-physiotherapy" },
      "areaServed": [
        { "@type": "Place", "name": "Jumeirah Village Circle" },
        { "@type": "City", "name": "Dubai" }
      ],
      "serviceType": "Sports Injury Physiotherapy and Sports Medicine",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Sports Physiotherapy Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Initial Sports Physiotherapy Assessment",
            "priceCurrency": "AED",
            "price": "350",
            "description": "60-minute comprehensive assessment with DPT-qualified sports physiotherapist"
          },
          {
            "@type": "Offer",
            "name": "Sport-Specific Assessment and Gait Analysis",
            "priceCurrency": "AED",
            "price": "480",
            "description": "90-minute biomechanical analysis and sport-specific assessment"
          },
          {
            "@type": "Offer",
            "name": "Sport-Specific Rehabilitation Package",
            "priceCurrency": "AED",
            "price": "2,400",
            "description": "12-session structured rehabilitation programme"
          },
          {
            "@type": "Offer",
            "name": "ACL Reconstruction Rehabilitation Programme",
            "priceCurrency": "AED",
            "price": "6,500",
            "description": "Comprehensive 20-30 session ACL rehabilitation programme"
          },
          {
            "@type": "Offer",
            "name": "Return-to-Sport Testing and Clearance",
            "priceCurrency": "AED",
            "price": "420",
            "description": "Objective return-to-sport testing with criteria-based clearance"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Physiotherapy in JVC", "item": "https://vedaracare.ae/physiotherapy-jvc/" },
        { "@type": "ListItem", "position": 3, "name": "Sports Injury Physiotherapy", "item": "https://vedaracare.ae/physiotherapy/sports-injury-jvc/" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I get a same-day appointment for an acute sports injury?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — same-day appointments are typically available for acute sports injuries at our JVC clinic. WhatsApp +971 55 586 7466 for fastest response, or call directly. Saturday and evening appointments also available. For very severe acute injuries with suspected fracture or neurological symptoms, A&E evaluation comes first, then physiotherapy follow-up."
          }
        },
        {
          "@type": "Question",
          "name": "Do you treat padel injuries specifically?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — padel injuries are one of our largest treatment cohorts due to the sport's explosion in Dubai. Common padel injuries we treat: padel elbow (lateral epicondylitis), rotator cuff impingement, lower back strain, wrist tendinopathies, ankle sprains, and meniscus injuries. Our sports physiotherapists understand padel-specific biomechanics."
          }
        },
        ...sportsPhysiotherapyFaqs.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Sports Injury Physiotherapy in JVC — Complete Service Guide",
      "image": "https://vedaracare.ae/og-images/sports-injury-physiotherapy-jvc.jpg",
      "datePublished": "2026-06-01",
      "dateModified": currentDate,
      "author": {
        "@type": "Physician",
        "name": "Dr. Sarah Mitchell, DPT"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic",
        "logo": "https://vedaracare.ae/logo.png",
        "@id": "https://vedaracare.ae/#organization"
      },
      "mainEntityOfPage": "https://vedaracare.ae/physiotherapy/sports-injury-jvc/"
    },
    // Team Physicians
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Sarah Mitchell, DPT",
      "url": "https://vedaracare.ae/physiotherapists/dr-sarah-mitchell/",
      "image": "https://vedaracare.ae/images/dr-sarah-mitchell.jpg",
      "medicalSpecialty": ["Sports Medicine", "Sports Physiotherapy", "Physiotherapy"],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Doctor of Physical Therapy",
          "alternateName": "DPT"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Sports Medicine Certification"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "DHA-Licensed",
          "issuingAuthority": {
            "@type": "GovernmentOrganization",
            "name": "Dubai Health Authority"
          }
        }
      ],
      "worksFor": { "@id": "https://vedaracare.ae/#organization" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Rajan Mehta, DPT",
      "url": "https://vedaracare.ae/physiotherapists/dr-rajan-mehta/",
      "medicalSpecialty": ["Sports Medicine", "Sports Physiotherapy", "Physiotherapy"],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Doctor of Physical Therapy",
          "alternateName": "DPT"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "DHA-Licensed",
          "issuingAuthority": {
            "@type": "GovernmentOrganization",
            "name": "Dubai Health Authority"
          }
        }
      ],
      "worksFor": { "@id": "https://vedaracare.ae/#organization" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Priya Nair, DPT",
      "url": "https://vedaracare.ae/physiotherapists/dr-priya-nair/",
      "medicalSpecialty": ["Sports Medicine", "Sports Physiotherapy", "Physiotherapy"],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Doctor of Physical Therapy",
          "alternateName": "DPT"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "DHA-Licensed",
          "issuingAuthority": {
            "@type": "GovernmentOrganization",
            "name": "Dubai Health Authority"
          }
        }
      ],
      "worksFor": { "@id": "https://vedaracare.ae/#organization" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Carlos Fernandez, DPT",
      "url": "https://vedaracare.ae/physiotherapists/dr-carlos-fernandez/",
      "medicalSpecialty": ["Sports Medicine", "Sports Physiotherapy", "Physiotherapy"],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Doctor of Physical Therapy",
          "alternateName": "DPT"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "DHA-Licensed",
          "issuingAuthority": {
            "@type": "GovernmentOrganization",
            "name": "Dubai Health Authority"
          }
        }
      ],
      "worksFor": { "@id": "https://vedaracare.ae/#organization" }
    }
  ];

  return (
    <>
      <Head>
        <title>Sports Injury Physiotherapy in JVC | Same-Day Care | Vedara</title>
        <meta name="description" content="Specialist sports injury physiotherapy at our DHA-licensed JVC clinic, Dubai. Padel, running, ACL, gym injuries treated by DPT-qualified sports physios. Same-day appointments for acute injuries. Return-to-sport protocols. Insurance direct-billing." />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Open Graph */}
        <meta property="og:title" content="Sports Injury Physiotherapy in JVC Dubai — Same-Day Acute Care | Vedara" />
        <meta property="og:description" content="DPT-qualified sports physiotherapists at our Jumeirah Village Circle clinic. Padel injuries, running injuries, ACL rehab, gym training injuries. Evidence-based return-to-sport protocols. Same-day appointments for acute injuries." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/sports-injury-physiotherapy-jvc.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/physiotherapy/sports-injury-jvc/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Canonical & Language Tags */}
        <link rel="canonical" href="https://vedaracare.ae/physiotherapy/sports-injury-jvc/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/physiotherapy/sports-injury-jvc/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/physiotherapy/sports-injury-jvc/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/physiotherapy/sports-injury-jvc/" />

        {/* Schema Markup */}
        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <div className="sports-physiotherapy-content">
        {/* H1: Section 1 - Hero */}
        <AyurvedaHero {...sportsPhysiotherapyHero} />

        {/* H2: Sports injury physiotherapy at our JVC clinic, in one paragraph. [Quick Answer Box] */}
        <AyurvedaIntro {...sportsPhysiotherapyIntro} />

        {/* H2: Specific sport-injury protocols at our JVC clinic. */}
        <SportsProtocols />

        {/* H2: Specific injury types we treat at our JVC clinic. */}
        <SportsInjuryTypes {...sportsPhysiotherapyInjuryTypes} />

        {/* H2: How sports injury physiotherapy actually works at our JVC clinic. */}
        <SportsInjuryMechanism />

        {/* H2: Evidence-based sports physiotherapy techniques. */}
        <SportsPhysiotherapyModalities {...sportsPhysiotherapyModalities} />

        {/* H2: Same-day appointments for acute sports injuries. */}
        <PhysiotherapyIntegration />

        {/* H2: What return-to-sport looks like by injury type. */}
        <OutcomeRanges {...sportsPhysiotherapyOutcomes} />

        {/* H2: Sports physiotherapy specialists at our JVC clinic. */}
        <PhysiotherapyTeam {...sportsPhysiotherapyTeam} />

        {/* H2: What sports injury physiotherapy at our JVC clinic costs. */}
        <SportsPhysiotherapyPricing />

        {/* H2: Real return-to-sport outcomes from JVC patients. */}
        <TreatmentReviews {...sportsPhysiotherapyReviews} />

        {/* H2: What sports patients ask before booking. [FAQ block] */}
        <FAQ {...sportsPhysiotherapyFaqs} />

        {/* H2: Where sports physiotherapy happens at Vedara Care JVC. */}
        <SportsPhysiotherapyLocation data={sportsPhysiotherapyLocation} />

        {/* H2: Acute injury or chronic pattern — start with a proper assessment. */}
        <FinalCTA {...sportsPhysiotherapyFinalCTA} />

        {/* Related Pages */}
        <RelatedPages {...sportsPhysiotherapyRelatedPages} />
      </div>
    </>
  );
};

export default SportsInjuryJvc;
