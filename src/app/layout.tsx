import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

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
    return (
        <html lang="en">
            <body className={poppins.className}>{children}</body>
        </html>
    );
}
