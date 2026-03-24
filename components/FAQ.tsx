'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Do you embroider small text in custom patches?',
    answer: 'Yes, we do embroider small text. But there are certain limitations. For example, any text that is below 3mm isn\'t reader-friendly in an embroidered patch. Any text above 5mm can be embroidered on the patch. However, embroidering text that is below 3mm isn\'t a problem for us, but the results aren\'t satisfactory. Hence, text bigger than 5mm is suggested.',
  },
  {
    question: 'What is the minimum order quantity?',
    answer: 'Our minimum order quantity is 25 pieces. However, we can accommodate smaller orders for custom quotes. Contact us for specific requirements and we\'ll find a solution that works for you.',
  },
  {
    question: 'How long does it take to receive my order?',
    answer: 'Standard delivery takes 20-30 days from approval of the digital proof. We also offer express delivery within 10-14 days for urgent orders. The timeline includes design approval, production, and shipping.',
  },
  {
    question: 'What backing options are available?',
    answer: 'We offer multiple backing options including Heat Seal (iron-on), Non-Woven, Velcro (Hook & Loop), Plastic, Sew-On, and Peel & Stick. Each backing type serves different purposes and application methods.',
  },
  {
    question: 'Can I get a sample before placing a bulk order?',
    answer: 'Yes, we provide digital proofs before production begins. Once you approve the digital sample, we proceed with production. This ensures you\'re completely satisfied with the design before any commitment.',
  },
  {
    question: 'What file formats do you accept for designs?',
    answer: 'We accept most common file formats including AI, EPS, PDF, PNG, JPG, and PSD. Vector files (AI, EPS) are preferred as they provide the best quality for embroidery. Our design team can also work with your rough sketches.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship worldwide! Shipping costs and delivery times vary by location. We use reliable shipping partners to ensure your patches arrive safely at your doorstep, no matter where you are.',
  },
  {
    question: 'What is the difference between 50%, 75%, and 100% embroidery coverage?',
    answer: '50% coverage uses twill backing with half the design embroidered. 75% coverage has three-quarters embroidered with visible backing. 100% coverage means the entire patch surface is embroidered for a premium look and feel.',
  },
];

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
              className={`mb-4 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? 'bg-[#1d3557] shadow-xl'
                  : 'bg-[#f8f9fa] hover:bg-gray-100'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors ${
                  openIndex === index ? 'text-white' : 'text-[#1d3557]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                    openIndex === index
                      ? 'bg-[#e63946] text-white'
                      : 'bg-[#1d3557]/10 text-[#1d3557]'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-semibold text-lg">{faq.question}</span>
                </div>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-white/20 rotate-180'
                    : 'bg-[#e63946]/10'
                }`}>
                  <svg
                    className={`w-5 h-5 transition-colors ${
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
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2 text-gray-300 leading-relaxed ml-14">
                  {faq.answer}
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
