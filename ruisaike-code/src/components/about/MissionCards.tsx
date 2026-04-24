'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const MissionCards = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Target className="h-10 w-10" />,
      title: t('about', 'missionTitle'),
      content: t('about', 'mission'),
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: <Eye className="h-10 w-10" />,
      title: t('about', 'visionTitle'),
      content: t('about', 'vision'),
      gradient: 'from-primary to-green-600',
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: t('about', 'valuesTitle'),
      content: t('about', 'values'),
      gradient: 'from-teal-500 to-cyan-500',
    }
  ];

  return (
    <div className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
          <Sparkles className="h-4 w-4" />
          {t('about', 'companySpirit')}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about', 'missionVisionTitle')}</h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-6 mb-8"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t('about', 'missionVisionDesc')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((item, index) => (
          <motion.div
            key={index}
            className="group relative bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -8 }}
          >
            {/* 顶部渐变色条 */}
            <div className={`h-1.5 bg-gradient-to-r ${item.gradient}`} />

            {/* 背景装饰 - 使用 gradient 变量避免类型错误 */}
            <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${item.gradient} opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition-opacity duration-500`} />

            <div className="relative p-8">
              {/* 图标 */}
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {item.content}
              </p>

              {/* 底部装饰线 */}
              <div className={`mt-6 h-0.5 bg-gradient-to-r ${item.gradient} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MissionCards;