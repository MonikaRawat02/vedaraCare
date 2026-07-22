import Head from 'next/head';
import Link from 'next/link';

export default function Insurance() {
  const insurancePartners = [
    "Daman", "AXA / GIG", "Allianz", "Oman Insurance (Sukoon)", 
    "Now Health", "Bupa", "MetLife", "NextCare", "NAS", "Neuron"
  ];

  return (
    <>
      <Head>
        <title>Insurance Coverage | Vedara Care Polyclinic Dubai</title>
        <meta name="description" content="Accepted insurance providers, direct billing, and reimbursement assistance at Vedara Care JVC Dubai." />
      </Head>

      <section className="bg-[#184C3A] text-white pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Insurance Partners</h1>
          <p className="text-[#F8F9FA]/80 max-w-2xl mx-auto text-sm md:text-base">
            We work with major UAE insurance networks for direct billing and claim reimbursement.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F8F9FA] text-[#184C3A]">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">Supported Insurance Providers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
            {insurancePartners.map((partner, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center justify-center font-bold text-sm text-[#184C3A]">
                {partner}
              </div>
            ))}
          </div>

          <p className="text-gray-600 text-sm max-w-xl mx-auto mb-8">
            Coverage depends on your specific insurance policy network. Contact our reception team to check direct billing eligibility before your appointment.
          </p>

          <Link href="/contact" className="inline-block bg-[#184C3A] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#12392c] transition-colors">
            Verify Your Insurance Coverage
          </Link>
        </div>
      </section>
    </>
  );
}
