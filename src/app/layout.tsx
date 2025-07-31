import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { Roobert } from "@/app/ui/fonts/font";
import Nav from "./components/Nav";

export const metadata: Metadata = {
  title: "Skinstric | Sophisticated Skincare",
  description:
    "AI powered skincare tool where you can get recommendations for your face",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Roobert.className} antialiased`}>
          <Nav />
          {children}
          <div id="modal-root" />
      </body>
    </html>
  );
}
