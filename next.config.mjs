import { createMDX } from 'fumadocs-mdx/next';
import { fileURLToPath } from 'url';
import path from 'path';

const withMDX = createMDX();

// 获取基础路径，用于GitHub Pages部署
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// 获取当前文件的目录路径
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'standalone', 
  basePath,
  trailingSlash: true,
  // 添加需要转译的依赖，这有助于解决模块解析问题
  transpilePackages: [
    'next-mdx-remote',
    'mdx-bundler',
    'fumadocs-core', 
    'fumadocs-mdx', 
    'fumadocs-ui'
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
    unoptimized: true, // 静态导出时需要
  },
  // 优化打包，去除调试信息
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // 生产环境下的非服务器端打包优化
      Object.assign(config.optimization.splitChunks.cacheGroups, {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        },
      });
      
      // 为了解决字体问题，提供一些解析别名
      config.resolve.alias = {
        ...config.resolve.alias,
        // 使用path.join
        '@vercel/turbopack-next/internal/font/google/font': 
          path.join(__dirname, 'node_modules', 'next', 'dist', 'font', 'google', 'font.js'),
      };
    }
    return config;
  },
};

export default withMDX(config);
