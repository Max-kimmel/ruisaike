'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import { FlaskConical, Award, TrendingUp, Repeat } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const CountUp = ({ value, unit, isInView }: { value: string; unit: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / 2000, 1);
        const currentCount = Math.floor(progress * target);
        setCount(currentCount);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        }
      };

      animationFrame = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, target]);

  return (
    <div className="text-4xl font-bold text-primary mb-2">
      {count}<span className="text-xl font-normal">{unit}</span>
    </div>
  );
};

const Features = () => {
  const { t } = useLanguage();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const features = [
    {
      icon: <FlaskConical className="h-8 w-8 text-primary" />,
      title: t('home', 'feature1Title'),
      description: t('home', 'feature1Desc'),
      value: '1000',
      unit: '吨/年'
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: t('home', 'feature2Title'),
      description: t('home', 'feature2Desc'),
      value: '99',
      unit: '%'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: t('home', 'feature3Title'),
      description: t('home', 'feature3Desc'),
      value: '30',
      unit: '%'
    },
    {
      icon: <Repeat className="h-8 w-8 text-primary" />,
      title: t('home', 'feature4Title'),
      description: t('home', 'feature4Desc'),
      value: '1',
      unit: '条'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-white" id="technology">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('home', 'coreTechTitle')}
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
            {t('home', 'coreTechSubtitle')}
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border border-border"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <CountUp value={feature.value} unit={feature.unit} isInView={isInView} />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;