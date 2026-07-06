export const skinClinicHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Skin Clinic in JVC", active: true }
  ],
  label: "SKIN CLINIC · DHA-LICENSED · JUMEIRAH VILLAGE CIRCLE",
  title: "Your skin clinic in JVC. Tell us what concerns you — we will guide you to the right care.",
  description: "Patients arrive at our Jumeirah Village Circle clinic with many different skin concerns — and often uncertain about what treatment they actually need. This page helps you identify your primary concern and guides you to the most relevant care pathway. Whether your concern is medical or aesthetic — or you simply do not know yet — start here.",
  primaryCTA: "Identify My Skin Concern",
  secondaryCTA: "Book a Consultation Directly",
  trustSignals: [
    "DHA-licensed consultant dermatologists",
    "Medical and aesthetic guidance",
    "All skin types and ages",
    "Walking distance from Circle Mall"
  ],
  floatingCard: {
    title: "NOT SURE WHAT YOU NEED?",
    subtitle: "This page is designed for patients who know they have a skin concern but are uncertain about the right treatment pathway. The concern selector below routes you to detailed information about your specific situation."
  },
  image: "/images/skin-clinic-jvc-hero.webp",
  alt: "Skin clinic patient consultation at Vedara Care JVC Dubai"
};

export const howThisPageWorks = {
  label: "HOW THIS PAGE WORKS",
  title: "A simple way to navigate your skin care options.",
  steps: [
    {
      title: "Identify your primary concern",
      description: "Browse the concern categories below. Choose the one that best describes your situation. Many patients have multiple concerns — start with what bothers you most."
    },
    {
      title: "Learn about your concern",
      description: "Each concern links to detailed information about what it typically involves, treatment options, expected outcomes, and what consultation involves. Read at your own pace."
    },
    {
      title: "Book consultation when ready",
      description: "When you feel ready — either confident about what you need or wanting expert guidance — book a consultation. Same-week appointments typically available."
    }
  ],
  linkText: "Skip the guidance and book a consultation directly",
  linkHref: "/book"
};
export const skinConcernSelector = {
  bgColor: "bg-[#FAF8F3]",
  label: "YOUR SKIN CONCERN",
  title: "What is your primary skin concern?",
  description: "Select the category that best describes your main concern. We will guide you to relevant information.",
  types: [
    {
      number: "01",
      title: "Acne and Breakouts",
      description: "Persistent acne, hormonal breakouts, cystic acne, acne scarring, or conditions that resemble acne. Affects adolescents and increasingly adults — particularly women in their 20s-40s. Treatment options range from skincare adjustments through to specialist medical and procedural interventions.",
      commonQuestions: [
        "· Why do I have sudden adult acne?",
        "· Can my acne actually be improved?",
        "· What treatments actually work?"
      ],
      linkText: "Learn more about Acne and Breakouts",
      linkHref: "/conditions/acne-treatment-jvc/"
    },
    {
      number: "02",
      title: "Pigmentation, Dark Spots & Melasma",
      description: "Uneven skin tone, dark patches, melasma, age spots, post-inflammatory hyperpigmentation, or general uneven complexion. Particularly common in Dubai due to sun exposure and ethnic skin patterns. Highly responsive to appropriate treatment but requires genuine expertise.",
      commonQuestions: [
        "· Is my dark patch melasma?",
        "· Why does pigmentation come back?",
        "· What about underarm darkening?"
      ],
      linkText: "Learn more about Pigmentation, Dark Spots & Melasma",
      linkHref: "/conditions/pigmentation-treatment-dubai/"
    },
    {
      number: "03",
      title: "Signs of Aging — Wrinkles & Volume Loss",
      description: "Fine lines and wrinkles, deeper expression lines, loss of facial volume, sagging skin, age-related texture change. Range from preventive maintenance through to substantial rejuvenation. Multiple treatment options at different intensity levels.",
      commonQuestions: [
        "· What treatments are right for early aging?",
        "· When should I consider injectables?",
        "· What is realistic without surgery?"
      ],
      links: [
        { text: "Botulinum toxin", href: "/treatments/botulinum-toxin-dubai/" },
        { text: "Dermal fillers", href: "/treatments/dermal-fillers-dubai/" },
        { text: "Aesthetic dermatology", href: "/dermatology-clinic-jvc/#aesthetic-dermatology" }
      ]
    },
    {
      number: "04",
      title: "Hair Loss, Thinning or Scalp Concerns",
      description: "Pattern hair loss (male or female), thinning hair, sudden hair loss, scalp conditions, postnatal hair changes, or general hair quality concerns. Hair concerns affect quality of life significantly. Multiple treatment approaches available — medical, procedural, or surgical referral.",
      commonQuestions: [
        "· Why is my hair thinning?",
        "· Does PRP for hair loss actually work?",
        "· Should I consider a transplant?"
      ],
      linkText: "Learn more about Hair Loss, Thinning or Scalp Concerns",
      linkHref: "/conditions/hair-loss-treatment-jvc/"
    },
    {
      number: "05",
      title: "Eczema, Sensitive Skin or Allergic Reactions",
      description: "Persistent eczema, atopic dermatitis, sensitive reactive skin, contact dermatitis, allergic reactions, dry irritated skin, or chronic skin conditions affecting comfort and appearance. Common in children and adults alike. Comprehensive management approach essential.",
      commonQuestions: [
        "· How can I manage my child's eczema?",
        "· Why is my skin suddenly sensitive?",
        "· What products are safe for reactive skin?"
      ],
      linkText: "Learn more about Eczema, Sensitive Skin or Allergic Reactions",
      linkHref: "/conditions/eczema-treatment-dubai/"
    },
    {
      number: "06",
      title: "Moles, Skin Cancer Concerns or Suspicious Lesions",
      description: "Changing moles, new growths, suspicious spots, family history of skin cancer, or general skin cancer screening important. Particularly important in Dubai given UV exposure intensity. Early detection of skin cancers is critical and often curative.",
      commonQuestions: [
        "· Should I have my moles checked?",
        "· What does a suspicious mole look like?",
        "· How often should I have skin screening?"
      ],
      linkText: "Learn more about Moles, Skin Cancer Concerns or Suspicious Lesions",
      linkHref: "/dermatology-clinic-jvc/#medical-dermatology"
    },
    {
      number: "07",
      title: "Unwanted Hair — Removal Options",
      description: "Excess facial or body hair, hirsutism, general unwanted hair patients want to address permanently rather than waxing. Laser hair removal is the primary modern treatment but requires expert selection based on skin and hair characteristics.",
      commonQuestions: [
        "· Does laser hair removal really work?",
        "· Is it safe for my skin type?",
        "· How many sessions do I need?"
      ],
      linkText: "Learn more about Unwanted Hair",
      linkHref: "/dermatology-clinic-jvc/#aesthetic-dermatology"
    },
    {
      number: "08",
      title: "Skin Health & Maintenance — General Wellness",
      description: "Patients interested in optimising skin health, preventing aging, maintaining current skin condition, or developing a sustainable skincare regimen. Not necessarily problem-focused — interested in proactive skin care and longevity. An increasing demographic in Dubai's health-conscious population.",
      commonQuestions: [
        "· What is a good skin maintenance routine?",
        "· How can I prevent aging?",
        "· Should I consider regular treatments?"
      ],
      linkText: "Learn more about Skin Health & Maintenance",
      linkHref: "/dermatology-clinic-jvc/#aesthetic-dermatology"
    },
    {
      number: "09",
      title: "Excessive Sweating (Hyperhidrosis)",
      description: "Excessive sweating in underarms, palms, soles, or face — particularly significant in Dubai's climate. Affects daily life, clothing, and social situations. Treatment options are highly effective — botulinum toxin treatment can produce dramatic improvement for months at a time.",
      commonQuestions: [
        "· Is my sweating normal or excessive?",
        "· How does botulinum toxin treatment work for sweating?",
        "· How long does it last?"
      ],
      linkText: "Learn more about Excessive Sweating (Hyperhidrosis)",
      linkHref: "/dermatology-clinic-jvc/#medical-dermatology"
    },
    {
      number: "10",
      title: "Skin Concerns I Cannot Categorise",
      description: "Vague skin concerns, multiple concerns you cannot prioritise, unusual symptoms, or simply not knowing what your situation is. Comprehensive dermatology consultation provides expert evaluation and clear, structured guidance.",
      commonQuestions: [
        "· I do not know what is happening with my skin",
        "· I have multiple concerns",
        "· Where do I start?"
      ],
      linkText: "Learn more about Skin Concerns I Cannot Categorise",
      linkHref: "/book"
    }
  ]
};

export const skinClinicPatientPreferences = {
  bgColor: "bg-[#F0EAE0]",
  label: "PATIENT PREFERENCES",
  title: "Multiple languages. Discretion. Patient preferences accommodated.",
  description: "Our patient population is diverse and we accommodate the preferences that matter to you. Female and male dermatologists available. Multiple languages including Arabic, English, Hindi, and Urdu. Modest treatment options available. Privacy and discretion throughout your visit. Family members or chaperones welcomed if you prefer. Cultural and religious preferences respected. Patient comfort prioritised throughout.",
  additionalNote: "These accommodations are not afterthoughts — they are part of how our clinic operates. The Dubai population is genuinely diverse and excellent skin care must serve everyone effectively. We are committed to making every patient feel welcomed and appropriately cared for regardless of background, gender, religion, or specific preferences.",
  preferencesCard: {
    label: "YOUR PREFERENCES",
    preferences: [
      "Female or male dermatologist preference",
      "Arabic, English, Hindi, Urdu language options",
      "Modest treatment accommodations",
      "Private treatment rooms",
      "Discreet booking and visit process",
      "Cultural and religious preferences respected",
      "Family member presence welcomed"
    ],
    footerNote: "Just ask: Mention any preferences when you book — we will accommodate them."
  }
};

export const skinClinicPricing = {
  bgColor: "bg-white",
  label: "COST GUIDANCE",
  title: "Understanding what skin care costs at our clinic.",
  description: "Costs vary substantially based on what your specific situation requires — from straightforward consultations through to comprehensive treatment programmes. Some general guidance:",
  services: [
    { name: "Initial dermatology consultation", price: "AED [X]" },
    { name: "Follow-up consultation", price: "AED [X]" },
    { name: "Skin cancer screening with dermoscopy", price: "AED [X]" },
    { name: "Acne treatment programmes", price: "AED [X]" },
    { name: "Pigmentation treatment programmes", price: "AED [X]" },
    { name: "Aesthetic treatments (botulinum toxin, fillers, lasers)", price: "AED [X]" }
  ],
  footerText: "Complete pricing details available on our dermatology clinic page →",
  insuranceText: "Insurance covers medical dermatology with appropriate justification. Cosmetic treatments typically self-pay. WhatsApp us for specific coverage questions."
};

export const skinClinicFaqs = {
  bgColor: "bg-[#FAF7F2]",
  label: "COMMON QUESTIONS",
  sidebarLinks: [
    { text: "Full dermatology clinic details", href: "/dermatology-clinic-jvc" },
    { text: "Browse all conditions", href: "/conditions" }
  ],
  title: "Questions patients ask when exploring skin care options.",
  description: "For specific procedural and clinical questions, see our dermatology clinic page.",
  primaryCtaText: "Ask Our Team on WhatsApp",
  primaryCtaHref: "https://wa.me/971555867466X",
  secondaryCtaText: "Full dermatology clinic details →",
  secondaryCtaHref: "/dermatology-clinic-jvc",
  faqs: [
    {
      question: "What is the difference between a skin clinic and a dermatologist?",
      answer: "In practice, these terms describe the same thing — a clinical setting where dermatologists treat skin conditions. 'Skin clinic' tends to feel more accessible and consumer-focused; 'dermatologist' emphasises the specialist medical qualification. Vedara Care is both — a skin clinic staffed by DHA-licensed consultant dermatologists. Whichever term you used to find us, you have arrived at the same expert care."
    },
    {
      question: "I am not sure what kind of treatment I need — should I book a consultation?",
      answer: "Yes, this is a common and appropriate reason to book. Many patients arrive without specific treatment goals — they simply know they have skin concerns and want expert assessment. Initial consultation provides exactly that: comprehensive evaluation, identification of your specific concerns, honest discussion of options, and clear guidance on next steps. There is no obligation to proceed with treatment after consultation."
    },
    {
      question: "How do I know if my concern is medical or aesthetic?",
      answer: "Some concerns are clearly medical (acne, eczema, suspicious lesions, skin cancer screening) and some are clearly aesthetic (wrinkle treatment, lip enhancement, laser hair removal). Many concerns sit in between — pigmentation can be medical or aesthetic; aging concerns can be medical (sun damage repair) or purely cosmetic. Our consultation helps identify the medical and aesthetic components of your specific situation."
    },
    {
      question: "Where in Dubai is your skin clinic?",
      answer: "Our DHA-licensed clinic is in Jumeirah Village Circle (JVC), Dubai — walking distance from Circle Mall, three minutes from FIVE Jumeirah Village Hotel, and five minutes from JSS Private School. Free patient parking. Easy access from Sheikh Mohammed Bin Zayed Road and Al Khail Road. Patients travel to us from JVT, Al Barsha South, Sports City, Motor City, Arjan, Dubai Hills, Marina, Downtown, Palm Jumeirah, Mirdif, and across Dubai."
    },
    {
      question: "Should I research my specific concern before booking or just come for consultation?",
      answer: "Both approaches work. Some patients prefer to research first — read about their concern, understand what treatments exist, then book consultation with informed questions. Others prefer to come for consultation first and have the dermatologist guide their education. Use whichever approach suits your decision-making style. This hub page supports the research approach by linking to detailed information about specific concerns."
    },
    {
      question: "Do you accommodate cultural and religious preferences?",
      answer: "Yes — substantially. Female and male dermatologists available based on patient preference. Modest treatment accommodations available. Multiple languages including Arabic, English, Hindi, and Urdu. Family member or chaperone presence welcomed. Cultural and religious preferences respected throughout. Mention preferences when you book — we accommodate them."
    },
    {
      question: "Can I bring my children for skin concerns?",
      answer: "Yes — we treat pediatric and adolescent dermatology including childhood eczema, teen acne, and other concerns. Family appointments can be arranged. Pediatric dermatology has specific considerations different from adult dermatology — we have appropriate expertise."
    },
    {
      question: "I have multiple skin concerns — how do we prioritise?",
      answer: "This is very common. Initial consultation includes comprehensive assessment of all your concerns, identification of which are most affecting your quality of life, recognition of which concerns may be related (some share underlying causes), and recommendation of a logical treatment sequence. Multiple concerns rarely require simultaneous treatment of everything — most patients benefit from prioritised pathways."
    },
    {
      question: "What if I am just exploring options without commitment?",
      answer: "That is appropriate and welcomed. Many consultations are informational rather than treatment-focused. You can come for consultation to understand what is possible, what is realistic, what is involved, and what it costs — then decide later whether to proceed with any treatment. We do not pressure patients toward decisions during consultation."
    },
    {
      question: "Are your treatments safe for my skin type?",
      answer: "This depends on which treatments and which skin type. Our consultant dermatologists have expertise across all Fitzpatrick skin types (I–VI) — particularly important for darker skin types where treatment selection differs significantly from lighter skin. Treatment selection always considers your specific skin type. We do not offer treatments inappropriate for your specific skin characteristics."
    },
    {
      question: "How do I book a consultation?",
      answer: "Three ways: (1) WhatsApp — fastest response, ideal for general inquiry or asking about specific situations. (2) Call us directly — available 9 AM to 9 PM seven days a week. (3) Book online through our website. For your first appointment, please bring: insurance card if applicable, list of current medications and skincare products, photos of any specific concerns if helpful, and any previous treatment records."
    },
    {
      question: "Do I need a GP referral?",
      answer: "No — patients can self-refer directly. Some insurance plans require GP referral for specialist consultation coverage; check with your insurance about specific requirements. Most patients book directly without referral."
    },
    {
      question: "How quickly can I be seen?",
      answer: "Standard appointments typically within 1–2 weeks. Urgent concerns (suspicious lesions, severe acute presentations) often accommodated within 2–3 days. Pre-event preparation appointments depend on event timing. WhatsApp us for fastest response on current availability."
    },
    {
      question: "What if I have already had treatments elsewhere that did not produce good results?",
      answer: "A substantial number of patients arrive after unsatisfactory treatment elsewhere. This is normal in dermatology. Initial consultation includes honest assessment of what previous treatments addressed and what they did not, identification of what your specific situation needs, and treatment recommendations that account for your treatment history. We provide a fresh expert perspective."
    },
    {
      question: "What if I am uncertain about cosmetic treatments — am I right for this clinic?",
      answer: "Yes — uncertainty is welcome. Many patients have considered cosmetic treatments without being sure they want to proceed. Informational consultation provides understanding without commitment. We respect patients deciding not to pursue cosmetic treatments after consultation — your decision is yours. We do not measure consultation success by treatment conversion."
    },
  ]
};

export const skinClinicSpecificSituations = {
  label: "SPECIFIC SITUATIONS",
  title: "Skin care for specific situations and life stages.",
  description: "Some patients have skin concerns related to specific life stages or situations. Guidance for the most common patterns.",
  items: [
    {
      number: "01",
      title: "Pre-Wedding & Pre-Event Skin Preparation",
      description: "A common patient pattern in Dubai. Building toward a specific event date where skin should look its best requires a structured programme — most treatments need lead time. Pre-event programmes typically start 3–6 months before the event for optimal outcomes.",
      linkText: "Book a pre-event consultation →",
      linkHref: "/book"
    },
    {
      number: "02",
      title: "Postnatal Skin Recovery",
      description: "After pregnancy and birth, many women experience changes — pigmentation worsening, hormonal acne, hair loss, or general skin changes. Specific postnatal programmes integrate dermatology with appropriate timing for breastfeeding mothers, where some treatments are contraindicated.",
      linkText: "Explore postnatal care →",
      linkHref: "/conditions/postnatal-ayurveda-dubai/"
    },
    {
      number: "03",
      title: "Adolescent & Teenage Skin",
      description: "Acne and skin concerns are particularly difficult for adolescents. Comprehensive approach including age-appropriate treatments, parental education, school-friendly schedules, and confidence-supporting care. Adolescent dermatology requires sensitivity — what works for adults may not be appropriate for teenagers.",
      linkText: "Learn about adolescent dermatology →",
      linkHref: "/dermatology-clinic-jvc"
    },
    {
      number: "04",
      title: "Men's Skin Care",
      description: "An increasing demographic of men seeking dermatology. Common concerns: acne, sun damage, hair loss from outdoor activities, body skin concerns. Men's skin care often involves different priorities and treatment patterns — a male-focused approach is available.",
      linkText: "Explore men's dermatology →",
      linkHref: "/dermatology-clinic-jvc"
    },
    {
      number: "05",
      title: "New to Dubai — Adjusting to Climate",
      description: "Recently relocated to Dubai? The climate produces skin changes specific expertise — intense UV exposure, sun damage, melasma, photo-aging, heat rash, fungal conditions, sweat-related concerns. Adjustment-period skin care requires specific guidance.",
      linkText: "Read climate skin guidance →",
      linkHref: "/dermatology-clinic-jvc"
    },
    {
      number: "06",
      title: "Building a Skincare Routine",
      description: "Patients with no significant concerns but wanting expert guidance on appropriate skincare. Different products and routines suit different skin types, ages, lifestyles, and goals. Expert consultation can identify an appropriate routine without unnecessary product purchases.",
      linkText: "Book a skincare consultation →",
      linkHref: "/book"
    }
  ]
};
export const skinClinicWhenToSeeSpecialist = {
  label: "GUIDANCE",
  bgColor: "bg-[#FAF7F2]",
  title: "When does your skin concern need a specialist?",
  description: "Not every skin concern requires specialist consultation. Honest guidance about when professional help is most valuable.",
  sections: [
    {
      title: "",
      content: "Some skin concerns benefit from professional consultation more than others. Honest guidance helps you make appropriate decisions about your care."
    },
    {
      title: "When specialist consultation is particularly valuable",
      content: "Specialist dermatology consultation is most valuable when: (1) you have persistent concerns that have not responded to over-the-counter approaches, (2) you have concerns that affect quality of life or confidence substantially, (3) you have suspicious lesions or changes requiring expert assessment, (4) you have chronic conditions requiring specialist management, (5) you are considering significant treatments (lasers, injectables, surgical procedures) where expert evaluation matters, (6) you have multiple concerns where comprehensive assessment helps prioritise, or (7) you have concerns where home approaches could potentially worsen the situation."
    },
    {
      title: "When self-care may be appropriate first",
      content: "For some concerns, structured self-care is reasonable to try before specialist consultation: minor occasional breakouts, mild dryness, occasional irritation from new products. If self-care does not produce satisfactory results within 4–8 weeks, specialist consultation becomes more valuable."
    },
    {
      title: "When situations are urgent",
      content: "Some situations warrant urgent specialist consultation: rapidly changing moles or new pigmented lesions, lesions that bleed or do not heal, severe reactions or rapidly spreading rashes, suspected skin infections you cannot manage. Urgent consultation usually means within days rather than weeks."
    },
    {
      title: "When cosmetic concerns warrant consultation",
      content: "For cosmetic concerns, the right time for consultation is when you are interested in understanding your options — not necessarily when you are ready to book treatment immediately. Many patients have informational consultations to learn what is possible, what is realistic, and what costs before making decisions. There is no obligation to proceed with treatment after consultation."
    }
  ],
  quickGuide: {
    label: "QUICK GUIDE",
    sections: [
      {
        label: "SEE A SPECIALIST SOON FOR:",
        items: [
          "Changing moles or new pigmented growths",
          "Lesions that bleed or do not heal",
          "Severe reactions or rapidly spreading rashes",
          "Suspected skin infections",
          "Substantial concerns you cannot manage"
        ]
      },
      {
        label: "SPECIALIST CONSULTATION VALUABLE FOR:",
        items: [
          "Persistent concerns despite home approaches",
          "Multiple skin concerns",
          "Chronic conditions",
          "Considering significant treatments",
          "Wanting expert assessment"
        ]
      },
      {
        label: "SELF-CARE FIRST REASONABLE FOR:",
        items: [
          "Minor occasional concerns",
          "General skincare routine building",
          "Mild concerns under 4–8 weeks"
        ]
      },
      {
        label: "ALWAYS REASONABLE:",
        items: [
          "Informational consultations",
          "Annual skin cancer screening",
          "Pre-event preparation discussions"
        ]
      }
    ],
    buttonText: "Book Consultation",
    buttonHref: "/book"
  }
};

export const skinClinicFinalCTA = {
  bgColor: "bg-white",
  label: "READY TO TAKE THE NEXT STEP?",
  title: "Whether you are confident or uncertain — start where you are.",
  description: "If reading this page has helped you identify your concern and you want detailed information, follow the routing to the specific information for your situation. If you would prefer expert guidance from the start, book a consultation directly — our consultant dermatologists provide comprehensive assessment regardless of how clearly you can articulate your concerns.",
  button1Text: "Book Skin Consultation",
  button1Href: "/book",
  button2Text: "Read Detailed Dermatology Information →",
  button2Href: "/dermatology-clinic-jvc",
  footer: "Initial consultation from AED 500 · Walking distance from Circle Mall, JVC · DHA-licensed consultant dermatologists · All skin types · Multiple languages · Female and male dermatologists available · Insurance for medical dermatology"
};

export const skinClinicRelatedPages = {
  bgColor: "bg-[#F5F0E8]",
  label: "EXPLORE",
  title: "Continue your skin care exploration",
  linkText: "Browse All Conditions & Treatments",
  linkHref: "/conditions",
  pages: [
    {
      title: "Full Dermatology Clinic Details",
      description: "Comprehensive information about our dermatology practice — full service descriptions, team details, complete pricing, detailed FAQs.",
      href: "/dermatology-clinic-jvc"
    },
    {
      title: "Other Vedara Service Pillars",
      description: "Vedara Care also offers Ayurveda, physiotherapy, and wellness services. A holistic approach combining multiple disciplines.",
      href: "/"
    },
    {
      title: "Book a Consultation Directly",
      description: "Skip the exploration and book a consultation. Same-week appointments typically available. Discuss your concerns with expert guidance.",
      href: "/book"
    },
    {
      title: "Browse All Conditions & Treatments",
      description: "For patients who want to explore comprehensively.",
      href: "/conditions"
    }
  ]
};

export const skinClinicWhatToExpect = {
  bgColor: "bg-white",
  label: "WHAT TO EXPECT",
  title: "What happens when you book a consultation.",
  subtitle: "A brief overview — comprehensive details are in our dermatology clinic page.",
  paragraphs: [
    "Whether you arrived at this page knowing exactly what you need or completely uncertain — your consultation provides expert assessment and clear next-step guidance. Initial consultations are 45–60 minutes — substantially longer than rushed appointments at many clinics. Comprehensive skin examination, discussion of your specific concerns, honest assessment of options, realistic outcome expectations, cost transparency, and a clear treatment plan.",
    "Some patients book consultation for specific treatments after reading detailed information. Others book consultation for expert guidance when they are uncertain. Both are appropriate. Your consultation adapts to your specific situation."
  ],
  primaryButton: {
    text: "Book Consultation",
    href: "/book"
  },
  secondaryButton: {
    text: "Read full consultation details on our dermatology page",
    href: "/dermatology-clinic-jvc/#consultation"
  }
};
