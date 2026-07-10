import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import { SciaticaTreatment, SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import {
  psoriasisHero,
  psoriasisIntro,
  psoriasisPatientVoices,
  psoriasisExpectations,
  psoriasisTypes,
  psoriasisTeam,
  psoriasisPricing,
  psoriasisFaqs,
  psoriasisLocation,
  psoriasisCTA,
  psoriasisUnderstanding,
  psoriasisTreatmentOptions,
  psoriasisRelatedPages
} from "../../data/psoriasisData";

const psoriasistreatment = () => {
  const currentUrl = "https://vedaracare.ae/conditions/psoriasis-treatment-dubai/";
  const publishedDate = "2026-07-08T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": `${currentUrl}#psoriasis`,
      "name": "Vedara Care Psoriasis Treatment JVC",
      "alternateName": ["Vedara Psoriasis JVC", "Vedara Psoriasis Specialist Dubai", "Vedara Biologic Psoriasis Treatment"],
      "url": currentUrl,
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "Specialist psoriasis treatment at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. DHA-licensed consultant dermatologists treating all psoriasis presentations with access to modern biologic treatments including TNF-α, IL-17, and IL-23 inhibitors.",
      "telephone": "+971 55 586 7466",
      "priceRange": "AED 400 - AED 60000",
      "address": {"@type": "PostalAddress", "streetAddress": "[Building Name], [Unit Number], [Street], Jumeirah Village Circle (JVC)", "addressLocality": "Jumeirah Village Circle", "addressRegion": "Dubai", "addressCountry": "AE", "postalCode": ""},
      "geo": {"@type": "GeoCoordinates", "latitude": "25.068346", "longitude": "55.2072235"},
      "openingHoursSpecification": [
        {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:00", "closes": "21:00"},
        {"@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "09:00", "closes": "18:00"}
      ],
      "areaServed": [
        {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "City", "name": "Dubai"},
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
      "medicalSpecialty": ["Dermatology", "Psoriasis Treatment", "Autoimmune Skin Disorders", "Biologic Therapy"],
      "isAcceptingNewPatients": true,
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Psoriasis Treatment"},
        {"@type": "MedicalProcedure", "name": "Chronic Plaque Psoriasis Treatment"},
        {"@type": "MedicalProcedure", "name": "Scalp Psoriasis Treatment"},
        {"@type": "MedicalProcedure", "name": "Nail Psoriasis Treatment"},
        {"@type": "MedicalProcedure", "name": "Biologic Treatment for Psoriasis"},
        {"@type": "MedicalProcedure", "name": "Phototherapy"},
        {"@type": "MedicalProcedure", "name": "Systemic Treatment for Psoriasis"},
        {"@type": "MedicalProcedure", "name": "Psoriatic Arthritis Screening"}
      ],
      "memberOf": {"@type": "Organization", "name": "Dubai Health Authority"},
      "aggregateRating": {"@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "400", "bestRating": "5", "worstRating": "1"}
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        {"@type": "MedicalCondition", "name": "Psoriasis", "alternateName": ["Psoriasis Vulgaris"], "code": {"@type": "MedicalCode", "code": "L40", "codingSystem": "ICD-10"}, "possibleTreatment": [{"@type": "MedicalProcedure", "name": "Topical Corticosteroids"}, {"@type": "MedicalProcedure", "name": "Vitamin D Analogs"}, {"@type": "MedicalProcedure", "name": "Phototherapy"}, {"@type": "MedicalProcedure", "name": "Methotrexate"}, {"@type": "MedicalProcedure", "name": "Biologic Therapy"}, {"@type": "MedicalProcedure", "name": "Apremilast"}]},
        {"@type": "MedicalCondition", "name": "Chronic Plaque Psoriasis", "code": {"@type": "MedicalCode", "code": "L40.0", "codingSystem": "ICD-10"}},
        {"@type": "MedicalCondition", "name": "Scalp Psoriasis"},
        {"@type": "MedicalCondition", "name": "Nail Psoriasis"},
        {"@type": "MedicalCondition", "name": "Guttate Psoriasis", "code": {"@type": "MedicalCode", "code": "L40.4", "codingSystem": "ICD-10"}},
        {"@type": "MedicalCondition", "name": "Inverse Psoriasis", "alternateName": ["Flexural Psoriasis"], "code": {"@type": "MedicalCode", "code": "L40.8", "codingSystem": "ICD-10"}},
        {"@type": "MedicalCondition", "name": "Pustular Psoriasis", "code": {"@type": "MedicalCode", "code": "L40.1-L40.3", "codingSystem": "ICD-10"}},
        {"@type": "MedicalCondition", "name": "Palmoplantar Psoriasis"},
        {"@type": "MedicalCondition", "name": "Psoriatic Arthritis", "code": {"@type": "MedicalCode", "code": "L40.5", "codingSystem": "ICD-10"}},
        {"@type": "MedicalCondition", "name": "Erythrodermic Psoriasis"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Psoriasis Treatment Services at JVC Dubai",
      "provider": {"@id": `${currentUrl}#psoriasis`},
      "areaServed": [{"@type": "Place", "name": "Jumeirah Village Circle"}, {"@type": "City", "name": "Dubai"}, {"@type": "Place", "name": "United Arab Emirates"}],
      "serviceType": "Psoriasis and Autoimmune Skin Disorder Treatment",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Psoriasis Treatment Services",
        "itemListElement": [
          {"@type": "Offer", "name": "Initial Psoriasis Consultation with Comprehensive Assessment"},
          {"@type": "Offer", "name": "Follow-up Consultation"},
          {"@type": "Offer", "name": "Comprehensive Systemic Assessment"},
          {"@type": "Offer", "name": "Phototherapy Course"},
          {"@type": "Offer", "name": "Oral Systemic Treatment Monitoring"},
          {"@type": "Offer", "name": "Biologic Treatment Consultation and Initiation"},
          {"@type": "Offer", "name": "Biologic Treatment Ongoing Monitoring"},
          {"@type": "Offer", "name": "Comprehensive 6-Month Management Programme"}
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/"},
        {"@type": "ListItem", "position": 3, "name": "Psoriasis Treatment in JVC Dubai", "item": currentUrl}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": psoriasisFaqs.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {"@type": "Answer", "text": faq.answer}
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalScholarlyArticle",
      "headline": "Psoriasis Treatment at JVC Dubai — Specialist Care Including Modern Biologic Treatments",
      "image": "https://vedaracare.ae/images/psoriasis-treatment-jvc-dubai-hero.jpg",
      "datePublished": publishedDate,
      "dateModified": modifiedDate,
      "author": {"@type": "Physician", "name": "Lead Consultant Dermatologist", "url": "https://vedaracare.ae/dermatologists/"},
      "publisher": {"@type": "Organization", "name": "Vedara Care Polyclinic", "logo": {"@type": "ImageObject", "url": "https://vedaracare.ae/logo.png"}},
      "about": [
        {"@type": "MedicalCondition", "name": "Psoriasis"},
        {"@type": "MedicalCondition", "name": "Chronic Plaque Psoriasis"},
        {"@type": "MedicalCondition", "name": "Psoriatic Arthritis"},
        {"@type": "MedicalCondition", "name": "Autoimmune Skin Disorders"}
      ],
      "mainEntityOfPage": currentUrl
    },
    ...psoriasisTeam.team.map((member) => ({
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": member.name,
      "url": `https://vedaracare.ae${member.link}`,
      "image": `https://vedaracare.ae${member.image}`,
      "medicalSpecialty": ["Dermatology", "Psoriasis Treatment", "Autoimmune Skin Disorders", "Biologic Therapy", ...member.specialties],
      "hasCredential": ["MD", "Dermatology Board Certification", "DHA-Licensed Consultant Dermatologist"],
      "alumniOf": {"@type": "EducationalOrganization", "name": ""},
      "knowsAbout": ["Psoriasis", "Chronic Plaque Psoriasis", "Psoriatic Arthritis", "Biologic Treatments", "TNF Inhibitors", "IL-17 Inhibitors", "IL-23 Inhibitors", "Phototherapy", "Systemic Immunosuppression"],
      "knowsLanguage": member.languages,
      "worksFor": {"@id": "https://vedaracare.ae/#organization"}
    })),
    {
      "@context": "https://schema.org",
      "@id": "https://vedaracare.ae/#organization",
      "@type": ["Organization", "MedicalOrganization"],
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": {"@type": "ImageObject", "url": "https://vedaracare.ae/logo.png"},
      "sameAs": ["https://www.facebook.com/", "https://www.instagram.com/", "https://www.linkedin.com/company/", "https://www.google.com/maps/place/"],
      "contactPoint": {"@type": "ContactPoint", "telephone": "+971 55 586 7466", "contactType": "Customer Service", "areaServed": "AE", "availableLanguage": ["English", "Arabic", "Hindi", "Urdu"]},
      "insurancePlan": [
        {"@type": "InsuranceCompany", "name": "Daman"},
        {"@type": "InsuranceCompany", "name": "AXA"},
        {"@type": "InsuranceCompany", "name": "Allianz"},
        {"@type": "InsuranceCompany", "name": "Oman Insurance"},
        {"@type": "InsuranceCompany", "name": "Now Health"},
        {"@type": "InsuranceCompany", "name": "Bupa"},
        {"@type": "InsuranceCompany", "name": "MetLife"}
      ],
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "Place", "name": "Circle Mall"},
        {"@type": "Place", "name": "FIVE Jumeirah Village"},
        {"@type": "Place", "name": "JSS Private School"},
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
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Psoriasis Treatment in JVC Dubai | Biologics & Systemic | Vedara</title>
        <meta name="description" content="Specialist psoriasis treatment at our JVC clinic, Dubai. DHA-licensed consultant dermatologists. Access to modern biologic treatments (secukinumab, ustekinumab, guselkumab). All psoriasis types. Walking distance from Circle Mall." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/conditions/psoriasis-treatment-dubai/" />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
        <meta property="og:title" content="Psoriasis Treatment in JVC Dubai — Modern Biologic Specialist Care | Vedara" />
        <meta property="og:description" content="Specialist psoriasis treatment at our Jumeirah Village Circle clinic, Dubai. DHA-licensed consultant dermatologists treating chronic plaque psoriasis, scalp psoriasis, nail psoriasis, palmoplantar psoriasis, and severe psoriasis. Access to full range of modern biologic treatments including TNF-α, IL-17, and IL-23 inhibitors. Comprehensive systemic assessment." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/psoriasis-treatment-jvc-dubai.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Psoriasis Treatment in JVC Dubai — Modern Biologic Care | Vedara" />
        <meta name="twitter:description" content="DHA-licensed consultant dermatologists with access to modern biologic treatments for psoriasis." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/psoriasis-treatment-jvc-dubai.jpg" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow" />
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      {/* Section 1 - Hero */}
      <AyurvedaHero {...psoriasisHero} />

      {/* Section 2 - Intro */}
      <AyurvedaIntro {...psoriasisIntro} />
      <SciaticaTreatment
              data={psoriasisUnderstanding}
              showBorderLeft={false}
              rightContentStyle="keyAnatomy"
              bgColor="bg-[#F0EBE3]"
              showStepNumbers={false}
            />
      <SciaticaTypes
              bgColor={psoriasisTypes.bgColor}
              cardBg={psoriasisTypes.cardBg}
              label={psoriasisTypes.label}
              title={psoriasisTypes.title}
              description={psoriasisTypes.description}
              types={psoriasisTypes.types}
              footer={psoriasisTypes.footer}
              gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              typicalSignsLabel="Typical presentation:"
              borderPosition="left"
            />
       <ContentWithSidebar
        bgColor={psoriasisTreatmentOptions.bgColor}
        label={psoriasisTreatmentOptions.label}
        title={psoriasisTreatmentOptions.title}
        contentSections={psoriasisTreatmentOptions.contentSections}
        sidebar={psoriasisTreatmentOptions.sidebar}
      />
       <ContentWithSidebar
        bgColor={psoriasisExpectations.bgColor}
        cardBg={psoriasisExpectations.cardBg}
        label={psoriasisExpectations.label}
        title={psoriasisExpectations.title}
        intro={psoriasisExpectations.intro}
        phases={psoriasisExpectations.phases}
        footerNote={psoriasisExpectations.footerNote}
      />
      <TreatmentReviews
        bgColor={psoriasisPatientVoices.bgColor}
        cardBgColor="white"
        statsBgColor="transparent"
        label={psoriasisPatientVoices.label}
        title={psoriasisPatientVoices.title}
        items={psoriasisPatientVoices.testimonials.map(t => ({
          quote: t.quote,
          author: t.attribution,
          details: t.treatment,
          details1: t.location
        }))}
        stats={psoriasisPatientVoices.stats.map(s => ({
          value: s.value,
          label: s.description
        }))}
        isDarkText={true}
        useKneeStyle={false}
      />
       <PhysiotherapyTeam
        bgColor={psoriasisTeam.bgColor}
        label={psoriasisTeam.label}
        title={psoriasisTeam.title}
        description={psoriasisTeam.description}
        team={psoriasisTeam.team}
        gridColumns="lg:grid-cols-3"
      />
       <ContentWithSidebar
        bgColor={psoriasisPricing.bgColor}
        label={psoriasisPricing.label}
        title={psoriasisPricing.title}
        services={psoriasisPricing.services}
        insuranceText={psoriasisPricing.insuranceText}
      />
      <FAQ
        bgColor={psoriasisFaqs.bgColor}
        label={psoriasisFaqs.label}
        title={psoriasisFaqs.title}
        description={psoriasisFaqs.description}
        faqs={psoriasisFaqs.faqs}
        buttonText={psoriasisFaqs.primaryCtaText}
        buttonHref={psoriasisFaqs.primaryCtaHref}
        secondaryLinkText={psoriasisFaqs.secondaryCtaText}
        secondaryLinkHref={psoriasisFaqs.secondaryCtaHref}
        sidebarLinks={psoriasisFaqs.sidebarLinks}
      />
      <TreatmentLocation
        bgColor={ psoriasisLocation.bgColor}
        address={ psoriasisLocation.address}
        phone={ psoriasisLocation.phone}
        whatsapp={ psoriasisLocation.whatsapp}
        whatsappMessage={ psoriasisLocation.whatsappMessage}
        email={ psoriasisLocation.email}
        hours={ psoriasisLocation.hours}
        landmarks={ psoriasisLocation.landmarks}
        mapEmbed={ psoriasisLocation.mapEmbed}
        description={ psoriasisLocation.description}
        buttonText={ psoriasisLocation.buttonText}
        buttonHref={ psoriasisLocation.buttonHref}
        label={ psoriasisLocation.label}
        title={ psoriasisLocation.title}
      />
       <FinalCTA {...  psoriasisCTA} />
      
      {/* Section 12 - Related Pages */}
      <RelatedPages {...psoriasisRelatedPages} />
</>
    )
};

export default psoriasistreatment;