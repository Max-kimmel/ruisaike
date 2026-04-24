import type { Metadata } from 'next';
import TechnologyPageClient from './TechnologyPageClient';

export const metadata: Metadata = {
  title: '核心技术 - GREEN CIRCLE化学循环系统',
  description: '锐赛克自主研发GREEN CIRCLE化学循环技术体系，通过醇解-提纯-再聚合工艺，将废塑料转化为高纯度再生单体，实现真正的塑料闭环循环利用。',
  alternates: {
    canonical: '/technology',
  },
  openGraph: {
    title: '核心技术 - GREEN CIRCLE化学循环系统',
    description: '锐赛克自主研发GREEN CIRCLE化学循环技术体系，实现真正的塑料闭环循环利用。',
    url: '/technology',
    images: [{ url: '/img/plastic-recycling-technology.webp', width: 1200, height: 630 }],
  },
};

export default function TechnologyPage() {
  return <TechnologyPageClient />;
}