import type { Metadata } from "next";
import { Orbitron, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/session-provider";
import { ActiveThemeProvider } from "@/components/dashboard/active-theme";
import ConditionalSiteChrome from "@/components/layout/conditional-site-chrome";
import LayoutWrapper from "@/components/layout/layout-wrapper";
import { AuthProvider } from "@/lib/authContext";


const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "German Fitness Sahiwal | Transform Your Body in 90 Days | Best Gym in Pakistan",
  description: "Join German Fitness, Sahiwal's premier gym with 500+ happy members. Expert trainers, 24/7 access, personalized nutrition plans. Start your transformation today with a free trial!",
  keywords: "gym Sahiwal, fitness center Pakistan, personal trainer, weight loss, muscle building, 24/7 gym, German Fitness, best gym Sahiwal, fitness classes, nutrition plans",
  authors: [{ name: "German Fitness Team" }],
  creator: "German Fitness",
  publisher: "German Fitness",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://germanfitness.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "German Fitness Sahiwal | Transform Your Body in 90 Days",
    description: "Join Sahiwal's premier gym with expert trainers, 24/7 access, and personalized nutrition plans. Start your transformation today!",
    url: "https://germanfitness.com",
    siteName: "German Fitness",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "German Fitness Gym - Transform Your Body",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "German Fitness Sahiwal | Transform Your Body in 90 Days",
    description: "Join Sahiwal's premier gym with expert trainers, 24/7 access, and personalized nutrition plans. Start your transformation today!",
    images: ["/og-image.jpg"],
  },
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-256x256.png", sizes: "256x256", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
    shortcut: "/favicon-256x256.png",
    apple: [
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#FF6B35",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} ${orbitron.variable} antialiased`}
        suppressHydrationWarning
      >
        <AuthProvider>
          <ActiveThemeProvider>
            <Providers>
              <LayoutWrapper>
                <ConditionalSiteChrome>{children}</ConditionalSiteChrome>
              </LayoutWrapper>
            </Providers>
          </ActiveThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
