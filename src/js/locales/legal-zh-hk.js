export default {
  'meta.privacy.title': '私隱政策 · 中文變體檢查器 CVL',
  'meta.privacy.desc': '中文變體檢查器的私隱政策：文字只在本機處理，不收集、不傳輸、不出售用戶資料。',
  'meta.terms.title': '服務條款 · 中文變體檢查器 CVL',
  'meta.terms.desc': '中文變體檢查器的服務條款：服務內容、建議僅供參考、使用方式、資料與免責聲明。',
  'footer.privacyPolicy': '私隱政策',
  'footer.terms': '服務條款',
  'legal.privacy.body': `<p>適用於瀏覽器擴充功能 Chinese Variants Linter（以下簡稱「本擴充功能」）。</p>
<p><strong>本擴充功能不會收集、傳輸或出售任何用戶資料。</strong></p>
<ul>
  <li><strong>本機處理</strong>：本擴充功能會讀取網頁編輯區（<code>textarea</code>、文字 <code>input</code>、<code>contenteditable</code>）中的文字，以及你選取的文字，僅用於在你的裝置上檢查中文簡繁字形與地區用語。文字不會離開你的裝置，也不會被儲存。</li>
  <li><strong>本機儲存</strong>：目標地區用語、檢測強度、網站開關、允許詞組、自訂詞組與快捷鍵等設定，會儲存在瀏覽器的擴充功能本機儲存空間（<code>storage.local</code>），不會同步到任何伺服器。解除安裝擴充功能後，這些資料會一併刪除。</li>
  <li><strong>詞典匯入與匯出</strong>：自訂詞典的匯入只會讀取你在系統檔案選擇器中主動選取的本機檔案；匯出與「下載範本」只會在你的裝置上產生檔案並交給瀏覽器下載。這些檔案不會被上傳，也不會被擴充功能另行保存。</li>
  <li><strong>不發出網絡請求</strong>：本擴充功能不含任何統計、遙測、廣告或第三方服務，執行時不會發出網絡請求。簡繁轉換字典（OpenCC）已隨擴充功能一併封裝。</li>
  <li><strong>意見反饋連結</strong>：只有在你主動點擊「反饋」時，才會在新分頁開啟本項目的 GitHub Issues 頁面；該頁面受 GitHub 私隱政策規範。</li>
</ul>
<h3>權限說明</h3>
<table><thead><tr><th>權限</th><th>用途</th></tr></thead><tbody>
  <tr><td><code>storage</code></td><td>在本機儲存你的設定與詞典。</td></tr>
  <tr><td><code>activeTab</code></td><td>開啟擴充功能彈出視窗時讀取目前分頁的網址，以顯示該網站的啟用開關。</td></tr>
  <tr><td>在所有網站執行內容腳本</td><td>用戶可在任何網站開啟檢查（或開啟「所有網站預設開啟檢查」），因此內容腳本必須能在這些頁面上執行。網站檢查預設為關閉，未開啟的網站不會檢查任何文字。</td></tr>
</tbody></table>
<h3>聯絡</h3>
<p>使用上遇到問題嗎？請到 <a href="https://github.com/amlzq/chinese-variants-linter/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> 尋求協助，或發送電郵至 <a href="mailto:support@zeaon.dev">support@zeaon.dev</a>。</p>`,
  'legal.terms.body': `<p>適用於瀏覽器擴充功能 Chinese Variants Linter（以下簡稱「本擴充功能」）。安裝或使用本擴充功能，即表示你同意以下條款；若不同意，請解除安裝本擴充功能。</p>
<h3>1. 服務內容</h3>
<p>本擴充功能會在你輸入或選取文字時，於你的裝置上檢測簡體中文、中文（台灣）、中文（香港）與繁體中文之間的字形與地區用語差異，並提供替換建議。它也提供你自己的自訂詞典，以及匯入、匯出詞典檔案等功能。所有檢測與轉換都在你的裝置上完成。</p>
<h3>2. 建議僅供參考</h3>
<ul>
  <li>檢測結果與替換建議依據內置規則與你的自訂詞典，可能有漏報或誤報，<strong>不保證正確、完整或適用於你的特定用途</strong>。</li>
  <li>在採納建議、使用「全部接受」或「轉換」之前，請自行檢查內容。若為法律文件、合約、正式出版品、醫療或其他重要文字，請交由專業人員審閱。</li>
</ul>
<h3>3. 你的使用方式</h3>
<ul>
  <li>你可以依需求在任何網站開啟或關閉檢測，並自行決定是否採納每一則建議。</li>
  <li>請勿將本擴充功能用於違反適用法律法規的用途，也請勿嘗試破壞或干擾本擴充功能的正常運作。</li>
  <li>你透過匯入功能載入的詞典檔案由你自行負責，請確認你有權使用其中的內容。</li>
</ul>
<h3>4. 你的資料</h3>
<p>本擴充功能不會收集、傳輸或出售你的資料，設定與詞典只會儲存在你瀏覽器的本機儲存空間。詳見<a href="/privacy.html">私隱政策</a>。</p>
<h3>5. 開源與第三方組件</h3>
<p>本擴充功能以 MIT 授權條款開源，原始碼與授權全文請見項目倉庫。簡繁轉換使用 OpenCC 等開源組件，其授權聲明會隨擴充功能套件中的 <code>THIRD_PARTY_LICENSES.txt</code> 一併提供。</p>
<h3>6. 免責聲明與責任限制</h3>
<p>本擴充功能依「現狀」與「可用」狀態提供，不附帶任何明示或默示的保證，包括適銷性、特定用途適用性及不侵權之保證。在適用法律允許的最大範圍內，開發者不對因使用或無法使用本擴充功能所產生的任何直接或間接損失負責，包括因採納建議而造成的文字錯誤或資料丟失。</p>
<h3>7. 變更與終止</h3>
<p>我們可能隨版本更新調整本條款或本擴充功能的功能，更新後的條款會隨新版本一併提供；繼續使用即視為接受。你可以隨時解除安裝本擴充功能以終止使用，解除安裝後儲存在本機的設定與詞典也會一併刪除。</p>
<h3>聯絡</h3>
<p>使用上遇到問題嗎？請到 <a href="https://github.com/amlzq/chinese-variants-linter/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> 尋求協助，或發送電郵至 <a href="mailto:support@zeaon.dev">support@zeaon.dev</a>。</p>`,
}
