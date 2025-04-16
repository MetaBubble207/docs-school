'use client';

import Image from 'next/image';
import React from 'react';

/**
 * Author interface defining the structure of an author object
 */
interface Author {
  /** GitHub用户名 */
  username: string;
  /** 显示名称 */
  name: string;
  /** 角色，如"Primary Author"或"Contributor" */
  role: string;
  /** GitHub链接或其他主页链接 */
  link: string;
  /** 头像URL，如不提供将使用GitHub头像 */
  avatar: string;
}

/**
 * DocAuthors组件的属性接口
 */
interface DocAuthorsProps {
  /** 作者数组 */
  authors?: Author[];
}

/**
 * DocAuthors Component
 * 
 * 在文档底部显示文档的作者列表，带有头像、名称、角色和链接
 * 
 * @param {DocAuthorsProps} props - 组件属性
 * @returns {React.ReactElement} - 渲染的组件
 * 
 * Usage:
 * ```tsx
 * <DocAuthors authors={[
 *   { 
 *     username: 'xiaban-x', 
 *     name: 'xiaban-x', 
 *     role: 'Primary Author', 
 *     link: 'https://github.com/xiaban-x',
 *     avatar: 'https://avatars.githubusercontent.com/u/101194919?v=4'
 *   }
 * ]} />
 * ```
 */
export function DocAuthors({ authors = [] }: DocAuthorsProps): React.ReactElement {
  // Default author if none provided
  if (!authors || authors.length === 0) {
    authors = [{ 
      username: 'xiaban-x', 
      name: 'xiaban-x', 
      role: 'Primary Author', 
      link: 'https://github.com/xiaban-x',
      avatar: 'https://avatars.githubusercontent.com/u/101194919?v=4'
    }];
  }
  
  return (
    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
      <h2 className="text-xl font-bold ">👥 文档撰写者</h2>
      <div className="flex flex-wrap gap-4">
        {authors.map((author: Author, index: number) => (
          <a 
            key={index}
            href={author.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center px-4 bg-gray-100 dark:bg-gray-800  hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="rounded-full mr-2 overflow-hidden relative">
              <Image 
                src={author.avatar} 
                alt={author.name} 
                className="object rounded-full my-4!"
                loading="lazy"
                width={40}
                height={40}
              />
            </div>
            <div>
              <div className="font-medium">{author.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{author.role}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// 同时提供默认导出和命名导出，增加兼容性
export default DocAuthors; 