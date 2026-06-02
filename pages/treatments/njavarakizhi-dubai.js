import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import TreatmentProtocol from '../../components/ayurveda/TreatmentProtocol';
import TreatmentOils from '../../components/ayurveda/TreatmentOils';
import TreatmentApplications from '../../components/ayurveda/TreatmentApplications';
import TreatmentBenefits from '../../components/ayurveda/TreatmentBenefits';
import TreatmentHomeHealthcare from '../../components/ayurveda/TreatmentHomeHealthcare';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import { 
  njavarakizhiHero, 
  njavarakizhiIntro, 
  njavarakizhiMechanism, 
  njavarakizhiProtocol, 
  njavarakizhiOils,
  njavarakizhiApplications,
  njavarakizhiBenefits,
  njavarakizhiHomeHealthcare,
  njavarakizhiPrograms,
  njavarakizhiReviews,
  njavarakizhiFaqs,
  njavarakizhiTreatmentLocation,
  njavarakizhiFinalCTA,
  njavarakizhiRelatedPages
} from '../../data/njavarakizhiData';

const NjavarakizhiDubai = () => {
  const currentDate = new Date().toISOString();
  
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "@id": "https://vedaracare.ae/treatments/njavarakizhi-dubai/#procedure",
      "name": "Njavarakizhi",
      "alternateName": ["Navarakizhi", "Shashtika Shali Pinda Sweda", "Rice Bolus Massage", "Ayurvedic Rice Pudding Massage", "Njavara Kizhi"],
      "description": "Njavarakizhi is a specialised Ayurvedic restorative therapy in which cloth boluses filled with Shashtika Shali (Njavara) rice cooked in herbal medicated milk are used to massage the body in synchronised strokes for 60 to 75 minutes. Performed at Vedara Care Polyclinic in Jumeirah Village Circle, Dubai for muscle wasting, post-illness recovery, neurological rehabilitation, sarcopenia, and rheumatoid conditions.",
      "url": "https://vedaracare.ae/treatments/njavarakizhi-dubai/",
      "image": "https://vedaracare.ae/images/njavarakizhi-dubai-hero.jpg",
      "procedureType": "Ayurveda",
      "bodyLocation": "Whole body",
      "preparation": "BAMS doctor clinical assessment. Rice and herbal milk preparation begins 90 minutes before patient arrival.",
      "followup": "10-15 minute recovery period on the droni. Residual rice and milk left on skin for several hours. Avoid showering for 2 hours. Remain in warm environment for the rest of the day.",
      "indication": [
        {"@type": "MedicalIndication", "name": "Muscle wasting"},
        {"@type": "MedicalIndication", "name": "Sarcopenia"},
        {"@type": "MedicalIndication", "name": "Sciatica"},
        {"@type": "MedicalIndication", "name": "Post-stroke rehabilitation"},
        {"@type": "MedicalIndication", "name": "Bell's palsy"},
        {"@type": "MedicalIndication", "name": "Rheumatoid arthritis"},
        {"@type": "MedicalIndication", "name": "Pakshaghata"},
        {"@type": "MedicalIndication", "name": "Postpartum weakness"},
        {"@type": "MedicalIndication", "name": "Post-immobilisation muscle recovery"}
      ],
      "contraindication": [
        {"@type": "MedicalContraindication", "name": "Pregnancy"},
        {"@type": "MedicalContraindication", "name": "Acute infections or active inflammation"},
        {"@type": "MedicalContraindication", "name": "Severe cardiac conditions without clearance"},
        {"@type": "MedicalContraindication", "name": "Active skin infections"}
      ],
      "sameAs": "https://en.wikipedia.org/wiki/Panchakarma",
      "performer": {"@id": "https://vedaracare.ae/#organization"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Shashtika Shali Pinda Sweda"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalTherapy",
      "name": "Ayurveda",
      "sameAs": "https://en.wikipedia.org/wiki/Ayurveda"
    },
    {
      "@context": "https://schema.org",
      "@type": "Substance",
      "name": "Njavara rice",
      "alternateName": "Shashtika Shali"
    },
    {
      "@context": "https://schema.org",
      "@type": "Substance",
      "name": "Dashamoola"
    },
    {
      "@context": "https://schema.org",
      "@type": "Substance",
      "name": "Bala",
      "alternateName": "Sida cordifolia"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalSubstance",
      "name": "Mahanarayana Taila"
    },
    {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "Sushruta Samhita"
    },
    {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "Charaka Samhita"
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
      "@type": "MedicalProcedure",
      "name": "Abhyanga"
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Jumeirah Village Circle"
    },
    {
      "@context": "https://schema.org",
      "@type": "EducationalCredential",
      "name": "BAMS"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Njavarakizhi Programmes at Vedara Care",
      "provider": {"@id": "https://vedaracare.ae/#organization"},
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "serviceType": "Ayurvedic Restorative Therapy",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Njavarakizhi Programmes",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Njavarakizhi Trial Course (7 sessions)",
            "priceCurrency": "AED",
            "price": "2950",
            "description": "Seven-session introductory Njavarakizhi course for first-time patients or mild convalescence"
          },
          {
            "@type": "Offer",
            "name": "Njavarakizhi Clinical Restorative Course (14 sessions)",
            "priceCurrency": "AED",
            "price": "5600",
            "description": "Fourteen-session clinical course for post-illness recovery, sarcopenia, and rheumatoid conditions"
          },
          {
            "@type": "Offer",
            "name": "Njavarakizhi Intensive Restorative Programme (21-30 sessions)",
            "priceCurrency": "AED",
            "price": "7800",
            "description": "Intensive programme for post-stroke rehabilitation and severe muscle wasting"
          },
          {
            "@type": "Offer",
            "name": "Home Njavarakizhi Session (Dubai-wide)",
            "priceCurrency": "AED",
            "price": "880",
            "description": "Home-delivered Njavarakizhi with freshly prepared Njavara rice and two trained therapists"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Njavarakizhi Treatment in Dubai",
      "url": "https://vedaracare.ae/treatments/njavarakizhi-dubai/",
      "about": {"@id": "https://vedaracare.ae/treatments/njavarakizhi-dubai/#procedure"},
      "audience": {"@type": "PatientAudience"},
      "lastReviewed": currentDate,
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. Priya Nair",
        "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
      },
      "primaryImageOfPage": "https://vedaracare.ae/images/njavarakizhi-dubai-hero.jpg"
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Njavarakizhi Treatment in Dubai — A Complete Clinical Guide",
      "image": "https://vedaracare.ae/images/njavarakizhi-dubai-hero.jpg",
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
      "mainEntityOfPage": "https://vedaracare.ae/treatments/njavarakizhi-dubai/"
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
        {"@type": "ListItem", "position": 3, "name": "Njavarakizhi in Dubai", "item": "https://vedaracare.ae/treatments/njavarakizhi-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": njavarakizhiFaqs.faqs.map((faq) => ({
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
        <title>Njavarakizhi in Dubai | Classical Rice Bolus Therapy | Vedara Care</title>
        <meta name="description" content="Authentic Njavarakizhi at our DHA-licensed Dubai clinic — classical rice bolus therapy for muscle wasting, post-illness recovery & neurological rehabilitation." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Njavarakizhi in Dubai — Classical Ayurvedic Rice Bolus Therapy" />
        <meta property="og:description" content="Doctor-prescribed Njavarakizhi at our DHA-licensed JVC clinic. For muscle wasting, post-illness recovery, and neurological rehabilitation. From AED 480." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/njavarakizhi-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/treatments/njavarakizhi-dubai/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content="2026-05-01" />
        <meta property="article:modified_time" content={currentDate} />
        <meta property="article:author" content="Dr. Priya Nair" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Canonical & Hreflang */}
        <link rel="canonical" href="https://vedaracare.ae/treatments/njavarakizhi-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/treatments/njavarakizhi-dubai/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/treatments/njavarakizhi-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/treatments/njavarakizhi-dubai/" />

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
      <AyurvedaHero {...njavarakizhiHero} />
      
      {/* Section 2 - Intro with Image 2 */}
      <AyurvedaIntro {...njavarakizhiIntro} />
      
      {/* 
      <TreatmentProtocol {...njavarakizhiProtocol} />Section 3 - Mechanism with Image 3 */}
      <TreatmentMechanism {...njavarakizhiMechanism} />
      
      {/* Section 4 - Protocol with Image 4 */}
     <TreatmentProtocol {...njavarakizhiProtocol} />
      
      
      {/* Section 5 - Oils/Kashayams with Image 5 */}
      <TreatmentOils {...njavarakizhiOils} />
      
      {/* Section 6 - Applications with Image 1 */}
      <TreatmentApplications {...njavarakizhiApplications} />
      
      {/* Section 7 - Benefits (PATIENTS WHO BENEFIT MOST) with new UI */}
      <TreatmentBenefits {...njavarakizhiBenefits} />
      
      {/* Section 8 - Protocols with TreatmentPrograms */}
      <TreatmentPrograms {...njavarakizhiPrograms} 
     
      buttonBg="#C9A55B"
      buttonText="Book Assessment"
      />
      
      {/* Section 9 - Home Healthcare with new UI */}
      <TreatmentHomeHealthcare {...njavarakizhiHomeHealthcare} />
      
      {/* Section 10 - Reviews with Image 5 (dark green background) */}
      <TreatmentReviews {...njavarakizhiReviews} />
      
      {/* Section 11 - FAQ */}
      <FAQ {...njavarakizhiFaqs} />
      
      {/* Section 12 - Location */}
      <TreatmentLocation {...njavarakizhiTreatmentLocation} />
      
      {/* Section 13 - Final CTA with Image 3 */}
      <FinalCTA {...njavarakizhiFinalCTA} />
      
      {/* Section 14 - Related Pages with Image 4 */}
      <RelatedPages {...njavarakizhiRelatedPages} />
    </>
  );
};

export default NjavarakizhiDubai;
