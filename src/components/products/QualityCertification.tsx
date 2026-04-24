'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Award, Globe, FileCheck, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const QualityCertification = () => {
  const { t, isChinese } = useLanguage();

  const certs = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: t('products', 'cert1'),
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: t('products', 'cert2'),
    },
    {
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      title: t('products', 'cert3'),
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: t('products', 'cert4'),
    },
  ];

  const qualityPoints = isChinese
    ? [
        '原料入库100%检测',
        '生产过程在线监控',
        '成品全批次取样检验',
        '独立第三方认证报告',
        '全流程质量追溯系统',
        '客户定制检测方案',
      ]
    : [
        '100% raw material inspection',
        'Online production monitoring',
        'Full-batch sampling inspection',
        'Independent third-party reports',
        'Full-process quality traceability',
        'Customized testing solutions',
      ];

  return (
    <section className="py-20 bg-muted">
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
            {t('products', 'certTitle')}
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
            {t('products', 'certSubtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Certification Badges */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {certs.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  {cert.icon}
                </div>
                <h3 className="font-bold text-sm leading-tight">{cert.title}</h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Quality Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              {t('products', 'certDesc')}
            </p>

            {/* Quality Check Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {qualityPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-card rounded-lg px-4 py-3 border border-border"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualityCertification;
