'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: 'solar:clock-circle-bold',
      title: 'Save 15+ Hours Per Week',
      description: 'Eliminate the time spent switching between tools, manual invoice creation, and payment tracking.',
      stats: '87% time reduction',
      color: 'blue',
      features: [
        'Automated workflow processes',
        'One-click lead conversion',
        'Real-time payment tracking',
        'AI-powered reminders'
      ]
    },
    {
      icon: 'solar:dollar-minimalistic-bold',
      title: 'Reduce Costs by 60%',
      description: 'Replace multiple expensive tools with one comprehensive solution. No hidden fees or per-user charges.',
      stats: '$2,400 average annual savings',
      color: 'green',
      features: [
        'Eliminate multiple subscriptions',
        'No setup or consulting fees',
        'Transparent pricing model',
        'Built-in payment processing'
      ]
    },
    {
      icon: 'material-symbols:layers',
      title: 'Fewer Tools, More Focus',
      description: 'Stop juggling between CRM, billing software, payment processors, and reminder tools.',
      stats: '4-in-1 solution',
      color: 'purple',
      features: [
        'CRM + Billing integration',
        'Payment processing built-in',
        'AI reminders included',
        'Single dashboard view'
      ]
    },
    {
      icon: 'solar:chart-square-bold',
      title: 'Scale with Ease',
      description: 'Grow from startup to enterprise without switching platforms or complex migrations.',
      stats: 'Unlimited scalability',
      color: 'teal',
      features: [
        'No user limits on plans',
        'Auto-scaling infrastructure',
        'Global payment support',
        'Enterprise-grade security'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        ease: "easeOut"
      }
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'bg-blue-600', text: 'text-blue-600', stat: 'text-blue-700' },
      green: { bg: 'bg-green-50', border: 'border-green-200', icon: 'bg-green-600', text: 'text-green-600', stat: 'text-green-700' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'bg-purple-600', text: 'text-purple-600', stat: 'text-purple-700' },
      teal: { bg: 'bg-teal-50', border: 'border-teal-200', icon: 'bg-teal-600', text: 'text-teal-600', stat: 'text-teal-700' }
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
            <span data-editor-id="app/components/BenefitsSection.tsx:79:13">Real</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent font-medium">
              <span data-editor-id="app/components/BenefitsSection.tsx:81:15">Benefits</span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span data-editor-id="app/components/BenefitsSection.tsx:85:13">See the measurable impact Hynox CRM has on businesses like yours</span>
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {benefits.map((benefit, index) => {
            const colors = getColorClasses(benefit.color);
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className={`relative bg-white rounded-3xl p-8 border-2 ${colors.border} hover:shadow-xl transition-all duration-300 group`}
              >
                {/* Background Pattern */}
                <div className={`absolute inset-0 ${colors.bg} rounded-3xl opacity-30`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Stats */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.icon} rounded-2xl text-white`}>
                      <Icon icon={benefit.icon} className="w-8 h-8" />
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-bold ${colors.stat}`}>
                        <span data-editor-id={`app/components/BenefitsSection.tsx:116:25:${index}`}>{benefit.stats}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        <span data-editor-id={`app/components/BenefitsSection.tsx:119:25:${index}`}>Average result</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">
                    <span data-editor-id={`app/components/BenefitsSection.tsx:125:21:${index}`}>{benefit.title}</span>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    <span data-editor-id={`app/components/BenefitsSection.tsx:130:21:${index}`}>{benefit.description}</span>
                  </p>

                  {/* Feature List */}
                  <div className="space-y-3">
                    {benefit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-5 h-5 ${colors.icon} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <Icon icon="material-symbols:check" className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm">
                          <span data-editor-id={`app/components/BenefitsSection.tsx:141:27:${index}:${featureIndex}`}>{feature}</span>
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className={`mt-6 inline-flex items-center ${colors.text} text-sm font-medium group-hover:translate-x-1 transition-transform`}
                  >
                    <span data-editor-id={`app/components/BenefitsSection.tsx:152:21:${index}`}>Learn how</span>
                    <Icon icon="solar:arrow-right-linear" className="ml-1 w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-light mb-6">
              <span data-editor-id="app/components/BenefitsSection.tsx:169:15">Calculate Your ROI</span>
            </h3>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              <span data-editor-id="app/components/BenefitsSection.tsx:172:15">See how much you could save by switching to Hynox CRM</span>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">
                  <span data-editor-id="app/components/BenefitsSection.tsx:178:19">$2,400</span>
                </div>
                <p className="text-white/80">
                  <span data-editor-id="app/components/BenefitsSection.tsx:181:19">Average annual savings</span>
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">
                  <span data-editor-id="app/components/BenefitsSection.tsx:186:19">15+ hrs</span>
                </div>
                <p className="text-white/80">
                  <span data-editor-id="app/components/BenefitsSection.tsx:189:19">Saved per week</span>
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">
                  <span data-editor-id="app/components/BenefitsSection.tsx:194:19">3 months</span>
                </div>
                <p className="text-white/80">
                  <span data-editor-id="app/components/BenefitsSection.tsx:197:19">Average payback period</span>
                </p>
              </div>
            </div>

            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl">
              <Icon icon="solar:calculator-minimalistic-bold" className="mr-2 w-5 h-5" />
              <span data-editor-id="app/components/BenefitsSection.tsx:204:15">Calculate Your Savings</span>
            </button>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-medium text-gray-900 mb-4">
            <span data-editor-id="app/components/BenefitsSection.tsx:216:13">Ready to experience these benefits?</span>
          </h3>
          <p className="text-gray-600 mb-8">
            <span data-editor-id="app/components/BenefitsSection.tsx:219:13">Join over 10,000 businesses that have transformed their sales process with Hynox</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
              <span data-editor-id="app/components/BenefitsSection.tsx:224:15">Start Free Trial</span>
              <Icon icon="solar:arrow-right-linear" className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200">
              <Icon icon="solar:phone-bold" className="mr-2 w-5 h-5" />
              <span data-editor-id="app/components/BenefitsSection.tsx:229:15">Talk to Sales</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}