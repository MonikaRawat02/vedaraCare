import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import FrozenShoulderPhases from '../../components/ayurveda/FrozenShoulderPhases';
import KneeTreatmentApproach from '../../components/ayurveda/KneeTreatmentApproach';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
// import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism'
import FAQ from '../../components/home/FAQ';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import TreatmentLocation   from '../../components/ayurveda/TreatmentLocationCustom';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  frozenShoulderHero,
  frozenShoulderIntro,
  frozenShoulderMechanism1,
  frozenShoulderOutcomes,
  frozenShoulderPhases,
  frozenShoulderTreatmentMechanism,
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
      "telephone": "+971 4 567 8900",
      "priceRange": "AED 350 - AED 18,000",
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
        {"@type": "MedicalProcedure", "name": "Hydrodilatation Coordination"}
      ],
      "memberOf": {
        "@type": "GovernmentOrganization",
        "name": "Dubai Health Authority"
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
          "@type": "MedicalCondition",
          "name": "Adhesive Capsulitis (Frozen Shoulder)",
          "alternateName": ["Frozen Shoulder", "Adhesive Capsulitis", "Shoulder Capsulitis"],
          "code": {"@type": "MedicalCode", "code": "M75.0", "codingSystem": "ICD-10"},
          "possibleTreatment": [
            {"@type": "MedicalProcedure", "name": "Phase-Specific Physiotherapy"},
            {"@type": "MedicalProcedure", "name": "Joint Mobilisation"},
            {"@type": "MedicalProcedure", "name": "Capsular Stretching"},
            {"@type": "MedicalProcedure", "name": "Hydrodilatation"}
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
      "image": "https://vedaracare.ae/og-images/frozen-shoulder-dubai.jpg",
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
    <section style={{ background: 'rgb(248, 244, 238)', padding: '96px 24px' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#C9A84C' }}>
            <span className="inline-block w-6 h-px mr-2 align-middle" style={{ background: '#C9A84C' }}></span>
            {frozenShoulderInjectionsSurgery.label}
            <span className="inline-block w-6 h-px ml-2 align-middle" style={{ background: '#C9A84C' }}></span>
          </p>
          <h2 className="text-4xl" style={{ fontFamily: 'Fraunces, serif', color: 'rgb(28, 25, 23)' }}>
            {frozenShoulderInjectionsSurgery.title}
          </h2>
          <p className="text-base mt-4 max-w-2xl mx-auto" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.7' }}>
            {frozenShoulderInjectionsSurgery.description}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {frozenShoulderInjectionsSurgery.items.map((item, index) => (
              <div key={index}>
                <h3 className="text-xl font-medium mb-3" style={{ fontFamily: 'Fraunces, serif', color: 'rgb(28, 25, 23)' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.8' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-white p-8 rounded-lg border border-[#E5DFD3]">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-[#FAF8F5] rounded-lg">
                <div className="w-8 h-8 rounded-full bg-[#C9A84C] flex items-center justify-center text-white text-xs font-bold">1</div>
                <div>
                  <p className="text-xs font-bold" style={{ color: 'rgb(28, 25, 23)' }}>Conservative physiotherapy</p>
                  <p className="text-xs" style={{ color: 'rgb(107, 107, 107)' }}>First line for nearly all patients</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4">
                <div className="w-8 h-8 rounded-full bg-[#E5DFD3] flex items-center justify-center text-[#888] text-xs font-bold">2</div>
                <div>
                  <p className="text-xs font-bold" style={{ color: 'rgb(28, 25, 23)' }}>Corticosteroid injection</p>
                  <p className="text-xs" style={{ color: 'rgb(107, 107, 107)' }}>Optional addition during freezing phase for pain control</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4">
                <div className="w-8 h-8 rounded-full bg-[#E5DFD3] flex items-center justify-center text-[#888] text-xs font-bold">3</div>
                <div>
                  <p className="text-xs font-bold" style={{ color: 'rgb(28, 25, 23)' }}>Hydrodilatation</p>
                  <p className="text-xs" style={{ color: 'rgb(107, 107, 107)' }}>Optional addition during frozen phase if progress is slow</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4">
                <div className="w-8 h-8 rounded-full bg-[#E5DFD3] flex items-center justify-center text-[#888] text-xs font-bold">4</div>
                <div>
                  <p className="text-xs font-bold" style={{ color: 'rgb(28, 25, 23)' }}>Manipulation under anaesthesia</p>
                  <p className="text-xs" style={{ color: 'rgb(107, 107, 107)' }}>Rare, after 9-12 months if conservative care inadequate</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4">
                <div className="w-8 h-8 rounded-full bg-[#E5DFD3] flex items-center justify-center text-[#888] text-xs font-bold">5</div>
                <div>
                  <p className="text-xs font-bold" style={{ color: 'rgb(28, 25, 23)' }}>Surgical capsular release</p>
                  <p className="text-xs" style={{ color: 'rgb(107, 107, 107)' }}>Very rare, last resort after 12+ months</p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-xs" style={{ color: '#C9A84C', fontStyle: 'italic' }}>Most patients only need step 1.</p>
              <a href={frozenShoulderCTA.buttonLink} className="inline-block mt-4 px-8 py-3 bg-[#1C3D2E] text-white text-xs font-bold tracking-widest uppercase rounded hover:bg-[#2a5a43] transition-colors">
                Book Assessment to Discuss Options
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Timeline component
  const TimelineSection = () => (
    <section style={{ background: 'white', padding: '96px 24px' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#C9A84C' }}>
            <span className="inline-block w-6 h-px mr-2 align-middle" style={{ background: '#C9A84C' }}></span>
            {frozenShoulderOutcomes.label}
            <span className="inline-block w-6 h-px ml-2 align-middle" style={{ background: '#C9A84C' }}></span>
          </p>
          <h2 className="text-4xl" style={{ fontFamily: 'Fraunces, serif', color: 'rgb(28, 25, 23)' }}>
            {frozenShoulderOutcomes.title}
          </h2>
          <p className="text-base mt-4 max-w-2xl mx-auto" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.7' }}>
            {frozenShoulderOutcomes.description}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#E5DFD3]"></div>
            <div className="space-y-10">
              {frozenShoulderOutcomes.timeline.map((item, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: item.color }}></div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: '#C9A84C' }}>{item.phase}</p>
                    <p className="text-sm" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.6' }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {frozenShoulderOutcomes.items.map((item, index) => (
              <div key={index} className="p-6 rounded-lg border border-[#E5DFD3] bg-white">
                <h3 className="text-lg font-medium mb-4" style={{ fontFamily: 'Fraunces, serif', color: 'rgb(28, 25, 23)' }}>{item.title}</h3>
                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: '#C9A84C' }}></span>
                      <span style={{ color: 'rgb(107, 107, 107)' }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="p-6 rounded-lg bg-[#FAF8F5] border border-[#E5DFD3]">
              <p className="text-sm" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.8' }}>
                <strong>Patient frustration is normal — and expected</strong><br/>
                Frozen shoulder recovery often feels frustrating. Progress is gradual rather than dramatic. The patients who do best understand the phase-based nature of the condition and trust the process. It is genuinely a marathon, not a sprint — but it is a marathon with a known finish line.
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
        <meta property="og:image" content="https://vedaracare.ae/og-images/frozen-shoulder-dubai.jpg" />
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
      
      <KneeTreatmentApproach
        {...frozenShoulderApproach}
      />
      
      <TimelineSection />
      
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
      />
      
      <PhysiotherapyTeam 
        bgColor="bg-[#F8F4EE]"
        cardColor="bg-white"
        {...frozenShoulderTeam} 
      />
      
      <div className={`bg-white py-24 px-6 ${frozenShoulderPricing.bgColor}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm tracking-widest uppercase mb-4" style={{ color: '#C9A84C' }}>
              {frozenShoulderPricing.label}
            </div>
            <h2 className="text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26, 26, 26)' }}>
              {frozenShoulderPricing.title}
            </h2>
          </div>

          <div className="bg-white rounded-lg border border-[#E5DFD3] overflow-hidden mb-12">
            {frozenShoulderPricing.services.map((service, index) => (
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
            {frozenShoulderPricing.insuranceText}
          </p>
        </div>
      </div>

      <FAQ {...frozenShoulderFaqs} />

      <TreatmentLocation
        bgColor={frozenShoulderLocation.bgColor}
        label={frozenShoulderLocation.label}
        title={frozenShoulderLocation.title}
        address1="Vedara Care Polyclinic"
        address2={frozenShoulderLocation.address}
        clinicHours={[
          { label: "Monday - Saturday", time: "9:00 AM – 9:00 PM" },
          { label: "Sunday", time: "10:00 AM – 7:00 PM" }
        ]}
        contactPhone={frozenShoulderLocation.phone}
        description={frozenShoulderLocation.description}
        buttonText={frozenShoulderLocation.buttonText}
        buttonHref={frozenShoulderLocation.buttonLink}
        mapEmbed={frozenShoulderLocation.mapEmbed}
        locationMarkers={[
          { name: "Circle Mall", distance: "5 min walk" },
          { name: "FIVE JV Hotel", distance: "3 min drive" },
          { name: "JSS School", distance: "5 min drive" }
        ]} 
      />

      <FinalCTA 
        {...frozenShoulderCTA}
      />

      <RelatedPages {...frozenShoulderRelatedPages} />
    </>
  );
};

export default FrozenShoulderDubai;