'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const ApplicationGrid = () => {
  const { t } = useLanguage();
  
  const applications = [
    {
      name: t('products', 'pbt'),
      usage: t('products', 'pbtDesc')
    },
    {
      name: t('products', 'pct'),
      usage: t('products', 'pctDesc')
    },
    {
      name: t('products', 'pbat'),
      usage: t('products', 'pbatDesc')
    },
    {
      name: t('products', 'petg'),
      usage: t('products', 'petgDesc')
    },
    {
      name: t('products', 'pctg'),
      usage: t('products', 'pctgDesc')
    },
    {
      name: t('products', 'chdm'),
      usage: t('products', 'chdmDesc')
    },
    {
      name: t('products', 'polyesterPaint'),
      usage: t('products', 'polyesterPaintDesc')
    },
    {
      name: t('products', 'petResin'),
      usage: t('products', 'petResinDesc')
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-6">{t('products', 'applications')}</h2>
        <p className="text-muted-foreground mb-8">
          {t('products', 'applicationsDesc')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {applications.map((app, index) => (
          <motion.div
            key={index}
            className="bg-muted rounded-xl p-6 border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.03, 
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              borderColor: 'rgba(16, 185, 129, 0.5)'
            }}
          >
            <h3 className="text-lg font-semibold mb-3">{app.name}</h3>
            <p className="text-muted-foreground text-sm font-medium">{app.usage}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationGrid;