import { SitemapStream, EnumChangefreq } from 'sitemap';
import type { SitemapItemLoose } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL: string = 'https://stagefrightband.github.io';

const links: SitemapItemLoose[] = [
  { url: '/', changefreq: EnumChangefreq.DAILY, priority: 1 },
  { url: '/aboutus', changefreq: EnumChangefreq.WEEKLY, priority: 0.8 },
  { url: '/contactus', changefreq: EnumChangefreq.MONTHLY, priority: 0.7 },
  { url: '/store', changefreq: EnumChangefreq.WEEKLY, priority: 0.8 },
  { url: '/tourdates', changefreq: EnumChangefreq.WEEKLY, priority: 0.8 },
  { url: '/login', changefreq: EnumChangefreq.MONTHLY, priority: 0.5 },
  { url: '/shoppingcart', changefreq: EnumChangefreq.MONTHLY, priority: 0.5 },
  { url: '/settings', changefreq: EnumChangefreq.MONTHLY, priority: 0.5 },
];

async function generateSitemap(): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      const sitemapStream = new SitemapStream({ hostname: BASE_URL });
      const outputPath = path.resolve(__dirname, 'public', 'sitemap.xml');
      const writeStream = createWriteStream(outputPath);

      writeStream.on('error', (err) => reject(err));
      sitemapStream.on('error', (err) => reject(err));
      
      writeStream.on('finish', () => {
        console.log('Sitemap successfully created at:', outputPath);
        resolve();
      });

      sitemapStream.pipe(writeStream);

      links.forEach((link) => sitemapStream.write(link));
      sitemapStream.end();
    } catch (error) {
      reject(error);
    }
  });
}

generateSitemap().catch((error) => {
  console.error('Error generating sitemap:', error);
});
