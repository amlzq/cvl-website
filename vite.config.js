import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

const root = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  // 自定义域名 cvl.zeaon.dev 绑定到 Pages 的根路径，因此不使用子路径 base
  base: '/',
  build: {
    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        docs: resolve(root, 'docs.html'),
      },
    },
  },
})
