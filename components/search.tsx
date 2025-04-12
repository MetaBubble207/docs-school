'use client';
import SearchDialog from 'fumadocs-ui/components/dialog/search-default';
import type { SharedProps } from 'fumadocs-ui/components/dialog/search';

export default function CustomSearchDialog(props: SharedProps) {
  // 使用最简单的实现，Fumadocs 会自动处理搜索语言
  return <SearchDialog {...props} />;
} 