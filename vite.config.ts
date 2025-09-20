import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://shadcn-tanstack-form.felipestanzani.com',
      dynamicRoutes: [
        '/#features',
        '/#installation',
        '/#usage',
        '/#architecture'
      ],
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      readable: true,
      exclude: ['/404'],
      generateRobotsTxt: true,
      robots: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/404']
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000
  }
})
