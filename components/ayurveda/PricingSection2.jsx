import React from 'react';

const PricingSection2 = () => {
  return (
    <section className="bg-[#f5f1e8] py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-[#d4af37] text-sm tracking-wider mb-4">TRANSPARENT PRICING</div>
          <h2 className="text-4xl font-serif mb-6">What physiotherapy at Vedara Care costs — published in full.</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Most Dubai physiotherapy clinics hide their pricing. Ours is published. Single sessions, packages, modalities, home visits — all listed below. Final pricing depends on your specific condition and any specialised modalities required, confirmed at your initial assessment.
          </p>
        </div>
        <div className="space-y-8">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#d4af37]">Consultations</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-700">Initial physiotherapy assessment (60 minutes)</span>
                <span className="font-semibold">AED [X]</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-700">Follow-up session (45 minutes)</span>
                <span className="font-semibold">AED [X]</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-700">Follow-up session (60 minutes)</span>
                <span className="font-semibold">AED [X]</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-700">Specialist assessment (sports, pelvic floor, neurological)</span>
                <span className="font-semibold">AED [X]</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#d4af37]">Specialised Modalities (add-ons)</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-700">Dry needling (add-on per session)</span>
                <span className="font-semibold">AED [X]</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-700">Shockwave therapy session</span>
                <span className="font-semibold">AED [X]</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-700">Class IV laser therapy</span>
                <span className="font-semibold">AED [X]</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-700">Specialised manual therapy add-on</span>
                <span className="font-semibold">AED [X]</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#d4af37]">Packages</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-700">6-session package</span>
                <span className="font-semibold">AED [X]</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-700">12-session package</span>
                <span className="font-semibold">AED [X]</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-700">Post-surgical rehabilitation package (20 sessions)</span>
                <span className="font-semibold">AED [X]</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#d4af37]">Home Services</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-700">Home physiotherapy session (within Dubai)</span>
                <span className="font-semibold">AED [X]</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-700">Post-surgical home rehabilitation (per session)</span>
                <span className="font-semibold">AED [X]</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#d4af37]">Integrated Programmes</h3>
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-700">Integrated Ayurveda + Physiotherapy programmes</span>
              <a href="/conditions" className="text-[#d4af37] hover:underline">See condition pages</a>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600 text-center mt-6">
          Insurance direct-billing reduces out-of-pocket significantly for most patients. WhatsApp your card to confirm.
        </p>
      </div>
    </section>
  );
};

export default PricingSection2;
