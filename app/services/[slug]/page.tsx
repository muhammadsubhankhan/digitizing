import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';
import { services, serviceSlugs, serviceTitle } from '@/lib/services';
import { breadcrumbSchema, serviceSchema, faqPageSchema } from '@/lib/schema';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return {
      title: 'Service Not Found',
      robots: { index: false, follow: false },
    };
  }

  const canonical = `/services/${slug}`;

  return {
    title: `${serviceTitle(service.name)} | Made to Order`,
    description: service.description,
    alternates: { canonical },
    openGraph: {
      url: canonical,
      title: serviceTitle(service.name),
      description: service.description,
      images: [{ url: service.images[0] }],
    },
    twitter: {
      title: serviceTitle(service.name),
      description: service.description,
      images: [service.images[0]],
    },
  };
}

export async function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    notFound();
  }

  return (
    <div>
      <JsonLd data={serviceSchema(slug, service)} />
      <JsonLd data={faqPageSchema(service.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.name, path: `/services/${slug}` },
        ])}
      />
      {/* Hero Section */}
      <section className="gradient-bg py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {serviceTitle(service.name)}
            </h1>
            <p className="text-xl text-gray-200">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Description */}
            <div>
              <h2 className="text-3xl font-bold text-[#1d3557] mb-6">
                About {serviceTitle(service.name)}
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                {service.longDescription}
              </p>

              <h3 className="text-xl font-semibold text-[#1d3557] mb-4">Key Features</h3>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#e63946]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[#e63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/free-instant-quote" className="btn-primary">
                Get Free Quote
              </Link>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              {service.images.map((image, index) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    src={image}
                    alt={`${serviceTitle(service.name)} design example ${index + 1} by Custom Patch House`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* In-depth content */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            {service.sections.map((section) => (
              <div key={section.heading} className="mb-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#1d3557] mb-4">
                  {section.heading}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-4">
            {/* Who orders this */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1d3557] mb-6">
                Who orders {service.name.toLowerCase()}
              </h2>
              <ul className="space-y-3">
                {service.useCases.map((useCase) => (
                  <li key={useCase} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#e63946] flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1d3557] mb-6">
                {serviceTitle(service.name)} specifications
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {service.specs.map((spec) => (
                      <tr key={spec.label} className="border-b border-gray-200">
                        <th
                          scope="row"
                          className="py-3 pr-4 align-top font-semibold text-[#1d3557] whitespace-nowrap"
                        >
                          {spec.label}
                        </th>
                        <td className="py-3 text-gray-700">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page-specific FAQ — the same accordion the home page uses */}
      <FAQ
        items={service.faqs}
        heading={`${serviceTitle(service.name)} Questions`}
        subheading={`What people ask us before ordering ${service.name.toLowerCase()}`}
        showCta={false}
      />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1d3557] mb-6">
            Ready to Order Your {service.name}?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get started with a free quote today. Our team is ready to bring your design to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/free-instant-quote" className="btn-primary">
              Get Free Quote
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
