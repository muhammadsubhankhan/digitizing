'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';




const services = [
  { name: 'Back Patches', slug: 'back-patches' },
  { name: 'Biker Patches', slug: 'biker-patches' },
  { name: 'Cotton Patches', slug: 'cotton-patches' },
  { name: 'Embroidered Patches', slug: 'embroidered-patches' },
  { name: 'Iron Patches', slug: 'iron-patches' },
  { name: 'Jacket Patches', slug: 'jacket-patches' },
  { name: 'Military Patches', slug: 'military-patches' },
  { name: 'Morale Patches', slug: 'morale-patches' },
  { name: 'Custom Keychain', slug: 'custom-keychain' },
  { name: 'Sew On Patches', slug: 'sew-on-patches' },
  { name: 'Velcro Patches', slug: 'velcro-patches' },
  { name: 'Airsoft Patches', slug: 'airsoft-patches' },
  { name: 'Woven Labels', slug: 'woven-labels' },
  { name: 'PVC Rubber Patches', slug: 'pvc-rubber-patches' },
  { name: 'Logo Patches', slug: 'logo-patches' },
  { name: 'Custom Caps Hats', slug: 'custom-caps-hats' },
  { name: 'Custom Chenille Patches', slug: 'custom-chenille-patches' },
  { name: 'Police Patches', slug: 'police-patches' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Custom Patch House"
              width={58}
              height={58}
              className="w-16 h-16"
              priority
            />
            <span className="text-xl font-bold text-[#1d3557] hidden sm:block">
              Custom Patch House
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`font-medium transition-colors ${pathname === '/' ? 'text-[#e63946]' : 'text-gray-700 hover:text-[#e63946]'
                }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors ${pathname === '/about' ? 'text-[#e63946]' : 'text-gray-700 hover:text-[#e63946]'
                }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#e63946] font-medium transition-colors">
                Services
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg py-2 mt-1 max-h-96 overflow-y-auto">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-[#e63946] hover:text-white transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/samples"
              className={`font-medium transition-colors ${pathname === '/samples' ? 'text-[#e63946]' : 'text-gray-700 hover:text-[#e63946]'
                }`}
            >
              Samples
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors ${pathname === '/contact' ? 'text-[#e63946]' : 'text-gray-700 hover:text-[#e63946]'
                }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/free-instant-quote" className="btn-primary">
              Free Instant Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-2">
              <Link href="/" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                Home
              </Link>
              <Link href="/about" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                About Us
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-1">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/samples" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                Samples
              </Link>
              <Link href="/contact" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                Contact Us
              </Link>
              <Link href="/free-instant-quote" className="mx-4 mt-2 btn-primary text-center">
                Free Instant Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
