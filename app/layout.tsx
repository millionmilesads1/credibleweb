import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CredibleWeb | AI-Powered SEO for Service Businesses",
  description: "CredibleWeb builds AI-powered Local SEO systems that get service businesses found, trusted, and chosen — without paid ads.",
  keywords: "SEO, Local SEO, AI Automation, Agency, Service Businesses",
  icons: {
    icon: "/CredibleWeb_logo.png",
    apple: "/CredibleWeb_logo.png",
  },
  openGraph: {
    title: "CredibleWeb | AI-Powered SEO for Service Businesses",
    description: "CredibleWeb builds AI-powered Local SEO systems that get service businesses found, trusted, and chosen — without paid ads.",
    images: [{ url: "/CredibleWeb_logo.png", width: 2000, height: 2000 }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "CredibleWeb | AI-Powered SEO for Service Businesses",
    description: "CredibleWeb builds AI-powered Local SEO systems that get service businesses found, trusted, and chosen — without paid ads.",
    images: ["/CredibleWeb_logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full scroll-smooth">
      <body
        className={`${jakarta.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground min-h-full flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
