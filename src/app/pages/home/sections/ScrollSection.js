"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollDownButton from "@/app/components/Buttons/ScrollDownButton";
import {BigTitle} from "@/app/components/BigTitle";

// https://www.youtube.com/watch?v=PeFqGrEHnp0&ab_channel=IvanSmiths
function ScrollSection() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const instruction = useRef(null);
    const scrollDownButton = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
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
        const tl = gsap.timeline({paused: true});
        tl.to(scrollDownButton.current, {
            duration: 1,
            y : 50
        });

        return () => {
            {/* A return function for killing the animation on component unmount */ }
            pin.kill();
        };
    }, []);

    const skills = [
        {
            title: 'Front-end',
            color : 'bg-blue-800'
        },
        {
            title: 'Back-end',
            color : 'bg-green-800'
        },
        {
            title: 'Full-stack',

        },
        {
            title: 'DevOps',
        }];

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
                                className={`relative h-[30dvh] md:h-[40dvh] flex flex-col justify-between p-4 md:p-8 w-[80vw] md:w-[60vw] ${skill.color ? skill.color : 'bg-purple-500'}`}>
                                <div className="self-end">
                                    <svg className={"size-16 md:size-20"} viewBox="0 0 138 138" fill="none">
                                        <path fillRule="evenodd" fill="#1C1C1C"
                                              d="M3.01609e-06 1.90813e-06L5.20275e-06 34.5L69 69L1.50804e-06 103.5L0 138L69 103.5V138L138 103.5V69V34.5L69 0V34.5L3.01609e-06 1.90813e-06ZM69 34.5V69V103.5L138 69L69 34.5Z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-5xl mb-2">{skill.title}</h3>
                                    <p className={"text-sm md:text-2xl"}>HTML - CSS - Javascript</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ScrollSection;