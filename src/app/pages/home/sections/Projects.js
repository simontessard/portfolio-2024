import { BigTitle } from "@/app/components/BigTitle";
import {ProjectsScrollDisplay} from "@/app/pages/home/components/ProjectsScrollDisplay";
import Link from "next/link";

export function Projects() {
  return (
    <div className="container bg-black text-white py-20 md:py-24">
        <BigTitle title="Projects"/>
        <div className="flex flex-col ml-auto md:max-w-4xl md:mt-20 mb-8 md:mb-12">
            <p className="text-sm md:text-lg mb-4 md:mb-6">
               La très grande majorité de mes projets a été réalisé cette année durant mon Bachelor OpenClassRooms :
                « Développeur Front-End - Javascript React ». Certains ont aussi été développé pendant mon BTS SIO
                (Services Informatiques Aux Organisations).
            </p>
            <Link href="/projects" className="max-md:text-xs underline underline-offset-4 self-end">Retrouvez tous mes projets ici</Link>
        </div>
        <ProjectsScrollDisplay/>
    </div>
  );
}