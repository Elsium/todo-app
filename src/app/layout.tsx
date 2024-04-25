import type { Metadata } from "next";
import { poppins, quicksand, jost } from "@/app/util/font";
import "./globals.css";
import {Providers} from "@/app/redux/provider";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo App",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${quicksand.variable} ${jost.variable}`}>
          <Providers>
              {children}
          </Providers>
      </body>
    </html>
  );
}
