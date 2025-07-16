import Link from "next/link";
import Image from "next/image";
import ImageMain from "@/app/assets/food.png";

export default function MainSection() {
    return (
        <section className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10">
            <div className="flex flex-col items-center md:items-start space-y-7 text-white">
                <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold tracking-wide leading-snug">
                    Hidangan Lokal<br />
                    yang Menghadirkan<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                        Rasa Rumah Sejati
                    </span>
                </h1>
                <p className="w-full max-w-[600px]">
                    Langit Saji menyuguhkan pengalaman kuliner Nusantara dengan sentuhan khas rumahan. Dari aroma dapur tradisional hingga penyajian penuh kehangatan.
                </p>
                <div className="flex items-center gap-4">
                    <Link href="" className="py-2 px-4 bg-gradient-to-br from-yellow-500 to-orange-600 font-medium rounded-tr-2xl rounded-bl-2xl">
                        Order Sekarang
                    </Link>
                    <Link href="" className="text-orange-400 font-medium">
                        Jelajahi Menu
                    </Link>
                </div>
            </div>
            <Image
                src={ImageMain}
                alt="Hidangan khas Langit Saji"
                className="w-72 sm:w-96 md:w-96 lg:w-[500px] h-auto mx-auto md:mx-0"
            />
        </section>
    );
}
