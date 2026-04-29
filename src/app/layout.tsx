import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CredibleWeb | Websites, SEO & Digital Marketing",
  description: "CredibleWeb helps businesses build a stronger online presence through professional website design, SEO, and digital marketing. Websites built for trust, visibility, and leads.",
  metadataBase: new URL("https://credibleweb.in"), // Placeholder domain
  openGraph: {
    title: "CredibleWeb | Websites, SEO & Digital Marketing",
    description: "Websites, SEO, and digital marketing built for trust, visibility, and leads.",
    url: "https://credibleweb.in",
    siteName: "CredibleWeb",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CredibleWeb | Websites, SEO & Digital Marketing",
    description: "Websites, SEO, and digital marketing built for trust, visibility, and leads.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-gray-900 bg-white antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
