import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from '@/lib/i18n';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(locale: string): BaseLayoutProps {
  // 多语言导航配置
  const navTexts = {
    en: {
      appName: 'My App',
      docs: 'Documentation'
    },
    zh: {
      appName: '我的应用',
      docs: '文档'
    }
  };

  // 获取当前语言文本，不存在则使用英文
  const texts = navTexts[locale as keyof typeof navTexts] || navTexts.en;

  return {
    i18n,
    nav: {
      title: (
        <>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Logo"
          >
            <circle cx={12} cy={12} r={12} fill="currentColor" />
          </svg>
          {texts.appName}
        </>
      ),
    },
    links: [
      {
        text: texts.docs,
        url: `/${locale}/docs`,
        active: 'nested-url',
      },
    ],
  };
}
