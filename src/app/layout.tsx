import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutFooterMenu from "@/components/Footer.Layout";
import LayoutAsideMenu from "@/components/Aside.Layout";
import LayoutNavigator from "@/components/Nav.Layout";
import LayoutForm from "@/components/Form.Layout";
import BrandsMenuDialog from "@/components/Dialog.BrandsMenu";

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
                <BrandsMenuDialog />

                <LayoutAsideMenu className="h-full" />

                <LayoutNavigator />

                <LayoutForm />

                <main className="flex flex-col justify-start items-start h-full">
                    {children}
                </main>

                <LayoutFooterMenu className="w-full flex flex-row justify-center items-center" />
            </body>
        </html>
    );
}
