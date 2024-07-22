import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import circuit from "../component/circuitSVG.svg"

const monserrat = Montserrat({ subsets: ["vietnamese"] })

export const metadata: Metadata = {
  title: "Criticador de Paginas",
  description: "Un criticador web, la cual hace que te muestre tus puntos positivos y negativos, y si aplica, como solución del mismo",
  icons:[circuit.src]
};


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
