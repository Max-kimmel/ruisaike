'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  category: string;
  categoryName: string;
  date: string;
  image: string;
  featured?: boolean;
}

interface FeaturedArticleProps {
  news: NewsItem;
}

const FeaturedArticle = ({ news }: FeaturedArticleProps) => {
  const { isChinese } = useLanguage();

  const categoryLabel = isChinese ? news.categoryName :
    news.category === 'company' ? 'Company News' :
    news.category === 'industry' ? 'Industry Focus' : 'Market Trends';

  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-border group hover:shadow-2xl transition-all duration-500">
        {/* 顶部标记 */}
        <div className="absolute top-6 left-6 z-20">
          <span className="px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
            {isChinese ? '精选推荐' : 'Featured'}
          </span>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* 左侧图片 */}
          <div className="w-full md:w-1/2 overflow-hidden">
            <Link href={`/news/${news.id}`}>
              <div className="relative h-72 md:h-full min-h-[320px] overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Link>
          </div>

          {/* 右侧内容 */}
          <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
            {/* 分类 + 日期 */}
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                <Tag className="w-3.5 h-3.5" />
                {categoryLabel}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground font-medium">
                <Calendar className="w-3.5 h-3.5" />
                {news.date}
              </span>
            </div>

            {/* 标题 */}
            <Link href={`/news/${news.id}`}>
              <h3 className="text-2xl md:text-3xl font-bold mb-5 text-gray-800 leading-tight hover:text-primary transition-colors duration-300 cursor-pointer line-clamp-2">
                {news.title}
              </h3>
            </Link>

            {/* 摘要 */}
            <p className="text-muted-foreground mb-8 text-base leading-relaxed line-clamp-3">
              {news.summary}
            </p>

            {/* 阅读按钮 */}
            <Link href={`/news/${news.id}`}>
              <motion.button
                className="group/btn self-start px-7 py-3.5 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isChinese ? '阅读全文' : 'Read Full Article'}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedArticle;