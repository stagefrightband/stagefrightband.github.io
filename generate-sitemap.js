const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

const BASE_URL = "https://stagefrightband.github.io";

const links = [
    { url: "/", changefreq: "daily", priority: 1 },
    { url: "/aboutus", changefreq: "weekly", priority: 0.8 },
    { url: "/contactus", changefreq: "monthly", priority: 0.7 },
    { url: "/store", changefreq: "weekly", priority: 0.8 },
    { url: "/tourdates", changefreq: "weekly", priority: 0.8 },
    { url: "/login", changefreq: "monthly", priority: 0.5 },
    { url: "/shoppingcart", changefreq: "monthly", priority: 0.5 },
    { url: "/settings", changefreq: "monthly", priority: 0.5 },
];

async function generateSitemap() {
    try {
        const sitemapStream = new SitemapStream({ hostname: BASE_URL });

        const outputPath = path.resolve(__dirname, 'public', 'sitemap.xml');
        const writeStream = createWriteStream(outputPath);

        sitemapStream.pipe(writeStream);

        links.forEach(link => sitemapStream.write(link));

        sitemapStream.end();

        await streamToPromise(sitemapStream);
        console.log('Sitemap created.');
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
}
generateSitemap();