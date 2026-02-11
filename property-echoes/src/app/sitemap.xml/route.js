import { getAllPosts } from "../../lib/jsonPosts";

export async function GET() {
  const posts = getAllPosts();
  const baseUrl = "https://propertyechoes.com";
  const today = new Date().toISOString();

  const urls = posts.map((post) => {
    const categorySlug = post.node.category[0]?.slug;
    const postUrl = categorySlug
      ? `${baseUrl}/category/${categorySlug}/${post.node.slug}`
      : `${baseUrl}/category/${post.node.category[0]?.slug}/${post.node.slug}`;

    return `
    <url>
      <loc>${postUrl}</loc>
      <lastmod>${post.node.date || post.node.createdAt || today}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`;
  });

  const staticUrls = [
    "about",
    "contact",
    "privacy-policy",
    "terms-of-use",
  ].map(
    (path) => `
      <url>
        <loc>${baseUrl}/${path}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
      </url>`
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...urls].join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
