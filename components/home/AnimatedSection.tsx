'use client';
import { ArrowRight, Award } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HomeTranslations, commonTranslations } from "@/lib/i18n";
import * as LucideIcons from "lucide-react";

interface AnimatedSectionProps {
  lang: string;
  translations: HomeTranslations;
}

// 通用函数，根据图标名称获取Lucide图标组件
function getIconByName(iconName: string, className?: string) {
  // 先转为unknown，然后断言为具有动态索引的类型
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<{className?: string}>>;
  const IconComponent = icons[iconName];
  return IconComponent ? <IconComponent className={className} /> : null;
}

export function HeroSection({ lang, translations }: AnimatedSectionProps) {
  const { title, subtitle, description, explore } = translations;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-4xl mx-auto mb-16"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600"
      >
        {title}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-300"
      >
        {subtitle}
      </motion.p>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-8 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
      >
        {description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href={`/${lang}/docs`}
          className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {explore}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </motion.div>
    </motion.div>
  );
}

export function FeaturesSection({ translations }: AnimatedSectionProps) {
  const { sections } = translations;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16"
    >
      {sections.map((section, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800"
        >
          <div className={`p-6 bg-gradient-to-br ${section.color} text-white`}>
            {getIconByName(section.icon, "w-10 h-10")}
            <h3 className="text-xl font-bold mt-4">{section.title}</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-600 dark:text-gray-300">{section.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function CompetitionSection({ lang, translations }: AnimatedSectionProps) {
  const { competitionInfo, competitions } = translations;
  // 获取通用翻译文本
  const commonTexts = commonTranslations[lang] || commonTranslations.en;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="max-w-4xl mx-auto rounded-xl bg-white dark:bg-gray-800 shadow-lg p-8 mb-16"
    >
      <div className="flex items-center mb-4">
        <Award className="h-8 w-8 text-indigo-600 mr-3" />
        <h2 className="text-2xl font-bold">{commonTexts.pageHeaders.competitionTimeline}</h2>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{competitionInfo}</p>
      <div className="space-y-4">
        {competitions.map((comp, i) => (
          <motion.div 
            key={i}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9 + (i * 0.1) }}
            className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 mr-4">
              {getIconByName(comp.icon)}
            </div>
            <div>
              <p className="font-medium">{comp.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{comp.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function CTASection({ lang, translations }: AnimatedSectionProps) {
  const { cta } = translations;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="text-center max-w-3xl mx-auto bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl p-8"
    >
      <h2 className="text-2xl font-bold mb-4">
        {cta.title}
      </h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        {cta.description}
      </p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href={`/${lang}/docs`}
          className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:shadow-lg transition-all duration-300"
        >
          {cta.button}
        </Link>
      </motion.div>
    </motion.div>
  );
} 