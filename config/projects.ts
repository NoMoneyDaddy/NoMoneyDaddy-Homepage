// 項目配置 - 在這裡更新URLs
export const projects = [
  {
    id: 1,
    title: 'iWantPo',
    description: 'Shopee 社群平台',
    longDescription: '針對 Shopee 用戶的社群工具，讓買家可以分享產品評論和使用心得。',
    url: process.env.NEXT_PUBLIC_PROJECT_1_URL || '#',
    github: process.env.NEXT_PUBLIC_PROJECT_1_GITHUB || '#',
    features: ['產品評論', '使用者心得分享', '社群討論'],
    icon: '🛍️',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    title: 'FamilyPlay',
    description: '家庭互動遊戲平台',
    longDescription: '讓家人可以在線上一起玩遊戲和進行互動挑戰的平台。',
    url: process.env.NEXT_PUBLIC_PROJECT_2_URL || '#',
    github: process.env.NEXT_PUBLIC_PROJECT_2_GITHUB || '#',
    features: ['多人遊戲', '家庭挑戰', '實時互動'],
    icon: '🎮',
    color: 'from-green-500 to-green-600',
  },
  {
    id: 3,
    title: 'BingoKing',
    description: '台灣彩券輔助決策系統',
    longDescription: '專為台灣 BingoBingo 設計的智能輔助決策系統，提供號碼預測分析、歷史數據統計和智能推薦工具。',
    url: process.env.NEXT_PUBLIC_PROJECT_3_URL || '#',
    github: process.env.NEXT_PUBLIC_PROJECT_3_GITHUB || '#',
    features: ['號碼預測分析', '歷史數據統計', '智能推薦', '趨勢分析'],
    icon: '🎰',
    color: 'from-purple-500 to-pink-600',
  },
]

export const socialLinks = {
  github: process.env.NEXT_PUBLIC_GITHUB_URL || '#',
  email: process.env.NEXT_PUBLIC_EMAIL || 'contact@example.com',
}
