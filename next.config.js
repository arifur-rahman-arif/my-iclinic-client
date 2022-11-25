/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  // Need if it will be a static file export
  // trailingSlash: true,
  // experimental:{appDir: true}
  // assetPrefix: './' // Turn off this option if next static export is needed
}

module.exports = nextConfig
