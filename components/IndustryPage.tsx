import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { industries, type Industry } from '@/lib/industries';
import { breadcrumbSchema, faqPageSchema, serviceAudienceSchema } from '@/lib/schema';

/** Metadata for an audience page. Called from each route's generateMetadata. */
export function industryMetadata(slug: string): Metadata {
  const industry = industries[slug];
  return {
    title: industry.name,
    description: industry.description,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      url: `/${slug}`,
      title: industry.name,
      description: industry.description,
      images: [{ url: industry.images[0] }],
    },
    twitter: {
      title: industry.name,
      description: industry.description,
      images: [industry.images[0]],
    },
  };
}

export default function IndustryPage({ industry }: { industry: Industry }) {
  return (
    <div>
      <JsonLd data={serviceAudienceSchema(industry)} />
      <JsonLd data={faqPageSchema(industry.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: industry.name, path: `/${industry.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="gradient-bg py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{industry.name}</h1>
            <p className="text-xl text-gray-200">{industry.description}</p>
          </div>
        </div>
      </section>

      {/* Intro + images */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              {industry.intro.map((paragraph, index) => (
                <p key={index} className="text-gray-600 text-lg leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
              <Link href="/free-instant-quote" className="btn-primary">
                Get Free Quote
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {industry.images.map((image, index) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    src={image}
                    alt={`${industry.name} example ${index + 1} by Custom Patch House`}
                    width={300}
                    height={300}
                    sizes="(max-width: 1024px) 50vw, 300px"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* In-depth sections */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            {industry.sections.map((section) => (
              <div key={section.heading} className="mb-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#1d3557] mb-4">
                  {section.heading}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common orders + typical spec */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1d3557] mb-6">
                What we are usually asked for
              </h2>
              <ul className="space-y-3">
                {industry.commonOrders.map((order) => (
                  <li key={order} className="flex items-start gap-3">
                    <span className="mt-2.5 w-2 h-2 rounded-full bg-[#e63946] flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{order}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1d3557] mb-6">
                Typical specification
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {industry.typical.map((row) => (
                      <tr key={row.label} className="border-b border-gray-200">
                        <th
                          scope="row"
                          className="py-3 pr-4 align-top font-semibold text-[#1d3557] whitespace-nowrap"
                        >
                          {row.label}
                        </th>
                        <td className="py-3 text-gray-700">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#1d3557] mb-6">
            Patch types used for this
          </h2>
          <div className="flex flex-wrap gap-3">
            {industry.related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-6 py-3 rounded-full border-2 border-gray-200 text-[#1d3557] font-semibold hover:border-[#e63946] hover:text-[#e63946] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <p className="text-gray-600 text-lg mt-8 max-w-3xl">
            Not sure which suits your design?{' '}
            <Link href="/pricing" className="text-[#e63946] font-semibold hover:underline">
              See what drives the price
            </Link>{' '}
            or read our guide to{' '}
            <Link
              href="/blog/embroidered-vs-pvc-vs-woven-vs-chenille-patches"
              className="text-[#e63946] font-semibold hover:underline"
            >
              choosing between embroidered, PVC, woven and chenille
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1d3557] mb-8">
              {industry.name} — frequently asked questions
            </h2>
            <dl className="space-y-8">
              {industry.faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-xl font-semibold text-[#1d3557] mb-3">{faq.question}</dt>
                  <dd className="text-gray-600 text-lg leading-relaxed">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1d3557] mb-6">
            Get a quote for your order
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Send us your artwork, sizes and quantities. We come back the same working day with a
            price and a free digital proof.
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
