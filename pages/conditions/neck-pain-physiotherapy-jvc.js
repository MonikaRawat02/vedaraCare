import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import PhysiotherapySpecializations from '../../components/ayurveda/PhysiotherapySpecializations';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import { PostSurgeryTeam } from '../../components/ayurveda/PostSurgeryComponents';
import { NeckPainShouldYouSee, NeckPainPhases } from '../../components/ayurveda/NeckPainCustomSections';
import SportsPhysiotherapyModalities from '../../components/ayurveda/SportsPhysiotherapyModalities';
import SportsPhysiotherapyLocation from '../../components/ayurveda/SportsPhysiotherapyLocation';
// import HomePhysioSingleImageSection from '../../components/ayurveda/HomePhysioSingleImageSection';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import {
  neckPainPhysioHero,
  neckPainPhysioIntro,
  neckPainConditions,
  neckPainShouldYouSee,
  neckPainHowTreat,
  neckPainPhases,
  neckPainModalities,
  neckPainReviews,
  neckPainTeam,
  neckPainPricing,
  neckPainFaqs,
  neckPainLocation,
  neckPainCTA,
  neckPainRelatedPages,
  neckPainWhyEpidemic
} from '../../data/neckPainPhysioJvcData';

const NeckPainPhysioJvc = () => {
  const currentUrl = "https://vedaracare.ae/conditions/neck-pain-physiotherapy-jvc/";
  const publishedDate = "2024-05-01T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy"],
      "@id": `${currentUrl}#neck-pain-physio`,
      "name": "Vedara Care Neck Pain Physiotherapy",
      "alternateName": ["Vedara Neck Pain Physio JVC", "Vedara Care Cervical Physiotherapy"],
      "url": currentUrl,
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "Evidence-based physiotherapy for neck pain at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. DPT-qualified physiotherapists treating tech neck, chronic neck pain, whiplash, cervicogenic headaches, cervical spondylosis, cervical radiculopathy. Manual therapy, deep cervical flexor training, dry needling, postural correction. Walking distance from Circle Mall.",
      "telephone": "+971 4 567 8900",
      "priceRange": "AED 300 - AED 10,000",
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
        "longitude": "55.2072235"
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
        { "@type": "Place", "name": "Jumeirah Village Circle" },
        { "@type": "Place", "name": "Jumeirah Village Triangle" },
        { "@type": "Place", "name": "Al Barsha South" },
        { "@type": "Place", "name": "Dubai Sports City" },
        { "@type": "Place", "name": "Motor City" },
        { "@type": "Place", "name": "Arjan" },
        { "@type": "Place", "name": "Dubai Hills Estate" },
        { "@type": "City", "name": "Dubai" }
      ],
      "medicalSpecialty": [
        "Physiotherapy",
        "Physical Therapy",
        "Manual Therapy",
        "Cervical Spine Rehabilitation"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Neck Pain Physiotherapy" },
        { "@type": "MedicalProcedure", "name": "Cervical Manual Therapy" },
        { "@type": "MedicalProcedure", "name": "Deep Cervical Flexor Training" },
        { "@type": "MedicalProcedure", "name": "Dry Needling" },
        { "@type": "MedicalProcedure", "name": "Thoracic Spine Mobilisation" },
        { "@type": "MedicalProcedure", "name": "Postural Re-Education" },
        { "@type": "MedicalProcedure", "name": "Workplace Ergonomic Assessment" },
        { "@type": "MedicalProcedure", "name": "Whiplash Treatment" },
        { "@type": "MedicalProcedure", "name": "Cervicogenic Headache Treatment" },
        { "@type": "MedicalProcedure", "name": "Cervical Spondylosis Management" },
        { "@type": "MedicalProcedure", "name": "McKenzie Method" }
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Dubai Health Authority"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "name": "Cervicalgia (Neck Pain)",
          "code": { "@type": "MedicalCode", "code": "M54.2", "codingSystem": "ICD-10" },
          "possibleTreatment": [
            { "@type": "MedicalProcedure", "name": "Cervical Manual Therapy" },
            { "@type": "MedicalProcedure", "name": "Deep Cervical Flexor Training" },
            { "@type": "MedicalProcedure", "name": "Postural Correction" }
          ]
        },
        {
          "@type": "MedicalCondition",
          "name": "Cervical Spondylosis",
          "code": { "@type": "MedicalCode", "code": "M47.812", "codingSystem": "ICD-10" }
        },
        {
          "@type": "MedicalCondition",
          "name": "Whiplash",
          "alternateName": ["Cervical Sprain", "Whiplash Associated Disorder"],
          "code": { "@type": "MedicalCode", "code": "S13.4", "codingSystem": "ICD-10" }
        },
        {
          "@type": "MedicalCondition",
          "name": "Cervicogenic Headache",
          "code": { "@type": "MedicalCode", "code": "G44.86", "codingSystem": "ICD-10" }
        },
        {
          "@type": "MedicalCondition",
          "name": "Cervical Radiculopathy",
          "code": { "@type": "MedicalCode", "code": "M54.12", "codingSystem": "ICD-10" }
        },
        {
          "@type": "MedicalCondition",
          "name": "Forward Head Posture",
          "alternateName": ["Tech Neck", "Text Neck"]
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Neck Pain Physiotherapy Services in JVC, Dubai",
      "provider": { "@id": `${currentUrl}#neck-pain-physio` },
      "areaServed": [
        { "@type": "Place", "name": "Jumeirah Village Circle" },
        { "@type": "City", "name": "Dubai" }
      ],
      "serviceType": "Neck Pain Physiotherapy and Cervical Spine Rehabilitation",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Neck Pain Physiotherapy Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Initial Neck Pain Assessment",
            "priceCurrency": "AED",
            "price": "350",
            "description": "60-minute comprehensive neck pain assessment with DPT-qualified physiotherapist"
          },
          {
            "@type": "Offer",
            "name": "Same-Day Acute Neck Pain Assessment",
            "priceCurrency": "AED",
            "price": "420",
            "description": "Same-day appointment for severe acute neck pain"
          },
          {
            "@type": "Offer",
            "name": "Acute Neck Pain Package",
            "priceCurrency": "AED",
            "price": "1400",
            "description": "6-session structured programme for acute neck pain over 3-4 weeks"
          },
          {
            "@type": "Offer",
            "name": "Chronic Neck Pain Programme",
            "priceCurrency": "AED",
            "price": "2700",
            "description": "12-session structured programme for chronic neck pain over 8-12 weeks"
          },
          {
            "@type": "Offer",
            "name": "Extended Chronic Care",
            "priceCurrency": "AED",
            "price": "4200",
            "description": "20-session extended programme for complex chronic patterns"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/" },
        { "@type": "ListItem", "position": 3, "name": "Neck Pain Physiotherapy in JVC", "item": currentUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": neckPainFaqs.faqs.map(faq => ({
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
      "@type": "MedicalScholarlyArticle",
      "headline": "Physiotherapy for Neck Pain in JVC — Educational Treatment Guide",
      "image": "https://vedaracare.ae/images/neck-pain-physiotherapy-jvc-hero.jpg",
      "datePublished": publishedDate,
      "dateModified": modifiedDate,
      "author": {
        "@type": "Physician",
        "name": "Dr. Sarah Al-Mansoori, DPT"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic"
      },
      "about": [
        { "@type": "MedicalCondition", "name": "Neck Pain" },
        { "@type": "MedicalCondition", "name": "Cervical Spondylosis" },
        { "@type": "MedicalCondition", "name": "Whiplash" },
        { "@type": "MedicalCondition", "name": "Forward Head Posture" }
      ],
      "mainEntityOfPage": currentUrl
    }
  ];

  return (
    <>
      <Head>
        <title>Physiotherapy for Neck Pain in JVC | Evidence-Based Treatment | Vedara</title>
        <meta name="description" content="Understanding and treating neck pain at our JVC clinic, Dubai. DPT-qualified physiotherapists for tech neck, chronic neck pain, whiplash, cervicogenic headaches. Educational approach with evidence-based treatment. Walking distance from Circle Mall." />
        
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hreflang="en-AE" href={currentUrl} />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/conditions/neck-pain-physiotherapy-jvc/" />
        <link rel="alternate" hreflang="x-default" href={currentUrl} />

        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta property="og:title" content="Physiotherapy for Neck Pain in JVC — Understanding and Treatment | Vedara Care" />
        <meta property="og:description" content="DPT-qualified physiotherapists at our Jumeirah Village Circle clinic using evidence-based protocols for tech neck, chronic neck pain, whiplash, cervicogenic headaches, cervical spondylosis. Educational approach with thorough assessment and treatment. Insurance direct-billing." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/neck-pain-physiotherapy-jvc.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        
        <meta name="twitter:card" content="summary_large_image" />

        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

        <link rel="preload" as="image" href="https://vedaracare.ae/images/neck-pain-physiotherapy-jvc-hero.jpg" />
      </Head>

      <AyurvedaHero {...neckPainPhysioHero} />
      <AyurvedaIntro {...neckPainPhysioIntro} />
      
      <TreatmentMechanism
        bgColor={neckPainWhyEpidemic.bgColor}
        label={neckPainWhyEpidemic.label}
        title={neckPainWhyEpidemic.title}
        description={neckPainWhyEpidemic.description}
        content={neckPainWhyEpidemic.content}
        quote={neckPainWhyEpidemic.quote}
        image={neckPainWhyEpidemic.image}
        alt={neckPainWhyEpidemic.alt}
        imageLeft={neckPainWhyEpidemic.imageLeft}
        showStats={neckPainWhyEpidemic.showStats}
      />

      <PhysiotherapySpecializations 
        bgColor={neckPainConditions.bgColor}
        label={neckPainConditions.label}
        title={neckPainConditions.title}
        description={neckPainConditions.description}
        types={neckPainConditions.types}
        footer={neckPainConditions.footer}
      />

      <NeckPainShouldYouSee {...neckPainShouldYouSee} />

      <TreatmentMechanism 
        bgColor={neckPainHowTreat.bgColor}
        label={neckPainHowTreat.label}
        title={neckPainHowTreat.title}
        content={neckPainHowTreat.content}
        quote={neckPainHowTreat.quote}
        image={neckPainHowTreat.image}
        alt={neckPainHowTreat.alt}
      />

      <NeckPainPhases {...neckPainPhases} />

      <SportsPhysiotherapyModalities
        label={neckPainModalities.label}
        title={neckPainModalities.title}
        modalities={neckPainModalities.modalities}
      />

      <TreatmentReviews {...neckPainReviews} />

      <PostSurgeryTeam data={neckPainTeam} />

      <div className={`bg-white py-24 px-6 ${neckPainPricing.bgColor}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm tracking-widest uppercase mb-4" style={{ color: '#C9A84C' }}>
              {neckPainPricing.label}
            </div>
            <h2 className="text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26, 26, 26)' }}>
              {neckPainPricing.title}
            </h2>
          </div>

          <div className="bg-white rounded-lg border border-[#E5DFD3] overflow-hidden mb-12">
            {neckPainPricing.services.map((service, index) => (
              <div key={index} className={`flex items-center justify-between px-8 py-5 ${index % 2 === 1 ? 'bg-[#FAF8F5]' : 'bg-white'}`}>
                <p className="text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                  {service.name}
                </p>
                <p style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(201, 168, 76)' }}>
                  {service.price}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center mb-8" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.7', fontSize: '14px' }} dangerouslySetInnerHTML={{ __html: neckPainPricing.insuranceText }} />

          <div className="flex flex-wrap justify-center gap-3">
            {neckPainPricing.insurances && neckPainPricing.insurances.map((insurer, index) => (
              <span key={index} className="bg-[#FAF8F5] px-4 py-2 rounded-full text-xs border border-[#E5DFD3]" style={{ color: 'rgb(107, 107, 107)' }}>
                {insurer}
              </span>
            ))}
          </div>
        </div>
      </div>

      <FAQ {...neckPainFaqs} />

      <SportsPhysiotherapyLocation data={neckPainLocation} />

      <FinalCTA {...neckPainCTA} />

      <RelatedPages {...neckPainRelatedPages} />
    </>
  );
};

export default NeckPainPhysioJvc;
