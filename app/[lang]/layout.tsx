import '../global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Translations } from 'fumadocs-ui/i18n';

const inter = Inter({
  subsets: ['latin'],
});

// 中文翻译
const zh: Partial<Translations> = {
  search: '搜索',
  searchNoResult: '未找到结果',
  previousPage: '上一页',
  nextPage: '下一页',
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

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const lang = (await params).lang;

  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          i18n={{
            locale: lang,
            locales,
            translations: { zh }[lang as 'zh'] || undefined,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}