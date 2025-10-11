'use client';

import React from 'react';
import { motion, cubicBezier } from 'framer-motion';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Footer() {
  const footerNavigation = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Integrations', href: '#integrations' },
      { name: 'API Documentation', href: '/' },
      { name: 'Changelog', href: '/' },
    ],
    solutions: [
      { name: 'Small Business', href: '/' },
      { name: 'Enterprise', href: '/' },
      { name: 'Agencies', href: '/' },
      { name: 'E-commerce', href: '/' },
      { name: 'Global Business', href: '/' },
    ],
    resources: [
      { name: 'Help Center', href: '/' },
      { name: 'Blog', href: '/' },
      { name: 'Community', href: '/' },
      { name: 'Webinars', href: '/' },
      { name: 'Case Studies', href: '/' },
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Careers', href: '/' },
      { name: 'Press', href: '/' },
      { name: 'Contact', href: '/' },
      { name: 'Partners', href: '/' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/' },
      { name: 'Terms of Service', href: '/' },
      { name: 'Cookie Policy', href: '/' },
      { name: 'GDPR', href: '/' },
      { name: 'Security', href: '/' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: 'mdi:twitter' },
    { name: 'LinkedIn', href: '#', icon: 'mdi:linkedin' },
    { name: 'Facebook', href: '#', icon: 'mdi:facebook' },
    { name: 'YouTube', href: '#', icon: 'mdi:youtube' },
    { name: 'Instagram', href: '#', icon: 'mdi:instagram' },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: cubicBezier(0.42, 0, 0.58, 1)
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16"
        >
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl flex items-center justify-center">
                  <span data-editor-id="app/components/Footer.tsx:81:19" className="text-white font-bold text-lg">H</span>
                </div>
                <span data-editor-id="app/components/Footer.tsx:83:17" className="text-2xl font-semibold">Hynox CRM</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <span data-editor-id="app/components/Footer.tsx:86:17">The only CRM that helps you close deals, send invoices, and get paid worldwide — all in one place. Simple. Smart. Global.</span>
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon icon={social.icon} className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  <span data-editor-id="app/components/Footer.tsx:103:19">Stay Updated</span>
                </h3>
                <p className="text-gray-300 mb-6">
                  <span data-editor-id="app/components/Footer.tsx:106:19">Get the latest updates on new features, best practices, and industry insights.</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-colors"
                  />
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium">
                    <span data-editor-id="app/components/Footer.tsx:115:21">Subscribe</span>
                  </button>
                </div>
                <p className="text-sm text-gray-400 mt-3">
                  <span data-editor-id="app/components/Footer.tsx:119:19">Join 25,000+ business owners getting weekly insights. Unsubscribe anytime.</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Links Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          >
            {/* Product */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-white mb-4">
                <span data-editor-id="app/components/Footer.tsx:131:17">Product</span>
              </h4>
              <ul className="space-y-3">
                {footerNavigation.product.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <span data-editor-id={`app/components/Footer.tsx:139:23:${item.name}`}>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-white mb-4">
                <span data-editor-id="app/components/Footer.tsx:148:17">Solutions</span>
              </h4>
              <ul className="space-y-3">
                {footerNavigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <span data-editor-id={`app/components/Footer.tsx:156:23:${item.name}`}>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-white mb-4">
                <span data-editor-id="app/components/Footer.tsx:165:17">Resources</span>
              </h4>
              <ul className="space-y-3">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <span data-editor-id={`app/components/Footer.tsx:173:23:${item.name}`}>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-white mb-4">
                <span data-editor-id="app/components/Footer.tsx:182:17">Company</span>
              </h4>
              <ul className="space-y-3">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <span data-editor-id={`app/components/Footer.tsx:190:23:${item.name}`}>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-white mb-4">
                <span data-editor-id="app/components/Footer.tsx:199:17">Legal</span>
              </h4>
              <ul className="space-y-3">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <span data-editor-id={`app/components/Footer.tsx:207:23:${item.name}`}>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="text-gray-400">
                <span data-editor-id="app/components/Footer.tsx:226:17">&copy; 2024 Hynox CRM. All rights reserved.</span>
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Icon icon="material-symbols:security" className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-400">
                    <span data-editor-id="app/components/Footer.tsx:232:21">SSL Secured</span>
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon icon="material-symbols:verified-user" className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-400">
                    <span data-editor-id="app/components/Footer.tsx:238:21">SOC 2 Compliant</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Icon icon="solar:global-bold" className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-400">
                  <span data-editor-id="app/components/Footer.tsx:247:19">Available in 50+ countries</span>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon icon="material-symbols:support-agent" className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-400">
                  <span data-editor-id="app/components/Footer.tsx:253:19">24/7 Support</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
