const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

(async () => {
  const sitemap = new SitemapStream({ hostname: 'https://stagefrightband.github.io' });

  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/aboutus', changefreq: 'weekly', priority: 0.8 },
    { url: '/contactus', changefreq: 'monthly', priority: 0.7 },
    { url: '/store', changefreq: 'weekly', priority: 0.8 },
    { url: '/tourdates', changefreq: 'weekly', priority: 0.8 },
    { url: '/login', changefreq: 'monthly', priority: 0.5 },
    { url: '/shoppingcart', changefreq: 'monthly', priority: 0.5 },
    { url: '/settings', changefreq: 'monthly', priority: 0.5 }
  ];

  const writeStream = createWriteStream(resolve(__dirname, 'public', 'sitemap.xml'));

  sitemap.pipe(writeStream);

  links.forEach(link => sitemap.write(link));
  sitemap.end();

  try {
    await streamToPromise(sitemap);
    console.log('Sitemap created successfully.');
  } catch (error) {
    console.error('Error creating sitemap:', error);
  }
})();