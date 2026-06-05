import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";
import NextThemeProvider from "@/providers/NextThemeProvider";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "MediQueue",
  description: "MediQueue is a Best Online Platform to Connect with Top Tutors and Students for Personalized Learning Experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${outfit.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </NextThemeProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
