/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development",
    },
    productionBrowserSourceMaps: false,
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.module.rules.push({
                test: /\.(pdf)$/,
                loader: "file-loader",
                options: {
                    outputPath: "static/pdf",
                    publicPath: "/_next/static/pdf",
                },
            });
        }
        return config;
    },

    images: {
        minimumCacheTTL: 60,
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        formats: ["mp3"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.521dimensions.com.com",
            },
            {
                protocol: "https",
                hostname: "521dimensions.com",
            },
        ],
    },
};

const withPWA = require("next-pwa")({
    dest: "public",
    disable: process.env.NODE_ENV === "development",

    register: true,
    skipWaiting: true,
});

const mergedConfig = withPWA(withBundleAnalyzer(nextConfig));

module.exports = mergedConfig;
