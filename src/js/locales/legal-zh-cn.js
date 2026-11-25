export default {
  'meta.privacy.title': '隐私权政策 · 中文变体检查器 CVL',
  'meta.privacy.desc': '中文变体检查器的隐私权政策：文本只在本机处理，不收集、不传输、不出售用户数据。',
  'meta.terms.title': '服务条款 · 中文变体检查器 CVL',
  'meta.terms.desc': '中文变体检查器的服务条款：服务内容、建议仅供参考、使用方式、数据与免责声明。',
  'footer.privacyPolicy': '隐私权政策',
  'footer.terms': '服务条款',
  'legal.privacy.body': `<p><strong>本扩展不收集、不传输、不出售任何用户数据。</strong></p>
<ul>
  <li><strong>本地处理</strong>：本扩展读取网页编辑区（<code>textarea</code>、文本 <code>input</code>、<code>contenteditable</code>）中的文本以及你选中的文本，仅用于在本机检查中文简繁字形与地区用词。文本不会离开你的设备，也不会被保存。</li>
  <li><strong>本地存储</strong>：目标地区用语、检测强度、站点开关、允许词组、自定义词组和快捷键等设置保存在浏览器的扩展本地存储（<code>storage.local</code>）中，不会同步到任何服务器。卸载扩展即会删除这些数据。</li>
  <li><strong>词典导入与导出</strong>：自定义词典的导入只读取你在系统文件选择器里主动选中的本地文件，导出与「下载模板」只在本机生成文件并交给浏览器下载。这些文件不会被上传，也不会被扩展另行保存。</li>
  <li><strong>无网络请求</strong>：本扩展不包含统计、遥测、广告或任何第三方服务，运行时不发起网络请求。简繁转换字典（OpenCC）随扩展一起打包。</li>
  <li><strong>反馈链接</strong>：只有当你主动点击「反馈」时，才会在新标签页打开本项目的 GitHub Issues 页面；该页面受 GitHub 隐私权政策约束。</li>
</ul>
<h3>权限说明</h3>
<table><thead><tr><th>权限</th><th>用途</th></tr></thead><tbody>
  <tr><td><code>storage</code></td><td>在本地保存你的设置与词库。</td></tr>
  <tr><td><code>activeTab</code></td><td>打开扩展弹窗时读取当前标签页的地址，以显示该站点的启停开关。</td></tr>
  <tr><td>在所有网站运行内容脚本</td><td>用户可在任意网站开启检查（或开启「全站点默认开启检查」），因此内容脚本需要能在这些页面上运行。站点检查默认关闭，未开启的站点不会检查任何文本。</td></tr>
</tbody></table>
<h3>联系</h3>
<p>使用遇到问题？请在 <a href="https://github.com/amlzq/chinese-variants-linter/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> 上寻求帮助，或发送邮件至 <a href="mailto:support@zeaon.dev">support@zeaon.dev</a>。</p>`,
  'legal.terms.body': `<p>适用于浏览器扩展 Chinese Variants Linter（以下简称「本扩展」）。安装或使用本扩展，即表示你同意以下条款；如不同意，请卸载本扩展。</p>
<h3>1. 服务内容</h3>
<p>本扩展在你输入或选中文字时，于本机检查简体中文、中文（台湾）、中文（香港）与繁体中文之间的字形与地区用词差异，并给出替换建议。它还提供你自己的自定义词典，以及导入、导出词典文件等功能。所有检查与转换都在你的设备上完成。</p>
<h3>2. 建议仅供参考</h3>
<ul>
  <li>检查结果与替换建议基于内置规则和你的自定义词典，可能出现漏报或误报，<strong>不保证准确、完整或适合你的具体用途</strong>。</li>
  <li>请在采纳建议、使用「全部接受」或「转换」之前自行核对内容。对于法律文件、合同、正式出版物、医疗或其他重要文本，请由专业人员审阅。</li>
</ul>
<h3>3. 你的使用方式</h3>
<ul>
  <li>你可以按需在任意网站开启或关闭检查，并自行决定是否采纳每一条建议。</li>
  <li>请勿将本扩展用于违反适用法律法规的用途，也请勿尝试破坏、反向干扰本扩展的正常运行。</li>
  <li>你通过导入功能载入的词典文件由你自行负责，请确认你有权使用其中的内容。</li>
</ul>
<h3>4. 你的数据</h3>
<p>本扩展不收集、不传输、不出售你的数据，设置与词典只保存在你浏览器的本地存储中。详见<a href="/privacy.html">隐私权政策</a>。</p>
<h3>5. 开源与第三方组件</h3>
<p>本扩展以 MIT 许可证开源，源代码与许可全文见项目仓库。简繁转换使用 OpenCC 等开源组件，其许可声明随扩展包中的 <code>THIRD_PARTY_LICENSES.txt</code> 一并提供。</p>
<h3>6. 免责声明与责任限制</h3>
<p>本扩展按「现状」和「可用」状态提供，不附带任何明示或默示的保证，包括适销性、特定用途适用性和不侵权的保证。在适用法律允许的最大范围内，开发者不对因使用或无法使用本扩展而产生的任何直接或间接损失承担责任，包括因采纳建议导致的文字错误或数据丢失。</p>
<h3>7. 变更与终止</h3>
<p>我们可能随版本更新调整本条款或本扩展的功能，更新后的条款会随新版本一并提供；继续使用即视为接受。你可以随时卸载本扩展以终止使用，卸载后本地保存的设置与词典会一并删除。</p>
<h3>联系</h3>
<p>使用遇到问题？请在 <a href="https://github.com/amlzq/chinese-variants-linter/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> 上寻求帮助，或发送邮件至 <a href="mailto:support@zeaon.dev">support@zeaon.dev</a>。</p>`,
}
