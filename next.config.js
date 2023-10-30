/** @type {import('next').NextConfig} */
const domain = process.env.NEXT_PUBLIC_DOMAIN
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async rewrites() {
		return [
			{
				source: "/:path*",
				destination: `${domain}/:path*`,
			},
		];
	},
}

module.exports = nextConfig
