import Link from 'next/link';
import { Check, Leaf, Activity, Sparkles, Home, Heart, ChevronRight } from 'lucide-react';

const Services = ({
  title = "Our Healthcare Services in JVC",
  items = [
    {
      id: 'ayurveda',
      title: 'Ayurveda in JVC',
      subtitle: 'Traditional healing science adapted for modern Dubai lifestyles',
      image: '/images/ayurveda.webp',
      features: ['Panchakarma', 'Abhyanga', 'Shirodhara', 'Stress Management', 'PCOS Support', 'Weight Management'],
      buttonText: 'Explore Ayurveda',
      link: '/services/ayurveda'
    },
    {
      id: 'physiotherapy',
      title: 'Physiotherapy in JVC',
      subtitle: 'Evidence-based rehabilitation and movement therapy for pain relief and recovery',
      image: '/images/physiotherapy.webp',
      features: ['Back Pain', 'Sports Injury', 'Frozen Shoulder', 'Dry Needling', 'Home Physiotherapy', 'Post Surgery Rehab'],
      buttonText: 'Explore Physiotherapy',
      link: '/services/physiotherapy'
    },
    {
      id: 'dermatology',
      title: 'Dermatology in JVC',
      subtitle: 'Advanced skin treatments for healthy, radiant skin',
      image: '/images/dermatology.webp',
      features: ['Acne Treatment', 'Hair Loss', 'PRP Therapy', 'Pigmentation', 'Skin Rejuvenation', 'Chemical Peel'],
      buttonText: 'Explore Dermatology',
      link: '/services/dermatology'
    },
    {
      id: 'home-healthcare',
      title: 'Home Healthcare in Dubai',
      subtitle: 'Premium healthcare services in the comfort of your home',
      image: '/images/Home Healthcare in Dubai.webp',
      features: ['Doctor on Call', 'Home Nursing', 'IV Drip', 'Lab Tests at Home', 'Elderly Care', 'Physiotherapy at Home'],
      buttonText: 'Explore Home Healthcare',
      link: '/services/home-healthcare'
    },
    {
      id: 'wellness',
      title: 'Wellness Treatments',
      subtitle: 'Holistic wellness programs for mind, body, and spirit',
      image: '/images/Wellness Treatments.webp',
      features: ['Detox Programs', 'Stress Management', 'Yoga Therapy', 'Nutrition Consultation', 'Weight Management'],
      buttonText: 'Explore Wellness',
      link: '/services/wellness'
    }
  ]
}) => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#F6F1EA] to-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-[#184C3A] mb-4">
            {title}
          </h2>
        </div>

        <div className="space-y-12">
          {items.map((service, index) => (
            <div 
              key={service.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white rounded-xl shadow-xl overflow-hidden border-none`}
            >
              {/* Image Side */}
              <div className="lg:w-1/2 relative h-[300px] lg:h-auto overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  {service.icon}
                  <h3 className="font-serif text-3xl text-[#184C3A]">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-lg text-[#5a5a5a] mb-6">
                  {service.subtitle}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-[#1C1C1C] text-sm font-sans">
                      <Check className="text-[#184C3A] shrink-0" size={20} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href={service.link}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#184C3A] text-white rounded-lg hover:bg-[#123a2c] transition-all text-sm font-bold w-fit"
                >
                  {service.buttonText}
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
