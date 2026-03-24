'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

const categories = [
  { id: 'embroidered-patches', name: 'Embroidered Patches', images: [
    'https://www.bespokepatches.co.uk/frontend/images/sample/embroidered-patches/4.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/2.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/3.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/4.webp',
  ]},
  { id: 'biker-patches', name: 'Biker Patches', images: [
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/2.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/3.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/4.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/5.webp',
  ]},
  { id: 'cotton-patches', name: 'Cotton Patches', images: [
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/6.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/7.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/8.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/embroidered-patches/4.webp',
  ]},
  { id: 'iron-patches', name: 'Iron Patches', images: [
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/3.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/5.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/7.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/2.webp',
  ]},
  { id: 'military-patches', name: 'Military Patches', images: [
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/4.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/6.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/8.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/embroidered-patches/4.webp',
  ]},
  { id: 'morale-patches', name: 'Morale Patches', images: [
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/5.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/7.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/2.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/4.webp',
  ]},
  { id: 'velcro-patches', name: 'Velcro Patches', images: [
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/6.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/8.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/embroidered-patches/4.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/3.webp',
  ]},
  { id: 'sew-on-patches', name: 'Sew On Patches', images: [
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/7.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/2.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/5.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/6.webp',
  ]},
  { id: 'back-patches', name: 'Back Patches', images: [
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/8.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/embroidered-patches/4.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/4.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/7.webp',
  ]},
  { id: 'jacket-patches', name: 'Jacket Patches', images: [
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/2.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/6.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/3.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/8.webp',
  ]},
  { id: 'logo-patches', name: 'Logo Patches', images: [
    'https://www.bespokepatches.co.uk/frontend/images/sample/embroidered-patches/4.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/5.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/2.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/4.webp',
  ]},
  { id: 'pvc-rubber-patches', name: 'PVC Rubber Patches', images: [
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/3.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/7.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/6.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/embroidered-patches/4.webp',
  ]},
  { id: 'custom-chenille-patches', name: 'Custom Chenille Patches', images: [
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/4.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/8.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/5.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/3.webp',
  ]},
  { id: 'custom-caps-hats', name: 'Custom Caps Hats', images: [
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/5.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/2.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/7.webp',
    'https://www.bespokepatches.co.uk/frontend/images/sample/biker-patches/4.webp',
  ]},
];

const stats = [
  { value: '50,000+', label: 'Patches Delivered' },
  { value: '400+', label: 'Patches in Process' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '79+', label: 'Awesome Designers' },
];

export default function SamplesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Patch Samples
            </h1>
            <p className="text-xl text-gray-200">
              Browse through our collection of custom patches across different categories.
              Click on any category to see detailed samples.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#e63946]">{stat.value}</div>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Browse By Category</h2>
          <p className="section-subtitle">
            Select a category to view sample patches
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                className={`p-4 rounded-xl text-center transition-all ${
                  selectedCategory === category.id
                    ? 'bg-[#e63946] text-white shadow-lg'
                    : 'bg-white text-[#1d3557] hover:shadow-lg border border-gray-200'
                }`}
              >
                <div className="w-16 h-16 mx-auto mb-3 rounded-lg overflow-hidden">
                  <Image
                    src={category.images[0]}
                    alt={category.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium text-sm">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Selected Category Images */}
          {selectedCategory && (
            <div className="mt-12 animate-fadeInUp">
              <h3 className="text-2xl font-bold text-[#1d3557] mb-6 text-center">
                {categories.find(c => c.id === selectedCategory)?.name} Samples
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categories.find(c => c.id === selectedCategory)?.images.map((image, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
                    <div className="aspect-square relative">
                      <Image
                        src={image}
                        alt={`Sample ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white font-medium">Sample #{index + 1}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
