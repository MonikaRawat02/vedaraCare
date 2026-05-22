import React from 'react';
import { User, Globe, Award, ShieldCheck } from 'lucide-react';

const doctors = [
  {
    name: "Dr. Priya Sharma",
    qualification: "BAMS, MD (Ayurveda)",
    role: "Ayurvedic Physician",
    experience: "15+ years experience",
    languages: "English, Hindi, Arabic",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1e3c7e3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Dr. Ahmed Al-Mansoori",
    qualification: "DPT, MSc",
    role: "Physiotherapist",
    experience: "12+ years experience",
    languages: "English, Arabic, Urdu",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Dr. Sarah Khan",
    qualification: "MBBS, MD (Dermatology)",
    role: "Dermatologist",
    experience: "10+ years experience",
    languages: "English, Arabic, Hindi",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2070&auto=format&fit=crop"
  }
];

const Experts = () => {
  return (
    <section id="experts" className="py-20 bg-white">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif text-[#184C3A] mb-4">
            Meet Our DHA-Licensed Experts
          </h2>
          <p className="text-lg text-[#5a5a5a] max-w-2xl mx-auto mb-12">
            Experienced healthcare professionals dedicated to your wellbeing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {doctors.map((doc, index) => (
            <div key={index} data-slot="card" className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-6 group">
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={doc.image} 
                  alt={doc.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#184C3A]/90 backdrop-blur-sm text-white text-[10px] font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <ShieldCheck size={12} />
                  DHA Verified
                </div>
              </div>

              {/* Content */}
              <div data-slot="card-content" className="pb-6 px-6 flex flex-col flex-grow gap-6">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-[#184C3A] mb-2">
                    {doc.name}
                  </h3>
                  <p className="text-sm text-[#C8A76A] mb-1">
                    {doc.qualification}
                  </p>
                  <h4 className="font-semibold mb-4">
                    {doc.role}
                  </h4>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[14px] text-[#5a5a5a]">
                    <Award size={18} className="text-gray-400 shrink-0" />
                    <span>{doc.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[14px] text-[#5a5a5a]">
                    <Globe size={18} className="text-gray-400 shrink-0" />
                    <span>{doc.languages}</span>
                  </div>
                </div>

                <button className="w-full py-2.5 rounded-md border border-[#184C3A]/20 bg-[#FCFCFA] text-[#184C3A] font-medium text-sm hover:bg-[#184C3A] hover:text-white transition-all duration-300 mt-auto">
                  View Doctor Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experts;
