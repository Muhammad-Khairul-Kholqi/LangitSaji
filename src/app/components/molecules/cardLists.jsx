import CardItem from "@/app/components/atoms/cardItem"
import BackgroundImage from "@/app/assets/bg-main-section.png";

export default function CardLists() {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-5">
            <CardItem 
                image={BackgroundImage}
                category="Pembuka"
                title="Nasi Goreng Spesial"
                description="Nasi goreng dengan campuran seafood, ayam, dan sayuran segar"
                price="15.000"
            />

            <CardItem
                image={BackgroundImage}
                category="Utama"
                title="Nasi Goreng Spesial"
                description="Nasi goreng dengan campuran seafood, ayam, dan sayuran segar"
                price="15.000"
            />

            <CardItem
                image={BackgroundImage}
                category="Penutup"
                title="Nasi Goreng Spesial"
                description="Nasi goreng dengan campuran seafood, ayam, dan sayuran segar"
                price="15.000"
            />

            <CardItem
                image={BackgroundImage}
                category="Pembuka"
                title="Nasi Goreng Spesial"
                description="Nasi goreng dengan campuran seafood, ayam, dan sayuran segar"
                price="15.000"
            />

            <CardItem
                image={BackgroundImage}
                category="Utama"
                title="Nasi Goreng Spesial"
                description="Nasi goreng dengan campuran seafood, ayam, dan sayuran segar"
                price="15.000"
            />

            <CardItem
                image={BackgroundImage}
                category="Penutup"
                title="Nasi Goreng Spesial"
                description="Nasi goreng dengan campuran seafood, ayam, dan sayuran segar"
                price="15.000"
            />

            <CardItem
                image={BackgroundImage}
                category="Utama"
                title="Nasi Goreng Spesial"
                description="Nasi goreng dengan campuran seafood, ayam, dan sayuran segar"
                price="15.000"
            />

            <CardItem
                image={BackgroundImage}
                category="Penutup"
                title="Nasi Goreng Spesial"
                description="Nasi goreng dengan campuran seafood, ayam, dan sayuran segar"
                price="15.000"
            />
        </div>  
    )
}