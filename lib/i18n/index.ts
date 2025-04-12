import { I18nConfig } from 'fumadocs-core/i18n';

// 导出i18n配置
export const i18n: I18nConfig = {
  defaultLanguage: 'en',
  languages: ['en', 'zh'],
};

// 导出所有翻译
export * from './common/translations';
export * from './home/translations';
export * from './nav/translations'; 