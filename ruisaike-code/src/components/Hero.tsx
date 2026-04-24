'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Play, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  const videoSrc = '/video/dmt.mp4';
  
  // 使用原生JavaScript处理视频播放
  const playVideo = () => {
    const video = document.createElement('video');
    video.src = videoSrc;
    video.controls = true;
    video.autoplay = true;
    video.className = 'w-full h-auto';
    
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4';
    modal.innerHTML = `
      <div class="relative max-w-4xl w-full">
        <button class="absolute -top-12 right-0 text-white hover:text-green-400 transition-colors" onclick="this.parentElement.parentElement.remove()">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div class="bg-white p-4 rounded-lg"></div>
      </div>
    `;
    
    modal.querySelector('.bg-white')?.appendChild(video);
    document.body.appendChild(modal);
  };
  
  return (
    <header>
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20" aria-label="主视觉区域">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full relative">
            <img 
              src="/img/carousel-hero-1.webp" 
              alt="锐赛克主视觉背景 - 化学法废塑料再生技术"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            {/* 渐变遮罩层 */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-primary/40" aria-hidden="true"></div>
            
            <div 
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/20 rounded-full blur-3xl md:w-80 md:h-80"
              aria-hidden="true"
            />
            
            <div 
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl md:w-96 md:h-96"
              aria-hidden="true"
            />
            
            <div 
              className="absolute top-1/2 right-1/3 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
              aria-hidden="true"
            />
            
            <div className="absolute inset-0 bg-grid-pattern opacity-10" aria-hidden="true"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10 pointer-events-none">
          <div className="flex flex-col lg:flex-row items-center pointer-events-auto">
            <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
                    <span className="block text-white">{t('home', 'heroTitle')}</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 mt-2">
                      {t('home', 'heroSubtitle')}
                    </span>
                  </h1>
                </motion.div>
                
                <motion.p 
                  className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {t('home', 'heroDescription')}
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.a
                    href="/technology"
                    className="px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl hover:from-green-600 hover:to-teal-600 transition-all flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg font-semibold shadow-xl shadow-green-500/20 hover:shadow-green-500/30"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('home', 'exploreTech')} <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  </motion.a>
                  
                  <motion.a
                    href="/contact"
                    className="px-6 sm:px-8 py-4 sm:py-5 border-2 border-green-400 text-green-400 rounded-xl hover:bg-green-400/10 transition-all text-base sm:text-lg font-semibold shadow-lg shadow-green-500/10 hover:shadow-green-500/20"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('home', 'contactUs')}
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="flex items-center justify-center w-full z-30 pointer-events-auto">
                <button
                  onClick={playVideo}
                  className="w-4/5 sm:w-3/4 md:w-2/3 h-64 sm:h-80 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col items-center justify-center border border-green-500/30 p-4 sm:p-6 md:p-8 cursor-pointer hover:bg-white/15 transition-all"
                  aria-label="播放产品演示视频"
                >
                  <div className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 md:mb-8">
                    <div className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 bg-white/10 rounded-full flex items-center justify-center cursor-pointer" onClick={playVideo} role="img" aria-label="播放图标">
                      <Play className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 text-green-400" aria-hidden="true" />
                    </div>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 font-medium">{t('home', 'hero3dDesc')}</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* 向下滚动指示器 */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          aria-hidden="true"
        >
          <div className="relative">
            {/* 外圈脉冲动画 */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0, 0.3]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut"
              }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-green-400/30"></div>
            </motion.div>
            
            {/* 主按钮容器 */}
            <motion.div
              className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-green-400/30 flex items-center justify-center cursor-pointer shadow-lg shadow-green-500/20"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* 图标容器 */}
              <div className="relative">
                {/* 上箭头 */}
                <motion.div
                  animate={{
                    y: [0, 3, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0
                  }}
                >
                  <ChevronDown className="h-6 w-6 md:h-7 md:w-7 text-green-400 absolute -top-4 left-1/2 transform -translate-x-1/2" />
                </motion.div>
                
                {/* 主箭头 */}
                <ChevronDown className="h-6 w-6 md:h-7 md:w-7 text-green-400" />
                
                {/* 下箭头 */}
                <motion.div
                  animate={{
                    y: [0, 3, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <ChevronDown className="h-6 w-6 md:h-7 md:w-7 text-green-400 absolute -bottom-4 left-1/2 transform -translate-x-1/2 opacity-70" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </header>
  );
};

export default Hero;