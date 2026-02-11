import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FontAwesomeConfig from "./fontawesome";
import { ClientContextProvider } from "../../services/ClientContextProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieBanner from "../../components/CookieBanner/CookieBanner";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://propertyechoes.com"),
  title: "Property Echoes – UK Real Estate Insights & Market Trends",
  description:
    "Expert UK real estate insights, market trends, and practical advice for buyers, sellers, and investors at Property Echoes.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Property Echoes Editorial Team" }],
  publisher: "Property Echoes",
  keywords: [
    "UK real estate",
    "property market UK",
    "buying property UK",
    "selling property UK",
    "real estate investment",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <FontAwesomeConfig />
        <SpeedInsights />
        <Script
          id="gtm-consent-mode"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />
        <GoogleAnalytics gaId="G-LSP428B8FH" />
        <ClientContextProvider>
          <Script
            id="schema-website"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Property Echoes",
                "url": "https://propertyechoes.com",
                "description": "Independent property guides and market insights.",
              }),
            }}
          />
          <Script
            id="schema-organization"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Property Echoes",
                "url": "https://propertyechoes.com",
                "logo": "https://propertyechoes.com/logo.png",
                "sameAs": [],
              }),
            }}
          />
          <Header />
          <CookieBanner />
          <main className="main-content flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 lg:py-12">
            {children}
          </main>
          <Footer />
        </ClientContextProvider>
      </body>
    </html>
  );
}
