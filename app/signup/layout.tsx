import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";

const getRoboto = Roboto({
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Netflix",
  description: "Created by @github.com/fernandovmedina",
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${getRoboto.variable} antialiased`}>
      {children}
    </div>
  );
}
