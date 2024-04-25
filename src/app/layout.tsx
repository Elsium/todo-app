import type { Metadata } from "next";
import { poppins, quicksand, jost } from "@/util/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo App",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${quicksand.variable} ${jost.variable}`}>
        {children}
      </body>
    </html>
  );
}
