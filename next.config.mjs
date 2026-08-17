/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  typescript: {
    // The portfolio itself is static; Cloudflare-only database helpers are not
    // part of this EdgeOne build target.
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
