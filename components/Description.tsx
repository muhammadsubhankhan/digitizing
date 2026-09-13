import ImageCarousel from './ImageCarousel';

const carouselImages = [
  '/7.webp',
  '/5.webp',
  '/4 (2).webp',
  '/3.webp',
  '/2.webp',
];

export default function Description() {
  return (
    <section className="py-10!">
      <div className="container mx-auto px-4">
        <h2 className="section-title max-w-3xl mx-auto! text-center">
          Custom Patches Made to Order for Every Industry Across the USA
        </h2>

        <div className="grid lg:grid-cols-3 gap-16 mt-16 ">
          {/* Description */}
          <div className="space-y-8 col-span-2">
            <p className="text-gray-600 text-lg leading-relaxed">
              Bring your logo, artwork, or original idea to life with{' '}
              <strong className="font-semibold text-[#1d3557]">custom patches made to your exact requirements</strong>.
              We create high-quality patches for businesses, sports teams, schools, motorcycle clubs,
              military units, fashion brands, and organizations across the{' '}
              <strong className="font-semibold text-[#1d3557]">United States</strong>.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you&apos;re ordering a small batch for your team or a larger quantity for your business,
              we make it easy to <strong className="font-semibold text-[#1d3557]">order custom patches online</strong>.
              Choose your preferred size, shape, design, and quantity, and our team will help turn your
              artwork into patches that look professional and represent your brand.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Not sure if your design is ready for production? Our design team can help refine your artwork
              and prepare it for a clean, professional finish. With{' '}
              <strong className="font-semibold text-[#1d3557]">competitive pricing, quality production, and reliable turnaround</strong>,
              you can get custom patches without the hassle of managing the process yourself.
            </p>

            <div className="grid grid-cols-2 gap-5 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#e63946]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#e63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-[#1d3557]">Premium Quality</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#e63946]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#e63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-[#1d3557]">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#e63946]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#e63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-[#1d3557]">Affordable Prices</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#e63946]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#e63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-[#1d3557]">Free Design Help</span>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div className="max-w-md ">
            <ImageCarousel images={carouselImages} />
          </div>
        </div>
      </div>
    </section>
  );
}
