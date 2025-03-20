import React, { useEffect } from 'react';
import Head from 'next/head';

export default function AdminPage() {
  useEffect(() => {
    const basePath = process.env.NODE_ENV === 'development' ? '' : '/decapcms-testing';
    const adminPath = `${basePath}/admin/index.html`;
    
    // Check if we're already on the admin page to prevent redirect loops
    if (!window.location.pathname.endsWith('index.html')) {
      window.location.href = adminPath;
    }
  }, []);

  return (
    <>
      <Head>
        <title>Admin - Decap CMS</title>
      </Head>
      <div className="flex min-h-screen items-center justify-center">
        <p>Redirecting to admin interface...</p>
      </div>
    </>
  );
} 