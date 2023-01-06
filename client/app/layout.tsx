import { ReactNode } from "react"
import Navbar from "../components/navbar"
import './globals.css'

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body className="container mx-auto">
                <Navbar />
                <div>{children}</div>
            </body>
        </html>
    )
}