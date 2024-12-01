import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";
import { Toaster } from "@/components/ui/sonner"
import { AuthProvider } from '@descope/nextjs-sdk';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Book Services",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider projectId="P2olMx1N1gA1U6R1dvgbz3KLDK1K">
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mx-6 md:mx-16">
          <Header />
          <Toaster />
          {children}
          </div>
      </body>
    </html>
    </AuthProvider>
  );
}
