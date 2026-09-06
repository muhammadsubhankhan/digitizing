import Image from 'next/image';

const creations = [
  { src: '/4 (1).webp', alt: 'Cotton twill custom patch with 75% embroidery coverage' },
  { src: '/2.webp', alt: 'Large embroidered back patch with a merrowed border' },
  { src: '/3.webp', alt: 'Custom biker patch stitched for a motorcycle club vest' },
  { src: '/5.webp', alt: 'Iron-on embroidered patch with detailed lettering' },
  { src: '/4 (2).webp', alt: 'Fully embroidered custom patch with vibrant thread colours' },
  { src: '/6.webp', alt: 'Custom jacket patch built for outdoor wear' },
  { src: '/7.webp', alt: 'Subdued military-style patch with velcro backing' },
  { src: '/8.webp', alt: 'Custom morale patch with a hook-and-loop back' },
];

export default function Creations() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="section-title max-w-4xl mx-auto text-center mb-4">
          Best-In-Class Creations Of Customised Embroidered Badges
        </h2>
        <p className="section-subtitle">
          Explore our collection of premium quality custom patches crafted with precision and care
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {creations.map((image, index) => (
            <div
              key={image.src}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium">Custom Patch #{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
