const BASE = "https://ellecoin.co";

export default function sitemap() {
  const now = new Date();
  const routes = [
    { path: "", priority: 1 },
    { path: "/elleai", priority: 0.9 },
    { path: "/token", priority: 0.8 },
    { path: "/community", priority: 0.8 },
  ];
  return routes.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}
