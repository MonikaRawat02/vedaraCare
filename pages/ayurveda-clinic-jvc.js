import Head from 'next/head';
import AyurvedaHero from '../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../components/ayurveda/AyurvedaIntro';
import Therapies from '../components/ayurveda/Therapies';
import Physician from '../components/ayurveda/Physician';
import DoctorConsultation from '../components/doctor/DoctorConsultation';
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
import { ayurvedaConsultationData } from '../data/doctorData';

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
      "name": "Dr. Priya Menon",
      "image": "https://vedaracare.ae/doctors/dr-priya-menon-ayurvedic-physician-jvc.webp",
      "url": "https://vedaracare.ae/doctors/dr-priya-menon-ayurveda/",
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
      "lastReviewed": "2026-05-23",
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. Priya Menon",
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
      "mainEntity": ayurvedaFaqs.faqs.map(faq => ({
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
        <title>Ayurveda Clinic in JVC, Dubai | DHA-Licensed | Vedara Care</title>
        <meta name="description" content="DHA-licensed Ayurveda clinic in Jumeirah Village Circle, Dubai. BAMS-qualified doctors offering authentic Panchakarma, Abhyanga, Shirodhara & dosha-based care. Book today." />
        
        {/* Robots Directives */}
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Open Graph */}
        <meta property="og:title" content="Ayurveda Clinic in JVC, Dubai | Vedara Care Polyclinic" />
        <meta property="og:description" content="DHA-licensed Ayurveda clinic in Jumeirah Village Circle. BAMS-qualified doctors. Authentic Panchakarma, Abhyanga, Shirodhara." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/ayurveda-clinic-jvc.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/ayurveda-clinic-jvc/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_AE" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Canonical & Language Tags */}
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
      <DoctorConsultation {...ayurvedaConsultationData} />
      
      <WhyVedara {...ayurvedaWhy} />
      
      <Reviews {...ayurvedaReviews} />
      
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2] text-center">
            What Ayurveda actually costs in Dubai.
          </h2>
        </div>
      </section>
      
      <FAQ {...ayurvedaFaqs} />
      <Location {...ayurvedaLocation} />
      <CTA {...ayurvedaCTA} />
      <Journal {...ayurvedaJournal} />
    </>
  );
};

export default AyurvedaClinicJVC;
