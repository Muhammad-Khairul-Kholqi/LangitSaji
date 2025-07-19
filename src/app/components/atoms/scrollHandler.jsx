"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ScrollHandler() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const sectionId = searchParams.get("scrollTo");
        if (sectionId) {
            const el = document.getElementById(sectionId);
            if (el) {
                const offset = el.offsetTop - 80;
                window.scrollTo({ top: offset, behavior: "smooth" });
            }
        }
    }, [searchParams]);

    return null;
}
