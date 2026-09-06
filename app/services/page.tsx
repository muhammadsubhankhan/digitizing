import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { serviceList, serviceTitle } from '@/lib/services';
import { breadcrumbSchema, itemListSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Custom Patch Services | Embroidered, PVC, Woven & More',
  description: 'Explore our complete range of custom patch services including embroidered patches, biker patches, military patches, PVC patches, and more.',
  alternates: { canonical: '/services' },
  openGraph: { url: '/services', title: 'Custom Patch Services' },
};

export default function ServicesPage() {
  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ])}
      />
      <JsonLd
        data={itemListSchema(
          serviceList.map((service) => ({
            name: service.name,
            path: `/services/${service.slug}`,
          }))
        )}
      />
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
            {serviceList.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${serviceTitle(service.name)} made by Custom Patch House`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
