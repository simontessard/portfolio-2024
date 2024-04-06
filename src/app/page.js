import { HeroHeader } from "@/app/pages/home/HeroHeader";
import { Header } from "@/app/partials/Header";
import { Projects } from "@/app/pages/home/Projects";
import { Skills } from "@/app/pages/home/Skills";
import { Footer } from "@/app/partials/Footer";
import About from "@/app/pages/home/About";

export default function Home() {
  return (
    <main>
        <Header/>
        <HeroHeader />
        <About/>
        <Skills/>
        <Projects/>
        <Footer/>
    </main>
  );
}
