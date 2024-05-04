import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
    turbo: {
        resolveExtensions: [
            ".mdx",
            ".tsx",
            ".ts",
            ".jsx",
            ".js",
            ".mjs",
            ".json",
        ],
    },
    reactStrictMode: true,
    swcMinify: true,
    productionBrowserSourceMaps: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
};

const withPWAConfig = withPWA({
    dest: "public",
    disable: process.env.NODE_ENV === "development",

    register: true,
    skipWaiting: true,
});

export default withPWAConfig(nextConfig);
