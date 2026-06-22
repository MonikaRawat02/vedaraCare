import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import SportsInjuryTypes from '../../components/ayurveda/SportsInjuryTypes';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import PelvicFloorAssessment from '../../components/ayurveda/PelvicFloorAssessment';
import { SciaticaTreatment } from '../../components/ayurveda/SciaticaSections';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import {
  pelvicFloorHero,
  pelvicFloorIntro,
  pelvicFloorTypes,
  pelvicFloorSciaticaSection1,
  pelvicFloorSciaticaSection2,
  pelvicFloorMechanism3,
  pelvicFloorReviews,
  pelvicFloorTeam,
  pelvicFloorPricing,
  pelvicFloorAssessment,
  pelvicFloorPostnatalSection,
  pelvicFloorFaqs,
  pelvicFloorLocation,
  pelvicFloorCTA,
  pelvicFloorRelatedPages
} from '../../data/pelvicFloorData';

const PelvicFloorDubai = () => {
  const currentUrl = "https://vedaracare.ae/conditions/pelvic-floor-physiotherapy-dubai/";
  const publishedDate = "2024-06-01T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    // Schema 1: MedicalClinic / LocalBusiness / PhysicalTherapy
    {
      "@context": "https://schema.org",
      "@type": ["MedicalClinic", "LocalBusiness", "PhysicalTherapy"],
      "@id": "https://vedaracare.ae/#clinic",
      "name": "Vedara Care Polyclinic",
      "alternateName": ["Vedara Pelvic Floor Physio Dubai", "Vedara Female Pelvic Health JVC"],
      "url": currentUrl,
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "Specialist pelvic floor physiotherapy at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. Delivered exclusively by female DPT-qualified physiotherapists with specific pelvic floor training. Postnatal pelvic floor recovery, urinary incontinence, pelvic organ prolapse, sexual function concerns, pregnancy support, chronic pelvic pain. Cultural and modesty considerations respected. External and internal assessment options available.",
      "telephone": "+971 4 567 8900",
      "priceRange": "AED 400 - AED 15,000",
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
        "Physiotherapy",
        "Pelvic Floor Physiotherapy",
        "Women's Health Physiotherapy"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Pelvic Floor Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Pelvic Floor Muscle Training"},
        {"@type": "MedicalProcedure", "name": "Biofeedback Therapy"},
        {"@type": "MedicalProcedure", "name": "Bladder Retraining"},
        {"@type": "MedicalProcedure", "name": "Pelvic Floor Manual Therapy"},
        {"@type": "MedicalProcedure", "name": "Postural Re-education"},
        {"@type": "MedicalProcedure", "name": "Postnatal Pelvic Floor Recovery"},
        {"@type": "MedicalProcedure", "name": "Stress Urinary Incontinence Treatment"},
        {"@type": "MedicalProcedure", "name": "Urge Urinary Incontinence Treatment"},
        {"@type": "MedicalProcedure", "name": "Mixed Urinary Incontinence Treatment"},
        {"@type": "MedicalProcedure", "name": "Pelvic Organ Prolapse Conservative Management"},
        {"@type": "MedicalProcedure", "name": "Cystocele Treatment"},
        {"@type": "MedicalProcedure", "name": "Rectocele Treatment"},
        {"@type": "MedicalProcedure", "name": "Uterine Prolapse Treatment"},
        {"@type": "MedicalProcedure", "name": "Diastasis Recti Treatment"},
        {"@type": "MedicalProcedure", "name": "Dyspareunia Treatment"},
        {"@type": "MedicalProcedure", "name": "Vaginismus Treatment"},
        {"@type": "MedicalProcedure", "name": "Chronic Pelvic Pain Treatment"},
        {"@type": "MedicalProcedure", "name": "Pelvic Girdle Pain Treatment"},
        {"@type": "MedicalProcedure", "name": "Post-Prostatectomy Incontinence Treatment"},
        {"@type": "MedicalProcedure", "name": "Chronic Pelvic Pain Syndrome Treatment (Men)"}
      ],
      "memberOf": {
        "@type": "GovernmentOrganization",
        "name": "Dubai Health Authority",
        "alternateName": "DHA"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "240",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": [
        {
          "@type": "OfferCatalog",
          "name": "Insurance Partners",
          "itemListElement": [
            {"@type": "Organization", "name": "Daman"},
            {"@type": "Organization", "name": "AXA"},
            {"@type": "Organization", "name": "Allianz"},
            {"@type": "Organization", "name": "Oman Insurance"},
            {"@type": "Organization", "name": "Now Health"},
            {"@type": "Organization", "name": "Bupa"},
            {"@type": "Organization", "name": "MetLife"}
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Service Features",
          "itemListElement": [
            "Female practitioners only",
            "Arabic-speaking",
            "Hijab-friendly"
          ]
        }
      ]
    },
    // Schema 2: MedicalSpecialty
    {
      "@context": "https://schema.org",
      "@type": "MedicalSpecialty",
      "name": "Pelvic Floor Physiotherapy",
      "relevantSpecialty": {
        "@type": "MedicalSpecialty",
        "name": "Women's Health Physiotherapy"
      },
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Pelvic Floor Muscle Training"},
        {"@type": "MedicalProcedure", "name": "Biofeedback Therapy"},
        {"@type": "MedicalProcedure", "name": "Bladder Retraining"},
        {"@type": "MedicalProcedure", "name": "Pelvic Floor Manual Therapy"},
        {"@type": "MedicalProcedure", "name": "Postural Re-education"}
      ]
    },
    // Schema 3: MedicalCondition entities
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Stress Urinary Incontinence",
      "code": {"@type": "MedicalCode", "code": "N39.3", "codingSystem": "ICD-10"},
      "possibleTreatment": [
        {"@type": "MedicalProcedure", "name": "Pelvic Floor Muscle Training"},
        {"@type": "MedicalProcedure", "name": "Biofeedback Therapy"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Urge Urinary Incontinence",
      "code": {"@type": "MedicalCode", "code": "N39.41", "codingSystem": "ICD-10"},
      "possibleTreatment": {"@type": "MedicalProcedure", "name": "Pelvic Floor Physiotherapy"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Pelvic Organ Prolapse",
      "alternateName": ["Cystocele", "Rectocele", "Uterine Prolapse"],
      "code": {"@type": "MedicalCode", "code": "N81", "codingSystem": "ICD-10"},
      "possibleTreatment": {"@type": "MedicalProcedure", "name": "Pelvic Floor Physiotherapy"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Postnatal Pelvic Floor Dysfunction",
      "possibleTreatment": {"@type": "MedicalProcedure", "name": "Pelvic Floor Physiotherapy"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Diastasis Recti",
      "code": {"@type": "MedicalCode", "code": "M62.0", "codingSystem": "ICD-10"},
      "possibleTreatment": {"@type": "MedicalProcedure", "name": "Pelvic Floor Physiotherapy"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Dyspareunia",
      "alternateName": ["Painful Intercourse"],
      "code": {"@type": "MedicalCode", "code": "N94.1", "codingSystem": "ICD-10"},
      "possibleTreatment": {"@type": "MedicalProcedure", "name": "Pelvic Floor Physiotherapy"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Vaginismus",
      "code": {"@type": "MedicalCode", "code": "N94.2", "codingSystem": "ICD-10"},
      "possibleTreatment": {"@type": "MedicalProcedure", "name": "Pelvic Floor Physiotherapy"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Chronic Pelvic Pain Syndrome",
      "code": {"@type": "MedicalCode", "code": "R10.2", "codingSystem": "ICD-10"},
      "possibleTreatment": {"@type": "MedicalProcedure", "name": "Pelvic Floor Physiotherapy"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Pelvic Girdle Pain",
      "possibleTreatment": {"@type": "MedicalProcedure", "name": "Pelvic Floor Physiotherapy"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Post-Prostatectomy Incontinence",
      "possibleTreatment": {"@type": "MedicalProcedure", "name": "Pelvic Floor Physiotherapy"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Chronic Pelvic Pain Syndrome (Men)",
      "possibleTreatment": {"@type": "MedicalProcedure", "name": "Pelvic Floor Physiotherapy"}
    },
    // Schema 3: Service with OfferCatalog
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Pelvic Floor Physiotherapy Services in Dubai",
      "provider": {"@id": "https://vedaracare.ae/conditions/pelvic-floor-physiotherapy-dubai/#pelvic-floor"},
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "serviceType": "Female Pelvic Floor Physiotherapy and Women's Health",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Pelvic Floor Physiotherapy Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Initial Pelvic Floor Assessment",
            "priceCurrency": "AED",
            "price": "650",
            "description": "75-90 minute comprehensive assessment with female DPT-qualified specialist"
          },
          {
            "@type": "Offer",
            "name": "Postnatal Recovery Programme",
            "priceCurrency": "AED",
            "price": "3200",
            "description": "8-session structured programme over 8-12 weeks"
          },
          {
            "@type": "Offer",
            "name": "Stress Incontinence Programme",
            "priceCurrency": "AED",
            "price": "4800",
            "description": "12-session structured programme over 8-12 weeks"
          },
          {
            "@type": "Offer",
            "name": "Prolapse Conservative Management Programme",
            "priceCurrency": "AED",
            "price": "5600",
            "description": "12-16 session programme over 12-24 weeks"
          },
          {
            "@type": "Offer",
            "name": "Postnatal Home Physiotherapy",
            "priceCurrency": "AED",
            "price": "600",
            "description": "Home pelvic floor physiotherapy for early postpartum patients"
          }
        ]
      }
    },
    // Schema 4: BreadcrumbList
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/"},
        {"@type": "ListItem", "position": 3, "name": "Pelvic Floor Physiotherapy in Dubai", "item": currentUrl}
      ]
    },
    // Schema 5: FAQPage
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": pelvicFloorFaqs.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    // Schema 6: MedicalScholarlyArticle
    {
      "@context": "https://schema.org",
      "@type": "MedicalScholarlyArticle",
      "headline": "Pelvic Floor Physiotherapy in Dubai — Complete Guide",
      "image": "https://vedaracare.ae/images/pelvic-floor-physiotherapy-dubai-hero.jpg",
      "datePublished": publishedDate,
      "dateModified": modifiedDate,
      "author": {
        "@type": "Physician",
        "name": "Dr. Rania Al-Hassan"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic"
      },
      "about": [
        {"@type": "MedicalCondition", "name": "Pelvic Floor Dysfunction"},
        {"@type": "MedicalCondition", "name": "Postnatal Pelvic Floor"},
        {"@type": "MedicalCondition", "name": "Urinary Incontinence"}
      ],
      "mainEntityOfPage": currentUrl
    },
    // Schema 7: Physician for each team member
    ...pelvicFloorTeam.members.map(member => ({
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": member.name,
      "url": member.link,
      "image": member.image,
      "gender": "Female",
      "medicalSpecialty": ["Physiotherapy", "Pelvic Floor Physiotherapy", "Women's Health"],
      "hasCredential": ["DPT", "Pelvic Floor Trained", "DHA-Licensed"],
      "worksFor": {"@id": "https://vedaracare.ae/#organization"}
    })),
    // Schema 8: EducationalCredential
    {
      "@context": "https://schema.org",
      "@type": "EducationalCredential",
      "name": "Doctor of Physical Therapy",
      "alternateName": "DPT"
    },
    // Schema 9: AnatomicalStructure
    {
      "@context": "https://schema.org",
      "@type": "AnatomicalStructure",
      "name": "Pelvic Floor Muscles",
      "relatedStructure": [
        {"@type": "AnatomicalStructure", "name": "Pelvic Diaphragm"},
        {"@type": "AnatomicalStructure", "name": "Urethra"},
        {"@type": "AnatomicalStructure", "name": "Bladder"},
        {"@type": "AnatomicalStructure", "name": "Uterus"}
      ]
    },
    // Schema 10: Place entities
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Jumeirah Village Circle",
      "containedIn": {"@type": "City", "name": "Dubai"},
      "containedInPlace": [
        {"@type": "Place", "name": "Circle Mall"},
        {"@type": "Place", "name": "FIVE Jumeirah Village"},
        {"@type": "Place", "name": "JSS Private School"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Sheikh Mohammed Bin Zayed Road"
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Al Khail Road"
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "JVT"
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Al Barsha South"
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Sports City"
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Motor City"
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Arjan"
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Dubai Hills"
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Marina"
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Downtown"
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Palm Jumeirah"
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Mirdif"
    },
    // Schema 11: GovernmentOrganization (DHA)
    {
      "@context": "https://schema.org",
      "@type": "GovernmentOrganization",
      "name": "Dubai Health Authority",
      "alternateName": "DHA"
    },
    // Schema 12: Insurance Organizations
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Daman"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AXA"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Allianz"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Oman Insurance"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Now Health"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Bupa"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "MetLife"
    },
    // Schema 13: Service Features
    {
      "@context": "https://schema.org",
      "@type": "PropertyValue",
      "name": "Service Features",
      "value": [
        "Female practitioners only",
        "Arabic-speaking",
        "Hijab-friendly"
      ]
    },
    // Schema 14: Organization (referenced as parentOrganization)
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://vedaracare.ae/#organization",
      "name": "Vedara Care Polyclinic"
    }
  ];

  return (
    <>
      <Head>
        <title>Pelvic Floor Physiotherapy in Dubai | Female Specialists | Vedara JVC</title>
        <meta name="description" content="Pelvic floor physiotherapy at our JVC clinic, Dubai. Female DPT-qualified specialists exclusively. Postnatal recovery, urinary incontinence, prolapse, sexual function concerns. Cultural and modesty sensitive. External and internal assessment options. Walking distance from Circle Mall." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hreflang="en-AE" href={currentUrl} />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/conditions/pelvic-floor-physiotherapy-dubai/" />
        <link rel="alternate" hreflang="x-default" href={currentUrl} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:title" content="Pelvic Floor Physiotherapy in Dubai — Female Specialists | Vedara Care JVC" />
        <meta property="og:description" content="Female DPT-qualified pelvic floor specialists at our Jumeirah Village Circle clinic. Postnatal recovery, urinary incontinence, pelvic organ prolapse, sexual function concerns. Cultural and modesty considerations respected. External and internal assessment options. Multiple languages including Arabic, Hindi, Urdu." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/pelvic-floor-physiotherapy-dubai.jpg" />
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
        {...pelvicFloorHero}
        patientsTreated={pelvicFloorHero.patientsTreated}
      />

      <AyurvedaIntro 
        {...pelvicFloorIntro}
      />

      <SciaticaTreatment
        data={pelvicFloorSciaticaSection1}
        showBorderLeft={false}
        rightContentStyle="keyStatistics"
        bgColor="bg-[#FAF8F5]"
        showStepNumbers={false}
      />

      <SportsInjuryTypes 
        {...pelvicFloorTypes}
        variant="condition"
        lgColumns={4}
      />


      <PelvicFloorAssessment data={pelvicFloorAssessment} />

       
      <SciaticaTreatment
        data={pelvicFloorSciaticaSection2}
        showBorderLeft={false}
        bgColor="bg-white"
        showStepNumbers={false}
        rightContentStyle="treatmentModalities"
      />

      <PelvicFloorAssessment data={pelvicFloorPostnatalSection} />

      <TreatmentReviews 
        bgColor="bg-white"
        {...pelvicFloorReviews}
        useKneeStyle={true}
      />

      <PhysiotherapyTeam 
        bgColor="bg-[#F8F4EE]"
        cardColor="bg-white"
        {...pelvicFloorTeam}
      />

      <TreatmentMechanism
        bgColor={pelvicFloorMechanism3.bgColor}
        label={pelvicFloorMechanism3.label}
        title={pelvicFloorMechanism3.title}
        description={pelvicFloorMechanism3.description}
        content={pelvicFloorMechanism3.content}
        coordinationApproach={pelvicFloorMechanism3.coordinationApproach}
      />

      <div className={` py-24 px-6 ${pelvicFloorPricing.bgColor}`}>
        <div className="max-w-5xl mx-auto BG">
          <div className="text-center mb-12">
            <div className="text-sm tracking-widest uppercase mb-4" style={{ color: '#C9A84C' }}>
              {pelvicFloorPricing.label}
            </div>
            <h2 className="text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26, 26, 26)' }}>
              {pelvicFloorPricing.title}
            </h2>
          </div>

          <div className="bg-white rounded-lg border border-[#E5DFD3] overflow-hidden mb-12">
            {pelvicFloorPricing.services.map((service, index) => (
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

          <p className="text-center mb-8" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.7', fontSize: '14px' }}>
            {pelvicFloorPricing.insuranceText}
          </p>
        </div>
      </div>

      <FAQ {...pelvicFloorFaqs} />

      <TreatmentLocation 
        {...pelvicFloorLocation}
      />

      <FinalCTA 
        {...pelvicFloorCTA}
      />

      <RelatedPages 
        bgColor={pelvicFloorRelatedPages.bgColor}
        {...pelvicFloorRelatedPages} />
    </>
  );
};

export default PelvicFloorDubai;