'use client';

import React, { useState } from 'react';
import { motion, cubicBezier } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useCosmicPayments } from 'cosmic-payments/client';

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  const { checkout, loading } = useCosmicPayments();

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      badge: 'Free Forever',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for solo entrepreneurs and small teams getting started',
      features: [
        'Up to 500 leads',
        'Basic CRM features',
        'Email integration',
        'Invoice generation',
        'Payment tracking',
        'Mobile app access',
        'Community support'
      ],
      limitations: [
        'Basic AI reminders',
        'Standard templates',
        '2 team members max'
      ],
      cta: 'Start Free',
      popular: false,
      priceId: null
    },
    {
      id: 'growth',
      name: 'Growth',
      badge: 'Most Popular',
      price: { monthly: 49, annual: 39 },
      description: 'For growing businesses that need advanced features and automation',
      features: [
        'Unlimited leads',
        'Advanced pipeline management',
        'AI Smart Reminders',
        'Multi-currency payments',
        'Custom invoice templates',
        'Advanced reporting',
        'Team collaboration',
        'Email automation',
        'Priority support',
        'Custom integrations'
      ],
      limitations: [],
      cta: 'Start Growth Plan',
      popular: true,
      priceId: 'price_growth_monthly' // This would be actual Stripe price IDs
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      badge: 'Advanced',
      price: { monthly: 99, annual: 79 },
      description: 'For large teams that need enterprise-grade security and features',
      features: [
        'Everything in Growth',
        'Unlimited team members',
        'Advanced AI automation',
        'Custom workflows',
        'White-label options',
        'Advanced security',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantee',
        'Advanced analytics',
        'API access',
        'Single sign-on (SSO)'
      ],
      limitations: [],
      cta: 'Start Enterprise',
      popular: false,
      priceId: 'price_enterprise_monthly'
    }
  ];

  const handleStartPlan = async (plan: typeof plans[0]) => {
    if (plan.price.monthly === 0) {
      // Handle free plan signup
      window.location.href = '#signup';
      return;
    }

    if (plan.priceId) {
      await checkout({
        priceId: plan.priceId,
        productId: plan.id,
      });
    }
  };

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
    <section id="pricing" className="py-24 bg-white">
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
            <span data-editor-id="app/components/PricingSection.tsx:105:13">Simple</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent font-medium">
              <span data-editor-id="app/components/PricingSection.tsx:107:15">Pricing</span>
            </span>
          </h2>
          <p className="text-2xl font-light text-gray-800 mb-4">
            <span data-editor-id="app/components/PricingSection.tsx:111:13">One flat fee, everything included.</span>
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span data-editor-id="app/components/PricingSection.tsx:114:13">No hidden charges, no per-user fees, no surprise costs. Choose a plan and get everything you need.</span>
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-12"
        >
          <div className="bg-gray-100 p-1 rounded-xl">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  !isAnnual 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <span data-editor-id="app/components/PricingSection.tsx:133:17">Monthly</span>
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                  isAnnual 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <span data-editor-id="app/components/PricingSection.tsx:142:17">Annual</span>
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  <span data-editor-id="app/components/PricingSection.tsx:144:19">Save 20%</span>
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 ${
                plan.popular
                  ? 'border-blue-500 shadow-xl shadow-blue-500/25'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                    <span data-editor-id={`app/components/PricingSection.tsx:172:21:${index}`}>{plan.badge}</span>
                  </div>
                </div>
              )}

              {/* Free Badge */}
              {plan.price.monthly === 0 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                    <span data-editor-id={`app/components/PricingSection.tsx:180:21:${index}`}>{plan.badge}</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  <span data-editor-id={`app/components/PricingSection.tsx:187:19:${index}`}>{plan.name}</span>
                </h3>
                <p className="text-gray-600 mb-6">
                  <span data-editor-id={`app/components/PricingSection.tsx:190:19:${index}`}>{plan.description}</span>
                </p>
                
                {/* Price */}
                <div className="mb-6">
                  {plan.price.monthly === 0 ? (
                    <div className="text-5xl font-bold text-gray-900">
                      <span data-editor-id={`app/components/PricingSection.tsx:196:23:${index}`}>Free</span>
                    </div>
                  ) : (
                    <div>
                      <div className="text-5xl font-bold text-gray-900 mb-1">
                        <span data-editor-id={`app/components/PricingSection.tsx:201:25:${index}`}>
                          ${isAnnual ? plan.price.annual : plan.price.monthly}
                        </span>
                      </div>
                      <div className="text-gray-500">
                        <span data-editor-id={`app/components/PricingSection.tsx:205:25:${index}`}>
                          per month{isAnnual ? ', billed annually' : ''}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleStartPlan(plan)}
                  disabled={loading}
                  className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                      : plan.price.monthly === 0
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'border-2 border-gray-300 text-gray-900 hover:border-gray-400 hover:bg-gray-50'
                  } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <span data-editor-id={`app/components/PricingSection.tsx:222:19:${index}`}>
                    {loading ? 'Processing...' : plan.cta}
                  </span>
                </button>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">
                  <span data-editor-id={`app/components/PricingSection.tsx:230:19:${index}`}>Everything included:</span>
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon icon="material-symbols:check" className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">
                        <span data-editor-id={`app/components/PricingSection.tsx:239:25:${index}:${featureIndex}`}>{feature}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Limitations (for free plan) */}
                {plan.limitations.length > 0 && (
                  <div className="pt-4 border-t border-gray-200">
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <li key={limitIndex} className="flex items-start space-x-3">
                          <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon icon="material-symbols:remove" className="w-3 h-3 text-gray-600" />
                          </div>
                          <span className="text-gray-500 text-sm">
                            <span data-editor-id={`app/components/PricingSection.tsx:255:27:${index}:${limitIndex}`}>{limitation}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gray-50 rounded-2xl p-8"
        >
          <Icon icon="material-symbols:verified-user" className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            <span data-editor-id="app/components/PricingSection.tsx:273:13">30-Day Money-Back Guarantee</span>
          </h3>
          <p className="text-gray-600">
            <span data-editor-id="app/components/PricingSection.tsx:276:13">Try Hynox risk-free. If you&apos;re not completely satisfied, we&apos;ll refund your money.</span>
          </p>
        </motion.div>

        {/* FAQ Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            <span data-editor-id="app/components/PricingSection.tsx:287:13">Have questions about our pricing?</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
              <Icon icon="solar:question-circle-bold" className="mr-2 w-5 h-5" />
              <span data-editor-id="app/components/PricingSection.tsx:292:15">View FAQ</span>
            </button>
            <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
              <Icon icon="solar:phone-bold" className="mr-2 w-5 h-5" />
              <span data-editor-id="app/components/PricingSection.tsx:296:15">Talk to Sales</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
