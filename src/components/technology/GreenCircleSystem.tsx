'use client';

import { motion } from 'framer-motion';
import { Recycle, BottleWine, Package, Text, Briefcase, Sparkles, TrendingDown, Clock, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const GreenCircleSystem = () => {
  const { t } = useLanguage();

  const rawMaterials = [
    { name: t('technology', 'petBottle'), icon: <BottleWine className="h-10 w-10" /> },
    { name: t('technology', 'bubble'), icon: <Package className="h-10 w-10" /> },
    { name: t('technology', 'strap'), icon: <Package className="h-10 w-10" /> },
    { name: t('technology', 'polyesterFabric'), icon: <Text className="h-10 w-10" /> },
    { name: t('technology', 'engineeringPlastic'), icon: <Briefcase className="h-10 w-10" /> },
  ];

  const techHighlights = [
    { 
      name: t('technology', 'molecularRecycling'), 
      description: t('technology', 'greenCircleDesc1'),
      icon: <Sparkles className="h-6 w-6 text-primary" />
    },
    { 
      name: t('technology', 'lowCost'), 
      description: t('technology', 'greenCircleDesc2'),
      icon: <TrendingDown className="h-6 w-6 text-primary" />
    },
    { 
      name: t('technology', 'shortProcess'), 
      description: t('technology', 'greenCircleDesc3'),
      icon: <Clock className="h-6 w-6 text-primary" />
    },
    { 
      name: t('technology', 'highPurity'), 
      description: t('technology', 'greenCircleDesc4'),
      icon: <ShieldCheck className="h-6 w-6 text-primary" />
    },
  ];

  return (
    <div className="space-y-20">
      {/* 系统介绍横幅 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-br from-primary/90 to-primary text-white rounded-3xl p-10 md:p-16 shadow-2xl"
      >
        {/* 背景装饰图形 */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse"></div>
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-inner relative z-10">
              <Recycle className="h-12 w-12 text-primary" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('technology', 'greenCircleTitle')}</h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl leading-relaxed">
              {t('technology', 'greenCircleDesc')}
            </p>
          </div>
        </div>
      </motion.div>

      {/* 适用原料 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{t('technology', 'rawMaterials')}</h3>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {rawMaterials.map((material, index) => (
            <motion.div
              key={index}
              className="group bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 relative overflow-hidden"
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* 悬浮背景效果 */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white text-primary transition-colors duration-300">
                  {material.icon}
                </div>
                <span className="font-bold text-gray-700 group-hover:text-primary transition-colors">{material.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 技术亮点 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-50 rounded-3xl p-10 md:p-16 border border-gray-100"
      >
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{t('technology', 'techHighlights')}</h3>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 flex items-start gap-6"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                {highlight.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 text-gray-800">{highlight.name}</h4>
                <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default GreenCircleSystem;