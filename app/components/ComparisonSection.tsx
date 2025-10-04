'use client';

import React from 'react';
import { motion, cubicBezier } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function ComparisonSection() {
  const competitors = [
    { name: 'Hynox CRM', logo: 'H', isUs: true },
    { name: 'Zoho CRM', logo: 'Z', isUs: false },
    { name: 'HubSpot', logo: 'H', isUs: false },
    { name: 'Salesforce', logo: 'S', isUs: false }
  ];

  const features = [
    {
      feature: 'Ease of Use',
      description: 'Simple setup and intuitive interface',
      values: [
        { icon: 'material-symbols:check-circle', text: 'Excellent', positive: true },
        { icon: 'material-symbols:remove-circle', text: 'Complex', positive: false },
        { icon: 'material-symbols:remove-circle', text: 'Steep Learning', positive: false },
        { icon: 'material-symbols:remove-circle', text: 'Very Complex', positive: false }
      ]
    },
    {
      feature: 'Built-in Invoicing',
      description: 'Native billing and invoicing capabilities',
      values: [
        { icon: 'material-symbols:check-circle', text: 'Built-in', positive: true },
        { icon: 'material-symbols:cancel', text: 'Third-party', positive: false },
        { icon: 'material-symbols:cancel', text: 'Add-on ($)', positive: false },
        { icon: 'material-symbols:cancel', text: 'Third-party', positive: false }
      ]
    },
    {
      feature: 'Multi-currency Payments',
      description: 'Global payment processing',
      values: [
        { icon: 'material-symbols:check-circle', text: 'Native', positive: true },
        { icon: 'material-symbols:cancel', text: 'Limited', positive: false },
        { icon: 'material-symbols:cancel', text: 'Add-on ($)', positive: false },
        { icon: 'material-symbols:cancel', text: 'Third-party', positive: false }
      ]
    },
    {
      feature: 'Transparent Pricing',
      description: 'No hidden fees or surprise charges',
      values: [
        { icon: 'material-symbols:check-circle', text: 'All Included', positive: true },
        { icon: 'material-symbols:cancel', text: 'Hidden Fees', positive: false },
        { icon: 'material-symbols:cancel', text: 'Per Feature', positive: false },
        { icon: 'material-symbols:cancel', text: 'Complex Tiers', positive: false }
      ]
    },
    {
      feature: 'Setup Time',
      description: 'Time to get up and running',
      values: [
        { icon: 'material-symbols:check-circle', text: '20 minutes', positive: true },
        { icon: 'material-symbols:remove-circle', text: '2-4 weeks', positive: false },
        { icon: 'material-symbols:remove-circle', text: '1-2 weeks', positive: false },
        { icon: 'material-symbols:remove-circle', text: '1-3 months', positive: false }
      ]
    },
    {
      feature: 'AI Smart Reminders',
      description: 'Intelligent automation and reminders',
      values: [
        { icon: 'material-symbols:check-circle', text: 'Built-in', positive: true },
        { icon: 'material-symbols:cancel', text: 'Basic only', positive: false },
        { icon: 'material-symbols:cancel', text: 'Add-on ($)', positive: false },
        { icon: 'material-symbols:cancel', text: 'Enterprise only', positive: false }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: cubicBezier(0.42, 0, 0.58, 1)
      }
    }
  };

  return (
    <section id="comparison" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            <span data-editor-id="app/components/ComparisonSection.tsx:104:13">How Hynox</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent font-medium">
              <span data-editor-id="app/components/ComparisonSection.tsx:106:15">Compares</span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span data-editor-id="app/components/ComparisonSection.tsx:110:13">See why businesses choose Hynox over traditional CRM solutions</span>
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          {/* Table Header */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 px-8 py-6">
            <div className="grid grid-cols-4 gap-6">
              <div></div>
              {competitors.map((competitor, index) => (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-2 ${
                    competitor.isUs 
                      ? 'bg-white text-blue-600 font-bold' 
                      : 'bg-white/20 text-white'
                  }`}>
                    <span data-editor-id={`app/components/ComparisonSection.tsx:131:21:${index}`}>{competitor.logo}</span>
                  </div>
                  <h3 className={`font-medium ${
                    competitor.isUs ? 'text-white' : 'text-white/80'
                  }`}>
                    <span data-editor-id={`app/components/ComparisonSection.tsx:137:21:${index}`}>{competitor.name}</span>
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                variants={rowVariants}
                className="px-8 py-6 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="grid grid-cols-4 gap-6 items-center">
                  {/* Feature Column */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      <span data-editor-id={`app/components/ComparisonSection.tsx:154:23:${featureIndex}`}>{feature.feature}</span>
                    </h4>
                    <p className="text-sm text-gray-500">
                      <span data-editor-id={`app/components/ComparisonSection.tsx:157:23:${featureIndex}`}>{feature.description}</span>
                    </p>
                  </div>

                  {/* Comparison Columns */}
                  {feature.values.map((value, valueIndex) => (
                    <div key={valueIndex} className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Icon 
                          icon={value.icon} 
                          className={`w-6 h-6 ${
                            value.positive 
                              ? 'text-green-500' 
                              : 'text-red-500'
                          }`} 
                        />
                      </div>
                      <span className={`text-sm font-medium ${
                        value.positive 
                          ? 'text-green-600' 
                          : 'text-gray-500'
                      }`}>
                        <span data-editor-id={`app/components/ComparisonSection.tsx:175:25:${featureIndex}:${valueIndex}`}>{value.text}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">
              <span data-editor-id="app/components/ComparisonSection.tsx:194:15">Ready to make the switch?</span>
            </h3>
            <p className="text-gray-600 mb-6">
              <span data-editor-id="app/components/ComparisonSection.tsx:197:15">Join thousands of businesses who&apos;ve simplified their sales process with Hynox</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
                <span data-editor-id="app/components/ComparisonSection.tsx:202:17">Start Free Trial</span>
                <Icon icon="solar:arrow-right-linear" className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                <Icon icon="solar:calendar-bold" className="mr-2 w-5 h-5" />
                <span data-editor-id="app/components/ComparisonSection.tsx:207:17">Schedule Demo</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
