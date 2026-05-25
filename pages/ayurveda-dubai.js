import Head from 'next/head';
import AyurvedaHero from '../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../components/ayurveda/TreatmentMechanism';
import ClinicalApplications from '../components/ayurveda/ClinicalApplications';
import PracticalGuidance from '../components/ayurveda/PracticalGuidance';
import HubLocation from '../components/ayurveda/HubLocation';
import NextSteps from '../components/ayurveda/NextSteps';
import AboutVedara from '../components/ayurveda/AboutVedara';
import PricingSection from '../components/ayurveda/PricingSection';
import Therapies from '../components/ayurveda/Therapies';
import Reviews from '../components/home/Reviews';
import FAQ from '../components/home/FAQ';
import CTA from '../components/home/CTA';
import Journal from '../components/home/Journal';
import { 
  dubaiHubHero, 
  dubaiHubIntro,
  dubaiHubBasics,
  dubaiHubApplications,
  dubaiHubGuidance,
  dubaiHubLocationDetails,
  dubaiHubNextSteps,
  dubaiHubTherapies,
  dubaiHubReviews,
  dubaiHubFaqs,
  dubaiHubCTA,
  dubaiHubJournal
} from '../data/ayurvedaData';

const AyurvedaDubai = () => {
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": "https://vedaracare.ae/ayurveda-dubai/#webpage",
      "name": "Ayurvedic Treatment in Dubai",
      "url": "https://vedaracare.ae/ayurveda-dubai/",
      "headline": "Authentic Ayurveda in Dubai — what it is, who it is for, and where to find it.",
      "description": "A definitive guide to Ayurvedic treatment in Dubai by DHA-licensed BAMS doctors. Treatments, costs, insurance, and how to choose a real clinic.",
      "about": {
        "@type": "MedicalTherapy",
        "name": "Ayurveda",
        "sameAs": "https://en.wikipedia.org/wiki/Ayurveda"
      },
      "audience": {"@type": "PatientAudience"},
      "datePublished": "2026-05-25",
      "dateModified": "2026-05-25",
      "lastReviewed": "2026-05-25",
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. Priya Menon",
        "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
      },
      "author": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic",
        "@id": "https://vedaracare.ae/#organization"
      },
      "primaryImageOfPage": "https://vedaracare.ae/images/ayurveda-dubai-hero.jpg",
      "specialty": "Ayurveda",
      "isPartOf": {"@id":"https://vedaracare.ae/#website"}
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Ayurvedic Treatment in Dubai — A Complete Guide",
      "image": "https://vedaracare.ae/images/ayurveda-dubai-hero.jpg",
      "datePublished": "2026-05-25",
      "dateModified": "2026-05-25",
      "author": {
        "@type": "Physician",
        "name": "Dr. Priya Menon",
        "url": "https://vedaracare.ae/doctors/dr-priya-menon-ayurveda/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic",
        "logo": {"@type":"ImageObject","url":"https://vedaracare.ae/logo.png"}
      },
      "mainEntityOfPage": "https://vedaracare.ae/ayurveda-dubai/"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalTherapy",
      "name": "Ayurveda",
      "alternateName": ["Ayurvedic Medicine", "Ayurvedic Treatment"],
      "sameAs": [
        "https://en.wikipedia.org/wiki/Ayurveda",
        "https://www.nccih.nih.gov/health/ayurvedic-medicine-in-depth"
      ],
      "indication": [
        {"@type":"MedicalIndication","name":"Chronic back pain"},
        {"@type":"MedicalIndication","name":"PCOS"},
        {"@type":"MedicalIndication","name":"Migraine"},
        {"@type":"MedicalIndication","name":"Hair loss"},
        {"@type":"MedicalIndication","name":"Postnatal recovery"},
        {"@type":"MedicalIndication","name":"Stress and anxiety"},
        {"@type":"MedicalIndication","name":"Knee osteoarthritis"},
        {"@type":"MedicalIndication","name":"Frozen shoulder"},
        {"@type":"MedicalIndication","name":"IBS"},
        {"@type":"MedicalIndication","name":"Thyroid disorders"},
        {"@type":"MedicalIndication","name":"Type 2 diabetes"},
        {"@type":"MedicalIndication","name":"Eczema and psoriasis"}
      ],
      "relevantSpecialty": {"@type":"MedicalSpecialty","name":"Ayurveda"}
    },
    {
      "@context": "https://schema.org",
      "@type": ["MedicalClinic","LocalBusiness"],
      "@id": "https://vedaracare.ae/#organization",
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": "https://vedaracare.ae/logo.png",
      "medicalSpecialty": ["Ayurveda","PhysicalTherapy","Dermatology"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Building 123, Street 45A",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "telephone": "+971-XX-XXX-XXXX",
      "areaServed": [
        {"@type":"City","name":"Dubai"},
        {"@type":"Place","name":"United Arab Emirates"}
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "License",
        "name": "DHA Healthcare Facility License",
        "identifier": "[DHA License Number]"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Ayurvedic Treatment in Dubai", "item": "https://vedaracare.ae/ayurveda-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": dubaiHubFaqs.faqs.map(faq => ({
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
        <title>Ayurvedic Treatment in Dubai | Complete Guide | Vedara Care</title>
        <meta name="description" content="A definitive guide to Ayurvedic treatment in Dubai by DHA-licensed BAMS doctors. Treatments, costs, insurance, how to choose a real clinic. Updated 2026." />
        
        {/* Robots Directives */}
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Open Graph */}
        <meta property="og:title" content="Ayurvedic Treatment in Dubai — Complete 2026 Guide | Vedara Care" />
        <meta property="og:description" content="Authentic Ayurveda in Dubai: treatments, costs, insurance, how to choose a real DHA-licensed clinic. By BAMS-qualified physicians." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/ayurveda-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/ayurveda-dubai/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content="2026-05-25T09:00:00Z" />
        <meta property="article:modified_time" content="2026-05-25T09:00:00Z" />
        <meta property="article:author" content="Dr. Priya Menon" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayurvedic Treatment in Dubai — Complete 2026 Guide | Vedara Care" />
        <meta name="twitter:description" content="Authentic Ayurveda in Dubai: treatments, costs, insurance, how to choose a real DHA-licensed clinic. By BAMS-qualified physicians." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/ayurveda-dubai.jpg" />
        
        {/* Canonical & Language Tags */}
        <link rel="canonical" href="https://vedaracare.ae/ayurveda-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/ayurveda-dubai/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/ayurveda-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/ayurveda-dubai/" />

        {/* Schema Markup */}
        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <AyurvedaHero {...dubaiHubHero} />
      <AyurvedaIntro {...dubaiHubIntro} />
       <TreatmentMechanism {...dubaiHubBasics} />
      <Therapies {...dubaiHubTherapies} />
      <ClinicalApplications {...dubaiHubApplications} />
      <PracticalGuidance {...dubaiHubGuidance} />
      <PricingSection />
       <AboutVedara />
       <HubLocation {...dubaiHubLocationDetails} />
      <Reviews {...dubaiHubReviews} />
      <FAQ {...dubaiHubFaqs} />
      <NextSteps {...dubaiHubNextSteps} />
      <CTA {...dubaiHubCTA} />
      <Journal {...dubaiHubJournal} />
    </>
  );
};

export default AyurvedaDubai;
