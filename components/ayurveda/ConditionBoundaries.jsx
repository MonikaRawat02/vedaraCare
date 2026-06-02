import React from 'react';
import { Check } from 'lucide-react';

const ConditionBoundaries = ({
  bgColor = "bg-[#F5F0E8]",
  label = "",
  title = "",
  description = "",
  columns = [],
  footer = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: 'rgb(184, 145, 90)' }}>
            {label}
          </p>
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500, color: 'rgb(28, 28, 26)', lineHeight: 1.25 }}>
            {title}
          </h2>
          {description && (
            <p className="text-sm text-muted-foreground max-w-[600px] mx-auto" style={{ lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {columns.map((column, index) => (
            <div 
              key={index} 
              className="rounded-xl p-8" 
              style={{ background: index === 0 ? 'rgb(250, 246, 239)' : 'rgb(242, 238, 231)' }}
            >
              {column.label && (
                <p className="text-[11px] uppercase tracking-widest mb-4 text-muted-foreground">
                  {column.label}
                </p>
              )}
              <h3 className="text-lg mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: 'rgb(28, 28, 26)' }} dangerouslySetInnerHTML={{ __html: column.title }} />
              <ul className="space-y-3">
                {column.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    {index === 1 ? (
                      <Check 
                        className="flex-shrink-0 mt-0.5" 
                        style={{ width: 15, height: 15, color: 'rgb(184, 145, 90)' }} 
                      />
                    ) : (
                      <div 
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" 
                        style={{ backgroundColor: 'rgb(184, 145, 90)' }} 
                      />
                    )}
                    <span className="text-muted-foreground" style={{ lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {footer && (
          <p className="text-center text-sm text-muted-foreground max-w-[720px] mx-auto" dangerouslySetInnerHTML={{ __html: footer }} />
        )}
      </div>
    </section>
  );
};

export default ConditionBoundaries;
