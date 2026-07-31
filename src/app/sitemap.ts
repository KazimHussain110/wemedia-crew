import type { MetadataRoute } from 'next';
import { blogPosts } from '../lib/blogData';
import { projects } from '../lib/workData';
import { services } from '../lib/servicesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wemediacrew.com';

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/work`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/faq`, lastModified: new Date() },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const workPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/work/${project.medium}/${project.slug}`,
    lastModified: project.year ? new Date(`${project.year}-01-01`) : new Date(),
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...blogPages,
    ...workPages,
  ];
}
