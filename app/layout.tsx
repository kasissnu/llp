import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leading Lines Photography | Bangalore Wedding Photography & Films",
  description:
    "Bangalore wedding photography and films for couples who want their celebration remembered with emotion, craft, and quiet elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
