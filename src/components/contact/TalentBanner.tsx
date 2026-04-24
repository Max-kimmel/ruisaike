'use client';

import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const TalentBanner = () => {
  const { isChinese } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section ref={containerRef} className="relative h-[33vh] overflow-hidden m-0 p-0 leading-none">
      {/* 背景图片 */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
      >
        <img 
          src="/img/modern-laboratory.webp" 
          alt="Talent" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* 遮罩 */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* 内容 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-center"
          style={{ opacity }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {isChinese ? '以人才为关键' : 'Talent as the Key'}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {isChinese ? '加入锐赛克，与志同道合的伙伴一起，推动绿色科技革命' : 'Join Rescye, work with like-minded partners to drive the green technology revolution'}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TalentBanner;