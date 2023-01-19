/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["localhost"],
		minimumCacheTTL: 6000000,
	},
}

module.exports = nextConfig
