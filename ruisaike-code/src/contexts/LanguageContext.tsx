'use client';

import React, { createContext, useState, useContext, ReactNode, useCallback, useMemo, useEffect } from 'react';
import { translations, Language } from './translations';

// 定义上下文类型
interface LanguageContextType {
  language: Language;
  isChinese: boolean;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (section: string, key?: string) => string;
}

// 创建上下文
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 上下文提供者组件
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // 初始状态使用默认值'zh'，确保服务器端和客户端的初始状态一致
  const [language, setLanguageState] = useState<Language>('zh');

  // 在客户端hydration完成后，从localStorage读取语言设置
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'zh' || savedLanguage === 'en') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(savedLanguage);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState(prev => {
      const newLang = prev === 'zh' ? 'en' : 'zh';
      localStorage.setItem('language', newLang);
      return newLang;
    });
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  }, []);

  const t = useCallback((section: string, key?: string): string => {
    const langData = translations[language];
    const sectionData = langData[section as keyof typeof langData];
    
    if (!sectionData) {
      return section;
    }
    
    if (key) {
      const keys = key.split('.');
      let result: unknown = sectionData;
      
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = (result as Record<string, unknown>)[k];
        } else {
          return key;
        }
      }
      
      return typeof result === 'string' ? result : key;
    }
    
    return sectionData as unknown as string;
  }, [language]);

  const value = useMemo(() => ({
    language,
    isChinese: language === 'zh',
    toggleLanguage,
    setLanguage,
    t
  }), [language, toggleLanguage, setLanguage, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// 自定义钩子，方便组件使用上下文
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
