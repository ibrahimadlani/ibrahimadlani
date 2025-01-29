/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://ibrahimadlani.fr', // Change this to your website URL
    generateRobotsTxt: true, // Generates robots.txt file
    sitemapSize: 5000,
    exclude: ['/admin', '/dashboard'], // Add pages to exclude from sitemap
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/admin', '/dashboard'],
        },
      ],
    },
  };
  