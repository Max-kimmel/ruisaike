import type { Metadata } from 'next';
import CasesPageClient from './CasesPageClient';

export const metadata: Metadata = {
  title: '合作案例 - 标杆项目与合作伙伴',
  description: '了解锐赛克与浙江大学联合研发中心、黄冈高新区千吨级再生DMT项目等标杆合作案例，见证化学法废塑料再生技术的产业化落地。',
  alternates: {
    canonical: '/cases',
  },
  openGraph: {
    title: '合作案例 - 标杆项目与合作伙伴',
    description: '了解锐赛克标杆合作案例，见证化学法废塑料再生技术的产业化落地。',
    url: '/cases',
    images: [{ url: '/img/university-cooperation.webp', width: 1200, height: 630 }],
  },
};

export default function CasesPage() {
  return <CasesPageClient />;
}
