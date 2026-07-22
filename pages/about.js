import Head from 'next/head';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | Vedara Care Polyclinic JVC Dubai</title>
        <meta name="description" content="Learn about Vedara Care Polyclinic in Jumeirah Village Circle, offering DHA-licensed holistic medical treatments, Ayurveda, physiotherapy, and dermatology." />
      </Head>

      <section className="bg-[#184C3A] text-white pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Vedara Care</h1>
          <p className="text-[#F8F9FA]/80 max-w-2xl mx-auto text-sm md:text-base">
            Dubai's premier holistic healthcare polyclinic located in Binghatti Azure, Jumeirah Village Circle (JVC).
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F8F9FA] text-[#184C3A]">
        <div className="max-w-[1000px] mx-auto px-6 space-y-12 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">Our Vision & Mission</h2>
              <p className="text-gray-700 text-sm md:text-base mb-4">
                At Vedara Care Polyclinic, we bridge authentic ancient healing arts with modern clinical diagnostics. Our team of DHA-certified doctors and specialists provide personalized treatments tailored to root-cause healing.
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                Whether you visit our state-of-the-art clinic in JVC or request personalized home healthcare, we prioritize your long-term wellness.
              </p>
            </div>
            <div className="bg-[#184C3A]/5 p-8 rounded-2xl border border-[#184C3A]/10">
              <h3 className="text-xl font-bold font-serif mb-4 text-[#184C3A]">Core Specialties</h3>
              <ul className="space-y-3 text-sm font-medium">
                <li className="flex items-center gap-2">✓ Authentic Kerala Ayurveda & Panchakarma</li>
                <li className="flex items-center gap-2">✓ Advanced Physiotherapy & Rehabilitation</li>
                <li className="flex items-center gap-2">✓ Aesthetic Dermatology & Hair PRP</li>
                <li className="flex items-center gap-2">✓ DHA-Licensed Home Healthcare & Doctor Visits</li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-6">
            <Link href="/book" className="inline-block bg-[#184C3A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#12392c] transition-colors shadow-lg">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
