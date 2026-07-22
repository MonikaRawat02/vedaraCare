import React from 'react';

const PhysiotherapyInsurance = ({
  bgColor = "bg-[#F9F7F3]",
  label = "",
  title = "",
  paragraphs = [],
  content = [], // For backward compatibility
  insurers = [],
  sidebarText = [],
  whatsappNumber = "971555867466"
}) => {
  // Use paragraphs or content for backward compatibility
  const displayParagraphs = paragraphs.length > 0 ? paragraphs : content;

  return (
    <section className={bgColor} style={{ padding: '96px 24px' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-sm tracking-wider mb-4" style={{ color: '#d4af37' }}>
            {label}
          </div>
          <h2 className="text-4xl" style={{ fontFamily: 'var(--font-display, Fraunces, Georgia, serif)', color: 'rgb(26, 26, 26)' }}>
            {title}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6 text-gray-700">
            {displayParagraphs.map((paragraph, index) => (
              <p 
                key={index} 
                className={index === 0 ? 'text-lg' : ''} 
                style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.8' }}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
          <div className="bg-white p-8 rounded-lg h-fit" style={{ borderTop: '4px solid #d4af37' }}>
            <h3 className="text-lg font-semibold mb-6 text-gray-800">
              OUR DIRECT-BILLING INSURERS
            </h3>
            <ul className="space-y-3 mb-8">
              {insurers.map((insurer, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5" style={{ color: 'rgb(26, 77, 46)' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'rgb(107, 107, 107)' }}>{insurer}</span>
                </li>
              ))}
            </ul>
            {sidebarText.map((text, index) => (
              <p key={index} className="text-sm text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: text }}>
              </p>
            ))}
            <a
              href={`https://wa.me/${whatsappNumber.toString().replace(/[^0-9]/g, '')}?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20confirm%20my%20insurance%20coverage%20for%20physiotherapy.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
              style={{ backgroundColor: '#25d366' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#128c7e'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#25d366'}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.488-.492-.67-.5h-.572c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.879 1.213 3.078c.148.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.823 9.823 0 01 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhysiotherapyInsurance;
