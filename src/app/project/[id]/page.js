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
import {SquareImage} from "@/app/project/SquareImage";
import { projects } from "@/app/data/data";

export default function ProjectPage() {
    const params = useParams();

    const section = useRef(null);
    const contentSection = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
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
        });
    }, []);
    return (
        <section className="flex flex-col items-center text-white">
            <Template color={"white"}/>
            <ProjectHeader text={projects[params.id].title} img={projects[params.id].cover}/>
            <div ref={section} className={"flex flex-col md:gap-32 mt-20 items-center w-full z-10"}>
                <Overview date={projects[params.id].date} desc={projects[params.id].description} techno={projects[params.id].technologies} github={projects[params.id].github}/>
                <div ref={contentSection} className={"md:container max-md:pb-16 md:pt-30"}>
                    <Index skills={projects[params.id].skills}/>
                    <div className={"flex max-md:flex-col md:gap-40 items-center mb-20 md:mb-44"}>
                        <SquareImage src={projects[params.id].img1}/>
                        <Paragraph>
                            {projects[params.id].explication1}
                        </Paragraph>
                    </div>
                    <div className={"flex max-md:flex-col-reverse md:justify-end md:gap-40 items-center mb-20 md:mb-44"}>
                        <Paragraph>
                            {projects[params.id].explication2}
                        </Paragraph>
                        <SquareImage src={projects[params.id].img2}/>
                    </div>
                    <div className={"flex max-md:flex-col md:gap-40 items-center mb-16"}>
                        <SquareImage src={projects[params.id].img3}/>
                        <Paragraph>
                            {projects[params.id].explication3}
                        </Paragraph>
                    </div>
                    <div className="animate-bounce font-marbry w-fit mx-auto text-4xl md:text-6xl">↑</div>
                </div>
                <BottomPreview id={params.id}/>
            </div>
        </section>
    );
}

function Paragraph({children}) {
    const paragraph = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            gsap.to(paragraph.current, {
                scrollTrigger: {
                    trigger: paragraph.current,
                    start: "top 90%",
                    scrub: 1,
                },
                y: -40,
            });
        });
    });
    return (
        <p ref={paragraph} className={"font-marbry md:text-3xl p-4 max-w-xl"}>{children}</p>
    )
}