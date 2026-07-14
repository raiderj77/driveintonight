import type { MetadataRoute } from 'next';
import { theaterGuides } from '@/content/theater-guides';

const INDEXABLE_PATHS = [
  '',
  '/about',
  '/contact',
  ...Object.keys(theaterGuides).map((path) => `/${path}`),
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXABLE_PATHS.map((path, index) => ({
    url: `https://driveintonight.com${path}`,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: index === 0 ? 1 : 0.7,
  }));
}
