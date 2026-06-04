import React from 'react';
import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import PostnatalStructure from '../../components/ayurveda/PostnatalStructure';
import PostnatalComponents from '../../components/ayurveda/PostnatalComponents';
import PostnatalPlanAhead from '../../components/ayurveda/PostnatalPlanAhead';
import PostnatalProtocols from '../../components/ayurveda/PostnatalProtocols';
import PostnatalLocation from '../../components/ayurveda/PostnatalLocation';
import ClinicalBoundaries from '../../components/ayurveda/ClinicalBoundaries';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import FAQ from '../../components/home/FAQ';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';

import {
  postnatalHero,
  postnatalIntro,
  postnatalMechanism1,
  postnatalMechanism2,
  postnatalStructure,
  postnatalComponents,
  postnatalPlanAhead,
  postnatalProtocols,
  postnatalBoundaries,
  postnatalReviews,
  postnatalPricing,
  postnatalFaqs,
  postnatalLocation,
  postnatalFinalCTA,
  postnatalRelatedPages
} from '../../data/postnatalData';

const PostnatalAyurvedaDubai = () => {
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "@id": "https://vedaracare.ae/conditions/postnatal-ayurveda-dubai/#condition",
      "name": "Postpartum Care",
      "alternateName": ["Postnatal Care", "Sutika Paricharya", "Postpartum Recovery", "Confinement Care", "Janma Bala"],
      "code": [
        {"@type": "MedicalCode", "code": "Z39", "codingSystem": "ICD-10"},
        {"@type": "MedicalCode", "code": "Z39.2", "codingSystem": "ICD-10"}
      ],
      "associatedAnatomy": [
        {"@type": "AnatomicalStructure", "name": "Uterus"},
        {"@type": "AnatomicalStructure", "name": "Pelvic floor"},
        {"@type": "AnatomicalStructure", "name": "Abdominal wall"},
        {"@type": "AnatomicalStructure", "name": "Reproductive system"}
      ],
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Postpartum fatigue"},
        {"@type": "MedicalSymptom", "name": "Uterine involution"},
        {"@type": "MedicalSymptom", "name": "Lactation establishment"},
        {"@type": "MedicalSymptom", "name": "Postpartum body changes"},
        {"@type": "MedicalSymptom", "name": "Postpartum mood changes"},
        {"@type": "MedicalSymptom", "name": "Sleep deprivation"},
        {"@type": "MedicalSymptom", "name": "Postpartum hair loss"},
        {"@type": "MedicalSymptom", "name": "Perineal healing"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Postpartum Abhyanga", "url": "https://vedaracare.ae/treatments/abhyanga-dubai/"},
        {"@type": "MedicalProcedure", "name": "Udar Bandhana belly binding"},
        {"@type": "MedicalProcedure", "name": "Yoni Pichu"},
        {"@type": "MedicalProcedure", "name": "Shirodhara", "url": "https://vedaracare.ae/treatments/shirodhara-dubai/"},
        {"@type": "MedicalTherapy", "name": "Postpartum Ayurvedic medicines"},
        {"@type": "MedicalTherapy", "name": "Weekly dietary protocols"},
        {"@type": "MedicalTherapy", "name": "Sutika Paricharya"}
      ],
      "riskFactor": [
        {"@type": "MedicalRiskFactor", "name": "C-section delivery"},
        {"@type": "MedicalRiskFactor", "name": "Multiple babies"},
        {"@type": "MedicalRiskFactor", "name": "Traumatic birth"},
        {"@type": "MedicalRiskFactor", "name": "Lack of family support"},
        {"@type": "MedicalRiskFactor", "name": "Older maternal age"},
        {"@type": "MedicalRiskFactor", "name": "Sleep deprivation"},
        {"@type": "MedicalRiskFactor", "name": "Previous postpartum complications"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "C-Section Recovery",
      "alternateName": ["Caesarean Recovery", "Post-C-Section Care"],
      "code": {"@type": "MedicalCode", "code": "Z39.2", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "C-section incision healing"},
        {"@type": "MedicalSymptom", "name": "Abdominal weakness"},
        {"@type": "MedicalSymptom", "name": "Surgical recovery fatigue"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Modified postpartum Abhyanga"},
        {"@type": "MedicalProcedure", "name": "Gradual Udar Bandhana"},
        {"@type": "MedicalTherapy", "name": "Extended Sutika Paricharya"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Traumatic Birth Recovery",
      "alternateName": ["Birth Trauma Support"],
      "code": {"@type": "MedicalCode", "code": "Z39", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Postpartum emotional distress"},
        {"@type": "MedicalSymptom", "name": "Physical birth injury recovery"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Gentle physical restoration"},
        {"@type": "MedicalTherapy", "name": "Active mental health support"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Multiple Babies Programme",
      "alternateName": ["Twins Postnatal Care", "Triplets Postnatal Care"],
      "code": {"@type": "MedicalCode", "code": "Z39", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Intensified physical depletion"},
        {"@type": "MedicalSymptom", "name": "High care demands"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Extended Sutika Paricharya"},
        {"@type": "MedicalProcedure", "name": "Frequent home visits"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Late-Start Postnatal Programme",
      "alternateName": ["Restoration after 6 weeks"],
      "code": {"@type": "MedicalCode", "code": "Z39.2", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Residual postpartum fatigue"},
        {"@type": "MedicalSymptom", "name": "Postpartum body changes"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalTherapy", "name": "Postpartum restoration protocol"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Mother of Older Children Postnatal Care",
      "alternateName": ["Second baby recovery", "Multiparous care"],
      "code": {"@type": "MedicalCode", "code": "Z39", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Increased household demands"},
        {"@type": "MedicalSymptom", "name": "Limited rest opportunity"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Intensified physical support"},
        {"@type": "MedicalTherapy", "name": "Family coordination guidance"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Postnatal Depression Integrated Care",
      "alternateName": ["Postpartum Depression Support", "PND Care"],
      "code": {"@type": "MedicalCode", "code": "F53.0", "codingSystem": "ICD-10"},
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Postpartum mood disorder"},
        {"@type": "MedicalSymptom", "name": "Anxiety"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Shirodhara", "url": "https://vedaracare.ae/treatments/shirodhara-dubai/"},
        {"@type": "MedicalTherapy", "name": "Integrated psychiatric coordination"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": "https://vedaracare.ae/conditions/postnatal-ayurveda-dubai/#webpage",
      "name": "Ayurvedic Postnatal Care in Dubai",
      "url": "https://vedaracare.ae/conditions/postnatal-ayurveda-dubai/",
      "about": {"@id": "https://vedaracare.ae/conditions/postnatal-ayurveda-dubai/#condition"},
      "audience": {
        "@type": "PatientAudience",
        "geographicArea": {"@type": "Place", "name": "Dubai, United Arab Emirates"},
        "requiredGender": "Female"
      },
      "lastReviewed": "2026-06-03",
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. Priya Sharma",
        "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
      },
      "primaryImageOfPage": "https://vedaracare.ae/images/postnatal-ayurveda-dubai-hero.jpg"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Ayurvedic Postnatal Care Programmes — Sutika Paricharya",
      "provider": {"@id": "https://vedaracare.ae/#organization"},
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
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "serviceType": "Ayurvedic Postnatal and Postpartum Care",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Postnatal Programmes",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Postnatal Initial Consultation",
            "priceCurrency": "AED",
            "price": "450",
            "description": "60-minute consultation with BAMS physician, programme design, can be at clinic or home"
          },
          {
            "@type": "Offer",
            "name": "Standard 45-Day Sutika Paricharya Programme",
            "priceCurrency": "AED",
            "price": "12500",
            "description": "Complete 45-day classical Ayurvedic postnatal care with daily home Abhyanga, internal medicines, dietary protocols, belly binding, mental health support"
          },
          {
            "@type": "Offer",
            "name": "Extended Postnatal Programme",
            "priceCurrency": "AED",
            "price": "18500",
            "description": "60-90 day programme for C-section recovery, multiple babies, traumatic birth, postpartum depression, or complex postpartum situations"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Ayurvedic Postnatal Care in Dubai — A Complete Guide to Sutika Paricharya for Expat Mothers",
      "image": "https://vedaracare.ae/images/postnatal-ayurveda-dubai-hero.jpg",
      "datePublished": "2026-06-03",
      "dateModified": "2026-06-03",
      "author": {
        "@type": "Physician",
        "name": "Dr. Priya Sharma",
        "url": "https://vedaracare.ae/doctors/dr-priya-sharma-ayurveda/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic",
        "logo": {"@type": "ImageObject", "url": "https://vedaracare.ae/logo.png"}
      },
      "mainEntityOfPage": "https://vedaracare.ae/conditions/postnatal-ayurveda-dubai/"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/"},
        {"@type": "ListItem", "position": 3, "name": "Ayurvedic Postnatal Care in Dubai", "item": "https://vedaracare.ae/conditions/postnatal-ayurveda-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": postnatalFaqs.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer.replace(/<[^>]*>?/gm, '')
        }
      }))
    }
  ];

  return (
    <>
      <Head>
        <title>Ayurvedic Postnatal Care in Dubai | 45-Day Sutika Paricharya | JVC</title>
        <meta name="description" content="Authentic 45-day Sutika Paricharya postnatal care at our JVC clinic and your home across Dubai. Daily Abhyanga, internal medicines, belly binding, mental health support. For expat mothers without family." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Ayurvedic Postnatal Care in Dubai — 45-Day Sutika Paricharya at Home and at Our JVC Clinic" />
        <meta property="og:description" content="The postpartum care your mother would have given you — if she were in Dubai. Authentic 45-day Sutika Paricharya for expat mothers. Home services across JVC, JVT, Al Barsha South, and all of Dubai." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/postnatal-ayurveda-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/postnatal-ayurveda-dubai/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content="2026-06-03" />
        <meta property="article:modified_time" content="2026-06-03" />
        <meta property="article:author" content="Dr. Priya Sharma" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayurvedic Postnatal Care in Dubai — 45-Day Sutika Paricharya at Home and at Our JVC Clinic" />
        <meta name="twitter:description" content="The postpartum care your mother would have given you — if she were in Dubai. Authentic 45-day Sutika Paricharya for expat mothers. Home services across JVC, JVT, Al Barsha South, and all of Dubai." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/postnatal-ayurveda-dubai.jpg" />

        {/* Canonical & Language Tags */}
        <link rel="canonical" href="https://vedaracare.ae/conditions/postnatal-ayurveda-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/conditions/postnatal-ayurveda-dubai/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/conditions/postnatal-ayurveda-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/conditions/postnatal-ayurveda-dubai/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>

      <main>
        {/* Section 1: Hero */}
        <AyurvedaHero {...postnatalHero} />

        {/* Section 2: Intro (Quick Answer) */}
        <AyurvedaIntro {...postnatalIntro} />

        {/* Section 3: The Classical Framework */}
        <TreatmentMechanism {...postnatalMechanism1} />

        {/* Section 4: The Dubai Reality */}
        <TreatmentMechanism {...postnatalMechanism2} />

        {/* Section 5: The Structure (Weeks) */}
        <PostnatalStructure {...postnatalStructure} />

        {/* Section 6: The Seven Components */}
        <PostnatalComponents {...postnatalComponents}
        bgColor="#FFFFFF" 
        cardBg="#FAF8F5" />

      

        {/* Section 8: Adapted Protocols */}
        <PostnatalProtocols {...postnatalProtocols}
        bgColor="#FFFFFF" 
        cardColor="#FAF8F5" />

        {/* Section 9: Clinical Boundaries */}
        <ClinicalBoundaries {...postnatalBoundaries} />

        {/* Section 8: Real Postpartum Outcomes */}
        <TreatmentReviews 
          {...postnatalReviews}
          items={postnatalReviews.items} 
        />

        {/* Section 9: Pricing & Programs */}
        <TreatmentPrograms {...postnatalPricing} />

        {/* Section 10: FAQ */}
        <FAQ {...postnatalFaqs} />
         {/* Section 7: Plan Ahead */}
        <PostnatalPlanAhead {...postnatalPlanAhead} />

        {/* Section 11: Location */}
        <PostnatalLocation {...postnatalLocation} />

        {/* Section 12: Final CTA */}
        <FinalCTA {...postnatalFinalCTA} />

        {/* Section 13: Related Pages */}
        <RelatedPages {...postnatalRelatedPages} 
        bgColor="#F5F1EB"
        cardColor="#FFFFFF"
        />
      </main>
    </>
  );
};

export default PostnatalAyurvedaDubai;
