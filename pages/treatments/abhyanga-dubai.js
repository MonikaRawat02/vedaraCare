import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import TreatmentProtocol from '../../components/ayurveda/TreatmentProtocol';
import TreatmentOils from '../../components/ayurveda/TreatmentOils';
import TreatmentApplications from '../../components/ayurveda/TreatmentApplications';
import TreatmentHomeHealthcare from '../../components/ayurveda/TreatmentHomeHealthcare';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import { 
  abhyangaHero, 
  abhyangaIntro, 
  abhyangaMechanism, 
  abhyangaProtocol, 
  abhyangaBenefits,
  abhyangaOils,
  abhyangaApplications,
  abhyangaPrograms,
  abhyangaHomeHealthcare,
  abhyangaReviews,
  abhyangaFaqs,
  abhyangaTreatmentLocation,
  abhyangaFinalCTA,
  abhyangaRelatedPages
} from '../../data/abhyangaData';

const AbhyangaDubai = () => {
  const currentDate = new Date().toISOString();
  
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "@id": "https://vedaracare.ae/treatments/abhyanga-dubai/#procedure",
      "name": "Abhyanga",
      "alternateName": ["Abhyanga Massage", "Classical Ayurvedic Oil Massage", "Two-Therapist Ayurvedic Massage"],
      "description": "Abhyanga is the classical full-body Ayurvedic oil massage in which warm dosha-specific medicated oils are applied head-to-toe in synchronized strokes by two trained therapists, typically over 60 to 90 minutes. Performed at Vedara Care Polyclinic in Jumeirah Village Circle, Dubai by therapists trained in classical Kerala technique.",
      "url": "https://vedaracare.ae/treatments/abhyanga-dubai/",
      "image": "https://vedaracare.ae/images/abhyanga-dubai-hero.jpg",
      "procedureType": "Ayurveda",
      "bodyLocation": "Whole body",
      "preparation": "BAMS doctor consultation including dosha assessment to select appropriate medicated oils.",
      "followup": "Swedana (medicated steam therapy), then rest, then shower. Aftercare guidance provided.",
      "indication": [
        {"@type": "MedicalIndication", "name": "Chronic stress and burnout"},
        {"@type": "MedicalIndication", "name": "Insomnia"},
        {"@type": "MedicalIndication", "name": "Joint stiffness"},
        {"@type": "MedicalIndication", "name": "Anxiety"},
        {"@type": "MedicalIndication", "name": "Chronic fatigue"},
        {"@type": "MedicalIndication", "name": "Dry skin and skin texture issues"},
        {"@type": "MedicalIndication", "name": "Pre-menstrual symptoms"},
        {"@type": "MedicalIndication", "name": "Postnatal recovery (modified protocol)"},
        {"@type": "MedicalIndication", "name": "Chronic back pain (combined therapy)"},
        {"@type": "MedicalIndication", "name": "Migraine (combined therapy)"}
      ],
      "contraindication": [
        {"@type": "MedicalContraindication", "name": "First trimester of pregnancy"},
        {"@type": "MedicalContraindication", "name": "Heavy menstruation (days 1-3)"},
        {"@type": "MedicalContraindication", "name": "Active acute infection"},
        {"@type": "MedicalContraindication", "name": "Open wounds or active skin infections"}
      ],
      "sameAs": "https://en.wikipedia.org/wiki/Abhyanga",
      "performer": {"@id": "https://vedaracare.ae/#organization"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Swedana",
      "sameAs": "https://en.wikipedia.org/wiki/Swedana",
      "description": "Ayurvedic medicated steam therapy used after Abhyanga"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalTherapy",
      "name": "Ayurveda",
      "sameAs": "https://en.wikipedia.org/wiki/Ayurveda",
      "description": "Traditional Indian system of medicine"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Sutika Paricharya",
      "description": "Ayurvedic postnatal care protocol"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalEntity",
      "name": "Vata",
      "alternateName": ["Vata dosha"],
      "description": "One of the three Ayurvedic doshas in Ayurveda"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalEntity",
      "name": "Pitta",
      "alternateName": ["Pitta dosha"],
      "description": "One of the three Ayurvedic doshas in Ayurveda"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalEntity",
      "name": "Kapha",
      "alternateName": ["Kapha dosha"],
      "description": "One of the three Ayurvedic doshas in Ayurveda"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalSubstance",
      "name": "Mahanarayana taila"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalSubstance",
      "name": "Dhanvantaram taila"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalSubstance",
      "name": "Chandanadi taila"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalSubstance",
      "name": "Pinda taila"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalSubstance",
      "name": "Murchita taila"
    },
    {
      "@context": "https://schema.org",
      "@type": "Substance",
      "name": "Sesame oil"
    },
    {
      "@context": "https://schema.org",
      "@type": "Substance",
      "name": "Coconut oil"
    },
    {
      "@context": "https://schema.org",
      "@type": "Substance",
      "name": "Mustard oil"
    },
    {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "Charaka Samhita",
      "description": "Classical Ayurvedic text"
    },
    {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "Ashtanga Hridayam",
      "description": "Classical Ayurvedic text"
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Kerala",
      "description": "Region in India where the technique originates"
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Jumeirah Village Circle",
      "description": "Location of the clinic"
    },
    {
      "@context": "https://schema.org",
      "@type": "EducationalCredential",
      "name": "BAMS",
      "description": "Bachelor of Ayurvedic Medicine and Surgery"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Stress"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Insomnia"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Back pain"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Abhyanga Programmes at Vedara Care",
      "provider": {"@id": "https://vedaracare.ae/#organization"},
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "serviceType": "Ayurvedic Body Therapy",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Abhyanga Programmes",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Single-Session Abhyanga (90 min)",
            "priceCurrency": "AED",
            "price": "450",
            "description": "Single 90-minute classical Abhyanga session including Swedana steam therapy"
          },
          {
            "@type": "Offer",
            "name": "Abhyanga 7-Session Course",
            "priceCurrency": "AED",
            "price": "2800",
            "description": "Seven Abhyanga sessions over 3-4 weeks, doctor-prescribed oils, mid-course doctor review"
          },
          {
            "@type": "Offer",
            "name": "Abhyanga 14-Session Course",
            "priceCurrency": "AED",
            "price": "5200",
            "description": "Fourteen Abhyanga sessions over 6-10 weeks, multiple oil prescriptions, two doctor reviews"
          },
          {
            "@type": "Offer",
            "name": "Home Abhyanga Session (Dubai-wide)",
            "priceCurrency": "AED",
            "price": "650",
            "description": "Home-delivered Abhyanga across Dubai by trained therapists with portable droni and authentic oils"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Abhyanga Massage in Dubai",
      "url": "https://vedaracare.ae/treatments/abhyanga-dubai/",
      "about": {"@id": "https://vedaracare.ae/treatments/abhyanga-dubai/#procedure"},
      "audience": {"@type": "PatientAudience"},
      "lastReviewed": currentDate,
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. Priya Menon",
        "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
      },
      "primaryImageOfPage": "https://vedaracare.ae/images/abhyanga-dubai-hero.jpg"
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Abhyanga Massage in Dubai — A Complete Treatment Guide",
      "image": "https://vedaracare.ae/images/abhyanga-dubai-hero.jpg",
      "datePublished": "2026-05-01",
      "dateModified": currentDate,
      "author": {
        "@type": "Physician",
        "name": "Dr. Priya Menon",
        "url": "https://vedaracare.ae/doctors/dr-priya-menon/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic",
        "logo": {"@type": "ImageObject", "url": "https://vedaracare.ae/logo.png"}
      },
      "mainEntityOfPage": "https://vedaracare.ae/treatments/abhyanga-dubai/"
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
        {"@type": "ListItem", "position": 3, "name": "Abhyanga Massage in Dubai", "item": "https://vedaracare.ae/treatments/abhyanga-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Abhyanga in simple terms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Abhyanga is the classical full-body Ayurvedic oil massage from India, described in medical texts over 2,000 years old. It involves applying warm dosha-specific medicated oils across the entire body in synchronized strokes by two trained therapists, typically over 60 to 90 minutes."
          }
        },
        {
          "@type": "Question",
          "name": "Why two therapists instead of one?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The classical Kerala technique uses two therapists working in perfect synchronization for several reasons: the strokes are applied evenly and simultaneously on both sides of the body, which deepens the relaxation response; the therapy can be completed in 90 minutes instead of 3 hours; and the balanced pressure prevents the body from 'compensating' to one side."
          }
        },
        {
          "@type": "Question",
          "name": "What should I wear for Abhyanga?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You will wear a disposable undergarment provided by the clinic. The therapy is performed with full modesty — only the area being massaged is exposed at any time, and the rest of the body is covered with a warm cotton sheet. Same-gender therapists are always available upon request, and we default to same-gender for all patients unless requested otherwise."
          }
        },
        {
          "@type": "Question",
          "name": "How long does an Abhyanga session take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A complete Abhyanga at Vedara Care runs 75-90 minutes of main therapy, sometimes preceded by a brief consultation and sometimes followed by Swedana (medicated steam). Total clinic time is approximately 100-110 minutes. Please arrive 10 minutes early to change and settle in."
          }
        },
        {
          "@type": "Question",
          "name": "How much does Abhyanga cost in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Vedara Care, single-session Abhyanga starts from AED 450. A 7-session course starts from AED 2,800. A 14-session therapeutic course starts from AED 5,200. Home Abhyanga starts from AED 650 per session. Across Dubai, authentic two-therapist Abhyanga typically ranges from AED 400 to AED 800 per session."
          }
        },
        {
          "@type": "Question",
          "name": "Can I eat before Abhyanga?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Please eat light — no heavy meal within 2 hours before your session. A light snack (fruit, nuts, toast) is fine 1-2 hours before. You will be lying face-down for part of the therapy, and a full stomach is uncomfortable and interferes with the abdominal work in classical Abhyanga."
          }
        },
        {
          "@type": "Question",
          "name": "Should I shower before or after Abhyanga?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You may shower before if you wish, but it is not required — we will clean your feet before the therapy begins. After Abhyanga, we recommend waiting at least 2 hours (ideally 4 hours) before showering, so the medicated oil remains on your skin and continues to absorb. We provide disposable wipes and towels for freshening up after the session if needed."
          }
        },
        {
          "@type": "Question",
          "name": "How often should I have Abhyanga?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For general wellbeing and stress management, every 1-2 weeks is typical. For specific conditions (insomnia, anxiety, joint stiffness), 7-14 sessions over 2-6 weeks is the standard protocol. For constitutional reset, 21 sessions over 8-12 weeks may be recommended, sometimes followed by monthly maintenance sessions."
          }
        },
        {
          "@type": "Question",
          "name": "Will I feel results after one session?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most patients feel profound relaxation and improved sleep after a single Abhyanga session. But the therapeutic benefits accumulate: improved energy, reduced anxiety, better digestion, and lasting changes in sleep quality typically require the full 7-14 session course. This is not a 'one-and-done' therapy — it is a therapy where consistency produces lasting change."
          }
        },
        {
          "@type": "Question",
          "name": "Can I have Abhyanga during my period?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For light to moderate flow (days 4+), modified Abhyanga is fine. For heavy flow (days 1-3), we typically recommend waiting or doing a lighter, shorter session focusing only on the feet and head. Every patient is different — we adjust the protocol based on your flow, energy levels, and comfort."
          }
        },
        {
          "@type": "Question",
          "name": "Can I have Abhyanga during pregnancy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Classical full-body Abhyanga is not performed during pregnancy. For pregnancy-related discomfort, we offer modified prenatal Ayurvedic protocols. Postnatal Abhyanga is offered after the standard recovery period and is one of the core protocols within classical Sutika Paricharya for postpartum recovery."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between Abhyanga and a 'normal' massage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Three key differences: (1) Abhyanga uses dosha-specific medicated oils, not generic 'massage oil'; (2) Abhyanga follows a specific classical sequence with marma-point work, not just general relaxation; (3) Abhyanga is performed by two therapists in synchronized strokes, not one. Abhyanga is a medical therapy first, relaxation second."
          }
        },
        {
          "@type": "Question",
          "name": "Where exactly is your Abhyanga clinic in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our clinic is in Jumeirah Village Circle (JVC), Dubai — next to Circle Mall, three minutes from FIVE Jumeirah Village Hotel, and five minutes from JSS Private School. Free patient parking is available. We also offer home Abhyanga service across Dubai — particularly common in JVC, JVT, Al Barsha, Dubai Marina, Downtown, and Palm Jumeirah."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer home Abhyanga in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Home Abhyanga is one of our most-requested services for busy professionals, new parents, and patients with mobility limitations. Two trained therapists travel to your home with a portable droni table, medicated oils, and all required equipment. Pricing is higher than in-clinic to cover preparation and travel, but for many patients home delivery is what makes consistent care actually possible."
          }
        },
        {
          "@type": "Question",
          "name": "How do I book Abhyanga at your clinic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For first-time patients, booking begins with a consultation where the doctor confirms Abhyanga is the right therapy and selects the appropriate medicated oil. Existing patients can rebook directly. Tap 'Book Abhyanga Consultation' on this page, WhatsApp us at +971 50 000 0000, or call +971 4 000 0000."
          }
        }
      ]
    }
  ];
  
  return (
    <>
      <Head>
        <title>Abhyanga Massage Dubai | DHA-Licensed Ayurveda | Vedara Care</title>
        <meta name="description" content="Authentic 90-minute Abhyanga at our DHA-licensed Dubai clinic — two synchronized therapists, dosha-specific medicated oils, traditional Kerala technique. From AED 450." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Abhyanga Massage in Dubai — Classical 90-Minute Ayurvedic Oil Therapy" />
        <meta property="og:description" content="Two synchronized therapists, dosha-specific medicated oils, traditional Kerala technique. DHA-licensed Ayurvedic Abhyanga in JVC, Dubai. From AED 450." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/abhyanga-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/treatments/abhyanga-dubai/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content="2026-05-01" />
        <meta property="article:modified_time" content={currentDate} />
        <meta property="article:author" content="Dr. Priya Menon" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Canonical & Hreflang */}
        <link rel="canonical" href="https://vedaracare.ae/treatments/abhyanga-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/treatments/abhyanga-dubai/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/treatments/abhyanga-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/treatments/abhyanga-dubai/" />

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
      <AyurvedaHero {...abhyangaHero} />
      
      {/* Section 2 - Intro with Image 2 */}
      <AyurvedaIntro {...abhyangaIntro} />
      
      {/* Section 3 - Mechanism with Image 3 */}
      <TreatmentMechanism {...abhyangaMechanism} />
      
      {/* Section 4 - Protocol with Image 4 */}
      <TreatmentProtocol {...abhyangaProtocol} />
      
      {/* Section 5 - Oils/Kashayams with Image 5 */}
      <TreatmentOils {...abhyangaOils} />
      
      {/* Section 6 - Applications with Image 1 */}
      <TreatmentApplications {...abhyangaApplications} />
      
      {/* Section 7 - Protocols with TreatmentPrograms */}
      <TreatmentPrograms {...abhyangaPrograms}
      buttonBg="#C9A55B"
      buttonText="Book Assessment"
      />
      
      {/* Section 8 - Home Healthcare with new UI */}
      <TreatmentHomeHealthcare {...abhyangaHomeHealthcare} />
      
      {/* Section 9 - Reviews with Image 5 (dark green background) */}
      <TreatmentReviews {...abhyangaReviews} />
      
      {/* Section 10 - FAQ */}
      <FAQ {...abhyangaFaqs} />
      
      {/* Section 11 - Location */}
      <TreatmentLocation {...abhyangaTreatmentLocation} />
      
      {/* Section 12 - Final CTA with Image 3 */}
      <FinalCTA {...abhyangaFinalCTA} />
      
      {/* Section 13 - Related Pages with Image 4 */}
      <RelatedPages {...abhyangaRelatedPages} />
    </>
  );
};

export default AbhyangaDubai;
