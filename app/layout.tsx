import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "GFG GitHub Sync",
  description:
    "Automatically sync accepted GeeksforGeeks solutions to your GitHub repository.",
  icons: { icon: "/icon.png" },
  openGraph: {
    title: "GFG GitHub Sync",
    description:
      "Solve on GeeksforGeeks. Submit successfully. Keep the solution in GitHub.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T129B1Z5RF"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-T129B1Z5RF');
          `}
        </Script>
      </body>
    </html>
  );
}
