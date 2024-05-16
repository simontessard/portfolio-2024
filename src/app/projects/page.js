"use client";
import {gsap} from "gsap";
import {useLayoutEffect, useRef} from "react";
import { projects } from "@/app/data/data";
import {BigTitle} from "@/app/components/BigTitle";
import Link from "next/link";
import Template from "@/app/utils/PageTransition";
import GoBackButton from "@/app/components/Buttons/GoBackButton";

export default function ProjectsPage() {

    useLayoutEffect( () => {
        let ctx = gsap.context(() => {
            let mm = gsap.matchMedia();

            mm.add("(min-width: 800px)", () => {
                const projectsProject = document.querySelectorAll('.projects-project');
                const cursor = document.querySelector(".cursor");
                const cursorMedias = document.querySelectorAll(".cursor__media");

                gsap.set(cursor, {
                    xPercent: -50,
                    yPercent: -80,
                    scale: 0
                });

                const setCursorX = gsap.quickTo(cursor, "x", { duration: 0.6, ease: "expo"});
                const setCursorY = gsap.quickTo(cursor, "y", { duration: 0.6, ease: "expo"});

                window.addEventListener("mousemove", (e) => {
                    setCursorX(e.pageX);
                    setCursorY(e.pageY);
                });

                const tl = gsap.timeline({paused: true});

                tl.to(cursor, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    ease: "expo.inOut"
                });

                projectsProject.forEach((navLink, i) => {
                    navLink.addEventListener("mouseover", () => {
                        cursorMedias[i].classList.remove("opacity-0");
                        tl.play();
                    });
                });

                projectsProject.forEach((navLink, i) => {
                    navLink.addEventListener("mouseout", () => {
                        tl.reverse();
                        cursorMedias[i].classList.add("opacity-0");
                    });
                });
            });
        });
        return () => ctx.revert();
    }, []);
    return (
        <section className="max-md:px-4 py-16 md:py-24 bg-white text-black">
            <Template/>
            <div className="container flex flex-col mb-6 md:mb-12">
                <GoBackButton/>
                <BigTitle title={"Projects"}/>
                <ul className="z-10 mt-6 md:mt-16">
                    {projects.map((project, index) => (
                        <Link key={index} href={`/project/${project.id}`}
                              className="projects-project group block text-2xl md:text-5xl pt-12 md:pt-16">
                            <div className="flex items-end justify-between">
                                {project.title}
                                <span className="md:group-hover:-translate-y-1 md:group-hover:translate-x-1 transition-transform mr-2 text-3xl md:text-5xl font-marbry">↗</span>
                            </div>
                            <div className="mt-2 md:mt-3 w-full h-[2px] bg-black/60"></div>
                        </Link>
                    ))}
                </ul>
                <div className="cursor fixed z-0 top-0 left-0 size-72 opacity-0 pointer-events-none">
                    {projects.map((project, index) => (
                        <img className={"cursor__media opacity-0 absolute w-full h-full object-cover"} src={project.cover} alt={project.title}/>
                    ))}
                </div>
            </div>
        </section>
    )
}