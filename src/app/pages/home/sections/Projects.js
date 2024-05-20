import { BigTitle } from "@/app/components/BigTitle";
import {ProjectsScrollDisplay} from "@/app/pages/home/components/ProjectsScrollDisplay";
import Link from "next/link";
import {Button} from "@/app/components/Buttons/Button";

export function Projects() {
  return (
    <div className="container bg-black text-white py-20 md:py-24">
        <BigTitle title="Projects"/>
        <div className="flex flex-col ml-auto md:max-w-3xl md:mt-20 mb-10 md:mb-12">
            <p className="text-sm md:text-lg mb-5 md:mb-8">
               La très grande majorité de mes projets a été réalisé cette année durant
               mon Bachelor OpenClassRooms : « Développeur Front-End - Javascript React ». <br/>
               Certains ont aussi été développé pendant mon BTS SIO
               (Services Informatiques Aux Organisations).
            </p>
            <div className="max-md:text-sm self-end">
                <Button text={"Retrouvez tous mes projets ici"} href={'/projects'} color={"white"}/>
            </div>
        </div>
        <ProjectsScrollDisplay/>
    </div>
  );
}