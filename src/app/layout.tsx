import type { Metadata } from "next";
import { poppins, quicksand } from "@/util/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo App",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${quicksand.variable}`}>
        {children}
      </body>
    </html>
  );
}
