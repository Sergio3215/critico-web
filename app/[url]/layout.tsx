"use client"
import type { Metadata } from "next";
import circuit from "../../component/circuitSVG.svg"
import { Montserrat } from "next/font/google";
const monserrat = Montserrat({ subsets: ["vietnamese"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{
        background: "rgb(241 229 160)",
        backgroundImage: `url(${circuit.src})`
      }} className={monserrat.className}>{children}</body>
    </html>
  );
}
