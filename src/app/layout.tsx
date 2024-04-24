import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import robots from "./robot";
import sitemap from "./sitemap";

const poppins = Poppins({
    weight: "400",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "SYN/ACK",
    description: "Quiz yourself however you deem fit",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const metaRobots = robots();
    const metaRobotsString = JSON.stringify(metaRobots);
    const metaSiteMap = sitemap();
    const metaSiteMapString = JSON.stringify(metaSiteMap);
    return (
        <html lang="en">
            <meta name="robots" content={metaRobotsString} />
            <meta name="sitemap" content={metaSiteMapString} />
            <body className={poppins.className}>{children}</body>
        </html>
    );
}
