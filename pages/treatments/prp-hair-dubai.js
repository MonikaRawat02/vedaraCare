import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import { SciaticaTreatment, SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import {
  prpHairHero,
  prpHairIntro,
  prpHairUnderstanding,
  prpHairProcedure,
  prpHairCombination,
  prpHairRealisticExpectations,
  prpHairPatientVoices,
  prpHairTeam,
  prpHairPricing,
  prpHairCTA,
  prpHairFAQ,
  prpHairLocation,
  prpHairRelatedPages
} from '../../data/prpHairTreatmentData';

const PrpHairTreatment = () => {
  const currentUrl = "https://vedaracare.ae/treatments/prp-hair-dubai/";
  const publishedDate = "2026-07-08T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    // Schema 1: MedicalBusiness
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": `${currentUrl}#prp-hair`,
      "name": "Vedara Care PRP Hair Treatment JVC",
      "alternateName": ["Vedara PRP Hair JVC", "Vedara Platelet-Rich Plasma Hair Treatment Dubai", "Vedara PRP Hair Restoration"],
      "url": currentUrl,
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "Specialist PRP hair treatment at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. DHA-licensed consultant dermatologists delivering evidence-based standardised platelet-rich plasma therapy with combination approach.",
      "telephone": "+971 55 586 7466",
      "priceRange": "AED 400 - AED 20,000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Building 23, District 12",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE",
        "postalCode": ""
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.068346",
        "longitude": "55.2072235"
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
          "opens": "09:00",
          "closes": "18:00"
        }
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
      "medicalSpecialty": ["Dermatology", "Hair Restoration", "PRP Therapy", "Aesthetic Dermatology"],
      "isAcceptingNewPatients": true,
      "availableService": [
        {"@type": "MedicalProcedure", "name": "PRP Hair Treatment"},
        {"@type": "MedicalProcedure", "name": "Platelet-Rich Plasma Therapy for Hair"},
        {"@type": "MedicalProcedure", "name": "PRP with Combination Medications"},
        {"@type": "MedicalProcedure", "name": "Hair Loss Assessment"},
        {"@type": "MedicalProcedure", "name": "Trichoscopy"},
        {"@type": "MedicalProcedure", "name": "Postpartum Hair Loss Treatment"}
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Dubai Health Authority"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "600",
        "bestRating": "5",
        "worstRating": "1"
      }
    },

    // Schema 2: Medical Procedure Entities
    ...[
      {"@context": "https://schema.org", "@type": "MedicalProcedure", "name": "PRP Hair Treatment", "alternateName": "Platelet-Rich Plasma Hair Treatment", "procedureType": "https://schema.org/PercutaneousProcedure", "howPerformed": "Blood draw, centrifugation to concentrate platelets, injection of PRP into scalp hair loss areas. Typical protocol 4-6 initial monthly sessions followed by maintenance every 3-6 months.", "preparation": "Comprehensive dermatology consultation and hair assessment", "followup": "Monthly for initial sessions; every 3-6 months for maintenance"},
      {"@context": "https://schema.org", "@type": "MedicalProcedure", "name": "PRP with Combination Medications", "procedureType": "https://schema.org/TherapeuticProcedure", "howPerformed": "PRP treatment combined with topical minoxidil, and for appropriate patients systemic medications (finasteride, dutasteride, hormonal treatment) for superior outcomes"},
      {"@context": "https://schema.org", "@type": "MedicalProcedure", "name": "Trichoscopy", "procedureType": "https://schema.org/DiagnosticProcedure", "howPerformed": "Dermoscopic examination of scalp and hair for diagnostic assessment"}
    ],

    // Schema 3: Service with OfferCatalog
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "PRP Hair Treatment Services at JVC Dubai",
      "provider": {"@id": `${currentUrl}#prp-hair`},
      "areaServed": [{"@type": "Place", "name": "Jumeirah Village Circle"}, {"@type": "City", "name": "Dubai"}, {"@type": "Place", "name": "United Arab Emirates"}],
      "serviceType": "PRP Hair Restoration Therapy",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "PRP Hair Treatment Services",
        "itemListElement": [
          {"@type": "Offer", "name": "Initial Hair Consultation", "priceCurrency": "AED", "price": "650"},
          {"@type": "Offer", "name": "Comprehensive Hair Workup", "priceCurrency": "AED", "price": "450"},
          {"@type": "Offer", "name": "Single PRP Hair Session", "priceCurrency": "AED", "price": "1800"},
          {"@type": "Offer", "name": "PRP Hair Package 4 Sessions", "priceCurrency": "AED", "price": "6500"},
          {"@type": "Offer", "name": "PRP Hair Package 6 Sessions", "priceCurrency": "AED", "price": "9200"},
          {"@type": "Offer", "name": "Maintenance PRP Session", "priceCurrency": "AED", "price": "1500"},
          {"@type": "Offer", "name": "Combination Programme 6 Months", "priceCurrency": "AED", "price": "12500"},
          {"@type": "Offer", "name": "Comprehensive 12-Month Programme", "priceCurrency": "AED", "price": "20000"}
        ]
      }
    },

    // Schema 4: BreadcrumbList
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://vedaracare.ae/treatments/"},
        {"@type": "ListItem", "position": 3, "name": "PRP Hair Treatment in JVC Dubai", "item": currentUrl}
      ]
    },

    // Schema 5: FAQPage (dynamic from data)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": prpHairFAQ.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {"@type": "Answer", "text": faq.answer}
      }))
    },

    // Schema 6: MedicalScholarlyArticle
    {
      "@context": "https://schema.org",
      "@type": "MedicalScholarlyArticle",
      "headline": "PRP Hair Treatment at JVC Dubai — Evidence-Based Dermatology-Led Care Guide",
      "image": "https://vedaracare.ae/images/prp-hair-jvc-dubai-hero.jpg",
      "datePublished": publishedDate,
      "dateModified": modifiedDate,
      "author": {"@type": "Physician", "name": "Lead Consultant Dermatologist", "url": "https://vedaracare.ae/dermatologists/"},
      "publisher": {"@type": "Organization", "name": "Vedara Care Polyclinic", "logo": {"@type": "ImageObject", "url": "https://vedaracare.ae/logo.png"}},
      "about": [
        {"@type": "MedicalProcedure", "name": "PRP Hair Treatment"},
        {"@type": "MedicalProcedure", "name": "Platelet-Rich Plasma Therapy"},
        {"@type": "MedicalCondition", "name": "Androgenetic Alopecia"}
      ],
      "mainEntityOfPage": currentUrl
    },

    // Schema 7: Physician (team members)
    ...prpHairTeam.team.map((member) => ({
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": member.name,
      "url": `https://vedaracare.ae${member.link}`,
      "image": `https://vedaracare.ae${member.image}`,
      "medicalSpecialty": ["Dermatology", "Hair Restoration", "PRP Therapy", ...member.specialties],
      "hasCredential": ["MD", "Dermatology Board Certification", "DHA-Licensed Consultant Dermatologist"],
      "alumniOf": {"@type": "EducationalOrganization", "name": ""},
      "knowsAbout": ["PRP Hair Treatment", "Platelet-Rich Plasma Therapy", "Hair Loss", "Androgenetic Alopecia", "Combination Hair Restoration", "Trichoscopy"],
      "knowsLanguage": member.languages,
      "worksFor": {"@id": "https://vedaracare.ae/#organization"}
    })),

    // Schema 8: Organization
    {
      "@context": "https://schema.org",
      "@id": "https://vedaracare.ae/#organization",
      "@type": ["Organization", "MedicalOrganization"],
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": {"@type": "ImageObject", "url": "https://vedaracare.ae/logo.png"},
      "sameAs": ["https://www.facebook.com/", "https://www.instagram.com/", "https://www.linkedin.com/company/", "https://www.google.com/maps/place/"],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971 55 586 7466",
        "contactType": "Customer Service",
        "areaServed": "AE",
        "availableLanguage": ["English", "Arabic", "Hindi", "Urdu"]
      },
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
        <title>PRP Hair Treatment in JVC Dubai | Evidence-Based | Vedara Care</title>
        <meta name="description" content="Specialist PRP hair treatment at our JVC clinic, Dubai. DHA-licensed consultant dermatologists. Evidence-based standardised protocols. Combination approach with proven medications for superior outcomes. Walking distance from Circle Mall." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/treatments/prp-hair-dubai/" />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
        <meta property="og:title" content="PRP Hair Treatment in JVC Dubai — Evidence-Based Dermatology-Led Care | Vedara" />
        <meta property="og:description" content="Specialist PRP hair treatment at our Jumeirah Village Circle clinic, Dubai. DHA-licensed consultant dermatologists delivering evidence-based standardised platelet-rich plasma therapy for hair restoration. Combination approach with proven medications produces superior outcomes to PRP alone." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/prp-hair-jvc-dubai.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PRP Hair Treatment in JVC Dubai — Evidence-Based | Vedara" />
        <meta name="twitter:description" content="DHA-licensed consultant dermatologists delivering evidence-based PRP hair treatment with combination approach." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/prp-hair-jvc-dubai.jpg" />
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
        {...prpHairHero}
      />

      <AyurvedaIntro
        {...prpHairIntro}
      />

      <SciaticaTreatment
        data={prpHairUnderstanding}
        showBorderLeft={false}
        rightContentStyle="keyAnatomy"
        bgColor="bg-[#F5F0E8]"
        showStepNumbers={false}
      />
 <SciaticaTypes
        bgColor={prpHairProcedure.bgColor}
        cardBg={prpHairProcedure.cardBg}
        label={prpHairProcedure.label}
        title={prpHairProcedure.title}
        description={prpHairProcedure.description}
        types={prpHairProcedure.types}
        footer={prpHairProcedure.footer}
        gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        typicalSignsLabel="Duration:"
        borderPosition="left"
      />

      <ContentWithSidebar
        bgColor={prpHairCombination.bgColor}
        label={prpHairCombination.label}
        title={prpHairCombination.title}
        contentSections={prpHairCombination.contentSections}
        sidebar={prpHairCombination.sidebar}
      />

      <ContentWithSidebar
        bgColor={prpHairRealisticExpectations.bgColor}
        cardBg={prpHairRealisticExpectations.cardBg}
        label={prpHairRealisticExpectations.label}
        title={prpHairRealisticExpectations.title}
        intro={prpHairRealisticExpectations.intro}
        phases={prpHairRealisticExpectations.phases}
        footerNote={prpHairRealisticExpectations.footerNote}
        bottomContent={prpHairRealisticExpectations.bottomContent}
      />

      <TreatmentReviews
        bgColor={prpHairPatientVoices.bgColor}
        cardBgColor={prpHairPatientVoices.cardBg}
        statsBgColor="transparent"
        label={prpHairPatientVoices.label}
        title={prpHairPatientVoices.title}
        items={prpHairPatientVoices.testimonials.map(t => ({
          quote: t.quote,
          author: t.attribution,
          details: t.treatment,
          details1: t.location
        }))}
        stats={prpHairPatientVoices.stats.map(s => ({
          value: s.value,
          label: s.description
        }))}
        isDarkText={true}
        useKneeStyle={false}
      />

      <PhysiotherapyTeam
        bgColor={prpHairTeam.bgColor}
        label={prpHairTeam.label}
        title={prpHairTeam.title}
        description={prpHairTeam.description}
        team={prpHairTeam.team}
        gridColumns="lg:grid-cols-3"
      />
       <ContentWithSidebar
        bgColor={prpHairPricing.bgColor}
        label={prpHairPricing.label}
        title={prpHairPricing.title}
        services={prpHairPricing.services}
        insuranceText={prpHairPricing.insuranceText}
        insurances={prpHairPricing.insurances}
      />

      <FAQ
        bgColor={prpHairFAQ.bgColor}
        label={prpHairFAQ.label}
        title={prpHairFAQ.title}
        description={prpHairFAQ.description}
        faqs={prpHairFAQ.faqs}
        buttonText={prpHairFAQ.buttonText}
        buttonHref={prpHairFAQ.buttonHref}
        sidebarLinks={prpHairFAQ.sidebarLinks}
      />

      <TreatmentLocation
        bgColor={prpHairLocation.bgColor}
        label={prpHairLocation.label}
        title={prpHairLocation.title}
        address={prpHairLocation.address}
        phone={prpHairLocation.phone}
        email={prpHairLocation.email}
        whatsapp={prpHairLocation.whatsapp}
        whatsappMessage={prpHairLocation.whatsappMessage}
        hours={prpHairLocation.hours}
        landmarks={prpHairLocation.landmarks}
        description={prpHairLocation.description}
        buttonText={prpHairLocation.buttonText}
      />

      <FinalCTA
        {...prpHairCTA}
      />

      <RelatedPages
        {...prpHairRelatedPages}
      />
    </>
  );
};

export default PrpHairTreatment;
