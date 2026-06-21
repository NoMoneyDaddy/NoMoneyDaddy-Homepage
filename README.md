# NoMoneyDaddy 奶爸實驗室

為忙碌的現代人打造的實用應用平台。展示三個專注於解決實際問題的項目。

## 🎯 項目

- **iWantPo** - Shopee 分潤人員的自動化行銷工具
- **FamilyPlay** - 現代父母的親子互動方案  
- **BingoKing** - 台灣彩券的輔助決策系統

## 🚀 特色

- **現代設計** - 簡潔的視覺設計，著重使用體驗
- **回應式佈局** - 支援各種螢幕尺寸
- **快速載入** - 使用 Next.js 優化性能
- **安全第一** - 完整的安全 headers 和 CSP 配置
- **無障礙設計** - WCAG 合規的語意 HTML
- **SEO 友善** - 正確的 meta 標籤和結構化內容

## 📦 技術棧

- **框架**: [Next.js 13.5.6](https://nextjs.org/)
- **樣式**: [Tailwind CSS](https://tailwindcss.com/)
- **語言**: [TypeScript](https://www.typescriptlang.org/)
- **元件庫**: React 18

## 🛠️ 安裝與開發

### 必要條件
- Node.js 18+
- npm 或 yarn

### 安裝步驟

1. 克隆倉庫：
```bash
git clone https://github.com/NoMoneyDaddy/NoMoneyDaddy-Homepage.git
cd NoMoneyDaddy-Homepage
```

2. 安裝依賴：
```bash
npm install
```

3. 執行開發伺服器：
```bash
npm run dev
```

4. 在瀏覽器開啟 [http://localhost:3000](http://localhost:3000)

## ⚙️ 環境變數設定

複製 `.env.example` 並根據需要更新：

```bash
cp .env.example .env.local
```

可配置的變數：
- `NEXT_PUBLIC_PROJECT_1_URL` - iWantPo 網址
- `NEXT_PUBLIC_PROJECT_2_URL` - FamilyPlay 網址
- `NEXT_PUBLIC_PROJECT_3_URL` - BingoKing 網址
- `NEXT_PUBLIC_GOOGLE_AD_CLIENT` - Google AdSense Publisher ID
- `NEXT_PUBLIC_GOOGLE_AD_SLOT` - Google AdSense Ad Slot ID
- `NEXT_PUBLIC_EMAIL` - 聯繫信箱

## 📝 配置修改

### 編輯項目資訊

編輯 `config/projects.ts` 來添加或修改項目：

```typescript
export const projects = [
  {
    id: 1,
    title: '項目名稱',
    description: '簡短描述',
    longDescription: '詳細描述',
    url: process.env.NEXT_PUBLIC_PROJECT_1_URL || '#',
    features: ['特色1', '特色2'],
    icon: '🎯',
    color: 'from-blue-500 to-purple-600',
  },
  // ...
]
```

### 編輯社交連結

編輯 `config/projects.ts` 的 `socialLinks` 物件。

## 📊 構建與部署

### 本地構建測試

```bash
npm run build
npm start
```

### 部署到 Vercel

1. 推送程式碼到 GitHub
2. 在 [Vercel](https://vercel.com) 導入專案
3. 設定環境變數
4. 點擊部署

### 部署到其他平台

使用標準的 Next.js 構建輸出：

```bash
npm run build
```

## 🔒 安全性

本項目包含以下安全配置：
- Content Security Policy (CSP) headers
- X-Frame-Options 防止 clickjacking
- 安全的外部連結處理
- 環境變數中的敏感信息保護

## 📄 授權

此專案採用 MIT 授權。詳見 LICENSE 文件。

## 📞 聯繫方式

- Email: leo810512@gmail.com
- GitHub: https://github.com/NoMoneyDaddy
