import { t, onLocaleChange } from './i18n.js'

const content = document.querySelector('.docs-content')
const tocNav = document.getElementById('docs-toc-nav')
const sidebarLinks = Array.from(document.querySelectorAll('.docs-nav a'))
let headings = []
let tocLinks = []
let sections = []
let ticking = false

function updateActive() {
  const offset = 150

  let activeHeading = headings[0]?.id
  headings.forEach((heading) => {
    if (heading.getBoundingClientRect().top <= offset) activeHeading = heading.id
  })
  tocLinks.forEach((link) => link.classList.toggle('is-active', link.hash === `#${activeHeading}`))

  let activeSection = sections[0]?.id
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= offset) activeSection = section.id
  })
  sidebarLinks.forEach((link) =>
    link.classList.toggle('is-active', link.hash === `#${activeSection}`),
  )

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
  sections = Array.from(content.querySelectorAll('section[id]'))
  headings = Array.from(content.querySelectorAll('h2, h3'))

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
  headings.forEach((heading) => {
    const link = document.createElement('a')
    link.href = `#${heading.id}`
    link.textContent = heading.textContent.trim()
    if (heading.tagName === 'H3') link.classList.add('is-sub')
    tocNav.appendChild(link)
  })
  tocLinks = Array.from(tocNav.querySelectorAll('a'))
  updateActive()
}

buildToc()
window.addEventListener('scroll', requestUpdate, { passive: true })
window.addEventListener('resize', requestUpdate)

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
