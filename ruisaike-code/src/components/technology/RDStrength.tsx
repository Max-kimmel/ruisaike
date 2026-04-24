'use client';

import { motion } from 'framer-motion';
import { Microscope, Beaker, Factory, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const RDStrength = () => {
  const { t } = useLanguage();

  const strengths = [
    {
      icon: <Microscope className="h-8 w-8" />,
      title: t('about', 'industryAcademic'),
      desc: t('about', 'industryAcademicDesc'),
    },
    {
      icon: <Beaker className="h-8 w-8" />,
      title: t('about', 'provincialLab'),
      desc: t('about', 'provincialLabDesc'),
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: t('about', 'thousandTonCapacity'),
      desc: t('about', 'thousandTonCapacityDesc'),
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: t('about', 'corePatents'),
      desc: t('about', 'corePatentsDesc'),
    },
  ];

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          {t('technology', 'rdStrengthTitle')}
        </h2>
        <motion.div
          className="w-20 h-1 bg-primary mx-auto mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        <p className="text-muted-foreground text-lg leading-relaxed">
          {t('technology', 'rdStrengthSubtitle')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {strengths.map((item, index) => (
          <motion.div
            key={index}
            className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white text-primary transition-colors duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RDStrength;
