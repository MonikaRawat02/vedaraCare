import React from 'react';
import DoctorHero from './DoctorHero';
import DoctorProfileSummary from './DoctorProfileSummary';
import DoctorCredentials from './DoctorCredentials';
import DoctorSpecialties from './DoctorSpecialties';
import DoctorConsultation from './DoctorConsultation';

const defaultDoctorData = {
  name: 'Dr. Priya Nair',
  firstName: 'Dr. Nair',
  title: 'BAMS, MD (Ayurveda) — Classical Ayurveda Specialist',
  image: '/images/doctor-priya.jpg',
  bio: 'Dr. Nair leads the Ayurveda department at Vedara Care Polyclinic in Jumeirah Village Circle. With over fifteen years of clinical practice — including eight years in Kerala’s leading Ayurvedic hospitals and seven years serving Dubai patients — she is known for treating chronic conditions where conventional care has plateaued. Her approach is precise, evidence-aware, and unhurried.',
  specialties: 'Chronic pain, PCOS, migraine, hair loss, stress & anxiety',
  fee: 'From AED 350 (consultation)',
  languages: 'English, Hindi, Malayalam, Tamil',
  availability: 'Mon-Sat at JVC clinic',
  summaryTitle: 'Classical Ayurveda, practised with modern precision.',
  summaryParagraph1: 'Dr. Priya Nair is a DHA-licensed Ayurvedic physician (BAMS, MD-Ayurveda) and the lead Ayurveda specialist at Vedara Care Polyclinic in Jumeirah Village Circle, Dubai. With 15+ years of clinical experience across Kerala and the UAE, she treats chronic back pain, PCOS, migraine, hair loss, and stress-related disorders through classical Panchakarma, dosha-based herbal medicine, and individualised treatment protocols.',
  summaryParagraph2: 'She holds DHA Professional License DHA-P-0048291 and consults daily at our JVC clinic.',
  summaryParagraph3: '',
  education: [
    'BAMS — Rajiv Gandhi University of Health Sciences, 2007',
    'MD (Ayurveda), Kayachikitsa — Kerala University of Health Sciences, 2010',
    'Clinical Fellowship in Panchakarma — Kottakkal Arya Vaidya Sala, 2011',
    'Certificate in Integrative Medicine — AIIA New Delhi, 2014'
  ],
  licenses: [
    'Dubai Health Authority Professional License — DHA-P-0048291 (Active)',
    'DHA Healthcare Facility License — Vedara Care — HC3284',
    'CCIM Registration — 7A-28930',
    'AYUSH Ministry Registration — AY-KL-29410',
    'Issued 2010 · Renewed 2024'
  ],
  affiliations: [
    'Member, All India Ayurvedic Congress',
    'Member, National Ayurvedic Medical Association (NAMA)',
    'Member, Dubai Ayurveda Practitioners Forum',
    'Speaker — Gulf Integrative Medicine Conference, Dubai 2023',
    'Published — Journal of Ayurveda & Integrative Medicine, 2021'
  ],
  specialtiesList: [
    {
      title: 'Chronic Back Pain & Sciatica',
      description: 'Classical Ayurvedic management of lumbar disc issues, sciatica, and chronic mechanical back pain using KatiVasti, Pinda Swedana, and structured lifestyle correction. Many patients arrive after years of conventional management without lasting relief.',
      caseLoad: '800+ patients treated'
    },
    {
      title: 'PCOS & Hormonal Health',
      description: 'Over 600 PCOS cases treated through dosha-specific protocols combining Virechana, Basti, herbal medicines, and dietary regulation. Average programme length 3 to 6 months, with documented cycle regularity in 78% of patients completing the full protocol.',
      caseLoad: '600+ patients treated'
    },
    {
      title: 'Migraine & Chronic Headache',
      description: 'Migraine management through Nasya, Shirodhara, and constitutional herbal medicines. Particular focus on chronic migraine in women where hormonal and stress triggers overlap. Most patients report a 60% reduction in episode frequency within the first 8 weeks.',
      caseLoad: '450+ patients treated'
    },
    {
      title: 'Postnatal Recovery',
      description: 'Classical 45-day postnatal care — Sutika Paricharya — including Abhyanga, internal medicines, dietary guidance, and home support. Increasingly popular by Dubai’s expat mothers who want structured postpartum recovery rooted in traditional medicine.',
      caseLoad: '300+ patients treated'
    },
    {
      title: 'Stress, Anxiety & Insomnia',
      description: 'Shirodhara, Medhya Rasayana protocols, and lifestyle restructuring for chronic stress and sleep disorders. Often integrated with the wellness team for breathing and yoga therapy. Average programme: 6 to 10 weeks with measurable sleep quality outcomes.',
      caseLoad: '550+ patients treated'
    },
    {
      title: 'Hair Loss (Khalitya)',
      description: 'Combined Nasya, scalp therapies, and constitutional herbal medicines for diffuse hair loss, post-pregnancy hair fall, and androgenetic pattern. Treated alongside the dermatology team where useful. Programme length: 3 to 9 months.',
      caseLoad: '400+ patients treated'
    }
  ],
  consultationSteps: [
    {
      title: 'Pulse & Dosha Assessment',
      description: 'Dr. Nair begins with Nadi Pariksha (pulse diagnosis), tongue examination, and prakriti assessment. This is the foundation of classical Ayurveda — without it, any prescription is a guess. This alone distinguishes a genuine Ayurvedic consultation from a supplement recommendation.'
    },
    {
      title: 'Unhurried Health Conversation',
      description: 'She will spend 30 minutes understanding your symptoms, lifestyle, sleep, digestion, stress, and family history. Most patients describe this as the longest, most thorough medical conversation they have had in Dubai. You will not be hurried toward a conclusion.'
    },
    {
      title: 'Modern Diagnostic Review',
      description: 'Bring recent blood work, scans, or specialist reports. Dr. Nair reviews them alongside Ayurvedic assessment. Where modern diagnostics are needed, she orders them. Ayurveda at Vedara Care works with conventional medicine, not against it.'
    },
    {
      title: 'Personalised Treatment Plan',
      description: 'You leave with a clear written plan: which therapies, which herbal medicines, dietary corrections, and a realistic timeline. Pricing for the full programme is shared upfront. There are no surprises — financial or clinical.'
    }
  ]
};

const DoctorPage = ({ doctorData = defaultDoctorData }) => {
  return (
    <>
      <DoctorHero doctor={doctorData} />
      <DoctorProfileSummary doctor={doctorData} />
      <DoctorCredentials doctor={doctorData} />
      <DoctorSpecialties doctor={doctorData} />
      <DoctorConsultation doctor={doctorData} />
    </>
  );
};

export default DoctorPage;
