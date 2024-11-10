import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PCT - Pokemon Collection Tracker",
  description: "Keep track of your Pokémon cards collections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
