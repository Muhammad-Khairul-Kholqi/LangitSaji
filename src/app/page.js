import MainSection from "@/app/components/section/home/mainSection";
import MenuSection from "@/app/components/section/home/menuSection";

export default function Home() {
  return (
    <div>
      <MainSection />
      <MenuSection />
      <div className="mt-20">
        <MainSection />
      </div>
    </div>
  );
}

