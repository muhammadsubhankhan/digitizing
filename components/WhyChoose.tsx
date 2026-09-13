import Link from 'next/link';

/**
 * The twelve selling points from the homepage brief. The first four are the ones
 * buyers ask about first, so they get the larger highlighted treatment at the top
 * of the grid and the rest run underneath in a denser three-column list.
 */
const reasons = [
  {
    title: 'No Minimum Order',
    description:
      'Order exactly what you need — whether it’s a single custom patch or a large batch for your business, team, or organization.',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    featured: true,
  },
  {
    title: 'Free Artwork Assistance',
    description:
      'Have an idea but need help with the design? Our team can help prepare your artwork for production.',
    icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
    featured: true,
  },
  {
    title: 'Free Digital Proof',
    description:
      'Review your patch design before production begins, so you know exactly what you’re ordering.',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    featured: true,
  },
  {
    title: 'Premium Materials & Craftsmanship',
    description:
      'We use quality materials and careful craftsmanship to create custom patches that look great and are built to last.',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    featured: true,
  },
  {
    title: 'Fast Production Turnaround',
    description:
      'Get your custom patch order moving quickly with an efficient production process designed around your deadline.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Multiple Patch Styles',
    description:
      'Choose the patch style that best fits your brand, team, clothing, merchandise, or organization.',
    icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
  },
  {
    title: 'Custom Shapes & Sizes',
    description:
      'From classic shapes to unique designs, your patches can be made to match your artwork and requirements.',
    icon: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4',
  },
  {
    title: 'Professional Embroidery Digitizing',
    description:
      'Our digitizing service helps convert your artwork into a production-ready design with clean, precise details.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
  {
    title: 'Competitive Pricing',
    description:
      'Get high-quality custom patches at competitive prices without compromising on the finished product.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Free Shipping Across the USA',
    description:
      'Have your custom patch order delivered without additional shipping costs across the United States.',
    icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M14 9h4',
  },
  {
    title: 'Dedicated Customer Support',
    description:
      'Get helpful guidance throughout the ordering process, from artwork preparation to final production.',
    icon: 'M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829l4.243 2.828a1 1 0 001.415-1.414l-4.243-4.243m0 0a5 5 0 01-7.072 0 5 5 0 010-7.072',
  },
  {
    title: '100% Quality Guarantee',
    description:
      'We stand behind the quality of your order and work to make sure your finished patches meet your expectations.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
];

function Icon({ path, className }: { path: string; className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      {path.split(' M').map((segment, index) => (
        <path
          key={index}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={index === 0 ? segment : `M${segment}`}
        />
      ))}
    </svg>
  );
}

export default function WhyChoose() {
  const featured = reasons.filter((reason) => reason.featured);
  const rest = reasons.filter((reason) => !reason.featured);

  return (
    <section className="py-10! bg-[#1d3557] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="inline-block px-5 py-2 bg-[#f4a261]/15 text-[#f4a261] rounded-full text-sm font-bold tracking-wide mb-5">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-5 leading-tight max-w-4xl">
            Why Choose custompatchhouse.com for Custom Patches?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Twelve reasons brands, teams and organizations across the USA keep coming back for their
            custom patch orders.
          </p>
        </div>

        {/* Highlighted four */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featured.map((reason) => (
            <div
              key={reason.title}
              className="group bg-white rounded-2xl p-7! shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-[#e63946]"
            >
              <div className="w-14 h-14 mb-5 bg-gradient-to-br from-[#e63946] to-[#c1121f] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Icon path={reason.icon} className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#1d3557] mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Remaining eight */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rest.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5! transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-11 h-11 bg-[#f4a261]/15 rounded-lg flex items-center justify-center text-[#f4a261]">
                <Icon path={reason.icon} className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1.5">{reason.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/free-instant-quote"
            className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white px-8! py-4! rounded-xl font-semibold transition-colors shadow-lg"
          >
            Get Your Free Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
