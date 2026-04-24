'use client';

import { motion } from 'framer-motion';
import { Recycle, Filter, FlaskConical, Sparkles, PackageCheck, ArrowRight, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProcessFlow = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <Recycle className="h-6 w-6 text-primary" />,
      title: t('products', 'processStep1'),
      desc: t('products', 'processStep1Desc'),
    },
    {
      icon: <Filter className="h-6 w-6 text-primary" />,
      title: t('products', 'processStep2'),
      desc: t('products', 'processStep2Desc'),
    },
    {
      icon: <FlaskConical className="h-6 w-6 text-primary" />,
      title: t('products', 'processStep3'),
      desc: t('products', 'processStep3Desc'),
    },
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: t('products', 'processStep4'),
      desc: t('products', 'processStep4Desc'),
    },
    {
      icon: <PackageCheck className="h-6 w-6 text-primary" />,
      title: t('products', 'processStep5'),
      desc: t('products', 'processStep5Desc'),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('products', 'processTitle')}
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
            {t('products', 'processSubtitle')}
          </motion.p>
        </div>

        {/* Desktop Flow */}
        <div className="hidden lg:block">
          <div className="flex items-start justify-between relative">
            {/* Connecting Line */}
            <motion.div
              className="absolute top-8 left-0 right-0 h-0.5 bg-primary/30 flex items-center px-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              style={{ transformOrigin: 'left' }}
            >
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex-1 flex justify-center">
                  <ArrowRight className="text-primary/60 w-5 h-5" />
                </div>
              ))}
            </motion.div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center w-1/5 relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
              >
                {/* Step Icon */}
                <motion.div
                  className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.icon}
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </span>
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 text-center">{step.title}</h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed px-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Flow */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-12 bg-primary/30 mt-2 relative flex flex-col justify-center items-center">
                    <ArrowDown className="text-primary/60 w-5 h-5" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="bg-muted rounded-xl p-4 flex-grow border border-border">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-muted-foreground">0{index + 1}</span>
                  <h3 className="font-bold">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
