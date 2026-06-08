import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/app/context/CartContext";
import AnnouncementBar from "./(home)/home/AnnouncementBar";
import { AuthProvider } from "./context/AuthContext";
import MetaPixel from "@/components/MetaPixel";
import LiveSalesToast from "@/components/LiveSalesToast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata = {
  title: "Winslow India",
  description: "Premium Car Accessories",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-black text-white font-sans">
        {/* Google Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18222558349"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18222558349');
          `}
        </Script>

        <MetaPixel />

        <AuthProvider>
          <CartProvider>
            <Navbar />
            <AnnouncementBar />

            <main className="flex-1 w-full">
              {children}
              <Toaster position="bottom-right" />
              <LiveSalesToast />
            </main>

            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}