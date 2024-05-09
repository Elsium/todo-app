import type {Metadata} from "next"
import {poppins, quicksand, jost} from "@/util/font"
import "./globals.css"
import {Providers} from "@/redux/provider"
import React from "react"

export const metadata: Metadata = {
    title: "TodoItem App",
    description: "TodoItem App",
}

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} ${quicksand.variable} ${jost.variable}`}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}