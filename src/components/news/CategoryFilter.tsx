'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilter = ({ activeCategory, setActiveCategory }: CategoryFilterProps) => {
  const { isChinese } = useLanguage();
  
  const categories = [
    { id: 'all', name: isChinese ? '全部' : 'All' },
    { id: 'company', name: isChinese ? '公司动态' : 'Company News' },
    { id: 'industry', name: isChinese ? '行业聚焦' : 'Industry Focus' },
    { id: 'market', name: isChinese ? '市场前沿' : 'Market Trends' }
  ];

  return (
    <div className="mb-12">
      <motion.div 
        className="flex items-center gap-2 overflow-x-auto pb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className={`px-6 py-2 rounded-full whitespace-nowrap ${activeCategory === category.id 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setActiveCategory(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {category.name}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default CategoryFilter;