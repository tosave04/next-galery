/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["localhost", "images.tosave.ovh"],
		minimumCacheTTL: 6000000,
	},
}

module.exports = nextConfig
