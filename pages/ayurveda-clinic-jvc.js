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
      "image": "https://vedaracare.ae/images/ayurveda-clinic-jvc-hero.webp",
      "telephone": "+971-XX-XXX-XXXX",
      "email": "info@vedaracare.ae",
      "priceRange": "AED",
      "medicalSpecialty": {"@type": "MedicalSpecialty", "name": "Ayurveda", "@id": "https://vedaracare.ae/ayurveda-clinic-jvc/#ayurveda"},
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
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
          "dayOfWeek": ["Sunday"],
          "opens": "10:00",
          "closes": "19:00"
        }
      ],
      "availableService": [
        {"@type":"MedicalProcedure","name":"Panchakarma","url":"https://vedaracare.ae/treatments/panchakarma-dubai/","sameAs":"https://en.wikipedia.org/wiki/Panchakarma"},
        {"@type":"MedicalProcedure","name":"Abhyanga","url":"https://vedaracare.ae/treatments/abhyanga-dubai/","sameAs":"https://en.wikipedia.org/wiki/Abhyanga"},
        {"@type":"MedicalProcedure","name":"Shirodhara","url":"https://vedaracare.ae/treatments/shirodhara-dubai/","sameAs":"https://en.wikipedia.org/wiki/Shirodhara"},
        {"@type":"MedicalProcedure","name":"Kativasti","url":"https://vedaracare.ae/treatments/kativasti-dubai/"},
        {"@type":"MedicalProcedure","name":"Njavarakizhi","url":"https://vedaracare.ae/treatments/njavarakizhi-dubai/"},
        {"@type":"MedicalProcedure","name":"Nasya","sameAs":"https://en.wikipedia.org/wiki/Nasya_(Ayurveda)"},
        {"@type":"MedicalProcedure","name":"Basti","sameAs":"https://en.wikipedia.org/wiki/Basti_(Panchakarma)"},
        {"@type":"MedicalProcedure","name":"Udvartana"},
        {"@type":"MedicalProcedure","name":"Nadi Pariksha (Pulse Diagnosis)","description":"Classical Ayurvedic pulse diagnosis used for dosha assessment and treatment planning"}
      ],
      "areaServed": [
        {"@type":"Place","name":"Jumeirah Village Circle","sameAs":"https://en.wikipedia.org/wiki/Jumeirah_Village_Circle"},
        {"@type":"Place","name":"Jumeirah Village Triangle"},
        {"@type":"Place","name":"Al Barsha South"},
        {"@type":"Place","name":"Dubai Sports City"},
        {"@type":"Place","name":"Motor City"},
        {"@type":"Place","name":"Dubai","sameAs":"https://en.wikipedia.org/wiki/Dubai"}
      ],
      "hasCredential": {
        "@type":"EducationalOccupationalCredential",
        "credentialCategory":"License",
        "name":"DHA Healthcare Facility License",
        "identifier":"[DHA License Number]",
        "recognizedBy": {"@type": "Organization", "name": "Dubai Health Authority", "url": "https://www.dha.gov.ae/", "sameAs": "https://en.wikipedia.org/wiki/Dubai_Health_Authority"}
      },
      "sameAs": [
        "https://en.wikipedia.org/wiki/Ayurveda"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue":"4.9",
        "reviewCount":"[live count]",
        "bestRating":"5"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalTherapy",
      "@id": "https://vedaracare.ae/ayurveda-clinic-jvc/#ayurveda",
      "name": "Ayurveda",
      "alternateName": ["Ayurvedic Medicine", "Ayurvedic Treatment"],
      "description": "Classical Ayurvedic medicine — pulse-based diagnosis (Nadi Pariksha), dosha analysis, herbal medicines, Panchakarma detoxification, and personalised treatment protocols for chronic conditions.",
      "sameAs": "https://en.wikipedia.org/wiki/Ayurveda",
      "usedToTreat": [
        {"@type": "MedicalCondition", "name": "Chronic Back Pain", "code": {"@type": "MedicalCode", "code": "M54.5", "codingSystem": "ICD-10"}, "url": "https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/"},
        {"@type": "MedicalCondition", "name": "PCOS", "code": {"@type": "MedicalCode", "code": "E28.2", "codingSystem": "ICD-10"}, "url": "https://vedaracare.ae/conditions/pcos-ayurveda-dubai/"},
        {"@type": "MedicalCondition", "name": "Migraine", "code": {"@type": "MedicalCode", "code": "G43", "codingSystem": "ICD-10"}, "url": "https://vedaracare.ae/conditions/migraine-ayurveda-dubai/"},
        {"@type": "MedicalCondition", "name": "Hair Loss", "code": {"@type": "MedicalCode", "code": "L65.9", "codingSystem": "ICD-10"}, "url": "https://vedaracare.ae/conditions/hair-loss-ayurveda-dubai/"},
        {"@type": "MedicalCondition", "name": "Stress and Anxiety", "code": {"@type": "MedicalCode", "code": "F41.1", "codingSystem": "ICD-10"}, "url": "https://vedaracare.ae/conditions/stress-anxiety-ayurveda-dubai/"},
        {"@type": "MedicalCondition", "name": "Thyroid Disorders", "code": {"@type": "MedicalCode", "code": "E03.9", "codingSystem": "ICD-10"}, "url": "https://vedaracare.ae/conditions/thyroid-ayurveda-dubai/"},
        {"@type": "MedicalCondition", "name": "Postnatal Recovery", "code": {"@type": "MedicalCode", "code": "Z39", "codingSystem": "ICD-10"}, "url": "https://vedaracare.ae/conditions/postnatal-ayurveda-dubai/"},
        {"@type": "MedicalCondition", "name": "Diabetes (Type 2)", "code": {"@type": "MedicalCode", "code": "E11", "codingSystem": "ICD-10"}, "url": "https://vedaracare.ae/conditions/diabetes-ayurveda-dubai/"},
        {"@type": "MedicalCondition", "name": "Arthritis", "code": {"@type": "MedicalCode", "code": "M06.9", "codingSystem": "ICD-10"}, "url": "https://vedaracare.ae/conditions/arthritis-ayurveda-dubai/"},
        {"@type": "MedicalCondition", "name": "Weight Management", "code": {"@type": "MedicalCode", "code": "E66.9", "codingSystem": "ICD-10"}, "url": "https://vedaracare.ae/conditions/weight-loss-ayurveda-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://vedaracare.ae/#organization",
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": "https://vedaracare.ae/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "department": {
        "@type": "MedicalClinic",
        "@id": "https://vedaracare.ae/ayurveda-clinic-jvc/#clinic",
        "name": "Ayurveda Department"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Priya Menon",
      "image": "https://vedaracare.ae/doctors/dr-priya-menon-ayurvedic-physician-jvc.webp",
      "url": "https://vedaracare.ae/doctors/dr-priya-menon-ayurveda/",
      "medicalSpecialty": {"@type": "MedicalSpecialty", "name": "Ayurveda"},
      "hasCredential": [
        {"@type":"EducationalOccupationalCredential","name":"BAMS","credentialCategory":"degree","sameAs":"https://en.wikipedia.org/wiki/Bachelor_of_Ayurvedic_Medicine_and_Surgery"},
        {"@type":"EducationalOccupationalCredential","name":"MD (Ayurveda)","credentialCategory":"degree"},
        {"@type":"EducationalOccupationalCredential","name":"DHA Professional License","identifier":"DHA-P-XXXXXXX","recognizedBy":{"@type":"Organization","name":"Dubai Health Authority","url":"https://www.dha.gov.ae/"}}
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
      "about": {"@type":"MedicalTherapy","name":"Ayurveda","@id":"https://vedaracare.ae/ayurveda-clinic-jvc/#ayurveda","sameAs":"https://en.wikipedia.org/wiki/Ayurveda"},
      "audience": {"@type":"PatientAudience"},
      "lastReviewed": "2026-05-23",
      "reviewedBy": {
        "@type": "Physician",
        "name": "Dr. Priya Menon",
        "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
      },
      "primaryImageOfPage": "https://vedaracare.ae/images/ayurveda-clinic-jvc-hero.webp",
      "mentions": [
        {"@type":"MedicalProcedure","name":"Nadi Pariksha","description":"Classical Ayurvedic pulse diagnosis"},
        {"@type":"MedicalProcedure","name":"Panchakarma","url":"https://vedaracare.ae/treatments/panchakarma-dubai/"},
        {"@type":"MedicalCondition","name":"Chronic Back Pain","url":"https://vedaracare.ae/conditions/back-pain-ayurveda-dubai/"},
        {"@type":"MedicalCondition","name":"PCOS","url":"https://vedaracare.ae/conditions/pcos-ayurveda-dubai/"},
        {"@type":"MedicalCondition","name":"Migraine","url":"https://vedaracare.ae/conditions/migraine-ayurveda-dubai/"},
        {"@type":"Organization","name":"Dubai Health Authority","url":"https://www.dha.gov.ae/"}
      ]
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
