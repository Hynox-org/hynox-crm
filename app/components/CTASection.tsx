'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    employees: '',
    requestType: 'demo'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-blue-600 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-12"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon icon="material-symbols:check" className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span data-editor-id="app/components/CTASection.tsx:42:15">Thank You!</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              <span data-editor-id="app/components/CTASection.tsx:45:15">We&apos;ve received your request. Our team will get back to you within 24 hours to schedule your personalized demo.</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => setIsSubmitted(false)}
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
              >
                <span data-editor-id="app/components/CTASection.tsx:51:17">Submit Another Request</span>
              </button>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <span data-editor-id="app/components/CTASection.tsx:54:17">Back to Home</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-teal-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              <span data-editor-id="app/components/CTASection.tsx:74:15">Ready to Transform</span><br />
              <span className="font-medium">
                <span data-editor-id="app/components/CTASection.tsx:76:17">Your Sales Process?</span>
              </span>
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              <span data-editor-id="app/components/CTASection.tsx:80:15">Join thousands of businesses that have simplified their operations and increased revenue with Hynox CRM.</span>
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon icon="material-symbols:check" className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90">
                  <span data-editor-id="app/components/CTASection.tsx:89:19">Setup in under 20 minutes</span>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon icon="material-symbols:check" className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90">
                  <span data-editor-id="app/components/CTASection.tsx:97:19">No credit card required for trial</span>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon icon="material-symbols:check" className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90">
                  <span data-editor-id="app/components/CTASection.tsx:105:19">30-day money-back guarantee</span>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon icon="material-symbols:check" className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90">
                  <span data-editor-id="app/components/CTASection.tsx:113:19">Dedicated onboarding support</span>
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">
                  <span data-editor-id="app/components/CTASection.tsx:121:19">99%</span>
                </div>
                <p className="text-sm text-white/70">
                  <span data-editor-id="app/components/CTASection.tsx:124:19">Customer Satisfaction</span>
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">
                  <span data-editor-id="app/components/CTASection.tsx:129:19">20min</span>
                </div>
                <p className="text-sm text-white/70">
                  <span data-editor-id="app/components/CTASection.tsx:132:19">Average Setup Time</span>
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">
                  <span data-editor-id="app/components/CTASection.tsx:137:19">24/7</span>
                </div>
                <p className="text-sm text-white/70">
                  <span data-editor-id="app/components/CTASection.tsx:140:19">Expert Support</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  <span data-editor-id="app/components/CTASection.tsx:157:19">Get Started Today</span>
                </h3>
                <p className="text-gray-600">
                  <span data-editor-id="app/components/CTASection.tsx:160:19">Choose your preferred way to get started with Hynox</span>
                </p>
              </div>

              {/* Request Type */}
              <div className="grid grid-cols-2 gap-4">
                <label className={`cursor-pointer p-4 rounded-xl border-2 text-center transition-colors ${
                  formData.requestType === 'demo' 
                    ? 'border-blue-500 bg-blue-50 text-blue-700' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <input
                    type="radio"
                    name="requestType"
                    value="demo"
                    checked={formData.requestType === 'demo'}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <Icon icon="solar:play-circle-bold" className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-medium">
                    <span data-editor-id="app/components/CTASection.tsx:178:21">Request Demo</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    <span data-editor-id="app/components/CTASection.tsx:181:21">See Hynox in action</span>
                  </p>
                </label>
                <label className={`cursor-pointer p-4 rounded-xl border-2 text-center transition-colors ${
                  formData.requestType === 'trial' 
                    ? 'border-green-500 bg-green-50 text-green-700' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <input
                    type="radio"
                    name="requestType"
                    value="trial"
                    checked={formData.requestType === 'trial'}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <Icon icon="solar:rocket-bold" className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-medium">
                    <span data-editor-id="app/components/CTASection.tsx:196:21">Start Free Trial</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    <span data-editor-id="app/components/CTASection.tsx:199:21">Jump right in</span>
                  </p>
                </label>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    <span data-editor-id="app/components/CTASection.tsx:207:21">Full Name</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    <span data-editor-id="app/components/CTASection.tsx:220:21">Email Address</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    <span data-editor-id="app/components/CTASection.tsx:237:21">Company Name</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                    <span data-editor-id="app/components/CTASection.tsx:250:21">Company Size</span>
                  </label>
                  <select
                    id="employees"
                    name="employees"
                    required
                    value={formData.employees}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201+">201+ employees</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  <span data-editor-id="app/components/CTASection.tsx:268:19">Phone Number (Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-medium text-white transition-all duration-200 ${
                  formData.requestType === 'demo'
                    ? 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'
                    : 'bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl'
                } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <Icon icon="eos-icons:loading" className="w-5 h-5 animate-spin" />
                    <span data-editor-id="app/components/CTASection.tsx:290:21">Processing...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Icon 
                      icon={formData.requestType === 'demo' ? 'solar:calendar-bold' : 'solar:rocket-bold'} 
                      className="w-5 h-5" 
                    />
                    <span data-editor-id="app/components/CTASection.tsx:297:21">
                      {formData.requestType === 'demo' ? 'Schedule My Demo' : 'Start My Free Trial'}
                    </span>
                  </div>
                )}
              </button>

              {/* Footer Text */}
              <p className="text-center text-sm text-gray-500">
                <span data-editor-id="app/components/CTASection.tsx:305:17">By submitting this form, you agree to our terms of service and privacy policy.</span>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}