'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CompanyOverview from '@/components/about/CompanyOverview';
import MissionCards from '@/components/about/MissionCards';
import RDStrength from '@/components/about/RDStrength';
import Timeline from '@/components/about/Timeline';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPageClient() {
  const { t } = useLanguage();

  return (
      <div className="min-h-screen bg-gray-50/30">
        <Navbar />

        {/* 页面标题 */}
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
              ABOUT US
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-center text-white mb-6 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t('about', 'title')}
            </motion.h1>

            <motion.p
              className="text-white/90 text-center max-w-3xl mx-auto text-lg md:text-xl leading-relaxed drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t('about', 'subtitle')}
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

        {/* 公司简介与定位 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <CompanyOverview />
          </div>
        </section>

        {/* 愿景与使命 */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <MissionCards />
          </div>
        </section>

        {/* 研发实力与背书 */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <RDStrength />
          </div>
        </section>

        {/* 发展历程 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Timeline />
          </div>
        </section>

        <Footer />
      </div>
  );
}
