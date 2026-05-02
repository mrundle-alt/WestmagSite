import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WESTMAG \u2013 HOME",
  description:
    "Westmag designs and manufactures BLDC motors and actuators, built in America for the next generation of autonomous machines.",
  icons: {
    icon: "/westmag/icons/favicon.png",
    apple: "/westmag/icons/apple-touch-icon.png",
  },
  openGraph: {
    title: "WESTMAG \u2013 HOME",
    description:
      "American motors for drones and robots. Engineered for performance. Built for scale. Built in America.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
