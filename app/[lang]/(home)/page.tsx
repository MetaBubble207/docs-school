import { homeTranslations } from "@/lib/i18n";
import { HeroSection, FeaturesSection, CompetitionSection, CTASection } from "@/components/home/AnimatedSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  
  // 获取当前语言的翻译内容，如果不存在则使用英文
  const translations = homeTranslations[lang] || homeTranslations.en;

  return (
    <div className="min-h-screen px-4 md:px-6 py-12">
      {/* 英雄区域 */}
      <HeroSection lang={lang} translations={translations} />
      
      {/* 特性区域 */}
      <FeaturesSection lang={lang} translations={translations} />
      
      {/* 比赛时间线 */}
      <CompetitionSection lang={lang} translations={translations} />
      
      {/* 行动号召 */}
      <CTASection lang={lang} translations={translations} />
    </div>
  );
}
