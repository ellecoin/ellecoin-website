export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ellecoin.co/sitemap.xml",
    host: "https://ellecoin.co",
  };
}
