import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import FrozenShoulderPhases from '../../components/ayurveda/FrozenShoulderPhases';
import KneeTreatmentApproach from '../../components/ayurveda/KneeTreatmentApproach';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
// import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism'
import FAQ from '../../components/home/FAQ';
// import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import TreatmentLocation   from '../../components/ayurveda/TreatmentLocationCustom';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import { PostSurgeryTeam } from '../../components/ayurveda/PostSurgeryComponents';
import {
  frozenShoulderHero,
  frozenShoulderIntro,
  frozenShoulderMechanism1,
  frozenShoulderOutcomes,
  frozenShoulderPhases,
  frozenShoulderTreatmentMechanism,
  frozenShoulderMechanism2,
  frozenShoulderApproach,
  frozenShoulderInjectionsSurgery,
  frozenShoulderReviews,
  frozenShoulderTeam,
  frozenShoulderPricing,
  frozenShoulderFaqs,
  frozenShoulderLocation,
  frozenShoulderCTA,
  frozenShoulderRelatedPages
} from '../../data/frozenShoulderData';

const FrozenShoulderDubai = () => {
  const currentUrl = "https://vedaracare.ae/conditions/frozen-shoulder-dubai/";
  const publishedDate = "2024-06-01T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy"],
      "@id": `${currentUrl}#frozen-shoulder`,
      "name": "Vedara Care Frozen Shoulder Treatment",
      "alternateName": ["Vedara Adhesive Capsulitis Treatment Dubai", "Vedara Frozen Shoulder JVC"],
      "url": currentUrl,
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "Specialist frozen shoulder treatment at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. Phase-specific physiotherapy for adhesive capsulitis delivered by DPT-qualified specialists. Particular expertise in diabetic frozen shoulder. Coordination with rheumatologists for hydrodilatation when appropriate.",
      "telephone": "+971 55 586 7466",
      "priceRange": "AED 350 - AED 18,000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit G-05, Circle Mall, JVC District 12",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.068346",
        "longitude": "55.2072235"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "21:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "10:00",
          "closes": "18:00"
        }
      ],
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
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
        {"@type": "Place", "name": "Mirdif"}
      ],
      "medicalSpecialty": [
        "Frozen Shoulder Treatment",
        "Adhesive Capsulitis Treatment",
        "Physiotherapy",
        "Physical Therapy",
        "Manual Therapy",
        "Shoulder Rehabilitation"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Frozen Shoulder Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Adhesive Capsulitis Treatment"},
        {"@type": "MedicalProcedure", "name": "Phase-Specific Joint Mobilisation"},
        {"@type": "MedicalProcedure", "name": "Capsular Stretching"},
        {"@type": "MedicalProcedure", "name": "Manual Therapy"},
        {"@type": "MedicalProcedure", "name": "Dry Needling"},
        {"@type": "MedicalProcedure", "name": "Diabetic Frozen Shoulder Treatment"},
        {"@type": "MedicalProcedure", "name": "Post-Surgical Frozen Shoulder Treatment"},
        {"@type": "MedicalProcedure", "name": "Hydrodilatation Coordination"},
        {"@type": "MedicalProcedure", "name": "Manipulation Under Anaesthesia Coordination"},
        {"@type": "MedicalProcedure", "name": "Capsular Release Surgery Coordination"}
      ],
      "memberOf": {
        "@type": "GovernmentOrganization",
        "name": "Dubai Health Authority (DHA)"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "200",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalClinic",
          "@id": "https://vedaracare.ae/#organization",
          "name": "Vedara Care Polyclinic"
        },
        {
          "@type": "MedicalCondition",
          "name": "Adhesive Capsulitis (Frozen Shoulder)",
          "alternateName": ["Frozen Shoulder", "Adhesive Capsulitis", "Shoulder Capsulitis"],
          "code": {"@type": "MedicalCode", "code": "M75.0", "codingSystem": "ICD-10"},
          "possibleTreatment": [
            {"@type": "MedicalProcedure", "name": "Phase-Specific Physiotherapy"},
            {"@type": "MedicalProcedure", "name": "Phase-Specific Joint Mobilisation"},
            {"@type": "MedicalProcedure", "name": "Capsular Stretching"},
            {"@type": "MedicalProcedure", "name": "Manual Therapy"},
            {"@type": "MedicalProcedure", "name": "Dry Needling"},
            {"@type": "MedicalProcedure", "name": "Hydrodilatation"},
            {"@type": "MedicalProcedure", "name": "Manipulation Under Anaesthesia"},
            {"@type": "MedicalProcedure", "name": "Capsular Release Surgery"}
          ],
          "associatedAnatomy": [
            {"@type": "AnatomicalStructure", "name": "Glenohumeral Joint"},
            {"@type": "AnatomicalStructure", "name": "Shoulder Joint Capsule"},
            {"@type": "AnatomicalStructure", "name": "Rotator Cuff"}
          ]
        },
        {
          "@type": "MedicalCondition",
          "name": "Diabetic Frozen Shoulder",
          "alternateName": ["Diabetic Adhesive Capsulitis"]
        },
        {
          "@type": "MedicalCondition",
          "name": "Bilateral Frozen Shoulder"
        },
        {
          "@type": "MedicalCondition",
          "name": "Post-Surgical Frozen Shoulder",
          "alternateName": ["Secondary Frozen Shoulder"]
        },
        {
          "@type": "MedicalCondition",
          "name": "Type 2 Diabetes"
        },
        {
          "@type": "MedicalCondition",
          "name": "Thyroid Disorders"
        },
        {
          "@type": "MedicalProcessStage",
          "name": "Freezing Phase of Frozen Shoulder"
        },
        {
          "@type": "MedicalProcessStage",
          "name": "Frozen Phase of Frozen Shoulder"
        },
        {
          "@type": "MedicalProcessStage",
          "name": "Thawing Phase of Frozen Shoulder"
        },
        {
          "@type": "Organization",
          "name": "Daman"
        },
        {
          "@type": "Organization",
          "name": "AXA"
        },
        {
          "@type": "Organization",
          "name": "Allianz"
        },
        {
          "@type": "Organization",
          "name": "Oman Insurance"
        },
        {
          "@type": "Organization",
          "name": "Now Health"
        },
        {
          "@type": "Organization",
          "name": "Bupa"
        },
        {
          "@type": "Organization",
          "name": "MetLife"
        },
        {
          "@type": "Place",
          "name": "Circle Mall"
        },
        {
          "@type": "Place",
          "name": "FIVE Jumeirah Village"
        },
        {
          "@type": "Place",
          "name": "JSS Private School"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Frozen Shoulder Treatment Services in Dubai",
      "provider": {"@id": `${currentUrl}#frozen-shoulder`},
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "serviceType": "Frozen Shoulder Physiotherapy and Adhesive Capsulitis Treatment",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Frozen Shoulder Treatment Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Initial Frozen Shoulder Assessment",
            "priceCurrency": "AED",
            "price": "350",
            "description": "60-minute comprehensive assessment with phase identification"
          },
          {
            "@type": "Offer",
            "name": "Frozen Shoulder Freezing Phase Programme",
            "priceCurrency": "AED",
            "price": "1,800",
            "description": "8-12 session programme over 8-12 weeks focused on pain management"
          },
          {
            "@type": "Offer",
            "name": "Frozen Shoulder Frozen Phase Programme",
            "priceCurrency": "AED",
            "price": "3,500",
            "description": "16-24 session active rehabilitation over 4-6 months"
          },
          {
            "@type": "Offer",
            "name": "Complete Frozen Shoulder Programme",
            "priceCurrency": "AED",
            "price": "6,800",
            "description": "30-40 session comprehensive programme from initial phase through recovery"
          },
          {
            "@type": "Offer",
            "name": "Diabetic Frozen Shoulder Programme",
            "priceCurrency": "AED",
            "price": "8,500",
            "description": "Extended programme accounting for diabetic patient considerations"
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
        {"@type": "ListItem", "position": 3, "name": "Frozen Shoulder Treatment in Dubai", "item": currentUrl}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does frozen shoulder last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Untreated frozen shoulder typically resolves in 18-30 months. With appropriate physiotherapy, recovery typically completes in 6-12 months. Diabetic frozen shoulder often takes longer. The phase you are in when treatment starts affects total timeline."
          }
        },
        {
          "@type": "Question",
          "name": "Why is frozen shoulder more common in diabetic patients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Diabetic patients have 4-5 times higher prevalence of frozen shoulder. The mechanism involves glycation of collagen tissues in the joint capsule. Diabetic frozen shoulder is more severe, longer-lasting, and more likely to become bilateral."
          }
        },
        ...frozenShoulderFaqs.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalScholarlyArticle",
      "headline": "Frozen Shoulder Treatment in Dubai — Complete Phase-Based Guide",
      "image": "https://vedaracare.ae/og-images/frozen-shoulder-treatment-vedara-jvc.webp",
      "datePublished": publishedDate,
      "dateModified": modifiedDate,
      "author": {
        "@type": "Physician",
        "name": "Dr. Priya Sharma, DPT"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic"
      },
      "about": [
        {"@type": "MedicalCondition", "name": "Adhesive Capsulitis"},
        {"@type": "MedicalCondition", "name": "Frozen Shoulder"},
        {"@type": "MedicalCondition", "name": "Diabetic Frozen Shoulder"}
      ],
      "mainEntityOfPage": currentUrl
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Priya Sharma, DPT",
      "url": "https://vedaracare.ae/physiotherapists/dr-priya-sharma",
      "image": "https://vedaracare.ae/images/dr-priya-sharma-home-physiotherapy-dubai.webp",
      "medicalSpecialty": ["Physiotherapy", "Shoulder Rehabilitation", "Manual Therapy"],
      "hasCredential": [
        {
          "@type": "EducationalCredential",
          "name": "Doctor of Physical Therapy",
          "alternateName": ["DPT"]
        },
        "DHA-Licensed"
      ],
      "worksFor": {"@id": "https://vedaracare.ae/#organization"}
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Ahmed Al Rashid, DPT, MSc",
      "url": "https://vedaracare.ae/physiotherapists/dr-ahmed-al-rashid",
      "image": "https://vedaracare.ae/images/dr-ahmed-al-rashid-home-physiotherapy-dubai.webp",
      "medicalSpecialty": ["Physiotherapy", "Shoulder Rehabilitation", "Manual Therapy"],
      "hasCredential": [
        {
          "@type": "EducationalCredential",
          "name": "Doctor of Physical Therapy",
          "alternateName": ["DPT"]
        },
        "DHA-Licensed"
      ],
      "worksFor": {"@id": "https://vedaracare.ae/#organization"}
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Sarah Mitchell, DPT",
      "url": "https://vedaracare.ae/physiotherapists/dr-sarah-mitchell",
      "image": "https://vedaracare.ae/images/dr-sarah-mitchell-home-physiotherapy-dubai.webp",
      "medicalSpecialty": ["Physiotherapy", "Shoulder Rehabilitation", "Manual Therapy"],
      "hasCredential": [
        {
          "@type": "EducationalCredential",
          "name": "Doctor of Physical Therapy",
          "alternateName": ["DPT"]
        },
        "DHA-Licensed"
      ],
      "worksFor": {"@id": "https://vedaracare.ae/#organization"}
    }
  ];

  // First, let's create the injections/surgery section component structure
  const InjectionsSurgerySection = () => (
    <section className="bg-[#F2EDE4] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#B8975A] tracking-[0.18em] text-xs mb-4 font-sans font-medium">
            {frozenShoulderInjectionsSurgery.label}
          </p>
          <h2 className="text-[#1C1612] mb-5 font-serif font-medium text-3xl md:text-4xl">
            {frozenShoulderInjectionsSurgery.title}
          </h2>
          <p className="text-[#7A6E62] max-w-[720px] mx-auto leading-[1.75] font-sans text-base">
            {frozenShoulderInjectionsSurgery.description}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-12 items-start">
          <div className="space-y-8">
            <p className="text-[#2C2419] leading-[1.8] font-sans text-base">
              Conservative physiotherapy is the appropriate first-line treatment for nearly all frozen shoulder. However, some patients benefit from additional medical interventions during their recovery.
            </p>
            {frozenShoulderInjectionsSurgery.items.map((item, index) => (
              <div key={index}>
                <h3 className="text-[#1C1612] mb-3 font-serif font-medium text-xl">
                  {item.title}
                </h3>
                <p className="text-[#4A4239] leading-[1.8] font-sans text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="sticky top-24">
            <div className="rounded-[10px] p-8 bg-white border-2 border-[#B8975A]">
              <p className="text-[#B8975A] tracking-[0.14em] text-xs mb-6 font-sans font-semibold">
                TYPICAL TREATMENT HIERARCHY
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-[6px] bg-[#B8975A]/10">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white bg-[#B8975A] font-sans font-bold text-xs">
                    1
                  </span>
                  <div>
                    <p className="text-[#1C1612] font-sans font-medium text-sm">
                      Conservative physiotherapy
                    </p>
                    <p className="text-[#7A6E62] font-sans text-xs">
                      First-line for nearly all patients
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-[6px] bg-transparent">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white bg-[#D4C4A8] font-sans font-bold text-xs">
                    2
                  </span>
                  <div>
                    <p className="text-[#1C1612] font-sans font-medium text-sm">
                      Corticosteroid injection
                    </p>
                    <p className="text-[#7A6E62] font-sans text-xs">
                      Optional addition during freezing phase for pain control
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-[6px] bg-transparent">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white bg-[#D4C4A8] font-sans font-bold text-xs">
                    3
                  </span>
                  <div>
                    <p className="text-[#1C1612] font-sans font-medium text-sm">
                      Hydrodilatation
                    </p>
                    <p className="text-[#7A6E62] font-sans text-xs">
                      Optional addition during frozen phase if progress is slow
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-[6px] bg-transparent">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white bg-[#D4C4A8] font-sans font-bold text-xs">
                    4
                  </span>
                  <div>
                    <p className="text-[#1C1612] font-sans font-medium text-sm">
                      Manipulation under anaesthesia
                    </p>
                    <p className="text-[#7A6E62] font-sans text-xs">
                      Considered after 9–12 months if conservative care inadequate
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-[6px] bg-transparent">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white bg-[#D4C4A8] font-sans font-bold text-xs">
                    5
                  </span>
                  <div>
                    <p className="text-[#1C1612] font-sans font-medium text-sm">
                      Surgical capsular release
                    </p>
                    <p className="text-[#7A6E62] font-sans text-xs">
                      Reserved for persistent cases after extended conservative care
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-[#B8975A] mt-6 text-center font-serif italic text-sm">
                Most patients only need step 1.
              </p>
            </div>
            <a 
              href="/book"
              className="inline-block text-center w-full mt-6 px-6 py-3.5 border border-[#1C1612] text-[#1C1612] rounded-sm hover:bg-[#1C1612] hover:text-white transition-colors font-sans font-medium"
            >
              Book Assessment to Discuss Options
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  // Timeline component
  const TimelineSection = () => (
    <section className="bg-[#FAF7F2] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#B8975A] tracking-[0.18em] text-xs mb-4 font-sans font-medium">
            {frozenShoulderOutcomes.label}
          </p>
          <h2 className="text-[#1C1612] mb-5 font-serif font-medium text-3xl md:text-4xl">
            {frozenShoulderOutcomes.title}
          </h2>
          <p className="text-[#7A6E62] max-w-[720px] mx-auto leading-[1.75] font-sans text-base">
            {frozenShoulderOutcomes.description}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="absolute left-5 top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#E8A87C] via-[#B8975A] to-[#5A8A6A]"></div>
            <div className="space-y-0">
              {[
                {
                  number: 1,
                  phase: "Months 0–3",
                  title: "Freezing begins",
                  description: "Gradual onset of pain and stiffness",
                  treatment: "Treatment: Diagnosis, pain management",
                  color: "rgb(232, 168, 124)"
                },
                {
                  number: 2,
                  phase: "Months 3–6",
                  title: "Freezing peak",
                  description: "Peak pain, sleep disruption common",
                  treatment: "Treatment: Gentle therapy, pain modulation",
                  color: "rgb(212, 147, 92)"
                },
                {
                  number: 3,
                  phase: "Months 6–9",
                  title: "Frozen phase",
                  description: "Pain easing, stiffness dominant",
                  treatment: "Treatment: Active joint mobilisation",
                  color: "rgb(184, 151, 90)"
                },
                {
                  number: 4,
                  phase: "Months 9–12",
                  title: "Active recovery",
                  description: "Substantial functional gains",
                  treatment: "Treatment: Intensive mobilisation + strengthening",
                  color: "rgb(154, 125, 72)"
                },
                {
                  number: 5,
                  phase: "Months 12–18",
                  title: "Continued improvement",
                  description: "Progressive return of function",
                  treatment: "Treatment: Functional progression",
                  color: "rgb(122, 155, 118)"
                },
                {
                  number: 6,
                  phase: "Months 18–24",
                  title: "Full recovery",
                  description: "Most patients substantially or fully recovered",
                  treatment: "Treatment: Discharge planning",
                  color: "rgb(90, 138, 106)",
                  isLast: true
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 relative pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center z-10 shrink-0" style={{ backgroundColor: item.color }}>
                      <span className="text-white font-sans font-semibold text-xs">{item.number}</span>
                    </div>
                    {!item.isLast && (
                      <div className="w-[2px] flex-1 min-h-[48px]" style={{ backgroundColor: `${item.color}25` }}></div>
                    )}
                  </div>
                  <div className="pb-8 pt-1.5">
                    <p className="text-[#B8975A] text-xs tracking-[0.14em] mb-0.5 font-sans font-semibold">{item.phase}</p>
                    <p className="text-[#1C1612] mb-1 font-serif font-medium text-base">{item.title}</p>
                    <p className="text-[#4A4239] font-sans text-sm leading-relaxed">{item.description}</p>
                    <p className="text-[#7A6E62] text-xs mt-1 font-sans">{item.treatment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <p className="text-[#2C2419] leading-[1.8] font-sans text-base">
              Frozen shoulder recovery timelines vary significantly between patients. The numbers below represent typical patterns based on research and our clinical experience treating 200+ frozen shoulder patients. Your specific timeline depends on several factors:
            </p>
            <div>
              <h3 className="text-[#1C1612] mb-5 font-serif font-medium text-2xl">Factors that affect timeline</h3>
              <div className="space-y-3">
                {[
                  { title: "Phase when treatment begins", description: "Earlier intervention often shortens total course" },
                  { title: "Diabetic status", description: "Diabetic patients often have longer recovery and more severe presentation" },
                  { title: "Bilateral involvement", description: "Patients with both shoulders affected often have more complex recovery" },
                  { title: "Patient compliance", description: "Daily home programme adherence substantially affects outcomes" },
                  { title: "Underlying causes", description: "Post-surgical or post-injury frozen shoulder may have different patterns" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-white rounded-[8px] border border-[#1C1612]/[0.08]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B8975A] mt-2 shrink-0"></div>
                    <div>
                      <p className="text-[#1C1612] font-sans font-medium text-sm">{item.title}</p>
                      <p className="text-[#7A6E62] font-sans text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[#1C1612] mb-3 font-serif font-medium text-2xl">What patients typically experience</h3>
              <p className="text-[#4A4239] leading-[1.8] font-sans text-sm">
                Most patients who start treatment during the freezing phase complete recovery in 8–12 months total. Patients who present already in established frozen phase typically take 6–10 months from start of treatment to substantial recovery. Untreated frozen shoulder typically resolves naturally in 18–30 months — the treatment difference is substantial.
              </p>
            </div>
            <div className="bg-[#F2EDE4] rounded-[8px] p-6">
              <h3 className="text-[#1C1612] mb-3 font-serif font-medium text-lg">Patient frustration is normal — and expected</h3>
              <p className="text-[#4A4239] leading-[1.8] font-sans text-sm">
                Frozen shoulder recovery often feels frustrating. Progress is gradual rather than dramatic. The patients who do best understand the phase-based nature of the condition and trust the process. This is genuinely a marathon, not a sprint — but it is a marathon with a known finish line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <Head>
        <title>Frozen Shoulder Treatment in Dubai | Phase-Specific Care | Vedara JVC</title>
        <meta name="description" content="Specialist frozen shoulder treatment at our JVC clinic, Dubai. Phase-specific physiotherapy for adhesive capsulitis. DPT-qualified specialists with diabetic frozen shoulder expertise. Realistic timelines. Walking distance from Circle Mall. Insurance direct-billing." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hreflang="en-AE" href={currentUrl} />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/conditions/frozen-shoulder-dubai/" />
        <link rel="alternate" hreflang="x-default" href={currentUrl} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:title" content="Frozen Shoulder Treatment in Dubai — Phase-Specific Specialist Care | Vedara JVC" />
        <meta property="og:description" content="Frozen shoulder (adhesive capsulitis) is highly treatable with phase-specific physiotherapy. DPT-qualified specialists at our Jumeirah Village Circle clinic with specific expertise in diabetic frozen shoulder, common in Dubai's patient population. Honest realistic timelines." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/frozen-shoulder-treatment-vedara-jvc.webp" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <AyurvedaHero 
        {...frozenShoulderHero}
      />
      
      <AyurvedaIntro 
        {...frozenShoulderIntro}
      />
      
      <TreatmentMechanism
        bgColor="bg-[#F8F4EE]"
        label={frozenShoulderTreatmentMechanism.label}
        title={frozenShoulderTreatmentMechanism.title}
        description={frozenShoulderTreatmentMechanism.description}
        keyFact={frozenShoulderTreatmentMechanism.keyFact}
        content={frozenShoulderTreatmentMechanism.content}
        quote={frozenShoulderTreatmentMechanism.quote}
        image={frozenShoulderMechanism1.image}
        alt={frozenShoulderMechanism1.alt}
        imageLeft={false}
        showStats={false}
      />
      
      <FrozenShoulderPhases 
        {...frozenShoulderPhases}
      />
     
      
      <TimelineSection />
      
      <TreatmentMechanism {...frozenShoulderMechanism2} />

      <InjectionsSurgerySection />
      
      <TreatmentReviews 
        bgColor="bg-white"
        isDarkText={true}
        cardBgColor="bg-white"
        label={frozenShoulderReviews.label}
        title={frozenShoulderReviews.title}
        items={frozenShoulderReviews.items}
        stats={frozenShoulderReviews.stats}
        useKneeStyle={false}
        buttonText={frozenShoulderReviews.buttonText}
        buttonHref={frozenShoulderReviews.buttonHref}
      />
      
      <PostSurgeryTeam
        bgColor={frozenShoulderTeam.bgColor}
        data={{
          ...frozenShoulderTeam,
          members: frozenShoulderTeam.members.map(member => ({
            ...member,
            credentials: member.role,
            tags: member.specialties,
            description: member.bio,
            languages: member.languages
          }))
        }}
      />
      
      <div className={`bg-white py-24 px-6 ${frozenShoulderPricing.bgColor}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm tracking-widest uppercase mb-4 font-sans font-medium" style={{ color: '#C9A84C' }}>
              {frozenShoulderPricing.label}
            </div>
            <h2 className="text-4xl font-serif" style={{ color: 'rgb(26, 26, 26)' }}>
              {frozenShoulderPricing.title}
            </h2>
          </div>

          <div className="bg-white rounded-lg border border-[#E5DFD3] overflow-hidden mb-12">
            {frozenShoulderPricing.services.map((service, index) => (
              <div key={index} className={`flex items-center justify-between px-8 py-5 ${index % 2 === 1 ? 'bg-[#FAF8F5]' : 'bg-white'}`}>
                <p className="text-sm font-sans" style={{ color: 'rgb(26, 26, 26)' }}>
                  {service.name}
                </p>
                <p className="font-serif" style={{ color: 'rgb(201, 168, 76)' }}>
                  {service.price}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="mb-6 text-center font-sans text-sm leading-relaxed" style={{ color: 'rgb(107, 107, 107)' }} dangerouslySetInnerHTML={{ __html: frozenShoulderPricing.insuranceText }} />
           
            <div className="flex flex-wrap justify-center gap-3">
              {frozenShoulderPricing.insurers.map((insurer, index) => (
                <span key={index} className="px-4 py-2 rounded-lg bg-[#FAF6EF] border border-[#E5DFD3] text-sm text-[#6B6B6B] font-sans font-medium">
                  {insurer}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FAQ {...frozenShoulderFaqs} />

      <section className={`${frozenShoulderLocation.bgColor} py-24 px-6`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Map */}
            <div className="bg-[#F5F3EE] rounded-xl overflow-hidden aspect-square">
              {frozenShoulderLocation.mapEmbed ? (
                <iframe 
                  src={frozenShoulderLocation.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vedara Care Clinic Location Map"
                ></iframe>
              ) : (
                <div className="h-full w-full flex items-center justify-center">
                  <p className="text-sm text-gray-500">Map coming soon</p>
                </div>
              )}
            </div>

            {/* Right: Content */}
            <div>
              <p className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#C9A84C] uppercase mb-4">
                {frozenShoulderLocation.label}
              </p>
              <h2 className="text-4xl mb-8 font-serif" style={{ color: 'rgb(26, 26, 26)' }}>
                {frozenShoulderLocation.title}
              </h2>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <span className="text-sm font-medium font-sans text-[#6B6B6B] min-w-[80px]">Address</span>
                  <span className="text-sm font-sans text-[#262626]">{frozenShoulderLocation.address}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm font-medium font-sans text-[#6B6B6B] min-w-[80px]">Phone</span>
                  <span className="text-sm font-sans text-[#262626]">
                    <a href={`tel:${frozenShoulderLocation.phone.replace(/\s+/g, '')}`} className="hover:underline hover:text-[#C9A84C] transition-colors">
                      {frozenShoulderLocation.phone}
                    </a>
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm font-medium font-sans text-[#6B6B6B] min-w-[80px]">WhatsApp</span>
                  <span className="text-sm font-sans text-[#262626]">
                    <a href={`https://wa.me/${frozenShoulderLocation.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20frozen%20shoulder%20treatment.`} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#C9A84C] transition-colors font-medium">
                      {frozenShoulderLocation.whatsapp}
                    </a>
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm font-medium font-sans text-[#6B6B6B] min-w-[80px]">Email</span>
                  <span className="text-sm font-sans text-[#262626]">
                    <a href={`mailto:${frozenShoulderLocation.email}`} className="hover:underline hover:text-[#C9A84C] transition-colors">
                      {frozenShoulderLocation.email}
                    </a>
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="border border-[#E5DFD3] rounded-lg overflow-hidden mb-8">
                <div className="bg-[#FAF8F5] px-6 py-3 border-b border-[#E5DFD3]">
                  <p className="text-xs font-semibold uppercase tracking-wider font-sans text-[#6B6B6B]">Day</p>
                </div>
                {frozenShoulderLocation.hours.map((hour, index) => (
                  <div key={index} className="flex justify-between px-6 py-3 border-b border-[#E5DFD3] last:border-b-0">
                    <span className="text-sm font-sans text-[#262626]">{hour.day}</span>
                    <span className="text-sm font-sans text-[#262626]">{hour.time}</span>
                  </div>
                ))}
              </div>

              {/* Location Markers */}
              <div className="flex flex-wrap gap-2 mb-8">
                {frozenShoulderLocation.locationMarkers.map((marker, index) => (
                  <span key={index} className="px-3 py-2 bg-[#FAF8F5] rounded-lg text-xs text-[#6B6B6B] font-sans font-medium">
                    {marker.name}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm mb-8 leading-relaxed font-sans text-[#6B6B6B]">
                {frozenShoulderLocation.description}
              </p>

              {/* Button */}
              <a
                href={frozenShoulderLocation.buttonLink}
                className="inline-block px-6 py-3 bg-[#1A1A1A] text-white text-sm font-sans font-medium rounded-md hover:bg-[#333] transition-colors"
              >
                {frozenShoulderLocation.buttonText}
              </a>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA 
        {...frozenShoulderCTA}
      />

      <RelatedPages {...frozenShoulderRelatedPages} />
    </>
  );
};

export default FrozenShoulderDubai;
