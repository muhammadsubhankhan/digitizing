import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our complete range of custom patch services including embroidered patches, biker patches, military patches, PVC patches, and more.',
};

const services = [
  { slug: 'back-patches', name: 'Back Patches', image: 'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/2.webp', description: 'Large, eye-catching patches for jackets and vests' },
  { slug: 'biker-patches', name: 'Biker Patches', image: 'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/3.webp', description: 'Rugged patches for motorcycle enthusiasts' },
  { slug: 'cotton-patches', name: 'Cotton Patches', image: 'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/4.webp', description: 'Soft and comfortable cotton material patches' },
  { slug: 'embroidered-patches', name: 'Embroidered Patches', image: 'https://www.bespokepatches.co.uk/frontend/images/sample/embroidered-patches/4.webp', description: 'Classic embroidered patches with intricate designs' },
  { slug: 'iron-patches', name: 'Iron Patches', image: 'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/5.webp', description: 'Easy to apply iron-on patches' },
  { slug: 'jacket-patches', name: 'Jacket Patches', image: 'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/6.webp', description: 'Custom patches for jackets and outerwear' },
  { slug: 'military-patches', name: 'Military Patches', image: 'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/7.webp', description: 'Authentic military-style patches' },
  { slug: 'morale-patches', name: 'Morale Patches', image: 'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/8.webp', description: 'Fun patches to boost team spirit' },
  { slug: 'custom-keychain', name: 'Custom Keychain', image: 'https://www.bespokepatches.co.uk/frontend/images/sample/embroidered-patches/4.webp', description: 'Unique embroidered keychains' },
  { slug: 'sew-on-patches', name: 'Sew On Patches', image: 'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/2.webp', description: 'Traditional sew-on patches' },
  { slug: 'velcro-patches', name: 'Velcro Patches', image: 'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/3.webp', description: 'Interchangeable velcro patches' },
  { slug: 'airsoft-patches', name: 'Airsoft Patches', image: 'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/4.webp', description: 'Tactical patches for airsoft teams' },
  { slug: 'woven-labels', name: 'Woven Labels', image: 'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/5.webp', description: 'Fine-detailed woven labels' },
  { slug: 'pvc-rubber-patches', name: 'PVC Rubber Patches', image: 'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/6.webp', description: 'Durable waterproof rubber patches' },
  { slug: 'logo-patches', name: 'Logo Patches', image: 'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/7.webp', description: 'Custom logo patches for brands' },
  { slug: 'custom-caps-hats', name: 'Custom Caps Hats', image: 'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/8.webp', description: 'Custom embroidered caps and hats' },
  { slug: 'custom-chenille-patches', name: 'Custom Chenille Patches', image: 'https://www.bespokepatches.co.uk/frontend/images/sample/embroidered-patches/4.webp', description: 'Soft fuzzy chenille patches' },
  { slug: 'police-patches', name: 'Police Patches', image: 'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/2.webp', description: 'Professional law enforcement patches' },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-200">
              Explore our complete range of custom patch services. Whatever your needs,
              we have the expertise to deliver exceptional quality.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1d3557] mb-2 group-hover:text-[#e63946] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1d3557] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote. Our team is ready to help you create the perfect custom patches.
          </p>
          <Link href="/free-instant-quote" className="btn-primary">
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
