import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import TreatmentProtocol from '../../components/ayurveda/TreatmentProtocol';
import TreatmentOils from '../../components/ayurveda/TreatmentOils';
import TreatmentApplications from '../../components/ayurveda/TreatmentApplications';
import TreatmentIntegration from '../../components/ayurveda/TreatmentIntegration';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import { 
  kativastiHero, 
  kativastiIntro, 
  kativastiMechanism, 
  kativastiProtocol, 
  kativastiOils,
  kativastiApplications,
  kativastiIntegration,
  kativastiPrograms,
  kativastiFinalCTA,
  kativastiRelatedPages,
  kativastiReviews,
  kativastiFaqs,
  kativastiTreatmentLocation
} from '../../data/treatmentData';

const KativastiDubai = () => {
  const currentDate = new Date().toISOString();
  
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "@id": "https://vedaracare.ae/treatments/kativasti-dubai/#procedure",
      "name": "Kativasti",
      "alternateName": ["Kati Vasti", "Kati Basti", "Lumbar Oil Reservoir Therapy", "Ayurvedic Lower Back Therapy"],
      "description": "Kativasti is a classical Ayurvedic localised therapy in which warm medicated oil is contained over the lumbar spine in a custom-shaped wheat-flour dough reservoir for 30 to 45 minutes per session. Used for chronic mechanical lower back pain, sciatica, lumbar disc conditions, and spinal stiffness. Performed at Vedara Care Polyclinic in Jumeirah Village Circle, Dubai.",
      "url": "https://vedaracare.ae/treatments/kativasti-dubai/",
      "image": "https://vedaracare.ae/images/kativasti-dubai-hero.jpg",
      "procedureType": "Ayurveda",
      "bodyLocation": ["Lumbar spine", "Sacroiliac joint", "Paraspinal muscles"],
      "preparation": "BAMS doctor clinical assessment including pain scoring, range of motion, and palpation. Selection of appropriate medicated oil based on condition.",
      "followup": "5-10 minute gentle lumbar massage after oil removal. 5-minute rest period. Avoid showering for 3 hours. Avoid cold environments and heavy exertion for the rest of the day.",
      "indication": [
        {"@type": "MedicalIndication", "name": "Chronic mechanical lower back pain"},
        {"@type": "MedicalIndication", "name": "Sciatica"},
        {"@type": "MedicalIndication", "name": "Lumbar disc bulge (non-surgical)"},
        {"@type": "MedicalIndication", "name": "Spondylosis"},
        {"@type": "MedicalIndication", "name": "Spondylolisthesis"},
        {"@type": "MedicalIndication", "name": "Sacroiliac joint dysfunction"},
        {"@type": "MedicalIndication", "name": "Post-exercise lumbar stiffness"},
        {"@type": "MedicalIndication", "name": "Postpartum back pain"},
        {"@type": "MedicalIndication", "name": "Chronic lumbar muscle spasm"}
      ],
      "contraindication": [
        {"@type": "MedicalContraindication", "name": "Acute disc herniation with neurological signs"},
        {"@type": "MedicalContraindication", "name": "Cauda equina symptoms"},
        {"@type": "MedicalContraindication", "name": "Suspected spinal infection or tumour"},
        {"@type": "MedicalContraindication", "name": "Recent spinal surgery without clearance"},
        {"@type": "MedicalContraindication", "name": "Pregnancy"},
        {"@type": "MedicalContraindication", "name": "Open skin lesions over lumbar region"}
      ],
      "sameAs": "https://en.wikipedia.org/wiki/Panchakarma",
      "performer": {"@id": "https://vedaracare.ae/#organization"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalTherapy",
      "@id": "https://vedaracare.ae/treatments/kativasti-dubai/#ayurveda",
      "name": "Ayurveda",
      "sameAs": "https://en.wikipedia.org/wiki/Ayurveda"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalSubstance",
      "name": "Mahanarayana Taila"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalSubstance",
      "name": "Sahacharadi Taila"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalSubstance",
      "name": "Pinda Taila"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalSubstance",
      "name": "Murivenna"
    },
    {
      "@context": "https://schema.org",
      "@type": "Substance",
      "name": "Bala",
      "alternateName": "Sida cordifolia"
    },
    {
      "@context": "https://schema.org",
      "@type": "Substance",
      "name": "Sahachara",
      "alternateName": "Barleria prionitis"
    },
    {
      "@context": "https://schema.org",
      "@type": "Substance",
      "name": "Ashwagandha"
    },
    {
      "@context": "https://schema.org",
      "@type": "Substance",
      "name": "Dashamoola"
    },
    {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "Sushruta Samhita"
    },
    {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "Sahasrayoga"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Patra Pinda Sweda"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Sutika Paricharya"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Kativasti Programmes at Vedara Care",
      "provider": {"@id": "https://vedaracare.ae/#organization"},
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "serviceType": "Ayurvedic Lumbar Therapy",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Kativasti Programmes",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Kativasti Acute / Short Course (5-7 sessions)",
            "priceCurrency": "AED",
            "price": "2850",
            "description": "Short course for acute lumbar pain or post-injury recovery"
          },
          {
            "@type": "Offer",
            "name": "Kativasti Chronic Pain Course (14 sessions)",
            "priceCurrency": "AED",
            "price": "5400",
            "description": "Standard course for chronic mechanical back pain over 4-6 weeks"
          },
          {
            "@type": "Offer",
            "name": "Integrated Spine Care Programme",
            "priceCurrency": "AED",
            "price": "8900",
            "description": "Combined Kativasti, Abhyanga, and physiotherapy programme for complex spine conditions"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Kativasti Treatment in Dubai",
      "url": "https://vedaracare.ae/treatments/kativasti-dubai/",
      "about": {"@id": "https://vedaracare.ae/treatments/kativasti-dubai/#procedure"},
      "audience": {"@type": "PatientAudience"},
      "lastReviewed": currentDate,
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. Priya Nair",
        "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
      },
      "primaryImageOfPage": "https://vedaracare.ae/images/kativasti-dubai-hero.jpg"
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Kativasti Treatment in Dubai — A Complete Clinical Guide",
      "image": "https://vedaracare.ae/images/kativasti-dubai-hero.jpg",
      "datePublished": "2026-05-01",
      "dateModified": currentDate,
      "author": {
        "@type": "Physician",
        "name": "Dr. Priya Nair",
        "url": "https://vedaracare.ae/doctors/dr-priya-nair/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic",
        "logo": {"@type": "ImageObject", "url": "https://vedaracare.ae/logo.png"}
      },
      "mainEntityOfPage": "https://vedaracare.ae/treatments/kativasti-dubai/"
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
        {"@type": "ListItem", "position": 3, "name": "Kativasti Treatment in Dubai", "item": "https://vedaracare.ae/treatments/kativasti-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": kativastiFaqs.faqs.map((faq) => ({
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
        <title>Kativasti Treatment in Dubai | Ayurveda for Back Pain | Vedara Care</title>
        <meta name="description" content="Authentic Kativasti at our DHA-licensed Dubai clinic — targeted warm-oil therapy for chronic back pain, sciatica &amp; lumbar disc issues. Integrated with physiotherapy." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Kativasti in Dubai — Targeted Ayurvedic Treatment for Chronic Back Pain" />
        <meta property="og:description" content="Doctor-prescribed Kativasti at our DHA-licensed JVC clinic. For chronic back pain, sciatica, and lumbar disc conditions. Integrated with physiotherapy." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/kativasti-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/treatments/kativasti-dubai/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content="2026-05-01" />
        <meta property="article:modified_time" content={currentDate} />
        <meta property="article:author" content="Dr. Priya Nair" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Canonical & Hreflang */}
        <link rel="canonical" href="https://vedaracare.ae/treatments/kativasti-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/treatments/kativasti-dubai/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/treatments/kativasti-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/treatments/kativasti-dubai/" />

        {/* Schema Markup */}
        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <AyurvedaHero {...kativastiHero} imageContainerClassName={kativastiHero.imageContainerClassName} />
      <AyurvedaIntro {...kativastiIntro} />
      <TreatmentMechanism {...kativastiMechanism} />
      <TreatmentProtocol {...kativastiProtocol} />
      <TreatmentOils {...kativastiOils} />
      <TreatmentApplications {...kativastiApplications} />
      <TreatmentIntegration {...kativastiIntegration} />
      <TreatmentPrograms {...kativastiPrograms} />
      
      <TreatmentReviews {...kativastiReviews} />
      <FAQ {...kativastiFaqs} />
      <TreatmentLocation {...kativastiTreatmentLocation} />
      <FinalCTA {...kativastiFinalCTA} />
      <RelatedPages {...kativastiRelatedPages} />
    </>
  );
};

export default KativastiDubai;
