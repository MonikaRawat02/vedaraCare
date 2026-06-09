import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import { AyurvedaVsSpa, MassagesTable, PricingSection } from '../../components/ayurveda/MassageSpecificSections';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import CTA from '../../components/home/CTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';

import {
  ayurvedicMassageJVCHero,
  ayurvedicMassageJVCIntro,
  ayurvedicMassageJVCReviews,
  ayurvedicMassageJVCFaqs,
  ayurvedicMassageJVCLocation,
  ayurvedicMassageJVCCTA,
  ayurvedicMassageJVCRelatedPages
} from '../../data/ayurvedicMassageJvcData';

const AyurvedicMassageJVC = () => {
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "@id": "https://vedaracare.ae/treatments/ayurvedic-massage-jvc/#procedure",
      "name": "Ayurvedic Massage",
      "alternateName": ["Classical Ayurvedic Body Therapy", "Kerala-Style Ayurvedic Massage"],
      "description": "Classical Ayurvedic body therapies including Abhyanga, Shirodhara, Kativasti, Njavarakizhi, and Udvartana, performed by trained therapists and prescribed by BAMS-qualified doctors at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai.",
      "url": "https://vedaracare.ae/treatments/ayurvedic-massage-jvc/",
      "image": "https://vedaracare.ae/images/ayurvedic-massage-jvc-hero.jpg",
      "procedureType": "Ayurveda",
      "bodyLocation": "Whole body",
      "preparation": "BAMS doctor consultation including dosha assessment and clinical history.",
      "followup": "Recommended rest period, hydration guidance, and possible follow-up sessions.",
      "indication": [
        {"@type": "MedicalIndication", "name": "Chronic stress and burnout"},
        {"@type": "MedicalIndication", "name": "Insomnia"},
        {"@type": "MedicalIndication", "name": "Chronic back pain"},
        {"@type": "MedicalIndication", "name": "Migraine and chronic headache"},
        {"@type": "MedicalIndication", "name": "Joint stiffness"},
        {"@type": "MedicalIndication", "name": "Weight management"},
        {"@type": "MedicalIndication", "name": "General dosha imbalance"}
      ],
      "sameAs": "https://en.wikipedia.org/wiki/Ayurveda",
      "performer": {"@id": "https://vedaracare.ae/treatments/ayurvedic-massage-jvc/#clinic"}
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Classical Ayurvedic Massages Offered in JVC",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Abhyanga",
          "url": "https://vedaracare.ae/treatments/abhyanga-dubai/",
          "description": "Full-body warm medicated oil massage"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Shirodhara",
          "url": "https://vedaracare.ae/treatments/shirodhara-dubai/",
          "description": "Continuous warm oil stream on the forehead"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Kativasti",
          "url": "https://vedaracare.ae/treatments/kativasti-dubai/",
          "description": "Localized lower back oil therapy"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Njavarakizhi",
          "url": "https://vedaracare.ae/treatments/njavarakizhi-dubai/",
          "description": "Massage with herbal rice boluses"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Udvartana",
          "url": "https://vedaracare.ae/treatments/udvartana-dubai/",
          "description": "Dry herbal powder massage for metabolism"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": ["MedicalClinic", "LocalBusiness"],
      "@id": "https://vedaracare.ae/treatments/ayurvedic-massage-jvc/#clinic",
      "name": "Vedara Care Polyclinic — Ayurvedic Massage in JVC",
      "url": "https://vedaracare.ae/treatments/ayurvedic-massage-jvc/",
      "image": "https://vedaracare.ae/images/ayurvedic-massage-jvc-hero.jpg",
      "telephone": "+971-XX-XXX-XXXX",
      "priceRange": "AED",
      "medicalSpecialty": "Ayurveda",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Building 23, District 12",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.0",
        "longitude": "55.2"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          "opens": "09:00",
          "closes": "21:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "10:00",
          "closes": "19:00"
        }
      ],
      "areaServed": [
        {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "Place", "name": "Jumeirah Village Triangle"},
        {"@type": "Place", "name": "Al Barsha South"},
        {"@type": "Place", "name": "Dubai Sports City"},
        {"@type": "Place", "name": "Motor City"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Ayurvedic Massage at Vedara Care JVC",
      "provider": {"@id": "https://vedaracare.ae/#organization"},
      "areaServed": {"@type": "Place", "name": "Jumeirah Village Circle, Dubai"},
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Ayurvedic Massage Treatments",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Abhyanga",
            "priceCurrency": "AED",
            "price": "350",
            "url": "https://vedaracare.ae/treatments/abhyanga-dubai/"
          },
          {
            "@type": "Offer",
            "name": "Shirodhara",
            "priceCurrency": "AED",
            "price": "450",
            "url": "https://vedaracare.ae/treatments/shirodhara-dubai/"
          },
          {
            "@type": "Offer",
            "name": "Kativasti",
            "priceCurrency": "AED",
            "price": "380",
            "url": "https://vedaracare.ae/treatments/kativasti-dubai/"
          },
          {
            "@type": "Offer",
            "name": "Njavarakizhi",
            "priceCurrency": "AED",
            "price": "480",
            "url": "https://vedaracare.ae/treatments/njavarakizhi-dubai/"
          },
          {
            "@type": "Offer",
            "name": "Udvartana",
            "priceCurrency": "AED",
            "price": "420",
            "url": "https://vedaracare.ae/treatments/udvartana-dubai/"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Ayurveda Clinic in JVC", "item": "https://vedaracare.ae/ayurveda-clinic-jvc/"},
        {"@type": "ListItem", "position": 3, "name": "Ayurvedic Massage in JVC", "item": "https://vedaracare.ae/treatments/ayurvedic-massage-jvc/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": ayurvedicMassageJVCFaqs.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ];

  return (
    <>
      <Head>
        <title>Ayurvedic Massage in JVC, Dubai | Classical Therapy | Vedara Care</title>
        <meta name="description" content="Authentic Ayurvedic massage in Jumeirah Village Circle — Abhyanga, Shirodhara, Kativasti & more. DHA-licensed, doctor-prescribed, same-gender therapists. From AED 250." />
         <meta name="robots" content="index, follow, max-image-preview:large" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://vedaracare.ae/treatments/ayurvedic-massage-jvc/" />
        <meta property="og:title" content="Ayurvedic Massage in JVC, Dubai — Abhyanga, Shirodhara & More" />
        <meta property="og:description" content="Classical Ayurvedic massage at our DHA-licensed clinic in Jumeirah Village Circle. Doctor-prescribed, same-gender therapists. From AED 250." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/ayurvedic-massage-jvc.jpg" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://vedaracare.ae/treatments/ayurvedic-massage-jvc/" />
        <meta name="twitter:title" content="Ayurvedic Massage in JVC, Dubai — Abhyanga, Shirodhara & More" />
        <meta name="twitter:description" content="Classical Ayurvedic massage at our DHA-licensed clinic in Jumeirah Village Circle. Doctor-prescribed, same-gender therapists. From AED 250." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/ayurvedic-massage-jvc.jpg" />

        {/* Canonical & Language Tags */}
        <link rel="canonical" href="https://vedaracare.ae/treatments/ayurvedic-massage-jvc/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/treatments/ayurvedic-massage-jvc/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/treatments/ayurvedic-massage-jvc/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/treatments/ayurvedic-massage-jvc/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>

      <main>
        <AyurvedaHero {...ayurvedicMassageJVCHero} />
        <AyurvedaIntro {...ayurvedicMassageJVCIntro} />
        
        <MassagesTable />
        <AyurvedaVsSpa />
        
        <TreatmentReviews 
          {...ayurvedicMassageJVCReviews}
          isDarkText={false}
          bgColor="bg-[#1F4538]"
          cardBgColor="bg-white/10"
        />

        <PricingSection />

        <FAQ {...ayurvedicMassageJVCFaqs} />

        <TreatmentLocation {...ayurvedicMassageJVCLocation} />

        <CTA 
          {...ayurvedicMassageJVCCTA}
          button1Class="bg-[#184C3A] text-white hover:bg-[#123a2c]"
          button2Class="bg-white border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
        />

        <RelatedPages {...ayurvedicMassageJVCRelatedPages} />
      </main>
    </>
  );
};

export default AyurvedicMassageJVC;
