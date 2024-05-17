"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollDownButton from "@/app/components/Buttons/ScrollDownButton";
import {BigTitle} from "@/app/components/BigTitle";
import {skills} from "@/app/data/skills";

// https://www.youtube.com/watch?v=PeFqGrEHnp0&ab_channel=IvanSmiths
function SkillsScrollDisplay() {
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
            {/* A return function for killing the animation on component unmount */ }
            pin.kill();
        };
    }, []);

    return (
        <section className="overflow-hidden text-white text-6xl">
            {/* The section up act just as a wrapper. If the trigger (below) is the
                first jsx element in the component, you get an error on route change */}
            {/* The div below act just as a trigger. As the doc suggests, the trigger and
                the animation should alway be two separated refs */}
            <div ref={triggerRef} className={"relative"}>
                <div className={"absolute top-12 w-full"}>
                    <div className={"container max-md:w-full max-md:flex max-md:justify-center"}>
                        <BigTitle title="Skills"/>
                    </div>
                </div>
                <div ref={instruction} className={"absolute text-sm uppercase flex justify-center w-full bottom-20 overflow-hidden"}>
                    <div ref={scrollDownButton}>
                        <ScrollDownButton/>
                    </div>
                </div>
                <div ref={sectionRef} className="h-dvh w-[400vw] flex relative md:mt-12">
                    {skills.map((skill, index) => (
                        <div key={index} className="h-dvh w-dvw flex justify-center items-center">
                            <a href="#"
                                className={`relative h-[30dvh] md:h-[40dvh] flex flex-col justify-between p-4 md:p-8 w-[86vw] md:w-[60vw] bg-gradient-to-r from-${skill.color ? skill.color : 'purple'}-800 to-${skill.color ? skill.color : 'purple'}-700`}>
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
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsScrollDisplay;