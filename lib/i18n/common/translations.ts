/**
 * 通用多语言文本配置，可被多个组件共享
 */
export type CommonTranslations = {
  pageHeaders: {
    competitionTimeline: string;
  };
};

export const commonTranslations: Record<string, CommonTranslations> = {
  en: {
    pageHeaders: {
      competitionTimeline: 'Competition Timeline',
    },
  },
  zh: {
    pageHeaders: {
      competitionTimeline: '比赛时间线',
    },
  },
}; 