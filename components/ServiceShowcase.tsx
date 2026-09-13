import Image from 'next/image';
import Link from 'next/link';
import { services, serviceTitle } from '@/lib/services';

/**
 * The six patch types featured on the home page. Kept as an explicit list rather
 * than a slice of `serviceList` so the order and the mix of styles is deliberate —
 * and so each card lands on a different photo.
 */
const featuredSlugs = [
  'embroidered-patches',
  'custom-chenille-patches',
  'sew-on-patches',
  'pvc-rubber-patches',
  'woven-labels',
  'custom-caps-hats',
] as const;

export default function ServiceShowcase() {
  return (
    <section className="py-10! bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="inline-block px-5 py-2 bg-[#e63946]/10 text-[#e63946] rounded-full text-xs font-bold tracking-wide mb-4">
            OUR PATCH TYPES
          </span>
          <h2 className="text-2xl lg:text-4xl font-bold text-[#1d3557] mb-4 leading-tight max-w-4xl">
            Custom Patches Online in the USA for Every Need
          </h2>
          <p className="text-gray-600 text-sm lg:text-base max-w-3xl mx-auto leading-relaxed">
            Get custom patches made to match your design, size, shape, and quantity. Whether you need a
            small order for your team or bulk custom patches for a business, brand, event, or organization,
            we make the ordering process simple. You can order custom patches online with professional
            production, competitive pricing, and reliable service across the USA. Our team also helps
            ensure your artwork is ready for a clean, high-quality finished patch.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {featuredSlugs.map((slug) => {
            const service = services[slug];
            return (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={service.images[0]}
                    alt={serviceTitle(service.name)}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 340px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4! flex flex-col flex-1">
                  <h3 className="text-[15px] font-bold text-[#1d3557] mb-1.5 group-hover:text-[#e63946] transition-colors">
                    {serviceTitle(service.name)}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3 flex-1 line-clamp-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[#e63946] font-semibold text-xs">
                    Shop Now
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-2 border-[#1d3557] text-[#1d3557] hover:bg-[#1d3557] hover:text-white px-7! py-3! rounded-xl font-semibold text-sm transition-colors"
          >
            View All Patch Types
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
