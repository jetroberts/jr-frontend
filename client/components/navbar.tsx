import Link from "next/link";

export default function Navbar() {
    return (
        <div className="border-b-2 mb-2">
            <nav>
                <ul className="flex flex-row py-4">
                    <li className="px-4 text-lg grow text-center"><Link href="">Blog</Link></li>
                    <li className="px-2 text-lg grow text-center"><Link href="">About</Link></li>
                </ul>
            </nav>
        </div>
    )
} 