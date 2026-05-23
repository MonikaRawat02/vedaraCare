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
      "name": "Ayurvedic Treatment in Dubai | Complete Guide | Vedara Care",
      "url": "https://vedaracare.ae/ayurveda-dubai/",
      "description": "A definitive guide to Ayurvedic treatment in Dubai by DHA-licensed BAMS doctors. Treatments, costs, insurance, how to choose a real clinic. Updated 2026.",
      "about": {"@type": "MedicalTherapy", "name": "Ayurveda"},
      "audience": {"@type": "PatientAudience"},
      "lastReviewed": "2026-05-23",
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. Priya Menon",
        "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Ayurveda in Dubai", "item": "https://vedaracare.ae/ayurveda-dubai/"}
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
        <meta property="og:title" content="Ayurvedic Treatment in Dubai | Complete Guide | Vedara Care" />
        <meta property="og:description" content="A definitive guide to Ayurvedic treatment in Dubai by DHA-licensed BAMS doctors. Treatments, costs, insurance, how to choose a real clinic." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/ayurveda-dubai-guide.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/ayurveda-dubai/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_AE" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        
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
