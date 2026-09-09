'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const heroImages = [
    { src: '/5.webp', alt: 'Iron-on embroidered patch with detailed lettering' },
    { src: '/4 (2).webp', alt: 'Fully embroidered custom patch with vibrant thread colours' },
    { src: '/3.webp', alt: 'Custom biker patch stitched for a motorcycle club vest' },
    { src: '/2.webp', alt: 'Large embroidered back patch with a merrowed border' },
  ];
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1d3557] via-[#457b9d] to-[#1d3557] py-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white animate-fadeInUp">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Eye-Popping <span className="text-[#f4a261]">Embroidered</span> Custom Patches for Every Industry
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-8 max-w-xl">
              Transform your ideas into stunning custom patches with premium quality embroidery.
              Perfect for businesses, teams, events, and personal projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-4!">
              <Link href="/free-instant-quote" className="btn-primary bg-[#e63946] hover:bg-[#c1121f]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Order Now
              </Link>
              <button className="btn-outline-light">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Request a Call Back
              </button>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative py-4!">
            <div className="grid grid-cols-2 gap-4">
             
                {heroImages.map((image, index) => (
                  <div
                    key={image.src}
                    className="rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={300}
                      height={300}
                      sizes="(max-width: 1024px) 50vw, 300px"
                      priority={index === 0}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      className="w-full h-[250px] object-cover"
                    />
                  </div>
                ))}
           
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
