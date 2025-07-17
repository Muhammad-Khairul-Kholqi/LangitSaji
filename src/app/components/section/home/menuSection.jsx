import LineDivider from "@/app/assets/line-divider.png"
import Image from "next/image";
import CardLists from "@/app/components/molecules/cardLists";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MenuSection() {
    return (
        <div className="mt-10 flex justify-center p-5">
            <div className="w-full max-w-[1200px]">
                <div className="flex flex-col items-center text-center">
                    <Image
                        src={LineDivider}
                        alt=""
                        className="w-full max-w-[200px]"
                    />
                    <h1 className="text-3xl font-bold mt-2">Menu Kami</h1>
                    <p className="w-full max-w-[600px] mt-2 text-gray-600">Temukan beragam pilihan hidangan lezat kami, mulai dari makanan pembuka, utama, hingga penutup yang menggugah selera.</p>
                </div>
                <CardLists />
                <Link href="" className="flex items-center gap-2 group mt-3 text-gray-700">
                    <span>Lihat Menu Lainnya</span>
                    <ArrowRight className="mt-1 group-hover:translate-x-2 duration-300" />
                </Link>
            </div>
        </div>
    )
}