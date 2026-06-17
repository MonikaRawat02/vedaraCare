import React from 'react';

const SportsProtocols = () => {
  return (
    <section style={{ background: 'rgb(240, 235, 225)', padding: '96px 24px' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p 
            className="text-xs font-bold tracking-widest uppercase mb-4" 
            style={{ color: 'rgb(201, 168, 76)' }}
          >
            <span 
              className="inline-block w-6 h-px mr-2 align-middle" 
              style={{ background: 'rgb(201, 168, 76)' }}
            ></span>
            By Sport
            <span 
              className="inline-block w-6 h-px ml-2 align-middle" 
              style={{ background: 'rgb(201, 168, 76)' }}
            ></span>
          </p>
          <h2 
            className="text-3xl sm:text-4xl mb-4" 
            style={{ fontFamily: 'var(--font-display, Fraunces, Georgia, serif)', fontWeight: 500, color: 'rgb(26, 26, 26)' }}
          >
            Specific sport-injury protocols at our JVC clinic.
          </h2>
          <p 
            className="text-base max-w-2xl mx-auto" 
            style={{ color: 'rgb(107, 107, 107)', lineHeight: 1.7 }}
          >
            Different sports produce different injury patterns. The same diagnosis means different things across sports — and requires different rehabilitation protocols. Our sports physiotherapists tailor treatment to your specific sport and movement demands.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            className="bg-white rounded-lg p-8 transition-all hover:-translate-y-1 hover:shadow-lg" 
            style={{ borderTop: '4px solid rgb(201, 168, 76)' }}
          >
            <h4 
              className="text-xl mb-3" 
              style={{ fontFamily: 'var(--font-display, Fraunces, Georgia, serif)', fontWeight: 500, color: 'rgb(26, 26, 26)' }}
            >
              <a href="/conditions/tennis-elbow-dubai/">
Padel
              </a>
            </h4>
            <p 
              className="text-xs mb-3" 
              style={{ color: 'rgb(201, 168, 76)', fontStyle: 'italic' }}
            >
              Common injuries:
            </p>
            <ul className="space-y-1 mb-4">
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Padel elbow (lateral epicondylitis)
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Rotator cuff impingement
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Lower back strain
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Wrist tendinopathies
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Ankle sprains
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Knee meniscus injuries
              </li>
            </ul>
            <div className="pt-3 border-t border-black/5">
              <p className="text-xs" style={{ color: 'rgb(107, 107, 107)' }}>
                <span className="font-semibold" style={{ color: 'rgb(26, 26, 26)' }}>Typical recovery: </span>
                3–8 weeks for most injuries; 8–16 weeks for meniscus
              </p>
            </div>
          </div>
          
          <div 
            className="bg-white rounded-lg p-8 transition-all hover:-translate-y-1 hover:shadow-lg" 
            style={{ borderTop: '4px solid rgb(201, 168, 76)' }}
          >
            <h4 
              className="text-xl mb-3" 
              style={{ fontFamily: 'var(--font-display, Fraunces, Georgia, serif)', fontWeight: 500, color: 'rgb(26, 26, 26)' }}
            >
              Running
            </h4>
            <p 
              className="text-xs mb-3" 
              style={{ color: 'rgb(201, 168, 76)', fontStyle: 'italic' }}
            >
              Common injuries:
            </p>
            <ul className="space-y-1 mb-4">
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Runner's knee (patellofemoral pain)
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                IT band syndrome
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Shin splints (medial tibial stress syndrome)
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Plantar fasciitis
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Achilles tendinopathy
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Stress fractures
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Hamstring strains
              </li>
            </ul>
            <div className="pt-3 border-t border-black/5">
              <p className="text-xs" style={{ color: 'rgb(107, 107, 107)' }}>
                <span className="font-semibold" style={{ color: 'rgb(26, 26, 26)' }}>Typical recovery: </span>
                4–12 weeks depending on severity; stress fractures longer
              </p>
            </div>
          </div>
          
          <div 
            className="bg-white rounded-lg p-8 transition-all hover:-translate-y-1 hover:shadow-lg" 
            style={{ borderTop: '4px solid rgb(201, 168, 76)' }}
          >
            <h4 
              className="text-xl mb-3" 
              style={{ fontFamily: 'var(--font-display, Fraunces, Georgia, serif)', fontWeight: 500, color: 'rgb(26, 26, 26)' }}
            >
              Gym Training
            </h4>
            <p 
              className="text-xs mb-3" 
              style={{ color: 'rgb(201, 168, 76)', fontStyle: 'italic' }}
            >
              Common injuries:
            </p>
            <ul className="space-y-1 mb-4">
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Lower back strain
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Rotator cuff impingement
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Knee tendinopathies
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Hip flexor strains
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Wrist injuries
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Acute muscle strains
              </li>
            </ul>
            <div className="pt-3 border-t border-black/5">
              <p className="text-xs" style={{ color: 'rgb(107, 107, 107)' }}>
                <span className="font-semibold" style={{ color: 'rgb(26, 26, 26)' }}>Typical recovery: </span>
                2–8 weeks for most overuse injuries
              </p>
            </div>
          </div>
          
          <div 
            className="bg-white rounded-lg p-8 transition-all hover:-translate-y-1 hover:shadow-lg" 
            style={{ borderTop: '4px solid rgb(201, 168, 76)' }}
          >
            <h4 
              className="text-xl mb-3" 
              style={{ fontFamily: 'var(--font-display, Fraunces, Georgia, serif)', fontWeight: 500, color: 'rgb(26, 26, 26)' }}
            >
              Football & Futsal
            </h4>
            <p 
              className="text-xs mb-3" 
              style={{ color: 'rgb(201, 168, 76)', fontStyle: 'italic' }}
            >
              Common injuries:
            </p>
            <ul className="space-y-1 mb-4">
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Hamstring strains
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                ACL injuries
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Meniscus tears
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Ankle sprains
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Groin injuries
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Quadriceps strains
              </li>
            </ul>
            <div className="pt-3 border-t border-black/5">
              <p className="text-xs" style={{ color: 'rgb(107, 107, 107)' }}>
                <span className="font-semibold" style={{ color: 'rgb(26, 26, 26)' }}>Typical recovery: </span>
                2–6 weeks for soft tissue; 6–12 months for ACL
              </p>
            </div>
          </div>
          
          <div 
            className="bg-white rounded-lg p-8 transition-all hover:-translate-y-1 hover:shadow-lg" 
            style={{ borderTop: '4px solid rgb(201, 168, 76)' }}
          >
            <h4 
              className="text-xl mb-3" 
              style={{ fontFamily: 'var(--font-display, Fraunces, Georgia, serif)', fontWeight: 500, color: 'rgb(26, 26, 26)' }}
            >
            <a href="/conditions/tennis-elbow-dubai/">
                Tennis Elbow / Golfer's Elbow
              </a>
            </h4>
            <p 
              className="text-xs mb-3" 
              style={{ color: 'rgb(201, 168, 76)', fontStyle: 'italic' }}
            >
              Common injuries:
            </p>
            <ul className="space-y-1 mb-4">
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Tennis elbow (lateral epicondylitis)
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Rotator cuff injuries
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Lower back strain
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Wrist tendinopathies
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Ankle sprains
              </li>
            </ul>
            <div className="pt-3 border-t border-black/5">
              <p className="text-xs" style={{ color: 'rgb(107, 107, 107)' }}>
                <span className="font-semibold" style={{ color: 'rgb(26, 26, 26)' }}>Typical recovery: </span>
                4–12 weeks depending on injury
              </p>
            </div>
          </div>
          
          <div 
            className="bg-white rounded-lg p-8 transition-all hover:-translate-y-1 hover:shadow-lg" 
            style={{ borderTop: '4px solid rgb(201, 168, 76)' }}
          >
            <h4 
              className="text-xl mb-3" 
              style={{ fontFamily: 'var(--font-display, Fraunces, Georgia, serif)', fontWeight: 500, color: 'rgb(26, 26, 26)' }}
            >
              Golf
            </h4>
            <p 
              className="text-xs mb-3" 
              style={{ color: 'rgb(201, 168, 76)', fontStyle: 'italic' }}
            >
              Common injuries:
            </p>
            <ul className="space-y-1 mb-4">
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Golfer's elbow (medial epicondylitis)
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Lower back strain
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Rotator cuff injuries
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Wrist injuries
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Hip mobility restrictions
              </li>
            </ul>
            <div className="pt-3 border-t border-black/5">
              <p className="text-xs" style={{ color: 'rgb(107, 107, 107)' }}>
                <span className="font-semibold" style={{ color: 'rgb(26, 26, 26)' }}>Typical recovery: </span>
                4–12 weeks
              </p>
            </div>
          </div>
          
          <div 
            className="bg-white rounded-lg p-8 transition-all hover:-translate-y-1 hover:shadow-lg" 
            style={{ borderTop: '4px solid rgb(201, 168, 76)' }}
          >
            <h4 
              className="text-xl mb-3" 
              style={{ fontFamily: 'var(--font-display, Fraunces, Georgia, serif)', fontWeight: 500, color: 'rgb(26, 26, 26)' }}
            >
              Cycling
            </h4>
            <p 
              className="text-xs mb-3" 
              style={{ color: 'rgb(201, 168, 76)', fontStyle: 'italic' }}
            >
              Common injuries:
            </p>
            <ul className="space-y-1 mb-4">
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Knee pain (patellofemoral)
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Lower back pain
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Neck and shoulder tension
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                IT band syndrome
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Saddle-related injuries
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Crash trauma (clavicle, wrist)
              </li>
            </ul>
            <div className="pt-3 border-t border-black/5">
              <p className="text-xs" style={{ color: 'rgb(107, 107, 107)' }}>
                <span className="font-semibold" style={{ color: 'rgb(26, 26, 26)' }}>Typical recovery: </span>
                Varies enormously by injury type
              </p>
            </div>
          </div>
          
          <div 
            className="bg-white rounded-lg p-8 transition-all hover:-translate-y-1 hover:shadow-lg" 
            style={{ borderTop: '4px solid rgb(201, 168, 76)' }}
          >
            <h4 
              className="text-xl mb-3" 
              style={{ fontFamily: 'var(--font-display, Fraunces, Georgia, serif)', fontWeight: 500, color: 'rgb(26, 26, 26)' }}
            >
              Recreational Sports
            </h4>
            <p 
              className="text-xs mb-3" 
              style={{ color: 'rgb(201, 168, 76)', fontStyle: 'italic' }}
            >
              Common injuries:
            </p>
            <ul className="space-y-1 mb-4">
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Ankle sprains
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Knee injuries
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Shoulder injuries (volleyball, swimming)
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Wrist injuries (climbing)
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Acute trauma
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgb(201, 168, 76)' }}></span>
                Overuse patterns
              </li>
            </ul>
            <div className="pt-3 border-t border-black/5">
              <p className="text-xs" style={{ color: 'rgb(107, 107, 107)' }}>
                <span className="font-semibold" style={{ color: 'rgb(26, 26, 26)' }}>Typical recovery: </span>
                Varies by injury
              </p>
            </div>
          </div>
        </div>
        
        <p 
          className="text-center text-sm mt-10 max-w-2xl mx-auto" 
          style={{ color: 'rgb(107, 107, 107)', lineHeight: 1.7 }}
        >
          If your sport is not listed, our sports physiotherapists treat athletes across all recreational and amateur sports. The specific sport matters because biomechanical demands differ — but the principles of sports physiotherapy apply across all athletic populations.
        </p>
      </div>
    </section>
  );
};

export default SportsProtocols;
