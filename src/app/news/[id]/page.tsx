import type { Metadata } from 'next';
import NewsDetailPageClient from './NewsDetailPageClient';

export const metadata: Metadata = {
  title: '新闻详情',
  description: '锐赛克新闻资讯详情，了解废塑料化学循环领域最新动态。',
  alternates: {
    canonical: '/news',
  },
};

export default function NewsDetailPage() {
  return <NewsDetailPageClient />;
}
