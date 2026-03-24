'use client';

import { useState, useEffect } from 'react';

const reviews = [
  {
    name: 'John Smith',
    role: 'Motorcycle Club President',
    content: 'Absolutely amazing quality! The patches for our club came out better than expected. The attention to detail is incredible.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'Event Coordinator',
    content: 'Fast delivery and excellent customer service. Our corporate event patches were a huge hit with everyone.',
    rating: 5,
  },
  {
    name: 'Mike Davis',
    role: 'Military Veteran',
    content: 'These guys understand the importance of precision. My unit patches are museum quality. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Emily Brown',
    role: 'Fashion Designer',
    content: 'The custom designs exceeded my expectations. Perfect for my clothing line. Will definitely order again!',
    rating: 5,
  },
  {
    name: 'Robert Wilson',
    role: 'Sports Team Manager',
    content: 'Great prices and even better quality. Our team patches look professional and durable.',
    rating: 4,
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle mb-16">
          Don&apos;t just take our word for it - hear from our satisfied customers
        </p>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {reviews.concat(reviews.slice(0, 3)).map((review, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-4 py-4">
                  <div className="bg-white p-6 rounded-2xl shadow-lg h-full">
                    <div className="flex items-center gap-1 mb-4">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-gray-600 mb-6 italic">&ldquo;{review.content}&rdquo;</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#e63946] to-[#c1121f] rounded-full flex items-center justify-center text-white font-bold">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1d3557]">{review.name}</h4>
                        <p className="text-sm text-gray-500">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-2 mt-12">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#e63946]' : 'bg-gray-300'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Single Card */}
        <div className="md:hidden">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-1 mb-4">
              {renderStars(reviews[currentIndex].rating)}
            </div>
            <p className="text-gray-600 mb-6 italic">&ldquo;{reviews[currentIndex].content}&rdquo;</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#e63946] to-[#c1121f] rounded-full flex items-center justify-center text-white font-bold">
                {reviews[currentIndex].name.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold text-[#1d3557]">{reviews[currentIndex].name}</h4>
                <p className="text-sm text-gray-500">{reviews[currentIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#e63946]' : 'bg-gray-300'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
