import React from 'react';

const SportsPhysiotherapyModalities = () => {
  const modalities = [
    {
      number: "01",
      title: "Manual Therapy",
      description: "Skilled hands-on treatment — joint mobilisation, soft tissue work, manual stretching, myofascial release, and manipulation where appropriate. The foundational sports physiotherapy technique. Particularly valuable for acute injury management, restricted joint mobility, and chronic soft tissue patterns."
    },
    {
      number: "02",
      title: "Dry Needling",
      description: "Fine needles inserted into trigger points and tight muscle bands to release tension and reduce pain. Particularly effective for chronic muscle patterns, certain sport-related pain syndromes, and persistent post-injury muscle tension. Performed by certified physiotherapists."
    },
    {
      number: "03",
      title: "Shockwave Therapy",
      description: "Focused or radial shockwave therapy for chronic tendinopathies — plantar fasciitis, Achilles tendinopathy, patellar tendinopathy, lateral epicondylitis, rotator cuff calcific tendinopathy. Evidence-based first-line treatment for chronic tendon conditions that have not responded to other approaches."
    },
    {
      number: "04",
      title: "Biomechanical Analysis & Gait Assessment",
      description: "Detailed analysis of movement patterns specific to your sport. Running gait analysis, sport-specific movement screening, single-leg and bilateral functional testing. Identifies the movement patterns contributing to injury or limiting performance."
    },
    {
      number: "05",
      title: "Sport-Specific Exercise Prescription",
      description: "Progressive exercise programmes tailored to your sport. Not generic 'physio exercises' but specific protocols for your sport's demands. Documented in writing with video guidance for home performance."
    },
    {
      number: "06",
      title: "Return-to-Sport Testing",
      description: "Objective testing before clearing return to sport — strength testing (isokinetic or hand-held dynamometry), functional hop tests, change-of-direction tests, sport-specific drills. Evidence-based criteria for return-to-sport clearance."
    }
  ];

  return (
    <section className="bg-white" style={{ padding: '96px 24px' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgb(201, 168, 76)' }}>
            <span className="inline-block w-6 h-px mr-2 align-middle" style={{ background: 'rgb(201, 168, 76)' }}></span>
            Techniques & Modalities
            <span className="inline-block w-6 h-px ml-2 align-middle" style={{ background: 'rgb(201, 168, 76)' }}></span>
          </p>
          <h2 className="text-3xl sm:text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500, color: 'rgb(26, 26, 26)' }}>
            Evidence-based sports physiotherapy techniques.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modalities.map((modality, index) => (
            <div key={index} className="rounded-lg p-7 transition-all hover:shadow-md" style={{ background: 'rgb(250, 247, 242)' }}>
              <p className="text-4xl mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(201, 168, 76)', fontWeight: 300 }}>
                {modality.number}
              </p>
              <h4 className="text-lg mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500, color: 'rgb(26, 26, 26)' }}>
                {modality.title}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: 'rgb(107, 107, 107)', lineHeight: 1.7 }}>
                {modality.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsPhysiotherapyModalities;
