import MainSection from "@/app/components/section/home/mainSection";
import Sponsored from "@/app/components/section/home/sponsored";
import MenuSection from "@/app/components/section/home/menuSection";
import SpecialPromo from "@/app/components/section/home/specialPromo";
import AboutUsSection from "@/app/components/section/home/aboutUsSection";
import Faq from "@/app/components/section/home/faqSection";
import ExcessSection from "@/app/components/section/home/excessSection";
import ContactSection from "@/app/components/section/home/contactSectin";

export default function Home() {
  return (
    <div>
      <MainSection />
      <Sponsored />
      <MenuSection />
      <SpecialPromo />
      <AboutUsSection />
      <Faq />
      <ExcessSection />
      <ContactSection />
    </div>
  );
}

