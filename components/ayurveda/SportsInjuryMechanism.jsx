import React from 'react';

const SportsInjuryMechanism = () => {
  const phases = [
    {
      number: "01",
      title: "Phase 1 — Acute Assessment and Pain Management",
      description: "Same-day or next-day assessment for acute injuries. Detailed history including injury mechanism, sport-specific demands, and competitive timeline. Physical examination with sport-specific tests. Imaging review if relevant. Initial treatment focused on pain reduction, swelling management, and tissue protection. Activity modification guidance — what you can and cannot do during the early phase."
    },
    {
      number: "02",
      title: "Phase 2 — Active Recovery and Tissue Restoration",
      description: "Manual therapy targeted at the affected tissues — joint mobilisation, soft tissue work, dry needling for trigger points and muscle tension. Modalities as appropriate (shockwave therapy for chronic tendinopathies, IFC for pain management, ultrasound for specific applications). Early-stage exercise rehabilitation beginning with isometric loading, progressing to controlled dynamic loading as tissues tolerate."
    },
    {
      number: "03",
      title: "Phase 3 — Sport-Specific Progression",
      description: "Where sports physiotherapy diverges most from general physiotherapy. Exercise prescription progresses through general strengthening to sport-specific movement patterns. For padel players: lateral movement, racquet swing biomechanics, change-of-direction protocols. For runners: running gait analysis, return-to-running protocols, surface and volume progression. For football players: cutting, change of direction, jumping, sport-specific agility. Each sport has its own progression sequence."
    },
    {
      number: "04",
      title: "Phase 4 — Return-to-Sport Testing and Clearance",
      description: "Before clearing patients to return to sport, we apply objective return-to-sport criteria — strength benchmarks (typically 90% of unaffected side), functional performance tests (hop tests, change-of-direction tests, sport-specific drills), and time-from-injury minimums based on tissue healing biology. Premature return to sport is the leading cause of re-injury. Patients who follow proper return-to-sport protocols have significantly lower re-injury rates than those who self-manage their return."
    },
    {
      number: "05",
      title: "Phase 5 — Prevention and Performance",
      description: "For active patients, prevention matters as much as treatment. After injury resolution, structured prevention programmes address the underlying factors that contributed to the injury — strength asymmetries, mobility limitations, movement pattern issues, training load management. For padel players this might mean rotator cuff prevention; for runners, hip strength and gait optimisation; for gym athletes, mobility work and form refinement."
    }
  ];

  return (
    <section style={{ background: 'rgb(250, 247, 242)', padding: '96px 24px' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgb(201, 168, 76)' }}>
            <span className="inline-block w-6 h-px mr-2 align-middle" style={{ background: 'rgb(201, 168, 76)' }}></span>
            The Approach
            <span className="inline-block w-6 h-px ml-2 align-middle" style={{ background: 'rgb(201, 168, 76)' }}></span>
          </p>
          <h2 className="text-3xl sm:text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500, color: 'rgb(26, 26, 26)' }}>
            How sports injury physiotherapy actually works at our JVC clinic.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[55fr_45fr] gap-16 items-start">
          <div>
            <p className="text-base mb-8 leading-relaxed" style={{ color: 'rgb(26, 26, 26)', lineHeight: 1.8 }}>
              Sports injury physiotherapy is meaningfully different from general musculoskeletal physiotherapy. The patient is typically younger, more active, more motivated, more time-pressured (they want to return to sport), and more medically literate. The treatment must reflect these differences.
            </p>

            <div className="space-y-8">
              {phases.map((phase, index) => (
                <div key={index} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded flex items-center justify-center text-sm font-bold" style={{ background: 'rgb(27, 67, 50)', color: 'rgb(201, 168, 76)', fontFamily: 'Fraunces, Georgia, serif' }}>
                    {phase.number}
                  </div>
                  <div>
                    <h3 className="text-lg mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500, color: 'rgb(26, 26, 26)' }}>
                      {phase.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgb(107, 107, 107)', lineHeight: 1.7 }}>
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="mt-10 text-xl leading-relaxed" style={{ fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic', color: 'rgb(201, 168, 76)', borderLeft: '3px solid rgb(201, 168, 76)', paddingLeft: '24px' }}>
              "Return to sport is not just an absence of pain — it is meeting objective criteria for strength, function, and tissue healing. Anyone who clears you back to sport without testing is gambling with your career or recreation."
            </blockquote>
          </div>

          <div className="sticky top-24">
            <div className="relative rounded-xl overflow-hidden" style={{ borderRadius: '12px', background: 'rgb(27, 67, 50)' }}>
              <img src="/images/return-to-sport-testing-vedara-jvc.webp" alt="Return-to-sport testing at Vedara Care JVC sports physiotherapy clinic" className="w-full object-cover" style={{ height: '500px' }} />
              <div className="absolute inset-0 rounded-xl" style={{ background: 'linear-gradient(to top, rgba(27, 67, 50, 0.4) 0%, transparent 60%)' }}></div>
            </div>
            <div className="mt-6 p-6 rounded-lg" style={{ background: 'rgb(27, 67, 50)', color: 'rgb(250, 247, 242)' }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'rgb(201, 168, 76)' }}>
                5-PHASE PROTOCOL
              </p>
              <p className="text-sm leading-relaxed">
                Every patient follows our structured 5-phase return-to-sport framework — from acute assessment through to objective clearance and prevention programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsInjuryMechanism;
