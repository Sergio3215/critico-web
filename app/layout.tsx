import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import circuit from "../component/circuitSVG.svg"
import lupa from "../public/lupa.png"

const monserrat = Montserrat({ subsets: ["vietnamese"] });

const myURL = "https://criticador-web.vercel.app/";

export const metadata: Metadata = {
  title: "Criticador de Paginas",
  description: "Un criticador web, la cual hace que te muestre tus puntos positivos y negativos, y si aplica, como solución del mismo",
  icons: [lupa.src],
  keywords: ["criticador web", "analytics web sites",
    "analizar paginas web", "revisa pagina web", "SEO",
    "Accesibility", "PWA", "mejores practicas", "best practice",
    "Accesibilidaes", "performance", "analisis de web", "PageSpeed Insights"],
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
    nocache: true,
    notranslate: true,
    noarchive: true,
    nositelinkssearchbox: false,
    nosnippet: true,
    indexifembedded: true,
    "max-image-preview": "standard",
    googleBot: "https://www.google.com",
  },
  abstract: "Criticador Web, lugar donde puedes probar tu sitio web, lugar donde te dice que mejorar!",
  alternates: {
    canonical: myURL
  },
  appleWebApp: {
    capable: true,
    startupImage: lupa.src,
    title: "Criticador Web",
    statusBarStyle: "black-translucent"
  },
  applicationName: "Criticador Web",
  appLinks: {
    ios: {
      app_name: "Criticador Web",
      url: myURL
    },
    android: {
      app_name: "Criticador Web",
      url: myURL,
      package: "app"
    },
    web: {
      url: myURL
    }
  },
  authors: {
    name: "Serez Dev",
    url: "https://www.serez.dev"
  },
  publisher: "Vercel",
  category: "Analyzer Web",
  formatDetection: {
    url: true
  },
  openGraph: {
    type: "website",
    url: myURL,
    siteName: "Criticador Web",
    description: "Criticador Web, lugar donde puedes probar tu sitio web, lugar donde te dice que mejorar!",
    title: "Criticador Web",
  },
  twitter:{
    card:"summary_large_image",
    description:"Criticador Web, lugar donde puedes probar tu sitio web, lugar donde te dice que mejorar!",
    creator:"@Serez Dev",
    images:lupa.src
  },
  referrer:"strict-origin"
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
