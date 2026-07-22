import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import { SciaticaTreatment } from '../../components/ayurveda/SciaticaSections';
import PostnatalComponents from '../../components/ayurveda/PostnatalComponents';
import ManualTherapySession, { ManualTherapyTechniques, ManualTherapyPricing } from '../../components/ayurveda/ManualTherapySession';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';

import {
  manualTherapyHero,
  manualTherapyIntro,
  manualTherapyWhatIs,
  manualTherapyConditions,
  manualTherapySession,
  manualTherapyTeam,
  manualTherapyReviews,
  manualTherapyFaqs,
  manualTherapyLocation,
  manualTherapyFinalCTA,
  manualTherapyRelatedPages,
  manualTherapyTechniques,
  manualTherapyPricing
} from '../../data/manualTherapyDubaiData';

const ManualTherapyDubai = () => {
  const currentDate = new Date().toISOString();

  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy"],
      "@id": "https://vedaracare.ae/treatments/manual-therapy-dubai/#manual-therapy",
      "name": "Vedara Care Manual Therapy",
      "alternateName": ["Vedara Manual Therapy Dubai", "Vedara Manual Physiotherapy JVC"],
      "url": "https://vedaracare.ae/treatments/manual-therapy-dubai/",
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "Specialist manual therapy at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. Delivered by DPT-qualified physiotherapists with specific manual therapy training including Maitland mobilisation, Mulligan mobilisation with movement, Kaltenborn technique, McKenzie method, myofascial release, soft tissue mobilisation, neural mobilisation, and selectively-applied spinal manipulation. Different from chiropractic and massage therapy — physiotherapist-delivered with evidence-based clinical reasoning.",
      "telephone": "+971 55 586 7466",
      "priceRange": "AED 300 - AED 10,000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4, Jumeirah Village Circle",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.0683",
        "longitude": "55.2072"
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
        "Manual Therapy",
        "Joint Mobilisation",
        "Spinal Mobilisation"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Manual Therapy"},
        {"@type": "MedicalProcedure", "name": "Maitland Joint Mobilisation"},
        {"@type": "MedicalProcedure", "name": "Mulligan Mobilisation with Movement"},
        {"@type": "MedicalProcedure", "name": "Kaltenborn Technique"},
        {"@type": "MedicalProcedure", "name": "McKenzie Method"},
        {"@type": "MedicalProcedure", "name": "Myofascial Release"},
        {"@type": "MedicalProcedure", "name": "Soft Tissue Mobilisation"},
        {"@type": "MedicalProcedure", "name": "Neural Mobilisation"},
        {"@type": "MedicalProcedure", "name": "Spinal Manipulation"}
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
      "@type": "MedicalProcedure",
      "name": "Manual Therapy",
      "alternateName": ["Manual Physiotherapy", "Hands-On Physiotherapy", "Manual Physical Therapy"],
      "description": "Hands-on physiotherapy treatment encompassing joint mobilisation (Maitland, Kaltenborn), Mulligan mobilisation with movement, McKenzie method, myofascial release, soft tissue mobilisation, neural mobilisation, and selectively-applied spinal manipulation. Performed by DPT-qualified physiotherapists with specific manual therapy training.",
      "procedureType": "Therapeutic",
      "bodyLocation": ["Spine", "Shoulder", "Hip", "Knee", "Ankle", "Elbow", "Wrist", "TMJ"],
      "preparation": "Comprehensive initial assessment and informed consent required.",
      "followup": "Mild post-treatment soreness 24-48 hours possible. Continue with prescribed home exercises."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Manual Therapy Services in Dubai",
      "provider": {"@id": "https://vedaracare.ae/treatments/manual-therapy-dubai/#manual-therapy"},
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "serviceType": "Manual Therapy and Hands-On Physiotherapy",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Manual Therapy Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Initial Assessment with Manual Therapy",
            "priceCurrency": "AED",
            "price": "380",
            "description": "60-75 minute comprehensive assessment with manual therapy specialist"
          },
          {
            "@type": "Offer",
            "name": "Standard Manual Therapy Session",
            "priceCurrency": "AED",
            "price": "350",
            "description": "45-60 minute follow-up manual therapy session"
          },
          {
            "@type": "Offer",
            "name": "Chronic Back Pain Programme",
            "priceCurrency": "AED",
            "price": "2800",
            "description": "8-10 session structured manual therapy programme integrated with exercise"
          },
          {
            "@type": "Offer",
            "name": "Frozen Shoulder Programme",
            "priceCurrency": "AED",
            "price": "4200",
            "description": "12-16 session structured manual therapy programme for frozen shoulder"
          },
          {
            "@type": "Offer",
            "name": "Sciatica McKenzie Programme",
            "priceCurrency": "AED",
            "price": "2400",
            "description": "6-8 session McKenzie method programme for sciatica with directional preference"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://vedaracare.ae/treatments/"},
        {"@type": "ListItem", "position": 3, "name": "Manual Therapy in Dubai", "item": "https://vedaracare.ae/treatments/manual-therapy-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": manualTherapyFaqs.faqs.map(faq => ({
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
      "headline": "Manual Therapy in Dubai — Complete Treatment Guide",
      "image": "https://vedaracare.ae/og-images/manual-therapy-dubai.jpg",
      "datePublished": currentDate,
      "dateModified": currentDate,
      "author": {
        "@type": "Physician",
        "name": "Vedara Care Manual Therapy Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic"
      },
      "about": [
        {"@type": "MedicalProcedure", "name": "Manual Therapy"},
        {"@type": "MedicalProcedure", "name": "Joint Mobilisation"}
      ],
      "mainEntityOfPage": "https://vedaracare.ae/treatments/manual-therapy-dubai/"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://vedaracare.ae/#organization",
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": "https://vedaracare.ae/logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Manual Therapy in Dubai | Certified Specialists | Vedara JVC</title>
        <meta name="description" content="Specialist manual therapy at our JVC clinic, Dubai. DPT-qualified physiotherapists with Maitland, Mulligan, Kaltenborn, McKenzie certifications. Joint mobilisation, soft tissue work, neural mobilisation. Different from chiropractic and massage. Walking distance from Circle Mall." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:title" content="Manual Therapy in Dubai — Certified Specialists | Vedara JVC" />
        <meta property="og:description" content="DPT-qualified manual therapy specialists at our Jumeirah Village Circle clinic. Maitland mobilisation, Mulligan mobilisation with movement, Kaltenborn technique, McKenzie method, myofascial release, neural mobilisation, and spinal manipulation. Different from chiropractic and massage. Evidence-based hands-on physiotherapy." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/manual-therapy-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/treatments/manual-therapy-dubai/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://vedaracare.ae/treatments/manual-therapy-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/treatments/manual-therapy-dubai/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/treatments/manual-therapy-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/treatments/manual-therapy-dubai/" />

        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>
      <main>
        <AyurvedaHero {...manualTherapyHero} />
        <AyurvedaIntro {...manualTherapyIntro} />
        <SciaticaTreatment 
          data={manualTherapyWhatIs.data} 
          bgColor={manualTherapyWhatIs.bgColor}
          showBorderLeft={false}
          rightContentStyle="tagsBox"/>

         <PostnatalComponents 
          bgColor={manualTherapyConditions.bgColor}
          cardBg={manualTherapyConditions.cardBg}
          label={manualTherapyConditions.label}
          title={manualTherapyConditions.title}
          description={manualTherapyConditions.description}
          items={manualTherapyConditions.items}
          footerNote={manualTherapyConditions.footerNote}
          row1Columns="lg:grid-cols-4"
          row2Columns="lg:grid-cols-4"/>

        <ManualTherapySession 
          bgColor={manualTherapySession.bgColor}
          label={manualTherapySession.label}
          title={manualTherapySession.title}
          subtitle={manualTherapySession.subtitle}
          sections={manualTherapySession.sections}
          safetyCard={manualTherapySession.safetyCard}/>

        <ManualTherapyTechniques 
          bgColor={manualTherapyTechniques.bgColor}
          label={manualTherapyTechniques.label}
          title={manualTherapyTechniques.title}
          subtitle={manualTherapyTechniques.subtitle}
          techniques={manualTherapyTechniques.techniques}
          footerNote={manualTherapyTechniques.footerNote}/>

        <PhysiotherapyTeam 
          label={manualTherapyTeam.label}
          title={manualTherapyTeam.title}
          description={manualTherapyTeam.description}
          members={manualTherapyTeam.members}
          bgColor={manualTherapyTeam.bgColor}
        />

        <TreatmentReviews {...manualTherapyReviews} />
        <ManualTherapyPricing 
          bgColor={manualTherapyPricing.bgColor}
          label={manualTherapyPricing.label}
          title={manualTherapyPricing.title}
          pricingItems={manualTherapyPricing.pricingItems}
          insuranceNote={manualTherapyPricing.insuranceNote}
          insurers={manualTherapyPricing.insurers}/>
        <FAQ {...manualTherapyFaqs} />
        <TreatmentLocation {...manualTherapyLocation} />
        <FinalCTA {...manualTherapyFinalCTA} />
        <RelatedPages {...manualTherapyRelatedPages} />
      </main>
    </>
  );
};

export default ManualTherapyDubai;
