import type { Metadata } from 'next';
import NewsPageClient from './NewsPageClient';

export const metadata: Metadata = {
  title: '新闻资讯 - 行业动态与公司新闻',
  description: '关注锐赛克最新动态、行业政策解读与市场前沿资讯，了解废塑料化学循环领域的最新发展趋势。',
  alternates: {
    canonical: '/news',
  },
  openGraph: {
    title: '新闻资讯 - 行业动态与公司新闻',
    description: '关注锐赛克最新动态、行业政策解读与市场前沿资讯。',
    url: '/news',
    images: [{ url: '/img/carousel-1.webp', width: 1200, height: 630 }],
  },
};

export default function NewsPage() {
  return <NewsPageClient />;
}
