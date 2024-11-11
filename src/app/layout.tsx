import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "We - Private, Safe, Anonymous",
  description: "We is the trusted platform for university students to share thoughts and experiences privately and anonymously. Connect safely with your campus community.",
  keywords: "private, safe, anonymous, university, students, campus, social platform, community",
  authors: [{ name: "Om Preetham Bandi" }, { name: "Team We" }],
  creator: "Om Preetham Bandi",
  openGraph: {
    title: "We - Private, Safe, Anonymous",
    description: "Share your thoughts privately and anonymously with your university community on We.",
    url: "https://we.ompreetham.com",
    siteName: "We",
    locale: "en_US",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-w-80 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
