import FloatingButton from "@/sections/public/floating-button";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

const openSans = Open_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIpex",
  description: "Inteligência Artificial para o seu negocio!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={openSans.className}>
        {children}
        <FloatingButton />
      </body>
    </html>
  );
}