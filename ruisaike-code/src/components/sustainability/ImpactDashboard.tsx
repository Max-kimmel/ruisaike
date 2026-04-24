'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Wind, Droplets, Package, TrendingDown, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CountUp = ({ value, unit, textColor, isInView }: { value: number; unit: string; textColor: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / 2000, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOut * value);
        setCount(currentCount);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        }
      };

      animationFrame = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, value]);

  return (
    <div className={`text-4xl font-bold ${textColor} mb-1 flex items-end gap-1`}>
      <span>{count.toLocaleString()}</span>
      <span className="text-xl font-semibold mb-0.5">{unit}</span>
    </div>
  );
};

const ImpactDashboard = () => {
  const { t, isChinese } = useLanguage();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const impactData = [
    {
      title: t('sustainability', 'co2Reduction'),
      value: 50000,
      unit: isChinese ? '吨' : 'tons',
      icon: <Wind className="h-7 w-7" />,
      description: isChinese ? '相当于种植100万棵树的碳吸收量' : 'Equivalent to carbon absorption of 1 million trees',
      gradient: 'from-emerald-500 to-teal-500',
      lightBg: 'bg-emerald-50',
      textColor: 'text-emerald-600'
    },
    {
      title: t('sustainability', 'oilSaved'),
      value: 20000,
      unit: isChinese ? '桶' : 'barrels',
      icon: <Droplets className="h-7 w-7" />,
      description: isChinese ? '减少对化石能源的依赖' : 'Reducing dependence on fossil fuels',
      gradient: 'from-blue-500 to-cyan-500',
      lightBg: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: t('sustainability', 'plasticProcessed'),
      value: 100000,
      unit: isChinese ? '吨' : 'tons',
      icon: <Package className="h-7 w-7" />,
      description: isChinese ? '减少塑料垃圾对环境的污染' : 'Reducing environmental pollution from plastic waste',
      gradient: 'from-primary to-green-600',
      lightBg: 'bg-primary/5',
      textColor: 'text-primary'
    },
    {
      title: t('sustainability', 'energyReduction'),
      value: 30,
      unit: '%',
      icon: <TrendingDown className="h-7 w-7" />,
      description: t('sustainability', 'energyReductionDesc'),
      gradient: 'from-orange-500 to-amber-500',
      lightBg: 'bg-orange-50',
      textColor: 'text-orange-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div ref={ref} className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-4">{t('sustainability', 'impactTitle')}</h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-6 mb-8"></div>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          {t('sustainability', 'impactSubtitle')}
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {impactData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500"
            whileHover={{ y: -6 }}
          >
            {/* 顶部渐变色条 */}
            <div className={`h-1.5 bg-gradient-to-r ${item.gradient}`} />

            <div className="p-7">
              {/* 图标区域 */}
              <div className={`w-14 h-14 ${item.lightBg} rounded-xl flex items-center justify-center mb-5 ${item.textColor} group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>

              {/* 数字动态计数 */}
              <CountUp value={item.value} unit={item.unit} textColor={item.textColor} isInView={isInView} />

              <h3 className="text-base font-bold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>

              {/* 右上角装饰 */}
              <div className={`absolute top-6 right-6 w-8 h-8 ${item.lightBg} rounded-full flex items-center justify-center ${item.textColor} opacity-60 group-hover:opacity-100 transition-opacity`}>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-r from-primary/5 to-teal-50 p-10 rounded-2xl border border-primary/20 overflow-hidden"
      >
        {/* 装饰光晕 */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <h3 className="text-xl font-bold mb-4 text-center">{t('sustainability', 'ctaTitle')}</h3>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto">
          {t('sustainability', 'ctaDesc')}
        </p>
      </motion.div>
    </div>
  );
};

export default ImpactDashboard;