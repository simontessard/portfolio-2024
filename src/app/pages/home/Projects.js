import {Project} from "@/app/pages/home/cards/Project";

export function Projects() {
  return (
    <div className="bg-black text-white mb-20">
      <h1 className="text-9xl mb-12">Projects</h1>
        <div className="grid grid-cols-5 gap-6">
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