// 定义非React的纯数据对象，避免在翻译文件中直接包含React组件
export type HomeTranslations = {
  title: string;
  subtitle: string;
  description: string;
  explore: string;
  sections: Array<{
    title: string;
    description: string;
    icon: string; // 这里只存储图标名称，不存储React组件
    color: string;
  }>;
  competitionInfo: string;
  competitions: Array<{
    name: string;
    time: string;
    icon: string; // 同样只存储图标名称
  }>;
  cta: {
    title: string;
    description: string;
    button: string;
  };
};

export const homeTranslations: Record<string, HomeTranslations> = {
  en: {
    title: "MetaBubble Lab",
    subtitle: "Internal operations documentation and project guidelines",
    description: "A comprehensive resource for lab members on projects, competitions, and processes",
    explore: "Explore Documentation",
    sections: [
      {
        title: "Innovation Projects",
        description: "University Student Innovation and Entrepreneurship Training Program projects and Guangdong Province Climbing Plan projects.",
        icon: "Lightbulb",
        color: "from-amber-500 to-orange-500",
      },
      {
        title: "Outsourcing Projects",
        description: "Contract signing, project communication, development processes, and best practices.",
        icon: "Briefcase",
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Competition Guides",
        description: "Lanqiao Cup, Computer Design Contest, Mathematical Modeling, Innovation and Entrepreneurship Competition, Challenge Cup and more.",
        icon: "Trophy",
        color: "from-emerald-500 to-green-500",
      },
      {
        title: "Team Collaboration",
        description: "Guidelines for effective teamwork, resource sharing, and communication within the lab.",
        icon: "Users",
        color: "from-purple-500 to-pink-500",
      },
    ],
    competitionInfo: "Detailed information on competition schedules, processes, local/provincial/national levels, and focus areas.",
    competitions: [
      { name: "Lanqiao Cup", time: "March-April", icon: "Code" },
      { name: "Computer Design Contest", time: "April-May", icon: "FileCode" },
      { name: "China International College Students' Innovation Competition", time: "September-October", icon: "Globe" },
      { name: "National College Students' Mathematical Modeling Competition", time: "September", icon: "BarChart2" },
      { name: "Challenge Cup - National College Students' Extracurricular Academic Science and Technology Contest", time: "October (biennial)", icon: "Award" },
      { name: "Challenge Cup - Chinese College Students' Entrepreneurship Plan Competition", time: "April-May (biennial)", icon: "Briefcase" },
    ],
    cta: {
      title: "Welcome to MetaBubble Lab",
      description: "Join us to gain valuable experience in project development and competitions",
      button: "Start Exploring"
    }
  },
  zh: {
    title: "MetaBubble 实验室",
    subtitle: "内部运营文档与项目指南",
    description: "为实验室成员提供项目、比赛和流程的综合资源",
    explore: "浏览文档",
    sections: [
      {
        title: "创新项目",
        description: "大学生创新创业训练计划项目和广东省攀登计划项目指南。",
        icon: "Lightbulb",
        color: "from-amber-500 to-orange-500",
      },
      {
        title: "外包项目",
        description: "合同签订、项目沟通、开发流程和最佳实践。",
        icon: "Briefcase",
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "比赛指南",
        description: "蓝桥杯、计算机设计大赛、数学建模、创新创业竞赛、挑战杯等比赛详情。",
        icon: "Trophy",
        color: "from-emerald-500 to-green-500",
      },
      {
        title: "团队协作",
        description: "实验室内高效团队合作、资源共享和沟通的指南。",
        icon: "Users",
        color: "from-purple-500 to-pink-500",
      },
    ],
    competitionInfo: "比赛日程、流程、校赛/省赛/国赛的详细信息和各比赛侧重点。",
    competitions: [
      { name: "蓝桥杯", time: "每年3-4月", icon: "Code" },
      { name: "计算机设计大赛", time: "每年4-5月", icon: "FileCode" },
      { name: "中国国际大学生创新竞赛", time: "每年9-10月", icon: "Globe" },
      { name: "全国大学生数学建模竞赛", time: "每年9月", icon: "BarChart2" },
      { name: "\"挑战杯\"全国大学生课外学术科技作品竞赛（大挑）", time: "每两年10月", icon: "Award" },
      { name: "\"挑战杯\"中国大学生创业计划竞赛（小挑）", time: "每两年4-5月", icon: "Briefcase" },
    ],
    cta: {
      title: "MetaBubble 实验室欢迎你",
      description: "加入我们，获取更多关于项目开发和比赛的宝贵经验",
      button: "开始探索"
    }
  }
}; 