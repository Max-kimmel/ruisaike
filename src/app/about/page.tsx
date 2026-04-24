import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: '关于锐赛克 - 企业简介与发展历程',
  description: '了解锐赛克的发展历程、企业愿景、核心价值观与研发实力。锐赛克是一家专注于化学法废塑料再生技术的创新型企业，致力于推动绿色循环经济发展。',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: '关于锐赛克 - 企业简介与发展历程',
    description: '了解锐赛克的发展历程、企业愿景与研发实力，推动绿色循环经济发展。',
    url: '/about',
    images: [{ url: '/img/carousel-1.webp', width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
