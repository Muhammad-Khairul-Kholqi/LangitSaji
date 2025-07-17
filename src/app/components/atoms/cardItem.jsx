import Image from "next/image";

export default function CardItem({image, category, title, description, price}) {
    return (
        <div className="border border-gray-200 p-5 rounded-lg">
            <div className="relative">
                <Image
                    className="rounded-md"
                    src={image}
                    alt={title}
                />
                <div className="absolute top-2 left-2 bg-[#F67111] text-white text-xs px-3 py-1 rounded-full">
                    {category}
                </div>
            </div>
            <div className="mt-3">
                <h2 className="font-bold text-lg">{title}</h2>
                <p className="text-gray-600 text-sm">
                    {description}
                </p>
                <div className="flex items-center justify-between gap-3 mt-3">
                    <h2 className="font-bold">Rp. {price}</h2>
                    <button className="bg-[#F67111] hover:bg-[#F67111]/90 cursor-pointer px-8 py-2 rounded-md text-white">
                        Pesan
                    </button>
                </div>
            </div>
        </div>
    )
}