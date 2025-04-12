import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n, navTranslations } from '@/lib/i18n';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(locale: string): BaseLayoutProps {
  // 获取当前语言的导航文本，不存在则使用英文
  const texts = navTranslations[locale] || navTranslations.en;

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
