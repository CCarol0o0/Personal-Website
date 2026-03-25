import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'name': 'Qiufan Chen',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About Me',
    'nav.resume': 'Resume',
    'home.greeting': "Hey, I'm",
    'home.role': 'Data Analyst & Creative Designer',
    'home.projects.desc': 'My portfolio',
    'home.about.desc': 'My interests',
    'home.resume.desc': 'View my CV',
    'projects.title': 'Projects',
    'projects.featured': 'Featured',
    'projects.featured.badge': "Master's Dissertation",
    'projects.featured.title': 'Digital Twin of Transportation Network',
    'projects.featured.desc': 'Optimization of transportation hub scheduling and explainable AI based on multi-layer dynamic graph networks and machine learning.',
    'projects.featured.btn1': 'Dashboard',
    'projects.featured.btn2': 'Analysis',
    'projects.portfolio.title': 'Portfolio',
    'projects.indie.title': 'Creative Portfolio & Indie Game',
    'projects.indie.badge': 'Game Design & UIUX',
    'projects.indie.desc': 'Includes the indie game "HER ROOM" (core mechanics, narrative, art) and three other creative design projects from my portfolio.',
    'projects.indie.link': 'Play on itch.io',
    'projects.bi.title': 'Business Visualization & Retail Insights',
    'projects.bi.badge': 'Business Intelligence',
    'projects.bi.desc': 'Refined data insights and Tableau dashboards covering store sales, profits, and return rates.',
    'projects.sim.title': 'Operations Research & Simulation',
    'projects.sim.badge': 'Simulation',
    'projects.sim.desc': 'AnyLogic discrete-event simulation for e-commerce fulfillment optimization.',
    'projects.consumer.title': 'Game Consumer Behavior Research',
    'projects.consumer.badge': 'Consumer Behavior',
    'projects.consumer.desc': 'Analysis of perceived value and consumption intention of "Honor of Kings" skins based on SPSS structural equation modeling.',
    'about.title': 'About Me',
    'about.bio1': "Hi, I'm Carol (Qiufan Chen).",
    'about.bio2': "I am an explorer wandering the boundary between \"rational data\" and \"emotional design\". Through my deconstruction and reconstruction, I hope to not only untangle complex data and logical frameworks but also bring warm, clear, and touching experiences to others.",
    'about.bio3': "I embrace change and draw nourishment from setbacks. To me, whether it's a challenge in learning or a low point in life, it's an opportunity to explore new things. I enjoy the flow state when solving complex problems, and I also deeply love real life—beyond data and logic, I draw, read, exercise, and build my own corner in the digital world.",
    'about.skills.title': 'Skills',
    'about.skills.data.title': 'Data & BI',
    'about.skills.design.title': 'Design & UI/UX',
    'about.skills.dev.title': 'Development',
    'about.skills.data': 'SQL, Tableau, PowerBI, SPSS, R, Stata, Anylogic, 飞书多维表格',
    'about.skills.design': 'Figma, Photoshop, After Effects, Procreate, Blender',
    'about.skills.dev': 'Python, HTML/CSS, JavaScript, AI-Assisted Workflow',
    'about.me.title': 'This is Me',
    'about.me.desc': 'A glimpse into my life',
    'about.art.title': 'My Art',
    'about.art.desc': 'Character Design, Illustration, Comics',
    'about.cat.title': 'My Cat',
    'about.cat.desc': 'A black-and-white kitten born on Dec 23, 2025',
    'about.sports.title': 'Sports',
    'about.sports.desc': 'Shanghai International Marathon Elite Runner Volunteer. Exploring Sports + Tech + Entertainment.',
    'about.books.title': 'Favorite Books',
    'about.books.desc': 'One Hundred Years of Solitude, The Little Prince, We, Brave New World, Nineteen Eighty-Four,  Misbehaving: The Making of Behavioral Economics, Siddhartha, The Razor’s',
    'about.games.title': 'Games',
    'about.movies.title': 'Movies & TV',
    'resume.title': 'Resume',
    'resume.view': 'View Online',
    'resume.download': 'Download PDF',
    'resume.github': 'GitHub',
    'resume.instagram': 'Instagram',
  },
  zh: {
    'name': '陈秋帆',
    'nav.home': '首页',
    'nav.projects': '项目',
    'nav.about': '关于我',
    'nav.resume': '简历',
    'home.greeting': "Hey, 我是",
    'home.role': '数据分析师 & 创意设计师',
    'home.projects.desc': '我的作品集',
    'home.about.desc': '我的兴趣爱好',
    'home.resume.desc': '查看我的简历',
    'projects.title': '项目',
    'projects.featured': '精选项目',
    'projects.featured.badge': '硕士毕业论文',
    'projects.featured.title': '交通网络数字孪生',
    'projects.featured.desc': '基于多层动态图网络与机器学习的交通枢纽调度优化与可解释 AI。',
    'projects.featured.btn1': '交互板 (Dashboard)',
    'projects.featured.btn2': '可视化分析 (Analysis)',
    'projects.portfolio.title': '作品集',
    'projects.indie.title': '创意作品集与独立游戏',
    'projects.indie.badge': 'Game Design & UIUX',
    'projects.indie.desc': '包含探讨家庭教育与阶级焦虑的《HER ROOM》独立游戏（核心机制、剧情文本设计与美术UI）,以及我的portfolio里的其他三个创意项目。',
    'projects.indie.link': '在 itch.io 上游玩',
    'projects.bi.title': '商业可视化与零售洞察',
    'projects.bi.badge': 'Business Intelligence',
    'projects.bi.desc': '从门店销售、利润到退货率的精细化数据洞察与 Tableau 大屏。',
    'projects.sim.title': '运筹与仿真',
    'projects.sim.badge': 'Simulation',
    'projects.sim.desc': 'AnyLogic 离散事件仿真优化。',
    'projects.consumer.title': '游戏消费行为研究',
    'projects.consumer.badge': 'Consumer Behavior',
    'projects.consumer.desc': '基于 SPSS 结构方程模型的《王者荣耀》皮肤感知价值与消费意向分析。',
    'about.title': '关于我',
    'about.bio1': "嗨，我是陈秋帆 (Carol)。",
    'about.bio2': "我是一名游走在“理性数据”与“感性设计”边界的探索者。我希望通过我的拆解与重构，不仅能理顺复杂的数据与逻辑框架，更能为他人带来温暖、清晰且触达人心的体验。",
    'about.bio3': "我是一个拥抱变化、在挫折中汲取养分的人。对我来说，无论是学习中的挑战还是生活中的低谷，都是探索新事物的契机。我享受解决复杂难题时的心流，也无比热爱真实的生活——在数据与逻辑之外，我画画、阅读、运动，并在数字世界里搭建属于自己的角落。",
    'about.skills.title': '技能栈',
    'about.skills.data.title': '数据分析与BI',
    'about.skills.design.title': '设计与 UI/UX',
    'about.skills.dev.title': '开发',
    'about.skills.data': 'SQL, Tableau, PowerBI, SPSS, R, Stata, Anylogic, 飞书多维表格',
    'about.skills.design': 'Figma, Photoshop, After Effects, Procreate, Blender',
    'about.skills.dev': 'Python, HTML/CSS, JavaScript, AI-Assisted Workflow',
    'about.me.title': '这就是我',
    'about.me.desc': '生活中的一些碎片',
    'about.art.title': '我的画',
    'about.art.desc': '角色设计、插画、漫画',
    'about.cat.title': '我的猫',
    'about.cat.desc': '2025年12月23出生的黑白小猫咪',
    'about.sports.title': '体育活动',
    'about.sports.desc': '上海国际马拉松特邀运动员组志愿者，探索体育+科技+娱乐领域',
    'about.books.title': '我喜爱的书',
    'about.books.desc': '百年孤独、小王子、我与地坛、反乌托邦三部曲、刀锋、错误的行为、万历十五年、悉达多',
    'about.games.title': '我喜欢的游戏',
    'about.movies.title': '我喜欢的影视作品',
    'resume.title': '简历与链接',
    'resume.view': '在线浏览简历',
    'resume.download': '下载 PDF',
    'resume.github': '访问 GitHub',
    'resume.instagram': '访问 Instagram',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');

  useEffect(() => {
    const storedLang = localStorage.getItem('language') as Language;
    if (storedLang && (storedLang === 'en' || storedLang === 'zh')) {
      setLanguage(storedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'zh' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
