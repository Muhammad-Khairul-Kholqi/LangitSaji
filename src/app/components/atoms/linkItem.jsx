import Link from "next/link"

export default function LinkItem({label, href}) {
    return (
        // <Link href="" className="bg-white border border-orange-400 rounded-tr-2xl rounded-bl-2xl px-2 py-1">
        //     <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">Beranda</span>
        // </Link>
        <Link href={href} className="cursor-pointer">{label}</Link>
    )
}