import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const getRoboto = Roboto({
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Netflix - Watch TV Shows Online, Watch Movies Online",
  description: "Created by @github.com/fernandovmedina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${getRoboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
