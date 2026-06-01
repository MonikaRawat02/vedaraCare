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
import TreatmentProtocol from '../../components/ayurveda/Protocols';

import {
  ayurvedicBackPainHero,
  ayurvedicBackPainIntro,
  ayurvedicBackPainAssessment,
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
        {"@type": "MedicalProcedure", "name": "Greeva Vasti", "url": "https://vedaracare.ae/treatments/greeva-vasti-dubai/"},
        {"@type": "MedicalProcedure", "name": "Basti", "url": "https://vedaracare.ae/treatments/basti-dubai/"},
        {"@type": "MedicalProcedure", "name": "Patra Pinda Sweda", "url": "https://vedaracare.ae/treatments/patra-pinda-sweda-dubai/"},
        {"@type": "MedicalProcedure", "name": "Njavarakizhi", "url": "https://vedaracare.ae/treatments/njavarakizhi-dubai/"},
        {"@type": "MedicalProcedure", "name": "Sutika Paricharya", "url": "https://vedaracare.ae/conditions/postnatal-care-ayurveda-dubai/"},
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
      ],
      "differentialDiagnosis": [
        {"@type": "MedicalCondition", "name": "Sciatica", "url": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#sciatica"},
        {"@type": "MedicalCondition", "name": "Lumbar Disc Bulge", "url": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#disc-bulge"},
        {"@type": "MedicalCondition", "name": "Spondylosis", "url": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#spondylosis"},
        {"@type": "MedicalCondition", "name": "Postpartum Back Pain", "url": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#postpartum"},
        {"@type": "MedicalCondition", "name": "Cervical Pain (Greeva Shoola)", "url": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#cervical"}
      ],
      "epidemiology": {
        "@type": "EpidemiologicalStudy",
        "description": "Chronic back pain is the leading cause of disability globally and one of the most common conditions treated in Ayurvedic practice"
      },
      "naturalProgression": "Without treatment, chronic mechanical back pain often progresses to reduced mobility, muscle atrophy, and compensatory postural issues. Early intervention with appropriate Ayurvedic protocols can prevent progression and restore function."
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
      "mainEntity": ayurvedicBackPainFaqs.faqs.map(faq => ({
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
      "@type": "MedicalCondition",
      "@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#sciatica",
      "name": "Sciatica",
      "alternateName": ["Lumbar Radiculopathy", "Sciatic Nerve Pain"],
      "code": {"@type": "MedicalCode", "code": "M54.3", "codingSystem": "ICD-10"},
      "description": "Pain radiating from the lower back down one or both legs, typically caused by nerve root compression",
      "isRelatedTo": {"@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#condition"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#disc-bulge",
      "name": "Lumbar Disc Bulge",
      "alternateName": ["Herniated Disc", "Slipped Disc", "Disc Herniation"],
      "code": {"@type": "MedicalCode", "code": "M51.2", "codingSystem": "ICD-10"},
      "description": "Pain from disc displacement causing nerve compression in the lumbar spine",
      "isRelatedTo": {"@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#condition"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#spondylosis",
      "name": "Spondylosis",
      "alternateName": ["Degenerative Joint Disease", "Spinal Osteoarthritis"],
      "code": {"@type": "MedicalCode", "code": "M47", "codingSystem": "ICD-10"},
      "description": "Age-related wear-and-tear changes in the spine with chronic stiffness and intermittent acute episodes",
      "isRelatedTo": {"@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#condition"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#postpartum",
      "name": "Postpartum Back Pain",
      "alternateName": ["Postnatal Back Pain", "Post-Caesarean Back Pain"],
      "description": "Back pain following childbirth, particularly common after caesarean delivery, prolonged labour, or epidural analgesia",
      "isRelatedTo": {"@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#condition"},
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Sutika Paricharya", "url": "https://vedaracare.ae/conditions/postnatal-care-ayurveda-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#cervical",
      "name": "Cervical Pain",
      "alternateName": ["Neck Pain", "Upper Back Pain", "Greeva Shoola"],
      "code": {"@type": "MedicalCode", "code": "M54.2", "codingSystem": "ICD-10"},
      "description": "Pain affecting the neck and upper back, often related to posture, screen time, or sedentary work patterns",
      "isRelatedTo": {"@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#condition"},
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Greeva Vasti", "url": "https://vedaracare.ae/treatments/greeva-vasti-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalEntity",
      "@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#vata-dosha",
      "name": "Vata Dosha",
      "description": "In Ayurvedic medicine, Vata dosha governs movement and is the primary dosha involved in back pain conditions. Imbalance in Vata leads to pain, stiffness, degeneration, and neurological symptoms.",
      "alternateName": ["Vata", "Wind Dosha"],
      "sameAs": "https://en.wikipedia.org/wiki/Dosha"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalSubstance",
      "@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#mahanarayana-taila",
      "name": "Mahanarayana Taila",
      "description": "Classical Ayurvedic medicated oil used in Kativasti and Abhyanga for back pain treatment, containing over 50 herbs known for anti-inflammatory and analgesic properties",
      "alternateName": ["Mahanarayan Oil"],
      "isRelatedTo": [
        {"@type": "MedicalProcedure", "name": "Kativasti"},
        {"@type": "MedicalProcedure", "name": "Abhyanga"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalSubstance",
      "@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#sahacharadi-taila",
      "name": "Sahacharadi Taila",
      "description": "Specialized Ayurvedic medicated oil particularly effective for sciatica and nerve-related back pain conditions",
      "isRelatedTo": [
        {"@type": "MedicalProcedure", "name": "Kativasti"},
        {"@type": "MedicalCondition", "name": "Sciatica"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Plant",
      "@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#rasna",
      "name": "Rasna",
      "alternateName": ["Pluchea lanceolata", "Indian Camphorweed"],
      "description": "Classical Ayurvedic herb used in back pain treatment for its anti-inflammatory and Vata-pacifying properties"
    },
    {
      "@context": "https://schema.org",
      "@type": "Plant",
      "@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#guggulu",
      "name": "Guggulu",
      "alternateName": ["Commiphora mukul", "Indian Bdellium Tree"],
      "description": "Resin used extensively in Ayurvedic back pain formulations (Yogaraja Guggulu, Mahayograj Guggulu) for its potent anti-inflammatory and tissue-healing properties",
      "sameAs": "https://en.wikipedia.org/wiki/Commiphora_wightii"
    },
    {
      "@context": "https://schema.org",
      "@type": "Book",
      "@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#sushruta-samhita",
      "name": "Sushruta Samhita",
      "description": "Ancient Sanskrit text on medicine and surgery, one of the foundational texts of Ayurveda that describes back pain classifications and treatments",
      "author": {"@type": "Person", "name": "Sushruta"},
      "genre": "Medical Text",
      "sameAs": "https://en.wikipedia.org/wiki/Sushruta_Samhita"
    },
    {
      "@context": "https://schema.org",
      "@type": "Book",
      "@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#ashtanga-hridayam",
      "name": "Ashtanga Hridayam",
      "description": "Classical Ayurvedic medical text that provides detailed protocols for treating Vata disorders including back pain",
      "author": {"@type": "Person", "name": "Vagbhata"},
      "genre": "Medical Text",
      "sameAs": "https://en.wikipedia.org/wiki/Ashtanga_Hridayam"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "@id": "https://vedaracare.ae/#organization",
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "medicalSpecialty": ["Ayurveda", "Physiotherapy", "Dermatology"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Building 23, District 12",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "License",
        "name": "DHA Healthcare Facility License",
        "identifier": "[DHA License Number]"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#jvc",
      "name": "Jumeirah Village Circle",
      "alternateName": ["JVC"],
      "description": "Residential community in Dubai where Vedara Care Polyclinic is located, next to Circle Mall",
      "containedInPlace": {
        "@type": "City",
        "name": "Dubai",
        "containedInPlace": {
          "@type": "Country",
          "name": "United Arab Emirates"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalCredential",
      "@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#bams",
      "name": "BAMS",
      "alternateName": ["Bachelor of Ayurvedic Medicine and Surgery"],
      "description": "Undergraduate professional degree in Ayurvedic medicine required for Ayurvedic physicians at Vedara Care",
      "recognizedBy": {"@type": "Organization", "name": "Dubai Health Authority"}
    },
    {
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalCredential",
      "@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#dpt",
      "name": "DPT",
      "alternateName": ["Doctor of Physiotherapy"],
      "description": "Professional doctoral degree in physiotherapy required for physiotherapists at Vedara Care",
      "recognizedBy": {"@type": "Organization", "name": "Dubai Health Authority"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalSpecialty",
      "@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#physiotherapy-specialty",
      "name": "Physiotherapy",
      "alternateName": ["Physical Therapy", "DPT"],
      "description": "Healthcare specialty focused on movement, function, and rehabilitation, integrated with Ayurveda for back pain treatment at Vedara Care",
      "sameAs": "https://en.wikipedia.org/wiki/Physiotherapy"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/#sutika-paricharya",
      "name": "Sutika Paricharya",
      "description": "Classical 45-day postnatal Ayurvedic care protocol specifically addressing postpartum musculoskeletal recovery including back pain",
      "alternateName": ["Postnatal Ayurvedic Care", "Sukhu Programme"],
      "procedureType": "Ayurveda",
      "url": "https://vedaracare.ae/conditions/postnatal-care-ayurveda-dubai/"
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
