import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import PhysiotherapyMechanism from '../../components/ayurveda/PhysiotherapyMechanism';
import ArthritisTypes from '../../components/ayurveda/ArthritisTypes';
import TreatmentProtocol from '../../components/ayurveda/Protocols';
import PediatricPhysiotherapyPricing from '../../components/ayurveda/PediatricPhysiotherapyPricing';
import PostnatalLocation from '../../components/ayurveda/PostnatalLocation';
import {
  HomePhysiotherapy,
  PostSurgeryTeam,
  InsuranceCoverage,
} from '../../components/ayurveda/PostSurgeryComponents';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  neurologicalDubaiHero,
  neurologicalDubaiIntro,
  neurologicalDubaiMechanism,
  neurologicalConditionsData,
  neurologicalPhasesData,
  neurologicalHomePhysiotherapyData,
  neurologicalDubaiMechanism2,
  neurologicalPricingData,
  neurologicalDubaiReviews,
  neurologicalTeamData,
  neurologicalInsuranceCoverageData,
  neurologicalDubaiFAQData,
  neurologicalDubaiFinalCTA,
  neurologicalDubaiRelatedPages,
  neurologicalDubaiLocationData
} from '../../data/neurologicalDubaiData';

const NeurologicalDubai = () => {
  const currentDate = new Date().toISOString();
  
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy"],
      "@id": "https://vedaracare.ae/physiotherapy/neurological-dubai/#neurological",
      "name": "Vedara Care Neurological Physiotherapy",
      "alternateName": ["Vedara Neuro Physio Dubai", "Vedara Neurological Rehabilitation JVC"],
      "url": "https://vedaracare.ae/physiotherapy/neurological-dubai/",
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "DHA-licensed neurological physiotherapy at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. Specialised long-term care for stroke recovery, Parkinson's disease, multiple sclerosis, traumatic brain injury, spinal cord injury, motor neurone disease, and other neurological conditions. Home physiotherapy across Dubai. Neurologist-coordinated care.",
      "telephone": "+971 4 XXX XXXX",
      "priceRange": "AED 400 - AED 25,000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Vedara Care Polyclinic, Jumeirah Village Circle",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.0607",
        "longitude": "55.2078"
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
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "Place", "name": "Jumeirah Village Triangle"},
        {"@type": "Place", "name": "Al Barsha South"},
        {"@type": "Place", "name": "Dubai Sports City"},
        {"@type": "Place", "name": "Motor City"},
        {"@type": "Place", "name": "Arjan"},
        {"@type": "Place", "name": "Dubai Hills Estate"},
        {"@type": "Place", "name": "Dubai Marina"},
        {"@type": "Place", "name": "Downtown Dubai"},
        {"@type": "Place", "name": "Palm Jumeirah"},
        {"@type": "Place", "name": "Mirdif"},
        {"@type": "Place", "name": "Circle Mall"},
        {"@type": "Place", "name": "FIVE Jumeirah Village"},
        {"@type": "Place", "name": "JSS Private School"}
      ],
      "medicalSpecialty": [
        "Neurological Physiotherapy",
        "Neurorehabilitation",
        "Physical Therapy",
        "Rehabilitation Medicine"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Stroke Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Parkinson's Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "LSVT-BIG Programme"},
        {"@type": "MedicalProcedure", "name": "Multiple Sclerosis Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Traumatic Brain Injury Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Spinal Cord Injury Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Motor Neurone Disease Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Peripheral Neuropathy Treatment"},
        {"@type": "MedicalProcedure", "name": "Home Neurological Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Gait Training"},
        {"@type": "MedicalProcedure", "name": "Falls Prevention"},
        {"@type": "MedicalProcedure", "name": "Constraint-Induced Movement Therapy"},
        {"@type": "MedicalProcedure", "name": "Task-Specific Training"},
        {"@type": "MedicalProcedure", "name": "Neurodynamic Mobilisation"},
        {"@type": "MedicalProcedure", "name": "Functional Electrical Stimulation"}
      ],
      "memberOf": {
        "@id": "https://vedaracare.ae/#dha"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "75",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "name": "Cerebrovascular Accident (Stroke)",
          "alternateName": ["CVA", "Stroke"],
          "code": {"@type": "MedicalCode", "code": "I63", "codingSystem": "ICD-10"},
          "possibleTreatment": [
            {"@type": "MedicalProcedure", "name": "Stroke Rehabilitation Physiotherapy"},
            {"@type": "MedicalProcedure", "name": "Constraint-Induced Movement Therapy"},
            {"@type": "MedicalProcedure", "name": "Gait Training"}
          ],
          "possibleComplication": [
            {"@type": "MedicalSymptom", "name": "Hemiparesis"},
            {"@type": "MedicalSymptom", "name": "Ataxia"}
          ]
        },
        {
          "@type": "MedicalCondition",
          "name": "Parkinson's Disease",
          "code": {"@type": "MedicalCode", "code": "G20", "codingSystem": "ICD-10"},
          "possibleTreatment": [
            {"@type": "MedicalProcedure", "name": "LSVT-BIG Programme"},
            {"@type": "MedicalProcedure", "name": "Parkinson's Physiotherapy"}
          ],
          "possibleComplication": [
            {"@type": "MedicalSymptom", "name": "Bradykinesia"}
          ]
        },
        {
          "@type": "MedicalCondition",
          "name": "Multiple Sclerosis",
          "alternateName": ["MS"],
          "code": {"@type": "MedicalCode", "code": "G35", "codingSystem": "ICD-10"},
          "possibleComplication": [
            {"@type": "MedicalSymptom", "name": "Ataxia"},
            {"@type": "MedicalSymptom", "name": "Spasticity"}
          ]
        },
        {
          "@type": "MedicalCondition",
          "name": "Traumatic Brain Injury",
          "alternateName": ["TBI"],
          "code": {"@type": "MedicalCode", "code": "S06", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Spinal Cord Injury",
          "alternateName": ["SCI"],
          "code": {"@type": "MedicalCode", "code": "S14", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Motor Neurone Disease",
          "alternateName": ["MND", "ALS", "Amyotrophic Lateral Sclerosis"],
          "code": {"@type": "MedicalCode", "code": "G12.2", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Peripheral Neuropathy",
          "code": {"@type": "MedicalCode", "code": "G62", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Bell's Palsy",
          "code": {"@type": "MedicalCode", "code": "G51.0", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Guillain-Barré Syndrome",
          "alternateName": ["GBS"],
          "code": {"@type": "MedicalCode", "code": "G61.0", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Functional Neurological Disorder",
          "alternateName": ["FND"],
          "code": {"@type": "MedicalCode", "code": "F44.6", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Cerebral Palsy",
          "code": {"@type": "MedicalCode", "code": "G80", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalSymptom",
          "name": "Hemiparesis"
        },
        {
          "@type": "MedicalSymptom",
          "name": "Bradykinesia"
        },
        {
          "@type": "MedicalSymptom",
          "name": "Spasticity"
        },
        {
          "@type": "MedicalSymptom",
          "name": "Ataxia"
        },
        {
          "@type": "MedicalAssessment",
          "name": "Berg Balance Scale"
        },
        {
          "@type": "MedicalAssessment",
          "name": "Tinetti Test"
        },
        {
          "@type": "MedicalAssessment",
          "name": "Functional Independence Measure"
        },
        {
          "@type": "MedicalAssessment",
          "name": "Timed Up and Go"
        },
        {
          "@type": "MedicalAssessment",
          "name": "Modified Ashworth Scale"
        },
        {
          "@type": "MedicalAssessment",
          "name": "Fugl-Meyer Assessment"
        },
        {
          "@type": "MedicalConcept",
          "name": "Neuroplasticity"
        },
        {
          "@id": "https://vedaracare.ae/#dha",
          "@type": "GovernmentOrganization",
          "name": "Dubai Health Authority",
          "alternateName": ["DHA"]
        },
        {
          "@type": "Organization",
          "name": "Daman"
        },
        {
          "@type": "Organization",
          "name": "AXA"
        },
        {
          "@type": "Organization",
          "name": "Allianz"
        },
        {
          "@type": "Organization",
          "name": "Oman Insurance"
        },
        {
          "@type": "Organization",
          "name": "Now Health"
        },
        {
          "@type": "Organization",
          "name": "Bupa"
        },
        {
          "@type": "Organization",
          "name": "MetLife"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Neurological Physiotherapy Services in Dubai",
      "provider": {"@id": "https://vedaracare.ae/physiotherapy/neurological-dubai/#neurological"},
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "serviceType": "Neurological Physiotherapy and Neurorehabilitation",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Neurological Physiotherapy Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Initial Neurological Assessment (Clinic)",
            "priceCurrency": "AED",
            "price": "450",
            "description": "60-75 minute comprehensive assessment with neurological specialist"
          },
          {
            "@type": "Offer",
            "name": "Initial Neurological Assessment (Home)",
            "priceCurrency": "AED",
            "price": "550",
            "description": "75-minute home assessment for patients with mobility limitations"
          },
          {
            "@type": "Offer",
            "name": "LSVT-BIG Programme",
            "priceCurrency": "AED",
            "price": "5200",
            "description": "Evidence-based 16-session programme over 4 weeks for Parkinson's disease"
          },
          {
            "@type": "Offer",
            "name": "Post-Stroke Rehabilitation Programme",
            "priceCurrency": "AED",
            "price": "8500",
            "description": "Structured 24-session programme over 3 months for post-stroke recovery"
          },
          {
            "@type": "Offer",
            "name": "Home Neurological Physiotherapy Session",
            "priceCurrency": "AED",
            "price": "450",
            "description": "Home-delivered neurological physiotherapy across Dubai"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Physiotherapy in JVC", "item": "https://vedaracare.ae/physiotherapy-jvc/"},
        {"@type": "ListItem", "position": 3, "name": "Neurological Physiotherapy", "item": "https://vedaracare.ae/physiotherapy/neurological-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": neurologicalDubaiFAQData.faqs.map(faq => ({
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
      "@type": "Article",
      "headline": "Neurological Physiotherapy in Dubai — Complete Service Guide",
      "image": "https://vedaracare.ae/images/neurological-physiotherapy-dubai-hero.jpg",
      "datePublished": "2026-06-05",
      "dateModified": currentDate,
      "author": {
        "@type": "Physician",
        "name": "Dr. Sarah Thompson"
      },
      "publisher": {
        "@id": "https://vedaracare.ae/#organization"
      },
      "mainEntityOfPage": "https://vedaracare.ae/physiotherapy/neurological-dubai/"
    },
    ...neurologicalTeamData.members.map(member => ({
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": member.name,
      "url": `https://vedaracare.ae${member.link}`,
      "image": `https://vedaracare.ae/images/${member.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.jpg`,
      "medicalSpecialty": ["Neurological Physiotherapy", "Neurorehabilitation", "Physiotherapy"],
      "hasCredential": ["DPT", "Neurological Specialist", "LSVT-BIG Certified", "DHA-Licensed"],
      "worksFor": {"@id": "https://vedaracare.ae/#organization"}
    })),
    {
      "@id": "https://vedaracare.ae/#organization",
      "@type": "MedicalClinic",
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": "https://vedaracare.ae/logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Neurological Physiotherapy in Dubai | Stroke, Parkinson's, MS | Vedara JVC</title>
        <meta name="description" content="Specialist neurological physiotherapy at our DHA-licensed JVC clinic and home services across Dubai. Stroke rehabilitation, Parkinson's, MS, TBI, spinal cord injury. Neurologist coordination. LSVT-BIG certified. Insurance direct-billing with 7 major insurers." />
        <link rel="canonical" href="https://vedaracare.ae/physiotherapy/neurological-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/physiotherapy/neurological-dubai/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/physiotherapy/neurological-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/physiotherapy/neurological-dubai/" />
        <meta property="og:title" content="Neurological Physiotherapy in Dubai — Specialist Long-Term Care | Vedara JVC" />
        <meta property="og:description" content="DHA-licensed neurological physiotherapy at our Jumeirah Village Circle clinic and home services across Dubai. Specialised treatment for stroke recovery, Parkinson's, MS, TBI, spinal cord injury, motor neurone disease, and other neurological conditions. Neurologist-coordinated care." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/neurological-physiotherapy-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/physiotherapy/neurological-dubai/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>

      <main>
        {/* Hero Section */}
        <AyurvedaHero {...neurologicalDubaiHero} />
        
        {/* Intro Section */}
        <AyurvedaIntro {...neurologicalDubaiIntro} />


        {/* Condition-Specific Protocols - Using ArthritisTypes Component */}
        <ArthritisTypes 
          {...neurologicalConditionsData}
          bgColor="bg-[#FAF8F3]"
          cardBg="bg-white"
        />

         {/* Mechanism Section */}
         <PhysiotherapyMechanism {...neurologicalDubaiMechanism} />

        {/* Treatment Phases - Using Protocols Component */}
        <TreatmentProtocol {...neurologicalPhasesData} />

        {/* Home Physiotherapy - Using PostSurgeryComponents HomePhysiotherapy */}
        <HomePhysiotherapy data={neurologicalHomePhysiotherapyData} />
         <PhysiotherapyMechanism {...neurologicalDubaiMechanism2} />
         {/* Insurance Coverage */}
         <InsuranceCoverage data={neurologicalInsuranceCoverageData}
         bgColor="bg-[#FFFFFF]"
         />

        {/* Patient Reviews */}
        <PediatricPhysiotherapyPricing data={neurologicalPricingData} />
        {/* Patient Reviews */}
        <TreatmentReviews {...neurologicalDubaiReviews} />

        {/* The Team */}
        <PostSurgeryTeam data={neurologicalTeamData} />

        {/* FAQ Section */}
        <FAQ {...neurologicalDubaiFAQData} />

        {/* Location Section */}
        <PostnatalLocation {...neurologicalDubaiLocationData} />

        {/* Final CTA */}
        <FinalCTA {...neurologicalDubaiFinalCTA} />

        {/* Related Pages */}
        <RelatedPages {...neurologicalDubaiRelatedPages} />
      </main>
    </>
  );
};

export default NeurologicalDubai;
