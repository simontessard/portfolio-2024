import { Project } from "@/app/pages/home/cards/Project";
import { BigTitle } from "@/app/components/BigTitle";
import { projects } from "@/app/data/data";

export function Projects() {
  return (
    <div className="container max-md:px-4 bg-black text-white py-16 md:py-24">
        <BigTitle title="Projects"/>
        <div className="grid md:grid-cols-5 gap-6 md:gap-10">
            {projects.map((project, index) => (
                <Project
                    key={index}
                    id={index}
                    type={index % 3 === 0 ? 'small' : 'large'}
                    title={project.title}
                    tag={project.technologies}
                    color={project.color}
                    description={project.description}
                />
            ))}
        </div>
    </div>
  );
}