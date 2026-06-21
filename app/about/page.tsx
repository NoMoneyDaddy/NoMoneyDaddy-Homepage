'use client'

export default function About() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <div className="section-container py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
          關於 <span className="text-blue-600">奶爸實驗室</span>
        </h1>

        <div className="prose prose-lg max-w-3xl">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">我們是誰</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              NoMoneyDaddy 奶爸實驗室是一個致力於解決現代人實際問題的小型開發團隊。我們專注於為忙碌的父母和 Shopee 分潤人員創建實用、高效的工具。
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              "奶爸"代表現代父親的角色——既要照顧家庭，又要創造收入。"實驗室"則表達我們對創新和不斷改進的承諾。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">我們的使命</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              透過技術和設計，幫助忙碌的現代人：
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Shopee 分潤人員：自動化社群行銷，提高銷售效益</li>
              <li>現代父母：在繁忙生活中找到與孩子互動的簡單方式</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">我們的價值觀</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>簡潔易用：</strong>避免複雜，專注核心功能</li>
              <li><strong>誠實透明：</strong>實話實說，不做過度承諾</li>
              <li><strong>持續改進：</strong>根據用戶反饋，不斷優化</li>
              <li><strong>用戶優先：</strong>每個決定都以用戶價值為中心</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">聯繫我們</h2>
            <p className="text-gray-600 mb-4">
              有任何問題或建議？我們很樂意聽取您的意見。
            </p>
            <p className="text-gray-600">
              📧 <a href="mailto:leo810512@gmail.com" className="text-blue-600 hover:underline">leo810512@gmail.com</a>
            </p>
          </section>
        </div>

        <div className="mt-16">
          <a href="/#projects" className="btn-primary">
            查看我們的作品
          </a>
        </div>
      </div>
    </main>
  )
}
