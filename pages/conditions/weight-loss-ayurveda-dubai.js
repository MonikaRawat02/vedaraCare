import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import ConditionPhenotypes from '../../components/ayurveda/ConditionPhenotypes';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import TreatmentOils from '../../components/ayurveda/TreatmentOils';
import TreatmentApplications from '../../components/ayurveda/TreatmentApplications';
import TreatmentProtocol from '../../components/ayurveda/TreatmentProtocol';
// import ConditionSymptoms from '../../components/ayurveda/ConditionSymptoms';
import ConditionBoundaries from '../../components/ayurveda/ConditionBoundaries';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';

import {
  weightLossHero,
  weightLossIntro,
  weightLossMechanism1,
  weightLossMechanism2,
  weightLossOils,
  weightLossPhenotypes,
  weightLossApplications,
  weightLossProtocol,
  weightLossSymptoms,
  weightLossBoundaries,
  weightLossReviews,
  weightLossPrograms,
  weightLossFaqs,
  weightLossTreatmentLocation,
  weightLossFinalCTA,
  weightLossRelatedPages
} from '../../data/weightLossData';

const WeightLossAyurvedaDubai = () => {
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Use a stable date for SSR to prevent hydration mismatch
  const currentDate = "2026-06-03T00:00:00.000Z";
  const displayDate = mounted ? new Date().toISOString() : currentDate;

  return (
    <>
      <Head>
        <title>Ayurveda for Weight Loss in Dubai | JVC Clinic | Vedara Care</title>
        <meta name="description" content="DHA-licensed Ayurvedic weight loss treatment at our JVC clinic, Dubai — pattern-specific 4-6 month medical programmes. Honest outcomes, no marketing promises." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ayurveda for Weight Loss in Dubai — Honest, Pattern-Specific Treatment at Our JVC Clinic" />
        <meta property="og:description" content="DHA-licensed Ayurvedic weight loss treatment at our Jumeirah Village Circle clinic. Five metabolic patterns identified. 4-6 month medical programmes. No transformations marketing." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/weight-loss-ayurveda-dubai-hero.webp" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/weight-loss-ayurveda-dubai/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content="2026-05-01" />
        <meta property="article:modified_time" content={displayDate} />
        <meta property="article:author" content="Dr. Sharma Patel" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Canonical & Language */}
        <link rel="canonical" href="https://vedaracare.ae/conditions/weight-loss-ayurveda-dubai/" />
        <link rel="alternate" hrefLang="en-AE" href="https://vedaracare.ae/conditions/weight-loss-ayurveda-dubai/" />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/conditions/weight-loss-ayurveda-dubai/" />
        <link rel="alternate" hrefLang="x-default" href="https://vedaracare.ae/conditions/weight-loss-ayurveda-dubai/" />
      </Head>

      {/* Schema 1 - Medical Condition (Primary) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            "@id": "https://vedaracare.ae/conditions/weight-loss-ayurveda-dubai/#condition",
            "name": "Obesity and Overweight",
            "alternateName": ["Weight Gain", "Sthoulya", "Atisthaulya", "Obesity", "Metabolic Weight Gain"],
            "code": [
              {"@type": "MedicalCode", "code": "E66", "codingSystem": "ICD-10"},
              {"@type": "MedicalCode", "code": "E66.9", "codingSystem": "ICD-10"}
            ],
            "associatedAnatomy": [
              {"@type": "AnatomicalStructure", "name": "Adipose tissue"},
              {"@type": "AnatomicalStructure", "name": "Endocrine system"},
              {"@type": "AnatomicalStructure", "name": "Metabolic system"}
            ],
            "signOrSymptom": [
              {"@type": "MedicalSymptom", "name": "Excess body weight"},
              {"@type": "MedicalSymptom", "name": "Increased visceral fat"},
              {"@type": "MedicalSymptom", "name": "Insulin resistance"},
              {"@type": "MedicalSymptom", "name": "Lipid abnormalities"},
              {"@type": "MedicalSymptom", "name": "Energy fluctuations"},
              {"@type": "MedicalSymptom", "name": "Food cravings"}
            ],
            "possibleTreatment": [
              {"@type": "MedicalProcedure", "name": "Panchakarma", "url": "https://vedaracare.ae/treatments/panchakarma-dubai/"},
              {"@type": "MedicalProcedure", "name": "Udvartana", "url": "https://vedaracare.ae/treatments/udvartana-dubai/"},
              {"@type": "MedicalProcedure", "name": "Virechana"},
              {"@type": "MedicalTherapy", "name": "Ayurvedic herbal medicines"},
              {"@type": "MedicalTherapy", "name": "Dietary regulation"},
              {"@type": "MedicalTherapy", "name": "Lifestyle modification"}
            ],
            "riskFactor": [
              {"@type": "MedicalRiskFactor", "name": "Insulin resistance"},
              {"@type": "MedicalRiskFactor", "name": "Genetic predisposition"},
              {"@type": "MedicalRiskFactor", "name": "Sedentary lifestyle"},
              {"@type": "MedicalRiskFactor", "name": "Chronic stress"},
              {"@type": "MedicalRiskFactor", "name": "Hormonal disorders"},
              {"@type": "MedicalRiskFactor", "name": "Sleep disorders"},
              {"@type": "MedicalRiskFactor", "name": "Postpartum"},
              {"@type": "MedicalRiskFactor", "name": "South Asian or Middle Eastern ethnicity"}
            ]
          })
        }}
      />

      {/* Schema 2 - Five Metabolic Pattern Subtypes */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalCondition",
                "name": "Kapha-Predominant Weight Gain",
                "alternateName": ["Sthoulya", "Slow Metabolism Weight Gain"],
                "signOrSymptom": [
                  {"@type": "MedicalSymptom", "name": "Slow metabolism"},
                  {"@type": "MedicalSymptom", "name": "Water retention"},
                  {"@type": "MedicalSymptom", "name": "Sweet cravings"},
                  {"@type": "MedicalSymptom", "name": "Lethargy"}
                ],
                "possibleTreatment": [
                  {"@type": "MedicalProcedure", "name": "Udvartana", "url": "https://vedaracare.ae/treatments/udvartana-dubai/"},
                  {"@type": "MedicalTherapy", "name": "Triphala Guggulu"},
                  {"@type": "MedicalTherapy", "name": "Trikatu"}
                ]
              },
              {
                "@type": "MedicalCondition",
                "name": "Insulin-Resistance Weight Gain",
                "alternateName": ["Metabolic Syndrome", "Central Obesity Pattern"],
                "signOrSymptom": [
                  {"@type": "MedicalSymptom", "name": "Central abdominal weight gain"},
                  {"@type": "MedicalSymptom", "name": "Fasting glucose elevation"},
                  {"@type": "MedicalSymptom", "name": "Postprandial energy crashes"}
                ],
                "possibleTreatment": [
                  {"@type": "MedicalProcedure", "name": "Virechana-led Panchakarma", "url": "https://vedaracare.ae/treatments/panchakarma-jvc/"},
                  {"@type": "MedicalTherapy", "name": "Guduchi-Methika-Karela combination"}
                ]
              },
              {
                "@type": "MedicalCondition",
                "name": "Stress-Pattern Weight Gain",
                "alternateName": ["Cortisol-Driven Weight Gain", "Comfort Eating Weight Gain"],
                "signOrSymptom": [
                  {"@type": "MedicalSymptom", "name": "Stress eating"},
                  {"@type": "MedicalSymptom", "name": "Disrupted sleep"},
                  {"@type": "MedicalSymptom", "name": "Cravings for sweet/salty foods"}
                ],
                "possibleTreatment": [
                  {"@type": "MedicalProcedure", "name": "Shirodhara", "url": "https://vedaracare.ae/treatments/shirodhara-dubai/"},
                  {"@type": "MedicalTherapy", "name": "Ashwagandha"}
                ]
              },
              {
                "@type": "MedicalCondition",
                "name": "Hormonal Weight Gain",
                "alternateName": ["Postpartum Weight Gain", "Perimenopausal Weight Gain", "PCOS-Related Weight Gain"],
                "signOrSymptom": [
                  {"@type": "MedicalSymptom", "name": "Hormonal fluctuations"},
                  {"@type": "MedicalSymptom", "name": "Weight gain postpartum"},
                  {"@type": "MedicalSymptom", "name": "Irregular periods"}
                ],
                "possibleTreatment": [
                  {"@type": "MedicalTherapy", "name": "Hormone-balancing herbs"},
                  {"@type": "MedicalProcedure", "name": "Sutika Paricharya (for postpartum)", "url": "https://vedaracare.ae/conditions/postnatal-ayurveda-dubai/"}
                ]
              },
              {
                "@type": "MedicalCondition",
                "name": "Vata-Pattern Weight Gain",
                "alternateName": ["Irregular Metabolism Weight Gain"],
                "signOrSymptom": [
                  {"@type": "MedicalSymptom", "name": "Erratic eating patterns"},
                  {"@type": "MedicalSymptom", "name": "Irregular digestion"},
                  {"@type": "MedicalSymptom", "name": "Weight fluctuations"}
                ],
                "possibleTreatment": [
                  {"@type": "MedicalTherapy", "name": "Vata-pacifying diet"},
                  {"@type": "MedicalTherapy", "name": "Digestive herbs like Hingwashtak"}
                ]
              }
            ]
          })
        }}
      />

      {/* Schema 3 - Medical Web Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "@id": "https://vedaracare.ae/conditions/weight-loss-ayurveda-dubai/#webpage",
            "name": "Ayurveda for Weight Loss in Dubai",
            "url": "https://vedaracare.ae/conditions/weight-loss-ayurveda-dubai/",
            "about": {"@id": "https://vedaracare.ae/conditions/weight-loss-ayurveda-dubai/#condition"},
            "audience": {
              "@type": "PatientAudience",
              "geographicArea": {"@type": "Place", "name": "Dubai, United Arab Emirates"}
            },
            "lastReviewed": displayDate,
            "reviewedBy": {
              "@type": "Physician",
              "name": "Dr. Sharma Patel",
              "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
            },
            "primaryImageOfPage": "https://vedaracare.ae/og-images/weight-loss-ayurveda-dubai-hero.webp"
          })
        }}
      />

      {/* Schema 4 - Service with Offer Catalog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Ayurvedic Weight Loss Treatment Programmes",
            "provider": {"@id": "https://vedaracare.ae/#organization"},
            "areaServed": [
              {"@type": "Place", "name": "Jumeirah Village Circle"},
              {"@type": "Place", "name": "Jumeirah Village Triangle"},
              {"@type": "Place", "name": "Al Barsha South"},
              {"@type": "Place", "name": "Dubai Sports City"},
              {"@type": "Place", "name": "Motor City"},
              {"@type": "Place", "name": "Arjan"},
              {"@type": "Place", "name": "Dubai Hills Estate"},
              {"@type": "City", "name": "Dubai"},
              {"@type": "Place", "name": "United Arab Emirates"}
            ],
            "serviceType": "Ayurvedic Treatment for Weight Loss",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Weight Loss Programmes",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "name": "Weight Loss Initial Assessment",
                  "priceCurrency": "AED",
                  "price": "450",
                  "description": "60-75 minute consultation with BAMS physician at JVC clinic, comprehensive assessment, pattern identification, written plan"
                },
                {
                  "@type": "Offer",
                  "name": "Standard 6-Month Weight Loss Programme",
                  "priceCurrency": "AED",
                  "price": "18500",
                  "description": "Six-month structured Ayurvedic weight loss programme with Panchakarma, Udvartana, pattern-specific herbal medicines, dietary and lifestyle protocols"
                },
                {
                  "@type": "Offer",
                  "name": "Extended Integrated Weight Loss Programme",
                  "priceCurrency": "AED",
                  "price": "28500",
                  "description": "9-12 month integrated programme for significant weight loss, post-GLP-1 rebound, or complex metabolic patterns"
                }
              ]
            }
          })
        }}
      />

      {/* Schema 5 - Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Ayurveda for Weight Loss in Dubai — A Complete Clinical Guide",
            "image": "https://vedaracare.ae/og-images/weight-loss-ayurveda-dubai-hero.webp",
            "datePublished": "2026-05-01",
            "dateModified": displayDate,
            "author": {
              "@type": "Physician",
              "name": "Dr. Sharma Patel",
              "url": "https://vedaracare.ae/doctors/dr-sharma-patel/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Vedara Care Polyclinic",
              "logo": {"@type": "ImageObject", "url": "https://vedaracare.ae/logo.png"}
            },
            "mainEntityOfPage": "https://vedaracare.ae/conditions/weight-loss-ayurveda-dubai/"
          })
        }}
      />

      {/* Schema 6 - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://vedaracare.ae/#organization",
            "name": "Vedara Care Polyclinic",
            "url": "https://vedaracare.ae/",
            "logo": "https://vedaracare.ae/logo.png"
          })
        }}
      />

      {/* Schema 7 - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
              {"@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/"},
              {"@type": "ListItem", "position": 3, "name": "Ayurveda for Weight Loss in Dubai", "item": "https://vedaracare.ae/conditions/weight-loss-ayurveda-dubai/"}
            ]
          })
        }}
      />

      {/* Schema 8 - FAQ Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": weightLossFaqs.faqs.map((faq, idx) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Additional Semantic Entities */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://vedaracare.ae/treatments/panchakarma-dubai/#procedure",
            "name": "Panchakarma",
            "url": "https://vedaracare.ae/treatments/panchakarma-dubai/"
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "@id": "https://vedaracare.ae/treatments/udvartana-dubai/#procedure",
            "name": "Udvartana",
            "url": "https://vedaracare.ae/treatments/udvartana-dubai/"
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            "@id": "https://vedaracare.ae/conditions/pcos-ayurveda-dubai/#condition",
            "name": "PCOS",
            "alternateName": ["Polycystic Ovary Syndrome"],
            "url": "https://vedaracare.ae/conditions/pcos-ayurveda-dubai/"
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Sutika Paricharya",
            "url": "https://vedaracare.ae/conditions/postnatal-ayurveda-dubai/"
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            "name": "Vedara Care Polyclinic",
            "url": "https://vedaracare.ae/ayurveda-clinic-jvc/",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dubai",
              "addressRegion": "Jumeirah Village Circle (JVC)",
              "addressCountry": "AE"
            }
          })
        }}
      />

      {/* Section 1: Hero */}
      <AyurvedaHero {...weightLossHero} />

      {/* Section 2: Intro (Answer Capsule) */}
      <AyurvedaIntro {...weightLossIntro} />

      {/* Section 3: Why most approaches fail */}
      <TreatmentMechanism {...weightLossMechanism2} 
      bgColor='bg-[#FAF8F3]'/>

      {/* Section 4: GLP-1 Section */}
      <TreatmentOils {...weightLossOils} />

      {/* Section 5: Five Metabolic Patterns */}
      <section className="px-6 md:px-24 py-24" style={{ backgroundColor: "rgb(247, 243, 236)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="uppercase tracking-wider text-sm mb-4" style={{ color: "rgb(201, 169, 97)" }}>
              {weightLossPhenotypes.label}
            </div>
            <h2 className="text-4xl mb-4" style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 500 }}>
              {weightLossPhenotypes.title}
            </h2>
            <p className="text-base max-w-3xl mx-auto" style={{ color: "rgb(107, 114, 128)" }}>
              {weightLossPhenotypes.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {weightLossPhenotypes.phenotypes.map((phenotype, index) => (
              <div key={index} className="bg-white p-8 rounded-xl">
                <div className="text-4xl mb-4" style={{ fontFamily: "Fraunces, Georgia, serif", color: "rgb(201, 169, 97)" }}>
                  {phenotype.letter}
                </div>
                 <h3 className="text-xl mb-2 [&_a]:text-[#1c1c1a] [&_a]:no-underline hover:[&_a]:text-[#C9A961] hover:[&_a]:underline [&_a]:transition-colors" style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 500 }} dangerouslySetInnerHTML={{ __html: phenotype.title }} />
                <p className="text-sm italic mb-4" style={{ color: "rgb(201, 169, 97)" }} dangerouslySetInnerHTML={{ __html: phenotype.subtitle }} />
                <p className="text-sm mb-4 leading-relaxed" style={{ color: "rgb(107, 114, 128)" }} dangerouslySetInnerHTML={{ __html: phenotype.content }} />
                <div className="text-sm">
                  <span style={{ color: "rgb(201, 169, 97)" }}>Ayurvedic emphasis for this pattern:</span>
                  <span className="ml-2" style={{ color: "rgb(107, 114, 128)" }} dangerouslySetInnerHTML={{ __html: phenotype.ayurvedicEmphasis }}>
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-12 max-w-3xl mx-auto text-sm" style={{ color: "rgb(107, 114, 128)" }}>
            {weightLossPhenotypes.footer}
          </p>
        </div>
      </section>

      {/* Section 6: Four Pillars of Ayurvedic Weight Loss */}
      <section className="bg-white px-6 md:px-24 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="uppercase tracking-wider text-sm mb-4" style={{ color: "rgb(201, 169, 97)" }}>
              {weightLossMechanism1.label}
            </div>
            <h2 className="text-4xl" style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 500 }}>
              {weightLossMechanism1.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {weightLossMechanism1.pillars.map(pillar => {
              const isPanchakarma = pillar.number === "1";
              
              // Strip inner links if the card is already a link to avoid hydration mismatch (nested <a> tags)
              const processedDescription = isPanchakarma 
                ? pillar.description.replace(/<a\b[^>]*>(.*?)<\/a>/gi, '$1')
                : pillar.description;

              const content = (
                <div 
                  className="p-8 rounded-xl border-t-4 cursor-pointer transition-transform hover:scale-[1.02]"
                  style={{ 
                    backgroundColor: "rgb(250, 248, 245)", 
                    borderColor: "rgb(201, 169, 97)" 
                  }}
                >
                  <div 
                    className="text-3xl mb-4" 
                    style={{ fontFamily: "Fraunces, Georgia, serif", color: "rgb(201, 169, 97)" }}
                  >
                    {pillar.number}
                  </div>
                  <h3 className="text-xl mb-4" style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 500 }}>
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgb(107, 114, 128)" }} dangerouslySetInnerHTML={{ __html: processedDescription }}>
                  </p>
                </div>
              );
              
              if (isPanchakarma) {
                return (
                  <Link 
                    key={pillar.number} 
                    href="/treatments/panchakarma-dubai" 
                    className="block"
                  >
                    {content}
                  </Link>
                );
              }
              
              return (
                <React.Fragment key={pillar.number}>
                  {content}
                </React.Fragment>
              );
            })}
          </div>
          
          <p className="text-center mt-12 max-w-3xl mx-auto text-sm" style={{ color: "rgb(107, 114, 128)" }}>
            {weightLossMechanism1.footer}
          </p>
        </div>
      </section>

      {/* Section 7: Treatment Protocol (4-6 Months) */}
      <TreatmentProtocol {...weightLossProtocol} />

      {/* Section 8: Realistic Outcomes */}
      <section className="bg-white px-6 md:px-24 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="uppercase tracking-wider text-sm mb-4" style={{ color: 'rgb(201, 169, 97)' }}>HONEST EXPECTATIONS</div>
            <h2 className="text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500 }}>
              What weight loss is realistic — and why we resist promising specific numbers.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-base">
                We are reluctant to promise specific weight loss numbers, but patients reasonably want to know what to expect. Honest range based on our 500+ weight loss patients at the JVC clinic:
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(45, 95, 79)' }}>6-10 kg</div>
                  <p className="text-sm" style={{ color: 'rgb(107, 114, 128)' }}>
                    Typical for Kapha-predominant pattern over 6 months
                  </p>
                </div>
                
                <div>
                  <div className="text-3xl mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(45, 95, 79)' }}>8-15 kg</div>
                  <p className="text-sm" style={{ color: 'rgb(107, 114, 128)' }}>
                    Typical for insulin-resistance pattern with Panchakarma over 6 months
                  </p>
                </div>
                
                <div>
                  <div className="text-3xl mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(45, 95, 79)' }}>3-7 kg</div>
                  <p className="text-sm" style={{ color: 'rgb(107, 114, 128)' }}>
                    Typical for stress-pattern weight loss over 4 months
                  </p>
                </div>
                
                <div>
                  <div className="text-3xl mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(45, 95, 79)' }}>5-12 kg</div>
                  <p className="text-sm" style={{ color: 'rgb(107, 114, 128)' }}>
                    Typical for PCOS-related weight loss over 6 months
                  </p>
                </div>
              </div>
              
              <p className="text-base" style={{ color: 'rgb(107, 114, 128)' }}>These are honest ranges. Some patients exceed the upper end (rare but happens). Some land at the lower end (often patients with shorter programmes or specific contraindications). The patients who lose the least are usually those who do not implement the dietary and lifestyle protocols — the herbs and Panchakarma alone produce limited results.</p>

              
              <p className="text-base font-medium">
                What we measure beyond weight: body composition changes (often more striking than scale changes), insulin and HbA1c improvements, lipid panel changes, blood pressure normalisation, energy levels, sleep quality, food relationship changes, and sustained behaviour patterns. These are the markers that predict whether the weight stays off.
              </p>
            </div>
            
            <div>
              <img 
                src={weightLossSymptoms.image} 
                alt={weightLossSymptoms.alt} 
                className="rounded-xl w-full h-auto object-cover shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Condition Boundaries */}
      <ConditionBoundaries {...weightLossBoundaries} />

      {/* Section 10: Treatment Reviews */}
      <TreatmentReviews {...weightLossReviews} />

      {/* Section 11: Treatment Programs */}
      <TreatmentPrograms {...weightLossPrograms} />

      {/* Section 12: FAQ */}
      <FAQ {...weightLossFaqs} />

      {/* Section 13: Treatment Location */}
      <TreatmentLocation {...weightLossTreatmentLocation} />

      {/* Section 14: Final CTA */}
      <FinalCTA {...weightLossFinalCTA} />

      {/* Section 15: Related Pages */}
      <RelatedPages {...weightLossRelatedPages} />
    </>
  );
};

export default WeightLossAyurvedaDubai;
