import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import PhysiotherapyMechanism from '../../components/ayurveda/PhysiotherapyMechanism';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import { 
  HomePhysiotherapy, 
  TransparentPricing, 
  PostSurgeryTeam, 
  InsuranceCoverage, 
  WhereWeWork 
} from '../../components/ayurveda/PostSurgeryComponents';
import {
  postSurgeryRehabHero,
  postSurgeryRehabIntro,
  postSurgeryRehabMechanism,
  postSurgeryRehabFinalCTA,
  postSurgeryRehabRelatedPages,
  postSurgeryRehabReviews,
  homePhysiotherapyData,
  transparentPricingData,
  postSurgeryTeamData,
  insuranceCoverageData,
  whereWeWorkData
} from '../../data/postSurgeryRehabData';

const PostSurgeryRehabDubai = () => {
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy", "MedicalClinic"],
      "@id": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/#physiotherapy",
      "name": "Vedara Care Post-Surgery Rehabilitation",
      "alternateName": ["Vedara Care Post-Op Rehab Dubai", "Vedara Physiotherapy"],
      "url": "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/",
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "DHA-licensed post-surgery rehabilitation at Vedara Care Polyclinic, JVC, Dubai. Surgeon-coordinated, procedure-specific rehabilitation for TKR, THR, ACL, spinal surgery, and more. Home physiotherapy available.",
      "telephone": "+971 4 XXX XXXX",
      "priceRange": "AED 350 - AED 8,000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jumeirah Village Circle",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.0607",
        "longitude": "55.2078"
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
          "opens": "10:00",
          "closes": "16:00"
        }
      ],
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "Place", "name": "Dubai Marina"},
        {"@type": "Place", "name": "Downtown Dubai"},
        {"@type": "Place", "name": "Palm Jumeirah"}
      ],
      "medicalSpecialty": [
        "Physiotherapy",
        "Physical Therapy",
        "Rehabilitation Medicine",
        "Orthopaedic Surgery"
      ],
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Post-surgical Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "ACL Reconstruction Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Joint Replacement Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Spinal Surgery Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Home Physiotherapy"}
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Post-Surgery Rehabilitation Dubai | Surgeon-Coordinated | Vedara Care</title>
        <meta name="description" content="Procedure-specific post-surgery rehabilitation in Dubai. Surgeon-coordinated protocols for ACL, knee/hip replacement, and spinal surgery. Home visits available." />
        <link rel="canonical" href="https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>

      <main>
        {/* 1. Hero */}
        <AyurvedaHero {...postSurgeryRehabHero} />
        
        {/* 2. Intro */}
        <AyurvedaIntro {...postSurgeryRehabIntro} />

        {/* 3. Mechanism (Surgeon Coordination) */}
        <PhysiotherapyMechanism {...postSurgeryRehabMechanism} />

        {/* 6. Home Physiotherapy */}
        <HomePhysiotherapy data={homePhysiotherapyData} />

        {/* 7. Transparent Pricing */}
        <TransparentPricing data={transparentPricingData} />

         {/* 13. Patient Reviews */}
        <TreatmentReviews {...postSurgeryRehabReviews} />

        {/* 9. The Team */}
        <PostSurgeryTeam data={postSurgeryTeamData} />

        {/* 10. Insurance Coverage */}
        <InsuranceCoverage data={insuranceCoverageData} />

        {/* 11. Where We Work */}
        <WhereWeWork data={whereWeWorkData} />

         {/* 8. Final CTA (Ready to start?) */}
        <FinalCTA {...postSurgeryRehabFinalCTA} />

        {/* 12. Related Pages */}
        <RelatedPages {...postSurgeryRehabRelatedPages} />

      </main>
    </>
  );
};

export default PostSurgeryRehabDubai;
