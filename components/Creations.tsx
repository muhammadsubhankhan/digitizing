import Image from 'next/image';

const creations = [
  'https://www.bespokepatches.co.uk/frontend/images/sample/embroidered-patches/4.webp',
  'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/2.webp',
  'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/3.webp',
  'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/4.webp',
  'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/5.webp',
  'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/6.webp',
  'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/7.webp',
  'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/8.webp',
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
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square relative">
                <Image
                  src={image}
                  alt={`Custom patch creation ${index + 1}`}
                  fill
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
