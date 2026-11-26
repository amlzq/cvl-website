import { t, onLocaleChange, LOCALES } from './i18n.js'

const issuePairs = [
  { from: '软件', to: '軟體', kind: 'demo.kindWord' },
  { from: '云端', to: '雲端', kind: 'demo.kindWord' },
  { from: '里面', to: '裡面', kind: 'demo.kindForm' },
]
const resolved = new Set()

function updateDemoCount() {
  const remaining = issuePairs.length - resolved.size
  const counter = document.getElementById('demo-count')
  if (counter) {
    counter.textContent = remaining
      ? t('demo.count').replace('{n}', String(remaining))
      : t('demo.done')
  }
}

function renderDemo() {
  const sentence = document.getElementById('demo-sentence')
  if (sentence) {
    sentence.innerHTML = t('demo.sentence')
    issuePairs.forEach((pair, index) => {
      if (!resolved.has(index)) return
      const mark = Array.from(sentence.querySelectorAll('.issue')).find(
        (el) => el.textContent.trim() === pair.from,
      )
      if (mark) {
        mark.textContent = pair.to
        mark.classList.remove('issue')
      }
    })
  }

  const target = document.getElementById('demo-target-name')
  const zhTW = LOCALES.find((item) => item.code === 'zh-tw')
  if (target && zhTW) target.textContent = zhTW.label

  const list = document.getElementById('demo-issues')
  if (list) {
    list.innerHTML = issuePairs
      .map((pair, index) => {
        const done = resolved.has(index)
        return `<div class="demo-issue" data-issue-index="${index}"${done ? ' style="opacity:.6"' : ''}>
          <span class="issue-kind">${t(pair.kind)}</span>
          <span class="from">${pair.from}</span><span class="arrow">→</span><span class="to">${pair.to}</span>
          <button class="fix" type="button"${done ? ' disabled' : ''}>${done ? t('demo.fixed') : t('demo.fix')}</button>
        </div>`
      })
      .join('')
  }

  updateDemoCount()
}

document.getElementById('demo-issues')?.addEventListener('click', (event) => {
  const button = event.target.closest('.fix')
  if (!button || button.disabled) return
  const row = button.closest('.demo-issue')
  const index = Number(row?.dataset.issueIndex)
  if (!issuePairs[index]) return
  resolved.add(index)
  renderDemo()
})

renderDemo()
onLocaleChange(renderDemo)

const revealTargets = document.querySelectorAll('.feature-card, .product-card, .step')
revealTargets.forEach((el) => el.classList.add('reveal'))

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 },
  )
  revealTargets.forEach((el) => observer.observe(el))
} else {
  revealTargets.forEach((el) => el.classList.add('is-visible'))
}
