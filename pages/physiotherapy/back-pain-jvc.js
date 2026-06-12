import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import PhysiotherapyTechniques from '../../components/ayurveda/PhysiotherapyTechniques';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  backPainPhysioHero,
  backPainPhysioIntro,
  backPainPhysioTechniques,
  backPainPhysioModalities,
  backPainPhysioReviews,
  backPainPhysioTeam,
  backPainPhysioFaqs,
  backPainPhysioLocation,
  backPainPhysioCTA,
  backPainPhysioRelatedPages
} from '../../data/backPainPhysioJvcData';

const BackPainPhysioJvc = () => {
  const currentDate = new Date().toISOString();
  
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy"],
      "@id": "https://vedaracare.ae/physiotherapy/back-pain-jvc/#physiotherapy",
      "name": "Vedara Care Physiotherapy Department - Back Pain",
      "url": "https://vedaracare.ae/physiotherapy/back-pain-jvc/",
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "DHA-licensed back pain physiotherapy at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. DPT-qualified physiotherapists providing evidence-based treatment for acute back pain, chronic lower back pain, sciatica, and related conditions.",
      "telephone": "+971 4 567 8900",
      "priceRange": "AED 350 - AED 8,000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Building 23, District 12",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.068346",
        "longitude": "55.207223"
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
        {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "Place", "name": "Jumeirah Village Triangle"},
        {"@type": "Place", "name": "Al Barsha South"},
        {"@type": "Place", "name": "Dubai Sports City"},
        {"@type": "Place", "name": "Motor City"},
        {"@type": "Place", "name": "Arjan"},
        {"@type": "Place", "name": "Dubai Hills Estate"},
        {"@type": "City", "name": "Dubai"}
      ],
      "medicalSpecialty": [
        "Back Pain",
        "Physiotherapy",
        "Physical Therapy"
      ],
      "isAcceptingNewPatients": true
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": "https://vedaracare.ae/physiotherapy/back-pain-jvc/#webpage",
      "name": "Back Pain Physiotherapy in JVC, Dubai",
      "url": "https://vedaracare.ae/physiotherapy/back-pain-jvc/",
      "about": {"@id": "https://vedaracare.ae/physiotherapy/back-pain-jvc/#physiotherapy"},
      "audience": {
        "@type": "PatientAudience",
        "geographicArea": {"@type": "Place", "name": "Dubai, United Arab Emirates"}
      },
      "lastReviewed": currentDate,
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. Sarah Mitchell",
        "hasCredential": "DPT, DHA-Licensed"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Physiotherapy", "item": "https://vedaracare.ae/physiotherapy-jvc/"},
        {"@type": "ListItem", "position": 3, "name": "Back Pain Physiotherapy JVC", "item": "https://vedaracare.ae/physiotherapy/back-pain-jvc/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": backPainPhysioFaqs.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://vedaracare.ae/#organization",
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": "https://vedaracare.ae/logo.png"
    }
  ];
  
  return (
    <>
      <Head>
        <title>Back Pain Physiotherapy in JVC, Dubai | DPT-Qualified | Vedara Care</title>
        <meta name="description" content="DHA-licensed back pain physiotherapy at our Jumeirah Village Circle clinic, Dubai. Evidence-based treatment for acute back pain, chronic lower back pain, sciatica, and related conditions. Same-week appointments." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        <meta property="og:title" content="Back Pain Physiotherapy in JVC Dubai | Vedara Care" />
        <meta property="og:description" content="DPT-qualified back pain physiotherapists at our Jumeirah Village Circle clinic. Evidence-based treatment for acute and chronic back pain, sciatica." />
        <meta property="og:image" content="https://vedaracare.ae/images/back-pain-physio-jvc.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/physiotherapy/back-pain-jvc/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://vedaracare.ae/physiotherapy/back-pain-jvc/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/physiotherapy/back-pain-jvc/" />
        
        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
          />
        ))}
      </Head>

      <div className="back-pain-physio-content">
        <AyurvedaHero {...backPainPhysioHero} />
        <AyurvedaIntro {...backPainPhysioIntro} />
        <PhysiotherapyTechniques {...backPainPhysioTechniques} />
        <section className="bg-white" style={{ padding: '96px 24px' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgb(201, 168, 76)' }}>
                <span className="inline-block w-6 h-px mr-2 align-middle" style={{ background: 'rgb(201, 168, 76)' }}></span>
                {backPainPhysioModalities.label}
                <span className="inline-block w-6 h-px ml-2 align-middle" style={{ background: 'rgb(201, 168, 76)' }}></span>
              </p>
              <h2 className="text-3xl sm:text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500, color: 'rgb(26, 26, 26)' }}>
                {backPainPhysioModalities.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {backPainPhysioModalities.modalities.map((modality, index) => (
                <div key={index} className="rounded-lg p-7 transition-all hover:shadow-md" style={{ background: 'rgb(250, 247, 242)' }}>
                  <p className="text-4xl mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(201, 168, 76)', fontWeight: 300 }}>
                    {modality.number}
                  </p>
                  <h4 className="text-lg mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500, color: 'rgb(26, 26, 26)' }}>
                    {modality.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgb(107, 107, 107)', lineHeight: 1.7 }}>
                    {modality.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <TreatmentReviews {...backPainPhysioReviews} />
        <PhysiotherapyTeam {...backPainPhysioTeam} />
        <FAQ {...backPainPhysioFaqs} />
        <TreatmentLocation {...backPainPhysioLocation} />
        <FinalCTA {...backPainPhysioCTA} />
        <RelatedPages {...backPainPhysioRelatedPages} />
      </div>
    </>
  );
};

export default BackPainPhysioJvc;