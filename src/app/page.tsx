'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Welcome to Computer Point
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your one-stop solution for all computer services and repairs. We provide professional, reliable, and affordable computer services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Computer Repair</h3>
              <p className="text-gray-600">Professional repair services for all types of computers and laptops.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Virus Removal</h3>
              <p className="text-gray-600">Complete virus and malware removal to keep your system secure.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Recovery</h3>
              <p className="text-gray-600">Expert data recovery services for lost or corrupted files.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/auth/login" 
              className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/auth/signup" 
              className="w-full sm:w-auto px-8 py-3 bg-white text-indigo-600 font-medium rounded-md border border-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
