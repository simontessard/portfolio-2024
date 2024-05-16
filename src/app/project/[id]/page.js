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
            <ProjectHeader text={projects[params.id].title}/>
            <div ref={section} className={"flex flex-col gap-12 mt-20 items-center w-full z-10"}>
                <Overview/>
                <div ref={contentSection} className={"container py-16 md:py-30"}>
                    <Index/>
                    <div className={"flex max-md:flex-col gap-8 md:gap-40 items-center mt-20 md:mt-36 md:mb-40"}>
                        <SquareImage src={"https:/picsum.photos/1900/1600"}/>
                        <Paragraph>
                            Suspendisse potenti. Quisque vel molestie felis, eget viverra velit
                            Mauris ac pretium purus, ac convallis lectus. Donec ut elit magna. Vestibulum turpis turpis
                        </Paragraph>
                    </div>
                    <div className={"flex max-md:flex-col gap-8 md:gap-40 items-center"}>
                        <Paragraph>
                            Suspendisse potenti. Quisque vel molestie felis, eget viverra velit
                            Mauris ac pretium purus, ac convallis lectus. Donec ut elit magna. Vestibulum turpis turpis
                        </Paragraph>
                        <SquareImage src={"https:/picsum.photos/1800/1600"}/>
                    </div>
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
                y: -50,
            });
        });
    });
    return (
        <p ref={paragraph} className={"font-marbry md:text-3xl p-4 max-w-xl"}>{children}</p>
    )
}