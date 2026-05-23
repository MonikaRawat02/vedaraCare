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
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalWebPage", "MedicalProcedure"],
      "name": "Kativasti in Dubai | Ayurvedic Treatment for Lower Back Pain",
      "url": "https://vedaracare.ae/treatments/kativasti-dubai/",
      "description": "Kativasti — classical Ayurvedic oil therapy for lower back pain, sciatica, and lumbar disc conditions at our DHA-licensed clinic in JVC, Dubai.",
      "medicalSpecialty": "Ayurveda",
      "about": {
        "@type": "MedicalTherapy",
        "name": "Kativasti"
      },
      "audience": {"@type": "PatientAudience"},
      "lastReviewed": "2026-05-22",
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. Priya Nair",
        "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Ayurvedic Treatment in Dubai", "item": "https://vedaracare.ae/ayurveda-clinic-jvc/"},
        {"@type": "ListItem", "position": 3, "name": "Kativasti in Dubai", "item": "https://vedaracare.ae/treatments/kativasti-dubai/"}
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Kativasti in Dubai | Ayurvedic Lower Back Pain Treatment | Vedara Care</title>
        <meta name="description" content="Kativasti — classical Ayurvedic oil therapy for lower back pain, sciatica, and lumbar disc conditions at our DHA-licensed clinic in JVC, Dubai. Book today." />
        
        {/* Open Graph */}
        <meta property="og:title" content="Kativasti in Dubai | Ayurvedic Treatment | Vedara Care" />
        <meta property="og:description" content="Classical Kativasti therapy for lower back pain, sciatica, and lumbar disc issues at our JVC Ayurveda clinic." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/kativasti-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/treatments/kativasti-dubai/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_AE" />
        
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
