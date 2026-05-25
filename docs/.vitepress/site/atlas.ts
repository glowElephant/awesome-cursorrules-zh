const CATEGORY_NAMES = {
  zh: {
    frontend: '前端开发',
    backend: '后端开发',
    mobile: '移动开发',
    ai: 'AI 与数据',
    devops: 'DevOps',
    cloud: '云服务',
    security: '安全',
    database: '数据库',
    data: '数据工程',
    'data-science': '数据科学',
    edge: '边缘计算',
    'emerging-tech': '新兴技术',
    robotics: '机器人',
    automation: '自动化',
    science: '科学',
    bio: '生物',
    quantum: '量子',
    simulation: '仿真',
    blockchain: '区块链',
    iot: '物联网',
    gaming: '游戏开发',
    'ar-vr': 'AR/VR',
    industrial: '工业',
    cms: 'CMS',
    hardware: '硬件',
    network: '网络',
    storage: '存储',
    compute: '计算',
    systems: '系统',
    platform: '平台',
    tools: '工具',
    general: '通用',
  },
  en: {
    frontend: 'Frontend',
    backend: 'Backend',
    mobile: 'Mobile',
    ai: 'AI & Data',
    devops: 'DevOps',
    cloud: 'Cloud',
    security: 'Security',
    database: 'Database',
    data: 'Data Engineering',
    'data-science': 'Data Science',
    edge: 'Edge',
    'emerging-tech': 'Emerging Tech',
    robotics: 'Robotics',
    automation: 'Automation',
    science: 'Science',
    bio: 'Bio',
    quantum: 'Quantum',
    simulation: 'Simulation',
    blockchain: 'Blockchain',
    iot: 'IoT',
    gaming: 'Gaming',
    'ar-vr': 'AR/VR',
    industrial: 'Industrial',
    cms: 'CMS',
    hardware: 'Hardware',
    network: 'Network',
    storage: 'Storage',
    compute: 'Compute',
    systems: 'Systems',
    platform: 'Platform',
    tools: 'Tools',
    general: 'General',
  },
} as const;

const CATEGORY_GROUPS = {
  zh: [
    { text: '核心开发', categories: ['frontend', 'backend', 'mobile', 'ai'] },
    { text: '工程与平台', categories: ['devops', 'cloud', 'security', 'database', 'data'] },
    {
      text: '智能与科学',
      categories: ['data-science', 'edge', 'emerging-tech', 'robotics', 'automation', 'science', 'bio', 'quantum', 'simulation'],
    },
    {
      text: '行业与基础设施',
      categories: ['blockchain', 'iot', 'gaming', 'ar-vr', 'industrial', 'cms', 'hardware', 'network', 'storage', 'compute', 'systems', 'platform'],
    },
    { text: '通用能力', categories: ['tools', 'general'] },
  ],
  en: [
    { text: 'Core Development', categories: ['frontend', 'backend', 'mobile', 'ai'] },
    { text: 'Engineering & Platform', categories: ['devops', 'cloud', 'security', 'database', 'data'] },
    {
      text: 'Intelligence & Science',
      categories: ['data-science', 'edge', 'emerging-tech', 'robotics', 'automation', 'science', 'bio', 'quantum', 'simulation'],
    },
    {
      text: 'Industry & Infra',
      categories: ['blockchain', 'iot', 'gaming', 'ar-vr', 'industrial', 'cms', 'hardware', 'network', 'storage', 'compute', 'systems', 'platform'],
    },
    { text: 'General Capability', categories: ['tools', 'general'] },
  ],
} as const;

function createRuleSidebarGroups(lang: 'zh' | 'en') {
  return CATEGORY_GROUPS[lang].map((group, index) => ({
    text: group.text,
    collapsed: index !== 0,
    items: group.categories.map((category) => ({
      text: CATEGORY_NAMES[lang][category] || category,
      link: `/${lang}/rules/${category}`,
    })),
  }));
}

export const zhNav = [
  { text: '导读', link: '/zh/introduction/mission', activeMatch: '/zh/introduction/' },
  { text: '系统架构', link: '/zh/architecture/system-overview', activeMatch: '/zh/architecture/' },
  { text: '算法机制', link: '/zh/algorithms/overview', activeMatch: '/zh/algorithms/' },
  { text: '参考文档', link: '/zh/reference/performance', activeMatch: '/zh/reference/' },
  { text: '规则证据', link: '/zh/rules/', activeMatch: '/zh/rules/' },
];

export const enNav = [
  { text: 'Introduction', link: '/en/introduction/mission', activeMatch: '/en/introduction/' },
  { text: 'Architecture', link: '/en/architecture/system-overview', activeMatch: '/en/architecture/' },
  { text: 'Algorithms', link: '/en/algorithms/overview', activeMatch: '/en/algorithms/' },
  { text: 'Reference', link: '/en/reference/performance', activeMatch: '/en/reference/' },
  { text: 'Evidence', link: '/en/rules/', activeMatch: '/en/rules/' },
];

export const zhSidebar = {
  '/zh/introduction/': [
    {
      text: '导读',
      items: [
        { text: '项目使命', link: '/zh/introduction/mission' },
        { text: '读者地图', link: '/zh/introduction/reader-map' },
        { text: '评审路径', link: '/zh/guides/learning-path' },
      ],
    },
  ],
  '/zh/architecture/': [
    {
      text: '系统架构',
      items: [
        { text: '系统总览', link: '/zh/architecture/system-overview' },
        { text: '站点蓝图', link: '/zh/architecture/blueprint' },
        { text: '信息图谱', link: '/zh/architecture/information-graph' },
        { text: '内容系统', link: '/zh/architecture/content-system' },
      ],
    },
  ],
  '/zh/algorithms/': [
    {
      text: '算法机制',
      items: [
        { text: '规则编排总览', link: '/zh/algorithms/overview' },
        { text: '规则组合模式', link: '/zh/rules/composition-patterns' },
        { text: '规则索引', link: '/zh/rules/' },
      ],
    },
  ],
  '/zh/reference/': [
    {
      text: '参考文档',
      items: [
        { text: '性能分析', link: '/zh/reference/performance' },
        { text: '设计决策', link: '/zh/reference/design-decisions' },
        { text: '参考文献', link: '/zh/reference/references' },
        { text: '相关项目', link: '/zh/reference/ecosystem' },
      ],
    },
  ],
  '/zh/guides/': [
    {
      text: '使用指南',
      items: [
        { text: '团队接入', link: '/zh/guides/team-onboarding' },
        { text: '规则模板', link: '/zh/guides/rule-template' },
        { text: '评审路径', link: '/zh/guides/learning-path' },
        { text: '快速开始', link: '/zh/getting-started' },
        { text: '最佳实践', link: '/zh/best-practices' },
        { text: '故障排除', link: '/zh/troubleshooting' },
      ],
    },
  ],
  '/zh/rules/': [
    {
      text: '规则证据',
      items: [
        { text: '规则索引', link: '/zh/rules/' },
        { text: '组合模式', link: '/zh/rules/composition-patterns' },
      ],
    },
    ...createRuleSidebarGroups('zh'),
  ],
  '/zh/': [
    {
      text: '总览',
      items: [
        { text: '首页', link: '/zh/' },
        { text: '项目使命', link: '/zh/introduction/mission' },
        { text: '系统架构', link: '/zh/architecture/system-overview' },
        { text: '算法机制', link: '/zh/algorithms/overview' },
        { text: '参考文档', link: '/zh/reference/performance' },
        { text: '规则证据', link: '/zh/rules/' },
        { text: '团队接入', link: '/zh/guides/team-onboarding' },
      ],
    },
  ],
};

export const enSidebar = {
  '/en/introduction/': [
    {
      text: 'Introduction',
      items: [
        { text: 'Project Mission', link: '/en/introduction/mission' },
        { text: 'Reader Map', link: '/en/introduction/reader-map' },
        { text: 'Review Paths', link: '/en/guides/learning-path' },
      ],
    },
  ],
  '/en/architecture/': [
    {
      text: 'Architecture',
      items: [
        { text: 'System Overview', link: '/en/architecture/system-overview' },
        { text: 'Site Blueprint', link: '/en/architecture/blueprint' },
        { text: 'Information Graph', link: '/en/architecture/information-graph' },
        { text: 'Content System', link: '/en/architecture/content-system' },
      ],
    },
  ],
  '/en/algorithms/': [
    {
      text: 'Algorithms',
      items: [
        { text: 'Rule Orchestration Overview', link: '/en/algorithms/overview' },
        { text: 'Composition Patterns', link: '/en/rules/composition-patterns' },
        { text: 'Rules Index', link: '/en/rules/' },
      ],
    },
  ],
  '/en/reference/': [
    {
      text: 'Reference',
      items: [
        { text: 'Performance', link: '/en/reference/performance' },
        { text: 'Design Decisions', link: '/en/reference/design-decisions' },
        { text: 'References', link: '/en/reference/references' },
        { text: 'Ecosystem', link: '/en/reference/ecosystem' },
      ],
    },
  ],
  '/en/guides/': [
    {
      text: 'Guides',
      items: [
        { text: 'Team Onboarding', link: '/en/guides/team-onboarding' },
        { text: 'Rule Template', link: '/en/guides/rule-template' },
        { text: 'Review Paths', link: '/en/guides/learning-path' },
        { text: 'Getting Started', link: '/en/getting-started' },
        { text: 'Best Practices', link: '/en/best-practices' },
        { text: 'Troubleshooting', link: '/en/troubleshooting' },
      ],
    },
  ],
  '/en/rules/': [
    {
      text: 'Evidence',
      items: [
        { text: 'Rules Index', link: '/en/rules/' },
        { text: 'Composition Patterns', link: '/en/rules/composition-patterns' },
      ],
    },
    ...createRuleSidebarGroups('en'),
  ],
  '/en/': [
    {
      text: 'Overview',
      items: [
        { text: 'Home', link: '/en/' },
        { text: 'Project Mission', link: '/en/introduction/mission' },
        { text: 'System Overview', link: '/en/architecture/system-overview' },
        { text: 'Algorithms', link: '/en/algorithms/overview' },
        { text: 'Reference', link: '/en/reference/performance' },
        { text: 'Evidence', link: '/en/rules/' },
        { text: 'Team Onboarding', link: '/en/guides/team-onboarding' },
      ],
    },
  ],
};
