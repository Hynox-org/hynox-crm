'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, cubicBezier } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "We switched from Zoho & cut costs 40%. The built-in invoicing alone saved us $200/month in subscription fees. Setup took 20 minutes instead of weeks.",
      author: "Sarah Chen",
      position: "CEO",
      company: "TechStart Solutions",
      avatar: "https://i.pravatar.cc/200?u=sarah-chen",
      rating: 5,
      metrics: {
        cost_savings: "40%",
        time_saved: "15 hrs/week",
        setup_time: "20 minutes"
      }
    },
    {
      id: 2,
      quote: "The AI reminders are a game-changer. We never miss a follow-up anymore, and our conversion rate increased by 35%. The global payment support helped us expand to Europe effortlessly.",
      author: "Marcus Rodriguez",
      position: "Sales Director",
      company: "GlobalTech Corp",
      avatar: "https://i.pravatar.cc/200?u=marcus-rodriguez",
      rating: 5,
      metrics: {
        conversion_increase: "35%",
        missed_followups: "0%",
        new_markets: "3 countries"
      }
    },
    {
      id: 3,
      quote: "Before Hynox, we used 4 different tools. Now it's just one platform that does everything better. Our team productivity increased 50% and we're saving $3,000/year.",
      author: "Emily Johnson",
      position: "Operations Manager",
      company: "ScaleUp Inc",
      avatar: "https://i.pravatar.cc/200?u=emily-johnson",
      rating: 5,
      metrics: {
        tools_replaced: "4 → 1",
        productivity_increase: "50%",
        annual_savings: "$3,000"
      }
    },
    {
      id: 4,
      quote: "The transparent pricing was refreshing. No hidden fees, no per-user charges. We scaled from 5 to 50 people without any price shocks. The ROI was clear from day one.",
      author: "David Kim",
      position: "Founder",
      company: "InnovateLab",
      avatar: "https://i.pravatar.cc/200?u=david-kim",
      rating: 5,
      metrics: {
        team_growth: "5 → 50 people",
        price_increases: "0",
        roi_timeline: "1 month"
      }
    }
  ];

  const stats = [
    { label: "Customer Satisfaction", value: "99%", icon: "solar:star-bold" },
    { label: "Average Cost Savings", value: "42%", icon: "solar:dollar-minimalistic-bold" },
    { label: "Setup Time Reduction", value: "95%", icon: "solar:clock-circle-bold" },
    { label: "Customer Retention", value: "97%", icon: "solar:heart-bold" }
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

  const itemVariants = {
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

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-teal-50">
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
            <span data-editor-id="app/components/TestimonialsSection.tsx:86:13">Loved by</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent font-medium">
              <span data-editor-id="app/components/TestimonialsSection.tsx:88:15">Businesses</span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span data-editor-id="app/components/TestimonialsSection.tsx:92:13">See what our customers say about their experience with Hynox CRM</span>
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50"
            >
              <Icon icon={stat.icon} className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">
                <span data-editor-id={`app/components/TestimonialsSection.tsx:109:17:${index}`}>{stat.value}</span>
              </div>
              <p className="text-sm text-gray-600">
                <span data-editor-id={`app/components/TestimonialsSection.tsx:112:17:${index}`}>{stat.label}</span>
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Testimonial */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-white/50"
            >
              {/* Quote */}
              <div className="text-center mb-8">
                <Icon icon="solar:quote-up-bold" className="w-12 h-12 text-blue-600 mx-auto mb-6 opacity-50" />
                <blockquote className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed italic">
                  <span data-editor-id={`app/components/TestimonialsSection.tsx:133:19:${activeTestimonial}`}>
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </span>
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-4 mb-6 md:mb-0">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.author}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">
                      <span data-editor-id={`app/components/TestimonialsSection.tsx:148:23:${activeTestimonial}`}>
                        {currentTestimonial.author}
                      </span>
                    </h4>
                    <p className="text-gray-600">
                      <span data-editor-id={`app/components/TestimonialsSection.tsx:153:23:${activeTestimonial}`}>
                        {currentTestimonial.position} at {currentTestimonial.company}
                      </span>
                    </p>
                    <div className="flex items-center mt-2">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Icon key={i} icon="solar:star-bold" className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 text-center">
                  {Object.entries(currentTestimonial.metrics).map(([key, value], index) => (
                    <div key={key} className="bg-gray-50 rounded-xl p-3">
                      <div className="text-lg font-bold text-blue-600">
                        <span data-editor-id={`app/components/TestimonialsSection.tsx:169:25:${activeTestimonial}:${index}`}>
                          {value}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 capitalize">
                        <span data-editor-id={`app/components/TestimonialsSection.tsx:174:25:${activeTestimonial}:${index}`}>
                          {key.replace(/_/g, ' ')}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-12 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <Icon icon="solar:arrow-left-linear" className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === activeTestimonial 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <Icon icon="solar:arrow-right-linear" className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Customer Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 mb-8">
            <span data-editor-id="app/components/TestimonialsSection.tsx:221:13">Trusted by over 10,000 businesses worldwide</span>
          </p>
          <div className="flex items-center justify-center space-x-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">
              <span data-editor-id="app/components/TestimonialsSection.tsx:225:15">TechStart</span>
            </div>
            <div className="text-2xl font-bold text-gray-400">
              <span data-editor-id="app/components/TestimonialsSection.tsx:228:15">GlobalTech</span>
            </div>
            <div className="text-2xl font-bold text-gray-400">
              <span data-editor-id="app/components/TestimonialsSection.tsx:231:15">ScaleUp</span>
            </div>
            <div className="text-2xl font-bold text-gray-400">
              <span data-editor-id="app/components/TestimonialsSection.tsx:234:15">InnovateLab</span>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-medium text-gray-900 mb-4">
            <span data-editor-id="app/components/TestimonialsSection.tsx:246:13">Join thousands of happy customers</span>
          </h3>
          <p className="text-gray-600 mb-8">
            <span data-editor-id="app/components/TestimonialsSection.tsx:249:13">Start your free trial today and see why businesses love Hynox</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
              <span data-editor-id="app/components/TestimonialsSection.tsx:254:15">Start Free Trial</span>
              <Icon icon="solar:arrow-right-linear" className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-white transition-colors duration-200">
              <Icon icon="solar:chat-round-dots-bold" className="mr-2 w-5 h-5" />
              <span data-editor-id="app/components/TestimonialsSection.tsx:259:15">Read More Reviews</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
