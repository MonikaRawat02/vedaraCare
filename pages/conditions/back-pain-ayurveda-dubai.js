import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TherapyGrid from '../../components/ayurveda/TherapyGrid';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import TreatmentIntegration from '../../components/ayurveda/TreatmentIntegration';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import CTA from '../../components/home/CTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import BackPainConditions from '../../components/ayurveda/BackPainConditions';
import ClinicalBoundaries from '../../components/ayurveda/ClinicalBoundaries';
import TreatmentProtocol from '../../components/ayurveda/TreatmentProtocol';

import {
  ayurvedicBackPainHero,
  ayurvedicBackPainIntro,
  ayurvedicBackPainAssessment,
  ayurvedicBackPainVsSpa,
  ayurvedicBackPainMechanism,
  ayurvedicBackPainTherapies,
  ayurvedicBackPainBoundaries,
  ayurvedicBackPainProtocol,
  ayurvedicBackPainIntegration,
  ayurvedicBackPainOutcomes,
  ayurvedicBackPainPricing,
  ayurvedicBackPainFaqs,
  ayurvedicBackPainLocation,
  ayurvedicBackPainCTA,
  ayurvedicBackPainRelatedPages
} from '../../data/ayurvedicBackPainData';

const AyurvedicBackPain = () => {
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#condition",
      "name": "Chronic Back Pain",
      "alternateName": ["Lumbar Pain", "Lower Back Pain", "Chronic Lumbar Pain", "Kati Shoola"],
      "code": [
        {"@type": "MedicalCode", "code": "M54.5", "codingSystem": "ICD-10"},
        {"@type": "MedicalCode", "code": "M54.9", "codingSystem": "ICD-10"}
      ],
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Lumbar spine"
      },
      "signOrSymptom": [
        {"@type": "MedicalSymptom", "name": "Lower back pain"},
        {"@type": "MedicalSymptom", "name": "Lumbar stiffness"},
        {"@type": "MedicalSymptom", "name": "Reduced range of motion"},
        {"@type": "MedicalSymptom", "name": "Muscle spasm"},
        {"@type": "MedicalSymptom", "name": "Radiating leg pain (sciatica)"}
      ],
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Kativasti", "url": "https://vedaracare.ae/treatments/kativasti-dubai/"},
        {"@type": "MedicalProcedure", "name": "Abhyanga", "url": "https://vedaracare.ae/treatments/abhyanga-dubai/"},
        {"@type": "MedicalProcedure", "name": "Panchakarma", "url": "https://vedaracare.ae/treatments/panchakarma-dubai/"},
        {"@type": "MedicalTherapy", "name": "Physiotherapy", "url": "https://vedaracare.ae/physiotherapy-jvc/"},
        {"@type": "MedicalTherapy", "name": "Internal Ayurvedic Medicines"}
      ],
      "riskFactor": [
        {"@type": "MedicalRiskFactor", "name": "Sedentary lifestyle"},
        {"@type": "MedicalRiskFactor", "name": "Poor posture"},
        {"@type": "MedicalRiskFactor", "name": "Heavy lifting"},
        {"@type": "MedicalRiskFactor", "name": "Aging and degeneration"},
        {"@type": "MedicalRiskFactor", "name": "Previous spinal injury"},
        {"@type": "MedicalRiskFactor", "name": "Pregnancy and postpartum"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#webpage",
      "name": "Ayurvedic Treatment for Back Pain in Dubai",
      "url": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/",
      "about": {"@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#condition"},
      "audience": {"@type": "PatientAudience"},
      "lastReviewed": "2026-05-25",
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. Lead Ayurvedic Physician",
        "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
      },
      "primaryImageOfPage": "https://vedaracare.ae/images/back-pain-ayurveda-dubai-hero.jpg",
      "mainContentOfPage": {
        "@type": "WebPageElement",
        "cssSelector": "main"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/"},
        {"@type": "ListItem", "position": 3, "name": "Ayurvedic Treatment for Back Pain in Dubai", "item": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Ayurvedic Back Pain Treatment Programmes",
      "provider": {"@id": "https://vedaracare.ae/#organization"},
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "serviceType": "Ayurvedic Treatment for Back Pain",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Back Pain Programmes",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Initial Back Pain Assessment",
            "priceCurrency": "AED",
            "price": "350",
            "description": "45-60 minute consultation with Ayurvedic physician, physical examination, imaging review, written treatment plan"
          },
          {
            "@type": "Offer",
            "name": "Standard 6-Week Chronic Back Pain Programme",
            "priceCurrency": "AED",
            "price": "2850",
            "description": "Comprehensive Ayurvedic back pain treatment with Kativasti, Abhyanga, internal medicines"
          },
          {
            "@type": "Offer",
            "name": "Integrated 6-8 Week Back Pain Programme",
            "priceCurrency": "AED",
            "price": "4250",
            "description": "Combined Ayurveda + Physiotherapy back pain programme with joint clinical assessment and coordinated care"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Ayurvedic Treatment for Back Pain in Dubai — A Complete Clinical Guide",
      "image": "https://vedaracare.ae/images/back-pain-ayurveda-dubai-hero.jpg",
      "datePublished": "2026-05-25",
      "dateModified": "2026-05-25",
      "author": {
        "@type": "Physician",
        "name": "Dr. Lead Ayurvedic Physician",
        "url": "https://vedaracare.ae/doctors/dr-ayurveda-specialist/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic",
        "logo": {"@type": "ImageObject", "url": "https://vedaracare.ae/logo.png"}
      },
      "mainEntityOfPage": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Ayurvedic treatment actually work for back pain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — for the right type of back pain, with the right protocol, prescribed by a qualified physician. Published research and clinical experience consistently show that authentic Ayurvedic treatment is effective for chronic mechanical back pain, sciatica without severe neurological compromise, spondylosis, and postpartum back pain."
          }
        }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Ayurvedic Treatment for Back Pain in Dubai | DHA-Licensed | Vedara</title>
        <meta name="description" content="DHA-licensed Ayurvedic treatment for chronic back pain in Dubai — Kativasti, Abhyanga, Panchakarma. Integrated with physiotherapy at our JVC clinic. From AED 350." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/" />
        <meta property="og:title" content="Ayurvedic Treatment for Back Pain in Dubai — Integrated With Physiotherapy" />
        <meta property="og:description" content="DHA-licensed back pain treatment combining classical Ayurveda — Kativasti, Abhyanga, internal medicines — with DPT physiotherapy at our JVC clinic." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/back-pain-ayurveda-dubai.jpg" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/" />
        <meta name="twitter:title" content="Ayurvedic Treatment for Back Pain in Dubai — Integrated With Physiotherapy" />
        <meta name="twitter:description" content="DHA-licensed back pain treatment combining classical Ayurveda — Kativasti, Abhyanga, internal medicines — with DPT physiotherapy at our JVC clinic." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/back-pain-ayurveda-dubai.jpg" />

        {/* Canonical & Language Tags */}
        <link rel="canonical" href="https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/conditions/back-pain-ayurveda-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>

      <main>
        <AyurvedaHero {...ayurvedicBackPainHero} />
        <AyurvedaIntro {...ayurvedicBackPainIntro} />
        
        <BackPainConditions {...ayurvedicBackPainAssessment} />
        <TreatmentMechanism {...ayurvedicBackPainMechanism} />
        <TreatmentProtocol {...ayurvedicBackPainProtocol} />
        <TherapyGrid 
          title={ayurvedicBackPainTherapies.title}
          subtitle={ayurvedicBackPainTherapies.description}
          items={ayurvedicBackPainTherapies.items}
        />
         <TreatmentIntegration {...ayurvedicBackPainIntegration} />
        <ClinicalBoundaries {...ayurvedicBackPainBoundaries} />

        <TreatmentReviews 
          {...ayurvedicBackPainOutcomes} 
          isDarkText={false}
          bgColor="bg-[#1F4538]"
          cardBgColor="bg-white/10"
        />

        <TreatmentPrograms 
          label={ayurvedicBackPainPricing.label}
          title={ayurvedicBackPainPricing.title}
          bgColor="bg-[#FAF8F3]"
          programs={ayurvedicBackPainPricing.items.map(item => ({
            name: item.name,
            price: `AED ${item.price}`,
            duration: item.duration,
            features: item.features,
            featured: item.isRecommended,
            featuredLabel: "Most Common for Chronic Back Pain",
            bestFor: item.footer,
            buttonText: "Inquire on WhatsApp"
          }))}
          footer={ayurvedicBackPainPricing.footerNote}
        />

        <FAQ {...ayurvedicBackPainFaqs} />

        <TreatmentLocation {...ayurvedicBackPainLocation} />

        <CTA 
          {...ayurvedicBackPainCTA}
          button1Class="bg-[#184C3A] text-white hover:bg-[#123a2c]"
          button2Class="bg-white border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
        />

        <RelatedPages {...ayurvedicBackPainRelatedPages} />
      </main>
    </>
  );
};

export default AyurvedicBackPain;
