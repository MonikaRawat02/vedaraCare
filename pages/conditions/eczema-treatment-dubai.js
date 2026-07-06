import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import { SciaticaTreatment, SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import {
  eczemaTreatmentHero,
  eczemaTreatmentIntro,
  eczemaTreatmentUnderstanding,
  eczemaTreatmentTypes,
  eczemaTreatmentOptions,
  eczemaTreatmentTimeline,
  eczemaTreatmentReviews,
  eczemaTreatmentTeam,
  eczemaTreatmentPricing,
  eczemaTreatmentFaqs,
  eczemaTreatmentLocation,
  eczemaTreatmentCTA,
  eczemaTreatmentRelatedPages
} from '../../data/eczemaTreatmentData';

const EczemaTreatmentDubai = () => {
  const currentUrl = "https://vedaracare.ae/conditions/eczema-treatment-dubai/";
  const publishedDate = "2025-06-01T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": `${currentUrl}#eczema`,
      "name": "Vedara Care Eczema Treatment JVC",
      "alternateName": ["Vedara Eczema JVC", "Vedara Atopic Dermatitis Dubai", "Vedara Pediatric Eczema JVC"],
      "url": currentUrl,
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "Specialist eczema treatment at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. DHA-licensed consultant dermatologists treating pediatric atopic dermatitis, adult eczema, contact dermatitis, hand eczema, and severe eczema. Access to biologic treatments including dupilumab.",
      "telephone": "+971 55 586 7466",
      "priceRange": "AED 400 - AED 25,000",
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
        { "@type": "Place", "name": "Jumeirah Village Circle" },
        { "@type": "City", "name": "Dubai" },
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
      "medicalSpecialty": [
        "Dermatology",
        "Pediatric Dermatology",
        "Atopic Dermatitis Treatment",
        "Eczema Treatment"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Eczema Treatment" },
        { "@type": "MedicalProcedure", "name": "Atopic Dermatitis Treatment" },
        { "@type": "MedicalProcedure", "name": "Pediatric Eczema Treatment" },
        { "@type": "MedicalProcedure", "name": "Contact Dermatitis Treatment" },
        { "@type": "MedicalProcedure", "name": "Hand Eczema Treatment" },
        { "@type": "MedicalProcedure", "name": "Biologic Treatment for Eczema" },
        { "@type": "MedicalProcedure", "name": "Dupilumab Therapy" },
        { "@type": "MedicalProcedure", "name": "Wet Wrap Therapy" },
        { "@type": "MedicalProcedure", "name": "Trigger Identification and Assessment" }
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Dubai Health Authority"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Atopic Dermatitis",
      "alternateName": ["Eczema", "Atopic Eczema"],
      "code": {"@type": "MedicalCode", "code": "L20", "codingSystem": "ICD-10"},
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Topical Corticosteroids"},
        {"@type": "MedicalProcedure", "name": "Topical Calcineurin Inhibitors"},
        {"@type": "MedicalProcedure", "name": "Dupilumab"},
        {"@type": "MedicalProcedure", "name": "Wet Wrap Therapy"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Contact Dermatitis",
      "code": {"@type": "MedicalCode", "code": "L23-L25", "codingSystem": "ICD-10"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Hand Eczema",
      "alternateName": ["Hand Dermatitis"]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Dyshidrotic Eczema",
      "alternateName": ["Pompholyx"],
      "code": {"@type": "MedicalCode", "code": "L30.1", "codingSystem": "ICD-10"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Nummular Eczema",
      "alternateName": ["Discoid Eczema"],
      "code": {"@type": "MedicalCode", "code": "L30.0", "codingSystem": "ICD-10"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Seborrheic Dermatitis",
      "code": {"@type": "MedicalCode", "code": "L21", "codingSystem": "ICD-10"}
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Eczema Treatment Services at JVC Dubai",
      "provider": {"@id": `${currentUrl}#eczema`},
      "areaServed": [
        {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "serviceType": "Eczema and Dermatitis Treatment",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Eczema Treatment Services",
        "itemListElement": [
          {"@type": "Offer", "name": "Initial Eczema Consultation", "priceCurrency": "AED", "price": ""},
          {"@type": "Offer", "name": "Pediatric Eczema Consultation with Family Education", "priceCurrency": "AED", "price": ""},
          {"@type": "Offer", "name": "Follow-up Consultation", "priceCurrency": "AED", "price": ""},
          {"@type": "Offer", "name": "Comprehensive Allergen Assessment", "priceCurrency": "AED", "price": ""},
          {"@type": "Offer", "name": "Wet Wrap Therapy Training Session", "priceCurrency": "AED", "price": ""},
          {"@type": "Offer", "name": "Systemic Treatment Monitoring", "priceCurrency": "AED", "price": ""},
          {"@type": "Offer", "name": "Biologic Treatment Consultation", "priceCurrency": "AED", "price": "Consultation required"},
          {"@type": "Offer", "name": "Comprehensive 6-month Eczema Management Programme", "priceCurrency": "AED", "price": ""}
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://vedaracare.ae/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://vedaracare.ae/conditions/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Eczema Treatment in JVC Dubai",
          "item": currentUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is eczema and what causes it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eczema is a group of chronic inflammatory skin conditions causing dry, itchy, inflamed skin. Most common type is atopic dermatitis. Causes involve genetic predisposition affecting skin barrier, immune dysregulation, environmental triggers, and skin microbiome imbalance."
          }
        },
        {
          "@type": "Question",
          "name": "Can eczema be cured permanently?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most eczema is chronic. Well-controlled eczema is achievable for most patients; permanent cure is less common. Some children outgrow atopic dermatitis. Contact dermatitis with identifiable trigger may resolve completely."
          }
        },
        {
          "@type": "Question",
          "name": "Are topical steroids safe for long-term use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When used appropriately, topical steroids are safe and effective. Appropriate use includes matched potency, limited courses for sensitive areas, gradual tapering. Concerns arise with inappropriate high-potency use without medical supervision."
          }
        },
        {
          "@type": "Question",
          "name": "What triggers eczema?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Multiple potential triggers: allergens (dust mites, pet dander, pollens, foods in some patients), irritants (soaps, detergents, fragrances), environmental factors (heat, humidity, dry air), stress, hormonal factors, infections, sweat."
          }
        },
        {
          "@type": "Question",
          "name": "Are food allergies related to eczema?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Complex relationship. Food allergies can trigger eczema in some patients, particularly pediatric patients. However, food allergies are less common cause than many believe. Restrictive diets without medical basis often produce nutritional problems without eczema improvement."
          }
        },
        {
          "@type": "Question",
          "name": "Will insurance cover my eczema treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Dubai insurance plans cover medical eczema treatment with appropriate justification. Biologic treatments may require prior authorisation. We are direct-billing partners with seven major insurers."
          }
        },
        {
          "@type": "Question",
          "name": "What about adult-onset eczema?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Adult-onset eczema is increasingly recognised. Comprehensive workup identifies contributing factors. Treatment approach similar to childhood-persistent adult eczema. Newer biologic treatments particularly relevant for moderate-severe cases."
          }
        },
        {
          "@type": "Question",
          "name": "What is wet wrap therapy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Established treatment for severe pediatric atopic dermatitis. Wet inner layer followed by dry outer layer applied over topical treatments. Enhances treatment penetration, provides physical barrier against scratching. Family training essential."
          }
        },
        ...eczemaTreatmentFaqs.faqs.slice(8).map(faq => ({
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
      "headline": "Eczema Treatment at JVC Dubai — Specialist Pediatric and Adult Care Guide",
      "image": "https://vedaracare.ae/og-images/eczema-treatment-jvc-dubai.jpg",
      "datePublished": publishedDate,
      "dateModified": modifiedDate,
      "author": {
        "@type": "Physician",
        "name": "Dr. [Lead Consultant Dermatologist], MD",
        "url": "https://vedaracare.ae/dermatologists/[name]/"
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
        { "@type": "MedicalCondition", "name": "Atopic Dermatitis" },
        { "@type": "MedicalCondition", "name": "Eczema" },
        { "@type": "MedicalCondition", "name": "Contact Dermatitis" },
        { "@type": "MedicalCondition", "name": "Pediatric Atopic Dermatitis" }
      ],
      "mainEntityOfPage": currentUrl
    },
    ...eczemaTreatmentTeam.team.map(dr => ({
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": dr.name,
      "url": `https://vedaracare.ae${dr.link}`,
      "image": `https://vedaracare.ae${dr.image}`,
      "medicalSpecialty": dr.specialties,
      "hasCredential": [
        "MD",
        "Dermatology Board Certification",
        "DHA-Licensed Consultant Dermatologist"
      ],
      "alumniOf": { "@type": "EducationalOrganization", "name": "[Medical School]" },
      "knowsAbout": ["Atopic Dermatitis", "Pediatric Eczema", "Adult Eczema", "Contact Dermatitis", "Hand Eczema", "Biologic Treatments", "Dupilumab Therapy", "Wet Wrap Therapy"],
      "knowsLanguage": dr.languages[0].split(", "),
      "worksFor": { "@id": "https://vedaracare.ae/#organization" }
    })),
    {
      "@context": "https://schema.org",
      "@id": "https://vedaracare.ae/#organization",
      "@type": ["Organization", "MedicalOrganization"],
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vedaracare.ae/logo.png"
      },
      "sameAs": [
        "https://www.facebook.com/[handle]",
        "https://www.instagram.com/[handle]",
        "https://www.linkedin.com/company/[handle]",
        "https://www.google.com/maps/place/[place_id]"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971 55 586 7466",
        "contactType": "Customer Service",
        "areaServed": "AE",
        "availableLanguage": ["English", "Arabic", "Hindi", "Urdu"]
      }
    }
  ];

  return (
    <>
      <Head>
        <title>Eczema Treatment in JVC Dubai | Pediatric & Adult | Vedara Care</title>
        <meta name="description" content="Specialist eczema treatment at our JVC clinic, Dubai. DHA-licensed consultant dermatologists for pediatric and adult atopic dermatitis, contact dermatitis, hand eczema. Access to biologic treatments. Walking distance from Circle Mall." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow" />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/conditions/eczema-treatment-dubai/" />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
        <meta property="og:title" content="Eczema Treatment in JVC Dubai — Pediatric & Adult Specialist Care | Vedara" />
        <meta property="og:description" content="Specialist eczema treatment at our Jumeirah Village Circle clinic, Dubai. DHA-licensed consultant dermatologists treating pediatric atopic dermatitis, adult eczema, contact dermatitis, hand eczema, and severe eczema across all Fitzpatrick skin types. Access to biologic treatments including dupilumab." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/eczema-treatment-jvc-dubai.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eczema Treatment in JVC Dubai — Pediatric & Adult Specialist | Vedara" />
        <meta name="twitter:description" content="DHA-licensed consultant dermatologists for eczema in children and adults. Access to biologic treatments." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/eczema-treatment-jvc-dubai.jpg" />
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <AyurvedaHero
        {...eczemaTreatmentHero}
      />

      <AyurvedaIntro
        {...eczemaTreatmentIntro}
      />

      <SciaticaTreatment
            data={eczemaTreatmentUnderstanding}
            showBorderLeft={false}
            rightContentStyle="bulletList"
            bgColor="bg-[#F0EBE3]"
            showStepNumbers={false}
          />

      <SciaticaTypes
        bgColor={eczemaTreatmentTypes.bgColor}
        cardBg={eczemaTreatmentTypes.cardBg}
        label={eczemaTreatmentTypes.label}
        title={eczemaTreatmentTypes.title}
        description={eczemaTreatmentTypes.description}
        types={eczemaTreatmentTypes.types}
        footer={eczemaTreatmentTypes.footer}
        gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        typicalSignsLabel="TYPICAL PRESENTATION:"
        borderPosition="left"
      />

      <ContentWithSidebar
        bgColor={eczemaTreatmentOptions.bgColor}
        label={eczemaTreatmentOptions.label}
        title={eczemaTreatmentOptions.title}
        contentSections={eczemaTreatmentOptions.contentSections}
        sidebar={eczemaTreatmentOptions.sidebar}
      />

      <ContentWithSidebar
        bgColor={eczemaTreatmentTimeline.bgColor}
        cardBg={eczemaTreatmentTimeline.cardBg}
        label={eczemaTreatmentTimeline.label}
        title={eczemaTreatmentTimeline.title}
        intro={eczemaTreatmentTimeline.intro}
        phases={eczemaTreatmentTimeline.phases}
        footerNote={eczemaTreatmentTimeline.footerNote}
      />

      <TreatmentReviews
        {...eczemaTreatmentReviews}
        bgColor={eczemaTreatmentReviews.bgColor}
        useKneeStyle={eczemaTreatmentReviews.useKneeStyle}
      />

      <PhysiotherapyTeam
        bgColor={eczemaTreatmentTeam.bgColor}
        label={eczemaTreatmentTeam.label}
        title={eczemaTreatmentTeam.title}
        description={eczemaTreatmentTeam.description}
        members={eczemaTreatmentTeam.team}
        gridColumns="lg:grid-cols-4"
      />

      <ContentWithSidebar
        bgColor={eczemaTreatmentPricing.bgColor}
        label={eczemaTreatmentPricing.label}
        title={eczemaTreatmentPricing.title}
        services={eczemaTreatmentPricing.services}
        insuranceText={eczemaTreatmentPricing.insuranceText}
      />

      <FAQ
        bgColor={eczemaTreatmentFaqs.bgColor}
        label={eczemaTreatmentFaqs.label}
        title={eczemaTreatmentFaqs.title}
        description={eczemaTreatmentFaqs.description}
        faqs={eczemaTreatmentFaqs.faqs}
        buttonText={eczemaTreatmentFaqs.primaryCtaText}
        buttonHref={eczemaTreatmentFaqs.primaryCtaHref}
        secondaryLinkText={eczemaTreatmentFaqs.secondaryCtaText}
        secondaryLinkHref={eczemaTreatmentFaqs.secondaryCtaHref}
        sidebarLinks={eczemaTreatmentFaqs.sidebarLinks}
      />

      <TreatmentLocation {...eczemaTreatmentLocation} />

      <FinalCTA
        {...eczemaTreatmentCTA}
      />

      <RelatedPages
        {...eczemaTreatmentRelatedPages}
      />
    </>
  );
};

export default EczemaTreatmentDubai;
