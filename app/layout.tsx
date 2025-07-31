import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivoSans = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cybersive Academy",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
