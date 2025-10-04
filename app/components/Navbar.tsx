'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
              <span data-editor-id="app/components/Navbar.tsx:28:15" className="text-white font-bold text-sm">H</span>
            </div>
            <span data-editor-id="app/components/Navbar.tsx:30:13" className="text-xl font-medium text-gray-900">Hynox CRM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <span data-editor-id={`app/components/Navbar.tsx:39:17:${item.name}`}>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* {loading ? (
              <div className="w-20 h-8 bg-gray-200 animate-pulse rounded-full"></div>
            ) : isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">
                  <span data-editor-id="app/components/Navbar.tsx:52:19">Welcome, {user?.displayName || 'User'}</span>
                </span>
                <button
                  onClick={signOut}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <span data-editor-id="app/components/Navbar.tsx:58:19">Sign Out</span>
                </button>
              </div>
            ) : ( */}
              <>
                <button
                  // onClick={signIn}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <span data-editor-id="app/components/Navbar.tsx:66:19">Login</span>
                </button>
                <Link
                  href="#pricing"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <span data-editor-id="app/components/Navbar.tsx:72:19">Try Free</span>
                  <Icon icon="solar:arrow-right-linear" className="ml-2 w-4 h-4" />
                </Link>
              </>
             {/* )} */}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <Icon
              icon={isMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'}
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span data-editor-id={`app/components/Navbar.tsx:103:19:${item.name}`}>{item.name}</span>
                </Link>
              ))}
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                {/* {loading ? (
                  <div className="px-3 py-2">
                    <div className="w-24 h-8 bg-gray-200 animate-pulse rounded"></div>
                  </div>
                ) : isAuthenticated ? (
                  <div className="px-3 py-2 space-y-2">
                    <p className="text-sm text-gray-600">
                      <span data-editor-id="app/components/Navbar.tsx:115:21">Welcome, {user?.displayName || 'User'}</span>
                    </p>
                    <button
                      onClick={() => { signOut(); setIsMenuOpen(false); }}
                      className="w-full text-left text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span data-editor-id="app/components/Navbar.tsx:121:23">Sign Out</span>
                    </button>
                  </div>
                ) : ( */}
                  <div className="px-3 py-2 space-y-2">
                    <button
                      onClick={() => { setIsMenuOpen(false); }}
                      className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span data-editor-id="app/components/Navbar.tsx:129:23">Login</span>
                    </button>
                    <Link
                      href="#pricing"
                      className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span data-editor-id="app/components/Navbar.tsx:136:23">Try Free</span>
                    </Link>
                  </div>
                {/* )} */}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}