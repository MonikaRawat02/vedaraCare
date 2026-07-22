import Head from 'next/head';

export default function PatientRights() {
  return (
    <>
      <Head>
        <title>Patient Rights & Responsibilities | Vedara Care Dubai</title>
        <meta name="description" content="Dubai Health Authority (DHA) patient rights and responsibilities guidelines at Vedara Care Polyclinic." />
      </Head>

      <section className="bg-[#184C3A] text-white pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Patient Rights & Responsibilities</h1>
          <p className="text-[#F8F9FA]/80 max-w-2xl mx-auto text-sm md:text-base">
            In compliance with the Dubai Health Authority (DHA), Vedara Care is committed to protecting patient dignity, privacy, and quality care.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F8F9FA] text-[#184C3A]">
        <div className="max-w-[900px] mx-auto px-6 space-y-8 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold font-serif mb-3">Your Rights as a Patient</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
              <li>To receive respectful, compassionate medical care regardless of gender, nationality, or religion.</li>
              <li>To receive clear information about your diagnosis, treatment plan, and medical options.</li>
              <li>To complete privacy and confidentiality regarding your medical history and health records.</li>
              <li>To know the names and professional qualifications of the healthcare team attending to you.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-serif mb-3">Your Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
              <li>To provide accurate and complete information regarding your current health status and medical history.</li>
              <li>To follow the agreed treatment plan recommended by your attending physician.</li>
              <li>To respect clinic staff, healthcare professionals, and other patients.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
