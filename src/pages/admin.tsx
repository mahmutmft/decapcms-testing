import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function AdminPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Only redirect if we're not already on the admin HTML page
      if (!window.location.pathname.includes('/admin/index.html')) {
        const basePath = process.env.NODE_ENV === 'development' ? '' : '/decapcms-testing';
        const adminPath = `${basePath}/admin/index.html`;
        
        // Use replace instead of assign to prevent back button issues
        window.location.replace(adminPath);
      } else {
        setIsLoading(false);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load admin interface');
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Admin - Decap CMS</title>
      </Head>
      <div className="flex min-h-screen items-center justify-center">
        {isLoading ? (
          <div className="text-center">
            <p className="text-xl mb-2">Loading admin interface...</p>
            <p className="text-sm text-gray-500">This may take a few seconds</p>
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            <p>Error: {error}</p>
          </div>
        ) : null}
      </div>
    </>
  );
} 