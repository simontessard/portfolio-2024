import { BigTitle } from "@/app/components/BigTitle";
import {ProjectsBis} from "@/app/pages/home/sections/ProjectsBis";
import Link from "next/link";

export function Projects() {
  return (
    <div className="container max-md:px-4 bg-black text-white py-16 md:py-24">
        <BigTitle title="Projects"/>
        <Link href="/projects" className="block max-md:auto md:ml-auto w-fit md:text-lg underline underline-offset-4 mb-6">Retrouvez tous mes projets ici</Link>
        <ProjectsBis/>
    </div>
  );
}