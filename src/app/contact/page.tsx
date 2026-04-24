import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: '联系我们 - 商务合作与人才招聘',
  description: '联系锐赛克，了解商务合作机会或加入我们的团队。锐赛克总部位于杭州临安区，欢迎来电来函咨询。',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: '联系我们 - 商务合作与人才招聘',
    description: '联系锐赛克，了解商务合作机会或加入我们的团队。',
    url: '/contact',
    images: [{ url: '/img/carousel-1.webp', width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
