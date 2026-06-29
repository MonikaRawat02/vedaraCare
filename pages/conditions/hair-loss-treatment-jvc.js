import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import { SciaticaTreatment, SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  hairLossTreatmentHero,
  hairLossTreatmentIntro,
  hairLossUnderstanding,
  hairLossTypes,
  hairLossTreatmentLadder,
  hairLossTreatmentTimeline,
  hairLossTreatmentWorkup,
  hairLossTreatmentPricing,
  hairLossTreatmentReviews,
  hairLossTreatmentTeam,
  hairLossTreatmentFaqs,
  hairLossTreatmentLocation,
  hairLossTreatmentCTA,
  hairLossTreatmentRelatedPages
} from '../../data/hairLossTreatmentJvcData';

const HairLossTreatmentJvc = () => {
  const currentUrl = "https://vedaracare.ae/conditions/hair-loss-treatment-jvc/";
  const publishedDate = "2026-06-27T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": `${currentUrl}#hair-loss`,
      "name": "Vedara Care Hair Loss Treatment",
      "alternateName": ["Vedara Hair Loss JVC", "Vedara Hair Restoration Dubai", "Vedara Trichology JVC"],
      "url": currentUrl,
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "Specialist hair loss treatment at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. DHA-licensed consultant dermatologists treating male and female pattern hair loss, postnatal hair loss, alopecia areata, telogen effluvium, and other hair loss conditions. Comprehensive workup including hormonal and nutritional evaluation. Evidence-based treatments including topical and oral medications, PRP injections, hair mesotherapy, and coordination with qualified hair transplant surgeons.",
      "telephone": "+971 4 567 8900",
      "priceRange": "AED 400 - AED 25,000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Building 23, District 12",
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
        { "@type": "Place", "name": "Mirdif" }
      ],
      "medicalSpecialty": ["Dermatology", "Hair Loss Treatment", "Trichology", "Medical Dermatology"],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Hair Loss Treatment" },
        { "@type": "MedicalProcedure", "name": "Male Pattern Hair Loss Treatment" },
        { "@type": "MedicalProcedure", "name": "Female Pattern Hair Loss Treatment" },
        { "@type": "MedicalProcedure", "name": "Postnatal Hair Loss Treatment" },
        { "@type": "MedicalProcedure", "name": "Alopecia Areata Treatment" },
        { "@type": "MedicalProcedure", "name": "Telogen Effluvium Treatment" },
        { "@type": "MedicalProcedure", "name": "PRP Hair Treatment" },
        { "@type": "MedicalProcedure", "name": "PRP Injection" },
        { "@type": "MedicalProcedure", "name": "Hair Mesotherapy" },
        { "@type": "MedicalProcedure", "name": "Trichoscopy" },
        { "@type": "MedicalProcedure", "name": "Hair Loss Workup" },
        { "@type": "MedicalProcedure", "name": "Hormonal Hair Loss Evaluation" },
        { "@type": "MedicalProcedure", "name": "Topical Minoxidil Treatment" },
        { "@type": "MedicalProcedure", "name": "Oral Finasteride Treatment" },
        { "@type": "MedicalProcedure", "name": "Oral Dutasteride Treatment" },
        { "@type": "MedicalProcedure", "name": "Hormonal Hair Loss Treatment" },
        { "@type": "MedicalProcedure", "name": "Hair Transplantation Coordination" }
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Dubai Health Authority"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "300",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Androgenetic Alopecia",
      "alternateName": ["Pattern Hair Loss", "Male Pattern Baldness", "Female Pattern Hair Loss"],
      "code": { "@type": "MedicalCode", "code": "L64", "codingSystem": "ICD-10" },
      "possibleTreatment": [
        { "@type": "MedicalProcedure", "name": "Topical Minoxidil" },
        { "@type": "MedicalProcedure", "name": "Oral Finasteride" },
        { "@type": "MedicalProcedure", "name": "Oral Dutasteride" },
        { "@type": "MedicalProcedure", "name": "PRP Injection" },
        { "@type": "MedicalProcedure", "name": "Hair Transplantation" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Telogen Effluvium",
      "code": { "@type": "MedicalCode", "code": "L65.0", "codingSystem": "ICD-10" },
      "possibleTreatment": [
        { "@type": "MedicalProcedure", "name": "Topical Minoxidil" },
        { "@type": "MedicalProcedure", "name": "Nutritional Supplementation" },
        { "@type": "MedicalProcedure", "name": "Trigger Identification and Management" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Postnatal Hair Loss",
      "alternateName": ["Postpartum Telogen Effluvium", "Postpartum Hair Loss"]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Alopecia Areata",
      "code": { "@type": "MedicalCode", "code": "L63", "codingSystem": "ICD-10" },
      "possibleTreatment": [
        { "@type": "MedicalProcedure", "name": "Intralesional Corticosteroid Injection" },
        { "@type": "MedicalProcedure", "name": "Topical Immunotherapy" },
        { "@type": "MedicalProcedure", "name": "JAK Inhibitor Therapy" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Traction Alopecia",
      "code": { "@type": "MedicalCode", "code": "L65.8", "codingSystem": "ICD-10" }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Scarring Alopecia",
      "alternateName": ["Cicatricial Alopecia"],
      "code": { "@type": "MedicalCode", "code": "L66", "codingSystem": "ICD-10" }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Diffuse Hair Thinning"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Thyroid Disorders"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Polycystic Ovary Syndrome",
      "alternateName": ["PCOS"]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Hair Loss Treatment Services in JVC Dubai",
      "provider": { "@id": `${currentUrl}#hair-loss` },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "United Arab Emirates" }
      ],
      "serviceType": "Hair Loss Treatment and Trichology",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Hair Loss Treatment Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Initial hair loss consultation with trichoscopy (60–75 minutes)",
            "priceCurrency": "AED",
            "price": "650",
            "description": "60–75 minute comprehensive consultation with trichoscopy"
          },
          {
            "@type": "Offer",
            "name": "Follow-up consultation",
            "priceCurrency": "AED",
            "price": "350",
            "description": "Follow-up consultation for ongoing hair loss management"
          },
          {
            "@type": "Offer",
            "name": "Comprehensive blood work panel for hair loss",
            "priceCurrency": "AED",
            "price": "450",
            "description": "Thyroid, ferritin, vitamin D, vitamin B12, zinc, and other relevant markers"
          },
          {
            "@type": "Offer",
            "name": "Hormonal evaluation panel for women",
            "priceCurrency": "AED",
            "price": "550",
            "description": "Testosterone, DHEAS, SHBG, prolactin, and other hormonal markers"
          },
          {
            "@type": "Offer",
            "name": "PRP hair treatment — single session",
            "priceCurrency": "AED",
            "price": "1800",
            "description": "Single PRP injection session for hair restoration"
          },
          {
            "@type": "Offer",
            "name": "PRP hair treatment — 3-session package",
            "priceCurrency": "AED",
            "price": "4500",
            "description": "Three monthly PRP sessions for hair restoration"
          },
          {
            "@type": "Offer",
            "name": "PRP hair treatment — 4-session package",
            "priceCurrency": "AED",
            "price": "5800",
            "description": "Four monthly PRP sessions for hair restoration"
          },
          {
            "@type": "Offer",
            "name": "Hair mesotherapy — single session",
            "priceCurrency": "AED",
            "price": "900",
            "description": "Single hair mesotherapy session with growth factors"
          },
          {
            "@type": "Offer",
            "name": "Hair mesotherapy — 6-session package",
            "priceCurrency": "AED",
            "price": "4800",
            "description": "Six sessions of hair mesotherapy"
          },
          {
            "@type": "Offer",
            "name": "Combined PRP and mesotherapy programme",
            "priceCurrency": "AED",
            "price": "7500",
            "description": "Integrated PRP and mesotherapy treatment programme"
          },
          {
            "@type": "Offer",
            "name": "Comprehensive 6-month hair loss programme",
            "priceCurrency": "AED",
            "price": "9500",
            "description": "Structured 6-month hair loss treatment programme including consultation, workup, and treatments"
          },
          {
            "@type": "Offer",
            "name": "Topical and oral medication consultation",
            "priceCurrency": "AED",
            "price": "350",
            "description": "Consultation and prescription for topical and oral hair loss medications"
          },
          {
            "@type": "Offer",
            "name": "Photographic monitoring visit",
            "priceCurrency": "AED",
            "price": "150",
            "description": "Standardised photographic monitoring of hair treatment progress"
          },
          {
            "@type": "Offer",
            "name": "Hair transplant referral consultation",
            "priceCurrency": "AED",
            "price": "450",
            "description": "Consultation for hair transplant surgery candidacy assessment and referral"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${currentUrl}#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/" },
        { "@type": "ListItem", "position": 3, "name": "Hair Loss Treatment in JVC", "item": currentUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": hairLossTreatmentFaqs.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalScholarlyArticle",
      "headline": "Hair Loss Treatment in JVC Dubai — Specialist Dermatology Guide",
      "image": "https://vedaracare.ae/images/hair-loss-treatment-jvc-hero.jpg",
      "datePublished": publishedDate,
      "dateModified": modifiedDate,
      "author": {
        "@type": "Physician",
        "name": "Consultant Dermatologist"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic",
        "logo": {
          "@type": "ImageObject",
          "url": "https://vedaracare.ae/logo.png"
        }
      },
      "about": [
        { "@type": "MedicalCondition", "name": "Androgenetic Alopecia" },
        { "@type": "MedicalCondition", "name": "Alopecia Areata" },
        { "@type": "MedicalCondition", "name": "Telogen Effluvium" },
        { "@type": "MedicalCondition", "name": "Female Pattern Hair Loss" },
        { "@type": "MedicalCondition", "name": "Postnatal Hair Loss" },
        { "@type": "MedicalCondition", "name": "Diffuse Hair Thinning" },
        { "@type": "MedicalCondition", "name": "Thyroid Disorders" },
        { "@type": "MedicalCondition", "name": "Polycystic Ovary Syndrome" },
        { "@type": "MedicalProcedure", "name": "Topical Minoxidil Treatment" },
        { "@type": "MedicalProcedure", "name": "Oral Finasteride Treatment" },
        { "@type": "MedicalProcedure", "name": "Oral Dutasteride Treatment" },
        { "@type": "MedicalProcedure", "name": "PRP Injection" },
        { "@type": "MedicalProcedure", "name": "Hair Mesotherapy" },
        { "@type": "MedicalProcedure", "name": "Trichoscopy" }
      ],
      "mainEntityOfPage": currentUrl
    },
    ...hairLossTreatmentTeam.team.map((member) => ({
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": member.name,
      "url": `https://vedaracare.ae${member.link}`,
      "image": `https://vedaracare.ae${member.image}`,
      "medicalSpecialty": member.specialties,
      "hasCredential": ["MD", "Dermatology Board Certification", "DHA-Licensed Consultant Dermatologist"],
      "knowsAbout": ["Male Pattern Hair Loss", "Female Pattern Hair Loss", "Postnatal Hair Loss", "Alopecia Areata", "Telogen Effluvium", "PRP Hair Treatment", "Trichoscopy"],
      "knowsLanguage": member.languages,
      "worksFor": { "@id": "https://vedaracare.ae/#organization" }
    })),
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://vedaracare.ae/#organization",
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vedaracare.ae/logo.png"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971 4 567 8900",
        "contactType": "Customer Service",
        "areaServed": "AE",
        "availableLanguage": ["English", "Arabic", "Hindi", "Urdu"]
      },
      "insurancePlan": [
        { "@type": "InsuranceCompany", "name": "Daman" },
        { "@type": "InsuranceCompany", "name": "AXA" },
        { "@type": "InsuranceCompany", "name": "Allianz" },
        { "@type": "InsuranceCompany", "name": "Oman Insurance" },
        { "@type": "InsuranceCompany", "name": "Now Health" },
        { "@type": "InsuranceCompany", "name": "Bupa" },
        { "@type": "InsuranceCompany", "name": "MetLife" }
      ],
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "Jumeirah Village Circle" },
        { "@type": "Place", "name": "Circle Mall" },
        { "@type": "Place", "name": "FIVE Jumeirah Village" },
        { "@type": "Place", "name": "JSS Private School" },
        { "@type": "Place", "name": "Jumeirah Village Triangle" },
        { "@type": "Place", "name": "Al Barsha South" },
        { "@type": "Place", "name": "Dubai Sports City" },
        { "@type": "Place", "name": "Motor City" },
        { "@type": "Place", "name": "Arjan" },
        { "@type": "Place", "name": "Dubai Hills Estate" },
        { "@type": "Place", "name": "Dubai Marina" },
        { "@type": "Place", "name": "Downtown Dubai" },
        { "@type": "Place", "name": "Palm Jumeirah" },
        { "@type": "Place", "name": "Mirdif" }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Hair Loss Treatment in JVC | Specialist Dermatology | Vedara Dubai</title>
        <meta name="description" content="Specialist hair loss treatment in JVC, Dubai. DHA-licensed consultant dermatologists. Male and female pattern hair loss, postnatal hair loss, alopecia areata. Comprehensive workup, PRP, mesotherapy, medical treatment. Walking distance from Circle Mall." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/conditions/hair-loss-treatment-jvc/" />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
        <meta property="og:title" content="Hair Loss Treatment in JVC — Specialist Dermatology | Vedara Care Dubai" />
        <meta property="og:description" content="Specialist hair loss treatment at our Jumeirah Village Circle clinic. DHA-licensed consultant dermatologists treating male and female pattern hair loss, postnatal hair loss, alopecia areata, telogen effluvium. Comprehensive workup including hormonal and nutritional evaluation. Evidence-based treatment with PRP, mesotherapy, topical and oral medications, hair transplant coordination." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/hair-loss-treatment-jvc.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hair Loss Treatment in JVC — Specialist Dermatology | Vedara Care Dubai" />
        <meta name="twitter:description" content="DHA-licensed consultant dermatologists treating all types of hair loss. Comprehensive workup. PRP, mesotherapy, evidence-based treatment. Walking distance from Circle Mall." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/hair-loss-treatment-jvc.jpg" />
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

      <AyurvedaHero
        {...hairLossTreatmentHero}
      />
      <AyurvedaIntro
        {...hairLossTreatmentIntro}
      />

      <SciaticaTreatment
            data={hairLossUnderstanding}
            showBorderLeft={false}
            rightContentStyle="hairCycle"
            bgColor="bg-[#F5F1E8]"
            showStepNumbers={false}
          />

      <SciaticaTypes
        bgColor={hairLossTypes.bgColor}
        cardBg={hairLossTypes.cardBg}
        label={hairLossTypes.label}
        title={hairLossTypes.title}
        description={hairLossTypes.description}
        types={hairLossTypes.types}
        footer={hairLossTypes.footer}
        gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        typicalSignsLabel="TYPICAL PRESENTATION:"
        borderPosition="left"
      />

      <ContentWithSidebar
        bgColor={hairLossTreatmentWorkup.bgColor}
        label={hairLossTreatmentWorkup.label}
        title={hairLossTreatmentWorkup.title}
        contentSections={hairLossTreatmentWorkup.contentSections}
        sidebar={hairLossTreatmentWorkup.sidebar}
      />

      <SciaticaTypes
        bgColor={hairLossTreatmentLadder.bgColor}
        cardBg={hairLossTreatmentLadder.cardBg}
        label={hairLossTreatmentLadder.label}
        title={hairLossTreatmentLadder.title}
        description={hairLossTreatmentLadder.description}
        types={hairLossTreatmentLadder.types}
        footer={hairLossTreatmentLadder.footer}
        gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        typicalSignsLabel="BEST FOR:"
        borderPosition="top"
      />

      <ContentWithSidebar
        bgColor={hairLossTreatmentTimeline.bgColor}
        label={hairLossTreatmentTimeline.label}
        title={hairLossTreatmentTimeline.title}
        intro={hairLossTreatmentTimeline.intro}
        phases={hairLossTreatmentTimeline.phases}
        footerNote={hairLossTreatmentTimeline.footerNote}
      />

      <TreatmentReviews
        {...hairLossTreatmentReviews}
        bgColor={hairLossTreatmentReviews.bgColor}
        useKneeStyle={hairLossTreatmentReviews.useKneeStyle}
      />

      <PhysiotherapyTeam
        bgColor={hairLossTreatmentTeam.bgColor}
        label={hairLossTreatmentTeam.label}
        title={hairLossTreatmentTeam.title}
        description={hairLossTreatmentTeam.description}
        members={hairLossTreatmentTeam.team}
        gridColumns="lg:grid-cols-4"
      />

      <ContentWithSidebar
        bgColor={hairLossTreatmentPricing.bgColor}
        label={hairLossTreatmentPricing.label}
        title={hairLossTreatmentPricing.title}
        services={hairLossTreatmentPricing.services}
        insuranceText={hairLossTreatmentPricing.insuranceText}
        insurances={hairLossTreatmentPricing.insurances}
      />

      <FAQ
        bgColor={hairLossTreatmentFaqs.bgColor}
        label={hairLossTreatmentFaqs.label}
        title={hairLossTreatmentFaqs.title}
        description={hairLossTreatmentFaqs.description}
        faqs={hairLossTreatmentFaqs.faqs}
        buttonText={hairLossTreatmentFaqs.primaryCtaText}
        buttonHref={hairLossTreatmentFaqs.primaryCtaHref}
        secondaryLinkText={hairLossTreatmentFaqs.secondaryCtaText}
        secondaryLinkHref={hairLossTreatmentFaqs.secondaryCtaHref}
        sidebarLinks={hairLossTreatmentFaqs.sidebarLinks}
      />

      <TreatmentLocation
        address={hairLossTreatmentLocation.sections.find(s => s.label === "Address")?.content}
        phone={hairLossTreatmentLocation.sections.find(s => s.label === "Phone")?.content}
        hours={hairLossTreatmentLocation.sections.find(s => s.label === "Clinic Hours")?.content}
        mapEmbed={hairLossTreatmentLocation.mapEmbed}
        description={hairLossTreatmentLocation.description}
        buttonText={hairLossTreatmentLocation.buttonText}
        buttonHref={hairLossTreatmentLocation.buttonHref}
      />

      <FinalCTA
        {...hairLossTreatmentCTA}
      />

      <RelatedPages
        {...hairLossTreatmentRelatedPages}
      />
    </>
  );
};

export default HairLossTreatmentJvc;
