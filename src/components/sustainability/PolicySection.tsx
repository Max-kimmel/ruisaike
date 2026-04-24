'use client';

import { motion } from 'framer-motion';
import { FileText, BarChart3, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PolicySection = () => {
  const { t, isChinese } = useLanguage();

  const policyCards = [
    {
      title: t('sustainability', 'nationalStrategy'),
      description: t('sustainability', 'policyDesc'),
      icon: <FileText className="h-7 w-7" />,
      image: '/img/government-policy.webp',
      reverse: false,
      tag: t('sustainability', 'nationalStrategy'),
      gradient: 'from-primary to-teal-600'
    },
    {
      title: t('sustainability', 'marketOpportunity'),
      description: t('sustainability', 'marketDesc'),
      icon: <BarChart3 className="h-7 w-7" />,
      image: '/img/market-growth.webp',
      reverse: true,
      tag: t('sustainability', 'marketOpportunity'),
      gradient: 'from-emerald-500 to-cyan-600'
    },
    {
      title: t('sustainability', 'techFrontier'),
      description: t('sustainability', 'techDesc'),
      icon: <TrendingUp className="h-7 w-7" />,
      image: '/img/plastic-recycling-technology.webp',
      reverse: false,
      tag: t('sustainability', 'techFrontier'),
      gradient: 'from-teal-500 to-green-600'
    }
  ];

  return (
    <div className="space-y-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-4">{t('sustainability', 'policyTitle')}</h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-6 mb-8"></div>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          {t('sustainability', 'policySubtitle')}
        </p>
      </motion.div>

      {policyCards.map((card, index) => (
        <motion.div
          key={index}
          className={`flex flex-col ${card.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* 图片区 */}
          <div className="w-full md:w-1/2">
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* 图片蒙层 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              {/* 标签 */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1.5 bg-gradient-to-r ${card.gradient} text-white text-xs font-bold rounded-full shadow-lg`}>
                  {card.tag}
                </span>
              </div>
            </motion.div>
          </div>

          {/* 内容区 */}
          <div className="w-full md:w-1/2">
            {/* 装饰线 */}
            <div className={`w-12 h-1 bg-gradient-to-r ${card.gradient} rounded-full mb-6`} />

            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center text-white shadow-md`}>
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{card.title}</h3>
            </div>

            <p className="text-muted-foreground mb-7 leading-relaxed">
              {card.description}
            </p>

            <motion.button
              className="group px-7 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center gap-2 font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('sustainability', 'learnMore')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PolicySection;