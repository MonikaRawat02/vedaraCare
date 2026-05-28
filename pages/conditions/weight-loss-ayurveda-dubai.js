import Head from 'next/head';
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
  const currentDate = new Date().toISOString();

  return (
    <>
      <Head>
        <title>Ayurveda for Weight Loss in Dubai | JVC Clinic | Vedara Care</title>
        <meta name="description" content="DHA-licensed Ayurvedic weight loss treatment at our JVC clinic, Dubai — pattern-specific 4-6 month medical programmes. Honest outcomes, no marketing promises." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ayurveda for Weight Loss in Dubai — Honest, Pattern-Specific Treatment at Our JVC Clinic" />
        <meta property="og:description" content="DHA-licensed Ayurvedic weight loss treatment at our Jumeirah Village Circle clinic. Five metabolic patterns identified. 4-6 month medical programmes. No transformations marketing." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/weight-loss-ayurveda-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/weight-loss-ayurveda-dubai/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content="2026-05-01" />
        <meta property="article:modified_time" content={currentDate} />
        <meta property="article:author" content="Dr. [Lead Ayurvedic Physician]" />
        
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
                  {"@type": "MedicalProcedure", "name": "Sutika Paricharya (for postpartum)"}
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
            "lastReviewed": currentDate,
            "reviewedBy": {
              "@type": "Physician",
              "name": "Dr. [Lead Ayurvedic Physician]",
              "hasCredential": "DHA-Licensed BAMS, MD (Ayurveda)"
            },
            "primaryImageOfPage": "https://vedaracare.ae/images/weight-loss-ayurveda-dubai-hero.jpg"
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
                  "price": "350",
                  "description": "60-75 minute consultation with BAMS physician at JVC clinic, comprehensive assessment, pattern identification, written plan"
                },
                {
                  "@type": "Offer",
                  "name": "Standard 6-Month Weight Loss Programme",
                  "priceCurrency": "AED",
                  "price": "9500",
                  "description": "Six-month structured Ayurvedic weight loss treatment with Panchakarma, Udvartana, pattern-specific herbal medicines, dietary and lifestyle protocols"
                },
                {
                  "@type": "Offer",
                  "name": "Extended Integrated Weight Loss Programme",
                  "priceCurrency": "AED",
                  "price": "14500",
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
            "image": "https://vedaracare.ae/images/weight-loss-ayurveda-dubai-hero.jpg",
            "datePublished": "2026-05-01",
            "dateModified": currentDate,
            "author": {
              "@type": "Physician",
              "name": "Dr. [Lead Ayurvedic Physician]",
              "url": "https://vedaracare.ae/doctors/dr-[name]-ayurveda/"
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

      {/* Section 1: Hero */}
      <AyurvedaHero {...weightLossHero} />

      {/* Section 2: Intro (Answer Capsule) */}
      <AyurvedaIntro {...weightLossIntro} />

      {/* Section 3: Why most approaches fail */}
      <TreatmentMechanism {...weightLossMechanism2} />

      {/* Section 4: GLP-1 Section */}
      <TreatmentOils {...weightLossOils} />

      {/* Section 5: Five Metabolic Patterns */}
      <section className="px-6 md:px-24 py-24" style={{ backgroundColor: "rgb(247, 243, 236)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="uppercase tracking-wider text-sm mb-4" style={{ color: "rgb(201, 169, 97)" }}>
              {weightLossPhenotypes.label}
            </div>
            <h2 className="text-4xl mb-4" style={{ fontFamily: "Georgia, serif", fontWeight: 500 }}>
              {weightLossPhenotypes.title}
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "rgb(107, 114, 128)" }}>
              {weightLossPhenotypes.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {weightLossPhenotypes.phenotypes.slice(0, 3).map((phenotype, index) => (
              <div key={index} className="bg-white p-8 rounded-xl">
                <div className="text-6xl mb-4" style={{ fontFamily: "Georgia, serif", color: "rgb(201, 169, 97)" }}>
                  {phenotype.letter}
                </div>
                <h3 className="text-xl mb-2" style={{ fontFamily: "Georgia, serif", fontWeight: 500 }}>
                  {phenotype.title}
                </h3>
                <p className="text-sm italic mb-4" style={{ color: "rgb(201, 169, 97)" }}>
                  {phenotype.subtitle}
                </p>
                <p className="mb-4 leading-relaxed" style={{ color: "rgb(107, 114, 128)" }}>
                  {phenotype.content}
                </p>
                <div className="text-sm">
                  <span style={{ color: "rgb(201, 169, 97)" }}>Ayurvedic emphasis for this pattern:</span>
                  <span className="ml-2" style={{ color: "rgb(107, 114, 128)" }}>
                    {phenotype.ayurvedicEmphasis}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {weightLossPhenotypes.phenotypes.slice(3).map((phenotype, index) => (
              <div key={index + 3} className="bg-white p-8 rounded-xl">
                <div className="text-6xl mb-4" style={{ fontFamily: "Georgia, serif", color: "rgb(201, 169, 97)" }}>
                  {phenotype.letter}
                </div>
                <h3 className="text-xl mb-2" style={{ fontFamily: "Georgia, serif", fontWeight: 500 }}>
                  {phenotype.title}
                </h3>
                <p className="text-sm italic mb-4" style={{ color: "rgb(201, 169, 97)" }}>
                  {phenotype.subtitle}
                </p>
                <p className="mb-4 leading-relaxed" style={{ color: "rgb(107, 114, 128)" }}>
                  {phenotype.content}
                </p>
                <div className="text-sm">
                  <span style={{ color: "rgb(201, 169, 97)" }}>Ayurvedic emphasis for this pattern:</span>
                  <span className="ml-2" style={{ color: "rgb(107, 114, 128)" }}>
                    {phenotype.ayurvedicEmphasis}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-12 max-w-3xl mx-auto" style={{ color: "rgb(107, 114, 128)" }}>
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
            <h2 className="text-4xl" style={{ fontFamily: "Georgia, serif", fontWeight: 500 }}>
              {weightLossMechanism1.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {weightLossMechanism1.pillars.map(pillar => (
              <div 
                key={pillar.number} 
                className="p-8 rounded-xl border-t-4"
                style={{ 
                  backgroundColor: "rgb(250, 248, 245)", 
                  borderColor: "rgb(201, 169, 97)" 
                }}
              >
                <div 
                  className="text-4xl mb-4" 
                  style={{ fontFamily: "Georgia, serif", color: "rgb(201, 169, 97)" }}
                >
                  {pillar.number}
                </div>
                <h3 className="text-xl mb-4" style={{ fontFamily: "Georgia, serif", fontWeight: 500 }}>
                  {pillar.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "rgb(107, 114, 128)" }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-12 max-w-3xl mx-auto" style={{ color: "rgb(107, 114, 128)" }}>
            {weightLossMechanism1.footer}
          </p>
        </div>
      </section>

      {/* Section 7: Treatment Protocol (4-6 Months) */}
      <section className="px-6 md:px-24 py-24" style={{ backgroundColor: 'rgb(247, 243, 236)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="uppercase tracking-wider text-sm mb-4" style={{ color: 'rgb(201, 169, 97)' }}>WHAT TO EXPECT</div>
            <h2 className="text-4xl mb-4" style={{ fontFamily: 'Georgia, serif', fontWeight: 500 }}>
              What four to six months of Ayurvedic weight loss treatment at our JVC clinic actually looks like.
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'rgb(107, 114, 128)' }}>
              A representative protocol for the most common pattern (Kapha-predominant with insulin-resistance component). Your specific plan varies based on pattern, severity, and life context.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl">
              <div className="mb-4">
                <div className="text-sm uppercase tracking-wider mb-2" style={{ color: 'rgb(201, 169, 97)' }}>Month 1</div>
                <h3 className="text-2xl" style={{ fontFamily: 'Georgia, serif', fontWeight: 500 }}>Assessment & Foundation</h3>
              </div>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>60-minute consultation with BAMS-qualified physician at our JVC clinic</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Comprehensive history-taking, physical examination, baseline measurements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Review of existing diagnoses, blood work, current medications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Lab orders if needed (fasting insulin, HbA1c, lipid panel, thyroid, hormones)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Pulse diagnosis, dosha assessment, pattern classification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Initial herbal medicine protocol begins</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Dietary plan introduced gradually</span>
                </li>
              </ul>
              
              <div className="pt-4 border-t" style={{ borderColor: 'rgb(247, 243, 236)' }}>
                <span className="font-medium">Expected by end of Month 1: </span>
                <span style={{ color: 'rgb(107, 114, 128)' }}>
                  Clear pattern diagnosis, baseline established, treatment plan signed off, initial 1-3 kg often lost from water retention and dietary changes
                </span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl">
              <div className="mb-4">
                <div className="text-sm uppercase tracking-wider mb-2" style={{ color: 'rgb(201, 169, 97)' }}>Month 2</div>
                <h3 className="text-2xl" style={{ fontFamily: 'Georgia, serif', fontWeight: 500 }}>Panchakarma & Active Treatment</h3>
              </div>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>7-14 day Panchakarma programme (typically Virechana-led)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>3-5 day at-clinic preparation with Snehapana, Abhyanga, Swedana</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Main Virechana day (in-clinic, doctor-supervised)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>7 days Paschatkarma recovery with structured dietary protocol</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Weekly Udvartana sessions where indicated</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Resumed internal medicines post-Panchakarma with adjusted dosing</span>
                </li>
              </ul>
              
              <div className="pt-4 border-t" style={{ borderColor: 'rgb(247, 243, 236)' }}>
                <span className="font-medium">Expected by end of Month 2: </span>
                <span style={{ color: 'rgb(107, 114, 128)' }}>
                  3-6 kg lost cumulatively, significant improvements in energy, sleep, digestion, and food cravings
                </span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl">
              <div className="mb-4">
                <div className="text-sm uppercase tracking-wider mb-2" style={{ color: 'rgb(201, 169, 97)' }}>Month 3</div>
                <h3 className="text-2xl" style={{ fontFamily: 'Georgia, serif', fontWeight: 500 }}>Active Treatment Continues</h3>
              </div>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Mid-programme doctor review</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Refined herbal protocol based on response</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>2-3 Udvartana sessions per week (for Kapha-predominant patterns)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Continued dietary refinement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Movement and exercise protocol fully implemented</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Body composition reassessment</span>
                </li>
              </ul>
              
              <div className="pt-4 border-t" style={{ borderColor: 'rgb(247, 243, 236)' }}>
                <span className="font-medium">Expected by end of Month 3: </span>
                <span style={{ color: 'rgb(107, 114, 128)' }}>
                  5-9 kg cumulative loss, body composition improvements often more striking than scale changes
                </span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl">
              <div className="mb-4">
                <div className="text-sm uppercase tracking-wider mb-2" style={{ color: 'rgb(201, 169, 97)' }}>Month 4</div>
                <h3 className="text-2xl" style={{ fontFamily: 'Georgia, serif', fontWeight: 500 }}>Consolidation</h3>
              </div>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Second doctor review with progress assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Herbal medicines simplified to maintenance level</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Udvartana reduced to bi-weekly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Focus on sustaining habits</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl">
              <div className="mb-4">
                <div className="text-sm uppercase tracking-wider mb-2" style={{ color: 'rgb(201, 169, 97)' }}>Month 5</div>
                <h3 className="text-2xl" style={{ fontFamily: 'Georgia, serif', fontWeight: 500 }}>Refinement</h3>
              </div>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Personalised maintenance protocol finalised</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Udvartana reduced to monthly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Focus on long-term lifestyle habits</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl">
              <div className="mb-4">
                <div className="text-sm uppercase tracking-wider mb-2" style={{ color: 'rgb(201, 169, 97)' }}>Month 6</div>
                <h3 className="text-2xl" style={{ fontFamily: 'Georgia, serif', fontWeight: 500 }}>Discharge & Long-Term Plan</h3>
              </div>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Final assessment with body composition comparison</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Maintenance protocol clearly outlined</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs mt-1.5" style={{ color: 'rgb(201, 169, 97)' }}>•</span>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>Quarterly follow-up plan established</span>
                </li>
              </ul>
              <div className="pt-4 border-t" style={{ borderColor: 'rgb(247, 243, 236)' }}>
                <span className="font-medium">Expected by end of Month 6: </span>
                <span style={{ color: 'rgb(107, 114, 128)' }}>
                  10-15 kg cumulative loss for most patients, substantial improvements in metabolic markers, weight maintenance becoming natural
                </span>
              </div>
            </div>
            
            <p className="text-sm text-center mt-10 max-w-4xl mx-auto leading-[26px] px-4" style={{ color: "rgb(107, 114, 128)" }}>
              This is a representative protocol. Some patients reach their goals at month 4 and transition to maintenance. Others need a full 6 months or extension. Patients with significant weight to lose (over 20 kg) often continue active treatment for 9-12 months. Your timeline is realistic, documented, and adjusted at each monthly review.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Realistic Outcomes */}
      <section className="bg-white px-6 md:px-24 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="uppercase tracking-wider text-sm mb-4" style={{ color: 'rgb(201, 169, 97)' }}>HONEST EXPECTATIONS</div>
            <h2 className="text-4xl" style={{ fontFamily: 'Georgia, serif', fontWeight: 500 }}>
              What weight loss is realistic — and why we resist promising specific numbers.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-lg">
                We are reluctant to promise specific weight loss numbers, but patients reasonably want to know what to expect. Honest range based on our 500+ weight loss patients at the JVC clinic:
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl mb-2" style={{ fontFamily: 'Georgia, serif', color: 'rgb(45, 95, 79)' }}>6-10 kg</div>
                  <p className="text-sm" style={{ color: 'rgb(107, 114, 128)' }}>
                    Typical for Kapha-predominant pattern over 6 months
                  </p>
                </div>
                
                <div>
                  <div className="text-4xl mb-2" style={{ fontFamily: 'Georgia, serif', color: 'rgb(45, 95, 79)' }}>8-15 kg</div>
                  <p className="text-sm" style={{ color: 'rgb(107, 114, 128)' }}>
                    Typical for insulin-resistance pattern with Panchakarma over 6 months
                  </p>
                </div>
                
                <div>
                  <div className="text-4xl mb-2" style={{ fontFamily: 'Georgia, serif', color: 'rgb(45, 95, 79)' }}>3-7 kg</div>
                  <p className="text-sm" style={{ color: 'rgb(107, 114, 128)' }}>
                    Typical for stress-pattern weight loss over 4 months
                  </p>
                </div>
                
                <div>
                  <div className="text-4xl mb-2" style={{ fontFamily: 'Georgia, serif', color: 'rgb(45, 95, 79)' }}>5-12 kg</div>
                  <p className="text-sm" style={{ color: 'rgb(107, 114, 128)' }}>
                    Typical for PCOS-related weight loss over 6 months
                  </p>
                </div>
              </div>
              
              <p style={{ color: 'rgb(107, 114, 128)' }}>
                These are honest ranges. Some patients exceed the upper end (rare but happens). Some land at the lower end (often patients with shorter programmes or specific contraindications). The patients who lose the least are usually those who do not implement the dietary and lifestyle protocols — the herbs and Panchakarma alone produce limited results.
              </p>
              
              <p className="text-lg font-medium">
                What we measure beyond weight: body composition changes (often more striking than scale changes), insulin and HbA1c improvements, lipid panel changes, blood pressure normalisation, energy levels, sleep quality, food relationship changes, and sustained behaviour patterns. These are the markers that predict whether the weight stays off.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1667586745834-1d077ec9fe73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" 
                alt="Sustainable healthy living" 
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
      <section className="bg-white px-6 md:px-24 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="uppercase tracking-wider text-sm mb-4" style={{ color: 'rgb(201, 169, 97)' }}>VISIT US</div>
              <h2 className="text-4xl mb-8" style={{ fontFamily: 'Georgia, serif', fontWeight: 500 }}>
                Where weight loss treatment happens at Vedara Care.
              </h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <div className="font-medium mb-2">Address</div>
                  <p style={{ color: 'rgb(107, 114, 128)' }}>
                    Vedara Care Polyclinic<br />
                    Jumeirah Village Circle (JVC)<br />
                    Next to Circle Mall<br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
                
                <div>
                  <div className="font-medium mb-2">Contact</div>
                  <p style={{ color: 'rgb(107, 114, 128)' }}>
                    Phone: +971 4 000 0000<br />
                    WhatsApp: +971 50 000 0000<br />
                    Email: weightloss@vedaracare.ae
                  </p>
                </div>
                
                <div>
                  <div className="font-medium mb-2">Hours</div>
                  <div className="space-y-1 text-sm" style={{ color: 'rgb(107, 114, 128)' }}>
                    <div className="flex justify-between">
                      <span>Sunday - Thursday</span>
                      <span>8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday</span>
                      <span>Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm mb-6" style={{ color: 'rgb(107, 114, 128)' }}>
                Dedicated consultation rooms with comfortable, fully-private examination areas, body composition equipment, and treatment rooms for Panchakarma and Udvartana sessions. Walking distance from Circle Mall, easy access from JVC Districts 10, 11, 12, 13, JVT, and Al Barsha South. Female doctors available on request.
              </p>
              
              <button className="px-8 py-4 text-white rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: 'rgb(45, 95, 79)' }}>
                Book a Weight Loss Consultation
              </button>
            </div>
            
            <div className="bg-gray-200 rounded-xl overflow-hidden h-[500px] flex items-center justify-center">
              <span style={{ color: 'rgb(107, 114, 128)' }}>Map Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 14: Final CTA */}
      <FinalCTA {...weightLossFinalCTA} />

      {/* Section 15: Related Pages */}
      {weightLossRelatedPages && <RelatedPages {...weightLossRelatedPages} />}

     
    </>
  );
};

export default WeightLossAyurvedaDubai;
