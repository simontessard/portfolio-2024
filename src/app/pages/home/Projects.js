import {Project} from "@/app/pages/home/cards/Project";
import {BigTitle} from "@/app/components/BigTitle";

export function Projects() {
  return (
    <div className="container max-md:px-4 bg-black text-white mb-8 md:mb-20">
        <BigTitle title="Projects"/>
        <div className="grid md:grid-cols-5 gap-6">
            <Project type="small"/>
            <Project />
            <Project />
            <Project type="small" />
            <Project type="small"/>
            <Project />
            <Project />
            <Project type="small"/>
        </div>
    </div>
  );
}