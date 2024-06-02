import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/data/data";

export default function BottomPreviem({ id }) {
    const totalProjects = projects.length;
    const prevProjectId = (id - 1 + totalProjects) % totalProjects;
    const nextProjectId = (id + 1) % totalProjects;

    return (
        <div className="flex w-full">
            <Link href={`/project/${prevProjectId}`}
                  className="group relative overflow-hidden flex flex-col items-center justify-center text-black w-1/2 aspect-square border-r-2 border-black">
                <div className="relative z-20 overflow-hidden text-center">
                    <div className="md:group-hover:-translate-y-full transition-transform duration-500 uppercase leading-10 text-xl mb-2">
                        précédent
                    </div>
                    <p className="md:group-hover:-translate-y-2 md:group-hover:text-white transition-transform duration-500 text-4xl md:text-7xl">
                        {projects[prevProjectId].title}
                    </p>
                    <div className="absolute bottom-0 -left-full md:group-hover:translate-x-full transition-transform duration-500 w-full h-1 bg-white"></div>
                </div>
                <div className="absolute md:group-hover:opacity-0 transition-opacity duration-500 z-10 top-0 w-full h-full md:bg-white"></div>
                <Image className="absolute md:group-hover:scale-110 transition-transform duration-500 object-cover w-full h-full"
                       src={projects[prevProjectId].cover} width={1000} height={1000} alt="random" />
            </Link>
            <Link href={`/project/${nextProjectId}`}
                  className="group relative overflow-hidden flex flex-col items-center justify-center text-black w-1/2 aspect-square">
                <div className="relative z-20 overflow-hidden text-center">
                    <div className="md:group-hover:-translate-y-full transition-transform duration-500 uppercase leading-10 text-xl mb-2">
                        suivant
                    </div>
                    <p className="md:group-hover:-translate-y-2 md:group-hover:text-white transition-transform duration-500 text-4xl md:text-7xl">
                        {projects[nextProjectId].title}
                    </p>
                    <div className="absolute bottom-0 -left-full md:group-hover:translate-x-full transition-transform duration-500 w-full h-1 bg-white"></div>
                </div>
                <div className="absolute md:group-hover:opacity-0 transition-opacity duration-500 z-10 top-0 w-full h-full md:bg-white"></div>
                <Image className="absolute md:group-hover:scale-110 transition-transform duration-500 object-cover w-full h-full"
                       src={projects[nextProjectId].cover} width={1000} height={1000} alt="random" />
            </Link>
        </div>
    );
}
