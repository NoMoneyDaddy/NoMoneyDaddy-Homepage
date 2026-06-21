// 項目配置 - 在這裡更新URLs
export const projects = [
  {
    id: 1,
    title: 'iWantPo',
    description: 'Threads 社群自動發文平台',
    longDescription: '為 Shopee 分潤人員打造的自動化社群行銷工具。一鍵生成吸引人的 threads 貼文，智能管理分潤推廣文案，提高轉化率和銷售效益。',
    url: process.env.NEXT_PUBLIC_PROJECT_1_URL || '#',
    github: process.env.NEXT_PUBLIC_PROJECT_1_GITHUB || '#',
    features: ['自動生成貼文', '分潤文案管理', '一鍵發布'],
    icon: '📱',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    title: 'FamilyPlay',
    description: '親子互動遊戲平台',
    longDescription: '忙碌現代父母的救星。30秒快速開始，無需複雜設置。即時親子互動遊戲，讓孩子開心玩樂，父母輕鬆陪伴。',
    url: process.env.NEXT_PUBLIC_PROJECT_2_URL || '#',
    github: process.env.NEXT_PUBLIC_PROJECT_2_GITHUB || '#',
    features: ['30秒快速開始', '即時互動遊戲', '親子陪伴'],
    icon: '👨‍👩‍👧‍👦',
    color: 'from-orange-500 to-pink-500',
  },
]

export const socialLinks = {
  github: process.env.NEXT_PUBLIC_GITHUB_URL || '#',
  email: process.env.NEXT_PUBLIC_EMAIL || 'contact@example.com',
}
