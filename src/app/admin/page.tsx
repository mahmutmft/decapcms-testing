'use client';

import React, { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    const basePath = process.env.NODE_ENV === 'development' ? '' : '/decapcms-testing';
    window.location.href = `${basePath}/admin/index.html`;
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p>Redirecting to admin interface...</p>
    </div>
  );
} 