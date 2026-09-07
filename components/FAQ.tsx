'use client';

import { useState } from 'react';
import { faqs } from '@/lib/faqs';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-[#e63946]/10 text-[#e63946] rounded-full text-sm font-bold tracking-wide mb-5">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1d3557] mb-5">
            We Know Your Confusions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to frequently asked questions about our custom patch services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`mb-4 rounded-2xl overflow-hidden transition-[background-color,box-shadow] duration-500 ease-out ${
                openIndex === index
                  ? 'bg-[#1d3557] shadow-xl'
                  : 'bg-[#f8f9fa] hover:bg-gray-100'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                className={`w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors duration-500 ease-out ${
                  openIndex === index ? 'text-white' : 'text-[#1d3557]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-colors duration-500 ease-out ${
                    openIndex === index
                      ? 'bg-[#e63946] text-white'
                      : 'bg-[#1d3557]/10 text-[#1d3557]'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-semibold text-lg">{faq.question}</span>
                </div>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ease-out ${
                  openIndex === index
                    ? 'bg-white/20 rotate-180'
                    : 'bg-[#e63946]/10'
                }`}>
                  <svg
                    className={`w-5 h-5 transition-colors duration-500 ease-out ${
                      openIndex === index ? 'text-white' : 'text-[#e63946]'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out motion-reduce:transition-none ${
                  openIndex === index
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden min-h-0">
                  <div className="px-6 pb-6 pt-2 text-gray-300 leading-relaxed ml-14">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg"
          >
            Contact Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
