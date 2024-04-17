import { HeroHeader } from "@/app/pages/home/HeroHeader";
import { Header } from "@/app/partials/Header";
import { Projects } from "@/app/pages/home/Projects";
import { Skills } from "@/app/pages/home/Skills";
import { Footer } from "@/app/partials/Footer";
import About from "@/app/pages/home/About";
import TechList from "@/app/utils/TechList";
import { MediumTitle } from "@/app/components/MediumTitle";

export default function Home() {
  return (
    <main>
        <Header/>
        <HeroHeader />
        <About/>
        <Skills/>
        <div className={"container max-md:px-4"}>
            <MediumTitle title="Ce que j'utilise le plus :"/>
        </div>
        <TechList />
        <Projects/>
    </main>
  );
}
