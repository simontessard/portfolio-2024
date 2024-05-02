import { HeroHeader } from "@/app/pages/home/sections/HeroHeader";
import { Header } from "@/app/partials/Header";
import { Projects } from "@/app/pages/home/sections/Projects";
import { Skills } from "@/app/pages/home/sections/Skills";
import About from "@/app/pages/home/sections/About";
import TechList from "@/app/utils/TechList";
import { MediumTitle } from "@/app/components/MediumTitle";
import {ProjectsBis} from "@/app/pages/home/sections/ProjectsBis";

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
