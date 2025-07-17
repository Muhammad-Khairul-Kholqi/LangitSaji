import Image from "next/image";
import FoodImage from "@/app/assets/food.png";

export default function PromoCard() {
    return (
        <div className="relative flex items-center justify-between bg-white text-black rounded-3xl px-6 py-4 shadow-lg w-full overflow-hidden">
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full z-10" />
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full z-10" />

            <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0 md:space-x-6">
                {/* Teks Promosi */}
                <div className="flex flex-col space-y-2">
                    <h1 className="text-xl font-semibold">Nikmati Hidangan Lezat & Diskon Spesial!</h1>
                    <p className="text-sm text-gray-600">Ribuan pelanggan sudah memesan — jangan sampai ketinggalan!</p>
                </div>

                {/* Gambar Makanan */}
                <div className="w-24 h-24 relative flex-shrink-0">
                    <Image
                        src={FoodImage}
                        alt="Promo Makanan"
                        fill
                        className="object-cover rounded-2xl"
                    />
                </div>
            </div>
        </div>
    );
}
