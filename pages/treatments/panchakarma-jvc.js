import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import Reviews from '../../components/home/Reviews';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import FAQ from '../../components/home/FAQ';
import CTA from '../../components/home/CTA';
import { 
  panchakarmaJVCHero, 
  panchakarmaJVCIntro,
  panchakarmaJVCPrograms,
  panchakarmaJVCReviews,
  panchakarmaJVCFaqs,
  panchakarmaJVCLocation,
  panchakarmaJVCCTA,
  panchakarmaJVCRelatedPages
} from '../../data/treatmentData';

const PanchakarmaJVC = () => {
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Panchakarma in JVC, Dubai | DHA-Licensed Clinic | Vedara Care",
      "url": "https://vedaracare.ae/treatments/panchakarma-jvc/",
      "description": "DHA-licensed Panchakarma at our Jumeirah Village Circle clinic — next to Circle Mall. 7, 14 & 21-day classical programmes. Free patient parking. Book today.",
      "about": {"@type": "MedicalTherapy", "name": "Panchakarma"},
      "audience": {"@type": "PatientAudience"},
      "lastReviewed": "2026-05-23",
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. Priya Sharma",
        "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://vedaracare.ae/treatments/"},
        {"@type": "ListItem", "position": 3, "name": "Panchakarma in JVC", "item": "https://vedaracare.ae/treatments/panchakarma-jvc/"}
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Panchakarma in JVC, Dubai | DHA-Licensed Clinic | Vedara Care</title>
        <meta name="description" content="DHA-licensed Panchakarma at our Jumeirah Village Circle clinic — next to Circle Mall. 7, 14 & 21-day classical programmes. Free patient parking. Book today." />
        <link rel="canonical" href="https://vedaracare.ae/treatments/panchakarma-jvc/" />
        
        {/* Schema Markup */}
        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <AyurvedaHero {...panchakarmaJVCHero} />
      <AyurvedaIntro {...panchakarmaJVCIntro} />
      <TreatmentPrograms {...panchakarmaJVCPrograms} />
      <Reviews {...panchakarmaJVCReviews} />
      <FAQ {...panchakarmaJVCFaqs} />
      <TreatmentLocation {...panchakarmaJVCLocation} />
      <CTA {...panchakarmaJVCCTA} />
       <RelatedPages {...panchakarmaJVCRelatedPages} />
    </>
  );
};

export default PanchakarmaJVC;
