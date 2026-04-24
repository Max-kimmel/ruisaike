'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const ProductShowcase = () => {
  const { t } = useLanguage();
  
  const products = [
    {
      name: t('home', 'dmtName'),
      description: t('home', 'dmtDesc'),
      image: '/img/dmt-product.webp',
      params: [
        { label: t('home', 'purity'), value: '≥99.9%' },
        { label: t('home', 'meltingPoint'), value: '140-142°C' },
        { label: t('home', 'colority'), value: '≤10 APHA' },
        { label: t('home', 'moisture'), value: '≤0.1%' }
      ]
    },
    {
      name: t('home', 'egName'),
      description: t('home', 'egDesc'),
      image: '/img/ethylene-glycol.webp',
      params: [
        { label: t('home', 'purity'), value: '≥99.9%' },
        { label: t('home', 'density'), value: '1.113-1.115 g/cm³' },
        { label: t('home', 'colority'), value: '≤5 APHA' },
        { label: t('home', 'moisture'), value: '≤0.1%' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('home', 'productShowcaseTitle')}
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
            {t('home', 'productShowcaseSubtitle')}
          </motion.p>
        </div>

        <div className="space-y-20">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full md:w-1/2">
                <div className="aspect-video bg-white rounded-xl shadow-md overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                <p className="text-muted-foreground mb-8">{product.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {product.params.map((param, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                      <span className="text-muted-foreground text-sm font-medium block mb-1">{param.label}</span>
                      <span className="text-foreground font-semibold">{param.value}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  className="flex items-center gap-2 text-primary font-medium hover:underline"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {t('home', 'viewReport')} <FileText className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;