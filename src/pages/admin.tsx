import React, { useEffect } from 'react';
import Head from 'next/head';

export default function AdminPage() {
  useEffect(() => {
    // Only redirect if we're not already on the admin HTML page
    if (!window.location.pathname.includes('/admin/index.html')) {
      const basePath = process.env.NODE_ENV === 'development' ? '' : '/decapcms-testing';
      window.location.replace(`${basePath}/admin/index.html`);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Admin - Decap CMS</title>
      </Head>
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading admin interface...</p>
      </div>
    </>
  );
} 