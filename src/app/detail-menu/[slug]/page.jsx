import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const menuData = [
    {
        title: "Nasi Goreng Spesial",
        slug: "nasi-goreng-spesial",
        category: "Utama",
        image: "https://img.freepik.com/free-photo/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food_1150-26576.jpg",
        description: "Nasi goreng dengan campuran seafood, ayam, dan sayuran segar",
        price: "15.000",
    },
    {
        title: "Ayam Goreng Lalapan",
        slug: "ayam-goreng-lalapan",
        category: "Utama",
        image: "https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg",
        description: "Ayam goreng dengan nasi putih, sambal, dan lalapan segar",
        price: "20.000",
    },
    {
        title: "Kue Putu",
        slug: "kue-putu",
        category: "Penutup",
        image: "https://img.freepik.com/premium-photo/delicious-klepon-traditional-indonesian-culinary-wooden-table_448865-1770.jpg",
        description: "Kue tradisional dari tepung beras isi gula merah dan kelapa",
        price: "10.000",
    },
    {
        title: "Gado-Gado",
        slug: "gado-gado",
        category: "Pembuka",
        image: "https://img.freepik.com/premium-photo/lotek-bandung-sundanese-traditional-healthy-salad-made-from-various-boiled-vegetable-with-spicy-peanut-sauce-usually-served-wuth-kerupuk-eat-with-steamed-rice_511235-11003.jpg",
        description: "Salad sayur khas Indonesia dengan bumbu kacang",
        price: "18.000",
    },
    {
        title: "Rendang Padang",
        slug: "rendang-padang",
        category: "Utama",
        image: "https://img.freepik.com/free-photo/delicious-goulash-ready-dinner_23-2149370898.jpg",
        description: "Daging sapi dimasak rempah khas Minang, disajikan dengan nasi",
        price: "25.000",
    },
    {
        title: "Dadar Gulung",
        slug: "dadar-gulung",
        category: "Penutup",
        image: "https://img.freepik.com/free-photo/side-view-lavash-wraps-plate-with-green-purple-stripped-towel-right-side-black-background_140725-142414.jpg",
        description: "Pancake hijau isi kelapa manis khas Indonesia",
        price: "9.000",
    },
    {
        title: "Soto Betawi",
        slug: "soto-betawi",
        category: "Pembuka",
        image: "https://img.freepik.com/free-photo/chicken-green-curry-bowl_1150-23912.jpg",
        description: "Sup daging khas Betawi dengan kuah santan gurih",
        price: "22.000",
    },
    {
        title: "Es Cendol",
        slug: "es-cendol",
        category: "Penutup",
        image: "https://img.freepik.com/premium-photo/close-up-fruit-salad-bowl_1048944-12415610.jpg",
        description: "Minuman manis dari cendol, gula merah, santan, dan es",
        price: "12.000",
    },
];

export default function DetailMenu({ params }) {
    const { slug } = params;
    const item = menuData.find((m) => m.slug === slug);

    if (!item) return notFound();

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

    const similarItems = menuData.filter(
        (m) => m.category === item.category && m.slug !== slug
    );

    return (
        <div className="flex justify-center p-5">
            <div className="w-full max-w-[1200px]">
                <div className="mt-3">
                    <Link href="/" className="flex items-center gap-3 group">
                        <ArrowLeft className="group-hover:-translate-x-1 duration-300" />
                        <h5 className="text-xl font-semibold">Detail Menu</h5>
                    </Link>

                    <div className="flex items-center gap-2 group mt-2">
                        <h5 className="text-sm text-orange-500">Beranda</h5>
                        <h5 className="text-sm text-orange-500">/</h5>
                        <h5 className="text-sm text-orange-500">Menu</h5>
                        <h5 className="text-sm text-orange-500">/</h5>
                        <h5 className="text-sm">Detail Menu</h5>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-8 mt-5">
                    <div className="w-full lg:w-[70%] space-y-3">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-[400px] object-cover rounded-xl mb-5"
                        />
                        <h1 className="text-3xl font-bold">{item.title}</h1>
                        <div className="flex items-center gap-5">
                            <div className={`${getCategoryColor(item.category)} text-sm capitalize px-4 py-2 rounded-full text-white`}>
                                {item.category}
                            </div>
                            <div className="text-xl font-bold">Rp. {item.price}</div>
                        </div>
                        <p className="mt-4 text-gray-700">{item.description}</p>
                    </div>

                    <div className="w-full lg:w-[30%] space-y-4">
                        <h2 className="text-lg font-bold mb-2">Kategori menu yang serupa</h2>
                        {similarItems.map((menu) => (
                            <Link
                                key={menu.slug}
                                href={`/detail-menu/${menu.slug}`}
                                className="flex items-start gap-4 hover:bg-gray-100 p-2 rounded-md transition"
                            >
                                <img
                                    src={menu.image}
                                    alt={menu.title}
                                    className="w-20 h-20 object-cover rounded-md"
                                />
                                <div>
                                    <h3 className="text-md font-semibold">{menu.title}</h3>
                                    <p className="text-sm text-gray-600 line-clamp-2">{menu.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
