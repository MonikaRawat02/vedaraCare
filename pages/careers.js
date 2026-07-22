import Head from 'next/head';

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers & Hiring | Vedara Care Polyclinic Dubai</title>
        <meta name="description" content="Join the healthcare team at Vedara Care Polyclinic in JVC, Dubai. DHA-licensed doctors, therapists, and nursing opportunities." />
      </Head>

      <section className="bg-[#184C3A] text-white pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Careers at Vedara Care</h1>
          <p className="text-[#F8F9FA]/80 max-w-2xl mx-auto text-sm md:text-base">
            Build your career with a leading DHA-licensed holistic healthcare clinic in Dubai.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F8F9FA] text-[#184C3A]">
        <div className="max-w-[800px] mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl font-serif font-bold">Join Our Healthcare Team</h2>
          <p className="text-gray-700 text-sm md:text-base">
            We are always seeking passionate DHA-licensed physicians, Ayurvedic doctors, physiotherapists, dermatologists, nurses, and medical reception staff.
          </p>
          
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm text-left mt-8">
            <h3 className="text-lg font-bold mb-2">How to Apply</h3>
            <p className="text-gray-600 text-sm mb-4">
              Send your CV, DHA license details, and cover letter directly to our HR team:
            </p>
            <a href="mailto:booking@vedaracare.ae?subject=Career%20Application%20-%20Vedara%20Care" className="inline-block text-[#D4A373] font-bold underline text-base">
              booking@vedaracare.ae
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
