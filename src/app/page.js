import { HeroHeader } from "@/app/pages/home/HeroHeader";
import { Header } from "@/app/partials/Header";
import { Projects } from "@/app/pages/home/Projects";
import {Skills} from "@/app/pages/home/Skills";
import {Footer} from "@/app/partials/Footer";

export default function Home() {
  return (
    <main className="container">
        <Header/>
        <HeroHeader />
        <Skills/>
        <Projects/>
        <Footer/>
    </main>
  );
}
