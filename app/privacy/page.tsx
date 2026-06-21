'use client'

export default function Privacy() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <div className="section-container py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
          隱私政策
        </h1>

        <div className="prose prose-lg max-w-3xl text-gray-600">
          <p className="mb-4 italic">最後更新：2026 年 6 月</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. 簡介</h2>
            <p className="mb-4">
              NoMoneyDaddy 奶爸實驗室（「我們」、「本站」或「該服務」）致力於保護您的隱私。本隱私政策解釋了我們如何收集、使用、披露和保護您的信息。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. 我們收集的信息</h2>
            <p className="mb-4">我們可能以以下方式收集關於您的信息：</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>當您訪問本站時自動收集的信息（IP 地址、瀏覽器類型、訪問時間等）</li>
              <li>當您主動提供的信息（例如：聯繫表單、電子郵件訂閱）</li>
              <li>通過 Google Analytics 和類似分析工具收集的信息</li>
              <li>通過 Google AdSense 相關的 cookies 和跟蹤信息</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. 信息的使用</h2>
            <p className="mb-4">我們使用收集的信息用於：</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>提供和改進我們的服務</li>
              <li>與您溝通並回應您的查詢</li>
              <li>分析網站的使用情況和趨勢</li>
              <li>投放相關的廣告（通過 Google AdSense）</li>
              <li>遵守法律義務</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Cookies 和跟蹤技術</h2>
            <p className="mb-4">
              本站使用 cookies 和相似技術來增強用戶體驗。這包括：
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>會話 cookies（用於功能性目的）</li>
              <li>分析 cookies（Google Analytics）</li>
              <li>廣告 cookies（Google AdSense）</li>
            </ul>
            <p className="mb-4">
              您可以通過瀏覽器設置控制 cookies。禁用 cookies 可能會影響某些功能。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. 第三方服務</h2>
            <p className="mb-4">本站使用以下第三方服務：</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Google Analytics：</strong> 分析網站流量</li>
              <li><strong>Google AdSense：</strong> 顯示相關廣告</li>
              <li><strong>Vercel / 託管服務：</strong> 提供網站託管</li>
            </ul>
            <p className="mb-4">
              這些服務可能會收集和使用您的信息。請查閱他們的隱私政策以了解更多信息。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. 數據安全</h2>
            <p className="mb-4">
              我們使用行業標準安全措施來保護您的信息，包括 HTTPS 加密。然而，沒有任何網站是 100% 安全的。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. 您的權利</h2>
            <p className="mb-4">根據適用法律，您可能有以下權利：</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>訪問我們持有的關於您的信息</li>
              <li>請求更正不准確的信息</li>
              <li>請求刪除您的信息</li>
              <li>反對數據處理</li>
              <li>數據可攜性</li>
            </ul>
            <p className="mb-4">
              若要行使這些權利，請通過 <a href="mailto:leo810512@gmail.com" className="text-blue-600 hover:underline">leo810512@gmail.com</a> 聯繫我們。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. 兒童隱私</h2>
            <p className="mb-4">
              本站不針對 13 歲以下的兒童。我們不會故意收集 13 歲以下兒童的個人信息。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. 政策變更</h2>
            <p className="mb-4">
              我們可能不時更新本隱私政策。任何變更將在本頁面發布，並更新「最後更新」日期。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">10. 聯繫我們</h2>
            <p className="mb-4">
              如果您對本隱私政策有任何問題，請通過以下方式聯繫我們：
            </p>
            <p className="mb-4">
              📧 <a href="mailto:leo810512@gmail.com" className="text-blue-600 hover:underline">leo810512@gmail.com</a>
            </p>
          </section>
        </div>

        <div className="mt-16">
          <a href="/" className="btn-primary">
            返回首頁
          </a>
        </div>
      </div>
    </main>
  )
}
