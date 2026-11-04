/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // The site serves its icons (x.svg, arrowFaq.svg, lineRoadmap*.svg) through
    // next/image, which requires explicitly allowing SVG optimization.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
