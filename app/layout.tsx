import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moja Kolekcija Vina",
  description: "Katalog vina",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bs">
      <body>{children}</body>
    </html>
  );
}
