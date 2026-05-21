import { Inter, Bebas_Neue } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/app/context/CartContext";
import AnnouncementBar from "./(home)/home/AnnouncementBar";
import { AuthProvider } from "./context/AuthContext";
import MetaPixel from "@/components/MetaPixel";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
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
      className={`${inter.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-black text-white">
       <MetaPixel />

        <AuthProvider>
          <CartProvider>
            <Navbar />
            <AnnouncementBar />

            <main className="flex-1 w-full">
              {children}
              <Toaster position="top-right" />
            </main>

            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}