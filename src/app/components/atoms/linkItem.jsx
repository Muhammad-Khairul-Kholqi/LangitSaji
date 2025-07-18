import Link from "next/link"

export default function LinkItem({ label, href }) {
    return (
        <Link
            href={href}
            className="cursor-pointer text-sm tracking-wider text-white relative group inline-block"
        >
            {label}
            <span className="absolute bottom-0 top-6 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FCE700] to-[#F67111] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0 rounded-md"></span>
        </Link>
    )
}