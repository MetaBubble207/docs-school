import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { createTokenizer } from '@orama/tokenizers/mandarin';

export const { GET } = createFromSource(source, undefined, {
  localeMap: {
    // 使用我们i18n配置中的语言代码
    zh: {
      // 中文搜索配置选项
      tokenizer: createTokenizer(),
      search: {
        threshold: 0,
        tolerance: 0,
      },
    },
  },
});
