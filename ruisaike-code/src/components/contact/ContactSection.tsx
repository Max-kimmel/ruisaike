'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, User, Building2, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { isChinese } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    interest: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: '',
      company: '',
      email: '',
      interest: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactItems = [
    {
      icon: <User className="h-5 w-5" />,
      label: isChinese ? '商务联系人' : 'Business Contact',
      value: isChinese ? '邢梅佳' : 'Xing Meijia',
      href: null
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: isChinese ? '联系电话' : 'Phone',
      value: '13476129009',
      href: 'tel:13476129009'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: isChinese ? '邮箱' : 'Email',
      value: 'contact@rescye.com',
      href: 'mailto:contact@rescye.com'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: isChinese ? '总部地址' : 'Headquarters Address',
      value: isChinese ? '杭州市临安区' : 'Linan District, Hangzhou',
      href: null
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{isChinese ? '商务联系' : 'Business Contact'}</h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-6 mb-8"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {isChinese ? '期待与您合作，共同推动绿色循环经济的发展' : 'Looking forward to cooperating with you to promote the development of green circular economy'}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* 左侧联系方式 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* 联系信息卡片 */}
          <div className="relative bg-gradient-to-br from-primary/90 to-teal-600 rounded-2xl p-8 text-white overflow-hidden h-full">
            {/* 背景装饰 */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-black/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">{isChinese ? '联系方式' : 'Contact Information'}</h3>
              <p className="text-white/80 mb-8 text-sm">
                {isChinese ? '随时欢迎您与我们取得联系' : 'We welcome you to contact us at any time'}
              </p>

              <div className="space-y-5">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-medium mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-semibold hover:text-white/80 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 底部提示 */}
              <div className="mt-10 pt-8 border-t border-white/20">
                <p className="text-white/70 text-sm">
                  {isChinese ? '⏰ 工作时间：周一至周五 9:00 - 18:00' : '⏰ Working Hours: Mon-Fri 9:00 - 18:00'}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 右侧在线表单 */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-sm border border-border"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-2">{isChinese ? '在线询盘' : 'Online Inquiry'}</h3>
          <p className="text-muted-foreground text-sm mb-7">{isChinese ? '填写表单，我们将在24小时内回复' : 'Fill in the form and we will reply within 24 hours'}</p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">{isChinese ? '姓名 *' : 'Name *'}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                    placeholder={isChinese ? '请输入您的姓名' : 'Your name'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">{isChinese ? '公司名称 *' : 'Company *'}</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                    placeholder={isChinese ? '请输入公司名称' : 'Company name'}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">{isChinese ? '邮箱 *' : 'Email *'}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                  placeholder={isChinese ? '请输入您的邮箱' : 'your@email.com'}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">{isChinese ? '感兴趣的产品/服务 *' : 'Interested In *'}</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  title={isChinese ? '选择感兴趣的产品或服务' : 'Select a product or service you are interested in'}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all bg-white text-sm"
                >
                  <option value="">{isChinese ? '请选择' : 'Please select'}</option>
                  <option value="dmt">{isChinese ? 'DMT 产品' : 'DMT Product'}</option>
                  <option value="eg">{isChinese ? '乙二醇 (EG) 产品' : 'Ethylene Glycol (EG) Product'}</option>
                  <option value="cooperation">{isChinese ? '合作研发' : 'Cooperative R&D'}</option>
                  <option value="other">{isChinese ? '其他' : 'Other'}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">{isChinese ? '留言内容' : 'Message'}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none text-sm"
                  placeholder={isChinese ? '请输入您的留言内容' : 'Your message...'}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isChinese ? '提交询盘' : 'Submit Inquiry'}
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-2">{isChinese ? '提交成功！' : 'Submission Successful!'}</h4>
              <p className="text-gray-600 mb-6 text-sm">{isChinese ? '感谢您的询盘，我们将在24小时内与您联系。' : 'Thank you for your inquiry. We will contact you within 24 hours.'}</p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 border-2 border-primary text-primary rounded-xl hover:bg-primary/5 transition-colors font-semibold"
              >
                {isChinese ? '继续留言' : 'Continue Messaging'}
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;