'use client';

import { motion } from 'framer-motion';
import { Download, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const GreenSupplyChain = () => {
  const { t, isChinese } = useLanguage();
  
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-4">{t('sustainability', 'ctaTitle')}</h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-6 mb-8"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-primary/90 to-primary/70 rounded-2xl p-12 text-white relative overflow-hidden"
      >
        {/* 装饰元素 */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('sustainability', 'joinSystem')}
          </motion.h3>
          
          <motion.p 
            className="text-white/90 mb-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('sustainability', 'supplychainSubtitle')}
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors flex items-center justify-center gap-2 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-5 w-5" />
              {isChinese ? '下载可持续发展报告' : 'Download Sustainability Report'}
            </motion.button>
            
            <motion.button
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="h-5 w-5" />
              {isChinese ? '联系 ESG 专员' : 'Contact ESG Specialist'}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-muted-foreground">
          {t('sustainability', 'supplychainCta')}
        </p>
      </motion.div>
    </div>
  );
};

export default GreenSupplyChain;