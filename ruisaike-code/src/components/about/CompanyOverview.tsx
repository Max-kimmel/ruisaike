'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { TrendingUp, Leaf, Award, Users } from 'lucide-react';

const CompanyOverview = () => {
  const { t, isChinese } = useLanguage();

  const stats = [
    { icon: <TrendingUp className="h-6 w-6" />, value: isChinese ? '千吨级' : 'Kiloton', label: isChinese ? '量产能力' : 'Production Capacity' },
    { icon: <Leaf className="h-6 w-6" />, value: '100%', label: isChinese ? '闭环循环率' : 'Closed-Loop Rate' },
    { icon: <Award className="h-6 w-6" />, value: isChinese ? '多项' : 'Multiple', label: isChinese ? '核心技术专利' : 'Core Tech Patents' },
    { icon: <Users className="h-6 w-6" />, value: isChinese ? '政企校' : 'Gov+Corp+Uni', label: isChinese ? '深度合作' : 'Deep Cooperation' },
  ];

  return (
    <div className="space-y-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          {t('about', 'overviewTitle')}
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
      </motion.div>

      {/* 核心数据横幅 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="group relative bg-white rounded-2xl p-6 text-center border border-border shadow-sm overflow-hidden"
            whileHover={{ y: -4, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.12)' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 图文介绍 */}
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/img/factory_interior.png"
              alt={t('about', 'overviewTitle')}
              className="w-full h-80 object-cover"
            />
            {/* 图片叠加标签 */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <span className="text-white font-bold text-lg">{t('about', 'factoryLabel')}</span>
              <p className="text-white/80 text-sm mt-1">{t('about', 'factoryDesc')}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* 左侧绿色边框装饰 */}
          <div className="border-l-4 border-primary pl-6 mb-8">
            <p className="text-gray-600 text-lg leading-relaxed">
              {t('about', 'overviewDesc')}
            </p>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {t('about', 'overviewDetail')}
          </p>

          {/* 特色标签 */}
          <div className="flex flex-wrap gap-3">
            {(isChinese
              ? ['\u5316\u5b66\u5faa\u73af\u518d\u751f', '\u4f4e\u78b3\u65b0\u6750\u6599', '\u81ea\u4e3b\u6280\u672f', '\u7eff\u8272\u4ea7\u4e1a']
              : ['Chemical Recycling', 'Low-Carbon Materials', 'Proprietary Tech', 'Green Industry']
            ).map((tag: string, i: number) => (
              <span key={i} className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyOverview;