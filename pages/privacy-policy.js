import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Vedara Care Polyclinic Dubai</title>
        <meta name="description" content="Privacy policy and data protection practices at Vedara Care Polyclinic JVC, Dubai." />
      </Head>

      <section className="bg-[#184C3A] text-white pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Privacy Policy</h1>
          <p className="text-[#F8F9FA]/80 max-w-2xl mx-auto text-sm md:text-base">
            Your privacy and health data security are fundamental to how we provide DHA-licensed medical care.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F8F9FA] text-[#184C3A]">
        <div className="max-w-[900px] mx-auto px-6 space-y-8 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold font-serif mb-3">1. Information We Collect</h2>
            <p className="text-gray-700 text-sm md:text-base">
              Vedara Care Polyclinic collects personal health information, contact details, medical history, and payment details necessary to provide high-quality medical services, consultations, and home healthcare.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-serif mb-3">2. How We Use Your Data</h2>
            <p className="text-gray-700 text-sm md:text-base">
              Your information is strictly used for medical consultations, DHA compliance reporting, insurance processing, booking confirmations, and patient communication. We do not sell your personal data to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-serif mb-3">3. Medical Confidentiality</h2>
            <p className="text-gray-700 text-sm md:text-base">
              All medical records are stored securely in compliance with Dubai Health Authority (DHA) health data regulations and international medical confidentiality standards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-serif mb-3">4. Contact Us</h2>
            <p className="text-gray-700 text-sm md:text-base">
              For any questions regarding your data or to request record updates, please reach out to <a href="mailto:booking@vedaracare.ae" className="text-[#D4A373] underline font-semibold">booking@vedaracare.ae</a> or call <a href="tel:+971555867466" className="text-[#D4A373] underline font-semibold">+971 55 586 7466</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
