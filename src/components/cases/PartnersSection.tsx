'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Handshake, ChevronRight, Layers } from 'lucide-react';

const PartnersSection = () => {
  const { t, isChinese } = useLanguage();

  const downstreamAreas = ['PCT', 'PETG', 'PCTG', 'CHDM', t('products', 'polyesterPaint')];

  return (
    <div className="space-y-20">
      {/* 商丘发投集团 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <Handshake className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-2xl font-bold">{t('cases', 'governmentCooperation')}</h3>
        </div>

        <div className="relative bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500 group">
          {/* 顶部绿色装饰条 */}
          <div className="h-1.5 bg-gradient-to-r from-primary to-teal-500" />

          <div className="flex flex-col md:flex-row gap-0">
            {/* 左侧Logo区域 */}
            <div className="w-full md:w-1/3 bg-gradient-to-br from-primary/5 to-teal-50 p-10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Handshake className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-lg font-bold text-primary">
                  {isChinese ? '商丘发投集团' : 'Shangqiu Dev. Investment'}
                </span>
                <div className="mt-2 px-3 py-1 bg-primary/10 rounded-full text-xs text-primary font-semibold">
                  {t('cases', 'governmentPartnerTag')}
                </div>
              </div>
            </div>

            {/* 右侧内容 */}
            <div className="w-full md:w-2/3 p-8 md:p-10">
              <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {isChinese ? '商丘发投集团' : 'Shangqiu Development Investment Group'}
              </h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('cases', 'governmentPartnerDesc')}
              </p>
              <motion.button
                className="group/btn px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center gap-2 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('cases', 'learnMore')}
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 下游开发与应用领域 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <Layers className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-2xl font-bold">{t('cases', 'downstreamApplications')}</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {downstreamAreas.map((area, index) => (
            <motion.div
              key={index}
              className="group relative bg-white p-5 rounded-2xl border border-border text-center cursor-default overflow-hidden shadow-sm"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.12)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <span className="relative font-bold text-sm text-gray-700 group-hover:text-primary transition-colors duration-300">{area}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 合作理念 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-primary/90 to-teal-600 rounded-3xl p-10 md:p-14 text-white overflow-hidden"
      >
        {/* 背景装饰 */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">{t('cases', 'cooperationPhilosophy')}</h3>
          <p className="text-white/90 text-lg leading-relaxed">
            {t('cases', 'cooperationPhilosophyDesc')}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PartnersSection;