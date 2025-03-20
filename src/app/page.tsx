'use client';

import React from 'react';

export default function Home() {
  const basePath = process.env.NODE_ENV === 'development' ? '' : '/decapcms-testing';
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Welcome to Our Site</h1>
        <p className="text-xl mb-4">
          This is a test site using Decap CMS for content management.
        </p>
        <a 
          href={`${basePath}/admin`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go to Admin Panel
        </a>
      </div>
    </main>
  )
} 