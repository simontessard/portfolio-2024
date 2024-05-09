"use client"
import { useParams } from "next/navigation";
import Template from "@/app/utils/PageTransition";
import {useLayoutEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import BottomPreview from "@/app/project/BottomPreview";
import Index from "@/app/project/Description";
import ProjectHeader from "@/app/project/ProjectHeader";
import {Overview} from "@/app/project/Overview";

export default function ProjectPage() {
    const params = useParams();

    const section = useRef(null);
    const contentSection = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl2 = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: section.current,
                    start: "top 60%",
                    scrub: 1,
                },
            }
        );
        tl2.to(contentSection.current, {
            y: -150,
        }, 0);
    }, []);
    return (
        <section className="flex flex-col items-center text-white">
            <Template/>
            <ProjectHeader/>
            <div ref={section} className={"flex flex-col gap-12 mt-20 items-center w-full z-10"}>
                <Overview/>
                <div ref={contentSection} className={"py-16 md:py-30"}>
                    <Index/>
                    <div className={"mt-20 flex max-md:flex-col gap-8 md:gap-20 items-center md:mb-40"}>
                        <div className={"overflow-hidden w-full h-full aspect-square"}>
                            <img
                                className={"aspect-square max-md:mx-auto max-w-xs h-auto md:max-w-lg object-cover md:hover:scale-100 scale-110 " +
                                    "transition-transform duration-500 w-full mb-8"}
                                src="https://picsum.photos/1900/1100" alt="random"/>
                        </div>
                        <p className={"font-marbry md:text-2xl p-4 max-w-xl"}>Suspendisse potenti. Quisque
                            vel
                            molestie felis,
                            eget viverra velit
                            Mauris ac pretium purus, ac convallis lectus. Donec ut elit magna. Vestibulum turpis turpis.
                        </p>
                    </div>
                    <div className={"flex max-md:flex-col gap-8 md:gap-20 items-center"}>
                        <p className={"font-marbry md:text-2xl p-4 md:text-right max-w-xl"}>Suspendisse potenti. Quisque
                            vel
                            molestie felis,
                            eget viverra velit
                            Mauris ac pretium purus, ac convallis lectus. Donec ut elit magna. Vestibulum turpis turpis.
                        </p>
                        <div className={"overflow-hidden w-full h-full aspect-square"}>
                            <img
                                className={"aspect-square max-md:mx-auto max-w-xs h-auto md:max-w-lg object-cover md:hover:scale-100 scale-110 transition-transform duration-500 w-full mb-8"}
                                src="https://picsum.photos/1800/1100" alt="random"/>
                        </div>
                    </div>
                </div>
                <BottomPreview id={params.id}/>
            </div>
        </section>
    );
}