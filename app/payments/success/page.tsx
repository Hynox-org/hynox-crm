'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
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
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Icon icon="material-symbols:check" className="w-10 h-10 text-green-600" />
        </motion.div>
        
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          <span data-editor-id="app/payments/success/page.tsx:25:11">Payment Successful!</span>
        </h1>
        
        <p className="text-gray-600 mb-8">
          <span data-editor-id="app/payments/success/page.tsx:29:11">Thank you for your purchase. You can now access all features of Hynox CRM.</span>
        </p>
        
        <Link
          href="/dashboard"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <span data-editor-id="app/payments/success/page.tsx:36:11">Go to Dashboard</span>
          <Icon icon="solar:arrow-right-linear" className="ml-2 w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  );
}