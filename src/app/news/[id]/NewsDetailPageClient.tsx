'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { usePathname } from 'next/navigation';
import NewsDetail from '@/components/news/NewsDetail';

export default function NewsDetailPageClient() {
  const pathname = usePathname();
  const id = pathname?.split('/').pop() || '1';

  return (
    <div className="min-h-screen">
      <Navbar />
      <NewsDetail id={id} />
      <Footer />
    </div>
  );
}
