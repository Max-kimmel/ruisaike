'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedCase from '@/components/cases/FeaturedCase';
import PartnersSection from '@/components/cases/PartnersSection';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CasesPageClient() {
  const { t, isChinese } = useLanguage();

  return (
      <div className="min-h-screen bg-gray-50/30">
        <Navbar />

        {/* 页面标题 (Hero Section) */}
        <section className="h-[33vh] md:h-[33vh] relative flex items-center overflow-hidden">
          {/* 背景图片 */}
          <div className="absolute inset-0 bg-[url('/img/carousel-1.webp')] bg-cover bg-center transform scale-105 motion-safe:animate-[pulse_10s_ease-in-out_infinite_alternate]"></div>

          {/* 渐变遮罩层 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-primary/40"></div>

          {/* 背景图案遮罩 (增加科技感纹理) */}
          <div className="absolute inset-0 opacity-20 bg-dot-pattern"></div>

          {/* 内容 */}
          <div className="container mx-auto px-4 relative z-10 flex flex-col items-center mt-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wider"
            >
              COOPERATION CASES
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-center text-white mb-6 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t('cases', 'title')}
            </motion.h1>

            <motion.p
              className="text-white/90 text-center max-w-3xl mx-auto text-lg md:text-xl leading-relaxed drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t('cases', 'subtitle')}
            </motion.p>
          </div>

          {/* 向下滚动指示器 */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <span className="text-sm tracking-widest mb-2 uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </section>

        {/* 核心标杆案例区 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t('cases', 'coreCases')}
            </motion.h2>

            {/* 浙大联合研发中心案例 */}
            <FeaturedCase
              title={t('cases', 'zjuTitle')}
              content={t('cases', 'zjuDesc')}
              imageUrl="/img/university-cooperation.webp"
              buttonText={t('cases', 'zjuButton')}
              reverse={false}
            />

            {/* 黄冈高新区千吨级再生 DMT 项目案例 */}
            <FeaturedCase
              title={t('cases', 'huangangTitle')}
              content={t('cases', 'huangangDesc')}
              imageUrl="/img/industrial-factory.webp"
              buttonText={t('cases', 'huangangButton')}
              reverse={true}
              stats={[
                { value: isChinese ? '1000' : '10', unit: isChinese ? '万' : ' million', label: t('cases', 'totalInvestment') },
                { value: '5000', unit: isChinese ? '吨' : ' tons', label: t('cases', 'annualDmt') },
                { value: '1600', unit: isChinese ? '吨' : ' tons', label: t('cases', 'annualEg') }
              ]}
            />
          </div>
        </section>

        {/* 更多合作伙伴区 */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <PartnersSection />
          </div>
        </section>

        <Footer />
      </div>
  );
}
