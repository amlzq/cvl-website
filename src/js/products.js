const VALID = ['browser', 'office', 'macos']
const PARAM = 'product'
const listeners = new Set()
let current = 'browser'

export function getProduct() {
  return current
}

export function onProductChange(callback) {
  listeners.add(callback)
  return () => listeners.delete(callback)
}

function applyProduct() {
  document.querySelectorAll('[data-products]').forEach((section) => {
    const products = section.dataset.products.split(/\s+/)
    section.hidden = !(products.includes('all') || products.includes(current))
  })

  document.querySelectorAll('[data-product]').forEach((link) => {
    const active = link.dataset.product === current
    link.classList.toggle('is-active', active)
    link.setAttribute('aria-current', active ? 'true' : 'false')
  })
}

function closeMenu() {
  const wrapper = document.getElementById('product-menu')
  const toggle = document.getElementById('product-toggle')
  wrapper?.classList.remove('is-open')
  toggle?.setAttribute('aria-expanded', 'false')
}

export function setProduct(product, { updateUrl = true } = {}) {
  if (!VALID.includes(product)) return
  current = product

  if (updateUrl) {
    const url = new URL(window.location.href)
    url.searchParams.set(PARAM, product)
    url.hash = ''
    history.replaceState(null, '', url)
  }

  applyProduct()
  closeMenu()
  listeners.forEach((callback) => callback(product))
  document.dispatchEvent(new CustomEvent('productchange', { detail: { product } }))
}

function initMenu() {
  const wrapper = document.getElementById('product-menu')
  const toggle = document.getElementById('product-toggle')
  if (!wrapper || !toggle) return

  toggle.addEventListener('click', (event) => {
    event.stopPropagation()
    const open = wrapper.classList.toggle('is-open')
    toggle.setAttribute('aria-expanded', String(open))
  })

  wrapper.querySelectorAll('[data-product]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (document.body.dataset.page === 'docs') {
        event.preventDefault()
        setProduct(link.dataset.product)
      }
    })
  })

  document.addEventListener('click', (event) => {
    if (!event.target.closest('#product-menu')) closeMenu()
  })
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu()
  })
}

export function initProducts() {
  const fromUrl = new URLSearchParams(window.location.search).get(PARAM)
  current = VALID.includes(fromUrl) ? fromUrl : 'browser'
  initMenu()
  applyProduct()
}
