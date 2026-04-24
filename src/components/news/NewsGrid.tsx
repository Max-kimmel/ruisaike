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

interface NewsGridProps {
  news: NewsItem[];
}

const NewsGrid = ({ news }: NewsGridProps) => {
  const { t, isChinese } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {news.map((item, index) => (
        <motion.div
          key={item.id}
          className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -6 }}
        >
          {/* 图片区域 */}
          <Link href={`/news/${item.id}`}>
            <div className="relative h-52 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* 蒙层渐变 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              {/* 分类标签 */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold rounded-full shadow-sm">
                  {isChinese ? item.categoryName :
                    item.category === 'company' ? 'Company' :
                    item.category === 'industry' ? 'Industry' : 'Market'}
                </span>
              </div>
            </div>
          </Link>

          {/* 内容区域 */}
          <div className="p-6 flex flex-col flex-1">
            {/* 日期 */}
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground font-medium mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>{item.date}</span>
            </div>

            {/* 标题 */}
            <Link href={`/news/${item.id}`}>
              <h3 className="text-lg font-bold mb-3 text-gray-800 leading-snug hover:text-primary transition-colors duration-300 cursor-pointer line-clamp-2 group-hover:text-primary">
                {item.title}
              </h3>
            </Link>

            {/* 摘要 */}
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 flex-1 mb-5">
              {item.summary}
            </p>

            {/* 分隔线 */}
            <div className="w-full h-px bg-border mb-5" />

            {/* 阅读按钮 */}
            <Link href={`/news/${item.id}`}>
              <motion.div
                className="flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300 cursor-pointer"
                whileHover={{ x: 4 }}
              >
                {t('news', 'readMore')}
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default NewsGrid;