export default {
  'meta.privacy.title': 'Privacy Policy · CVL Chinese Variants Linter',
  'meta.privacy.desc': 'Privacy policy for CVL: text is processed locally, and no user data is collected, transmitted, or sold.',
  'meta.terms.title': 'Terms of Service · CVL Chinese Variants Linter',
  'meta.terms.desc': 'Terms of service for CVL: scope, reference-only suggestions, acceptable use, data, and disclaimers.',
  'footer.privacyPolicy': 'Privacy Policy',
  'footer.terms': 'Terms of Service',
  'legal.privacy.body': `<p><strong>This extension does not collect, transmit, or sell any user data.</strong></p>
<ul>
  <li><strong>Local processing</strong>: The extension reads text in editable fields (<code>textarea</code>, text <code>input</code>, <code>contenteditable</code>) and text you select, solely to check Chinese script and regional wording on your device. The text never leaves your device and is not stored.</li>
  <li><strong>Local storage</strong>: Settings such as target variant, detection level, per-site toggles, allowed phrases, custom phrases, and shortcuts are kept in the browser's extension local storage (<code>storage.local</code>) and are never synced to any server. Uninstalling the extension removes them.</li>
  <li><strong>Dictionary import and export</strong>: importing only reads a local file you explicitly pick in the system file chooser; exporting and “Download template” only generate a file on your device and hand it to the browser to download. These files are never uploaded or kept by the extension.</li>
  <li><strong>No network requests</strong>: The extension contains no analytics, telemetry, ads, or third-party services, and makes no network requests at runtime. The conversion dictionary (OpenCC) ships with the extension.</li>
  <li><strong>Feedback link</strong>: Only when you click "Feedback" does the extension open this project's GitHub Issues page in a new tab; that page is subject to GitHub's privacy policy.</li>
</ul>
<h3>Permissions</h3>
<table><thead><tr><th>Permission</th><th>Purpose</th></tr></thead><tbody>
  <tr><td><code>storage</code></td><td>Save your settings and dictionaries locally.</td></tr>
  <tr><td><code>activeTab</code></td><td>Read the current tab's address when you open the popup, to show that site's toggle.</td></tr>
  <tr><td>Content script on all sites</td><td>You can turn checking on for any site (or enable it for all sites by default), so the content script must be able to run on those pages. Checking is off by default; no text is checked on sites you have not enabled.</td></tr>
</tbody></table>
<h3>Contact</h3>
<p>Having trouble using? Get help on <a href="https://github.com/amlzq/chinese-variants-linter/issues" target="_blank" rel="noopener noreferrer">GitHub issues</a>, or email <a href="mailto:support@zeaon.dev">support@zeaon.dev</a>.</p>`,
  'legal.terms.body': `<p>These terms apply to the browser extension Chinese Variants Linter (“the extension”). By installing or using the extension you agree to them; if you do not agree, please uninstall it.</p>
<h3>1. What the extension does</h3>
<p>While you type or select text, the extension checks, on your device, for differences in script and regional wording between Simplified Chinese, Chinese (Taiwan), Chinese (Hong Kong), and Traditional Chinese, and suggests replacements. It also provides your own custom dictionary, including importing and exporting dictionary files. All checking and conversion happens on your device.</p>
<h3>2. Suggestions are for reference only</h3>
<ul>
  <li>Results and suggestions come from built-in rules and your custom dictionary. They can miss issues or flag correct text, and <strong>are not guaranteed to be accurate, complete, or suitable for your purpose</strong>.</li>
  <li>Please review the text yourself before accepting suggestions, using “Accept all”, or converting a selection. For legal documents, contracts, formal publications, medical, or other important text, have a qualified person review it.</li>
</ul>
<h3>3. How you may use it</h3>
<ul>
  <li>You decide where checking is on and whether to accept each suggestion.</li>
  <li>Do not use the extension for anything unlawful, and do not try to disrupt or interfere with how it works.</li>
  <li>You are responsible for dictionary files you import; make sure you have the right to use their contents.</li>
</ul>
<h3>4. Your data</h3>
<p>The extension does not collect, transmit, or sell your data. Settings and dictionaries stay in your browser's local storage. See the <a href="/privacy.html">Privacy Policy</a> for details.</p>
<h3>5. Open source and third-party components</h3>
<p>The extension is open source under the MIT License; the source code and full license are in the project repository. Script conversion uses open-source components such as OpenCC, whose license notices ship with the extension in <code>THIRD_PARTY_LICENSES.txt</code>.</p>
<h3>6. Disclaimer and limitation of liability</h3>
<p>The extension is provided “as is” and “as available”, without warranty of any kind, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. To the maximum extent permitted by law, the developer is not liable for any direct or indirect loss arising from use of, or inability to use, the extension, including text errors or data loss caused by accepting suggestions.</p>
<h3>7. Changes and termination</h3>
<p>We may update these terms or the extension's features in new versions; updated terms ship with the new version, and continued use means you accept them. You can stop at any time by uninstalling the extension, which also removes the settings and dictionaries stored locally.</p>
<h3>Contact</h3>
<p>Having trouble using? Get help on <a href="https://github.com/amlzq/chinese-variants-linter/issues" target="_blank" rel="noopener noreferrer">GitHub issues</a>, or email <a href="mailto:support@zeaon.dev">support@zeaon.dev</a>.</p>`,
}
