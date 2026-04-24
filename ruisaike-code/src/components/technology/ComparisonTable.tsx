'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2, Crown } from 'lucide-react';

const ComparisonTable = () => {
  const { t } = useLanguage();

  const comparisonData = [
    { 
      dimension: t('technology', 'purity'), 
      chemical: t('technology', 'purityHigh'), 
      physical: t('technology', 'purityMedium'), 
      biological: t('technology', 'purityMedium'),
      highlight: true
    },
    { 
      dimension: t('technology', 'sustainability'), 
      chemical: t('technology', 'purityHigh'), 
      physical: t('technology', 'purityMedium'), 
      biological: t('technology', 'purityHigh'),
      highlight: true
    },
    { 
      dimension: t('technology', 'comparisonScope'),
      chemical: t('technology', 'comparisonScopeWide'), 
      physical: t('technology', 'comparisonScopeLimited'), 
      biological: t('technology', 'comparisonScopeLimited'),
      highlight: false
    },
    { 
      dimension: t('technology', 'comparisonCycles'), 
      chemical: t('technology', 'comparisonCyclesUnlimited'), 
      physical: t('technology', 'comparisonCyclesLimited'), 
      biological: t('technology', 'comparisonScopeLimited'),
      highlight: true
    },
    { 
      dimension: t('technology', 'comparisonEfficiency'), 
      chemical: t('technology', 'purityHigh'), 
      physical: t('technology', 'purityMedium'), 
      biological: t('technology', 'purityLow'),
      highlight: true
    },
    { 
      dimension: t('technology', 'comparisonEnergy'), 
      chemical: t('technology', 'purityMedium'), 
      physical: t('technology', 'purityLow'), 
      biological: t('technology', 'purityMedium'),
      highlight: false
    },
    { 
      dimension: t('technology', 'comparisonCost'), 
      chemical: t('technology', 'purityHigh'), 
      physical: t('technology', 'purityMedium'), 
      biological: t('technology', 'purityHigh'),
      highlight: false
    },
  ];

  const renderBadge = (value: string, isHighlight: boolean = false) => {
    // 根据文字内容判断颜色倾向
    const isPositive = ['高', 'High', '无限', 'Unlimited', '广', 'Wide'].includes(value);
    const isNeutral = ['中', 'Medium'].includes(value);
    const isNegative = ['低', 'Low', '有限', 'Limited', '有限（3-4次）'].includes(value);

    let bgColor = 'bg-gray-100 text-gray-600';
    let borderColor = 'border-gray-200';

    if (isHighlight) {
      bgColor = 'bg-primary/10 text-primary';
      borderColor = 'border-primary/20';
    } else if (isPositive) {
      bgColor = 'bg-emerald-50 text-emerald-600';
      borderColor = 'border-emerald-200';
    } else if (isNeutral) {
      bgColor = 'bg-amber-50 text-amber-600';
      borderColor = 'border-amber-200';
    } else if (isNegative) {
      bgColor = 'bg-rose-50 text-rose-600';
      borderColor = 'border-rose-200';
    }

    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${bgColor} ${borderColor}`}>
        {isHighlight && <CheckCircle2 className="w-4 h-4 mr-1.5" />}
        {value}
      </span>
    );
  };

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          {t('technology', 'comparisonTitle')}
        </h2>
        <motion.div
          className="w-20 h-1 bg-primary mx-auto mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        <p className="text-muted-foreground text-lg leading-relaxed">
          {t('technology', 'comparisonSubtitle')}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
      >
        {/* 背景装饰 */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="overflow-x-auto relative z-10">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th className="p-6 font-bold text-gray-500 uppercase tracking-wider text-sm border-b border-gray-100 bg-gray-50/80 w-1/4">
                  {t('technology', 'comparisonDimension')}
                </th>
                <th className="p-6 font-bold border-b-2 border-primary bg-primary/5 w-1/4 relative">
                  <div className="flex items-center text-primary text-lg">
                    <Crown className="w-5 h-5 mr-2" />
                    {t('technology', 'chemicalMethod')}
                  </div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60"></div>
                </th>
                <th className="p-6 font-bold text-gray-700 border-b border-gray-100 bg-gray-50/80 w-1/4">
                  {t('technology', 'physicalMethod')}
                </th>
                <th className="p-6 font-bold text-gray-700 border-b border-gray-100 bg-gray-50/80 w-1/4">
                  {t('technology', 'biologicalMethod')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparisonData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-6 font-semibold text-gray-800">
                    {item.dimension}
                  </td>
                  <td className="p-6 bg-primary/[0.02] border-x border-primary/10 relative">
                    {/* 锐赛克技术列的背景高亮 */}
                    {renderBadge(item.chemical, true)}
                  </td>
                  <td className="p-6">
                    {renderBadge(item.physical)}
                  </td>
                  <td className="p-6">
                    {renderBadge(item.biological)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-6 max-w-4xl mx-auto"
      >
        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mt-1">
          <CheckCircle2 className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">{t('technology', 'comparisonSummaryTitle')}</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            {t('technology', 'comparisonSummaryDesc').split(t('technology', 'comparisonSummaryHighlight')).map((part, i, arr) => (
              i < arr.length - 1 ? (
                <span key={i}>{part}<strong className="text-primary mx-1">{t('technology', 'comparisonSummaryHighlight')}</strong></span>
              ) : <span key={i}>{part}</span>
            ))}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ComparisonTable;