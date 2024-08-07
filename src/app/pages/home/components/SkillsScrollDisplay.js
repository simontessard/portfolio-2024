"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollDownButton from "@/app/components/Buttons/ScrollDownButton";
import {BigTitle} from "@/app/components/BigTitle";
import {skills} from "@/app/data/skills";

// https://www.youtube.com/watch?v=PeFqGrEHnp0&ab_channel=IvanSmiths
export default function SkillsScrollDisplay() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const instruction = useRef(null);
    const scrollDownButton = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const tl = gsap.timeline({paused: true});
        tl.to(scrollDownButton.current, {
            duration: 1,
            y : 50
        });

        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-300vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                },
                onComplete: () => {
                    tl.restart();
                }
            }
        );

        return () => {
            pin.kill();
        };
    }, []);

    return (
        <section className="overflow-hidden text-white text-6xl">
            <div ref={triggerRef} className={"relative"}>
                <div className={"absolute top-12 w-full"}>
                    <div className={"container max-md:w-full max-md:flex max-md:justify-center md:mt-6"}>
                        <BigTitle title="Compétences"/>
                    </div>
                </div>
                <div ref={instruction} className={"absolute text-sm uppercase flex justify-center w-full bottom-20 overflow-hidden"}>
                    <div ref={scrollDownButton}>
                        <ScrollDownButton text="Scrollez pour découvrir"/>
                    </div>
                </div>
                <ul ref={sectionRef} className="h-dvh w-[400vw] flex relative md:mt-12">
                    {skills.map((skill, index) => (
                        <li key={index} className="h-dvh w-dvw flex justify-center items-center">
                            <div className={`relative h-[30dvh] md:h-[40dvh] flex flex-col justify-between p-4 md:p-8 w-[86vw] md:w-[60vw] ${skill.color}`}>
                                <div className="self-end">
                                    <svg className={"size-20 md:size-28"} viewBox="0 0 138 138" fill="none">
                                        <path fillRule="evenodd" fill="#1C1C1C"
                                              d="M3.01609e-06 1.90813e-06L5.20275e-06 34.5L69 69L1.50804e-06 103.5L0 138L69 103.5V138L138 103.5V69V34.5L69 0V34.5L3.01609e-06 1.90813e-06ZM69 34.5V69V103.5L138 69L69 34.5Z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-5xl mb-3 md:mb-4">{skill.title}</h3>
                                    <p className={"text-sm md:text-2xl"}>{skill.description}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}