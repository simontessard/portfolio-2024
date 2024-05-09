import { projects } from "@/app/data/data";
import {BigTitle} from "@/app/components/BigTitle";
import Link from "next/link";
import Template from "@/app/utils/PageTransition";

export default function ProjectsPage() {
    return (
        <section className="max-md:px-4 py-16 md:py-24 bg-white text-black">
            <Template/>
            <div className="container flex flex-col">
                <BigTitle title={"Projects"}/>
                <ul className="mt-6 md:mt-16">
                    {projects.map((project, index) => (
                        <Link key={index} href={`/project/${project.id}`} className="block text-2xl md:text-5xl mb-4 md:mb-16"> {project.title}
                            <div className="mt-2 md:mt-3 w-full h-[2px] bg-black/60"></div>
                        </Link>
                    ))}
                </ul>
            </div>
        </section>
    )
}