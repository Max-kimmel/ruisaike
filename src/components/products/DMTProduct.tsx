'use client';

import { motion } from 'framer-motion';
import { FileText, FlaskConical, Atom } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const DMTProduct = () => {
  const { t } = useLanguage();
  
  const dmtSpecs = [
    { label: t('products', 'purity'), value: '≥99.9%', highlight: true },
    { label: t('products', 'colority'), value: '0-5', highlight: false },
    { label: t('products', 'ash'), value: '0', highlight: false },
    { label: t('products', 'feContent'), value: '0', highlight: false },
    { label: t('products', 'acidValue'), value: '0.01', highlight: false },
  ];

  const applications = [
    t('products', 'pct'),
    t('products', 'petg'),
    t('products', 'pctg'),
    t('products', 'chdm'),
    t('products', 'polyesterPaint')
  ];

  return (
    <div className="space-y-16">
      {/* 产品概览 - 带图片 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Image + Visual */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative group">
            <img
              src="/img/dmt-product.webp"
              alt="DMT Product"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            {/* Badge */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2 shadow-lg">
              <Atom className="h-5 w-5 text-primary" />
              <span className="font-bold text-sm">C₁₀H₁₀O₄</span>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
        </motion.div>

        {/* Right: Info + Specs */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
            DMT PRODUCT
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('products', 'dmtTitle')}</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {t('products', 'dmtDesc')}
          </p>
          <div className="inline-block bg-gradient-to-r from-primary/10 to-emerald-500/10 text-primary px-5 py-2.5 rounded-xl font-semibold mb-6 border border-primary/20">
            {t('products', 'dmtHighlight')}
          </div>

          {/* Core Specs */}
          <div className="bg-gradient-to-br from-muted/80 to-muted rounded-2xl p-6 mb-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <FlaskConical className="h-5 w-5 text-primary" />
              {t('products', 'coreSpecs')}
            </h3>
            <div className="space-y-3">
              {dmtSpecs.map((spec, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center p-3 rounded-lg transition-colors ${
                    spec.highlight
                      ? 'bg-primary/10 border border-primary/20'
                      : 'bg-white'
                  }`}
                >
                  <span className="text-muted-foreground font-medium">{spec.label}</span>
                  <span className={`font-bold ${spec.highlight ? 'text-primary text-lg' : ''}`}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <motion.button
            className="flex items-center gap-2 text-primary font-semibold hover:underline"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {t('home', 'viewReport')} <FileText className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* 下游应用市场 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-xl font-bold mb-6">{t('products', 'applications')}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-muted to-muted/50 p-5 rounded-xl text-center border border-border/50 hover:border-primary/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-semibold text-sm">{app}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DMTProduct;