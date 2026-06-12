import React from 'react';
import Link from 'next/link';

const HomePhysioSingleImageSection = ({
  bgColor = "bg-[#FFFFFF]",
  label = "THE SECTION",
  title = "Section title",
  description = "",
  items = [],
  image = "",
  alt = "Image alt text"
}) => {
  return (
    <section className={`${bgColor} py-24 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-[#d4af37] text-sm tracking-wider mb-4">
            {label}
          </div>
          <h2 className="text-4xl font-serif mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {items.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f5f1e8] flex items-center justify-center text-[#d4af37] font-bold text-sm">
                  {item.number}
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">
                    {item.title}
                    {item.link ? (
                      <Link href={item.link} className="text-[#184c3a] hover:underline ml-1">→</Link>
                    ) : null}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-200 rounded-xl h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
            {image ? (
              <img 
                src={image} 
                alt={alt} 
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <span className="text-gray-500 text-center px-4">
                Image Placeholder
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePhysioSingleImageSection;
