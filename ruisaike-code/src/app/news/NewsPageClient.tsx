'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategoryFilter from '@/components/news/CategoryFilter';
import FeaturedArticle from '@/components/news/FeaturedArticle';
import NewsGrid from '@/components/news/NewsGrid';
import NewsletterCTA from '@/components/news/NewsletterCTA';
import { useLanguage } from '@/contexts/LanguageContext';

// 新闻数据
const newsData = [
  {
    id: 1,
    title: '锐赛克携手浙江大学，共建省市重点实验室打破国外技术垄断',
    summary: '3年内共同投入超千万元，聚焦绿色再生新材料关键技术，打破国外技术垄断。',
    category: 'company',
    categoryName: '公司动态',
    date: '2024-06-15',
    image: '/img/university-cooperation.webp',
    featured: true
  },
  {
    id: 2,
    title: '总投资1000万元！国内首个自主研发R-DMT生产项目落户黄冈',
    summary: '投资主体为锐赛克（湖北）新材料有限公司，总投资1000万元，年产5000吨高纯度再生DMT及1600吨乙二醇。',
    category: 'company',
    categoryName: '公司动态',
    date: '2024-05-20',
    image: '/img/industrial-factory.webp'
  },
  {
    id: 3,
    title: '七部门印发行动方案，支持龙头企业开展废塑料化学循环产业化应用',
    summary: '七部门联合发布《再生材料应用推广行动方案》，强调支持龙头企业开展废塑料化学循环及高品质再生塑料产业化应用。',
    category: 'industry',
    categoryName: '行业聚焦',
    date: '2024-04-10',
    image: '/img/government-policy.webp'
  },
  {
    id: 4,
    title: '全国政协委员李景虹建言：加快推动废塑料化学循环体系建设',
    summary: '全国政协委员李景虹建议，加快推动废塑料化学循环体系建设，促进循环经济发展。',
    category: 'industry',
    categoryName: '行业聚焦',
    date: '2024-03-05',
    image: '/img/political-meeting.webp'
  },
  {
    id: 5,
    title: '机构预测：2035年全球PET塑料回收市场规模将突破247亿美元',
    summary: 'Global Growth Insights 数据显示，2025年到2035年PET塑料回收市场将实现百亿美元级增长，食品饮料、纺织品行业需求强劲。',
    category: 'market',
    categoryName: '市场前沿',
    date: '2024-02-15',
    image: '/img/market-growth.webp'
  }
];

export default function NewsPageClient() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { t } = useLanguage();

  // 动态生成包含多语言支持的新闻数据
  const localizedNewsData = newsData.map(item => ({
    ...item,
    title: t('news', `news${item.id}Title`) || item.title,
    summary: t('news', `news${item.id}Summary`) || item.summary,
    categoryName: t('news', `news${item.id}Category`) || item.categoryName,
    date: t('news', `news${item.id}Date`) || item.date
  }));

  // 过滤新闻数据
  const filteredNews = activeCategory === 'all'
    ? localizedNewsData.filter(item => !item.featured)
    : localizedNewsData.filter(item => item.category === activeCategory && !item.featured);

  // 获取头条新闻
  const featuredNews = localizedNewsData.find(item => item.featured);

  return (
      <div className="min-h-screen bg-gray-50/30">
        <Navbar />

        {/* 页面标题 (Hero Section) */}
        <section className="h-[33vh] md:h-[33vh] relative flex items-center overflow-hidden">
          {/* 背景图片 */}
          <div className="absolute inset-0 bg-[url('/img/carousel-1.webp')] bg-cover bg-center transform scale-105 motion-safe:animate-[pulse_10s_ease-in-out_infinite_alternate]"></div>

          {/* 渐变遮罩层 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-primary/40"></div>

          {/* 背景图案遮罩 (增加科技感纹理) */}
          <div className="absolute inset-0 opacity-20 bg-dot-pattern"></div>

          {/* 内容 */}
          <div className="container mx-auto px-4 relative z-10 flex flex-col items-center mt-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wider"
            >
              NEWS & INSIGHTS
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-center text-white mb-6 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t('news', 'title')}
            </motion.h1>

            <motion.p
              className="text-white/90 text-center max-w-3xl mx-auto text-lg md:text-xl leading-relaxed drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t('news', 'subtitle')}
            </motion.p>
          </div>

          {/* 向下滚动指示器 */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <span className="text-sm tracking-widest mb-2 uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* 资讯分类标签栏 */}
          <CategoryFilter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          {/* 头条推荐区 */}
          {featuredNews && (
            <FeaturedArticle news={featuredNews} />
          )}

          {/* 新闻列表网格 */}
          <NewsGrid news={filteredNews} />
        </div>

        {/* 订阅/联系模块 */}
        <NewsletterCTA />

        <Footer />
      </div>
  );
}
