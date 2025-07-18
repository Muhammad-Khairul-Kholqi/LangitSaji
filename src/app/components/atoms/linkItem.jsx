"use client";
import Link from "next/link";
import { UseActiveSection } from "@/app/hooks/useActiveSection";

export default function LinkItem({ label, href, sectionId }) {
    const activeSection = UseActiveSection();
    const isActive = activeSection === sectionId;

    const handleClick = (e) => {
        if (sectionId) {
            e.preventDefault();
            const element = document.getElementById(sectionId);
            if (element) {
                const navHeight = 80; 
                const elementPosition = element.offsetTop;
                const offsetPosition = elementPosition - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <Link
            href={href}
            onClick={handleClick}
            className="cursor-pointer text-sm tracking-wider text-white relative group inline-block"
        >
            {label}
            <span className={`absolute bottom-0 top-6 h-[2px] bg-gradient-to-r from-[#FCE700] to-[#F67111] transition-all duration-300 ease-out rounded-md ${isActive
                    ? 'w-full left-0'
                    : 'w-0 left-1/2 group-hover:w-full group-hover:left-0'
                }`}></span>
        </Link>
    );
}
