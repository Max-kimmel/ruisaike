'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TechnologyCTA = () => {
  const { t } = useLanguage();

  return (
    <div className="relative rounded-3xl overflow-hidden bg-primary text-white">
      {/* 装饰性背景 */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 px-8 py-16 md:py-20 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div 
          className="max-w-2xl text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('technology', 'ctaTitle')}
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-0">
            {t('technology', 'ctaDesc')}
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/products" className="group flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
            {t('technology', 'ctaButton1')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact" className="group flex items-center justify-center gap-2 bg-primary-foreground/10 border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-primary-foreground/20 transition-all duration-300 w-full sm:w-auto">
            <Phone className="w-5 h-5" />
            {t('technology', 'ctaButton2')}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologyCTA;
