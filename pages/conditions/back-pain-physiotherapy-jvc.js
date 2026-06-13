import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import PhysiotherapySpecializations from '../../components/ayurveda/PhysiotherapySpecializations';
import PhysiotherapyMechanism from '../../components/ayurveda/PhysiotherapyMechanism';
import { BackPainTreatmentPhases, BackPainIntegratedCare } from '../../components/ayurveda/BackPainAcuteAndPricing';
import SportsPhysiotherapyModalities from '../../components/ayurveda/SportsPhysiotherapyModalities';
import BackPainAcuteAndPricing from '../../components/ayurveda/BackPainAcuteAndPricing';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  backPainPhysioHero,
  backPainPhysioIntro,
  backPainPhysioConditions,
  backPainPhysioMechanism,
  backPainPhysioPhases,
  backPainPhysioModalities,
  backPainPhysioIntegratedCare,
  backPainPhysioAcuteAndPricing,
  backPainPhysioReviews,
  backPainPhysioTeam,
  backPainPhysioFaqs,
  backPainPhysioLocation,
  backPainPhysioCTA,
  backPainPhysioRelatedPages
} from '../../data/backPainPhysioJvcData';

const BackPainPhysioJvc = () => {
  const currentDate = new Date().toISOString();
  
  return (
    <>
      <Head>
        <title>Physiotherapy for Back Pain in JVC | DPT-Qualified | Vedara Care</title>
        <meta name="description" content="Evidence-based physiotherapy for back pain at our DHA-licensed JVC clinic. DPT-qualified specialists using manual therapy, McKenzie method, dry needling, and modern protocols. Same-day appointments for severe acute pain. Walking distance from Circle Mall." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        <meta property="og:title" content="Physiotherapy for Back Pain in JVC — Evidence-Based DPT-Qualified Care | Vedara" />
        <meta property="og:description" content="DPT-qualified physiotherapists at our Jumeirah Village Circle clinic using evidence-based protocols for acute and chronic back pain. Manual therapy, McKenzie method, dry needling, modern modalities. Same-day appointments for severe acute pain. Insurance direct-billing." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/back-pain-physiotherapy-jvc.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/back-pain-physiotherapy-jvc/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        
        <meta name="twitter:card" content="summary_large_image" />
        
        <link rel="canonical" href="https://vedaracare.ae/conditions/back-pain-physiotherapy-jvc/" />
        <link rel="alternate" href="https://vedaracare.ae/conditions/back-pain-physiotherapy-jvc/" hrefLang="en-AE" />
        <link rel="alternate" href="https://vedaracare.ae/ar/conditions/back-pain-physiotherapy-jvc/" hrefLang="ar-AE" />
        <link rel="alternate" href="https://vedaracare.ae/conditions/back-pain-physiotherapy-jvc/" hrefLang="x-default" />
      </Head>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy"],
              "@id": "https://vedaracare.ae/conditions/back-pain-physiotherapy-jvc/#back-pain-physio",
              "name": "Vedara Care Back Pain Physiotherapy",
              "alternateName": ["Vedara Back Pain Physio JVC", "Vedara Care Lumbar Physiotherapy"],
              "url": "https://vedaracare.ae/conditions/back-pain-physiotherapy-jvc/",
              "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
              "description": "Evidence-based physiotherapy for back pain at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. DPT-qualified physiotherapists treating acute back pain, chronic back pain, sciatica, disc-related conditions, mechanical postural pain. Manual therapy, McKenzie method, dry needling, modern modalities. Walking distance from Circle Mall.",
              "telephone": "[Phone number]",
              "priceRange": "AED 300 - AED 12,000",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "[Street address]",
                "addressLocality": "Jumeirah Village Circle",
                "addressRegion": "Dubai",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "[Latitude]",
                "longitude": "[Longitude]"
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
                {"@type": "Place", "name": "Dubai Marina"},
                {"@type": "Place", "name": "Downtown Dubai"},
                {"@type": "Place", "name": "Palm Jumeirah"},
                {"@type": "Place", "name": "Mirdif"},
                {"@type": "City", "name": "Dubai"}
              ],
              "medicalSpecialty": [
                "Physiotherapy",
                "Physical Therapy",
                "Manual Therapy",
                "Spinal Rehabilitation"
              ],
              "isAcceptingNewPatients": true,
              "availableService": [
                {"@type": "MedicalProcedure", "name": "Back Pain Physiotherapy"},
                {"@type": "MedicalProcedure", "name": "Manual Therapy"},
                {"@type": "MedicalProcedure", "name": "McKenzie Method (MDT)"},
                {"@type": "MedicalProcedure", "name": "Dry Needling"},
                {"@type": "MedicalProcedure", "name": "Motor Control Training"},
                {"@type": "MedicalProcedure", "name": "Shockwave Therapy"},
                {"@type": "MedicalProcedure", "name": "Pain Neuroscience Education"},
                {"@type": "MedicalProcedure", "name": "Sciatica Treatment"},
                {"@type": "MedicalProcedure", "name": "Spinal Mobilisation"},
                {"@type": "MedicalProcedure", "name": "Spinal Manipulation"}
              ],
              "memberOf": {
                "@type": "Organization",
                "name": "Dubai Health Authority"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "180",
                "bestRating": "5",
                "worstRating": "1"
              }
            },
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalCondition",
                  "name": "Lower Back Pain (Lumbalgia)",
                  "code": {"@type": "MedicalCode", "code": "M54.5", "codingSystem": "ICD-10"},
                  "possibleTreatment": [
                    {"@type": "MedicalProcedure", "name": "Manual Therapy"},
                    {"@type": "MedicalProcedure", "name": "McKenzie Method"},
                    {"@type": "MedicalProcedure", "name": "Motor Control Training"}
                  ]
                },
                {
                  "@type": "MedicalCondition",
                  "name": "Sciatica",
                  "alternateName": ["Lumbar Radiculopathy", "Sciatic Nerve Pain"],
                  "code": {"@type": "MedicalCode", "code": "M54.3", "codingSystem": "ICD-10"},
                  "possibleTreatment": [
                    {"@type": "MedicalProcedure", "name": "McKenzie Method"},
                    {"@type": "MedicalProcedure", "name": "Nerve Mobilisation"},
                    {"@type": "MedicalProcedure", "name": "Manual Therapy"}
                  ]
                },
                {
                  "@type": "MedicalCondition",
                  "name": "Lumbar Disc Disorder",
                  "alternateName": ["Disc Bulge", "Herniated Disc"],
                  "code": {"@type": "MedicalCode", "code": "M51.2", "codingSystem": "ICD-10"}
                },
                {
                  "@type": "MedicalCondition",
                  "name": "Thoracic Spine Pain",
                  "alternateName": ["Upper Back Pain"],
                  "code": {"@type": "MedicalCode", "code": "M54.6", "codingSystem": "ICD-10"}
                },
                {
                  "@type": "MedicalCondition",
                  "name": "Chronic Back Pain",
                  "code": {"@type": "MedicalCode", "code": "M54.9", "codingSystem": "ICD-10"}
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Back Pain Physiotherapy Services in JVC, Dubai",
              "provider": {"@id": "https://vedaracare.ae/conditions/back-pain-physiotherapy-jvc/#back-pain-physio"},
              "areaServed": [
                {"@type": "Place", "name": "Jumeirah Village Circle"},
                {"@type": "City", "name": "Dubai"}
              ],
              "serviceType": "Back Pain Physiotherapy and Spinal Rehabilitation",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Back Pain Physiotherapy Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "name": "Initial Back Pain Assessment",
                    "priceCurrency": "AED",
                    "price": "[X]",
                    "description": "60-minute comprehensive back pain assessment with DPT-qualified physiotherapist"
                  },
                  {
                    "@type": "Offer",
                    "name": "Same-Day Urgent Back Pain Assessment",
                    "priceCurrency": "AED",
                    "price": "[X]",
                    "description": "Same-day appointment for severe acute back pain"
                  },
                  {
                    "@type": "Offer",
                    "name": "Acute Back Pain Package",
                    "priceCurrency": "AED",
                    "price": "[X]",
                    "description": "8-session structured programme for acute back pain over 4-6 weeks"
                  },
                  {
                    "@type": "Offer",
                    "name": "Chronic Back Pain Programme",
                    "priceCurrency": "AED",
                    "price": "[X]",
                    "description": "16-session structured programme for chronic back pain over 8-12 weeks"
                  },
                  {
                    "@type": "Offer",
                    "name": "Extended Chronic Back Pain Care",
                    "priceCurrency": "AED",
                    "price": "[X]",
                    "description": "24-session extended programme for complex chronic patterns over 12-24 weeks"
                  }
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
                {"@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/"},
                {"@type": "ListItem", "position": 3, "name": "Back Pain Physiotherapy in JVC", "item": "https://vedaracare.ae/conditions/back-pain-physiotherapy-jvc/"}
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": backPainPhysioFaqs.faqs.map(faq => ({
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
              "headline": "Physiotherapy for Back Pain in JVC — Evidence-Based Treatment Guide",
              "image": "https://vedaracare.ae/images/back-pain-physiotherapy-jvc-hero.jpg",
              "datePublished": currentDate,
              "dateModified": currentDate,
              "author": {
                "@type": "Physician",
                "name": "[Lead Physiotherapist]"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Vedara Care Polyclinic"
              },
              "mainEntityOfPage": "https://vedaracare.ae/conditions/back-pain-physiotherapy-jvc/"
            }
          ])
        }}
      />
      
      <div className="back-pain-physiotherapy-page">
        <AyurvedaHero {...backPainPhysioHero}
        bgColor='bg-[#F8F5EE]'
        />
        <AyurvedaIntro {...backPainPhysioIntro} />
        <PhysiotherapySpecializations 
          bgColor={backPainPhysioConditions.bgColor}
          label={backPainPhysioConditions.label}
          title={backPainPhysioConditions.title}
          description={backPainPhysioConditions.description}
          types={backPainPhysioConditions.types}
          footer={backPainPhysioConditions.footer}
        />
        <PhysiotherapyMechanism 
          bgColor={backPainPhysioMechanism.bgColor}
          label={backPainPhysioMechanism.label}
          title={backPainPhysioMechanism.title}
          content={backPainPhysioMechanism.content}
          quote={backPainPhysioMechanism.quote}
          image={backPainPhysioMechanism.image}
          alt={backPainPhysioMechanism.alt}
        />
        <BackPainTreatmentPhases 
          bgColor={backPainPhysioPhases.bgColor}
          label={backPainPhysioPhases.label}
          title={backPainPhysioPhases.title}
          description={backPainPhysioPhases.description}
          phases={backPainPhysioPhases.phases}
          footer={backPainPhysioPhases.footer}
        />
        <SportsPhysiotherapyModalities
          label={backPainPhysioModalities.label}
          title={backPainPhysioModalities.title}
          modalities={backPainPhysioModalities.modalities}
        />
        <BackPainAcuteAndPricing data={backPainPhysioAcuteAndPricing} />
        <TreatmentReviews {...backPainPhysioReviews} 
        bgColor='bg-[#1C3D2E]'
        />
        <PhysiotherapyTeam {...backPainPhysioTeam} />
        <FAQ {...backPainPhysioFaqs} 
        bgColor='bg-[#F2EDE5]'/>
        <TreatmentLocation {...backPainPhysioLocation} />
         <BackPainIntegratedCare 
          bgColor={backPainPhysioIntegratedCare.bgColor}
          label={backPainPhysioIntegratedCare.label}
          title={backPainPhysioIntegratedCare.title}
          paragraph1={backPainPhysioIntegratedCare.paragraph1}
          paragraph2={backPainPhysioIntegratedCare.paragraph2}
          noteTitle={backPainPhysioIntegratedCare.noteTitle}
          noteDescription={backPainPhysioIntegratedCare.noteDescription}
          linkText={backPainPhysioIntegratedCare.linkText}
        />
        <FinalCTA {...backPainPhysioCTA} />
        <RelatedPages {...backPainPhysioRelatedPages} />
      </div>
    </>
  );
};

export default BackPainPhysioJvc;
