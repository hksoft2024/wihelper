import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "plus.unsplash.com",
			},
			{
				hostname: "images.unsplash.com",
			},
		],
	},
};

export default withNextIntl(nextConfig);
