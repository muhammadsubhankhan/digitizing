'use client';

import { useState } from 'react';
import Image from 'next/image';

const patchTypes = [
  { id: 'embroidered', name: 'Embroidered Patches', image: '/4 (1).webp' },
  { id: 'chenille', name: 'Chenille Badges', image: '/2.webp'  },
  { id: 'pvc', name: 'PVC / Rubber Badges', image: '/3.webp'  },
  { id: '3d-puff', name: '3D Puff Embroidery', image:'/4 (2).webp'},
  { id: 'woven', name: 'Woven Badges', image: '/5.webp'},
  { id: 'leather', name: 'Leather Badges', image: '/6.webp' },
  { id: 'sublimation', name: 'Sublimated Badges', image: '/7.webp'},
  { id: 'other', name: 'Other Type', image: '/8.webp' },
];

const coverageOptions = [
  { id: '50', label: '50%', description: 'Twill backing with 50% embroidery' },
  { id: '75', label: '75%', description: '75% embroidery coverage' },
  { id: '100', label: '100%', description: 'Full embroidery coverage' },
];

const quantities = [25, 50, 100, 200, 300, 500, 1000, 2000];

const backingTypes = [
  { id: 'heat-seal', name: 'Heat Seal', icon: '🔥' },
  { id: 'velcro', name: 'Velcro', icon: '🎯' },
  { id: 'sew-on', name: 'Sew On', icon: '🧵' },
  { id: 'peel-stick', name: 'Peel & Stick', icon: '📋' },
  { id: 'plastic', name: 'Plastic', icon: '💠' },
  { id: 'non-woven', name: 'Non-Woven', icon: '📄' },
];

const borderTypes = [
  { id: 'merrow', name: 'Merrow Border' },
  { id: 'satin', name: 'Satin Border' },
  { id: 'laser-cut', name: 'Laser Cut' },
];

const threadTypes = [
  { id: 'normal', name: 'Normal' },
  { id: 'metallic', name: 'Metallic' },
  { id: 'madeira', name: 'Madeira' },
];

const imageUrls = [
'4 (1).webp',
'4 (2).webp',
'5.webp' ,
'2.webp',
'3.webp',
'8.webp',
'6.webp',
'7.webp',
]

export default function FreeInstantQuote() {
  const [isSubmitting, setIsSubmitting] = useState(false);
const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    patchType: '',
    height: '',
    width: '',
    delivery: 'standard',
    coverage: '50',
    quantity: 100,
    customQuantity: '',
    backing: '',
    border: '',
    thread: 'normal',
    designName: '',
    file: null as File | null,
    details: '',
    fullName: '',
    phone: '',
    email: '',
    company: '',
    agreeTerms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const res = await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          fullName: formData.fullName,
          patchType: formData.patchType,
          quantity: formData.customQuantity || formData.quantity,
          size: `${formData.height}" × ${formData.width}"`,
          delivery: formData.delivery,
          backing: formData.backing,
          border: formData.border,
          thread: formData.thread,
          designName: formData.designName,
          company: formData.company,
          phone: formData.phone,
        }),
      });
  
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      alert('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {submitted && (
  <div className="bg-white rounded-3xl shadow-lg p-12 mt-8 text-center">
    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <h2 className="text-3xl font-bold text-[#1d3557] mb-3">Quote Request Submitted!</h2>
    <p className="text-gray-500 text-lg">
      A confirmation email has been sent to <strong>{formData.email}</strong>.<br />
      We'll get back to you within 24 hours.
    </p>
  </div>
)}
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-[#1d3557] to-[#457b9d] py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-5 py-2 bg-white/10 text-white rounded-full text-sm font-bold tracking-wide mb-5">
            FREE QUOTE
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Create Your Custom Order
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Fill out the form below and get an instant quote for your custom patches
          </p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="container mx-auto px-4 py-8!">
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                      currentStep >= step
                        ? 'bg-[#e63946] text-white shadow-lg'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {currentStep > step ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step
                    )}
                  </div>
                  <span className={`text-xs mt-2 font-medium ${currentStep >= step ? 'text-[#1d3557]' : 'text-gray-400'}`}>
                    {step === 1 && 'Patch Type'}
                    {step === 2 && 'Customize'}
                    {step === 3 && 'Options'}
                    {step === 4 && 'Details'}
                  </span>
                </div>
                {step < 4 && (
                  <div className={`flex-1 h-1 mx-4 rounded ${currentStep > step ? 'bg-[#e63946]' : 'bg-gray-100'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Patch Type */}
          {currentStep === 1 && (
            <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12 mt-8">
              <h2 className="text-2xl font-bold text-[#1d3557] mb-2">Select Patch Type</h2>
              <p className="text-gray-500 mb-8">Choose the type of patch you want to create</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {patchTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, patchType: type.id }))}
                    className={`cursor-pointer group relative p-4 rounded-2xl transition-all duration-300 ${
                      formData.patchType === type.id
                        ? 'bg-[#1d3557] shadow-xl scale-105'
                        : 'bg-[#f8f9fa] hover:bg-gray-100 hover:shadow-md'
                    }`}
                  >
                    <div className="w-full aspect-square rounded-xl overflow-hidden mb-3">
                      <Image
                        src={type.image}
                        alt={type.name}
                        width={150}
                        height={150}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className={`font-semibold text-sm text-center ${
                      formData.patchType === type.id ? 'text-white' : 'text-[#1d3557]'
                    }`}>
                      {type.name}
                    </h3>
                    {formData.patchType === type.id && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-[#e63946] rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Customize */}
          {currentStep === 2 && (
            <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-[#1d3557] mb-2">Customize Your Order</h2>
              <p className="text-gray-500 mb-8">Select size, delivery time, and quantity</p>

              {/* Size */}
              <div className="mb-10">
                <label className="block text-sm font-bold text-[#1d3557] mb-4">Patch Size (Inches)</label>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <input
                      type="number"
                      name="height"
                      placeholder="Height"
                      value={formData.height}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-[#f8f9fa] rounded-xl text-[#1d3557] font-medium focus:outline-none focus:ring-2 focus:ring-[#e63946]"
                    />
                  </div>
                  <span className="text-2xl text-gray-300">×</span>
                  <div className="flex-1">
                    <input
                      type="number"
                      name="width"
                      placeholder="Width"
                      value={formData.width}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-[#f8f9fa] rounded-xl text-[#1d3557] font-medium focus:outline-none focus:ring-2 focus:ring-[#e63946]"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery */}
              <div className="mb-10">
                <label className="block text-sm font-bold text-[#1d3557] mb-4">Delivery Time</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, delivery: 'standard' }))}
                    className={`p-6 rounded-2xl text-center transition-all ${
                      formData.delivery === 'standard'
                        ? 'bg-[#1d3557] text-white shadow-lg'
                        : 'bg-[#f8f9fa] text-[#1d3557] hover:bg-gray-100'
                    }`}
                  >
                    <div className="text-3xl mb-2">📦</div>
                    <h3 className="font-bold text-lg">Standard</h3>
                    <p className={`text-sm ${formData.delivery === 'standard' ? 'text-gray-300' : 'text-gray-500'}`}>20-30 Days</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, delivery: 'express' }))}
                    className={`p-6 rounded-2xl text-center transition-all ${
                      formData.delivery === 'express'
                        ? 'bg-[#1d3557] text-white shadow-lg'
                        : 'bg-[#f8f9fa] text-[#1d3557] hover:bg-gray-100'
                    }`}
                  >
                    <div className="text-3xl mb-2">🚀</div>
                    <h3 className="font-bold text-lg">Express</h3>
                    <p className={`text-sm ${formData.delivery === 'express' ? 'text-gray-300' : 'text-gray-500'}`}>10-14 Days</p>
                  </button>
                </div>
              </div>

              {/* Coverage */}
              <div className="mb-10">
                <label className="block text-sm font-bold text-[#1d3557] mb-4">Embroidery Coverage</label>
                <div className="grid grid-cols-3 gap-4">
                  {coverageOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, coverage: option.id }))}
                      className={`p-5 rounded-2xl text-center transition-all ${
                        formData.coverage === option.id
                          ? 'bg-[#e63946] text-white shadow-lg'
                          : 'bg-[#f8f9fa] text-[#1d3557] hover:bg-gray-100'
                      }`}
                    >
                      <h3 className="font-bold text-2xl mb-1">{option.label}</h3>
                      <p className={`text-xs ${formData.coverage === option.id ? 'text-white/80' : 'text-gray-500'}`}>
                        {option.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-bold text-[#1d3557] mb-4">Quantity</label>
                <div className="flex flex-wrap gap-3">
                  {quantities.map((qty) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, quantity: qty, customQuantity: '' }))}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                        formData.quantity === qty && !formData.customQuantity
                          ? 'bg-[#e63946] text-white shadow-lg'
                          : 'bg-[#f8f9fa] text-[#1d3557] hover:bg-gray-100'
                      }`}
                    >
                      {qty}
                    </button>
                  ))}
                  <input
                    type="number"
                    name="customQuantity"
                    placeholder="Custom"
                    value={formData.customQuantity}
                    onChange={(e) => setFormData(prev => ({ ...prev, customQuantity: e.target.value, quantity: 0 }))}
                    className="w-28 px-4 py-3 bg-[#f8f9fa] rounded-xl text-[#1d3557] font-medium focus:outline-none focus:ring-2 focus:ring-[#e63946]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Options */}
          {currentStep === 3 && (
            <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-[#1d3557] mb-2">Additional Options</h2>
              <p className="text-gray-500 mb-8">Select backing, border, and thread type</p>

              {/* Backing */}
              <div className="mb-10">
                <label className="block text-sm font-bold text-[#1d3557] mb-4">Backing Type</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {backingTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, backing: type.id }))}
                      className={`p-5 rounded-2xl text-center transition-all ${
                        formData.backing === type.id
                          ? 'bg-[#1d3557] text-white shadow-lg'
                          : 'bg-[#f8f9fa] text-[#1d3557] hover:bg-gray-100'
                      }`}
                    >
                      <div className="text-3xl mb-2">{type.icon}</div>
                      <h3 className="font-semibold">{type.name}</h3>
                    </button>
                  ))}
                </div>
              </div>

              {/* Border */}
              <div className="mb-10">
                <label className="block text-sm font-bold text-[#1d3557] mb-4">Border Type</label>
                <div className="grid grid-cols-3 gap-4">
                  {borderTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, border: type.id }))}
                      className={`p-5 rounded-2xl text-center transition-all ${
                        formData.border === type.id
                          ? 'bg-[#e63946] text-white shadow-lg'
                          : 'bg-[#f8f9fa] text-[#1d3557] hover:bg-gray-100'
                      }`}
                    >
                      <h3 className="font-semibold">{type.name}</h3>
                    </button>
                  ))}
                </div>
              </div>

              {/* Thread */}
              <div>
                <label className="block text-sm font-bold text-[#1d3557] mb-4">Thread Type</label>
                <div className="grid grid-cols-3 gap-4">
                  {threadTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, thread: type.id }))}
                      className={`p-5 rounded-2xl text-center transition-all ${
                        formData.thread === type.id
                          ? 'bg-[#e63946] text-white shadow-lg'
                          : 'bg-[#f8f9fa] text-[#1d3557] hover:bg-gray-100'
                      }`}
                    >
                      <h3 className="font-semibold">{type.name}</h3>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Details */}
          {currentStep === 4 && (
            <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-[#1d3557] mb-2">Final Details</h2>
              <p className="text-gray-500 mb-8">Upload your design and provide contact information</p>

              {/* Design Upload */}
              <div className="mb-10">
                <label className="block text-sm font-bold text-[#1d3557] mb-4">Upload Design</label>
                <div className="relative">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                    accept=".jpg,.jpeg,.png,.pdf,.ai,.eps"
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex flex-col items-center justify-center w-full h-40 bg-[#f8f9fa] rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    <span className="text-gray-500 font-medium">
                      {formData.file ? formData.file.name : 'Click to upload your design'}
                    </span>
                    <span className="text-gray-400 text-sm mt-1">JPG, PNG, PDF, AI, EPS</span>
                  </label>
                </div>
              </div>

              {/* Design Name */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-[#1d3557] mb-3">Design Name</label>
                <input
                  type="text"
                  name="designName"
                  value={formData.designName}
                  onChange={handleInputChange}
                  placeholder="Enter a name for your design"
                  className="w-full px-5 py-4 bg-[#f8f9fa] rounded-xl text-[#1d3557] font-medium focus:outline-none focus:ring-2 focus:ring-[#e63946]"
                />
              </div>

              {/* Additional Details */}
              <div className="mb-10">
                <label className="block text-sm font-bold text-[#1d3557] mb-3">Additional Details</label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Any special requirements or instructions..."
                  className="w-full px-5 py-4 bg-[#f8f9fa] rounded-xl text-[#1d3557] font-medium focus:outline-none focus:ring-2 focus:ring-[#e63946] resize-none"
                />
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-bold text-[#1d3557] mb-3">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-[#f8f9fa] rounded-xl text-[#1d3557] font-medium focus:outline-none focus:ring-2 focus:ring-[#e63946]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1d3557] mb-3">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-[#f8f9fa] rounded-xl text-[#1d3557] font-medium focus:outline-none focus:ring-2 focus:ring-[#e63946]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1d3557] mb-3">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-[#f8f9fa] rounded-xl text-[#1d3557] font-medium focus:outline-none focus:ring-2 focus:ring-[#e63946]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1d3557] mb-3">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-[#f8f9fa] rounded-xl text-[#1d3557] font-medium focus:outline-none focus:ring-2 focus:ring-[#e63946]"
                  />
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-5 h-5 text-[#e63946] rounded focus:ring-[#e63946]"
                />
                <span className="text-gray-600 text-sm">
                  I agree to the Terms & Conditions and understand that once the design is approved and production begins, the order is non-refundable.
                </span>
              </label>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pb-8">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="cursor-pointer flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-[#1d3557] bg-white shadow-lg hover:shadow-xl transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            ) : (
              <div />
            )}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="cursor-pointer flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-[#e63946] hover:bg-[#c1121f] shadow-lg hover:shadow-xl transition-all"
              >
                Continue
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer flex items-center gap-2 px-4 md:px-10 py-4 rounded-xl font-semibold text-white bg-[#e63946] hover:bg-[#c1121f] shadow-lg hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              {!isSubmitting && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
