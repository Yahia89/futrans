import { MetadataRoute } from 'next'
 
import { counties } from '@/lib/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://futrans.us'
  
  // Base routes
  const baseRoutes = [
    '',
    '/services',
    '/referral',
    '/career',
    '/sms-terms',
    '/privacy-policy',
    '/company-policy',
    '/about',
    '/how-it-works',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const locationRoutes = counties.map((county) => ({
    url: `${baseUrl}/locations/${county.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...baseRoutes, ...locationRoutes]
}
