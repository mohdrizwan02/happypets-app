import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400'], // Choose weights you need
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSans.className}>
      <body
      
      >
        

        {children}
       
      </body>
    </html>
  );
}
