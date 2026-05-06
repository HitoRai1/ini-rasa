import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/akun',
          '/cart',
          '/login',
          '/register',
          '/forgot-password',
          '/update-password',
          '/wishlist',
          '/api/',
        ],
      },
    ],
    sitemap: 'https://inirasa.biz.id/sitemap.xml',
  }
}