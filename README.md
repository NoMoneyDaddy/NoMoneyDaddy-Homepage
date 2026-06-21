# NoMoneyDaddy Homepage

A modern, responsive portfolio landing page showcasing innovative projects including **iWantPo** and **FamilyPlay**.

## 🚀 Features

- **Modern Design**: Beautiful gradient backgrounds and smooth animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Project Showcase**: Detailed project cards with live links and GitHub repositories
- **Google AdSense Ready**: Pre-configured for Google Ad verification and monetization
- **Performance Optimized**: Built with Next.js for lightning-fast performance
- **SEO Friendly**: Proper meta tags and structured content
- **Accessibility**: WCAG compliant with semantic HTML

## 📦 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Animations**: CSS animations with Tailwind

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd NoMoneyDaddy-Homepage
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Environment Setup

To enable Google AdSense ads, replace the placeholder values in:

- `app/layout.tsx`: Replace `ca-pub-xxxxxxxxxxxxxxxx` with your Google AdSense publisher ID
- `components/GoogleAds.tsx`: Replace `ca-pub-xxxxxxxxxxxxxxxx` and `xxxxxxxx` with your actual ad unit values

## 🎨 Customization

### Colors
Edit the color values in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#1f2937',
  secondary: '#3b82f6',
}
```

### Projects
Edit the projects array in `components/Projects.tsx` to add or modify project information.

### Navigation
Update navigation items in `components/Header.tsx`.

## 🌐 Projects Showcase

### iWantPo
- **URL**: https://iwantpo.nomoneydadddy.app/
- **GitHub**: https://github.com/NoMoneyDaddy/threadsposhopee
- A Shopee community platform for buyers and sellers

### FamilyPlay
- **URL**: https://familyplay.nomoneydaddy.app/
- **GitHub**: https://github.com/NoMoneyDaddy/familyplay
- A family gaming and entertainment platform

## 📊 SEO & Analytics

The site includes:
- Meta tags for social sharing
- Open Graph configuration
- Google AdSense support
- Analytics-ready structure

## 🚀 Deployment

Build for production:
```bash
npm run build
npm start
```

Deploy to Vercel:
```bash
npm i -g vercel
vercel
```

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

Email: leo810512@gmail.com
GitHub: https://github.com/NoMoneyDaddy
