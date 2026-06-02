import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import TreatmentProtocol from '../../components/ayurveda/TreatmentProtocol';
import TreatmentOils from '../../components/ayurveda/TreatmentOils';
import TreatmentApplications from '../../components/ayurveda/TreatmentApplications';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import { 
  shirodharaHero, 
  shirodharaIntro, 
  shirodharaMechanism, 
  shirodharaProtocol, 
  shirodharaOils,
  shirodharaApplications,
  shirodharaPrograms,
  shirodharaReviews,
  shirodharaFaqs,
  shirodharaTreatmentLocation,
  shirodharaFinalCTA,
  shirodharaRelatedPages
} from '../../data/shirodharaData';

const schemaMarkup = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": "https://vedaracare.ae/treatments/shirodhara-dubai/#procedure",
    "name": "Shirodhara",
    "alternateName": ["Shirodhara Therapy", "Oil Stream Therapy", "Third Eye Oil Therapy", "Classical Ayurvedic Forehead Oil Therapy"],
    "description": "Shirodhara is the classical Ayurvedic therapy in which a continuous stream of warm medicated oil is poured rhythmically across the forehead for 30 to 60 minutes, targeting the Ajna marma point. Performed at Vedara Care Polyclinic in Jumeirah Village Circle, Dubai for chronic insomnia, anxiety, migraine, and stress-related disorders.",
    "url": "https://vedaracare.ae/treatments/shirodhara-dubai/",
    "image": "https://vedaracare.ae/images/shirodhara-dubai-hero.jpg",
    "procedureType": "Ayurveda",
    "bodyLocation": ["Forehead", "Autonomic nervous system", "Hypothalamic-pituitary axis", "Trigeminal nerve"],
    "preparation": "BAMS doctor consultation to confirm indication and select the appropriate medicated oil. Brief preparatory head and neck Abhyanga.",
    "followup": "10 to 15-minute rest period on the droni. Oil left in hair for several hours. Shower at clinic or later in the day. Avoid demanding activities for 2-4 hours.",
    "indication": [
      {"@type": "MedicalIndication", "name": "Chronic insomnia"},
      {"@type": "MedicalIndication", "name": "Anxiety disorders"},
      {"@type": "MedicalIndication", "name": "Chronic migraine"},
      {"@type": "MedicalIndication", "name": "Chronic stress and burnout"},
      {"@type": "MedicalIndication", "name": "PTSD support"},
      {"@type": "MedicalIndication", "name": "ADHD support"},
      {"@type": "MedicalIndication", "name": "Tension headaches"},
      {"@type": "MedicalIndication", "name": "Hair loss (Khalitya)"},
      {"@type": "MedicalIndication", "name": "Postnatal mood disorders"},
      {"@type": "MedicalIndication", "name": "Menopausal sleep disturbances"}
    ],
    "contraindication": [
      {"@type": "MedicalContraindication", "name": "First trimester of pregnancy"},
      {"@type": "MedicalContraindication", "name": "Acute migraine attack"},
      {"@type": "MedicalContraindication", "name": "Severe head trauma history (without medical clearance)"},
      {"@type": "MedicalContraindication", "name": "Active scalp infections"},
      {"@type": "MedicalContraindication", "name": "Recent eye surgery"}
    ],
    "sameAs": "https://en.wikipedia.org/wiki/Shirodhara",
    "performer": {"@id": "https://vedaracare.ae/#organization"}
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "@id": "https://vedaracare.ae/treatments/shirodhara-dubai/#ayurveda",
    "name": "Ayurveda",
    "sameAs": "https://en.wikipedia.org/wiki/Ayurveda"
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Takradhara"
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Abhyanga"
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalSubstance",
    "name": "Brahmi Taila"
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalSubstance",
    "name": "Ksheerabala Taila"
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalSubstance",
    "name": "Chandanadi Taila"
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalSubstance",
    "name": "Mahanarayana Taila"
  },
  {
    "@context": "https://schema.org",
    "@type": "Substance",
    "name": "Brahmi",
    "alternateName": "Bacopa monnieri"
  },
  {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "Ashtanga Hridayam"
  },
  {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "Bhavaprakasha"
  },
  {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Kerala"
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Sutika Paricharya"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Shirodhara Programmes at Vedara Care",
    "provider": {"@id": "https://vedaracare.ae/#organization"},
    "areaServed": [
      {"@type": "City", "name": "Dubai"},
      {"@type": "Place", "name": "United Arab Emirates"}
    ],
    "serviceType": "Ayurvedic Nervous-System Therapy",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Shirodhara Programmes",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Single-Session Shirodhara (75 min total)",
          "priceCurrency": "AED",
          "price": "450",
          "description": "Single Shirodhara session with brief preparatory Abhyanga and rest period"
        },
        {
          "@type": "Offer",
          "name": "Shirodhara 7-Session Course",
          "priceCurrency": "AED",
          "price": "2800",
          "description": "Seven Shirodhara sessions over 2-3 weeks, doctor-prescribed oil, mid-course doctor review"
        },
        {
          "@type": "Offer",
          "name": "Shirodhara 14-Session Therapeutic Course",
          "priceCurrency": "AED",
          "price": "5200",
          "description": "Fourteen Shirodhara sessions over 4-6 weeks for severe insomnia, migraine, or chronic anxiety"
        },
        {
          "@type": "Offer",
          "name": "Home Shirodhara Session (Dubai-wide)",
          "priceCurrency": "AED",
          "price": "680",
          "description": "Home-delivered Shirodhara across Dubai for postnatal, elderly, and established patients"
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Shirodhara in Dubai",
    "url": "https://vedaracare.ae/treatments/shirodhara-dubai/",
    "about": {"@id": "https://vedaracare.ae/treatments/shirodhara-dubai/#procedure"},
    "audience": {"@type": "PatientAudience"},
    "lastReviewed": "2026-05-23",
    "reviewedBy": {
      "@type": "Physician",
      "name": "Dr. Priya Sharma",
      "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
    },
    "primaryImageOfPage": "https://vedaracare.ae/images/shirodhara-dubai-hero.jpg"
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Shirodhara in Dubai — A Complete Treatment Guide",
    "image": "https://vedaracare.ae/images/shirodhara-dubai-hero.jpg",
    "datePublished": "2026-05-23",
    "dateModified": "2026-05-23",
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
    "mainEntityOfPage": "https://vedaracare.ae/treatments/shirodhara-dubai/"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
      {"@type": "ListItem", "position": 2, "name": "Ayurvedic Treatment in Dubai", "item": "https://vedaracare.ae/ayurveda-dubai/"},
      {"@type": "ListItem", "position": 3, "name": "Shirodhara in Dubai", "item": "https://vedaracare.ae/treatments/shirodhara-dubai/"}
    ]
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
    "@type": "FAQPage",
    "mainEntity": shirodharaFaqs.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
];

const ShirodharaDubai = () => {
  const currentDate = new Date().toISOString();
  
  // Update lastReviewed and dateModified in schema
  schemaMarkup.forEach((schema) => {
    if (schema['@type'] === 'MedicalWebPage') {
      schema.lastReviewed = currentDate;
    }
    if (schema['@type'] === 'Article') {
      schema.dateModified = currentDate;
    }
  });
  
  return (
    <>
      <Head>
        <title>Shirodhara Treatment in Dubai | Classical Oil Therapy | Vedara Care</title>
        <meta name="description" content="Authentic Shirodhara at our DHA-licensed Dubai clinic — continuous warm medicated oil stream therapy for insomnia, anxiety & migraine. From AED 450. Book today." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Shirodhara in Dubai — Classical Oil Stream Therapy at Vedara Care" />
        <meta property="og:description" content="Doctor-prescribed Shirodhara at our DHA-licensed JVC clinic. For insomnia, anxiety, migraine, and chronic stress. From AED 450." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/shirodhara-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/treatments/shirodhara-dubai/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content="2026-05-23" />
        <meta property="article:modified_time" content="2026-05-23" />
        <meta property="article:author" content="Dr. Priya Sharma" />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Canonical & Hreflang */}
        <link rel="canonical" href="https://vedaracare.ae/treatments/shirodhara-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/treatments/shirodhara-dubai/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/treatments/shirodhara-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/treatments/shirodhara-dubai/" />
        
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>
      
      {/* Section 1 - Hero with Image 1 */}
      <AyurvedaHero {...shirodharaHero} />
      
      {/* Section 2 - Intro with Images 1 & 2 */}
      <AyurvedaIntro {...shirodharaIntro} />
      
      {/* Section 3 - Mechanism with Image 3 */}
      <TreatmentMechanism {...shirodharaMechanism} />
      
      {/* Section 4 - Protocol with Image 4 */}
      <TreatmentProtocol {...shirodharaProtocol} />
      
      {/* Section 5 - Oils with Image 5 */}
      <TreatmentOils {...shirodharaOils} />
      
      {/* Section 6 - Applications with Image 1 */}
      <TreatmentApplications {...shirodharaApplications} />
      
      {/* Section 7 - Programs with Image 2 */}
      <TreatmentPrograms {...shirodharaPrograms} />
      
      {/* Section 8 - Reviews with Image 3 */}
      <TreatmentReviews {...shirodharaReviews} />
      
      {/* Section 9 - FAQ with Image 4 */}
      <FAQ {...shirodharaFaqs} />
      
      {/* Section 10 - Location with Image 5 */}
      <TreatmentLocation {...shirodharaTreatmentLocation} />
      
      {/* Section 11 - Final CTA */}
      <FinalCTA {...shirodharaFinalCTA} />
      
      {/* Section 12 - Related Pages */}
      <RelatedPages {...shirodharaRelatedPages} />
    </>
  );
};

export default ShirodharaDubai;
