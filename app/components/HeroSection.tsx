'use client';

import React from 'react';
import { motion, cubicBezier } from 'framer-motion';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function HeroSection() {
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
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://storage.googleapis.com/cosmic-generated-assets/backgrounds/4k/cosmic-bg-2m4tagmk1g.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Announcement Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm">
            <Icon icon="solar:lightning-bold" className="w-4 h-4 mr-2 text-yellow-400" />
            <span data-editor-id="app/components/HeroSection.tsx:49:13">Now with AI Smart Reminders</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl mt-20 md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight"
        >
          <span data-editor-id="app/components/HeroSection.tsx:57:11">Hynox CRM –</span><br />
          <span data-editor-id="app/components/HeroSection.tsx:58:11" className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent font-medium">Simple. Smart. Global.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          <span data-editor-id="app/components/HeroSection.tsx:66:11">The only CRM that helps you close deals, send invoices, and get paid worldwide — all in one place.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="#pricing"
            className="group inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span data-editor-id="app/components/HeroSection.tsx:78:13" className="font-medium">Try Free</span>
            <Icon icon="solar:arrow-right-linear" className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <button className="group inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-200 backdrop-blur-sm border border-white/20">
            <Icon icon="solar:play-circle-bold" className="mr-2 w-5 h-5" />
            <span data-editor-id="app/components/HeroSection.tsx:85:13" className="font-medium">Request a Demo</span>
          </button>
        </motion.div>

        {/* Hero Graphic - CRM Dashboard Preview */}
        <motion.div
          variants={itemVariants}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 shadow-2xl">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon icon="material-symbols:dashboard" className="w-5 h-5 text-white" />
                  </div>
                  <span data-editor-id="app/components/HeroSection.tsx:103:19" className="font-medium text-gray-900">Hynox Dashboard</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span data-editor-id="app/components/HeroSection.tsx:107:19" className="text-sm text-gray-600">Live</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Leads Section */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-gray-900">
                      <span data-editor-id="app/components/HeroSection.tsx:116:21">Active Leads</span>
                    </h3>
                    <Icon icon="material-symbols:person" className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span data-editor-id="app/components/HeroSection.tsx:122:21" className="text-gray-600">John Smith</span>
                      <span data-editor-id="app/components/HeroSection.tsx:123:21" className="text-green-600 font-medium">Hot</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span data-editor-id="app/components/HeroSection.tsx:126:21" className="text-gray-600">Sarah Johnson</span>
                      <span data-editor-id="app/components/HeroSection.tsx:127:21" className="text-yellow-600 font-medium">Warm</span>
                    </div>
                  </div>
                </div>

                {/* Invoice Section */}
                <div className="bg-green-50 rounded-lg p-4 relative">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-gray-900">
                      <span data-editor-id="app/components/HeroSection.tsx:136:21">Quick Invoice</span>
                    </h3>
                    <Icon icon="mdi:invoice" className="w-5 h-5 text-green-600" />
                  </div>
                  <button className="w-full bg-green-600 text-white rounded-lg py-2 text-sm hover:bg-green-700 transition-colors">
                    <span data-editor-id="app/components/HeroSection.tsx:141:21">Convert Lead to Invoice</span>
                  </button>
                  
                  {/* Reminder Popup */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2, duration: 0.3 }}
                    className="absolute -top-2 -right-2 bg-yellow-400 text-black px-3 py-2 rounded-lg text-xs shadow-lg"
                  >
                    <div className="flex items-center space-x-1">
                      <Icon icon="material-symbols:reminder" className="w-4 h-4" />
                      <span data-editor-id="app/components/HeroSection.tsx:151:23">Follow up: John Smith</span>
                    </div>
                    <div className="absolute bottom-0 left-4 transform translate-y-1">
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-yellow-400"></div>
                    </div>
                  </motion.div>
                </div>

                {/* Global Payments */}
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-gray-900">
                      <span data-editor-id="app/components/HeroSection.tsx:163:21">Global Payments</span>
                    </h3>
                    <Icon icon="solar:global-bold" className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span data-editor-id="app/components/HeroSection.tsx:169:21" className="text-gray-600">USD</span>
                      <span data-editor-id="app/components/HeroSection.tsx:170:21" className="text-green-600 font-medium">$12,450</span>
                    </div>
                    <div className="flex justify-between">
                      <span data-editor-id="app/components/HeroSection.tsx:173:21" className="text-gray-600">EUR</span>
                      <span data-editor-id="app/components/HeroSection.tsx:174:21" className="text-green-600 font-medium">€8,320</span>
                    </div>
                    <div className="flex justify-between">
                      <span data-editor-id="app/components/HeroSection.tsx:177:21" className="text-gray-600">INR</span>
                      <span data-editor-id="app/components/HeroSection.tsx:178:21" className="text-green-600 font-medium">₹95,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-white/60"
        >
          <span data-editor-id="app/components/HeroSection.tsx:199:11" className="text-sm mb-2">Scroll to explore</span>
          <Icon icon="solar:arrow-down-linear" className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
