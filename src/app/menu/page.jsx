"use client";

import { useState } from "react";
import CardItem from "@/app/components/atoms/cardItem";
import Footer from "@/app/components/global/footer";

export default function MenuPage() {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const menuItems = [
        {
            image: "https://img.freepik.com/free-photo/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food_1150-26576.jpg",
            category: "Utama",
            title: "Nasi Goreng Spesial",
            description: "Nasi goreng dengan campuran seafood, ayam, dan sayuran segar",
            price: "15.000",
        },
        {
            image: "https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg",
            category: "Utama",
            title: "Ayam Goreng Lalapan",
            description: "Ayam goreng dengan nasi putih, sambal, dan lalapan segar",
            price: "20.000",
        },
        {
            image: "https://img.freepik.com/premium-photo/delicious-klepon-traditional-indonesian-culinary-wooden-table_448865-1770.jpg",
            category: "Penutup",
            title: "Kue Putu",
            description: "Kue tradisional dari tepung beras isi gula merah dan kelapa",
            price: "10.000",
        },
        {
            image: "https://img.freepik.com/premium-photo/lotek-bandung-sundanese-traditional-healthy-salad-made-from-various-boiled-vegetable-with-spicy-peanut-sauce-usually-served-wuth-kerupuk-eat-with-steamed-rice_511235-11003.jpg",
            category: "Pembuka",
            title: "Gado-Gado",
            description: "Salad sayur khas Indonesia dengan bumbu kacang",
            price: "18.000",
        },
        {
            image: "https://img.freepik.com/free-photo/delicious-goulash-ready-dinner_23-2149370898.jpg",
            category: "Utama",
            title: "Rendang Padang",
            description: "Daging sapi dimasak rempah khas Minang, disajikan dengan nasi",
            price: "25.000",
        },
        {
            image: "https://img.freepik.com/free-photo/side-view-lavash-wraps-plate-with-green-purple-stripped-towel-right-side-black-background_140725-142414.jpg",
            category: "Penutup",
            title: "Dadar Gulung",
            description: "Pancake hijau isi kelapa manis khas Indonesia",
            price: "9.000",
        },
        {
            image: "https://img.freepik.com/free-photo/chicken-green-curry-bowl_1150-23912.jpg",
            category: "Pembuka",
            title: "Soto Betawi",
            description: "Sup daging khas Betawi dengan kuah santan gurih",
            price: "22.000",
        },
        {
            image: "https://img.freepik.com/premium-photo/close-up-fruit-salad-bowl_1048944-12415610.jpg",
            category: "Penutup",
            title: "Es Cendol",
            description: "Minuman manis dari cendol, gula merah, santan, dan es",
            price: "12.000",
        },
    ];

    const filteredItems = menuItems.filter((item) => {
        const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
        const matchCategory =
            selectedCategory === "" || item.category.toLowerCase() === selectedCategory.toLowerCase();
        return matchSearch && matchCategory;
    });

    return (
        <div>
            <div className="flex justify-center p-5">
                <div className="w-full max-w-[1200px]">
                    <div className="text-center space-y-3 flex flex-col items-center mt-5">
                        <h1 className="text-4xl font-bold">
                            Temukan Menu
                            <br /> Favoritmu di Sini!
                        </h1>
                        <p className="w-full max-w-[650px]">
                            Kami telah menyiapkan berbagai macam menu pilihan, mulai dari yang gurih, manis, pedas, sampai yang segar dan ringan. Semua dibuat dengan penuh perhatian dan bahan-bahan pilihan yang fresh setiap hari.
                        </p>
                    </div>

                    <div className="flex justify-center mt-5 w-full">
                        <div className="w-full max-w-[550px] flex flex-col gap-3">
                            <div className="hidden md:flex bg-white h-[70px] p-2 rounded-l-3xl rounded-br-3xl w-full items-center justify-between gap-2 border border-gray-300">
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-[70%] h-full p-2 outline-none text-black placeholder:text-gray-500 placeholder:font-medium"
                                    placeholder="Masukan nama menu"
                                />
                                <button className="bg-[#FCE700] hover:bg-[#FCE700]/80 px-5 py-2 rounded-l-2xl rounded-br-3xl w-[30%] text-black h-full cursor-pointer font-medium">
                                    Cari Menu
                                </button>
                            </div>

                            <div className="flex flex-col md:hidden w-full gap-3">
                                <div className="bg-white h-[70px] p-2 rounded-l-3xl rounded-br-3xl w-full flex items-center border border-gray-300">
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="w-full h-full p-2 outline-none text-black placeholder:text-gray-500 placeholder:font-medium"
                                        placeholder="Masukan nama menu"
                                    />
                                </div>
                                <button className="bg-[#FCE700] hover:bg-[#FCE700]/80 w-full py-4 rounded-l-2xl rounded-br-3xl text-black font-medium">
                                    Cari Menu
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mt-10">
                        {["Pembuka", "Utama", "Penutup"].map((category) => (
                            <button
                                key={category}
                                onClick={() =>
                                    setSelectedCategory(category === selectedCategory ? "" : category)
                                }
                                className={`border px-4 py-2 rounded-md hover:bg-gray-50 cursor-pointer ${selectedCategory === category
                                    ? "bg-gray-100 border-gray-500"
                                    : "border-gray-300"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {filteredItems.length === 0 ? (
                        <div className="text-center mt-10 text-gray-500 text-lg">
                            Menu tidak ditemukan. Silakan coba kata kunci atau kategori lain.
                        </div>
                    ) : (
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-5">
                            {filteredItems.map((item, index) => (
                                <CardItem key={index} {...item} />
                            ))}
                        </div>
                    )}

                </div>
            </div>
            <Footer />
        </div>
    );
}
