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
          Eye-Popping Embroidered Custom Patches for Every Industry
        </h2>

        <div className="grid lg:grid-cols-3 gap-16 mt-16 ">
          {/* Description */}
          <div className="space-y-8 col-span-2">
            <p className="text-gray-600 text-lg leading-relaxed">
              At Embroidered Patches, we specialize in creating premium quality custom patches
              that bring your designs to life. Whether you need patches for your business,
              sports team, military unit, motorcycle club, or any other purpose, we have the
              expertise to deliver exceptional results.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our state-of-the-art embroidery machines and skilled artisans ensure every stitch
              is perfect. We use only the highest quality materials, including premium threads
              and durable backing options, to create patches that last for years.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              From simple logos to intricate designs, we can handle projects of any complexity.
              Our design team works closely with you to ensure your vision is realized exactly
              as you imagined. With competitive pricing and fast turnaround times, we make
              custom patches accessible to everyone.
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
