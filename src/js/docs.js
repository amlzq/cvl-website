import { t, onLocaleChange } from './i18n.js'
import { onProductChange } from './products.js'

const content = document.querySelector('.docs-content')
const tocNav = document.getElementById('docs-toc-nav')
let headings = []
let ticking = false

function isVisible(element) {
  let node = element
  while (node && node !== content) {
    if (node.hidden) return false
    node = node.parentElement
  }
  return Boolean(node)
}

function visibleHeadings() {
  return headings.filter(isVisible)
}

function updateActive() {
  const list = visibleHeadings()
  if (!list.length || !tocNav) {
    ticking = false
    return
  }

  const offset = 150
  let activeId = list[0].id
  list.forEach((heading) => {
    if (heading.getBoundingClientRect().top <= offset) activeId = heading.id
  })

  tocNav.querySelectorAll('a').forEach((link) => {
    link.classList.toggle('is-active', link.hash === `#${activeId}`)
  })
  tocNav.querySelectorAll('.toc-group').forEach((group) => {
    const active = Array.from(group.querySelectorAll('a')).some(
      (link) => link.hash === `#${activeId}`,
    )
    if (active) group.classList.add('is-expanded')
  })

  ticking = false
}

function requestUpdate() {
  if (!ticking) {
    ticking = true
    requestAnimationFrame(updateActive)
  }
}

function buildToc() {
  if (!content || !tocNav) return

  headings = Array.from(content.querySelectorAll('h2, h3')).filter(isVisible)

  headings.forEach((heading, index) => {
    if (heading.dataset.tocId) return
    const base =
      heading.id ||
      heading.textContent.trim().replace(/\s+/g, '-').replace(/[^\w\u4e00-\u9fa5-]/g, '') ||
      `section-${index}`
    let id = base
    let suffix = 2
    while (document.getElementById(id)) id = `${base}-${suffix++}`
    heading.id = id
    heading.dataset.tocId = id
  })

  tocNav.innerHTML = ''
  let currentGroup = null

  headings.forEach((heading) => {
    if (heading.tagName === 'H2') {
      const group = document.createElement('div')
      group.className = 'toc-group'

      const head = document.createElement('div')
      head.className = 'toc-head'

      const link = document.createElement('a')
      link.href = `#${heading.id}`
      link.textContent = heading.textContent.trim()
      link.className = 'toc-parent'
      link.addEventListener('click', () => group.classList.add('is-expanded'))

      const expand = document.createElement('button')
      expand.type = 'button'
      expand.className = 'toc-expand'
      expand.textContent = '▾'
      expand.setAttribute('aria-label', heading.textContent.trim())
      expand.addEventListener('click', (event) => {
        event.stopPropagation()
        group.classList.toggle('is-expanded')
      })

      head.append(link, expand)
      group.appendChild(head)

      const subs = document.createElement('div')
      subs.className = 'toc-subs'
      group.appendChild(subs)

      currentGroup = group
      tocNav.appendChild(group)
    } else if (currentGroup) {
      const sub = document.createElement('a')
      sub.href = `#${heading.id}`
      sub.textContent = heading.textContent.trim()
      sub.className = 'is-sub'
      currentGroup.querySelector('.toc-subs').appendChild(sub)
      currentGroup.classList.add('has-subs')
    }
  })

  updateActive()
}

buildToc()
window.addEventListener('scroll', requestUpdate, { passive: true })
window.addEventListener('resize', requestUpdate)

onProductChange(() => {
  requestAnimationFrame(() => {
    buildToc()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
})

const copyButtons = []
document.querySelectorAll('.code-block').forEach((block) => {
  const pre = block.querySelector('pre')
  if (!pre) return

  const button = document.createElement('button')
  button.type = 'button'
  button.className = 'copy-btn'
  button.textContent = t('docs.copy')
  const state = { value: 'idle' }

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(pre.textContent.trim())
      state.value = 'copied'
    } catch {
      state.value = 'fail'
    }
    button.textContent = t(state.value === 'copied' ? 'docs.copied' : 'docs.copyFail')
    setTimeout(() => {
      state.value = 'idle'
      button.textContent = t('docs.copy')
    }, 1600)
  })

  block.appendChild(button)
  copyButtons.push({ button, state })
})

onLocaleChange(() => {
  buildToc()
  copyButtons.forEach(({ button, state }) => {
    if (state.value === 'idle') button.textContent = t('docs.copy')
  })
})
