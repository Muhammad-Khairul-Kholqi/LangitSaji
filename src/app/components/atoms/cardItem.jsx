import Image from "next/image";

export default function CardItem({ image, category, title, description, price }) {
    const getCategoryColor = (category) => {
        switch (category.toLowerCase()) {
            case "pembuka":
                return "bg-yellow-400";
            case "utama":
                return "bg-[#F67111]";
            case "penutup":
                return "bg-red-500";
            default:
                return "bg-gray-400";
        }
    };

    return (
        <div className="border border-gray-200 p-5 rounded-lg group">
            <div className="relative overflow-hidden rounded-md">
                <Image
                    className="rounded-md w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    src={image}
                    alt={title}
                />
                <div className={`absolute top-2 left-2 ${getCategoryColor(category)} text-white text-xs px-3 py-1 rounded-full capitalize`}>
                    {category}
                </div>
            </div>
            <div className="mt-3">
                <h2 className="font-bold text-lg">{title}</h2>
                <p className="text-gray-600 text-sm">{description}</p>
                <div className="flex items-center justify-between gap-3 mt-3">
                    <h2 className="font-bold">Rp. {price}</h2>
                    <button className="bg-[#F67111] hover:bg-[#F67111]/90 cursor-pointer px-8 py-2 rounded-md text-white">
                        Pesan
                    </button>
                </div>
            </div>
        </div>
    );
}
