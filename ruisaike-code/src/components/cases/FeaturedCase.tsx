'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface FeaturedCaseProps {
  title: string;
  content: string;
  imageUrl: string;
  buttonText: string;
  reverse: boolean;
  stats?: Array<{
    value: string;
    unit: string;
    label: string;
  }>;
}

const FeaturedCase = ({ title, content, imageUrl, buttonText, reverse, stats }: FeaturedCaseProps) => {
  const { t } = useLanguage();
  return (
    <motion.div
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 mb-20 items-center`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* 图片部分 */}
      <div className="w-full md:w-1/2">
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* 图片蒙层 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
          {/* 角标 */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
              {t('cases', 'caseTag')}
            </span>
          </div>
        </motion.div>
      </div>

      {/* 内容部分 */}
      <div className="w-full md:w-1/2">
        {/* 装饰线 */}
        <div className="w-12 h-1 bg-primary rounded-full mb-6" />

        <motion.h3
          className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 leading-tight"
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-muted-foreground mb-8 leading-relaxed text-base"
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {content}
        </motion.p>

        {/* 数据统计组件 */}
        {stats && (
          <motion.div
            className="grid grid-cols-3 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="relative bg-white border border-border rounded-xl p-4 text-center shadow-sm group hover:border-primary/40 hover:shadow-md transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat.value}<span className="text-sm font-semibold">{stat.unit}</span>
                  </div>
                  <div className="text-xs font-semibold text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        <motion.button
          className="group px-8 py-3.5 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {buttonText}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FeaturedCase;