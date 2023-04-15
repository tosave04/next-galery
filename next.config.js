/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["localhost", "images.tosave.ovh", "galerie.aifusion.fr"],
		minimumCacheTTL: 3600 * 24 * 365 * 10,
	},
}

module.exports = nextConfig
