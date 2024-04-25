"use client";
import {BigTitle} from "@/app/components/BigTitle";
import GithubButton from "@/app/components/Buttons/GithubButton";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useLayoutEffect, useRef} from "react";

export default function About(){
    const text = useRef(null);
    const square = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let mm = gsap.matchMedia();

        // Desktop setup
        mm.add("(min-width: 800px)", () => {
            gsap.to([text.current], {
                scrollTrigger: {
                    trigger: text.current,
                    start: "bottom bottom",
                    scrub: 1,
                },
                y: -100,
            });
        });

        // Mobile setup
        mm.add("(max-width: 799px)", () => {
            gsap.to([text.current], {
                scrollTrigger: {
                    trigger: text.current,
                    start: "bottom bottom",
                    scrub: 1,
                },
                y: -30,
            });
        });

    });
    return (
        <section className="js-section_about bg-white py-16 md:py-24">
            <div className={"container flex flex-col max-md:px-4"}>
                <BigTitle title="à_propos" color={"black"}/>
                <div className={"self-end mb-12"}>
                    <GithubButton/>
                </div>
            </div>
            <div className="relative bg-white md:py-20 flex items-center justify-between">
                <div ref={square} className="size-72 md:size-[34rem] bg-black"></div>
                <p ref={text} className="absolute max-w-2xl md:ml-12 p-8 text-white md:text-3xl mix-blend-difference">
                    Lorem ipsum dolor sit amet consectetur. Eget at sodales suspendisse
                    integer. Aliquam viverra purus gravida lectus tincidunt ridiculus elementum ut.
                </p>
            </div>
        </section>
    )
}