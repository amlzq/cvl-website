import zhCN from './locales/zh-cn.js'
import zhTW from './locales/zh-tw.js'
import zhHK from './locales/zh-hk.js'
import zhHant from './locales/zh-hant.js'
import en from './locales/en.js'
import legalZhCN from './locales/legal-zh-cn.js'
import legalZhTW from './locales/legal-zh-tw.js'
import legalZhHK from './locales/legal-zh-hk.js'
import legalZhHant from './locales/legal-zh-hant.js'
import legalEn from './locales/legal-en.js'

export const LOCALES = [
  { code: 'zh-cn', label: '简体中文', htmlLang: 'zh-CN' },
  { code: 'zh-hk', label: '中文（香港）', htmlLang: 'zh-HK' },
  { code: 'zh-tw', label: '中文（台灣）', htmlLang: 'zh-TW' },
  { code: 'zh-hant', label: '繁體中文', htmlLang: 'zh-Hant' },
  { code: 'en', label: 'English', htmlLang: 'en' },
]

const dictionaries = {
  'zh-cn': { ...zhCN, ...legalZhCN },
  'zh-tw': { ...zhTW, ...legalZhTW },
  'zh-hk': { ...zhHK, ...legalZhHK },
  'zh-hant': { ...zhHant, ...legalZhHant },
  en: { ...en, ...legalEn },
}
const storageKey = 'cvl-locale'
const listeners = new Set()
let currentLocale = 'zh-cn'

function detectLocale() {
  const nav = (navigator.language || '').toLowerCase()
  if (nav.startsWith('zh-hk') || nav.startsWith('zh-mo')) return 'zh-hk'
  if (nav.startsWith('zh-tw') || nav.startsWith('zh-hant')) return 'zh-tw'
  if (nav.startsWith('zh-cn') || nav.startsWith('zh-hans')) return 'zh-cn'
  if (nav.startsWith('zh')) return 'zh-cn'
  if (nav.startsWith('en')) return 'en'
  return 'zh-cn'
}

export function getLocale() {
  return currentLocale
}

export function t(key) {
  const dict = dictionaries[currentLocale]
  return dict?.[key] ?? dictionaries['zh-cn'][key] ?? key
}

export function onLocaleChange(callback) {
  listeners.add(callback)
  return () => listeners.delete(callback)
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n)
  })
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml)
  })
  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel))
  })
  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    el.setAttribute('title', t(el.dataset.i18nTitle))
  })
  document.querySelectorAll('[data-i18n-tip]').forEach((el) => {
    el.dataset.tip = t(el.dataset.i18nTip)
  })

  const page = document.body.dataset.page
  document.title = t(`meta.${page}.title`)
  const description = document.querySelector('meta[name="description"]')
  if (description) description.setAttribute('content', t(`meta.${page}.desc`))

  const config = LOCALES.find((item) => item.code === currentLocale)
  document.documentElement.lang = config.htmlLang

  document.querySelectorAll('[data-locale-option]').forEach((button) => {
    const active = button.dataset.localeOption === currentLocale
    button.classList.toggle('is-active', active)
    button.setAttribute('aria-current', active ? 'true' : 'false')
  })
  const currentLabel = document.querySelector('[data-locale-current]')
  if (currentLabel) currentLabel.textContent = config.label
}

function buildLanguageMenu() {
  const list = document.getElementById('locale-list')
  if (!list) return

  LOCALES.forEach((item) => {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'locale-option'
    button.dataset.localeOption = item.code
    button.textContent = item.label
    button.addEventListener('click', () => {
      setLocale(item.code)
      closeLanguageMenu()
    })
    list.appendChild(button)
  })

  const toggle = document.getElementById('locale-toggle')
  toggle?.addEventListener('click', (event) => {
    event.stopPropagation()
    const wrapper = document.getElementById('locale-menu')
    const open = wrapper.classList.toggle('is-open')
    toggle.setAttribute('aria-expanded', String(open))
  })

  document.addEventListener('click', (event) => {
    if (!event.target.closest('#locale-menu')) closeLanguageMenu()
  })
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLanguageMenu()
  })
}

function closeLanguageMenu() {
  const wrapper = document.getElementById('locale-menu')
  const toggle = document.getElementById('locale-toggle')
  wrapper?.classList.remove('is-open')
  toggle?.setAttribute('aria-expanded', 'false')
}

export function setLocale(code) {
  if (!dictionaries[code]) return
  currentLocale = code
  try {
    localStorage.setItem(storageKey, code)
  } catch (error) {
    // 存储不可用时仅在当前会话生效
  }
  applyTranslations()
  listeners.forEach((callback) => callback(code))
  document.dispatchEvent(new CustomEvent('localechange', { detail: { locale: code } }))
}

export function initI18n() {
  try {
    currentLocale = localStorage.getItem(storageKey) || detectLocale()
  } catch (error) {
    currentLocale = detectLocale()
  }
  if (!dictionaries[currentLocale]) currentLocale = 'zh-cn'

  buildLanguageMenu()
  applyTranslations()
}
