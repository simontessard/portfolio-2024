import {Project} from "@/app/pages/home/cards/Project";
import {BigTitle} from "@/app/components/BigTitle";

export function Projects() {
    const projects = [
        { type: "small", title: "Projet 1", tag: "HTML", description: "Lorem ipsum nadare" },
        { type: "large", title: "Projet 2", tag: "CSS", description: "Dolor sit amet" },
        { type: "large", title: "Projet 3", tag: "JavaScript", description: "Consectetur adipiscing elit" },
        { type: "small", title: "Projet 4", tag: "JavaScript", description: "Consectetur adipiscing elit" },
        { type: "small", title: "Projet 1", tag: "HTML", description: "Lorem ipsum nadare" },
        { type: "large", title: "Projet 2", tag: "CSS", description: "Dolor sit amet" },
        { type: "large", title: "Projet 3", tag: "JavaScript", description: "Consectetur adipiscing elit" },
        { type: "small", title: "Projet 4", tag: "JavaScript", description: "Consectetur adipiscing elit" },
    ];
  return (
    <div className="container max-md:px-4 bg-black text-white mb-8 md:mb-20">
        <BigTitle title="Projects"/>
        <div className="grid md:grid-cols-5 gap-6">
            {projects.map((project, index) => (
                <Project
                    key={index}
                    type={project.type}
                    title={project.title}
                    tag={project.tag}
                    description={project.description}
                />
            ))}
        </div>
    </div>
  );
}