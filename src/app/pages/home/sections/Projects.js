import { BigTitle } from "@/app/components/BigTitle";
import {ProjectsBis} from "@/app/pages/home/sections/ProjectsBis";

export function Projects() {
  return (
    <div className="container max-md:px-4 bg-black text-white py-16 md:py-24">
        <BigTitle title="Projects"/>
        <ProjectsBis/>
    </div>
  );
}