'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function PaymentCancel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md mx-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Icon icon="material-symbols:cancel" className="w-10 h-10 text-red-600" />
        </motion.div>
        
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          <span data-editor-id="app/payments/cancel/page.tsx:25:11">Payment Cancelled</span>
        </h1>
        
        <p className="text-gray-600 mb-8">
          <span data-editor-id="app/payments/cancel/page.tsx:29:11">Your payment was cancelled. You can try again anytime or contact support if you need help.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/#pricing"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span data-editor-id="app/payments/cancel/page.tsx:37:13">Try Again</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <span data-editor-id="app/payments/cancel/page.tsx:43:13">Go Home</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}