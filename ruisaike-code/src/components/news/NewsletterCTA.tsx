'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Leaf, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const NewsletterCTA = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { isChinese } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50 relative overflow-hidden">
      {/* 装饰背景元素 */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-30 -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-200 rounded-full blur-3xl opacity-30 translate-x-40 translate-y-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-3xl shadow-xl border border-green-100 overflow-hidden">
            {/* 顶部装饰条 */}
            <div className="h-2 bg-gradient-to-r from-green-500 to-teal-500"></div>
            
            <div className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* 左侧内容 */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {isChinese ? '关注锐赛克，获取最新绿碳技术与行业报告' : 'Follow Rescye, Get Latest Green Carbon Technology & Industry Reports'}
                  </h3>
                  
                  <p className="text-gray-600 text-lg mb-2">
                    {isChinese ? '订阅我们的新闻通讯，及时了解废塑料化学循环行业的最新动态和技术突破' : 'Subscribe to our newsletter to stay updated on the latest developments and technological breakthroughs in the waste plastic chemical recycling industry'}
                  </p>
                  
                  {/* 好处列表 */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{isChinese ? '技术前沿资讯' : 'Cutting-edge tech news'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{isChinese ? '行业深度报告' : 'Industry reports'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{isChinese ? '环保政策解读' : 'Policy insights'}</span>
                    </div>
                  </div>
                </div>
                
                {/* 右侧表单 */}
                <div className="w-full lg:w-96">
                  {!subscribed ? (
                    <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border border-green-100">
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={isChinese ? '请输入您的邮箱地址' : 'Please enter your email address'}
                            className="w-full pl-12 pr-4 py-4 bg-white border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-700"
                            required
                          />
                        </div>
                        
                        <motion.button
                          type="submit"
                          className="w-full py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl font-medium shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 transition-all flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>{isChinese ? '立即订阅' : 'Subscribe Now'}</span>
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      </form>
                      
                      <p className="text-center text-xs text-gray-500 mt-4">
                        {isChinese ? '我们承诺保护您的隐私，绝不会发送垃圾邮件' : 'We promise to protect your privacy and never send spam'}
                      </p>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl p-8 text-white text-center"
                    >
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">{isChinese ? '订阅成功！' : 'Subscription successful!'}</h4>
                      <p className="text-green-100">{isChinese ? '感谢您的关注，我们将很快与您联系' : 'Thank you for your interest, we will be in touch soon'}</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterCTA;