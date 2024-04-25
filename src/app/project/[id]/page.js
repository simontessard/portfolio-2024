"use client"
import { useParams } from "next/navigation";
import Template from "@/app/utils/PageTransition";
import {useLayoutEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Button} from "@/app/components/Buttons/Button";
import BottomPreview from "@/app/project/BottomPreview";
import Index from "@/app/project/Description";
import ProjectHeader from "@/app/project/ProjectHeader";

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
                <div className={"bg-white w-full px-4 mb-32"}>
                    <div className={"container flex flex-col items-center justify-between text-black py-8"}>
                        <div className={"flex justify-between w-full mb-8"}>
                            <span className={"font-bold text-black rounded"}>ID : {params.id}</span>
                            <Button text={"SEE LIVE APP"} href={"/"}/>
                        </div>
                        <ul className={"flex gap-8 w-full text-white md:text-4xl font-marbry"}>
                            <li className={"bg-black w-fit px-6 pt-4 pb-3.5"}>Angular</li>
                            <li className={"bg-black w-fit px-6 pt-4 pb-3.5"}>Tailwind</li>
                        </ul>
                    </div>
                </div>
                <div ref={contentSection}>
                    <Index/>
                    <div className={"mt-20 flex max-md:flex-col gap-8 md:gap-20 items-center md:mb-40"}>
                        <div className={"overflow-hidden w-full h-full aspect-square"}>
                            <img
                                className={"aspect-square max-w-lg object-cover md:hover:scale-100 scale-110 transition-transform duration-500 w-full h-full mb-8"}
                                src="https://picsum.photos/1900/1100" alt="random"/>
                        </div>
                        <p className={"font-marbry md:text-2xl p-4 text-center max-w-xl"}>Suspendisse potenti. Quisque
                            vel
                            molestie felis,
                            eget viverra velit
                            Mauris ac pretium purus, ac convallis lectus. Donec ut elit magna. Vestibulum turpis turpis.
                        </p>
                    </div>
                    <div className={"flex max-md:flex-col gap-8 md:gap-20 items-center"}>
                        <p className={"font-marbry md:text-2xl p-4 text-center max-w-xl"}>Suspendisse potenti. Quisque
                            vel
                            molestie felis,
                            eget viverra velit
                            Mauris ac pretium purus, ac convallis lectus. Donec ut elit magna. Vestibulum turpis turpis.
                        </p>
                        <div className={"overflow-hidden w-full h-full aspect-square"}>
                            <img
                                className={"aspect-square max-w-lg object-cover md:hover:scale-100 scale-110 transition-transform duration-500 w-full h-full mb-8"}
                                src="https://picsum.photos/1800/1100" alt="random"/>
                        </div>
                    </div>
                </div>
                <BottomPreview id={params.id}/>
            </div>
        </section>
    );
}