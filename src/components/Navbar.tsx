'use client';

import { useState, useEffect, useMemo } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [isScrolled, setIsScrolled] = useState(false);
  const { isChinese, toggleLanguage, t } = useLanguage();

  // 使用useMemo缓存导航链接，避免语言切换时重新创建
  const navLinks = useMemo(() => [
    { name: t('nav', 'home'), href: '/' },
    { name: t('nav', 'technology'), href: '/technology' },
    { name: t('nav', 'products'), href: '/products' },
    { name: t('nav', 'cases'), href: '/cases' },
    { name: t('nav', 'sustainability'), href: '/sustainability' },
    { name: t('nav', 'news'), href: '/news' },
    { name: t('nav', 'about'), href: '/about' },
    { name: t('nav', 'contact'), href: '/contact' },
  ], [t]);

  const switchLangText = useMemo(() => 
    isChinese ? t('nav', 'switchToEn') : t('nav', 'switchToZh'),
    [isChinese, t]
  );

  // 使用useEffect监听滚动，并使用requestAnimationFrame优化
  useEffect(() => {
    let ticking = false;
    let mounted = true;
    
    const updateScrollState = () => {
      if (mounted) {
        const scrollY = window.scrollY;
        setIsScrolled(scrollY > 50);
      }
      ticking = false;
    };
    
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    // 监听popstate事件（浏览器前进/后退）
    const handleRouteChange = () => {
      setActiveLink(window.location.pathname);
    };

    // 初始化 - 所有页面都从非滚动状态开始
    if (typeof window !== 'undefined') {
      // 始终从非滚动状态开始，确保所有页面的导航栏初始状态一致
      // 使用setTimeout确保DOM已完全渲染
      setTimeout(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsScrolled(false);
      }, 100);
    }
    handleRouteChange();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      mounted = false;
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // 动画变体
  const menuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: 'auto' }
  };

  const itemVariants = {
    hidden: (i: number) => ({ opacity: 0, y: 20, transition: { delay: i * 0.1 } }),
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } })
  };

  // 根据滚动状态确定样式
  const navbarClass = isScrolled 
    ? 'bg-white shadow-md' 
    : 'bg-transparent';
  
  const textColor = isScrolled ? 'text-gray-800' : 'text-white';
  const hoverColor = isScrolled ? 'hover:text-primary' : 'hover:text-green-300';
  const activeLinkColor = isScrolled ? 'text-primary' : 'text-green-400';
  const menuBgColor = isScrolled ? 'bg-white' : 'bg-gray-900/95 backdrop-blur-md';
  const menuTextColor = isScrolled ? 'text-gray-700' : 'text-white';

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClass}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between w-full">
        <div className="flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center"
          >
            {/* Logo */}
            <img 
              src="/img/logo.png" 
              alt="锐赛克" 
              className="h-12 w-auto"
            />
          </motion.div>
        </div>

        {/* 桌面导航 */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`font-medium transition-all duration-300 ${activeLink === link.href ? `${activeLinkColor} font-semibold` : `${textColor} ${hoverColor}`}`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.05, backgroundColor: isScrolled ? "rgba(16, 185, 129, 0.05)" : "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className={`flex items-center space-x-2 border transition-colors duration-300 px-4 py-2 rounded-lg ${isScrolled ? 'border-primary/20 hover:bg-primary/5' : 'border-white/30 hover:bg-white/10'}`}
          >
            <Globe className={`h-5 w-5 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            <span className={`font-medium ${textColor}`}>{switchLangText}</span>
          </motion.button>
        </nav>

        {/* 移动端菜单按钮 */}
        <div className="md:hidden flex items-center justify-end">
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`transition-colors p-2 ${textColor} ${hoverColor}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* 移动端导航菜单 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`md:hidden shadow-lg border-t overflow-hidden ${menuBgColor} ${isScrolled ? 'border-gray-100' : 'border-white/10'}`}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsMenuOpen(false);
                    }}
                    className={`font-medium py-3 transition-colors duration-300 ${activeLink === link.href ? `${activeLinkColor} font-semibold` : `${menuTextColor} ${isScrolled ? 'hover:text-primary' : 'hover:text-green-300'}`}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                custom={navLinks.length}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ duration: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.02, backgroundColor: isScrolled ? "rgba(16, 185, 129, 0.05)" : "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={toggleLanguage}
                  className={`flex items-center space-x-2 border transition-colors duration-300 px-4 py-3 rounded-lg ${isScrolled ? 'border-primary/20 hover:bg-primary/5' : 'border-white/30 hover:bg-white/10'}`}
                >
                  <Globe className={`h-5 w-5 ${isScrolled ? 'text-primary' : 'text-white'}`} />
                  <span className={`font-medium ${menuTextColor}`}>{switchLangText}</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;