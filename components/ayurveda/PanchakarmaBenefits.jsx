import React from 'react';
import { MapPin, Car, Users, DoorOpen, CheckCircle } from 'lucide-react';

const iconMap = {
  MapPin: MapPin,
  Car: Car,
  Users: Users,
  DoorOpen: DoorOpen,
  CheckCircle: CheckCircle,
};

const PanchakarmaBenefits = ({
  bgColor = "bg-[#FAF7F2]",
  label = "WHY VEDARA CARE JVC",
  title = "Five reasons our JVC neighbours start their Panchakarma here.",
  benefits = []
}) => {
  return (
    <section className={`py-24 px-6 ${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p 
            className="text-[13px] font-semibold tracking-[0.18em] uppercase"
            style={{ color: '#C9A567', fontFamily: '"DM Sans", sans-serif' }}
            dangerouslySetInnerHTML={{ __html: label }}
          />
          <h2 
            className="text-gray-900"
            style={{ 
              fontFamily: 'Fraunces, serif', 
              fontWeight: '500', 
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', 
              lineHeight: '1.2' 
            }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon] || CheckCircle;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 flex flex-col gap-6 shadow-sm border border-gray-100 transition-all hover:shadow-md"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(201, 165, 103, 0.1)', color: '#C9A567' }}
                >
                  <IconComponent size={24} strokeWidth={1.5} />
                </div>
                
                <div className="space-y-4">
                  <h3 
                    className="text-lg font-medium text-gray-900"
                    style={{ fontFamily: 'Fraunces, serif', lineHeight: '1.4' }}
                    dangerouslySetInnerHTML={{ __html: benefit.title }}
                  />
                  <p className=" text-sm text-gray-600 leading-relaxed font-sans" dangerouslySetInnerHTML={{ __html: benefit.description }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PanchakarmaBenefits;
