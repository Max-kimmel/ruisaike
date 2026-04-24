'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Share2, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface NewsData {
  id: number;
  titleKey: string;
  dateKey: string;
  categoryKey: string;
  contentKey: string;
  image: string;
}

const newsDataList: NewsData[] = [
  {
    id: 1,
    titleKey: 'news1Title',
    dateKey: 'news1Date',
    categoryKey: 'news1Category',
    contentKey: 'news1Content',
    image: '/img/university-cooperation.webp',
  },
  {
    id: 2,
    titleKey: 'news2Title',
    dateKey: 'news2Date',
    categoryKey: 'news2Category',
    contentKey: 'news2Content',
    image: '/img/industrial-factory.webp',
  },
  {
    id: 3,
    titleKey: 'news3Title',
    dateKey: 'news3Date',
    categoryKey: 'news3Category',
    contentKey: 'news3Content',
    image: '/img/government-policy.webp',
  },
  {
    id: 4,
    titleKey: 'news4Title',
    dateKey: 'news4Date',
    categoryKey: 'news4Category',
    contentKey: 'news4Content',
    image: '/img/political-meeting.webp',
  },
  {
    id: 5,
    titleKey: 'news5Title',
    dateKey: 'news5Date',
    categoryKey: 'news5Category',
    contentKey: 'news5Content',
    image: '/img/market-growth.webp',
  },
];

interface NewsDetailProps {
  id: string;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ id }) => {
  const { t } = useLanguage();
  const [isClient, setIsClient] = React.useState(false);
  
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  
  const newsId = parseInt(id, 10);
  const newsData = newsDataList.find(item => item.id === newsId);
  
  if (!newsData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('news', 'newsNotFound')}</h2>
          <Link href="/news" className="text-green-600 hover:underline">
            {t('news', 'backToList')}
          </Link>
        </div>
      </div>
    );
  }

  const formatContent = (content: string) => {
    const paragraphs = content.split('\n');
    return paragraphs.map((paragraph, index) => {
      // 为第二段添加引用样式
      if (index === 1) {
        return (
          <blockquote key={index} className="border-l-4 border-green-500 pl-6 py-2 my-6 italic text-gray-600 text-lg">
            {paragraph}
          </blockquote>
        );
      }
      return (
        <p key={index} className="mb-6 text-gray-700 leading-relaxed text-base">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面页头 - 与新闻页面一致 */}
      <section className="h-[33vh] md:h-[33vh] relative flex items-center">
        {/* 背景图片 */}
        <div className="absolute inset-0 bg-[url('/img/carousel-1.webp')] bg-cover bg-center"></div>
        {/* 黑色遮罩层 */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* 内容 */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {isClient ? t('news', 'title') : 'News & Insights'}
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-white mx-auto mt-6 mb-8"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.6 }}
          />
          <motion.p
            className="text-white text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isClient ? t('news', 'subtitle') : 'Latest updates and insights'}
          </motion.p>
        </div>
      </section>

      {/* 返回按钮 */}
      <div className="container mx-auto px-4 pt-8">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{isClient ? t('news', 'backToList') : 'Back to List'}</span>
        </Link>
      </div>

      {/* 主卡片容器 */}
      <div className="container mx-auto px-4 pb-16">
        <motion.div
          className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 顶部图片 */}
          <div className="relative h-[50vh] md:h-[60vh]">
            <img
              src={newsData.image}
              alt={isClient ? t('news', newsData.titleKey) : 'News Image'}
              className="w-full h-full object-cover"
            />
          </div>

          {/* 内容区域 */}
          <div className="p-8 md:p-12 lg:p-16">
            {/* 日期标签 */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                <Calendar className="w-4 h-4" />
                <span>{isClient ? t('news', newsData.dateKey) : 'Date'}</span>
              </div>
            </div>

            {/* 标题 */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              {isClient ? t('news', newsData.titleKey) : 'News Title'}
            </h1>

            {/* 文章内容 */}
            <article className="prose prose-lg max-w-none">
              {isClient ? formatContent(t('news', newsData.contentKey)) : <p>Loading content...</p>}
            </article>

            {/* 底部分隔线 */}
            <div className="border-t border-gray-100 mt-12 pt-8"></div>

            {/* 底部区域 */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* 版权信息 */}
              <p className="text-gray-500 text-sm">
                © 2025 Rescye
              </p>
              
              {/* 分享按钮 */}
              <button className="flex items-center gap-2 px-4 py-2 border border-green-500 text-green-600 rounded-full hover:bg-green-50 transition-all">
                <Share2 className="w-4 h-4" />
                <span>{isClient ? t('news', 'share') : 'Share'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsDetail;
