'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, cubicBezier } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function ScreenshotsSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Dashboard Overview",
      description: "Get a complete view of your sales pipeline, recent activities, and key metrics at a glance.",
      screenshot: {
        title: "Hynox CRM Dashboard",
        content: (
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">
                  <span data-editor-id="app/components/ScreenshotsSection.tsx:19:19">Active Leads</span>
                </h4>
                <p className="text-2xl font-bold text-blue-700">47</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">
                  <span data-editor-id="app/components/ScreenshotsSection.tsx:24:19">Deals Won</span>
                </h4>
                <p className="text-2xl font-bold text-green-700">$125K</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg">
                <h4 className="font-medium text-purple-900 mb-2">
                  <span data-editor-id="app/components/ScreenshotsSection.tsx:29:19">Invoices Sent</span>
                </h4>
                <p className="text-2xl font-bold text-purple-700">23</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-4">
                <span data-editor-id="app/components/ScreenshotsSection.tsx:35:17">Recent Activity</span>
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Icon icon="material-symbols:person" className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">
                    <span data-editor-id="app/components/ScreenshotsSection.tsx:42:21">New lead: John Smith from TechCorp</span>
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon icon="mdi:invoice" className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">
                    <span data-editor-id="app/components/ScreenshotsSection.tsx:49:21">Invoice #1234 paid - $5,000</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )
      }
    },
    {
      title: "Lead Management",
      description: "Capture, qualify, and nurture leads with our intelligent lead management system.",
      screenshot: {
        title: "Lead Detail View",
        content: (
          <div className="bg-white p-6 rounded-lg border">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  <span data-editor-id="app/components/ScreenshotsSection.tsx:66:19">John Smith</span>
                </h3>
                <p className="text-gray-600">
                  <span data-editor-id="app/components/ScreenshotsSection.tsx:69:19">Senior Manager at TechCorp</span>
                </p>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                <span data-editor-id="app/components/ScreenshotsSection.tsx:73:17">Hot Lead</span>
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">
                  <span data-editor-id="app/components/ScreenshotsSection.tsx:79:19">Contact Information</span>
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <span data-editor-id="app/components/ScreenshotsSection.tsx:83:21">📧 john.smith@techcorp.com</span>
                  </p>
                  <p>
                    <span data-editor-id="app/components/ScreenshotsSection.tsx:86:21">📞 +1 (555) 123-4567</span>
                  </p>
                  <p>
                    <span data-editor-id="app/components/ScreenshotsSection.tsx:89:21">🏢 TechCorp Solutions Inc.</span>
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-3">
                  <span data-editor-id="app/components/ScreenshotsSection.tsx:95:19">Deal Information</span>
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <span data-editor-id="app/components/ScreenshotsSection.tsx:99:21">💰 Potential Value: $15,000</span>
                  </p>
                  <p>
                    <span data-editor-id="app/components/ScreenshotsSection.tsx:102:21">📅 Expected Close: March 15</span>
                  </p>
                  <p>
                    <span data-editor-id="app/components/ScreenshotsSection.tsx:105:21">🎯 Stage: Proposal Sent</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors mr-3">
                <span data-editor-id="app/components/ScreenshotsSection.tsx:112:17">Convert to Invoice</span>
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                <span data-editor-id="app/components/ScreenshotsSection.tsx:115:17">Schedule Follow-up</span>
              </button>
            </div>
          </div>
        )
      }
    },
    {
      title: "Invoice Generation",
      description: "Convert leads to invoices instantly with one-click invoice generation.",
      screenshot: {
        title: "Invoice Creation",
        content: (
          <div className="bg-white p-6 rounded-lg border">
            <div className="border-b pb-4 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <span data-editor-id="app/components/ScreenshotsSection.tsx:130:17">Invoice #INV-2024-001</span>
              </h3>
              <div className="flex justify-between text-sm text-gray-600">
                <span>
                  <span data-editor-id="app/components/ScreenshotsSection.tsx:134:19">Date: March 10, 2024</span>
                </span>
                <span>
                  <span data-editor-id="app/components/ScreenshotsSection.tsx:137:19">Due: March 25, 2024</span>
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  <span data-editor-id="app/components/ScreenshotsSection.tsx:144:19">Bill To:</span>
                </h4>
                <div className="text-sm text-gray-600">
                  <p>
                    <span data-editor-id="app/components/ScreenshotsSection.tsx:148:21">John Smith</span>
                  </p>
                  <p>
                    <span data-editor-id="app/components/ScreenshotsSection.tsx:151:21">TechCorp Solutions Inc.</span>
                  </p>
                  <p>
                    <span data-editor-id="app/components/ScreenshotsSection.tsx:154:21">john.smith@techcorp.com</span>
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  <span data-editor-id="app/components/ScreenshotsSection.tsx:160:19">Payment Methods:</span>
                </h4>
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">USD</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">EUR</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">GBP</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h5 className="font-medium text-gray-900">
                    <span data-editor-id="app/components/ScreenshotsSection.tsx:173:21">CRM Implementation & Setup</span>
                  </h5>
                  <p className="text-sm text-gray-600">
                    <span data-editor-id="app/components/ScreenshotsSection.tsx:176:21">Complete CRM setup with data migration</span>
                  </p>
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  <span data-editor-id="app/components/ScreenshotsSection.tsx:180:19">$15,000.00</span>
                </span>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t">
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                <span data-editor-id="app/components/ScreenshotsSection.tsx:186:17">Send Invoice</span>
              </button>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">
                  <span data-editor-id="app/components/ScreenshotsSection.tsx:190:19">Total: $15,000.00</span>
                </p>
              </div>
            </div>
          </div>
        )
      }
    },
    {
      title: "Payment Received",
      description: "Track payments in real-time with automated notifications and updates.",
      screenshot: {
        title: "Payment Confirmation",
        content: (
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon="material-symbols:check" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                <span data-editor-id="app/components/ScreenshotsSection.tsx:206:17">Payment Received!</span>
              </h3>
              <p className="text-green-700">
                <span data-editor-id="app/components/ScreenshotsSection.tsx:209:17">Invoice #INV-2024-001 has been paid successfully</span>
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg mb-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 mb-1">
                    <span data-editor-id="app/components/ScreenshotsSection.tsx:217:21">Payment Amount:</span>
                  </p>
                  <p className="font-semibold text-gray-900">
                    <span data-editor-id="app/components/ScreenshotsSection.tsx:220:21">$15,000.00 USD</span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">
                    <span data-editor-id="app/components/ScreenshotsSection.tsx:225:21">Payment Date:</span>
                  </p>
                  <p className="font-semibold text-gray-900">
                    <span data-editor-id="app/components/ScreenshotsSection.tsx:228:21">March 12, 2024</span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">
                    <span data-editor-id="app/components/ScreenshotsSection.tsx:233:21">Customer:</span>
                  </p>
                  <p className="font-semibold text-gray-900">
                    <span data-editor-id="app/components/ScreenshotsSection.tsx:236:21">John Smith - TechCorp</span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">
                    <span data-editor-id="app/components/ScreenshotsSection.tsx:241:21">Payment Method:</span>
                  </p>
                  <p className="font-semibold text-gray-900">
                    <span data-editor-id="app/components/ScreenshotsSection.tsx:244:21">Bank Transfer</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button className="flex-1 bg-white border border-green-300 text-green-700 py-2 px-4 rounded-lg hover:bg-green-50 transition-colors">
                <span data-editor-id="app/components/ScreenshotsSection.tsx:251:17">Download Receipt</span>
              </button>
              <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                <span data-editor-id="app/components/ScreenshotsSection.tsx:254:17">Send Thank You</span>
              </button>
            </div>
          </div>
        )
      }
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

  const stepVariants = {
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
    <section className="py-24 bg-white">
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
            <span data-editor-id="app/components/ScreenshotsSection.tsx:290:13">Complete</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent font-medium">
              <span data-editor-id="app/components/ScreenshotsSection.tsx:292:15">Workflow</span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span data-editor-id="app/components/ScreenshotsSection.tsx:296:13">See how Hynox streamlines your entire sales process from lead to payment</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Steps Navigation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activeStep === index
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                    activeStep === index ? 'bg-blue-600' : 'bg-gray-400'
                  }`}>
                    <span data-editor-id={`app/components/ScreenshotsSection.tsx:323:21:${index}`}>{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-medium mb-2 ${
                      activeStep === index ? 'text-blue-900' : 'text-gray-900'
                    }`}>
                      <span data-editor-id={`app/components/ScreenshotsSection.tsx:329:23:${index}`}>{step.title}</span>
                    </h3>
                    <p className={`${
                      activeStep === index ? 'text-blue-700' : 'text-gray-600'
                    }`}>
                      <span data-editor-id={`app/components/ScreenshotsSection.tsx:334:23:${index}`}>{step.description}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Screenshot Display */}
          <div className="lg:sticky lg:top-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
              >
                {/* Mock Browser Header */}
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="ml-4 bg-white px-3 py-1 rounded text-sm text-gray-600">
                      <span data-editor-id={`app/components/ScreenshotsSection.tsx:358:23:${activeStep}`}>{steps[activeStep].screenshot.title}</span>
                    </div>
                  </div>
                </div>
                
                {/* Screenshot Content */}
                <div className="p-6">
                  {steps[activeStep].screenshot.content}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-medium text-gray-900 mb-4">
            <span data-editor-id="app/components/ScreenshotsSection.tsx:377:13">Experience this workflow yourself</span>
          </h3>
          <p className="text-gray-600 mb-8">
            <span data-editor-id="app/components/ScreenshotsSection.tsx:380:13">Get started with Hynox CRM today and see how simple sales can be</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
              <span data-editor-id="app/components/ScreenshotsSection.tsx:385:15">Try It Free</span>
              <Icon icon="solar:arrow-right-linear" className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200">
              <Icon icon="solar:play-circle-bold" className="mr-2 w-5 h-5" />
              <span data-editor-id="app/components/ScreenshotsSection.tsx:390:15">Watch Demo</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
