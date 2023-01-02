import { ReactNode } from "react"
import './globals.css'

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <body>
            <div className="center">{children}</div>
        </body>
    )
}