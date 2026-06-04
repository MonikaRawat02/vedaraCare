import React from 'react';

const SportsInjuryTypes = () => {
  const injuryTypes = [
    {
      title: 'Padel Elbow / Tennis Elbow',
      subtitle: 'Lateral epicondylitis',
      description: 'Pain on the outer elbow, often from racquet sports. Manual therapy, dry needling, eccentric loading protocols.'
    },
    {
      title: "Golfer's Elbow",
      subtitle: 'Medial epicondylitis',
      description: 'Pain on the inner elbow. Similar treatment approach to lateral epicondylitis with sport-specific modifications.'
    },
    {
      title: 'Rotator Cuff Injuries',
      subtitle: 'Supraspinatus tendinopathy, partial tears, impingement',
      description: 'Shoulder pain particularly with overhead movement. Sport-specific in padel, tennis, swimming, weightlifting.'
    },
    {
      title: 'ACL Injuries & Reconstruction Recovery',
      subtitle: 'Anterior cruciate ligament',
      description: 'Major knee ligament injury common in football and pivoting sports. Surgical or conservative pathway; 6–12 month rehab.'
    },
    {
      title: 'Meniscus Injuries',
      subtitle: 'Medial or lateral meniscus tears',
      description: 'Cartilage injuries in the knee. Surgical or conservative management. Common across cutting sports and gym training.'
    },
    {
      title: 'Hamstring Strains',
      subtitle: 'Grade 1, 2, or 3 hamstring tears',
      description: 'Common in running, football, sprinting. Different rehabilitation by grade and location of injury.'
    },
    {
      title: 'Ankle Sprains',
      subtitle: 'Lateral ligament sprains, high ankle sprains',
      description: 'The most common acute sports injury. Proper rehabilitation prevents the chronic instability that often follows poorly managed sprains.'
    },
    {
      title: "Runner's Knee",
      subtitle: 'Patellofemoral pain syndrome',
      description: 'Anterior knee pain in runners. Often biomechanical — addressed through specific exercise prescription and gait analysis.'
    },
    {
      title: 'IT Band Syndrome',
      subtitle: 'Iliotibial band friction syndrome',
      description: 'Lateral knee pain in runners and cyclists. Soft tissue work combined with hip strengthening protocols.'
    },
    {
      title: 'Achilles Tendinopathy',
      subtitle: 'Mid-portion or insertional Achilles issues',
      description: 'Common in runners and active patients. Eccentric loading protocols are evidence-based first-line treatment.'
    },
    {
      title: 'Shin Splints & Stress Fractures',
      subtitle: 'Medial tibial stress syndrome',
      description: 'Common in runners. Differential diagnosis from stress fractures is important. Load management protocols.'
    },
    {
      title: 'Lower Back Strains',
      subtitle: 'Acute and chronic mechanical low back pain',
      description: 'Common across nearly all sports. Specific protocols depending on sport-specific demands and injury mechanism.'
    }
  ];

  return (
    <section className="bg-white" style={{ padding: '96px 24px' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgb(201, 168, 76)' }}>
            <span className="inline-block w-6 h-px mr-2 align-middle" style={{ background: 'rgb(201, 168, 76)' }}></span>
            By Injury Type
            <span className="inline-block w-6 h-px ml-2 align-middle" style={{ background: 'rgb(201, 168, 76)' }}></span>
          </p>
          <h2 className="text-3xl sm:text-4xl" style={{ fontFamily: 'var(--font-display, Fraunces, Georgia, serif)', fontWeight: 500, color: 'rgb(26, 26, 26)' }}>
            Specific injury types we treat at our JVC clinic.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {injuryTypes.map((injury, index) => (
            <div 
              key={index}
              className="rounded-lg p-6 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md group"
              style={{ background: 'rgb(250, 247, 242)', borderLeft: '3px solid rgb(201, 168, 76)' }}
            >
              <h4 className="text-base mb-1" style={{ fontFamily: 'var(--font-display, Fraunces, Georgia, serif)', fontWeight: 500, color: 'rgb(26, 26, 26)' }}>
                {injury.title}
              </h4>
              <p className="text-xs mb-3" style={{ color: 'rgb(201, 168, 76)', fontStyle: 'italic' }}>
                {injury.subtitle}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgb(107, 107, 107)', lineHeight: 1.6 }}>
                {injury.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-sm" style={{ color: 'rgb(107, 107, 107)' }}>
            Did not find your injury? <a href="https://wa.me/971501234567" className="underline hover:opacity-70 transition-opacity" style={{ color: 'rgb(27, 67, 50)' }}>Contact us — we treat the full range of sports injuries →</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SportsInjuryTypes;
