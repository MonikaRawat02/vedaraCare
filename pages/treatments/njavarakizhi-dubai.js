import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import TreatmentProtocol from '../../components/ayurveda/TreatmentProtocol';
import TreatmentOils from '../../components/ayurveda/TreatmentOils';
import TreatmentApplications from '../../components/ayurveda/TreatmentApplications';
import TreatmentBenefits from '../../components/ayurveda/TreatmentBenefits';
import TreatmentHomeHealthcare from '../../components/ayurveda/TreatmentHomeHealthcare';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import { 
  njavarakizhiHero, 
  njavarakizhiIntro, 
  njavarakizhiMechanism, 
  njavarakizhiProtocol, 
  njavarakizhiOils,
  njavarakizhiApplications,
  njavarakizhiBenefits,
  njavarakizhiHomeHealthcare,
  njavarakizhiPrograms,
  njavarakizhiReviews,
  njavarakizhiFaqs,
  njavarakizhiTreatmentLocation,
  njavarakizhiFinalCTA,
  njavarakizhiRelatedPages
} from '../../data/njavarakizhiData';

const NjavarakizhiDubai = () => {
  const currentDate = new Date().toISOString();
  
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "@id": "https://vedaracare.ae/treatments/njavarakizhi-dubai/#procedure",
      "name": "Njavarakizhi",
      "alternateName": ["Navarakizhi", "Shashtika Shali Pinda Sweda", "Rice Bolus Massage", "Ayurvedic Rice Pudding Massage", "Njavara Kizhi"],
      "description": "Njavarakizhi is a specialised Ayurvedic restorative therapy in which cloth boluses filled with Shashtika Shali (Njavara) rice cooked in herbal medicated milk are used to massage the body in synchronised strokes for 60 to 75 minutes. Performed at Vedara Care Polyclinic in Jumeirah Village Circle, Dubai for muscle wasting, post-illness recovery, neurological rehabilitation, sarcopenia, and rheumatoid conditions.",
      "url": "https://vedaracare.ae/treatments/njavarakizhi-dubai/",
      "image": "https://vedaracare.ae/images/njavarakizhi-dubai-hero.jpg",
      "procedureType": "Ayurveda",
      "bodyLocation": "Whole body",
      "preparation": "BAMS doctor clinical assessment. Rice and herbal milk preparation begins 90 minutes before patient arrival.",
      "followup": "10-15 minute recovery period on the droni. Residual rice and milk left on skin for several hours. Avoid showering for 2 hours. Remain in warm environment for the rest of the day.",
      "indication": [
        {"@type": "MedicalIndication", "name": "Muscle wasting"},
        {"@type": "MedicalIndication", "name": "Post-illness convalescence"},
        {"@type": "MedicalIndication", "name": "Post-COVID recovery"},
        {"@type": "MedicalIndication", "name": "Sarcopenia"},
        {"@type": "MedicalIndication", "name": "Post-stroke rehabilitation"},
        {"@type": "MedicalIndication", "name": "Bell's palsy"},
        {"@type": "MedicalIndication", "name": "Rheumatoid arthritis"},
        {"@type": "MedicalIndication", "name": "Postpartum weakness"},
        {"@type": "MedicalIndication", "name": "Post-immobilisation muscle recovery"}
      ],
      "contraindication": [
        {"@type": "MedicalContraindication", "name": "Pregnancy"},
        {"@type": "MedicalContraindication", "name": "Acute infections or active inflammation"},
        {"@type": "MedicalContraindication", "name": "Severe cardiac conditions without clearance"},
        {"@type": "MedicalContraindication", "name": "Active skin infections"}
      ],
      "sameAs": "https://en.wikipedia.org/wiki/Panchakarma",
      "performer": {"@id": "https://vedaracare.ae/#organization"}
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Njavarakizhi Programmes at Vedara Care",
      "provider": {"@id": "https://vedaracare.ae/#organization"},
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "serviceType": "Ayurvedic Restorative Therapy",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Njavarakizhi Programmes",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Njavarakizhi Trial Course (7 sessions)",
            "priceCurrency": "AED",
            "price": "2950",
            "description": "Seven-session introductory Njavarakizhi course for first-time patients or mild convalescence"
          },
          {
            "@type": "Offer",
            "name": "Njavarakizhi Clinical Restorative Course (14 sessions)",
            "priceCurrency": "AED",
            "price": "5600",
            "description": "Fourteen-session clinical course for post-illness recovery, sarcopenia, and rheumatoid conditions"
          },
          {
            "@type": "Offer",
            "name": "Njavarakizhi Intensive Restorative Programme (21-30 sessions)",
            "priceCurrency": "AED",
            "price": "7800",
            "description": "Intensive programme for post-stroke rehabilitation and severe muscle wasting"
          },
          {
            "@type": "Offer",
            "name": "Home Njavarakizhi Session (Dubai-wide)",
            "priceCurrency": "AED",
            "price": "880",
            "description": "Home-delivered Njavarakizhi with freshly prepared Njavara rice and two trained therapists"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Njavarakizhi Treatment in Dubai",
      "url": "https://vedaracare.ae/treatments/njavarakizhi-dubai/",
      "about": {"@id": "https://vedaracare.ae/treatments/njavarakizhi-dubai/#procedure"},
      "audience": {"@type": "PatientAudience"},
      "lastReviewed": currentDate,
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. Priya Nair",
        "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
      },
      "primaryImageOfPage": "https://vedaracare.ae/images/njavarakizhi-dubai-hero.jpg"
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Njavarakizhi Treatment in Dubai — A Complete Clinical Guide",
      "image": "https://vedaracare.ae/images/njavarakizhi-dubai-hero.jpg",
      "datePublished": "2026-05-01",
      "dateModified": currentDate,
      "author": {
        "@type": "Physician",
        "name": "Dr. Priya Nair",
        "url": "https://vedaracare.ae/doctors/dr-priya-nair/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic",
        "logo": {"@type": "ImageObject", "url": "https://vedaracare.ae/logo.png"}
      },
      "mainEntityOfPage": "https://vedaracare.ae/treatments/njavarakizhi-dubai/"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://vedaracare.ae/#organization",
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": "https://vedaracare.ae/logo.png"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Ayurvedic Treatment in Dubai", "item": "https://vedaracare.ae/ayurveda-dubai/"},
        {"@type": "ListItem", "position": 3, "name": "Njavarakizhi in Dubai", "item": "https://vedaracare.ae/treatments/njavarakizhi-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Njavarakizhi in simple terms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Njavarakizhi (also spelled Navarakizhi) is a specialised Ayurvedic therapy in which small cloth boluses filled with Njavara rice cooked in herbal medicated milk are used to massage the body in synchronised strokes for 60 to 75 minutes. The rice provides nutritive support, the warm milk delivers herbal medicines through the skin, and the sustained moist heat penetrates deeply. It is classically used for muscle wasting, post-illness recovery, and neurological rehabilitation rather than general relaxation."
          }
        },
        {
          "@type": "Question",
          "name": "Is Njavarakizhi the same as Navarakizhi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Njavarakizhi and Navarakizhi are alternate transliterations of the same Malayalam word — both refer to the same therapy. The Sanskrit clinical name is Shashtika Shali Pinda Sweda. The variations exist because of different ways of writing the Malayalam 'ഞ' sound in English."
          }
        },
        {
          "@type": "Question",
          "name": "What is 'Njavara rice' and why does it matter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Njavara is a specific variety of rice (Shashtika Shali in Sanskrit) that matures in 60 days, hence the name 'shashtika' meaning sixty. It is cultivated primarily in Kerala and has been used in Ayurvedic medicine for over 2,000 years. The rice contains specific amino acid profiles and trace minerals that ordinary rice does not — which is why authentic Njavarakizhi requires this specific variety, not substitutes."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a Njavarakizhi session take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A complete Njavarakizhi at Vedara Care runs 60 to 75 minutes of main therapy, preceded by 15 minutes of preparatory Abhyanga and followed by 10–15 minutes of recovery time. Total clinic time is approximately 90 to 105 minutes. Note that the rice and milk preparation takes 90 minutes before your arrival — which is why Njavarakizhi requires advance booking, not walk-in scheduling."
          }
        },
        {
          "@type": "Question",
          "name": "How much does Njavarakizhi cost in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Vedara Care, single-session Njavarakizhi starts from AED 480 — higher than Abhyanga or Shirodhara because of the cost of authentic Njavara rice and the longer preparation. A 7-session trial course starts from AED 2,950. A 14-session clinical restorative course starts from AED 5,600. A 21–30 session intensive programme starts from AED 7,800. Across Dubai, authentic Njavarakizhi typically ranges from AED 500 to AED 900 per session."
          }
        },
        {
          "@type": "Question",
          "name": "Who is Njavarakizhi actually for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Njavarakizhi is most clinically appropriate for: patients recovering from severe or prolonged illness (post-dengue, post-COVID, post-hospitalisation), elderly patients with sarcopenia or frailty, patients in neurological rehabilitation (post-stroke, Bell's palsy, certain paralysis conditions), patients with rheumatoid conditions, and certain postpartum protocols. It is not the right therapy for general relaxation, stress, or insomnia — Abhyanga or Shirodhara are better choices for those."
          }
        },
        {
          "@type": "Question",
          "name": "How is Njavarakizhi different from Abhyanga?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Abhyanga uses warm medicated oil applied with hands; Njavarakizhi uses warm rice boluses dipped in medicated milk. Abhyanga primarily detoxifies, relaxes, and balances doshas; Njavarakizhi primarily nourishes, restores, and rebuilds tissues. Abhyanga is appropriate for nearly all adults; Njavarakizhi has specific clinical indications. Abhyanga is typically prescribed for general wellbeing; Njavarakizhi is typically prescribed for specific recovery or restoration needs."
          }
        },
        {
          "@type": "Question",
          "name": "How many Njavarakizhi sessions do I need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For mild convalescence or first-time experience, a 7-session course over 2–3 weeks is typical. For meaningful clinical recovery (post-illness, sarcopenia, rheumatoid conditions), 14 sessions over 4–6 weeks is the standard protocol. For complex neurological recovery or severe muscle wasting, 21–30 sessions over 8–12 weeks is often needed, sometimes repeated annually. Session frequency is typically 2–3 per week."
          }
        },
        {
          "@type": "Question",
          "name": "Will I feel results after one session?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most patients feel a particular kind of warmth and relaxation after a single session — but the therapeutic benefits of Njavarakizhi accumulate over the course. Significant changes in muscle bulk, energy, and recovery typically require the full 14-session course. This is not a therapy where one session 'fixes' something — it is a therapy where consistent dosing over weeks produces measurable change."
          }
        },
        {
          "@type": "Question",
          "name": "Can elderly patients have Njavarakizhi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — elderly patients are one of the primary groups who benefit most from Njavarakizhi. We routinely offer it for patients in their 70s, 80s, and beyond, particularly for sarcopenia and post-illness recovery. For very elderly or frail patients, we modify the protocol — shorter sessions (45 minutes instead of 60), lighter pressure, and often delivered as home service to reduce travel stress."
          }
        },
        {
          "@type": "Question",
          "name": "Can I have Njavarakizhi during pregnancy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Classical Njavarakizhi is not performed during pregnancy because of the sustained moist heat and the body positions required. For pregnancy-related muscle weakness or fatigue, we offer modified Ayurvedic protocols. Postnatal Njavarakizhi is offered after the standard recovery period and is one of the protocols within classical Sutika Paricharya for specific postpartum cases."
          }
        },
        {
          "@type": "Question",
          "name": "Where exactly is your Njavarakizhi clinic in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our clinic is in Jumeirah Village Circle (JVC), Dubai — next to Circle Mall, three minutes from FIVE Jumeirah Village Hotel, and five minutes from JSS Private School. Free patient parking is available. We also offer home Njavarakizhi service across Dubai — particularly common for elderly and post-illness patients in JVC, JVT, Al Barsha, Dubai Marina, Downtown, and Palm Jumeirah."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer home Njavarakizhi in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Home Njavarakizhi is one of our most-requested specialised services for elderly patients, post-illness convalescents, and post-stroke rehabilitation patients. Two trained therapists travel to your home with freshly prepared Njavara rice (cooked at the clinic and transported warm), the herbal milk vessel, and all required equipment. Pricing is higher than in-clinic to cover preparation and travel, but for many patients home delivery is what makes the full course actually possible."
          }
        },
        {
          "@type": "Question",
          "name": "How do I book Njavarakizhi at your clinic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Njavarakizhi requires advance booking — typically at least 24 hours notice, ideally 48 hours, because of the rice and milk preparation required. For first-time patients, booking begins with a consultation where the doctor confirms Njavarakizhi is the right therapy and selects the appropriate kashayam. Existing patients can rebook directly with the required advance notice. Tap 'Book a Njavarakizhi Consultation' on this page, WhatsApp us at +971 50 000 0000, or call +971 4 000 0000."
          }
        }
      ]
    }
  ];
  
  return (
    <>
      <Head>
        <title>Njavarakizhi in Dubai | Classical Rice Bolus Therapy | Vedara Care</title>
        <meta name="description" content="Authentic Njavarakizhi at our DHA-licensed Dubai clinic — classical rice bolus therapy for muscle wasting, post-illness recovery & neurological rehabilitation." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Njavarakizhi in Dubai — Classical Ayurvedic Rice Bolus Therapy" />
        <meta property="og:description" content="Doctor-prescribed Njavarakizhi at our DHA-licensed JVC clinic. For muscle wasting, post-illness recovery, and neurological rehabilitation. From AED 480." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/njavarakizhi-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/treatments/njavarakizhi-dubai/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content="2026-05-01" />
        <meta property="article:modified_time" content={currentDate} />
        <meta property="article:author" content="Dr. Priya Nair" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Canonical & Hreflang */}
        <link rel="canonical" href="https://vedaracare.ae/treatments/njavarakizhi-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/treatments/njavarakizhi-dubai/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/treatments/njavarakizhi-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/treatments/njavarakizhi-dubai/" />

        {/* Schema Markup */}
        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      {/* Section 1 - Hero with Image 1 */}
      <AyurvedaHero {...njavarakizhiHero} />
      
      {/* Section 2 - Intro with Image 2 */}
      <AyurvedaIntro {...njavarakizhiIntro} />
      
      {/* 
      <TreatmentProtocol {...njavarakizhiProtocol} />Section 3 - Mechanism with Image 3 */}
      <TreatmentProtocol {...njavarakizhiProtocol} />
      
      {/* Section 4 - Protocol with Image 4 */}
     <TreatmentMechanism {...njavarakizhiMechanism} />
      
      {/* Section 5 - Oils/Kashayams with Image 5 */}
      <TreatmentOils {...njavarakizhiOils} />
      
      {/* Section 6 - Applications with Image 1 */}
      <TreatmentApplications {...njavarakizhiApplications} />
      
      {/* Section 7 - Benefits (PATIENTS WHO BENEFIT MOST) with new UI */}
      <TreatmentBenefits {...njavarakizhiBenefits} />
      
      {/* Section 8 - Protocols with TreatmentPrograms */}
      <TreatmentPrograms {...njavarakizhiPrograms} />
      
      {/* Section 9 - Home Healthcare with new UI */}
      <TreatmentHomeHealthcare {...njavarakizhiHomeHealthcare} />
      
      {/* Section 10 - Reviews with Image 5 (dark green background) */}
      <TreatmentReviews {...njavarakizhiReviews} />
      
      {/* Section 11 - FAQ */}
      <FAQ {...njavarakizhiFaqs} />
      
      {/* Section 12 - Location */}
      <TreatmentLocation {...njavarakizhiTreatmentLocation} />
      
      {/* Section 13 - Final CTA with Image 3 */}
      <FinalCTA {...njavarakizhiFinalCTA} />
      
      {/* Section 14 - Related Pages with Image 4 */}
      <RelatedPages {...njavarakizhiRelatedPages} />
    </>
  );
};

export default NjavarakizhiDubai;
