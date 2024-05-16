import {projects} from "@/app/data/data";
import {Project} from "@/app/pages/home/cards/Project";

export default function ProjectsMobileDisplay() {
    return (
        <div className="md:hidden grid gap-6">
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
    )
}