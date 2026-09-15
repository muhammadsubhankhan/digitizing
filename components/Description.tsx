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
              Bring your logo, artwork, or original idea to life with custom patches made to your
              exact requirements. We create high-quality patches for businesses, sports teams,
              schools, motorcycle clubs, military units, fashion brands, and organizations across
              the United States.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you&apos;re ordering a small batch for your team or a larger quantity for your business,
              we make it easy to order custom patches online.
              Choose your preferred size, shape, design, and quantity, and our team will help turn your
              artwork into patches that look professional and represent your brand.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Not sure if your design is ready for production? Our design team can help refine your artwork
              and prepare it for a clean, professional finish. With competitive pricing, quality production,
              and reliable turnaround, you can get custom patches without the hassle of managing the
              process yourself.
            </p>
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
