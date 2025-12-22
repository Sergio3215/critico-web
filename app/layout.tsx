import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const monserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const myURL = "https://criticador-web.vercel.app/";

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(myURL),
  title: {
    default: "Criticador Web | Análisis & SEO AI",
    template: "%s | Criticador Web",
  },
  description: "Analiza tu sitio web gratis con IA. Obtén consejos sobre SEO, Accesibilidad, Performance y Diseño. Mejora tu ranking hoy.",
  keywords: ["analisis web", "seo checker", "auditoria web", "inteligencia artificial", "web design feedback", "page speed optimization", "nextjs", "react"],
  authors: [{ name: "Serez Dev", url: "https://www.serez.dev" }],
  creator: "Serez Dev",
  publisher: "Serez Dev",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: myURL,
    title: "Criticador Web | Análisis & SEO AI",
    description: "Analiza tu sitio web gratis con IA. Mejora tu SEO, Accesibilidad y Diseño.",
    siteName: "Criticador Web",
    locale: "es_ES",
    images: [{
      url: "./og-image.jpg", // Placeholder, ideally specific OG image
      width: 1200,
      height: 630,
      alt: "Criticador Web Preview",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Criticador Web | Análisis & SEO AI",
    description: "Analiza tu sitio web gratis con IA.",
    creator: "@serez_dev",
  },
  icons: {
    icon: "/favicon.ico?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${monserrat.className} antialiased`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
