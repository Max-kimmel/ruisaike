import type { Metadata } from 'next';
import SustainabilityPageClient from './SustainabilityPageClient';

export const metadata: Metadata = {
  title: '可持续发展 - 绿色循环经济',
  description: '锐赛克践行可持续发展理念，通过化学循环技术助力碳中和目标。了解我们的环保效益、绿色供应链建设与国家政策响应。',
  alternates: {
    canonical: '/sustainability',
  },
  openGraph: {
    title: '可持续发展 - 绿色循环经济',
    description: '锐赛克践行可持续发展理念，通过化学循环技术助力碳中和目标。',
    url: '/sustainability',
    images: [{ url: '/img/green-nature-background.webp', width: 1200, height: 630 }],
  },
};

export default function SustainabilityPage() {
  return <SustainabilityPageClient />;
}
