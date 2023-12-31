import Nav from "@/components/Nav";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import BottomNav from "@/components/BottomNav";
import Gnb from "@/components/Gnb";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={sans.className}>
            <body>
                <div className="flex justify-between">
                    {children}
                </div>
            </body>
        </html>
    );
}
