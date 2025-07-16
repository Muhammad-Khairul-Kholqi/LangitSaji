import LinkItem from "@/app/components/atoms/linkItem";

export default function LinkLists({ isMobile = false }) {
    return (
        <div className={`flex ${isMobile ? "flex-col gap-3 p-5" : "items-center gap-5"}`}>
            <LinkItem href="#" label="Beranda" />
            <LinkItem href="#" label="Menu" />
            <LinkItem href="#" label="Spesial" />
            <LinkItem href="#" label="Tentang Kami" />
            <LinkItem href="#" label="Kontak" />
        </div>
    );
}
