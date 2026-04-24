'use client';

import { motion } from 'framer-motion';
import { FlaskConical, CheckCircle, Factory, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Timeline = () => {
  const { t } = useLanguage();
  
  const milestones = [
    {
      title: t('technology', 'step1Title'),
      description: t('technology', 'step1Desc'),
      icon: <FlaskConical className="h-6 w-6 text-white" />,
      year: '2022',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      title: t('technology', 'step2Title'),
      description: t('technology', 'step2Desc'),
      icon: <CheckCircle className="h-6 w-6 text-white" />,
      year: '2023',
      color: 'from-primary to-emerald-400'
    },
    {
      title: t('technology', 'step3Title'),
      description: t('technology', 'step3Desc'),
      icon: <Factory className="h-6 w-6 text-white" />,
      year: '2024',
      color: 'from-orange-500 to-amber-400'
    }
  ];

  return (
    <div className="space-y-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">{t('technology', 'timelineTitle')}</h2>
        <motion.div
          className="w-20 h-1 bg-primary mx-auto mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        <p className="text-muted-foreground text-lg leading-relaxed">
          {t('technology', 'timelineSubtitle')}
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto py-10">
        {/* 时间轴线 */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-100 via-primary/30 to-gray-100 transform md:translate-x-[-0.5px]"></div>

        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-20 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            {/* 时间点 */}
            <div className={`absolute left-4 md:left-1/2 w-14 h-14 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center transform -translate-x-[26px] md:translate-x-[-28px] z-10 shadow-lg border-4 border-white`}>
              {milestone.icon}
            </div>

            {/* 内容 */}
            <div className={`w-full pl-16 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}>
              <motion.div 
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* 卡片装饰线 */}
                <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-2 h-full bg-gradient-to-b ${milestone.color} opacity-80`}></div>
                
                <div className={`inline-block bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 ${index % 2 === 0 ? 'md:float-right md:ml-4' : ''}`}>
                  {milestone.year}
                </div>
                <div className="clear-both"></div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{milestone.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{milestone.description}</p>
                
                <div className={`mt-6 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0 ${index % 2 === 0 ? 'md:justify-end translate-x-4' : '-translate-x-4'}`}>
                  <span>{t('technology', 'timelineLearnMore')}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            </div>
            
            {/* 占位 */}
            <div className="hidden md:block w-1/2"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;