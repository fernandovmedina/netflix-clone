"use client";

import { Roboto } from "next/font/google";
import { createClient } from "@/utils/supabase/client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import "./globals.css";

const getRoboto = Roboto({
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const supabase = createClient();

    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (session && (pathname === "/" || pathname === "/login")) {
        router.replace("/home/browse");
      }
    };

    checkSession();
  }, [router]);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/netflix.png" type="image/png" />
      </head>
      <body
        className={`${getRoboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
