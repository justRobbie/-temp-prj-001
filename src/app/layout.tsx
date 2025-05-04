import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutFooterMenu from "@/components/Footer.Layout";
import LayoutAsideMenu from "@/components/Aside.Layout";
import LayoutNavigator from "@/components/Nav.Layout";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: process.env.APP_NAME,
    description: "Otimizar a execução das operações de Trade Marketing no ponto de venda (PDV), assegurando a eficiência, padronização e a monitorização em tempo real da atuação das equipas de campo.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <LayoutAsideMenu className="h-full" />

                <LayoutNavigator className="w-full"/>

                <main className="flex flex-col gap-[20px] justify-start items-start w-full h-full">
                    {children}
                </main>

                <LayoutFooterMenu className="w-full flex flex-row justify-center items-center" />
            </body>
        </html>
    );
}
