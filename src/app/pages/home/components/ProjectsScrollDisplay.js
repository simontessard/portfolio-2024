"use client";
import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { projects } from "@/app/data/data";
import Link from "next/link";
import ProjectsMobileDisplay from "@/app/pages/home/components/ProjectsMobileDisplay";

export function ProjectsScrollDisplay() {
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const detailsNoFirstChild = gsap.utils.toArray(".desktopContentSection:not(:first-child)")
            const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)")
            const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")

            gsap.set(photos, {yPercent:101})

            const allPhotos = gsap.utils.toArray(".desktopPhoto")

            let mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {

                ScrollTrigger.create({
                    trigger:".gallery",
                    start:"top top",
                    end:"bottom bottom",
                    pin:".right"
                })

                //  create scrolltrigger for each details section
                //  trigger photo animation when headline of each details section
                //  reaches 80% of window height
                detailsNoFirstChild.forEach((detail, index)=> {

                    let headline = detail.querySelector("h1")
                    let animation = gsap.timeline()
                        .to(photos[index], {yPercent:0})
                        .set(allPhotos[index], {autoAlpha:0})
                    ScrollTrigger.create({
                        trigger:headline,
                        start:"top 80%",
                        end:"top 50%",
                        animation:animation,
                        scrub:true,
                        markers:false
                    })
                })
            });
        });
        return () => ctx.revert();
    }, []);
    return (
        <section className={"w-full"}>
            <div className="gallery flex">
                <div className="left md:w-1/2">
                    <ul className="desktopContent max-md:hidden mr-auto w-4/5 text-white">
                        {projects.map((project, index) => (
                            <li className="desktopContentSection min-h-dvh flex flex-col justify-center">
                                <h1 className={"md:text-6xl mb-4"}>{project.title}</h1>
                                <p className={"mb-12"}>{project.date}</p>
                                <p className={"md:text-lg md:mb-20"}>{project.description}</p>
                                <div className={"flex justify-between items-end py-0.5 gap-4"}>
                                    <div className="flex gap-4">
                                        {project.technologies.map((tagItem, index) => (
                                            <span key={index}
                                                  className="w-fit border border-white text-white text-xs pt-2.5 pb-1.5 px-3">{tagItem}</span>
                                        ))}
                                    </div>
                                    <Link href={`/project/${project.id}`}
                                          className={"group relative shrink-0 bg-white leading-none pt-2.5 pb-2 px-5 text-black md:hover:text-white transition-colors duration-500 uppercase overflow-hidden"}>
                                        <span className="relative z-10">Voir plus</span>
                                        <span className="relative z-10 ml-2 text-xl md:text-xl font-marbry">↗</span>
                                        <div className={`absolute -bottom-24 left-0 md:group-hover:-translate-y-full transition-transform duration-500 w-full h-24 ${project.color}`}></div>
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="right md:h-dvh md:w-1/2 flex flex-col justify-center">

                    <ProjectsMobileDisplay/>

                    <div className="group max-md:hidden relative w-[40vw] h-[40vw] overflow-hidden">
                        {projects.map((project, index) => (
                            <Link href={`/project/${project.id}`} className={`desktopPhoto absolute flex flex-col w-full h-full ${project.color}`}>
                                <img className={"w-full h-full object-cover"} src={project.cover} alt={project.title}/>
                                <div className="absolute w-full h-full bg-black/15"></div>
                            </Link>
                        ))}
                        <span className="absolute right-10 top-10 font-marbry font-light text-5xl self-end
                        md:group-hover:translate-x-1 md:group-hover:-translate-y-1 transition-transform">↗</span>
                    </div>
                </div>
            </div>
        </section>
    );
}