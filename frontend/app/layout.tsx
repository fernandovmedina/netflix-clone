"use client";

import { Roboto } from "next/font/google";
import "./globals.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

const getRoboto = Roboto({
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  
  useEffect(() => {
    const supabase = createClient();

    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (session) {
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
