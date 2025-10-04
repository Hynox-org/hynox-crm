'use client';

import React from 'react';
import { motion, cubicBezier } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function USPSection() {
  const usps = [
    {
      icon: 'material-symbols:layers',
      title: 'All-in-One Business CRM',
      description: 'Sales + Billing + Tasks in one dashboard. No more switching between tools.',
      color: 'blue'
    },
    {
      icon: 'tabler:click',
      title: 'One-Click Invoicing',
      description: 'Convert leads to invoices instantly, no third-party tools needed.',
      color: 'green'
    },
    {
      icon: 'solar:global-bold',
      title: 'Global Payment Support',
      description: 'Collect in INR, USD, EUR, GBP with integrated payment links.',
      color: 'purple'
    },
    {
      icon: 'solar:lightning-bold',
      title: 'Quickest Onboarding',
      description: 'Ready-to-use CRM in 20 minutes — no consultants, no steep learning curve.',
      color: 'yellow'
    },
    {
      icon: 'hugeicons:artificial-intelligence-01',
      title: 'AI Smart Reminders',
      description: 'Never miss a follow-up, call, or overdue invoice with auto-reminders.',
      color: 'teal'
    },
    {
      icon: 'hugeicons:transparency',
      title: 'Transparent Pricing',
      description: 'No hidden charges, all essentials included. What you see is what you pay.',
      color: 'indigo'
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

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-50 border-blue-200 text-blue-600',
      green: 'bg-green-50 border-green-200 text-green-600',
      purple: 'bg-purple-50 border-purple-200 text-purple-600',
      yellow: 'bg-yellow-50 border-yellow-200 text-yellow-600',
      teal: 'bg-teal-50 border-teal-200 text-teal-600',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-24 bg-gray-50">
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
            <span data-editor-id="app/components/USPSection.tsx:80:13">Why Hynox is</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent font-medium">
              <span data-editor-id="app/components/USPSection.tsx:82:15">Different</span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span data-editor-id="app/components/USPSection.tsx:86:13">Unlike other CRMs that require multiple tools and complex setups, Hynox gives you everything you need in one simple, powerful platform.</span>
          </p>
        </motion.div>

        {/* USP Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl border-2 mb-6 ${getColorClasses(usp.color)}`}>
                <Icon icon={usp.icon} className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                <span data-editor-id={`app/components/USPSection.tsx:113:17:${index}`}>{usp.title}</span>
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                <span data-editor-id={`app/components/USPSection.tsx:118:17:${index}`}>{usp.description}</span>
              </p>

              {/* Hover Effect Arrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="mt-4 inline-flex items-center text-blue-600 text-sm font-medium"
              >
                <span data-editor-id={`app/components/USPSection.tsx:127:17:${index}`}>Learn more</span>
                <Icon icon="solar:arrow-right-linear" className="ml-1 w-4 h-4" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            <span data-editor-id="app/components/USPSection.tsx:141:13">Ready to experience the difference?</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
              <span data-editor-id="app/components/USPSection.tsx:146:15">Start Free Trial</span>
              <Icon icon="solar:arrow-right-linear" className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200">
              <Icon icon="solar:play-circle-bold" className="mr-2 w-5 h-5" />
              <span data-editor-id="app/components/USPSection.tsx:151:15">Watch Demo</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
