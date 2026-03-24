import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Embroidered Patches - delivering high-quality custom embroidered patches since 2010. Our commitment to quality and customer satisfaction.',
};

const values = [
  {
    title: 'Quality First',
    description: 'We never compromise on quality. Every patch is crafted with precision using premium materials.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Customer Focused',
    description: 'Your satisfaction is our priority. We work closely with you to bring your vision to life.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Fast Delivery',
    description: 'We understand urgency. Our streamlined process ensures quick turnaround times.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    description: 'We stay ahead with the latest embroidery technology and design techniques.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const team = [
  { name: 'Design Team', count: '25+', description: 'Expert designers creating stunning patch designs' },
  { name: 'Production Team', count: '40+', description: 'Skilled artisans operating state-of-the-art machines' },
  { name: 'Quality Control', count: '10+', description: 'Ensuring every patch meets our high standards' },
  { name: 'Customer Support', count: '15+', description: 'Dedicated to your satisfaction' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About Embroidered Patches
            </h1>
            <p className="text-xl text-gray-200">
              Delivering premium quality custom patches since 2010. We&apos;re passionate about
              bringing your designs to life with exceptional craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1d3557] mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Embroidered Patches started with a simple mission: to provide
                high-quality custom patches that exceed customer expectations. What began as a
                small workshop has grown into a trusted name in the industry.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we&apos;ve had the privilege of working with thousands of customers,
                from small businesses and sports teams to military units and large corporations.
                Each project has helped us refine our craft and expand our capabilities.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we operate a state-of-the-art facility equipped with the latest embroidery
                technology, staffed by a team of passionate artisans who take pride in every
                stitch they create.
              </p>
              <Link href="/contact" className="btn-primary">
                Get In Touch
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/4 (1).webp"
                  alt="Our craftsmanship"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                <Image
                  src="/2.webp"
                  alt="Quality patches"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/3.webp"
                  alt="Custom designs"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                <Image
                  src="/5.webp"
                  alt="Attention to detail"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#e63946]/10 rounded-xl flex items-center justify-center text-[#e63946] mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1d3557] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">
            Meet the dedicated professionals behind every patch
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((dept, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-4xl font-bold text-[#e63946] mb-2">{dept.count}</div>
                <h3 className="text-lg font-semibold text-[#1d3557] mb-2">{dept.name}</h3>
                <p className="text-gray-600 text-sm">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Create Your Custom Patches?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let&apos;s bring your vision to life. Get a free quote today and experience the
            Embroidered Patches difference.
          </p>
          <Link href="/free-instant-quote" className="btn-primary bg-white text-[#1d3557] hover:bg-gray-100">
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
