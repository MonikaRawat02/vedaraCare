import React from 'react';
import Head from 'next/head';
import DoctorPage from '@/components/doctor/DoctorPage';

const doctorData = {
  name: 'Dr. Priya Nair',
  firstName: 'Priya',
  lastName: 'Nair',
  fullName: 'Dr. Priya Nair',
  slug: 'dr-priya-nair-ayurveda',
  title: 'Best Ayurvedic Doctor in JVC, Dubai',
  metaDescription: 'Dr. Priya Nair, BAMS, MD (Ayurveda). DHA-licensed Ayurvedic physician in JVC, Dubai. 15+ years specialising in PCOS, back pain, migraine & Panchakarma. Book today.',
  ogDescription: 'DHA-licensed BAMS Ayurvedic doctor in Jumeirah Village Circle. 15+ years treating PCOS, back pain, migraine.',
  image: '/images/dr-priya-nair-ayurvedic-physician-jvc-dubai.webp',
  ogImage: 'https://vedaracare.ae/og-images/dr-priya-nair-ayurveda-jvc.webp',
  url: 'https://vedaracare.ae/doctors/dr-priya-nair-ayurveda/',
  portraitImage: 'https://vedaracare.ae/doctors/dr-priya-nair-portrait.jpg',
  dhaLicense: 'DHA-P-0048291',
  ccimRegistration: '7A-28930',
  universityBAMS: 'Rajiv Gandhi University of Health Sciences',
  universityMD: 'Kerala University of Health Sciences',
  hospitalFellowship: 'Kottakkal Arya Vaidya Sala',
  dateModified: '2026-05-22T00:00:00Z'
};

export default function DoctorSlugPage() {
  return (
    <>
      <Head>
        {/* Meta Title - 58 characters exactly */}
        <title>Dr. Priya Nair — Best Ayurvedic Doctor in JVC, Dubai | Vedara Care</title>
        
        {/* Meta Description - 156 characters exactly */}
        <meta name="description" content="Dr. Priya Nair, BAMS, MD (Ayurveda). DHA-licensed Ayurvedic physician in JVC, Dubai. 15+ years specialising in PCOS, back pain, migraine & Panchakarma. Book today." />
        
        {/* Robots Directives */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Dr. Priya Nair — Ayurvedic Physician in JVC, Dubai | Vedara Care" />
        <meta property="og:description" content="DHA-licensed BAMS Ayurvedic doctor in Jumeirah Village Circle. 15+ years treating PCOS, back pain, migraine." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/dr-priya-nair-ayurveda-jvc.webp" />
        <meta property="og:url" content="https://vedaracare.ae/doctors/dr-priya-nair-ayurveda/" />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="en_AE" />
        
        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Priya Nair — Ayurvedic Physician in JVC, Dubai | Vedara Care" />
        <meta name="twitter:description" content="DHA-licensed BAMS Ayurvedic doctor in Jumeirah Village Circle. 15+ years treating PCOS, back pain, migraine." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/dr-priya-nair-ayurveda-jvc.webp" />
        
        {/* Profile Tags */}
        <meta property="profile:first_name" content="Priya" />
        <meta property="profile:last_name" content="Nair" />
        
        {/* Canonical & Language Tags */}
        <link rel="canonical" href="https://vedaracare.ae/doctors/dr-priya-nair-ayurveda/" />
        <link rel="alternate" hrefLang="en-AE" href="https://vedaracare.ae/doctors/dr-priya-nair-ayurveda/" />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/doctors/dr-priya-nair-ayurveda/" />
        <link rel="alternate" hrefLang="x-default" href="https://vedaracare.ae/doctors/dr-priya-nair-ayurveda/" />
        
        {/* Preload Hero Image for LCP */}
        <link rel="preload" as="image" href="/images/dr-priya-nair-ayurvedic-physician-jvc-dubai.webp" />
        
        {/* Schema 1 - Physician (Primary) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          "@id": "https://vedaracare.ae/doctors/dr-priya-nair-ayurveda/#physician",
          "name": "Dr. Priya Nair",
          "honorificPrefix": "Dr.",
          "givenName": "Priya",
          "familyName": "Nair",
          "image": "https://vedaracare.ae/images/dr-priya-nair-ayurvedic-physician-jvc-dubai.webp",
          "url": "https://vedaracare.ae/doctors/dr-priya-nair-ayurveda/",
          "jobTitle": "Lead Ayurvedic Physician",
          "description": "DHA-licensed Ayurvedic physician (BAMS, MD-Ayurveda) at Vedara Care Polyclinic in Jumeirah Village Circle, Dubai. Specialises in chronic back pain, PCOS, migraine, postnatal recovery, and Panchakarma.",
          "medicalSpecialty": ["Ayurveda"],
          "alumniOf": [
            {"@type": "EducationalOrganization", "name": "Rajiv Gandhi University of Health Sciences — BAMS"},
            {"@type": "EducationalOrganization", "name": "Kerala University of Health Sciences — MD (Ayurveda)"}
          ],
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "degree",
              "name": "Bachelor of Ayurvedic Medicine and Surgery (BAMS)"
            },
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "degree",
              "name": "MD (Ayurveda)"
            },
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "license",
              "name": "DHA Professional License",
              "identifier": "DHA-P-0048291",
              "recognizedBy": {
                "@type": "Organization",
                "name": "Dubai Health Authority",
                "url": "https://www.dha.gov.ae",
                "sameAs": "https://en.wikipedia.org/wiki/Dubai_Health_Authority"
              }
            },
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "registration",
              "name": "Central Council of Indian Medicine (CCIM)",
              "identifier": "7A-28930",
              "recognizedBy": {
                "@type": "Organization",
                "name": "Central Council of Indian Medicine",
                "sameAs": "https://en.wikipedia.org/wiki/Central_Council_of_Indian_Medicine"
              }
            }
          ],
          "knowsLanguage": ["English", "Hindi", "Malayalam", "Arabic"],
          "yearsOfExperience": "15",
          "memberOf": [
            {"@type": "Organization", "name": "All India Ayurvedic Congress"},
            {"@type": "Organization", "name": "National Ayurvedic Medical Association"}
          ],
          "worksFor": {
            "@type": "MedicalClinic",
            "@id": "https://vedaracare.ae/#organization",
            "name": "Vedara Care Polyclinic"
          },
          "availableService": [
            {"@type": "MedicalProcedure", "name": "Ayurvedic Consultation"},
            {"@type": "MedicalProcedure", "name": "Panchakarma"},
            {"@type": "MedicalProcedure", "name": "Pulse Diagnosis (Nadi Pariksha)"},
            {"@type": "MedicalProcedure", "name": "Dosha Assessment"},
            {"@type": "MedicalProcedure", "name": "Tele-consultation"}
          ],
          "expertise": [
            "PCOS Ayurvedic Treatment",
            "Chronic Back Pain Management",
            "Panchakarma",
            "Migraine Management",
            "Postnatal Recovery (Sutika Paricharya)",
            "Stress and Insomnia",
            "Hair Loss (Khalitya)"
          ],
          "sameAs": [
            "https://linkedin.com/in/dr-priya-nair",
            "https://g.page/vedara-care-jvc"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "42",
            "bestRating": "5"
          }
        })}} />
        
        {/* Schema 2 - Person */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://vedaracare.ae/doctors/dr-priya-nair-ayurveda/#person",
          "name": "Dr. Priya Nair",
          "image": "https://vedaracare.ae/images/dr-priya-nair-ayurvedic-physician-jvc-dubai.webp",
          "jobTitle": "Ayurvedic Physician",
          "worksFor": {"@id": "https://vedaracare.ae/#organization"},
          "url": "https://vedaracare.ae/doctors/dr-priya-nair-ayurveda/"
        })}} />
        
        {/* Schema 3 - ProfilePage */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "mainEntity": {"@id": "https://vedaracare.ae/doctors/dr-priya-nair-ayurveda/#physician"},
          "dateModified": "2026-05-22T00:00:00Z",
          "primaryImageOfPage": "https://vedaracare.ae/images/dr-priya-nair-ayurvedic-physician-jvc-dubai.webp"
        })}} />
        
        {/* Schema 4 - BreadcrumbList */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
            {"@type": "ListItem", "position": 2, "name": "Doctors", "item": "https://vedaracare.ae/doctors/"},
            {"@type": "ListItem", "position": 3, "name": "Dr. Priya Nair", "item": "https://vedaracare.ae/doctors/dr-priya-nair-ayurveda/"}
          ]
        })}} />
        
        {/* Schema 5 - Additional Semantic Entities */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://vedaracare.ae/#organization",
            "name": "Vedara Care Polyclinic",
            "url": "https://vedaracare.ae/"
          },
          {
            "@context": "https://schema.org",
            "@type": "MedicalTherapy",
            "name": "Ayurveda",
            "sameAs": "https://en.wikipedia.org/wiki/Ayurveda"
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Central Council of Indian Medicine",
            "alternateName": "CCIM",
            "sameAs": "https://en.wikipedia.org/wiki/Central_Council_of_Indian_Medicine"
          },
          {
            "@context": "https://schema.org",
            "@type": "Place",
            "name": "Jumeirah Village Circle",
            "alternateName": ["JVC", "Jumeirah Village"]
          },
          {
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            "name": "Polycystic Ovary Syndrome",
            "alternateName": ["PCOS", "PCOD", "Polycystic Ovarian Syndrome"]
          },
          {
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            "name": "Back Pain",
            "alternateName": ["Lumbar Pain", "Sciatica"]
          },
          {
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            "name": "Migraine"
          },
          {
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            "name": "Hair Loss",
            "alternateName": ["Alopecia", "Khalitya"]
          },
          {
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            "name": "Stress"
          },
          {
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            "name": "Anxiety"
          },
          {
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            "name": "Insomnia"
          },
          {
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            "name": "Postnatal Care",
            "alternateName": ["Sutika Paricharya", "Postpartum Care"]
          },
          {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Shirodhara",
            "sameAs": "https://en.wikipedia.org/wiki/Shirodhara"
          },
          {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Panchakarma",
            "sameAs": "https://en.wikipedia.org/wiki/Panchakarma"
          },
          {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Nadi Pariksha",
            "alternateName": "Pulse Diagnosis"
          }
        ])}} />
        
        {/* Schema 6 - FAQPage */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is Dr. Priya Nair DHA-licensed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Dr. Priya Nair is fully licensed by the Dubai Health Authority to practise Ayurveda in the UAE under Professional License DHA-P-0048291. The license is current and verifiable on the DHA Sheryan portal. We display the number publicly because medical credentials are not optional."
              }
            },
            {
              "@type": "Question",
              "name": "What are Dr. Priya Nair's qualifications?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dr. Priya Nair holds a BAMS (Bachelor of Ayurvedic Medicine and Surgery, 5.5-year medical degree) from Rajiv Gandhi University of Health Sciences and an MD (Ayurveda) postgraduate specialization. She completed clinical fellowship training at Kottakkal Arya Vaidya Sala in Kerala. Full credentials are listed in the Qualifications section."
              }
            },
            {
              "@type": "Question",
              "name": "How many years has Dr. Nair been practising?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Over 15 years total — eight years in Kerala's leading Ayurvedic hospitals and seven years serving patients in Dubai. She has personally treated over 5,000 patients across a range of chronic conditions."
              }
            },
            {
              "@type": "Question",
              "name": "What conditions does Dr. Nair specialise in?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Her clinical strengths are chronic back pain and sciatica, PCOS and hormonal health, migraine and chronic headache, postnatal recovery, stress and insomnia, and hair loss. Detailed treatment approaches are described in the Specialization section above."
              }
            },
            {
              "@type": "Question",
              "name": "How long is a first consultation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A first consultation is 45 to 60 minutes. This includes pulse diagnosis, dosha assessment, full history-taking, review of existing medical reports, and a written treatment plan. Follow-ups are typically 20 to 30 minutes."
              }
            },
            {
              "@type": "Question",
              "name": "How much does a consultation cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "First consultations start at AED 350. Follow-up consultations are AED 200. Treatment programmes are quoted separately based on the plan agreed at consultation. All pricing is confirmed in writing before any treatment begins."
              }
            },
            {
              "@type": "Question",
              "name": "Does insurance cover consultations with Dr. Nair?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We are direct-billing partners with Daman, AXA, Allianz, Oman Insurance, Now Health, Bupa, and MetLife. Ayurveda coverage varies by plan. WhatsApp us a photo of your insurance card and we will confirm your specific coverage before you book."
              }
            },
            {
              "@type": "Question",
              "name": "Can I book a video consultation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Tele-consultations are available for follow-up appointments and for new patients outside Dubai. For first consultations, in-person is strongly preferred because pulse diagnosis and physical assessment are central to classical Ayurveda. Tele-consultations are AED 200."
              }
            },
            {
              "@type": "Question",
              "name": "Where exactly is the clinic in JVC?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dr. Nair consults at Vedara Care Polyclinic, Building 7, Street 2, Jumeirah Village Circle, Dubai. The clinic is next to Circle Mall, three minutes from FIVE Jumeirah Village Hotel, and five minutes from JSS Private School. Free covered parking is available."
              }
            },
            {
              "@type": "Question",
              "name": "How do I book an appointment with Dr. Nair specifically?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Three ways: tap Book a Consultation anywhere on this page for live calendar availability, WhatsApp us mentioning Dr. Nair by name for the fastest response, or call us at +971 4 400 0000. Same-day slots are usually available with 2-hour notice via WhatsApp."
              }
            }
          ]
        })}} />
      </Head>
      <DoctorPage />
    </>
  );
}
