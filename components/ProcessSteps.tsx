'use client';

import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'Upload And Get a Free Quote',
    description: 'Send your design, budget and requirements to us, and we\'d quote a price',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Get The Digital Proof',
    description: 'We will send a digital sample to you and continue production after your approval',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Proceed To Production',
    description: 'If the sample seems fine to you, we will proceed to the final production',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Receive Your Order',
    description: 'Within the decided time frame, your order will be delivered to your doorstep',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
];

const images = [
  '/5.webp',
  '/6.webp',
  '/7.webp',
  '/8.webp',
];

export default function ProcessSteps() {
  return (
    <section className="py-10! bg-[#f8f9fa] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231d3557' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20 flex flex-col items-center">
          <span className="inline-block px-5 py-2 bg-[#e63946]/10 text-[#e63946] rounded-full text-sm font-bold tracking-wide mb-5">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1d3557] mb-5 leading-tight">
            Simple Steps To Get Your Unique
            <span className="block text-[#e63946] mt-2">Custom Embroidered Patches</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Our streamlined 4-step process makes it incredibly easy to get premium quality custom patches delivered to your door
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Steps */}
          <div className="space-y-5">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex gap-5 p-5 lg:p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#e63946]/20 transition-all duration-300 group"
              >
                {/* Step Number Circle */}
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#e63946] to-[#c1121f] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                    {step.icon}
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#1d3557] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-lg lg:text-xl font-bold text-[#1d3557] mb-2 group-hover:text-[#e63946] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{step.description}</p>
                </div>

                {/* Hover Arrow */}
                <div className="hidden lg:flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 text-[#e63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-5">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <Image
                      src={image}
                      alt={`Custom patch example ${index + 1}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1d3557]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>

            </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-[#1d3557] text-white px-10! py-8! rounded-2xl shadow-xl">
            <div className="text-center sm:text-left">
              <p className="text-sm opacity-80 mb-1">Ready to start?</p>
              <p className="text-lg font-semibold">Get your custom patches in 4 simple steps</p>
            </div>
            <a href="/free-instant-quote" className="bg-[#e63946] hover:bg-[#c1121f] text-white px-8 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2 shadow-lg">
              Start Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
