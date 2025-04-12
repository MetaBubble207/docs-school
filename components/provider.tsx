'use client';
import { RootProvider } from 'fumadocs-ui/provider';
import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';

// 动态加载搜索组件
const SearchDialog = dynamic(() => import('@/components/search'));

// 中文翻译
const zh: Record<string, string> = {
  search: '搜索',
  searchPrompt: '搜索文档...',
  noResultsFound: '未找到结果',
  poweredBy: '技术支持',
  tableOfContents: '目录',
  lastUpdatedAt: '最后更新于',
  showMore: '显示更多',
  hideMore: '隐藏更多',
  copied: '已复制',
  copy: '复制',
  darkMode: '深色模式',
  lightMode: '浅色模式',
  systemMode: '系统模式',
  appearance: '外观',
  previousPage: '上一页',
  nextPage: '下一页',
  currentPage: '当前页面',
  goToPage: '前往页面',
  closeSearch: '关闭搜索',
  chooseLanguage: '选择语言',
};

// 支持的语言列表
const locales = [
  {
    name: 'English',
    locale: 'en',
  },
  {
    name: '中文',
    locale: 'zh',
  },
];

export function Provider({ children }: { children: ReactNode }) {
  const params = useParams();
  const lang = params?.lang as string || 'en';

  // 多语言文本
  const uiTexts = {
    en: {
      home: 'Home',
      docs: 'Documentation',
      searchHotKey: 'K'
    },
    zh: {
      home: '首页',
      docs: '文档',
      searchHotKey: 'K'  // 可以保持一致或根据需要修改
    }
  };

  // 使用当前语言的文本，如果不存在则使用英文
  const texts = uiTexts[lang as keyof typeof uiTexts] || uiTexts.en;

  return (
    <RootProvider
      i18n={{
        locale: lang,
        locales,
        translations: { zh }[lang as 'zh'] || undefined,
      }}
      search={{
        SearchDialog,
        options: {
          api: '/api/search',
        },
        links: [
          [texts.home, `/${lang}`],
          [texts.docs, `/${lang}/docs`],
        ],
        hotKey: [
          {
            display: texts.searchHotKey,
            key: 'k',
          },
        ],
      }}
    >
      {children}
    </RootProvider>
  );
} 