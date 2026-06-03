import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import TreatmentProtocol from '../../components/ayurveda/TreatmentProtocol';
import TreatmentOils from '../../components/ayurveda/TreatmentOils';
import TreatmentApplications from '../../components/ayurveda/TreatmentApplications';
import TreatmentHomeHealthcare from '../../components/ayurveda/TreatmentHomeHealthcare';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import { 
  abhyangaHero, 
  abhyangaIntro, 
  abhyangaMechanism, 
  abhyangaProtocol, 
  abhyangaBenefits,
  abhyangaOils,
  abhyangaApplications,
  abhyangaPrograms,
  abhyangaHomeHealthcare,
  abhyangaReviews,
  abhyangaFaqs,
  abhyangaTreatmentLocation,
  abhyangaFinalCTA,
  abhyangaRelatedPages
} from '../../data/abhyangaData';

const AbhyangaDubai = () => {
  const currentDate = new Date().toISOString();
  
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "@id": "https://vedaracare.ae/treatments/abhyanga-dubai/#procedure",
      "name": "Abhyanga",
      "alternateName": ["Abhyanga Massage", "Classical Ayurvedic Oil Massage", "Two-Therapist Ayurvedic Massage"],
      "description": "Abhyanga is the classical full-body Ayurvedic oil massage in which warm dosha-specific medicated oils are applied head-to-toe in synchronized strokes by two trained therapists, typically over 60 to 90 minutes. Performed at Vedara Care Polyclinic in Jumeirah Village Circle, Dubai by therapists trained in classical Kerala technique.",
      "url": "https://vedaracare.ae/treatments/abhyanga-dubai/",
      "image": "https://vedaracare.ae/images/abhyanga-dubai-hero.webp",
      "procedureType": "Ayurveda",
      "bodyLocation": "Whole body",
      "preparation": "BAMS doctor consultation including dosha assessment to select appropriate medicated oils.",
      "followup": "Swedana (medicated steam therapy), then rest, then shower. Aftercare guidance provided.",
      "indication": [
        {"@type": "MedicalIndication", "name": "Chronic stress and burnout"},
        {"@type": "MedicalIndication", "name": "Insomnia"},
        {"@type": "MedicalIndication", "name": "Joint stiffness"},
        {"@type": "MedicalIndication", "name": "Anxiety"},
        {"@type": "MedicalIndication", "name": "Chronic fatigue"},
        {"@type": "MedicalIndication", "name": "Dry skin and skin texture issues"},
        {"@type": "MedicalIndication", "name": "Pre-menstrual symptoms"},
        {"@type": "MedicalIndication", "name": "Postnatal recovery (modified protocol)"},
        {"@type": "MedicalIndication", "name": "Chronic back pain (combined therapy)"},
        {"@type": "MedicalIndication", "name": "Migraine (combined therapy)"}
      ],
      "contraindication": [
        {"@type": "MedicalContraindication", "name": "First trimester of pregnancy"},
        {"@type": "MedicalContraindication", "name": "Heavy menstruation (days 1-3)"},
        {"@type": "MedicalContraindication", "name": "Active acute infection"},
        {"@type": "MedicalContraindication", "name": "Open wounds or active skin infections"}
      ],
      "sameAs": "https://en.wikipedia.org/wiki/Abhyanga",
      "performer": {"@id": "https://vedaracare.ae/#organization"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Swedana",
      "sameAs": "https://en.wikipedia.org/wiki/Swedana",
      "description": "Ayurvedic medicated steam therapy used after Abhyanga"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalTherapy",
      "name": "Ayurveda",
      "sameAs": "https://en.wikipedia.org/wiki/Ayurveda",
      "description": "Traditional Indian system of medicine"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Sutika Paricharya",
      "description": "Ayurvedic postnatal care protocol"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalEntity",
      "name": "Vata",
      "alternateName": ["Vata dosha"],
      "description": "One of the three Ayurvedic doshas in Ayurveda"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalEntity",
      "name": "Pitta",
      "alternateName": ["Pitta dosha"],
      "description": "One of the three Ayurvedic doshas in Ayurveda"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalEntity",
      "name": "Kapha",
      "alternateName": ["Kapha dosha"],
      "description": "One of the three Ayurvedic doshas in Ayurveda"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalEntity",
      "name": "Marma points",
      "description": "Vital energy points in Ayurveda"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalSubstance",
      "name": "Mahanarayana taila"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalSubstance",
      "name": "Dhanvantaram taila"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalSubstance",
      "name": "Chandanadi taila"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalSubstance",
      "name": "Pinda taila"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalSubstance",
      "name": "Murchita taila"
    },
    {
      "@context": "https://schema.org",
      "@type": "Substance",
      "name": "Sesame oil"
    },
    {
      "@context": "https://schema.org",
      "@type": "Substance",
      "name": "Coconut oil"
    },
    {
      "@context": "https://schema.org",
      "@type": "Substance",
      "name": "Mustard oil"
    },
    {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "Charaka Samhita",
      "description": "Classical Ayurvedic text"
    },
    {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "Ashtanga Hridayam",
      "description": "Classical Ayurvedic text"
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Kerala",
      "description": "Region in India where the technique originates"
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Jumeirah Village Circle",
      "description": "Location of the clinic"
    },
    {
      "@context": "https://schema.org",
      "@type": "EducationalCredential",
      "name": "BAMS",
      "description": "Bachelor of Ayurvedic Medicine and Surgery"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Stress"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Insomnia"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Back pain"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Abhyanga Programmes at Vedara Care",
      "provider": {"@id": "https://vedaracare.ae/#organization"},
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "serviceType": "Ayurvedic Body Therapy",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Abhyanga Programmes",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Single-Session Abhyanga (90 min)",
            "priceCurrency": "AED",
            "price": "450",
            "description": "Single 90-minute classical Abhyanga session including Swedana steam therapy"
          },
          {
            "@type": "Offer",
            "name": "Abhyanga 7-Session Course",
            "priceCurrency": "AED",
            "price": "2800",
            "description": "Seven Abhyanga sessions over 3-4 weeks, doctor-prescribed oils, mid-course doctor review"
          },
          {
            "@type": "Offer",
            "name": "Abhyanga 14-Session Course",
            "priceCurrency": "AED",
            "price": "5200",
            "description": "Fourteen Abhyanga sessions over 6-10 weeks, multiple oil prescriptions, two doctor reviews"
          },
          {
            "@type": "Offer",
            "name": "Home Abhyanga Session (Dubai-wide)",
            "priceCurrency": "AED",
            "price": "650",
            "description": "Home-delivered Abhyanga across Dubai by trained therapists with portable droni and authentic oils"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Abhyanga Massage in Dubai",
      "url": "https://vedaracare.ae/treatments/abhyanga-dubai/",
      "about": {"@id": "https://vedaracare.ae/treatments/abhyanga-dubai/#procedure"},
      "audience": {"@type": "PatientAudience"},
      "lastReviewed": currentDate,
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. Priya Menon",
        "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
      },
      "primaryImageOfPage": "https://vedaracare.ae/images/abhyanga-dubai-hero.webp"
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Abhyanga Massage in Dubai — A Complete Treatment Guide",
      "image": "https://vedaracare.ae/images/abhyanga-dubai-hero.webp",
      "datePublished": "2026-05-01",
      "dateModified": currentDate,
      "author": {
        "@type": "Physician",
        "name": "Dr. Priya Menon",
        "url": "https://vedaracare.ae/doctors/dr-priya-menon/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic",
        "logo": {"@type": "ImageObject", "url": "https://vedaracare.ae/logo.png"}
      },
      "mainEntityOfPage": "https://vedaracare.ae/treatments/abhyanga-dubai/"
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
        {"@type": "ListItem", "position": 2, "name": "Ayurvedic Treatment in Dubai", "item": "https://vedaracare.ae/ayurveda-dubai/"},
        {"@type": "ListItem", "position": 3, "name": "Abhyanga Massage in Dubai", "item": "https://vedaracare.ae/treatments/abhyanga-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": abhyangaFaqs.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ];
  
  return (
    <>
      <Head>
        <title>Abhyanga Massage Dubai | DHA-Licensed Ayurveda | Vedara Care</title>
        <meta name="description" content="Authentic 90-minute Abhyanga at our DHA-licensed Dubai clinic — two synchronized therapists, dosha-specific medicated oils, traditional Kerala technique. From AED 450." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Abhyanga Massage in Dubai — Classical 90-Minute Ayurvedic Oil Therapy" />
        <meta property="og:description" content="Two synchronized therapists, dosha-specific medicated oils, traditional Kerala technique. DHA-licensed Ayurvedic Abhyanga in JVC, Dubai. From AED 450." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/abhyanga-dubai.webp" />
        <meta property="og:url" content="https://vedaracare.ae/treatments/abhyanga-dubai/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content="2026-05-01" />
        <meta property="article:modified_time" content={currentDate} />
        <meta property="article:author" content="Dr. Priya Menon" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Canonical & Hreflang */}
        <link rel="canonical" href="https://vedaracare.ae/treatments/abhyanga-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/treatments/abhyanga-dubai/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/treatments/abhyanga-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/treatments/abhyanga-dubai/" />

        {/* Schema Markup */}
        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      {/* Section 1 - Hero with Image 1 */}
      <AyurvedaHero {...abhyangaHero} />
      
      {/* Section 2 - Intro with Image 2 */}
      <AyurvedaIntro {...abhyangaIntro} />
      
      {/* Section 3 - Mechanism with Image 3 */}
      <TreatmentMechanism {...abhyangaMechanism} />
      
      {/* Section 4 - Protocol with Image 4 */}
      <TreatmentProtocol {...abhyangaProtocol} />
      
      {/* Section 5 - Oils/Kashayams with Image 5 */}
      <TreatmentOils {...abhyangaOils} />
      
      {/* Section 6 - Applications with Image 1 */}
      <TreatmentApplications {...abhyangaApplications} />
      
      {/* Section 7 - Protocols with TreatmentPrograms */}
      <TreatmentPrograms {...abhyangaPrograms}
      buttonBg="#C9A55B"
      buttonText="Book Assessment"
      />
      
      {/* Section 8 - Home Healthcare with new UI */}
      <TreatmentHomeHealthcare {...abhyangaHomeHealthcare} />
      
      {/* Section 9 - Reviews with Image 5 (dark green background) */}
      <TreatmentReviews {...abhyangaReviews} />
      
      {/* Section 10 - FAQ */}
      <FAQ {...abhyangaFaqs} />
      
      {/* Section 11 - Location */}
      <TreatmentLocation {...abhyangaTreatmentLocation} />
      
      {/* Section 12 - Final CTA with Image 3 */}
      <FinalCTA {...abhyangaFinalCTA} />
      
      {/* Section 13 - Related Pages with Image 4 */}
      <RelatedPages {...abhyangaRelatedPages} />
    </>
  );
};

export default AbhyangaDubai;
