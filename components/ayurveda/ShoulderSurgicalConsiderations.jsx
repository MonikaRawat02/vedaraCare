import React from 'react'

const ShoulderSurgicalConsiderations = ({ data }) => {
  const {
    label,
    title,
    description,
    content,
    approachToSurgery,
    keyStat
  } = data || {}

  return (
    <section className="bg-[#F0E8D5] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-[#C9A55A] text-sm font-medium tracking-wider uppercase mb-4">
            {label}
          </div>
          <h2 className="text-4xl font-serif text-[#1A1A1A] mb-4">
            {title}
          </h2>
          <p className="text-lg text-[#6B6B6B] max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-12 items-start">
          <div className="space-y-8">
            {content.map((paragraph, idx) => (
              <div key={idx}>
                {idx === 0 && (
                  <p className="text-[#4A4A4A] leading-relaxed ">
                    {paragraph}
                  </p>
                )}
                {idx > 0 && (
                  <div className="bg-white p-8 rounded-xl shadow-sm mb-8 text-[14px]" dangerouslySetInnerHTML={{ __html: paragraph }} />
                )}
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {approachToSurgery && (
              <div className="bg-[#1C1C14] p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#C9A55A] text-xs font-medium tracking-wider uppercase">
                    {approachToSurgery.label}
                  </span>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-300 font-medium mb-3">We recommend surgery when:</p>
                  <ul className="space-y-2">
                    {(approachToSurgery.recommendWhen || []).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="text-gray-300 font-medium mb-3">We do NOT recommend:</p>
                  <ul className="space-y-2">
                    {(approachToSurgery.doNotRecommend || []).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {approachToSurgery.surgicalCoordination && (
                  <div className="border-t border-gray-600 pt-4 mb-6">
                    <p className="text-[#C9A55A] font-medium mb-2">
                      {approachToSurgery.surgicalCoordination.title}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {approachToSurgery.surgicalCoordination.description}
                    </p>
                  </div>
                )}

                <button className="w-full bg-[#C9A55A] text-[#1C1C14] font-semibold py-4 px-6 rounded hover:bg-[#b8944a] transition-colors text-sm">
                  {approachToSurgery.buttonText}
                </button>
              </div>
            )}

            {keyStat && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-xs text-[#C9A55A] font-medium tracking-wider uppercase mb-2">
                  {keyStat.label}
                </p>
                <p className="text-4xl font-serif text-[#1A1A1A] mb-2">
                  {keyStat.value}
                </p>
                <p className="text-[#6B6B6B] leading-relaxed">
                  {keyStat.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const ShoulderActivityPatterns = ({ data }) => {
  const {
    label,
    title,
    description,
    cards,
    footer
  } = data || {}

  return (
    <section className="bg-[#F8F5EE] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          {label && (
            <p
              className="text-xs font-bold tracking-wider uppercase mb-4"
              style={{ color: '#C9A55A' }}
            >
              <span
                className="inline-block w-6 h-px mr-2 align-middle"
                style={{ background: '#C9A55A' }}
              ></span>
              {label}
              <span
                className="inline-block w-6 h-px ml-2 align-middle"
                style={{ background: '#C9A55A' }}
              ></span>
            </p>
          )}
          {title && (
            <h2
              className="text-3xl sm:text-4xl mb-4"
              style={{ fontFamily: 'var(--font-display, Fraunces, Georgia, serif)', fontWeight: 500, color: '#1A1A1A' }}
            >
              {title}
            </h2>
          )}
          {description && (
            <p
              className="text-base max-w-3xl mx-auto"
              style={{ color: '#6B6B6B', lineHeight: 1.7 }}
            >
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards && cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 transition-all hover:-translate-y-1 hover:shadow-md"
              style={{ borderTop: '4px solid #C9A55A' }}
            >
              <h4
                className="text-xl mb-5"
                style={{ fontFamily: 'var(--font-display, Fraunces, Georgia, serif)', fontWeight: 500, color: '#1A1A1A' }}
              >
                {card.title}
              </h4>
              {card.items && card.items.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[14px]" style={{ color: '#6B6150' }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#C9A55A' }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {card.recoveryLabel && (
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs" style={{ color: '#C9A55A', textTransform: 'uppercase', fontWeight: 'medium', marginBottom: '4px' }}>
                    {card.recoveryLabel}
                  </p>
                  {card.recoveryText && (
                    <p className="text-xs" style={{ color: '#1A1816' }}>
                      {card.recoveryText}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {footer && (
          <p
            className="text-center text-sm mt-10 max-w-3xl mx-auto"
            style={{ color: '#C49A3C', lineHeight: 1.7 }}
          >
            {footer}
          </p>
        )}
      </div>
    </section>
  )
}

const ShoulderPricing = ({ data }) => {
  const {
    label,
    title,
    pricingItems,
    insuranceSection
  } = data || {}

  return (
    <section className="bg-white" style={{ padding: '96px 24px' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          {label && (
            <p className="text-xs font-bold tracking-wider uppercase mb-4" style={{ color: 'rgb(201, 168, 76)' }}>
              <span className="inline-block w-6 h-px mr-2 align-middle" style={{ background: 'rgb(201, 168, 76)' }}></span>
              {label}
              <span className="inline-block w-6 h-px ml-2 align-middle" style={{ background: 'rgb(201, 168, 76)' }}></span>
            </p>
          )}
          {title && (
            <h2 className="text-3xl sm:text-4xl" style={{ fontFamily: 'var(--font-display, Fraunces, Georgia, serif)', fontWeight: 500, color: 'rgb(26, 26, 26)' }}>
              {title}
            </h2>
          )}
        </div>
        {pricingItems && (
          <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(0, 0, 0, 0.08)' }}>
            <div 
              className="flex items-center justify-between px-7 py-4"
              style={{ 
                background: 'rgb(26, 26, 26)' 
              }}
            >
              <span className="text-xs font-bold tracking-wider uppercase" style={{ color: 'rgb(250, 247, 242)' }}>
                Service
              </span>
              <span className="text-xs font-bold tracking-wider uppercase flex-shrink-0 ml-6" style={{ color: 'rgb(250, 247, 242)' }}>
                Price
              </span>
            </div>
            {pricingItems.map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-between px-7 py-5 transition-colors hover:bg-stone-50"
                style={{ 
                  background: item.bg || (index % 2 === 0 ? 'rgb(255, 255, 255)' : '#FDFAF4'), 
                  borderBottom: index < pricingItems.length - 1 ? '1px solid rgba(0, 0, 0, 0.05)' : 'none' 
                }}
              >
                <span className="text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                  {item.name}
                </span>
                <span className="text-sm font-bold flex-shrink-0 ml-6" style={{ color: 'rgb(201, 168, 76)', fontFamily: 'var(--font-display, Fraunces, Georgia, serif)' }}>
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        )}
        {insuranceSection && (
          <div className="mt-8 rounded-xl p-7" style={{ background: '#FDFAF4', border: '1px solid rgba(0, 0, 0, 0.05)' }}>
            <p className="text-sm mb-5 leading-relaxed" style={{ lineHeight: 1.7, color: '#6B6150' }}>
              {insuranceSection.description}
            </p>
            {insuranceSection.insurers && (
              <div className="flex flex-wrap gap-2 mb-5">
                {insuranceSection.insurers.map((insurer, index) => (
                  <span key={index} className="px-3 py-1.5 rounded-full text-xs " style={{ background: 'rgb(255, 255, 255)', color: '#1A1816', border: '1px solid rgba(0, 0, 0, 0.08)' }}>
                    {insurer}
                  </span>
                ))}
              </div>
            )}
            {insuranceSection.cta && (
              <div className="flex justify-center">
                <button style={{ 
                  background: 'rgb(201, 168, 76)', 
                  color: 'white', 
                  padding: '14px 32px', 
                  borderRadius: '4px', 
                  border: 'none', 
                  fontWeight: 600, 
                  cursor: 'pointer' 
                }}>
                  {insuranceSection.cta}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export { ShoulderSurgicalConsiderations, ShoulderActivityPatterns, ShoulderPricing }