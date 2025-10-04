'use client';

import React from 'react';
import { motion, cubicBezier } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function AboutSection() {
  const values = [
    {
      icon: 'solar:heart-bold',
      title: 'Customer-First',
      description: 'Every feature we build starts with a real customer problem. No feature bloat, just solutions.'
    },
    {
      icon: 'hugeicons:transparency',
      title: 'Radical Transparency',
      description: 'Clear pricing, honest communication, and no hidden agendas. What you see is what you get.'
    },
    {
      icon: 'solar:lightning-bold',
      title: 'Speed & Simplicity',
      description: 'Complex problems, simple solutions. We believe powerful software should be easy to use.'
    },
    {
      icon: 'solar:global-bold',
      title: 'Global Mindset',
      description: 'Built for businesses everywhere. Multi-currency, multi-language, multi-everything.'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'The Problem',
      description: 'Founded by frustrated entrepreneurs tired of juggling 5 different tools just to manage sales and get paid.'
    },
    {
      year: '2021',
      title: 'First Solution',
      description: 'Launched our MVP with integrated CRM and invoicing. First 100 customers saved 40% on tool costs immediately.'
    },
    {
      year: '2022',
      title: 'Going Global',
      description: 'Added multi-currency payments and expanded to serve businesses across 50+ countries.'
    },
    {
      year: '2023',
      title: 'AI Revolution',
      description: 'Introduced AI Smart Reminders, reducing missed follow-ups by 95% for our customers.'
    },
    {
      year: '2024',
      title: 'Scale & Growth',
      description: 'Now serving 10,000+ businesses worldwide, with 99% customer satisfaction and $50M+ processed annually.'
    }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former Salesforce PM who got tired of complex CRMs',
      avatar: 'https://i.pravatar.cc/400?u=alex-chen'
    },
    {
      name: 'Sarah Martinez',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Stripe engineer passionate about payment simplicity',
      avatar: 'https://i.pravatar.cc/400?u=sarah-martinez'
    },
    {
      name: 'David Kim',
      role: 'Head of Product',
      bio: 'Former founder who knows the pain of tool sprawl',
      avatar: 'https://i.pravatar.cc/400?u=david-kim'
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

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            <span data-editor-id="app/components/AboutSection.tsx:88:13">About</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent font-medium">
              <span data-editor-id="app/components/AboutSection.tsx:90:15">Hynox</span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <span data-editor-id="app/components/AboutSection.tsx:94:13">We build cost-friendly, smart tools for SMEs to grow without limits</span>
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-8 md:p-16 text-white mb-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <Icon icon="solar:target-bold" className="w-16 h-16 mx-auto mb-8 opacity-90" />
            <h3 className="text-3xl md:text-4xl font-light mb-8">
              <span data-editor-id="app/components/AboutSection.tsx:109:15">Our Mission</span>
            </h3>
            <p className="text-lg md:text-xl leading-relaxed opacity-95 mb-8">
              <span data-editor-id="app/components/AboutSection.tsx:112:15">To eliminate the complexity and cost burden of running a modern business. Every small and medium enterprise should have access to enterprise-grade tools without the enterprise price tag or complexity.</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">
                  <span data-editor-id="app/components/AboutSection.tsx:117:19">10,000+</span>
                </div>
                <p className="text-white/80">
                  <span data-editor-id="app/components/AboutSection.tsx:120:19">Businesses Served</span>
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">
                  <span data-editor-id="app/components/AboutSection.tsx:125:19">$50M+</span>
                </div>
                <p className="text-white/80">
                  <span data-editor-id="app/components/AboutSection.tsx:128:19">Payments Processed</span>
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">
                  <span data-editor-id="app/components/AboutSection.tsx:133:19">50+</span>
                </div>
                <p className="text-white/80">
                  <span data-editor-id="app/components/AboutSection.tsx:136:19">Countries Served</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-light text-gray-900 text-center mb-12">
            <span data-editor-id="app/components/AboutSection.tsx:152:13">Our Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group hover:bg-gray-50 p-6 rounded-2xl transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-200 transition-colors">
                  <Icon icon={value.icon} className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-medium text-gray-900 mb-4">
                  <span data-editor-id={`app/components/AboutSection.tsx:165:19:${index}`}>{value.title}</span>
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  <span data-editor-id={`app/components/AboutSection.tsx:168:19:${index}`}>{value.description}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Story Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-light text-gray-900 text-center mb-12">
            <span data-editor-id="app/components/AboutSection.tsx:181:13">Our Journey</span>
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                      <div className="text-blue-600 font-bold text-lg mb-2">
                        <span data-editor-id={`app/components/AboutSection.tsx:199:25:${index}`}>{milestone.year}</span>
                      </div>
                      <h4 className="text-xl font-medium text-gray-900 mb-3">
                        <span data-editor-id={`app/components/AboutSection.tsx:202:25:${index}`}>{milestone.title}</span>
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        <span data-editor-id={`app/components/AboutSection.tsx:205:25:${index}`}>{milestone.description}</span>
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-light text-gray-900 text-center mb-12">
            <span data-editor-id="app/components/AboutSection.tsx:226:13">Meet Our Team</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-100 group-hover:border-blue-200 transition-colors"
                  />
                  <div className="absolute inset-0 rounded-full bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors"></div>
                </div>
                <h4 className="text-xl font-medium text-gray-900 mb-2">
                  <span data-editor-id={`app/components/AboutSection.tsx:243:19:${index}`}>{member.name}</span>
                </h4>
                <p className="text-blue-600 font-medium mb-3">
                  <span data-editor-id={`app/components/AboutSection.tsx:246:19:${index}`}>{member.role}</span>
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <span data-editor-id={`app/components/AboutSection.tsx:249:19:${index}`}>{member.bio}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gray-50 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-light text-gray-900 mb-4">
            <span data-editor-id="app/components/AboutSection.tsx:264:13">Ready to Join Our Mission?</span>
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            <span data-editor-id="app/components/AboutSection.tsx:267:13">Help us build the future of business software, one happy customer at a time.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
              <span data-editor-id="app/components/AboutSection.tsx:272:15">Join Our Team</span>
              <Icon icon="solar:arrow-right-linear" className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-white transition-colors duration-200">
              <Icon icon="solar:heart-bold" className="mr-2 w-5 h-5" />
              <span data-editor-id="app/components/AboutSection.tsx:277:15">Become a Customer</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
