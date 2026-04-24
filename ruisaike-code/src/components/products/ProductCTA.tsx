'use client';

import { motion } from 'framer-motion';
import { BookOpen, Package, Headphones } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

const ProductCTA = () => {
  const { t } = useLanguage();

  const actions = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      label: t('products', 'ctaButton1'),
      variant: 'outline' as const,
    },
    {
      icon: <Package className="h-6 w-6" />,
      label: t('products', 'ctaButton2'),
      variant: 'solid' as const,
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      label: t('products', 'ctaButton3'),
      variant: 'outline' as const,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/img/carousel-1.webp')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('products', 'ctaTitle')}
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-white mx-auto mt-6 mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          <motion.p
            className="text-white/80 text-lg mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('products', 'ctaDesc')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {actions.map((action, index) => (
              <Link key={index} href="/contact">
                <motion.button
                  className={`flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 ${
                    action.variant === 'solid'
                      ? 'bg-primary text-white hover:bg-primary/90 shadow-lg'
                      : 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {action.icon}
                  {action.label}
                </motion.button>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductCTA;
