'use client';

import React from 'react';
import { motion, cubicBezier } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function FeaturesSection() {
  const features = [
    {
      category: "Lead Management",
      icon: "material-symbols:person",
      items: [
        "Lead capture from multiple channels",
        "Lead scoring and qualification",
        "Automated lead distribution",
        "Lead nurturing workflows"
      ]
    },
    {
      category: "Sales Pipeline",
      icon: "material-symbols:dashboard",
      items: [
        "Visual pipeline management",
        "Deal tracking and forecasting",
        "Stage-based automation",
        "Sales performance analytics"
      ]
    },
    {
      category: "Task & Activity Management",
      icon: "material-symbols:task",
      items: [
        "Task assignment and tracking",
        "Calendar integration",
        "Activity timeline",
        "Team collaboration tools"
      ]
    },
    {
      category: "Built-in Invoicing",
      icon: "mdi:invoice",
      highlighted: true,
      items: [
        "One-click lead-to-invoice conversion",
        "Customizable invoice templates",
        "Automated invoice generation",
        "Invoice tracking and reminders"
      ]
    },
    {
      category: "Global Payments",
      icon: "ic:baseline-payment",
      highlighted: true,
      items: [
        "Multi-currency support (USD, EUR, INR, GBP)",
        "Integrated payment links",
        "Payment tracking and reconciliation",
        "Automated payment notifications"
      ]
    },
    {
      category: "AI Smart Reminders",
      icon: "hugeicons:artificial-intelligence-01",
      highlighted: true,
      items: [
        "Intelligent follow-up suggestions",
        "Overdue invoice alerts",
        "Meeting and call reminders",
        "Custom reminder workflows"
      ]
    },
    {
      category: "Analytics & Reporting",
      icon: "material-symbols:analytics",
      items: [
        "Real-time sales dashboards",
        "Custom report builder",
        "Performance metrics tracking",
        "Revenue forecasting"
      ]
    },
    {
      category: "Integration & API",
      icon: "carbon:integration",
      items: [
        "Email marketing integration",
        "Calendar sync (Google, Outlook)",
        "REST API access",
        "Webhook notifications"
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: cubicBezier(0.42, 0, 0.58, 1)
      }
    }
  };

  return (
    <section id="features" className="py-24 bg-white">
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
            <span data-editor-id="app/components/FeaturesSection.tsx:95:13">Complete CRM</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent font-medium">
              <span data-editor-id="app/components/FeaturesSection.tsx:97:15">Features</span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span data-editor-id="app/components/FeaturesSection.tsx:101:13">Everything you need to manage leads, close deals, send invoices, and collect payments — all integrated seamlessly.</span>
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className={`group relative p-6 rounded-2xl transition-all duration-300 border-2 ${
                feature.highlighted 
                  ? 'bg-gradient-to-br from-blue-50 to-teal-50 border-blue-200 shadow-lg hover:shadow-xl' 
                  : 'bg-gray-50 border-gray-200 hover:bg-white hover:shadow-lg hover:border-gray-300'
              }`}
            >
              {/* Highlighted Badge */}
              {feature.highlighted && (
                <div className="absolute -top-3 -right-3">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    <span data-editor-id={`app/components/FeaturesSection.tsx:127:21:${index}`}>Built-in</span>
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                feature.highlighted 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'
              }`}>
                <Icon icon={feature.icon} className="w-6 h-6" />
              </div>

              {/* Category Title */}
              <h3 className={`text-lg font-medium mb-4 ${
                feature.highlighted ? 'text-gray-900' : 'text-gray-800'
              }`}>
                <span data-editor-id={`app/components/FeaturesSection.tsx:143:17:${index}`}>{feature.category}</span>
              </h3>

              {/* Feature List */}
              <ul className="space-y-2">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-2">
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                      feature.highlighted ? 'bg-blue-500' : 'bg-gray-400'
                    }`}></div>
                    <span className="text-sm text-gray-600 leading-relaxed">
                      <span data-editor-id={`app/components/FeaturesSection.tsx:153:23:${index}:${itemIndex}`}>{item}</span>
                    </span>
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="mt-4 inline-flex items-center text-blue-600 text-sm font-medium"
              >
                <span data-editor-id={`app/components/FeaturesSection.tsx:164:17:${index}`}>Explore feature</span>
                <Icon icon="solar:arrow-right-linear" className="ml-1 w-4 h-4" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Integration Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <div className="max-w-4xl mx-auto">
            <Icon icon="carbon:integration" className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              <span data-editor-id="app/components/FeaturesSection.tsx:182:15">Seamless Integration</span>
            </h3>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              <span data-editor-id="app/components/FeaturesSection.tsx:185:15">Unlike other CRMs that require separate billing and payment tools, Hynox integrates everything natively. No API setup, no third-party subscriptions, no data silos.</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Icon icon="material-symbols:check-circle" className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-medium">
                  <span data-editor-id="app/components/FeaturesSection.tsx:191:19">Native Billing</span>
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Icon icon="material-symbols:check-circle" className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-medium">
                  <span data-editor-id="app/components/FeaturesSection.tsx:197:19">Built-in Payments</span>
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Icon icon="material-symbols:check-circle" className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-medium">
                  <span data-editor-id="app/components/FeaturesSection.tsx:203:19">AI Automation</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
