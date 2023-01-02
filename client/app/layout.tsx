import { ReactNode } from "react"
import './globals.css'

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <body>
            <div className="text-3xl font-bold underline">{children}</div>
        </body>
    )
}