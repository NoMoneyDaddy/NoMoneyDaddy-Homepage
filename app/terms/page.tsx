'use client'

export default function Terms() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <div className="section-container py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
          服務條款
        </h1>

        <div className="prose prose-lg max-w-3xl text-gray-600">
          <p className="mb-4 italic">最後更新：2026 年 6 月</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. 接受條款</h2>
            <p className="mb-4">
              通過訪問和使用本網站及其服務，您同意受本服務條款的約束。如果您不同意這些條款的任何部分，請不要使用本站。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. 服務描述</h2>
            <p className="mb-4">
              NoMoneyDaddy 奶爸實驗室 提供以下服務：
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>iWantPo：</strong> Threads 社群自動發文平台</li>
              <li><strong>FamilyPlay：</strong> 親子互動遊戲平台</li>
              <li>相關的教育和信息內容</li>
            </ul>
            <p className="mb-4">
              這些服務按「現狀」提供，我們可能隨時修改或終止。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. 用戶責任</h2>
            <p className="mb-4">作為用戶，您同意：</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>合法和負責任地使用本站和服務</li>
              <li>不使用本站進行任何非法或不當目的</li>
              <li>不騷擾、威脅或傷害他人</li>
              <li>不上傳或分享惡意軟體或有害內容</li>
              <li>不試圖未經授權訪問本站的系統</li>
              <li>不侵犯他人的知識產權</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. 知識產權</h2>
            <p className="mb-4">
              本站上的所有內容（包括文本、圖形、標誌、圖像、音頻和視頻）都受版權保護。您可以出於個人和非商業目的查看和打印，但不能修改、複製或分發。
            </p>
            <p className="mb-4">
              iWantPo 和 FamilyPlay 的名稱和標誌是 NoMoneyDaddy 的商標。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. 第三方鏈接</h2>
            <p className="mb-4">
              本站可能包含指向第三方網站的鏈接。我們不對這些外部網站的內容、準確性或做法負責。您訪問這些網站應自行承擔風險。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. 免責聲明</h2>
            <p className="mb-4">
              本站和服務按「現狀」和「現有」提供，不提供任何類型的保證。在法律允許的範圍內，我們對以下事項不承擔責任：
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>直接、間接、附帶或後果性損害</li>
              <li>利潤損失或數據丟失</li>
              <li>服務中斷或延遲</li>
              <li>第三方行為</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. 責任限制</h2>
            <p className="mb-4">
              在法律允許的範圍內，我們對因使用或無法使用本站或服務而造成的任何損害的責任，不超過您支付給我們的金額（如果有）。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. 用戶內容</h2>
            <p className="mb-4">
              如果您在本站上提交任何內容（如評論或消息），您授予我們使用、複製、修改和分發該內容的非獨佔許可。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. 終止</h2>
            <p className="mb-4">
              我們可以在任何時間終止或暫停您訪問本站，無需理由或事先通知。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">10. 準據法</h2>
            <p className="mb-4">
              本條款受中華民國（台灣）法律管制，並根據其法律進行解釋。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">11. 變更條款</h2>
            <p className="mb-4">
              我們可能隨時更新這些條款。更新後，我們將在本頁面發布新條款，並更新「最後更新」日期。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">12. 聯繫我們</h2>
            <p className="mb-4">
              如果您對這些條款有任何問題，請通過以下方式聯繫我們：
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
