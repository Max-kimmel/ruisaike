'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Mail, MapPin, Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const JobAccordion = () => {
  const { t } = useLanguage();
  const [openJobId, setOpenJobId] = useState<number | null>(null);

  const toggleJob = (jobId: number) => {
    setOpenJobId(openJobId === jobId ? null : jobId);
  };

  const jobs = [
    {
      id: 1,
      title: t('contact', 'job1Title'),
      location: t('contact', 'job1Location'),
      type: t('contact', 'job1Type'),
      description: t('contact', 'job1Desc'),
      requirements: [
        t('contact', 'job1Req1'),
        t('contact', 'job1Req2'),
        t('contact', 'job1Req3'),
        t('contact', 'job1Req4')
      ]
    },
    {
      id: 2,
      title: t('contact', 'job2Title'),
      location: t('contact', 'job2Location'),
      type: t('contact', 'job2Type'),
      description: t('contact', 'job2Desc'),
      requirements: [
        t('contact', 'job2Req1'),
        t('contact', 'job2Req2'),
        t('contact', 'job2Req3'),
        t('contact', 'job2Req4')
      ]
    },
    {
      id: 3,
      title: t('contact', 'job3Title'),
      location: t('contact', 'job3Location'),
      type: t('contact', 'job3Type'),
      description: t('contact', 'job3Desc'),
      requirements: [
        t('contact', 'job3Req1'),
        t('contact', 'job3Req2'),
        t('contact', 'job3Req3'),
        t('contact', 'job3Req4')
      ]
    }
  ];

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact', 'careersTitle')}</h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-6 mb-8"></div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          {t('contact', 'careersSubtitle')}
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-4">
        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            className="bg-white rounded-xl border border-border overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <button
              onClick={() => toggleJob(job.id)}
              className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold">{job.title}</h3>
                  <div className="flex items-center gap-4 text-sm font-medium text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
                    <span>{job.type}</span>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ rotate: openJobId === job.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </motion.div>
            </button>

            <motion.div
              initial={false}
              animate={{ 
                height: openJobId === job.id ? 'auto' : 0,
                opacity: openJobId === job.id ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6">
                <div className="border-t border-border pt-6">
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  <h4 className="font-semibold mb-3">{t('contact', 'job1Req')}</h4>
                  <ul className="space-y-2 mb-6">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm font-medium">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href={`mailto:careers@rescye.com?subject=申请职位：${job.title}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="h-5 w-5" />
                    {t('contact', 'applyJob')}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-600 mb-4">
          {t('contact', 'noSuitableJob')}
        </p>
        <a
          href="mailto:careers@rescye.com"
          className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
        >
          <Mail className="h-5 w-5" />
          {t('contact', 'sendGeneral')}
        </a>
      </motion.div>
    </div>
  );
};

export default JobAccordion;