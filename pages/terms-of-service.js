import Head from 'next/head';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | Vedara Care Polyclinic Dubai</title>
        <meta name="description" content="Terms of service and patient agreement for consultations and healthcare at Vedara Care JVC." />
      </Head>

      <section className="bg-[#184C3A] text-white pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Terms of Service</h1>
          <p className="text-[#F8F9FA]/80 max-w-2xl mx-auto text-sm md:text-base">
            Please review the terms governing medical appointments, consultations, and services provided by Vedara Care.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F8F9FA] text-[#184C3A]">
        <div className="max-w-[900px] mx-auto px-6 space-y-8 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold font-serif mb-3">1. Appointments & Consultations</h2>
            <p className="text-gray-700 text-sm md:text-base">
              Appointments booked online or via phone are subject to doctor availability and confirmation by our reception team. Please arrive 10 minutes prior to your scheduled consultation time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-serif mb-3">2. Cancellations & Rescheduling</h2>
            <p className="text-gray-700 text-sm md:text-base">
              If you need to reschedule or cancel your appointment, please provide at least 24 hours prior notice so we can accommodate other patients.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-serif mb-3">3. Medical Disclaimers</h2>
            <p className="text-gray-700 text-sm md:text-base">
              Content provided on this website is for general informational purposes only and does not substitute professional medical advice, diagnosis, or treatment. Always seek the advice of a DHA-licensed physician.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
