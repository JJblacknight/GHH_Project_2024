import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavbarContainer from "@/app/navigation/NavbarContainer";


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

export const metadata: Metadata = {
  title: "Where Should I Eat?",
  description: "Enter how you're feeling to receive a recommended restaurant to eat in Charlottesville.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <video className="video-background" autoPlay loop muted>
          <source src="/CloudsBackground.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <NavbarContainer/>
        {children}
      </body>
    </html>
  );
}
