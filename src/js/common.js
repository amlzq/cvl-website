import { initI18n } from './i18n.js'

const root = document.documentElement
root.classList.add('js')
initI18n()

const themeKey = 'cvl-theme'
const storedTheme = localStorage.getItem(themeKey)
const initialTheme =
  storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
root.dataset.theme = initialTheme

document.querySelector('.theme-toggle')?.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark'
  root.dataset.theme = next
  localStorage.setItem(themeKey, next)
})

const navToggle = document.querySelector('.nav-toggle')
const siteNav = document.getElementById('site-nav')

function closeNav() {
  siteNav?.classList.remove('is-open')
  navToggle?.classList.remove('is-open')
  navToggle?.setAttribute('aria-expanded', 'false')
}

navToggle?.addEventListener('click', () => {
  const open = siteNav.classList.toggle('is-open')
  navToggle.classList.toggle('is-open', open)
  navToggle.setAttribute('aria-expanded', String(open))
})

siteNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav))
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeNav()
})
window.addEventListener('resize', () => {
  if (window.innerWidth > 820) closeNav()
})

document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = String(new Date().getFullYear())
})
