import Link from 'next/link';
import { CONTACT } from '@/lib/site';

const noMinimum = [
  'Single replacement patches',
  'Small club orders',
  'School merchandise',
  'Team apparel',
  'Corporate uniforms',
  'Promotional products',
];

const bulk = [
  'National businesses',
  'School districts',
  'Sports leagues',
  'Retail merchandise',
  'Promotional campaigns',
  'Corporate branding programs',
];

function Check({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function OrderQuantity() {
  return (
    <section className="py-10! bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* No minimum order */}
          <div className="bg-[#e63946] text-white rounded-2xl p-6! lg:p-8! shadow-xl flex flex-col">
            <span className="text-xs font-bold tracking-[0.2em] text-white/70 uppercase mb-3">
              Need only one patch?
            </span>
            <h2 className="text-xl lg:text-2xl font-bold mb-2 leading-tight">
              Need Just One Patch? No Problem.
            </h2>
            <h3 className="text-base font-semibold text-white/90 mb-4">
              Custom Patches With No Minimum Order
            </h3>
            <p className="text-white/85 text-sm leading-relaxed mb-5">
              Whether you need one custom patch or a small batch, we make ordering simple. Get
              personalized patches made to your specifications without being tied to a large quantity.
            </p>

            <span className="text-xs font-bold tracking-[0.2em] text-white/70 uppercase mb-3">
              Perfect for:
            </span>
            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 mb-5">
              {noMinimum.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="flex-shrink-0 w-5 h-5 bg-white/15 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  <span className="font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-white/85 text-sm leading-relaxed mt-auto pt-4 border-t border-white/20">
              From individual projects to growing businesses, you can order the quantity that works for you.
            </p>
          </div>

          {/* Bulk orders */}
          <div className="bg-[#f8f9fa] border border-gray-200 rounded-2xl p-6! lg:p-8! shadow-xl flex flex-col">
            <span className="text-xs font-bold tracking-[0.2em] text-[#e63946] uppercase mb-3">
              Need larger quantities?
            </span>
            <h2 className="text-xl lg:text-2xl font-bold text-[#1d3557] mb-2 leading-tight">
              Ordering in Bulk? We&rsquo;ve Got You Covered.
            </h2>
            <h3 className="text-base font-semibold text-[#457b9d] mb-4">
              Bulk Custom Patches for Large Orders
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Need a larger quantity? Our bulk custom patches are ideal for organizations, brands, teams,
              and businesses that need consistent quality across every patch.
            </p>

            <span className="text-xs font-bold tracking-[0.2em] text-[#1d3557]/60 uppercase mb-3">
              Bulk orders are ideal for:
            </span>
            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 mb-5">
              {bulk.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="flex-shrink-0 w-5 h-5 bg-[#e63946]/10 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#e63946]" />
                  </span>
                  <span className="font-medium text-sm text-[#1d3557]">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-600 text-sm leading-relaxed mt-auto pt-4 border-t border-gray-200">
              Whether you need hundreds or thousands of patches, we make it easy to place a bulk custom
              patch order with consistent quality from the first patch to the last.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-5">
              <Link
                href="/free-instant-quote"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white px-5! py-3! rounded-xl font-semibold text-sm transition-colors shadow-lg"
              >
                Request Your Bulk Patch Quote
              </Link>
              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#1d3557] text-[#1d3557] hover:bg-[#1d3557] hover:text-white px-5! py-3! rounded-xl font-semibold text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
