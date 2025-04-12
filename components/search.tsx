'use client';
import SearchDialog from 'fumadocs-ui/components/dialog/search-default';
import type { SharedProps } from 'fumadocs-ui/components/dialog/search';
import { useEffect } from 'react';

export default function CustomSearchDialog(props: SharedProps) {
  // 在对话框打开/关闭时处理导航栏边距
  useEffect(() => {
    if (props.open) {
      // 计算滚动条宽度
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // 获取导航栏元素
      const navbar = document.querySelector('#nd-nav');
      console.log("navbar ==>", navbar);
      if (navbar) {
        // 保存原始的右边距值
        const originalPaddingRight = getComputedStyle(navbar).paddingRight;
        console.log("originalPaddingRight ==>", originalPaddingRight);
        navbar.setAttribute('data-original-padding', originalPaddingRight);
        
        // 设置新的右边距（原始值 + 滚动条宽度）
        const originalPaddingValue = parseFloat(originalPaddingRight) || 0;
        const newPaddingRight = `${originalPaddingValue + scrollbarWidth}px`;
        (navbar as HTMLElement).style.paddingRight = newPaddingRight;
      }
    } else {
      // 对话框关闭时恢复原始边距
      const navbar = document.querySelector('#nd-nav');
      if (navbar) {
        const originalPadding = navbar.getAttribute('data-original-padding');
        if (originalPadding !== null) {
          (navbar as HTMLElement).style.paddingRight = originalPadding;
        }
      }
    }
  }, [props.open]);

  // 使用默认的搜索对话框
  return <SearchDialog {...props} />;
} 