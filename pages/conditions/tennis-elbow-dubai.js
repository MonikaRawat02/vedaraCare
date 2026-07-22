import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import SportsInjuryTypes from '../../components/ayurveda/SportsInjuryTypes';
import TennisElbowRecoveryTimeline from '../../components/ayurveda/TennisElbowRecoveryTimeline';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import { SciaticaTreatment } from '../../components/ayurveda/SciaticaSections';
// import {SciaticaTreatment} from '../../components/ayurveda/SciaticaTreatment';
import {
  tennisElbowHero,
  tennisElbowIntro,
  tennisElbowTypes,
  tennisElbowMechanism2,
  tennisElbowRecoveryTimeline,
  tennisElbowMechanism3,
  tennisElbowReviews,
  tennisElbowTeam,
  tennisElbowPricing,
  tennisElbowFaqs,
  tennisElbowSciaticaSection2,
  tennisElbowLocation,
  tennisElbowCTA,
  tennisElbowRelatedPages,
  tennisElbowSciaticaSection1,
  tennisElbowSciaticaSection3
} from '../../data/tennisElbowData';


const TennisElbowDubai = () => {
  const currentUrl = "https://vedaracare.ae/conditions/tennis-elbow-dubai/";
  const publishedDate = "2024-06-01T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy"],
      "@id": `${currentUrl}#tennis-elbow`,
      "name": "Vedara Care Tennis Elbow Treatment",
      "alternateName": ["Vedara Tennis Elbow Treatment Dubai", "Vedara Lateral Epicondylalgia JVC"],
      "url": currentUrl,
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "Specialist tennis elbow (lateral epicondylalgia) treatment at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. Evidence-based eccentric and isometric loading protocols, shockwave therapy for chronic cases. Particular expertise in padel-related elbow injuries and office worker patterns. Most tennis elbow patients have never played tennis.",
      "telephone": "+971 55 586 7466",
      "priceRange": "AED 350 - AED 12,000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4, Jumeirah Village Circle",
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
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "21:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "Jumeirah Village Circle" },
        { "@type": "Place", "name": "Jumeirah Village Triangle" },
        { "@type": "Place", "name": "Al Barsha South" },
        { "@type": "Place", "name": "Dubai Sports City" },
        { "@type": "Place", "name": "Motor City" },
        { "@type": "Place", "name": "Arjan" },
        { "@type": "Place", "name": "Dubai Hills Estate" },
        { "@type": "Place", "name": "Dubai Marina" },
        { "@type": "Place", "name": "Downtown Dubai" },
        { "@type": "Place", "name": "Palm Jumeirah" },
        { "@type": "Place", "name": "Mirdif" },
        { "@type": "Place", "name": "Circle Mall" },
        { "@type": "Place", "name": "FIVE Jumeirah Village" },
        { "@type": "Place", "name": "JSS Private School" }
      ],
      "medicalSpecialty": [
        "Tennis Elbow Treatment",
        "Physiotherapy",
        "Physical Therapy",
        "Tendinopathy Treatment",
        "Sports Medicine"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Tennis Elbow Physiotherapy" },
        { "@type": "MedicalProcedure", "name": "Lateral Epicondylalgia Treatment" },
        { "@type": "MedicalProcedure", "name": "Eccentric Loading Protocols" },
        { "@type": "MedicalProcedure", "name": "Isometric Loading Exercises" },
        { "@type": "MedicalProcedure", "name": "Shockwave Therapy" },
        { "@type": "MedicalProcedure", "name": "Manual Therapy" },
        { "@type": "MedicalProcedure", "name": "Dry Needling" },
        { "@type": "MedicalProcedure", "name": "Mulligan Mobilisation With Movement" },
        { "@type": "MedicalProcedure", "name": "Ergonomic Assessment" },
        { "@type": "MedicalProcedure", "name": "Tyler Twist" },
        { "@type": "MedicalProcedure", "name": "Stanish Protocol" }
      ],
      "memberOf": {
        "@type": "GovernmentOrganization",
        "name": "Dubai Health Authority"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "220",
        "bestRating": "5",
        "worstRating": "1"
      },
      "knowsAbout": [
        { "@type": "AnatomicalStructure", "name": "Common Extensor Tendon" },
        { "@type": "AnatomicalStructure", "name": "Lateral Epicondyle" },
        { "@type": "AnatomicalStructure", "name": "Extensor Carpi Radialis Brevis" },
        { "@type": "Sport", "name": "Padel" },
        { "@type": "Sport", "name": "Tennis" },
        { "@type": "Sport", "name": "Gym Training" }
      ]
    },
    [
      {
        "@context": "https://schema.org",
        "@type": "MedicalCondition",
        "name": "Lateral Epicondylalgia",
        "alternateName": ["Tennis Elbow", "Lateral Epicondylitis", "Common Extensor Tendinopathy"],
        "code": { "@type": "MedicalCode", "code": "M77.1", "codingSystem": "ICD-10" },
        "possibleTreatment": [
          { "@type": "MedicalProcedure", "name": "Eccentric Loading Protocols" },
          { "@type": "MedicalProcedure", "name": "Isometric Loading" },
          { "@type": "MedicalProcedure", "name": "Shockwave Therapy" },
          { "@type": "MedicalProcedure", "name": "Manual Therapy" },
          { "@type": "MedicalProcedure", "name": "Tyler Twist" },
          { "@type": "MedicalProcedure", "name": "Stanish Protocol" }
        ],
        "associatedAnatomy": [
          { "@type": "AnatomicalStructure", "name": "Common Extensor Tendon" },
          { "@type": "AnatomicalStructure", "name": "Lateral Epicondyle" },
          { "@type": "AnatomicalStructure", "name": "Extensor Carpi Radialis Brevis" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalCondition",
        "name": "Padel-Related Tennis Elbow"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalCondition",
        "name": "Chronic Tennis Elbow"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalCondition",
        "name": "Office Worker Tennis Elbow"
      }
    ],
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Tennis Elbow Treatment Services in Dubai",
      "provider": { "@id": `${currentUrl}#tennis-elbow` },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "United Arab Emirates" }
      ],
      "serviceType": "Tennis Elbow Physiotherapy and Lateral Epicondylalgia Treatment",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tennis Elbow Treatment Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Initial Tennis Elbow Assessment",
            "priceCurrency": "AED",
            "price": "350",
            "description": "60-minute comprehensive assessment with DPT-qualified tendinopathy specialist"
          },
          {
            "@type": "Offer",
            "name": "Acute Tennis Elbow Programme",
            "priceCurrency": "AED",
            "price": "1,800",
            "description": "8-10 session programme over 8-12 weeks for acute presentations"
          },
          {
            "@type": "Offer",
            "name": "Standard Tennis Elbow Programme",
            "priceCurrency": "AED",
            "price": "2,600",
            "description": "12-16 session programme over 12-20 weeks for typical presentations"
          },
          {
            "@type": "Offer",
            "name": "Chronic Tennis Elbow Programme with Shockwave",
            "priceCurrency": "AED",
            "price": "4,200",
            "description": "16-20 sessions plus shockwave therapy for chronic cases"
          },
          {
            "@type": "Offer",
            "name": "Padel-Specific Return-to-Sport Programme",
            "priceCurrency": "AED",
            "price": "3,600",
            "description": "Sport-specific programme for padel players"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/" },
        { "@type": "ListItem", "position": 3, "name": "Tennis Elbow Treatment in Dubai", "item": currentUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is tennis elbow exactly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tennis elbow (formally lateral epicondylalgia) is a tendinopathy of the common extensor tendon at the outer elbow. The condition affects the muscles that extend the wrist and fingers. Despite the name, most patients have never played tennis. The condition develops from any repetitive wrist extension or sustained gripping activity."
          }
        },
        {
          "@type": "Question",
          "name": "Should I get a cortisone injection?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally no, based on current evidence. Multiple research studies show that cortisone injections produce short-term pain relief but worse long-term outcomes than physiotherapy. Patients with injections often have higher recurrence rates and longer overall recovery. We recommend evidence-based loading protocols and shockwave therapy."
          }
        },
        ...tennisElbowFaqs.faqs.map(faq => ({
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
      "headline": "Tennis Elbow Treatment in Dubai — Evidence-Based Treatment Guide",
      "image": "https://vedaracare.ae/images/tennis-elbow-eccentric-loading-vedara-jvc.webp",
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
        { "@type": "MedicalCondition", "name": "Lateral Epicondylalgia" },
        { "@type": "MedicalCondition", "name": "Tennis Elbow" }
      ],
      "mainEntityOfPage": currentUrl
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Priya Sharma, DPT",
      "url": "https://vedaracare.ae/physiotherapists/dr-priya-sharma/",
      "image": "https://vedaracare.ae/images/dr-priya-sharma-home-physiotherapy-dubai.webp",
      "medicalSpecialty": ["Physiotherapy", "Tendinopathy Treatment", "Sports Medicine"],
      "hasCredential": [
        { "@type": "EducationalCredential", "name": "Doctor of Physical Therapy", "alternateName": "DPT" },
        { "@type": "EducationalCredential", "name": "Shockwave Therapy Certified" },
        { "@type": "EducationalCredential", "name": "Dry Needling Certified" },
        { "@type": "EducationalCredential", "name": "DHA-Licensed" }
      ],
      "worksFor": { "@id": "https://vedaracare.ae/#organization" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Ahmed Al Rashid, DPT, MSc",
      "url": "https://vedaracare.ae/physiotherapists/dr-ahmed-al-rashid/",
      "image": "https://vedaracare.ae/images/dr-ahmed-al-rashid-home-physiotherapy-dubai.webp",
      "medicalSpecialty": ["Physiotherapy", "Tendinopathy Treatment", "Sports Medicine"],
      "hasCredential": [
        { "@type": "EducationalCredential", "name": "Doctor of Physical Therapy", "alternateName": "DPT" },
        { "@type": "EducationalCredential", "name": "MSc" },
        { "@type": "EducationalCredential", "name": "Shockwave Therapy Certified" },
        { "@type": "EducationalCredential", "name": "Dry Needling Certified" },
        { "@type": "EducationalCredential", "name": "DHA-Licensed" }
      ],
      "worksFor": { "@id": "https://vedaracare.ae/#organization" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Sarah Mitchell, DPT",
      "url": "https://vedaracare.ae/physiotherapists/dr-sarah-mitchell/",
      "image": "https://vedaracare.ae/images/dr-sarah-mitchell-home-physiotherapy-dubai.webp",
      "medicalSpecialty": ["Physiotherapy", "Tendinopathy Treatment", "Ergonomics"],
      "hasCredential": [
        { "@type": "EducationalCredential", "name": "Doctor of Physical Therapy", "alternateName": "DPT" },
        { "@type": "EducationalCredential", "name": "Shockwave Therapy Certified" },
        { "@type": "EducationalCredential", "name": "Dry Needling Certified" },
        { "@type": "EducationalCredential", "name": "DHA-Licensed" }
      ],
      "worksFor": { "@id": "https://vedaracare.ae/#organization" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Rahul Mehta, DPT, CSCS",
      "url": "https://vedaracare.ae/physiotherapists/dr-rahul-mehta/",
      "image": "https://vedaracare.ae/images/dr-rahul-mehta-home-physiotherapy-dubai.webp",
      "medicalSpecialty": ["Physiotherapy", "Tendinopathy Treatment", "Strength & Conditioning"],
      "hasCredential": [
        { "@type": "EducationalCredential", "name": "Doctor of Physical Therapy", "alternateName": "DPT" },
        { "@type": "EducationalCredential", "name": "CSCS" },
        { "@type": "EducationalCredential", "name": "Shockwave Therapy Certified" },
        { "@type": "EducationalCredential", "name": "Dry Needling Certified" },
        { "@type": "EducationalCredential", "name": "DHA-Licensed" }
      ],
      "worksFor": { "@id": "https://vedaracare.ae/#organization" }
    },
    // Insurance partners
    { "@context": "https://schema.org", "@type": "Organization", "name": "Daman" },
    { "@context": "https://schema.org", "@type": "Organization", "name": "AXA" },
    { "@context": "https://schema.org", "@type": "Organization", "name": "Allianz" },
    { "@context": "https://schema.org", "@type": "Organization", "name": "Oman Insurance" },
    { "@context": "https://schema.org", "@type": "Organization", "name": "Now Health" },
    { "@context": "https://schema.org", "@type": "Organization", "name": "Bupa" },
    { "@context": "https://schema.org", "@type": "Organization", "name": "MetLife" }
  ];

  return (
    <>
      <Head>
        <title>Tennis Elbow Treatment in Dubai | Evidence-Based Care | Vedara JVC</title>
        <meta name="description" content="Specialist tennis elbow treatment at our JVC clinic, Dubai. Evidence-based eccentric loading protocols, shockwave therapy for chronic cases. Padel and office worker expertise. Most tennis elbow resolves without cortisone injection. Walking distance from Circle Mall." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hreflang="en-AE" href={currentUrl} />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/conditions/tennis-elbow-dubai/" />
        <link rel="alternate" hreflang="x-default" href={currentUrl} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:title" content="Tennis Elbow Treatment in Dubai — Evidence-Based Specialist Care | Vedara JVC" />
        <meta property="og:description" content="Most tennis elbow patients have never played tennis. DPT-qualified tendinopathy specialists at our Jumeirah Village Circle clinic using evidence-based eccentric loading protocols, shockwave therapy for chronic cases, and ergonomic guidance. Better long-term outcomes than cortisone injections." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/tennis-elbow-dubai.webp" />
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
        {...tennisElbowHero}
        patientsTreated={tennisElbowHero.patientsTreated}
      />

      <AyurvedaIntro
        {...tennisElbowIntro}
      />

      <SciaticaTreatment
        data={tennisElbowSciaticaSection1}
        showBorderLeft={false}
        rightContentStyle="keyAnatomy"
        bgColor="bg-[#F5F1E8]"
        showStepNumbers={false}
      />

      <SportsInjuryTypes
        {...tennisElbowTypes}
        bgColor="rgb(255, 255, 255)"
        description={tennisElbowTypes.description}
        variant="condition"
        lgColumns={4}
      />

      <SciaticaTreatment
        data={tennisElbowSciaticaSection2}
        showBorderLeft={false}
        rightContentStyle="keyFact"
        bgColor="bg-[#F5F1E8]"
        showStepNumbers={false}
      />



      <TennisElbowRecoveryTimeline
        {...tennisElbowRecoveryTimeline}
      />

      <SciaticaTreatment
        data={tennisElbowSciaticaSection3}
        showBorderLeft={false}
        bgColor="bg-[#F5F1E8]"
        showStepNumbers={false}
        showComparison={true}
      />

      <TreatmentReviews
        bgColor="bg-white"
        label={tennisElbowReviews.label}
        title={tennisElbowReviews.title}
        {...tennisElbowReviews}
        useKneeStyle={true}
        useKneeStyleBgColor="bg-white"
      />

      <PhysiotherapyTeam
        bgColor="bg-[#F8F4EE]"
        cardColor="bg-white"
        {...tennisElbowTeam}
      />

      <div className={`bg-white py-24 px-6 ${tennisElbowPricing.bgColor}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm tracking-widest uppercase mb-4" style={{ color: '#C9A84C' }}>
              {tennisElbowPricing.label}
            </div>
            <h2 className="text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26, 26, 26)' }}>
              {tennisElbowPricing.title}
            </h2>
          </div>

          <div className="bg-white rounded-lg border border-[#E5DFD3] overflow-hidden mb-12">
            {tennisElbowPricing.services.map((service, index) => (
              <div key={index} className={`flex items-center justify-between px-8 py-5 ${index % 2 === 1 ? 'bg-[#FAF8F5]' : 'bg-white'}`}>
                <p className="text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                  {service.name}
                </p>
                <p style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(201, 168, 76)' }}>
                  {service.price}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center mb-8" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.7', fontSize: '14px' }} dangerouslySetInnerHTML={{ __html: tennisElbowPricing.insuranceText }} />
          <div className="flex flex-wrap justify-center gap-3">
            {tennisElbowPricing.insurances && tennisElbowPricing.insurances.map((insurer, index) => (
              <span key={index} className="bg-[#FAF8F5] px-4 py-2 rounded-full text-xs border border-[#E5DFD3]" style={{ color: 'rgb(107, 107, 107)' }}>
                {insurer}
              </span>
            ))}
          </div>
        </div>
      </div>

      <FAQ {...tennisElbowFaqs} />

      <TreatmentLocation
        {...tennisElbowLocation}
      />

      <FinalCTA
        {...tennisElbowCTA}
        title="Most tennis elbow resolves with evidence-based loading protocols."
      />

      <RelatedPages {...tennisElbowRelatedPages} />
    </>
  );
};


export default TennisElbowDubai;
