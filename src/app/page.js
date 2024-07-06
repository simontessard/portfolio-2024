import { HeroHeader } from "@/app/pages/home/sections/HeroHeader";
import { Header } from "@/app/partials/Header";
import { Projects } from "@/app/pages/home/sections/Projects";
import { Skills } from "@/app/pages/home/sections/Skills";
import About from "@/app/pages/home/sections/About";
import TechList from "@/app/utils/TechList";
import {WorkWithMe} from "@/app/pages/home/sections/WorkWithMe";
import {Loader} from "@/app/utils/Loader";

export default function Home() {
  return (
    <main>
        <Loader/>
        <Header/>
        <HeroHeader />
        <About/>
        <Skills/>
        <TechList />
        <Projects/>
        <WorkWithMe/>
    </main>
  );
}
