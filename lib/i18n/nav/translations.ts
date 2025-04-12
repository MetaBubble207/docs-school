/**
 * 导航栏多语言文本配置
 */
export type NavTranslations = {
  appName: string;
  docs: string;
};

export const navTranslations: Record<string, NavTranslations> = {
  en: {
    appName: 'MetaBubble Lab',
    docs: 'Documentation',
  },
  zh: {
    appName: 'MetaBubble 实验室',
    docs: '文档',
  },
}; 