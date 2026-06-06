import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import PediatricAgeGroups from '../../components/ayurveda/PediatricAgeGroups';
import SportsInjuryTypes from '../../components/ayurveda/SportsInjuryTypes';
import PhysiotherapyMechanism from '../../components/ayurveda/PhysiotherapyMechanism';
import PediatricWhatToExpect from '../../components/ayurveda/PediatricWhatToExpect';
import PhysiotherapyInsurance from '../../components/ayurveda/PhysiotherapyInsurance';
import PricingSectionNew from '../../components/ayurveda/PricingSectionNew';
import PediatricPhysiotherapyPricing from '../../components/ayurveda/PediatricPhysiotherapyPricing';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  pediatricPhysiotherapyHero,
  pediatricPhysiotherapyIntro,
  pediatricPhysiotherapyAgeGroups,
  pediatricPhysiotherapySportsInjuryTypes,
  pediatricPhysiotherapyMechanism,
  pediatricPhysiotherapyInsurance,
  pediatricPhysiotherapyMechanism2,
  pediatricPhysiotherapyWhatToExpect,
  pediatricPhysiotherapyReviews,
  pediatricPhysiotherapyTeam,
  pediatricPhysiotherapyFaqs,
  pediatricPhysiotherapyLocation,
  pediatricPhysiotherapyFinalCTA,
  pediatricPhysiotherapyRelatedPages,
  pediatricPhysiotherapyPricing
} from '../../data/pediatricPhysiotherapyData';

const PediatricDubai = () => {
  const currentDate = new Date().toISOString();
  
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy"],
      "@id": "https://vedaracare.ae/physiotherapy/pediatric-dubai/#paediatric",
      "name": "Vedara Care Paediatric Physiotherapy",
      "alternateName": ["Vedara Pediatric Physio Dubai", "Vedara Children's Physiotherapy JVC"],
      "url": "https://vedaracare.ae/physiotherapy/pediatric-dubai/",
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "DHA-licensed paediatric physiotherapy at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. Specialised treatment for infants, preschool, school-age, and adolescent children. Developmental concerns, scoliosis, cerebral palsy, sports injuries, torticollis, plagiocephaly, and more. Coordination with paediatricians and schools.",
      "telephone": "+971 4 423 4567",
      "priceRange": "AED 350 - AED 12,000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jumeirah Village Circle",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.04",
        "longitude": "55.24"
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
        "Paediatric Physiotherapy",
        "Pediatric Physical Therapy",
        "Developmental Physiotherapy",
        "Adolescent Sports Medicine",
        "Infant Physiotherapy",
        "Preschool Physiotherapy",
        "School-Age Physiotherapy",
        "Adolescent Physiotherapy"
      ],
      "isAcceptingNewPatients": true,
      "audience": {
        "@type": "PeopleAudience",
        "suggestedMinAge": 0,
        "suggestedMaxAge": 18
      },
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Infant Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Preschool Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "School-Age Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Adolescent Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Developmental Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Scoliosis Treatment"},
        {"@type": "MedicalProcedure", "name": "Cerebral Palsy Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Adolescent Sports Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Torticollis Treatment"},
        {"@type": "MedicalProcedure", "name": "Plagiocephaly Treatment"}
      ],
      "memberOf": {
        "@type": "GovernmentOrganization",
        "name": "Dubai Health Authority"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "95",
        "bestRating": "5",
        "worstRating": "1"
      },
      "employee": [
        {
          "@type": "Person",
          "name": "Dr. Sarah Johnson",
          "hasCredential": [
            {"@type": "EducationalCredential", "name": "Doctor of Physical Therapy (DPT)"},
            {"@type": "EducationalCredential", "name": "Paediatric Specialist"}
          ]
        },
        {
          "@type": "Person",
          "name": "Dr. Priya Sharma",
          "hasCredential": [
            {"@type": "EducationalCredential", "name": "Doctor of Physical Therapy (DPT)"},
            {"@type": "EducationalCredential", "name": "Paediatric Specialist"}
          ]
        },
        {
          "@type": "Person",
          "name": "Dr. Maya Al-Rashid",
          "hasCredential": [
            {"@type": "EducationalCredential", "name": "Doctor of Physical Therapy (DPT)"},
            {"@type": "EducationalCredential", "name": "Paediatric Specialist"}
          ]
        },
        {
          "@type": "Person",
          "name": "Dr. Emma Williams",
          "hasCredential": [
            {"@type": "EducationalCredential", "name": "Doctor of Physical Therapy (DPT)"},
            {"@type": "EducationalCredential", "name": "Paediatric Specialist"}
          ]
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "name": "Cerebral Palsy",
          "code": {"@type": "MedicalCode", "code": "G80", "codingSystem": "ICD-10"},
          "possibleTreatment": [
            {"@type": "MedicalProcedure", "name": "Paediatric Physiotherapy"},
            {"@type": "MedicalProcedure", "name": "Developmental Physiotherapy"}
          ]
        },
        {
          "@type": "MedicalCondition",
          "name": "Down Syndrome",
          "code": {"@type": "MedicalCode", "code": "Q90", "codingSystem": "ICD-10"},
          "possibleTreatment": [
            {"@type": "MedicalProcedure", "name": "Paediatric Physiotherapy"},
            {"@type": "MedicalProcedure", "name": "Developmental Physiotherapy"}
          ]
        },
        {
          "@type": "MedicalCondition",
          "name": "Spina Bifida",
          "code": {"@type": "MedicalCode", "code": "Q05", "codingSystem": "ICD-10"},
          "possibleTreatment": [
            {"@type": "MedicalProcedure", "name": "Paediatric Physiotherapy"},
            {"@type": "MedicalProcedure", "name": "Developmental Physiotherapy"}
          ]
        },
        {
          "@type": "MedicalCondition",
          "name": "Muscular Dystrophy",
          "code": {"@type": "MedicalCode", "code": "G71.0", "codingSystem": "ICD-10"},
          "possibleTreatment": [
            {"@type": "MedicalProcedure", "name": "Paediatric Physiotherapy"}
          ]
        },
        {
          "@type": "MedicalCondition",
          "name": "Adolescent Idiopathic Scoliosis",
          "code": {"@type": "MedicalCode", "code": "M41.1", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Kyphosis",
          "code": {"@type": "MedicalCode", "code": "M40", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Lordosis",
          "code": {"@type": "MedicalCode", "code": "M40.5", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Congenital Muscular Torticollis",
          "code": {"@type": "MedicalCode", "code": "Q68.0", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Plagiocephaly",
          "code": {"@type": "MedicalCode", "code": "Q67.3", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Brachycephaly",
          "code": {"@type": "MedicalCode", "code": "Q67.0", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Osgood-Schlatter Disease",
          "code": {"@type": "MedicalCode", "code": "M92.5", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Sever's Disease",
          "code": {"@type": "MedicalCode", "code": "M92.6", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Developmental Coordination Disorder",
          "code": {"@type": "MedicalCode", "code": "F82", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Toe Walking",
          "possibleTreatment": [
            {"@type": "MedicalProcedure", "name": "Paediatric Physiotherapy"}
          ]
        },
        {
          "@type": "MedicalCondition",
          "name": "Gross Motor Delay",
          "possibleTreatment": [
            {"@type": "MedicalProcedure", "name": "Paediatric Physiotherapy"},
            {"@type": "MedicalProcedure", "name": "Developmental Physiotherapy"}
          ]
        },
        {
          "@type": "MedicalCondition",
          "name": "Hypermobility",
          "possibleTreatment": [
            {"@type": "MedicalProcedure", "name": "Paediatric Physiotherapy"}
          ]
        },
        {
          "@type": "MedicalCondition",
          "name": "Joint Hypermobility Syndrome",
          "code": {"@type": "MedicalCode", "code": "M35.7", "codingSystem": "ICD-10"},
          "possibleTreatment": [
            {"@type": "MedicalProcedure", "name": "Paediatric Physiotherapy"}
          ]
        },
        {
          "@type": "MedicalBusiness",
          "name": "Vedara Care Polyclinic",
          "@id": "https://vedaracare.ae/#organization"
        },
        {
          "@type": "GovernmentOrganization",
          "name": "Dubai Health Authority"
        },
        {
          "@type": "Organization",
          "name": "Daman"
        },
        {
          "@type": "Organization",
          "name": "AXA"
        },
        {
          "@type": "Organization",
          "name": "Allianz"
        },
        {
          "@type": "Organization",
          "name": "Oman Insurance"
        },
        {
          "@type": "Organization",
          "name": "Now Health"
        },
        {
          "@type": "Organization",
          "name": "Bupa"
        },
        {
          "@type": "Organization",
          "name": "MetLife"
        },
        {
          "@type": "Place",
          "name": "Jumeirah Village Circle"
        },
        {
          "@type": "Place",
          "name": "Circle Mall"
        },
        {
          "@type": "Place",
          "name": "FIVE Jumeirah Village"
        },
        {
          "@type": "Organization",
          "name": "JSS Private School"
        },
        {
          "@type": "Organization",
          "name": "Dubai International Academy"
        },
        {
          "@type": "Organization",
          "name": "Repton"
        },
        {
          "@type": "Organization",
          "name": "GEMS schools"
        },
        {
          "@type": "MedicalSpecialty",
          "name": "Paediatrician"
        },
        {
          "@type": "MedicalSpecialty",
          "name": "Paediatric Orthopaedic Surgeon"
        },
        {
          "@type": "MedicalSpecialty",
          "name": "Paediatric Neurologist"
        },
        {
          "@type": "MedicalSpecialty",
          "name": "Occupational Therapist"
        },
        {
          "@type": "MedicalSpecialty",
          "name": "Speech Therapist"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Paediatric Physiotherapy Services in Dubai",
      "provider": {"@id": "https://vedaracare.ae/physiotherapy/pediatric-dubai/#paediatric"},
      "areaServed": [
        {"@type": "City", "name": "Dubai"}
      ],
      "audience": {
        "@type": "PeopleAudience",
        "suggestedMinAge": 0,
        "suggestedMaxAge": 18
      },
      "serviceType": "Paediatric Physiotherapy and Children's Physical Therapy",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Paediatric Physiotherapy Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Initial Paediatric Assessment",
            "priceCurrency": "AED",
            "price": "450",
            "description": "60-75 minute comprehensive paediatric assessment with paediatric-trained physiotherapist"
          },
          {
            "@type": "Offer",
            "name": "Follow-up Paediatric Session",
            "priceCurrency": "AED",
            "price": "350",
            "description": "Age-appropriate follow-up treatment session"
          },
          {
            "@type": "Offer",
            "name": "Scoliosis Programme",
            "priceCurrency": "AED",
            "price": "420",
            "description": "Structured scoliosis assessment and treatment programme"
          },
          {
            "@type": "Offer",
            "name": "Adolescent Sports Injury Package",
            "priceCurrency": "AED",
            "price": "3400",
            "description": "10-session sports injury rehabilitation package for adolescent athletes"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Physiotherapy in JVC", "item": "https://vedaracare.ae/physiotherapy-jvc/"},
        {"@type": "ListItem", "position": 3, "name": "Paediatric Physiotherapy", "item": "https://vedaracare.ae/physiotherapy/pediatric-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "At what age should my child start physiotherapy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The right age depends entirely on the concern. Infant physiotherapy begins as young as a few weeks old for conditions like torticollis or plagiocephaly. Developmental concerns are typically addressed from 4-6 months when delays become apparent. Sports injuries in adolescents follow standard sports physiotherapy approaches. If your paediatrician has identified a concern, the right time to start is now — early intervention typically produces better outcomes than delayed treatment."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a paediatrician referral for paediatric physiotherapy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not legally required — paediatric physiotherapy is direct-access in Dubai. However, paediatrician referral is strongly recommended for: confirming the underlying diagnosis, ensuring nothing else is going on (paediatricians can identify issues outside physiotherapy scope), establishing insurance coverage (most plans cover better with referral), and creating documentation that may be needed later. For most situations, we recommend a paediatrician consultation first or alongside the initial physiotherapy assessment."
          }
        },
        {
          "@type": "Question",
          "name": "How long are paediatric physiotherapy sessions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Initial paediatric consultation: 60-75 minutes. Follow-up sessions: 30-45 minutes for infants, 45-60 minutes for preschool and school-age children, 60 minutes for adolescents. Time includes settling time for the child, treatment, and parent education. Sessions are intentionally longer than equivalent adult sessions because paediatric care requires more time per session."
          }
        },
        {
          "@type": "Question",
          "name": "Will my child cooperate with physiotherapy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most children initially resist physiotherapy and learn to engage as comfort builds. Our therapists are skilled in building rapport with children across age groups. We never force cooperation — that produces worse outcomes. If your child is initially anxious or resistant, we adapt our approach until they are willing to engage. This may take 2-3 sessions for very young or anxious children. The goal is making your child want to come back next week."
          }
        },
        {
          "@type": "Question",
          "name": "Should both parents come to the first appointment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both parents are welcome but not required. If only one parent attends, we suggest the parent who knows your child's medical and developmental history most thoroughly. Some conditions benefit from both parents understanding the treatment approach (particularly for ongoing home programmes). For divorced or separated parents, we can accommodate different scheduling arrangements with appropriate communication agreements."
          }
        },
        {
          "@type": "Question",
          "name": "What conditions do you treat in adolescents specifically?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Adolescent physiotherapy is one of our major focuses given Dubai's competitive sports culture. We treat: sports injuries (ACL, hamstring, shoulder, sport-specific patterns), scoliosis (often progressed from earlier detection), adolescent idiopathic spinal conditions, hypermobility-related conditions, post-surgical paediatric rehabilitation, postural concerns from device use, and athletic performance optimisation. Adolescent care recognises their developing autonomy while maintaining parental involvement."
          }
        },
        {
          "@type": "Question",
          "name": "Do you have female paediatric physiotherapists?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we have female paediatric physiotherapists at our JVC clinic. Many parents prefer female therapists for their children (particularly for adolescent girls and for cultural reasons in some communities). Female specialists are available across all age groups. Request a female therapist when booking."
          }
        },
        {
          "@type": "Question",
          "name": "Where in Dubai is your paediatric physiotherapy clinic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our clinic is at Jumeirah Village Circle (JVC), Dubai — walking distance from Circle Mall, three minutes from FIVE Jumeirah Village Hotel, and five minutes from JSS Private School. The JSS Private School proximity is particularly relevant — many families with school-age children at JSS schedule their child's physiotherapy in coordination with school pickup or drop-off. Free patient parking. Easy access from Sheikh Mohammed Bin Zayed Road and Al Khail Road."
          }
        },
        {
          "@type": "Question",
          "name": "Do families travel from across Dubai for paediatric care?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — families travel from JVC, JVT, Al Barsha South, Dubai Sports City, Motor City, Arjan, Dubai Hills, Marina, Downtown, Palm Jumeirah, and Mirdif. Paediatric physiotherapy is an underserved specialty in Dubai with limited paediatric-trained providers. Families often travel further for paediatric specialist care than they would for adult care."
          }
        },
        {
          "@type": "Question",
          "name": "Can you do home physiotherapy for children?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — home paediatric physiotherapy is available for specific situations: infants who are difficult to bring to clinic, children with significant disabilities or mobility limitations, children with chronic conditions requiring ongoing home-based intervention, and family preference. Home sessions are typically AED 500 per session. Many families benefit from a combination of clinic and home sessions."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Paediatric Physiotherapy in Dubai — Complete Service Guide",
      "image": "https://vedaracare.ae/images/pediatric-physiotherapy-dubai-hero.jpg",
      "datePublished": currentDate,
      "dateModified": currentDate,
      "author": {
        "@type": "Person",
        "name": "Dr. Sarah Johnson",
        "hasCredential": [
          {"@type": "EducationalCredential", "name": "Doctor of Physical Therapy (DPT)"},
          {"@type": "EducationalCredential", "name": "Paediatric Specialist"}
        ]
      },
      "publisher": {
        "@type": "MedicalClinic",
        "name": "Vedara Care Polyclinic",
        "@id": "https://vedaracare.ae/#organization"
      },
      "mainEntityOfPage": "https://vedaracare.ae/physiotherapy/pediatric-dubai/"
    }
  ];
  
  return (
    <>
      <Head>
        <title>Paediatric Physiotherapy in Dubai | Children's Physio | Vedara JVC</title>
        <meta name="description" content="Specialist paediatric physiotherapy at our DHA-licensed JVC clinic, Dubai. Infants, preschool, school-age, adolescents. Developmental concerns, scoliosis, sports injuries, cerebral palsy, more. Paediatric-trained physiotherapists. Five minutes from JSS Private School." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Paediatric Physiotherapy in Dubai — Specialist Children's Care | Vedara JVC" />
        <meta property="og:description" content="DHA-licensed paediatric physiotherapy at our Jumeirah Village Circle clinic. Specialised care for infants, preschool, school-age, and adolescent children. Developmental concerns, scoliosis, sports injuries, cerebral palsy, and more. Coordination with paediatricians and schools." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/pediatric-physiotherapy-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/physiotherapy/pediatric-dubai/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Canonical & Language Tags */}
        <link rel="canonical" href="https://vedaracare.ae/physiotherapy/pediatric-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/physiotherapy/pediatric-dubai/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/physiotherapy/pediatric-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/physiotherapy/pediatric-dubai/" />
        
        {/* Schema Markup */}
        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
          />
        ))}
      </Head>

      <div className="pediatric-physiotherapy-content">
        <AyurvedaHero {...pediatricPhysiotherapyHero} />
        <AyurvedaIntro {...pediatricPhysiotherapyIntro} />
        <PediatricAgeGroups {...pediatricPhysiotherapyAgeGroups} />
             
        <SportsInjuryTypes {...pediatricPhysiotherapySportsInjuryTypes} />
        <PhysiotherapyMechanism{...pediatricPhysiotherapyMechanism2}
        bgColor="bg-[#F8F6F1]" />
        {/* <PhysiotherapyMechanism /> */}
        <PediatricWhatToExpect {...pediatricPhysiotherapyWhatToExpect} />
      <PhysiotherapyInsurance {...pediatricPhysiotherapyInsurance} />
        <PhysiotherapyMechanism {...pediatricPhysiotherapyMechanism} />
   
        {/* <PricingSectionNew {...pediatricPhysiotherapyJvcPricing} /> */}
        <PediatricPhysiotherapyPricing data={pediatricPhysiotherapyPricing} />
        <TreatmentReviews {...pediatricPhysiotherapyReviews} />
        <PhysiotherapyTeam {...pediatricPhysiotherapyTeam} />
        <FAQ {...pediatricPhysiotherapyFaqs} 
        bgColor="bg-[#F5F1E8]"/>
        <TreatmentLocation {...pediatricPhysiotherapyLocation}
        bgColor="bg-[#FFFFFF]"
        buttonColor="bg-[#1A4D2E]" 
        />
        <FinalCTA {...pediatricPhysiotherapyFinalCTA} />
        <RelatedPages {...pediatricPhysiotherapyRelatedPages} />
      </div>
    </>
  );
};

export default PediatricDubai;
