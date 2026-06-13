import { Hero } from "@/components/ui/hero";
import { HomeAbout } from "@/components/ui/home-about";
import { HomeEngineering } from "@/components/ui/home-engineering";
import { HomeGroup } from "@/components/ui/home-group";
import { HomeServices } from "@/components/ui/home-services";
import { Stats } from "@/components/ui/stats";
import { mainLayout } from "@/lib/styles";

export default function Home() {
  return (
    <main className={mainLayout}>
      <Hero />
      <Stats />
      <HomeServices />
      <HomeAbout />
      <HomeEngineering />
      <HomeGroup />
    </main>
  );
}
