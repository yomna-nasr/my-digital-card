import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

// 1. Define the Base URL to fix OG Image issues
const DOMAIN = "https://yomnanasr-card.vercel.app";

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  
  // 2. Optimized Title with a Template (Great for multi-page sites)
  title: {
    default: "Yomna Nasr | Creative Developer & AI Enthusiast",
    template: "%s | Yomna Nasr",
  },
  
  // 3. Rich Description with Keywords
  description: "Digital Creator & Developer bridging design with functional code. Specializing in Vibe Coding, Machine Learning (YOLO/OpenCV), and immersive web experiences.",
  
  // 4. Strategic Keywords for Discovery
  keywords: [
    "Yomna Nasr",
    "Creative Developer",
    "Vibe Coding",
    "Machine Learning Engineer",
    "Computer Vision",
    "Next.js Portfolio",
    "Cyberpunk Web Design",
    "Python Developer",
    "Egypt",
    "Cairo", 
    "New York",
    "NY",
    "Professor",
    "Academia",
  ],

  // 5. Authorship
  authors: [{ name: "Yomna Nasr", url: DOMAIN }],
  creator: "Yomna Nasr",
  publisher: "Yomna Nasr",

  // 6. Robots (Instructions for Google)
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

  // 7. Open Graph (How it looks on Facebook/LinkedIn/Discord)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: DOMAIN,
    title: "Yomna Nasr | Creative Developer",
    description: "Building immersive web experiences with AI and Code. Process: ML/DL_LEARNING.",
    siteName: "Yomna Nasr Portfolio",
    images: [
      {
        url: "/opengraph-image.png", // You need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Yomna Nasr - Neural Engine Interface",
      },
    ],
  },

  // 8. Twitter Card (How it looks on X/Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Yomna Nasr | Creative Developer",
    description: "Bridging design with functional code. Efficiency: 98%.",
    images: ["/opengraph-image.png"], // Reuses the OG image
  },

  // 9. Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetbrainsMono.className} min-h-screen bg-black text-white antialiased selection:bg-green-500 selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}