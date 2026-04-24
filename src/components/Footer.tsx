'use client';

import Link from 'next/link';
import { Globe, Share2, MessageSquare, Link2, Camera, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, isChinese } = useLanguage();

  const quickLinks = [
    { name: t('nav', 'products'), href: '/products' },
    { name: t('nav', 'news'), href: '/news' },
    { name: t('nav', 'contact'), href: '/contact' },
    { name: t('nav', 'about'), href: '/about' },
    { name: t('nav', 'cases'), href: '/cases' },
    { name: t('nav', 'sustainability'), href: '/sustainability' },
  ];

  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* 公司信息 - 宽度减半并向左对齐 */}
          <div className="lg:w-1/4 lg:mr-auto">
            <div className="flex items-center mb-6">
              <img
                src="/img/logo.png"
                alt={isChinese ? "锐赛克" : "Rescye"}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('footer', 'companyDesc')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <Share2 className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <Link2 className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <Camera className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* 右侧内容区域 - 快速链接、商务联系、联系方式 - 向右对齐 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:ml-auto">
            <div>
              <h4 className="text-lg font-semibold mb-6 text-gray-800">{t('footer', 'quickLinks')}</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-600 hover:text-primary transition-colors duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-gray-800">{t('contact', 'businessContact')}</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800 font-medium">{t('contact', 'businessContactName')}</p>
                    <p className="text-gray-600">{t('contact', 'phoneNumber')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-gray-600">business@ruisaike.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{t('contact', 'headquartersAddress')}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-gray-800">{t('footer', 'contactTitle')}</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-gray-600">400-123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-gray-600">info@ruisaike.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-gray-600">www.ruisaike.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600 text-sm font-medium">
              {t('footer', 'copyright')}
            </p>
            <p className="text-gray-600 text-sm font-medium mt-2">
              {t('footer', 'icp')}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-gray-600">{t('nav', 'switchToZh')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-gray-600">{t('nav', 'switchToEn')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
