'use client';

import { motion } from 'framer-motion';
import { Award, FlaskConical, Building2, Shield, Microscope, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const RDStrength = () => {
  const { t } = useLanguage();

  const strengths = [
    {
      icon: <Building2 className="h-7 w-7" />,
      title: t('about', 'industryAcademic'),
      description: t('about', 'industryAcademicDesc'),
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: <FlaskConical className="h-7 w-7" />,
      title: t('about', 'provincialLab'),
      description: t('about', 'provincialLabDesc'),
      gradient: 'from-primary to-green-600',
    },
    {
      icon: <Award className="h-7 w-7" />,
      title: t('about', 'thousandTonCapacity'),
      description: t('about', 'thousandTonCapacityDesc'),
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: t('about', 'corePatents'),
      description: t('about', 'corePatentsDesc'),
      gradient: 'from-blue-500 to-primary',
    }
  ];

  const badges = [
    t('about', 'selfDeveloped'),
    t('about', 'massProduction'),
    t('about', 'corePatents2'),
    t('about', 'provincialLab2'),
    t('about', 'industryCooperation'),
    t('about', 'techLeading')
  ];

  return (
    <div className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
          <Microscope className="h-4 w-4" />
          {t('about', 'rdStrengthTitle')}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about', 'rdStrengthTitle')}</h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-6 mb-8"></div>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          {t('about', 'rdStrengthSubtitle')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {strengths.map((item, index) => (
          <motion.div
            key={index}
            className="group relative bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
          >
            {/* 顶部渐变色条 */}
            <div className={`h-1.5 bg-gradient-to-r ${item.gradient}`} />

            <div className="relative p-7">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5">
                {item.icon}
              </div>
              <h3 className="text-base font-bold mb-3 text-gray-800 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 研究中心详情 */}
      <motion.div
        className="relative bg-white rounded-2xl overflow-hidden shadow-sm border border-border"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* 顶部绿色条 */}
        <div className="h-1.5 bg-gradient-to-r from-primary to-teal-500" />

        <div className="flex flex-col md:flex-row gap-0">
          {/* 图片区域 */}
          <motion.div
            className="w-full md:w-2/5 overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-64 md:h-full group overflow-hidden">
              <img
                src="/img/university-research-center.webp"
                alt={t('about', 'researchCenterTitle')}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
            </div>
          </motion.div>

          {/* 内容区域 */}
          <motion.div
            className="w-full md:w-3/5 p-8 md:p-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-1 bg-primary rounded-full mb-5" />
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{t('about', 'researchCenterTitle')}</h3>
            <p className="text-muted-foreground mb-7 leading-relaxed">
              {t('about', 'researchCenterDesc')}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-colors duration-300 cursor-default"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default RDStrength;