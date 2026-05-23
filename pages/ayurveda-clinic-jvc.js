import Head from 'next/head';
import AyurvedaHero from '../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../components/ayurveda/AyurvedaIntro';
import Therapies from '../components/ayurveda/Therapies';
import Physician from '../components/ayurveda/Physician';
import FAQ from '../components/home/FAQ';
import Location from '../components/home/Location';
import CTA from '../components/home/CTA';
import Journal from '../components/home/Journal';
import WhyVedara from '../components/home/WhyVedara';
import Reviews from '../components/home/Reviews';
import Conditions from '../components/home/Conditions';
import { 
  ayurvedaFaqs, 
  ayurvedaJournal, 
  ayurvedaHero, 
  ayurvedaIntro, 
  ayurvedaLocation, 
  ayurvedaCTA,
  ayurvedaWhy,
  ayurvedaReviews,
  ayurvedaConditions,
  ayurvedaTherapies,
  ayurvedaPhysician
} from '../data/ayurvedaData';

const AyurvedaClinicJVC = () => {
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalClinic", "LocalBusiness"],
      "@id": "https://vedaracare.ae/ayurveda-clinic-jvc/#clinic",
      "name": "Vedara Care Polyclinic — Ayurveda Department",
      "url": "https://vedaracare.ae/ayurveda-clinic-jvc/",
      "image": "https://vedaracare.ae/images/ayurveda-clinic-jvc-hero.jpg",
      "telephone": "+971-XX-XXX-XXXX",
      "email": "info@vedaracare.ae",
      "priceRange": "AED",
      "medicalSpecialty": "Ayurveda",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[Full street address, building, unit]",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.0XXX",
        "longitude": "55.2XXX"
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
      "availableService": [
        {"@type":"MedicalProcedure","name":"Panchakarma","url":"https://vedaracare.ae/treatments/panchakarma-dubai/"},
        {"@type":"MedicalProcedure","name":"Abhyanga","url":"https://vedaracare.ae/treatments/abhyanga-dubai/"},
        {"@type":"MedicalProcedure","name":"Shirodhara","url":"https://vedaracare.ae/treatments/shirodhara-dubai/"},
        {"@type":"MedicalProcedure","name":"Kativasti","url":"https://vedaracare.ae/treatments/kativasti-dubai/"},
        {"@type":"MedicalProcedure","name":"Njavarakizhi","url":"https://vedaracare.ae/treatments/njavarakizhi-dubai/"},
        {"@type":"MedicalProcedure","name":"Nasya"},
        {"@type":"MedicalProcedure","name":"Basti"},
        {"@type":"MedicalProcedure","name":"Udvartana"}
      ],
      "areaServed": [
        {"@type":"Place","name":"Jumeirah Village Circle"},
        {"@type":"Place","name":"Jumeirah Village Triangle"},
        {"@type":"Place","name":"Al Barsha South"},
        {"@type":"Place","name":"Dubai Sports City"},
        {"@type":"Place","name":"Motor City"},
        {"@type":"Place","name":"Dubai"}
      ],
      "hasCredential": {
        "@type":"EducationalOccupationalCredential",
        "credentialCategory":"License",
        "name":"DHA Healthcare Facility License",
        "identifier":"[DHA License Number]"
      },
      "sameAs": [
        "https://en.wikipedia.org/wiki/Ayurveda"
      ],
      "aggregateRating": {
        "@type":"AggregateRating",
        "ratingValue":"4.9",
        "reviewCount":"[live count]",
        "bestRating":"5"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. [Full Name]",
      "image": "https://vedaracare.ae/doctors/dr-name.jpg",
      "url": "https://vedaracare.ae/doctors/dr-name-ayurveda/",
      "medicalSpecialty": "Ayurveda",
      "hasCredential": [
        {"@type":"EducationalOccupationalCredential","name":"BAMS","credentialCategory":"degree"},
        {"@type":"EducationalOccupationalCredential","name":"MD (Ayurveda)","credentialCategory":"degree"},
        {"@type":"EducationalOccupationalCredential","name":"DHA Professional License","identifier":"DHA-P-XXXXXXX"}
      ],
      "knowsLanguage": ["English","Hindi","Malayalam","Arabic"],
      "yearsOfExperience": "15",
      "worksFor": {"@id":"https://vedaracare.ae/#organization"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Ayurveda Clinic in JVC, Dubai",
      "url": "https://vedaracare.ae/ayurveda-clinic-jvc/",
      "about": {"@type":"MedicalTherapy","name":"Ayurveda"},
      "audience": {"@type":"PatientAudience"},
      "lastReviewed": "2026-05-22",
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. [Lead Ayurvedic Physician]",
        "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
      },
      "primaryImageOfPage": "https://vedaracare.ae/images/ayurveda-clinic-jvc-hero.jpg"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type":"ListItem","position":1,"name":"Home","item":"https://vedaracare.ae/"},
        {"@type":"ListItem","position":2,"name":"Ayurveda Clinic in JVC","item":"https://vedaracare.ae/ayurveda-clinic-jvc/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Ayurveda recognised and licensed in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Ayurveda is officially recognised by the Dubai Health Authority (DHA), which licenses both Ayurvedic clinics and individual Ayurvedic physicians. Every Ayurvedic doctor at Vedara Care Polyclinic holds an individual DHA professional license, displayed on their profile. Our clinic operates under DHA Healthcare Facility License XXXXX."
          }
        },
        {
          "@type": "Question",
          "name": "Are Ayurvedic doctors at Vedara Care properly qualified?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All our Ayurvedic physicians hold a BAMS (Bachelor of Ayurvedic Medicine and Surgery) — a 5.5-year medical degree from recognised Indian universities. Many also hold MD (Ayurveda) postgraduate specialisations and DHA professional licenses."
          }
        }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Ayurveda Clinic in JVC, Dubai | Vedara Care</title>
        <meta name="description" content="Authentic Ayurveda clinic in Jumeirah Village Circle, Dubai. DHA-licensed Ayurvedic doctors offering Panchakarma, PCOS treatment, and chronic pain management." />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ayurveda Clinic in JVC, Dubai | Vedara Care Polyclinic" />
        <meta property="og:description" content="DHA-licensed Ayurveda clinic in Jumeirah Village Circle. BAMS-qualified doctors. Authentic Panchakarma, Abhyanga, Shirodhara." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/ayurveda-clinic-jvc.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/ayurveda-clinic-jvc/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_AE" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Canonical & Hreflang */}
        <link rel="canonical" href="https://vedaracare.ae/ayurveda-clinic-jvc/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/ayurveda-clinic-jvc/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/ayurveda-clinic-jvc/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/ayurveda-clinic-jvc/" />

        {/* Schema Markup */}
        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <AyurvedaHero {...ayurvedaHero} />
      <AyurvedaIntro {...ayurvedaIntro} />
      
      <Therapies {...ayurvedaTherapies} />
      
      
      <Conditions {...ayurvedaConditions} />

        <Physician {...ayurvedaPhysician} />
      
      <WhyVedara {...ayurvedaWhy} />
      
      <Reviews {...ayurvedaReviews} />
      
      <FAQ {...ayurvedaFaqs} />

      <Location {...ayurvedaLocation} />

      <CTA {...ayurvedaCTA} />

      <Journal {...ayurvedaJournal} />
    </>
  );
};

export default AyurvedaClinicJVC;
