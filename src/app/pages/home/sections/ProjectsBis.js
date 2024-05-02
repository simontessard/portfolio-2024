"use client";
import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { projects } from "@/app/data/data";
import {Project} from "@/app/pages/home/cards/Project";

export function ProjectsBis() {
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)")
            const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")

            gsap.set(photos, {yPercent:101})

            const allPhotos = gsap.utils.toArray(".desktopPhoto")

            let mm = gsap.matchMedia();

            mm.add("(min-width: 600px)", () => {

                console.log("desktop")

                ScrollTrigger.create({
                    trigger:".gallery",
                    start:"top top",
                    end:"bottom bottom",
                    pin:".right"
                })

                //create scrolltrigger for each details section
                //trigger photo animation when headline of each details section
                //reaches 80% of window height
                details.forEach((detail, index)=> {

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
        return () => ctx.revert(); // <-- CLEANUP!
    }, []);
    return (
        <section className={"w-full"}>
            <div className="gallery flex">
                <div className="left md:w-1/2">
                    <div className="desktopContent max-md:hidden mr-auto w-4/5 text-white">
                        {projects.map((project, index) => (
                            <div className="desktopContentSection min-h-dvh flex flex-col justify-center">
                                <h1 className={"md:text-6xl mb-4"}>{project.title}</h1>
                                <p className={"md:text-lg md:mb-20"}>Red is a color often associated with strong emotions such as
                                    passion, love, and
                                    anger.
                                    It's a bold and attention-grabbing color that can evoke feelings of excitement,
                                    warmth,
                                    and energy.</p>
                                <div className="flex gap-4">
                                    {project.technologies.map((tagItem, index) => (
                                        <span key={index}
                                              className="w-fit bg-white text-black text-xs pt-2.5 pb-1.5 px-3">{tagItem}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="right md:h-dvh md:w-1/2 flex flex-col justify-center">

                    <div className="mobileContent md:hidden grid gap-6">
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

                    <div className="desktopPhotos max-md:hidden relative w-[40vw] h-[40vw] overflow-hidden">
                        {projects.map((project, index) => (
                            <div className={`desktopPhoto absolute flex flex-col p-8 w-full h-full ${project.color}`}>
                                <span className="font-marbry font-light text-5xl self-end">↗</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}