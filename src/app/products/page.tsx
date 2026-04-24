import type { Metadata } from 'next';
import ProductsPageClient from './ProductsPageClient';

export const metadata: Metadata = {
  title: '产品中心 - 再生DMT与乙二醇',
  description: '锐赛克核心产品：高纯度再生DMT（对苯二甲酸二甲酯）和乙二醇（EG），广泛应用于聚酯纤维、PET瓶片、工程塑料等领域，品质媲美原生产品。',
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: '产品中心 - 再生DMT与乙二醇',
    description: '锐赛克核心产品：高纯度再生DMT和乙二醇，品质媲美原生产品。',
    url: '/products',
    images: [{ url: '/img/dmt-product.webp', width: 1200, height: 630 }],
  },
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}