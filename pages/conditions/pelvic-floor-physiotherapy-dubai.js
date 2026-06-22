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
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy"],
      "@id": "https://vedaracare.ae/conditions/pelvic-floor-physiotherapy-dubai/#pelvic-floor",
      "name": "Vedara Care Pelvic Floor Physiotherapy",
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
        "Women's Health Physiotherapy",
        "Postnatal Physiotherapy"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Pelvic Floor Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Postnatal Pelvic Floor Recovery"},
        {"@type": "MedicalProcedure", "name": "Stress Urinary Incontinence Treatment"},
        {"@type": "MedicalProcedure", "name": "Urge Urinary Incontinence Treatment"},
        {"@type": "MedicalProcedure", "name": "Pelvic Organ Prolapse Conservative Management"},
        {"@type": "MedicalProcedure", "name": "Diastasis Recti Treatment"},
        {"@type": "MedicalProcedure", "name": "Dyspareunia Treatment"},
        {"@type": "MedicalProcedure", "name": "Vaginismus Treatment"},
        {"@type": "MedicalProcedure", "name": "Chronic Pelvic Pain Treatment"},
        {"@type": "MedicalProcedure", "name": "Pelvic Girdle Pain Treatment"},
        {"@type": "MedicalProcedure", "name": "Biofeedback Therapy"},
        {"@type": "MedicalProcedure", "name": "Men's Pelvic Floor Treatment"}
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Dubai Health Authority"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "240",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/"},
        {"@type": "ListItem", "position": 3, "name": "Pelvic Floor Physiotherapy in Dubai", "item": currentUrl}
      ]
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
        bgColor="bg-white"
        variant="condition"
        lgColumns={4}
      />


 <PelvicFloorAssessment data=
{pelvicFloorAssessment} />

       
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
