import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentProtocol from '../../components/ayurveda/TreatmentProtocol';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import ConditionBoundaries from '../../components/ayurveda/ConditionBoundaries';
import ArthritisPillars from '../../components/ayurveda/ArthritisPillars';
import TreatmentLocationCustom from '../../components/ayurveda/TreatmentLocationCustom';

import {
  diabetesHero,
  diabetesIntro,
  diabetesMechanism1,
  diabetesMechanism2,
  diabetesOils,
  diabetesProtocol,
  diabetesSymptoms,
  diabetesGLP1,
  diabetesBoundaries,
  diabetesReviews,
  diabetesPrograms,
  diabetesFaqs,
  diabetesTreatmentLocation,
  diabetesFinalCTA,
  diabetesRelatedPages,
  diabetesArthritisPillars,
  diabetesTreatmentLocationCustom
} from '../../data/diabetesData';

const DiabetesAyurvedaDubai = () => {
  const currentDate = new Date().toISOString();

  return (
    <>
      <Head>
        <title>Ayurveda for Diabetes in Dubai | JVC Clinic | Vedara Care</title>
        <meta name="description" content="DHA-licensed Ayurvedic diabetes treatment at our JVC clinic, Dubai — structured 6-month programmes for prediabetes, type 2 diabetes, and complications. Works with your endocrinologist." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ayurveda for Diabetes in Dubai — Integrated Treatment at Our JVC Clinic" />
        <meta property="og:description" content="DHA-licensed Ayurvedic diabetes treatment at our Jumeirah Village Circle clinic. Stage-specific 6-month medical programmes coordinated with your endocrinologist." />
        <meta property="og:image" content="https://vedaracare.ae/images/diabetes-ayurveda-dubai-hero.webp" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/diabetes-ayurveda-dubai/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content="2026-05-01" />
        <meta property="article:modified_time" content={currentDate} />
        <meta property="article:author" content="Dr. [Lead Ayurvedic Physician]" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Canonical & Language */}
        <link rel="canonical" href="https://vedaracare.ae/conditions/diabetes-ayurveda-dubai/" />
        <link rel="alternate" hrefLang="en-AE" href="https://vedaracare.ae/conditions/diabetes-ayurveda-dubai/" />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/conditions/diabetes-ayurveda-dubai/" />
        <link rel="alternate" hrefLang="x-default" href="https://vedaracare.ae/conditions/diabetes-ayurveda-dubai/" />
      </Head>

      {/* Schema 1 - Medical Condition (Primary) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            "@id": "https://vedaracare.ae/conditions/diabetes-ayurveda-dubai/#condition",
            "name": "Type 2 Diabetes Mellitus",
            "alternateName": ["Diabetes", "Type 2 Diabetes", "Madhumeha", "Prameha", "Adult-Onset Diabetes"],
            "code": [
              {"@type": "MedicalCode", "code": "E11", "codingSystem": "ICD-10"},
              {"@type": "MedicalCode", "code": "E11.9", "codingSystem": "ICD-10"},
              {"@type": "MedicalCode", "code": "R73.03", "codingSystem": "ICD-10"}
            ],
            "associatedAnatomy": [
              {"@type": "AnatomicalStructure", "name": "Pancreas"},
              {"@type": "AnatomicalStructure", "name": "Endocrine system"},
              {"@type": "AnatomicalStructure", "name": "Metabolic system"}
            ],
            "signOrSymptom": [
              {"@type": "MedicalSymptom", "name": "Elevated blood glucose"},
              {"@type": "MedicalSymptom", "name": "Polyuria"},
              {"@type": "MedicalSymptom", "name": "Polydipsia"},
              {"@type": "MedicalSymptom", "name": "Polyphagia"},
              {"@type": "MedicalSymptom", "name": "Unexplained weight loss or gain"},
              {"@type": "MedicalSymptom", "name": "Fatigue"},
              {"@type": "MedicalSymptom", "name": "Blurred vision"},
              {"@type": "MedicalSymptom", "name": "Peripheral neuropathy"}
            ],
            "possibleTreatment": [
              {"@type": "MedicalProcedure", "name": "Panchakarma", "url": "https://vedaracare.ae/treatments/panchakarma-dubai/"},
              {"@type": "MedicalProcedure", "name": "Virechana"},
              {"@type": "MedicalTherapy", "name": "Ayurvedic anti-diabetic herbal medicines"},
              {"@type": "MedicalTherapy", "name": "Dietary regulation"},
              {"@type": "MedicalTherapy", "name": "Lifestyle modification"},
              {"@type": "MedicalProcedure", "name": "Padabhyanga for diabetic neuropathy"}
            ],
            "riskFactor": [
              {"@type": "MedicalRiskFactor", "name": "Insulin resistance"},
              {"@type": "MedicalRiskFactor", "name": "Genetic predisposition"},
              {"@type": "MedicalRiskFactor", "name": "Obesity"},
              {"@type": "MedicalRiskFactor", "name": "Sedentary lifestyle"},
              {"@type": "MedicalRiskFactor", "name": "Chronic stress"},
              {"@type": "MedicalRiskFactor", "name": "South Asian or Middle Eastern ethnicity"},
              {"@type": "MedicalRiskFactor", "name": "PCOS"},
              {"@type": "MedicalRiskFactor", "name": "Gestational diabetes history"}
            ]
          })
        }}
      />

      {/* Schema 2 - Five Diabetes Stage Subtypes */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalCondition",
                "name": "Prediabetes",
                "alternateName": ["Impaired Glucose Tolerance", "Impaired Fasting Glucose"],
                "code": {"@type": "MedicalCode", "code": "R73.03", "codingSystem": "ICD-10"},
                "signOrSymptom": [
                  {"@type": "MedicalSymptom", "name": "Elevated fasting glucose (5.6-6.9 mmol/L)"},
                  {"@type": "MedicalSymptom", "name": "Elevated HbA1c (5.7-6.4%)"},
                  {"@type": "MedicalSymptom", "name": "Insulin resistance"}
                ],
                "possibleTreatment": [
                  {"@type": "MedicalProcedure", "name": "Panchakarma", "url": "https://vedaracare.ae/treatments/panchakarma-dubai/"},
                  {"@type": "MedicalTherapy", "name": "Insulin-sensitising Ayurvedic herbs"}
                ]
              },
              {
                "@type": "MedicalCondition",
                "name": "Newly Diagnosed Type 2 Diabetes",
                "signOrSymptom": [
                  {"@type": "MedicalSymptom", "name": "Elevated HbA1c"},
                  {"@type": "MedicalSymptom", "name": "Fasting glucose elevation"},
                  {"@type": "MedicalSymptom", "name": "Insulin resistance"}
                ],
                "possibleTreatment": [
                  {"@type": "MedicalProcedure", "name": "Virechana-led Panchakarma", "url": "https://vedaracare.ae/treatments/panchakarma-dubai/"},
                  {"@type": "MedicalTherapy", "name": "Guduchi-Methika-Karela combination"}
                ]
              },
              {
                "@type": "MedicalCondition",
                "name": "Established Type 2 Diabetes",
                "signOrSymptom": [
                  {"@type": "MedicalSymptom", "name": "Long-standing elevated blood glucose"},
                  {"@type": "MedicalSymptom", "name": "Fatigue"},
                  {"@type": "MedicalSymptom", "name": "Neuropathy"}
                ],
                "possibleTreatment": [
                  {"@type": "MedicalTherapy", "name": "Ayurvedic supportive care"}
                ]
              },
              {
                "@type": "MedicalCondition",
                "name": "Type 1 Diabetes",
                "alternateName": ["Insulin-Dependent Diabetes"],
                "signOrSymptom": [
                  {"@type": "MedicalSymptom", "name": "Insulin deficiency"}
                ],
                "possibleTreatment": [
                  {"@type": "MedicalTherapy", "name": "Insulin (primary, with Ayurvedic supportive care only)"}
                ]
              },
              {
                "@type": "MedicalCondition",
                "name": "Gestational Diabetes",
                "signOrSymptom": [
                  {"@type": "MedicalSymptom", "name": "Pregnancy-related elevated blood glucose"}
                ],
                "possibleTreatment": [
                  {"@type": "MedicalTherapy", "name": "Pregnancy-safe Ayurvedic supportive care, coordinated with obstetrician"}
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
            "@id": "https://vedaracare.ae/conditions/diabetes-ayurveda-dubai/#webpage",
            "name": "Ayurveda for Diabetes in Dubai",
            "url": "https://vedaracare.ae/conditions/diabetes-ayurveda-dubai/",
            "about": {"@id": "https://vedaracare.ae/conditions/diabetes-ayurveda-dubai/#condition"},
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
            "primaryImageOfPage": "https://vedaracare.ae/images/diabetes-ayurveda-dubai-hero.webp"
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
            "name": "Ayurvedic Diabetes Treatment Programmes",
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
            "serviceType": "Ayurvedic Treatment for Diabetes",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Diabetes Programmes",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "name": "Diabetes Initial Assessment",
                  "priceCurrency": "AED",
                  "price": "350",
                  "description": "60-75 minute consultation with BAMS-qualified physician, comprehensive bloodwork review, stage classification, endocrinologist coordination plan"
                },
                {
                  "@type": "Offer",
                  "name": "Standard 6-Month Diabetes Programme",
                  "priceCurrency": "AED",
                  "price": "9500",
                  "description": "Six-month integrated Ayurvedic diabetes treatment coordinated with your endocrinologist"
                },
                {
                  "@type": "Offer",
                  "name": "Comprehensive Diabetes + Complications Programme",
                  "priceCurrency": "AED",
                  "price": "14500",
                  "description": "9-12 month programme for long-standing diabetes with complications, post-GLP-1 management, complex integrated care"
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
            "headline": "Ayurveda for Diabetes in Dubai — A Complete Clinical Guide",
            "image": "https://vedaracare.ae/images/diabetes-ayurveda-dubai-hero.webp",
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
            "mainEntityOfPage": "https://vedaracare.ae/conditions/diabetes-ayurveda-dubai/"
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
              {"@type": "ListItem", "position": 3, "name": "Ayurveda for Diabetes in Dubai", "item": "https://vedaracare.ae/conditions/diabetes-ayurveda-dubai/"}
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
            "mainEntity": diabetesFaqs.faqs.map((faq, idx) => ({
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
      <AyurvedaHero {...diabetesHero} />

      {/* Section 2: Intro (Answer Capsule) */}
      <AyurvedaIntro {...diabetesIntro} />

      {/* Section 3: What Ayurveda can offer depends on what stage of diabetes you have */}
      <section className="px-6 md:px-24 py-24" style={{ backgroundColor: "rgb(247, 243, 236)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="uppercase tracking-wider text-sm mb-4" style={{ color: "rgb(201, 169, 97)" }}>
              {diabetesMechanism1.label}
            </div>
            <h2 className="text-4xl mb-4" style={{ fontFamily: "Georgia, serif", fontWeight: 500 }}>
              {diabetesMechanism1.title}
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "rgb(107, 114, 128)" }} dangerouslySetInnerHTML={{ __html: diabetesMechanism1.description }} />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {diabetesMechanism1.phenotypes.map((phenotype, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border flex flex-col gap-6 space-y-4"
                style={{ 
                  borderColor: "rgb(201, 169, 97)" 
                }}
              >
                <div className="text-6xl font-['Georgia']" style={{ color: "rgb(201, 169, 97)" }}>
                  {phenotype.letter}
                </div>
                <h4 className="text-xl font-medium" style={{ fontFamily: "Georgia, serif" }} dangerouslySetInnerHTML={{ __html: phenotype.title }} />
                <div className="text-sm italic" style={{ color: "rgb(201, 169, 97)" }} dangerouslySetInnerHTML={{ __html: phenotype.subtitle }} />
                <p className="leading-relaxed" style={{ color: "rgb(107, 114, 128)" }} dangerouslySetInnerHTML={{ __html: phenotype.content }} />
                <div className="pt-2 text-sm border-t border-gray-200">
                  <span className="font-medium">What Ayurveda can realistically achieve:</span> <span dangerouslySetInnerHTML={{ __html: phenotype.ayurvedicEmphasis }} />
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-12 max-w-3xl mx-auto" style={{ color: "rgb(107, 114, 128)" }} dangerouslySetInnerHTML={{ __html: diabetesMechanism1.footer }} />
        </div>
      </section>

      {/* Section 4: What Ayurvedic treatment is — and is not — in diabetes care */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="text-sm tracking-wider uppercase font-medium" style={{ color: 'rgb(201, 169, 97)' }}>
              An Explicit Positioning Statement
            </div>
            <h2 className="text-4xl" style={{ fontFamily: 'Georgia, serif', fontWeight: 500 }}>
              What Ayurvedic treatment is — and is not — in diabetes care.
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6" style={{ color: 'rgb(107, 114, 128)', lineHeight: '1.7' }}>
              <p>
                <strong style={{ color: 'rgb(17, 24, 39)' }}>Ayurvedic treatment for diabetes is integrative, not alternative.</strong> At our JVC clinic, we work alongside endocrinologists — not in competition with them. The patients with the best outcomes have an endocrinologist managing their medications and conventional monitoring, an Ayurvedic physician addressing root metabolic patterns, and the two teams communicating regularly.
              </p>
              
              <p>
                What conventional endocrinology does well: precise blood sugar management through medication, monitoring HbA1c and complications, managing acute hyperglycaemic and hypoglycaemic events, coordinating ophthalmology and nephrology when complications develop. What 15-minute endocrinology appointments cannot do: address the insulin-resistance root patterns, prescribe individualised dietary regulation calibrated to your dosha and lifestyle, perform Panchakarma cleansing protocols, address inflammation systemically, and modify the lifestyle factors that perpetuate diabetes.
              </p>
              
              <p>
                <strong style={{ color: 'rgb(17, 24, 39)' }}>What we will never do at our JVC clinic:</strong> ask you to stop your prescribed diabetes medication without your endocrinologist's input; claim Ayurveda can "cure" diabetes; promise specific HbA1c reductions; replace insulin in any patient who requires it; treat diabetic emergencies.
              </p>
              
              <p>
                <strong style={{ color: 'rgb(17, 24, 39)' }}>What we will do:</strong> provide a structured 6-month programme that addresses what conventional care cannot, coordinate with your endocrinologist throughout, and produce sustained metabolic improvements that may — under your endocrinologist's supervision — allow medication adjustment.
              </p>
              
              <blockquote className="text-2xl italic py-8" style={{ fontFamily: 'Georgia, serif', color: 'rgb(201, 169, 97)' }}>
                "The clinic that promises to cure your diabetes is the clinic that will harm your diabetes. Run from it."
              </blockquote>
            </div>
            
            <div>
              <img 
                src={diabetesMechanism2.image} 
                alt={diabetesMechanism2.alt} 
                className="rounded-xl w-full h-auto object-cover shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Ayurvedic diabetes treatment has four pillars */}
      <ArthritisPillars {...diabetesArthritisPillars} />

      {/* Section 6: What six months of Ayurvedic diabetes treatment at our JVC clinic looks like */}
      <TreatmentProtocol {...diabetesProtocol} />

      {/* Section 7: Honest outcomes based on stage and adherence */}
      {/* Section 8: For diabetes complications, Ayurvedic adjunctive care is often most valuable */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="text-sm tracking-wider uppercase font-medium" style={{ color: 'rgb(201, 169, 97)' }}>
              Complication-Focused Care
            </div>
            <h2 className="text-4xl" style={{ fontFamily: 'Georgia, serif', fontWeight: 500 }}>
              For diabetes complications, Ayurvedic adjunctive care is often most valuable.
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <p className="text-lg leading-relaxed" style={{ color: 'rgb(107, 114, 128)' }}>
                While Ayurvedic treatment for primary diabetes management is most powerful in prediabetes and early type 2, the value shifts as the disease progresses. For long-standing diabetes, the largest clinical gains often come from addressing complications and preventing their progression.
              </p>
              
              <div className="h-px" style={{ backgroundColor: 'rgb(201, 169, 97)' }}></div>
              
              <div className="space-y-3">
                <h4 className="text-2xl" style={{ fontFamily: 'Georgia, serif', color: 'rgb(201, 169, 97)' }}>
                  Diabetic Neuropathy
                </h4>
                <p className="leading-relaxed" style={{ color: 'rgb(107, 114, 128)' }}>
                  Peripheral neuropathy is one of the most distressing diabetic complications and one where Ayurveda has its strongest adjunctive role. Specific protocols including <a href='/treatments/padabhyanga-dubai/' class='doctor-specialty-link'>Padabhyanga</a> (medicated foot massage), Snehapana, internal medicines including Brahmi and Ashwagandha-based formulations, and Vata-pacification often reduce burning, tingling, and pain meaningfully. Best results combine Ayurvedic treatment with conventional neuropathy medications.
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-2xl" style={{ fontFamily: 'Georgia, serif', color: 'rgb(201, 169, 97)' }}>
                  Diabetic Nephropathy (Early Stage)
                </h4>
                <p className="leading-relaxed" style={{ color: 'rgb(107, 114, 128)' }}>
                  For early-stage diabetic kidney disease (microalbuminuria, mildly elevated creatinine), Ayurvedic adjunctive care alongside nephrology can slow progression. Specific formulations including Punarnava and Gokshura-based protocols, dietary modifications, and lifestyle protocols. Always coordinated with your nephrologist — never as a replacement for blood pressure control and ACE inhibitor therapy.
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-2xl" style={{ fontFamily: 'Georgia, serif', color: 'rgb(201, 169, 97)' }}>
                  Diabetic Foot Care
                </h4>
                <p className="leading-relaxed" style={{ color: 'rgb(107, 114, 128)' }}>
                  Preventive foot care is one of Ayurveda's most clinically valuable diabetes services. Weekly <a href='/treatments/padabhyanga-dubai/' class='doctor-specialty-link'>Padabhyanga</a>, daily foot examination protocols, dietary support for circulation, and specific medications for vascular health. Particularly important for long-standing diabetic patients in Dubai's hot climate where foot issues escalate quickly.
                </p>
              </div>
            </div>

            <div>
              <img 
                src="/images/ayurveda-endocrinology-integrated-diabetes-jvc.webp" 
                alt="Ayurvedic doctor performing diabetic foot examination at Vedara Care JVC Dubai" 
                className="rounded-xl w-full h-auto object-cover shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Ozempic, Mounjaro, and Ayurvedic diabetes treatment */}
      <section className="px-4 py-24" style={{ backgroundColor: "rgb(250, 248, 243)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="text-sm tracking-wider uppercase font-medium" style={{ color: "rgb(201, 169, 97)" }}>
              {diabetesGLP1.label}
            </div>
            <h2 className="text-4xl" style={{ fontFamily: "Georgia, serif", fontWeight: 500 }}>
              {diabetesGLP1.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {diabetesGLP1.cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col gap-6 rounded-xl border p-8 space-y-4 bg-white"
                style={{ borderColor: "rgb(230, 230, 230)" }}
              >
                <h4 className="text-xl font-medium" style={{ fontFamily: "Georgia, serif" }}>
                  {card.title}
                </h4>
                <p className="leading-relaxed" style={{ color: "rgb(107, 114, 128)" }}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-8 max-w-3xl mx-auto" style={{ color: "rgb(107, 114, 128)" }}>
            {diabetesGLP1.footer}
          </p>
        </div>
      </section>

      {/* Condition Boundaries */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="text-sm tracking-wider uppercase font-medium" style={{ color: 'rgb(201, 169, 97)' }}>
              Honest Clinical Boundaries
            </div>
            <h2 className="text-4xl" style={{ fontFamily: 'Georgia, serif', fontWeight: 500 }}>
              When we refer you elsewhere first.
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'rgb(107, 114, 128)' }}>
              Ayurvedic diabetes treatment is powerful in specific contexts. It is dangerous in others.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="text-sm font-medium uppercase tracking-wider" style={{ color: '#dc2626' }}>
                Urgent First
              </div>
              <h3 className="text-2xl font-medium" style={{ fontFamily: 'Georgia, serif' }}>
                Urgent conventional care required:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ef4444' }}></div>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>
                    Symptoms of diabetic ketoacidosis (DKA): nausea, vomiting, fruity breath, rapid breathing, confusion
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ef4444' }}></div>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>
                    HbA1c above 10% (urgent endocrinology evaluation needed)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ef4444' }}></div>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>
                    Severe hypoglycaemia episodes (medication review urgent)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ef4444' }}></div>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>
                    New visual symptoms (urgent ophthalmology — possible diabetic retinopathy)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ef4444' }}></div>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>
                    New foot ulcers or infections (urgent diabetic foot care)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ef4444' }}></div>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>
                    Suspected new type 1 diabetes onset (especially in younger patients)
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="text-sm font-medium uppercase tracking-wider" style={{ color: 'rgb(201, 169, 97)' }}>
                Adjunctive Role Only
              </div>
              <h3 className="text-2xl font-medium" style={{ fontFamily: 'Georgia, serif' }}>
                When Ayurveda is supportive but not primary:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'rgb(201, 169, 97)' }}></div>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>
                    Type 1 diabetes (Ayurveda supports lifestyle and inflammation; insulin remains essential)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'rgb(201, 169, 97)' }}></div>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>
                    Diabetes with significant kidney impairment (creatinine elevated) — nephrology must lead
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'rgb(201, 169, 97)' }}></div>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>
                    Pregnancy with gestational diabetes — obstetric and endocrinology coordination essential
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'rgb(201, 169, 97)' }}></div>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>
                    Diabetic patients on insulin therapy with hypoglycaemia tendency — extreme care needed
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'rgb(201, 169, 97)' }}></div>
                  <span style={{ color: 'rgb(107, 114, 128)' }}>
                    Diabetic patients with cardiac complications — cardiology coordination required
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center mt-12 max-w-3xl mx-auto" style={{ color: 'rgb(107, 114, 128)' }}>
            Real Ayurvedic doctors at our JVC clinic refer urgent cases to endocrinology, ophthalmology, nephrology, or A&amp;E as needed. We do not treat diabetic emergencies. We provide structured integrative care for stable diabetes management — alongside your conventional medical team, never instead of them.
          </p>
        </div>
      </section>

 {/* Section 12: FAQ */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="text-sm tracking-wider uppercase font-medium" style={{ color: 'rgb(201, 169, 97)' }}>
                {diabetesFaqs.label}
              </div>
              <h2 className="text-4xl" style={{ fontFamily: 'Georgia, serif', fontWeight: 500 }}>
                {diabetesFaqs.title}
              </h2>
              <p style={{ color: 'rgb(107, 114, 128)' }} dangerouslySetInnerHTML={{ __html: diabetesFaqs.description }} />

              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2" style={{ backgroundColor: 'rgb(45, 95, 79)', color: 'white' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2d4538'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgb(45, 95, 79)'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
                {diabetesFaqs.buttonText}
              </button>
            </div>

            <div className="lg:col-span-3">
              <div className="space-y-4">
                {diabetesFaqs.faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg px-6 bg-white">
                    <h3 className="flex">
                      <button 
                        type="button" 
                        className="flex flex-1 items-start justify-between gap-4 rounded-md text-sm text-left font-medium py-4 w-full"
                        style={{ color: 'rgb(17, 24, 39)' }}
                        onClick={() => {
                          const content = document.getElementById(`faq-content-${index}`);
                          const chevron = document.getElementById(`faq-chevron-${index}`);
                          if (content) {
                            content.hidden = !content.hidden;
                          }
                          if (chevron) {
                            chevron.classList.toggle('rotate-180');
                          }
                        }}
                      >
                        <span dangerouslySetInnerHTML={{ __html: faq.question }} />

                        <svg 
                          id={`faq-chevron-${index}`}
                          xmlns="http://www.w3.org/2000/svg" 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="text-gray-500 size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
                          style={{ color: 'rgb(107, 114, 128)' }}
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </h3>
                    <div 
                      id={`faq-content-${index}`} 
                      className="text-sm pb-4" 
                      style={{ color: 'rgb(107, 114, 128)' }} 
                      hidden
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Real diabetes outcomes from Dubai patients */}
      <TreatmentReviews {...diabetesReviews} />

      {/* Section 11: What Ayurvedic diabetes treatment at our JVC clinic actually costs */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="text-sm tracking-wider uppercase font-medium" style={{ color: 'rgb(201, 169, 97)' }}>
              {diabetesPrograms.label}
            </div>
            <h2 className="text-4xl" style={{ fontFamily: 'Georgia, serif', fontWeight: 500 }}>
              {diabetesPrograms.title}
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'rgb(107, 114, 128)' }} dangerouslySetInnerHTML={{ __html: diabetesPrograms.description }} />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {diabetesPrograms.programs.map((program, index) => (
              <div
                key={index}
                className={`flex flex-col rounded-xl p-8 relative ${program.featured ? 'border-2' : 'border'}`}
                style={{
                  borderColor: program.featured ? 'rgb(201, 169, 97)' : 'rgb(229, 231, 235)',
                }}
              >
                {program.featured && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-white px-4 py-1 rounded-full text-xs font-medium whitespace-nowrap"
                    style={{ backgroundColor: 'rgb(201, 169, 97)' }}
                  >
                    {program.badge}
                  </div>
                )}
                <div className="flex-1">
                  <div className="mb-6">
                    <h3 className="text-2xl font-medium mb-2" style={{ fontFamily: 'Georgia, serif' }} dangerouslySetInnerHTML={{ __html: program.name }} />
                    <div className="text-3xl mb-2" style={{ fontFamily: 'Georgia, serif', color: 'rgb(201, 169, 97)' }} dangerouslySetInnerHTML={{ __html: program.price }} />
                    <p className="text-sm" style={{ color: 'rgb(107, 114, 128)' }} dangerouslySetInnerHTML={{ __html: program.duration }} />
                  </div>
                  <ul className="space-y-3 mb-6" style={{ color: 'rgb(107, 114, 128)' }}>
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'rgb(201, 169, 97)' }}>
                          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>
                        <span dangerouslySetInnerHTML={{ __html: feature }} />
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-medium mb-6" dangerouslySetInnerHTML={{ __html: program.bestFor }} />
                </div>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 has-[>svg]:px-3 w-full"
                  style={{
                    backgroundColor: program.featured ? 'rgb(201, 169, 97)' : 'rgb(45, 95, 79)',
                    color: 'white',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = program.featured ? '#B09852' : '#2d4538';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = program.featured ? 'rgb(201, 169, 97)' : 'rgb(45, 95, 79)';
                  }}
                >
                  {program.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Section 13: Treatment Location */}
      <TreatmentLocationCustom {...diabetesTreatmentLocationCustom} />



{/* Section 15: Related Pages */}
      <RelatedPages {...diabetesRelatedPages} />
      {/* Section 14: Final CTA */}
      <FinalCTA {...diabetesFinalCTA} />

      
    </>
  );
};

export default DiabetesAyurvedaDubai;
