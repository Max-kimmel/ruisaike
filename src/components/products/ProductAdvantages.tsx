'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Shield, Leaf, TrendingDown, Truck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AnimatedCounter = ({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const incrementTime = (duration * 1000) / end;
    const step = Math.max(1, Math.floor(end / 60));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime * step);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const ProductAdvantages = () => {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: t('products', 'advantage1Title'),
      desc: t('products', 'advantage1Desc'),
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: t('products', 'advantage2Title'),
      desc: t('products', 'advantage2Desc'),
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-primary" />,
      title: t('products', 'advantage3Title'),
      desc: t('products', 'advantage3Desc'),
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: t('products', 'advantage4Title'),
      desc: t('products', 'advantage4Desc'),
    },
  ];

  const stats = [
    { value: 99.9, suffix: t('products', 'stat1Unit'), label: t('products', 'stat1Label') },
    { value: 60, suffix: t('products', 'stat2Unit'), label: t('products', 'stat2Label') },
    { value: 5000, suffix: '', label: t('products', 'stat3Label'), unit: t('products', 'stat3Unit') },
    { value: 1600, suffix: '', label: t('products', 'stat4Label'), unit: t('products', 'stat4Unit') },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-border"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                {stat.unit && <span className="text-lg font-normal text-muted-foreground ml-1">{stat.unit}</span>}
              </div>
              <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('products', 'advantagesTitle')}
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          <motion.p
            className="text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('products', 'advantagesSubtitle')}
          </motion.p>
        </div>

        {/* Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  {adv.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{adv.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductAdvantages;
